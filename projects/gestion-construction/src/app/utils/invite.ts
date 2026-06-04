import type { CompanyData, Role } from '../services/collab-store.service';

export type InviteDomain = 'gestion-construction';

export interface InviteUser { role: Role; name: string; email: string; }

export interface InvitePayloadV1 {
  v: 1;
  domain: InviteDomain;
  issuedAt: string;
  mode: 'centralized' | 'collaborative';
  company: CompanyData;
  user: InviteUser;
  password: string;
}

function base64UrlEncodeBytes(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  const base64 = btoa(binary);
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlDecodeToBytes(input: string): Uint8Array {
  const base64 = input.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64 + '==='.slice((base64.length + 3) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

export function encodeInvite(payload: InvitePayloadV1): string {
  const json = JSON.stringify(payload);
  const bytes = new TextEncoder().encode(json);
  return base64UrlEncodeBytes(bytes);
}

export function decodeInvite(raw: string): InvitePayloadV1 | undefined {
  try {
    const bytes = base64UrlDecodeToBytes(raw.trim());
    const json = new TextDecoder().decode(bytes);
    const parsed = JSON.parse(json) as InvitePayloadV1;
    if (!parsed || parsed.v !== 1 || parsed.domain !== 'gestion-construction') return undefined;
    if (!parsed.company || !parsed.user || !parsed.mode) return undefined;
    return parsed;
  } catch { return undefined; }
}

export function buildInviteLink(token: string, baseUrl: string): string {
  const root = baseUrl.replace(/\/$/, '');
  return `${root}/connexion?invite=${encodeURIComponent(token)}`;
}

export function extractInviteTokenFromText(text: string): string | undefined {
  const trimmed = text.trim();
  if (!trimmed) return undefined;
  try {
    const asUrl = new URL(trimmed);
    const invite = asUrl.searchParams.get('invite');
    return invite ?? undefined;
  } catch { return trimmed; }
}
