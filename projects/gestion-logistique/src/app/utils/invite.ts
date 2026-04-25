import type { CompanyData, Role } from '../services/collab-store.service';

export type InviteDomain = 'gestion-logistique';
export interface InviteUser { role: Role; name: string; email: string; }
export interface InvitePayloadV1 {
  v: 1; domain: InviteDomain; issuedAt: string;
  mode: 'centralized' | 'collaborative'; company: CompanyData; user: InviteUser; password: string;
}

function b64UrlEncode(bytes: Uint8Array): string {
  let bin = ''; for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/g,'');
}
function b64UrlDecode(input: string): Uint8Array {
  const b64 = input.replace(/-/g,'+').replace(/_/g,'/');
  const pad = b64 + '==='.slice((b64.length+3)%4);
  const bin = atob(pad); const bytes = new Uint8Array(bin.length);
  for (let i=0;i<bin.length;i++) bytes[i] = bin.charCodeAt(i); return bytes;
}

export function encodeInvite(payload: InvitePayloadV1): string {
  return b64UrlEncode(new TextEncoder().encode(JSON.stringify(payload)));
}

export function decodeInvite(raw: string): InvitePayloadV1 | undefined {
  try {
    const parsed = JSON.parse(new TextDecoder().decode(b64UrlDecode(raw.trim()))) as InvitePayloadV1;
    if (!parsed || parsed.v !== 1 || parsed.domain !== 'gestion-logistique') return undefined;
    if (!parsed.company || !parsed.user || !parsed.mode) return undefined;
    return parsed;
  } catch { return undefined; }
}

export function extractInviteTokenFromText(text: string): string | undefined {
  const t = text.trim(); if (!t) return undefined;
  try { const u = new URL(t); return u.searchParams.get('invite') ?? undefined; }
  catch { return t; }
}
