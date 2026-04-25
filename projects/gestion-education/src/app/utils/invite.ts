import type { CompanyData, Role } from '../services/collab-store.service';

export interface InvitePayloadV1 {
  v: 1; domain: 'gestion-education'; issuedAt: string;
  mode: 'centralized' | 'collaborative'; company: CompanyData;
  user: { role: Role; name: string; email: string }; password: string;
}

function b64e(b: Uint8Array): string {
  let s=''; for(let i=0;i<b.length;i++) s+=String.fromCharCode(b[i]);
  return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/g,'');
}
function b64d(i: string): Uint8Array {
  const b=i.replace(/-/g,'+').replace(/_/g,'/'), p=b+'==='.slice((b.length+3)%4), s=atob(p);
  const a=new Uint8Array(s.length); for(let i=0;i<s.length;i++) a[i]=s.charCodeAt(i); return a;
}

export function encodeInvite(p: InvitePayloadV1): string { return b64e(new TextEncoder().encode(JSON.stringify(p))); }

export function decodeInvite(raw: string): InvitePayloadV1 | undefined {
  try {
    const p = JSON.parse(new TextDecoder().decode(b64d(raw.trim()))) as InvitePayloadV1;
    if (!p || p.v !== 1 || !p.company || !p.user) return undefined;
    return p;
  } catch { return undefined; }
}

export function extractInviteTokenFromText(text: string): string | undefined {
  const t=text.trim(); if(!t) return undefined;
  try { return new URL(t).searchParams.get('invite')??undefined; } catch { return t; }
}
