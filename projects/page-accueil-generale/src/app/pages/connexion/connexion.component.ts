import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface InvitePayload {
  v: number;
  domain: string;
  mode: 'centralized' | 'collaborative';
  company: { name: string; email: string; adminPassword: string; address: string; phone: string };
  user: { role: string; name: string; email: string };
  password: string;
}

const DOMAIN_PORTS: Record<string, number> = {
  'gestion-construction':  4204,
  'gestion-education':     4206,
  'gestion-logistique':    4205,
  'gestion-hotellerie':    4400,
  'gestion-restauration':  4208,
  'gestion-commerce':      4207,
  'gestion-de-ferme':      4201,
  'gestion-sante':         4203,
  'transport':             4202,
};

const DOMAIN_LABELS: Record<string, string> = {
  'gestion-construction':  'BTP Manager',
  'gestion-education':     'EduManager',
  'gestion-logistique':    'LogiManager',
  'gestion-hotellerie':    'HôtelManager',
  'gestion-restauration':  'RestoManager',
  'gestion-commerce':      'CommerceManager',
  'gestion-de-ferme':      'FermeManager',
  'gestion-sante':         'SantéManager',
  'transport':             'TransportManager',
};

const ROLE_LABELS: Record<string, string> = {
  owner:        'Directeur / Propriétaire',
  employee:     'Employé',
  hr:           'Responsable RH',
  accountant:   'Comptable',
  receptionist: 'Réceptionniste',
};

