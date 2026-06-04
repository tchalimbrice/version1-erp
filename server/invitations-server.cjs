const express = require('express');

const app = express();
const PORT = Number(process.env.PORT || 8080);
const MAILTRAP_API_TOKEN = process.env.MAILTRAP_API_TOKEN || 'a5439fdbea2db07ca78aeac31dcaf3c7';
const MAILTRAP_FROM_EMAIL = process.env.MAILTRAP_FROM_EMAIL || 'noreply@bizmaster.local';
const MAILTRAP_FROM_NAME = process.env.MAILTRAP_FROM_NAME || 'BizMaster';

const invitations = new Map();

app.use(express.json({ limit: '1mb' }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

function jsonError(res, status, message, extra = {}) {
  return res.status(status).json({ success: false, message, ...extra });
}

function extractInviteToken(url) {
  if (!url || typeof url !== 'string') {
    return '';
  }

  try {
    const parsed = new URL(url);
    return parsed.searchParams.get('invite') || '';
  } catch {
    return '';
  }
}

function upsertInvitation(record) {
  const token = extractInviteToken(record.url);
  const stored = {
    token,
    role: record.role || 'owner',
    name: record.name || '',
    email: record.email || '',
    url: record.url || '',
    password: record.password || '',
    status: 'pending',
    createdAt: new Date().toISOString(),
    sentAt: null,
    acceptedAt: null
  };

  if (token) {
    invitations.set(token, stored);
  }

  return stored;
}

function buildMailHtml({ companyName, recipientName, role, url, isOwner, password }) {
  const title = isOwner ? 'Votre espace BizMaster est prêt' : `Invitation BizMaster - ${role}`;
  const intro = isOwner
    ? `Bonjour ${recipientName || 'chef d\'entreprise'}, votre lien principal est prêt.`
    : `Bonjour ${recipientName || 'collaborateur'}, vous avez été invité à rejoindre ${companyName || 'BizMaster'}.`;

  const passwordSection = (!isOwner && password)
    ? `
      <p style="font-size:15px;line-height:1.7;margin:0 0 18px;">
        Voici votre mot de passe provisoire pour vous connecter : 
        <strong style="font-size:16px;background:#f3f4f6;padding:4px 8px;border-radius:6px;font-family:monospace;">${password}</strong>
      </p>
    `
    : '';

  return `
    <div style="font-family:Arial,sans-serif;background:#f6f8fc;padding:24px;color:#1f2937;">
      <div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:28px;">
        <div style="font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#2563eb;">BizMaster</div>
        <h1 style="font-size:24px;line-height:1.2;margin:12px 0 16px;">${title}</h1>
        <p style="font-size:15px;line-height:1.7;margin:0 0 18px;">${intro}</p>
        ${passwordSection}
        <p style="font-size:15px;line-height:1.7;margin:0 0 22px;">
          Cliquez sur le bouton ci-dessous pour ouvrir votre interface.
        </p>
        <p style="margin:0 0 24px;">
          <a href="${url}" style="display:inline-block;background:#2563eb;color:#fff;text-decoration:none;font-weight:700;padding:12px 20px;border-radius:10px;">Ouvrir mon espace</a>
        </p>
        <p style="font-size:12px;color:#6b7280;word-break:break-all;margin:0;">
          Si le bouton ne fonctionne pas, utilisez ce lien : ${url}
        </p>
      </div>
    </div>
  `;
}

let cachedInboxId = null;

async function getSandboxInboxId() {
  if (cachedInboxId) return cachedInboxId;
  if (!MAILTRAP_API_TOKEN) {
    throw new Error('MAILTRAP_API_TOKEN manquant');
  }

  try {
    // 1. Get Accounts
    const accountsRes = await fetch('https://mailtrap.io/api/accounts', {
      headers: { 'Authorization': `Bearer ${MAILTRAP_API_TOKEN}` }
    });
    if (!accountsRes.ok) throw new Error(`Accounts API returned HTTP ${accountsRes.status}`);
    const accounts = await accountsRes.json();
    if (!Array.isArray(accounts) || accounts.length === 0) {
      throw new Error('No Mailtrap accounts found');
    }
    const accountId = accounts[0].id;

    // 2. Get Inboxes
    const inboxesRes = await fetch(`https://mailtrap.io/api/accounts/${accountId}/inboxes`, {
      headers: { 'Authorization': `Bearer ${MAILTRAP_API_TOKEN}` }
    });
    if (!inboxesRes.ok) throw new Error(`Inboxes API returned HTTP ${inboxesRes.status}`);
    const inboxes = await inboxesRes.json();
    if (!Array.isArray(inboxes) || inboxes.length === 0) {
      throw new Error('No Mailtrap inboxes found');
    }
    
    cachedInboxId = inboxes[0].id;
    console.log(`[invitations] Selected Mailtrap Sandbox Inbox ID: ${cachedInboxId}`);
    return cachedInboxId;
  } catch (err) {
    console.warn('[invitations] Failed to fetch sandbox inbox ID dynamically, using fallback 4682706:', err.message);
    return '4682706';
  }
}

async function sendMailtrapEmail({ email, name, subject, text, html }) {
  if (!MAILTRAP_API_TOKEN) {
    throw new Error('MAILTRAP_API_TOKEN manquant');
  }

  const inboxId = await getSandboxInboxId();
  const url = `https://sandbox.api.mailtrap.io/api/send/${inboxId}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${MAILTRAP_API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: {
        email: MAILTRAP_FROM_EMAIL,
        name: MAILTRAP_FROM_NAME
      },
      to: [
        {
          email,
          name
        }
      ],
      subject,
      text,
      html
    })
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data?.success === false) {
    const details = Array.isArray(data?.errors) && data.errors.length > 0 ? data.errors.join(', ') : `HTTP ${response.status}`;
    throw new Error(details);
  }

  return data;
}

app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    service: 'bizmaster-invitations',
    mailtrapConfigured: !!MAILTRAP_API_TOKEN
  });
});

app.post('/api/invitations/send', async (req, res) => {
  try {
    const owner = req.body?.owner;
    const invitationsInput = Array.isArray(req.body?.invitations) ? req.body.invitations : [];

    if (!owner?.email || !owner?.url) {
      return jsonError(res, 400, 'Le destinataire propriétaire est invalide.');
    }

    if (invitationsInput.length === 0) {
      return jsonError(res, 400, 'Aucune invitation à envoyer.');
    }

    const ownerRecord = upsertInvitation({
      role: 'owner',
      name: owner.name || '',
      email: owner.email,
      url: owner.url
    });

    const collaboratorRecords = invitationsInput.map((invitation) => {
      if (!invitation?.email || !invitation?.url) {
        throw new Error('Une invitation collaborateur est incomplète.');
      }

      return upsertInvitation({
        role: invitation.role || 'collaborator',
        name: invitation.name || '',
        email: invitation.email,
        url: invitation.url,
        password: invitation.password || ''
      });
    });

    const companyName = owner.name || 'BizMaster';
    const messages = [
      {
        email: ownerRecord.email,
        name: ownerRecord.name || companyName,
        subject: `Votre lien BizMaster - ${companyName}`,
        text: `Bonjour ${ownerRecord.name || 'chef d\'entreprise'},\n\nVotre espace est prêt. Ouvrez votre interface ici : ${ownerRecord.url}\n`,
        html: buildMailHtml({
          companyName,
          recipientName: ownerRecord.name,
          role: 'owner',
          url: ownerRecord.url,
          isOwner: true
        })
      },
      ...collaboratorRecords.map((record) => ({
        email: record.email,
        name: record.name,
        subject: `Invitation BizMaster - ${companyName}`,
        text: `Bonjour ${record.name || 'collaborateur'},\n\nVous avez été invité à rejoindre ${companyName}.\nVotre mot de passe provisoire : ${record.password || ''}\nOuvrez votre espace ici : ${record.url}\n`,
        html: buildMailHtml({
          companyName,
          recipientName: record.name,
          role: record.role,
          url: record.url,
          isOwner: false,
          password: record.password || ''
        })
      }))
    ];

    const deliveryResults = await Promise.all(messages.map((message) => sendMailtrapEmail(message)));

    const sentAt = new Date().toISOString();
    ownerRecord.status = 'sent';
    ownerRecord.sentAt = sentAt;
    collaboratorRecords.forEach((record) => {
      record.status = 'sent';
      record.sentAt = sentAt;
    });

    return res.json({
      success: true,
      sentAt,
      owner: ownerRecord,
      invitations: collaboratorRecords,
      mailtrap: deliveryResults
    });
  } catch (error) {
    console.error('[invitations] send failed', error);
    return jsonError(res, 502, error.message || 'Impossible d\'envoyer les invitations.');
  }
});

app.get('/api/invitations/token/:token', (req, res) => {
  const record = invitations.get(req.params.token);
  if (!record) {
    return jsonError(res, 404, 'Invitation introuvable.');
  }

  return res.json({ success: true, invitation: record });
});

app.post('/api/invitations/accept', (req, res) => {
  const token = req.body?.invitationToken || '';
  const password = req.body?.password || '';
  const confirmPassword = req.body?.confirmPassword || '';

  if (!token) {
    return jsonError(res, 400, 'Token manquant.');
  }

  if (!password || password !== confirmPassword) {
    return jsonError(res, 400, 'Les mots de passe ne correspondent pas.');
  }

  const record = invitations.get(token);
  if (!record) {
    return jsonError(res, 404, 'Invitation introuvable.');
  }

  record.status = 'accepted';
  record.acceptedAt = new Date().toISOString();

  return res.json({
    success: true,
    message: 'Invitation acceptée.',
    invitation: record
  });
});

app.listen(PORT, () => {
  console.log(`BizMaster invitations API listening on http://localhost:${PORT}`);
  if (!MAILTRAP_API_TOKEN) {
    console.log('MAILTRAP_API_TOKEN is not set. Email sending will fail until it is configured.');
  }
});