@Component({
  selector: 'app-connexion-centrale',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<div style="min-height:100vh;background:linear-gradient(135deg,#1e3a5c 0%,#0d1f33 100%);display:flex;align-items:center;justify-content:center;padding:20px;position:relative;overflow:hidden;">
  <div style="position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop') center/cover no-repeat;opacity:.1;pointer-events:none;"></div>
  <div style="background:#fff;border-radius:24px;width:440px;max-width:100%;box-shadow:0 32px 80px rgba(0,0,0,.45);overflow:hidden;position:relative;z-index:1;">
    <div style="background:linear-gradient(135deg,#1e3a5c,#0d1f33);padding:36px 36px 28px;text-align:center;">
      <div style="width:56px;height:56px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);border-radius:16px;display:grid;place-items:center;font-size:22px;font-weight:900;color:#fff;margin:0 auto 14px;box-shadow:0 4px 16px rgba(0,0,0,.25);">B</div>
      <div style="font-size:10px;color:rgba(255,255,255,.5);letter-spacing:2.5px;font-weight:800;text-transform:uppercase;margin-bottom:6px;">BIZMASTER ERP</div>
      <div style="font-size:21px;font-weight:900;color:#fff;">{{ domainLabel() || 'Connexion' }}</div>
      @if (companyName()) {
        <div style="margin-top:8px;font-size:13px;color:rgba(255,255,255,.6);">{{ companyName() }}</div>
      }
    </div>
    <div style="padding:28px 36px 36px;">
      @if (hasInvite()) {
        <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:12px;padding:14px 16px;margin-bottom:20px;text-align:center;">
          <div style="font-size:16px;font-weight:800;color:#1e3a5c;">{{ collaboratorName() }}</div>
          <div style="font-size:11px;font-weight:700;color:#3b82f6;text-transform:uppercase;letter-spacing:.5px;margin-top:3px;">{{ roleLabel() }}</div>
        </div>
      }
      @if (error()) {
        <div style="background:#fdecea;color:#c0392b;border-radius:10px;padding:11px 15px;font-size:13px;margin-bottom:18px;display:flex;align-items:center;gap:8px;">
          <span>⚠️</span><span>{{ error() }}</span>
        </div>
      }
      <div style="display:flex;flex-direction:column;gap:15px;">
        <div style="display:flex;flex-direction:column;gap:5px;">
          <label style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:.5px;">Adresse email</label>
          <input type="email" [value]="email()" (input)="email.set($any($event.target).value)"
            [readOnly]="hasInvite()"
            [style.background]="hasInvite() ? '#f8f9fa' : '#fff'"
            [style.cursor]="hasInvite() ? 'not-allowed' : 'text'"
            [style.color]="hasInvite() ? '#6b7280' : '#111'"
            placeholder="votre@email.ci"
            style="border:1.5px solid #e3e8f0;border-radius:10px;padding:11px 14px;font-size:14px;outline:none;width:100%;box-sizing:border-box;"
            (keydown.enter)="login()" />
        </div>
        <div style="display:flex;flex-direction:column;gap:5px;">
          <label style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:.5px;">Mot de passe</label>
          <input type="password" [value]="password()" (input)="password.set($any($event.target).value)"
            (keydown.enter)="login()" placeholder="••••••••"
            style="border:1.5px solid #e3e8f0;border-radius:10px;padding:11px 14px;font-size:14px;outline:none;width:100%;box-sizing:border-box;" />
        </div>
        <button (click)="login()"
          style="background:linear-gradient(135deg,#3b82f6,#1d4ed8);color:#fff;border:none;border-radius:12px;padding:14px;font-size:15px;font-weight:800;cursor:pointer;box-shadow:0 4px 14px rgba(59,130,246,.3);margin-top:4px;">
          Se connecter →
        </button>
      </div>
      <a href="/" style="display:block;margin-top:22px;text-align:center;color:#9aa5b4;font-size:12px;text-decoration:none;">← Retour à BIZMASTER</a>
    </div>
  </div>
</div>
  `
})
export class ConnexionCentraleComponent {
  private readonly route = inject(ActivatedRoute);

  email            = signal('');
  password         = signal('');
  error            = signal('');
  companyName      = signal('');
  collaboratorName = signal('');
  domainLabel      = signal('');
  roleLabel        = signal('');
  hasInvite        = signal(false);

  private pendingPayload: InvitePayload | undefined;
  private rawToken = '';

  constructor() {
    const token = this.route.snapshot.queryParamMap.get('invite');
    if (token) { this.rawToken = token; this.processInvite(token); }
  }

  private processInvite(token: string) {
    const payload = this.decodeToken(token);
    if (!payload) { this.error.set("Lien d'invitation invalide ou corrompu."); return; }
    this.pendingPayload = payload;
    this.email.set(payload.user.email);
    this.companyName.set(payload.company.name);
    this.collaboratorName.set(payload.user.name);
    this.domainLabel.set(DOMAIN_LABELS[payload.domain] ?? payload.domain);
    this.roleLabel.set(ROLE_LABELS[payload.user.role] ?? payload.user.role);
    this.hasInvite.set(true);
  }

  login() {
    this.error.set('');
    if (!this.email()) { this.error.set('Veuillez saisir votre email.'); return; }
    if (!this.password()) { this.error.set('Veuillez saisir votre mot de passe.'); return; }

    if (this.pendingPayload) {
      if (this.email() !== this.pendingPayload.user.email) { this.error.set('Email incorrect.'); return; }
      if (this.password() !== this.pendingPayload.password) { this.error.set('Mot de passe incorrect.'); return; }
      const port = DOMAIN_PORTS[this.pendingPayload.domain];
      if (!port) { this.error.set('Domaine non reconnu.'); return; }
      // Redirect to domain app — auth=1 signals auto-login (no re-entry of password)
      window.location.href = `http://localhost:${port}/connexion?invite=${this.rawToken}&auth=1`;
      return;
    }

    this.error.set("Aucun lien d'invitation chargé. Utilisez le lien reçu pour accéder à votre espace.");
  }

  private decodeToken(raw: string): InvitePayload | undefined {
    try {
      const base64 = raw.trim().replace(/-/g, '+').replace(/_/g, '/');
      const padded  = base64 + '==='.slice((base64.length + 3) % 4);
      const binary  = atob(padded);
      const bytes   = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      const parsed = JSON.parse(new TextDecoder().decode(bytes)) as InvitePayload;
      if (!parsed || parsed.v !== 1 || !parsed.company || !parsed.user || !parsed.mode) return undefined;
      return parsed;
    } catch { return undefined; }
  }
}
