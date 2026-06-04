import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CollabStoreService, Role } from '../../services/collab-store.service';

interface InvitePayload {
  v: number; domain: string; mode: 'centralized' | 'collaborative';
  company: { name: string; email: string; adminPassword: string; address: string; phone: string };
  user: { role: Role; name: string; email: string };
  password: string;
}

const HOME_FOR_ROLE: Record<string, string> = {
  owner: '/dashboard', employee: '/stock', accountant: '/commandes',
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<div style="min-height:100vh;background:linear-gradient(135deg,#1a0a0a 0%,#2d1010 100%);display:flex;align-items:center;justify-content:center;padding:20px;">
  <div style="background:#fff;border-radius:24px;width:420px;max-width:100%;box-shadow:0 32px 80px rgba(0,0,0,.5);overflow:hidden;">
    <div style="background:linear-gradient(135deg,#2d1010,#1a0a0a);padding:36px;text-align:center;">
      <div style="width:56px;height:56px;background:linear-gradient(135deg,#e05252,#c0392b);border-radius:16px;display:grid;place-items:center;font-size:22px;font-weight:900;color:#fff;margin:0 auto 14px;">&#9650;</div>
      <div style="font-size:10px;color:rgba(255,255,255,.5);letter-spacing:2px;font-weight:800;text-transform:uppercase;margin-bottom:6px;">BIZMASTER ERP</div>
      <div style="font-size:21px;font-weight:900;color:#fff;">RestoManager</div>
      @if (companyName()) {
        <div style="margin-top:6px;font-size:13px;color:rgba(255,255,255,.6);">{{ companyName() }}</div>
      }
    </div>
    <div style="padding:28px 36px 36px;">
      @if (invite()) {
        <div style="background:#fff5f5;border:1px solid #fca5a5;border-radius:12px;padding:12px 16px;margin-bottom:20px;text-align:center;">
          <div style="font-size:15px;font-weight:800;color:#1a0a0a;">{{ invite()!.user.name }}</div>
          <div style="font-size:11px;font-weight:700;color:#e05252;text-transform:uppercase;letter-spacing:.5px;margin-top:3px;">{{ roleFr(invite()!.user.role) }}</div>
        </div>
      }
      @if (error()) {
        <div style="background:#fdecea;color:#c0392b;border-radius:10px;padding:11px 15px;font-size:13px;margin-bottom:18px;">{{ error() }}</div>
      }
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div>
          <label style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:4px;">Email</label>
          <input type="email" [(ngModel)]="emailVal" [readOnly]="!!invite()"
            [style.background]="invite() ? '#f8f9fa' : '#fff'"
            placeholder="votre@email.ci"
            style="border:1.5px solid #e3e8f0;border-radius:10px;padding:11px 14px;font-size:14px;outline:none;width:100%;box-sizing:border-box;" />
        </div>
        <div>
          <label style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:4px;">Mot de passe</label>
          <input type="password" [(ngModel)]="passwordVal" placeholder="••••••••" (keydown.enter)="login()"
            style="border:1.5px solid #e3e8f0;border-radius:10px;padding:11px 14px;font-size:14px;outline:none;width:100%;box-sizing:border-box;" />
        </div>
        <button (click)="login()" style="background:linear-gradient(135deg,#e05252,#c0392b);color:#fff;border:none;border-radius:12px;padding:14px;font-size:15px;font-weight:800;cursor:pointer;margin-top:4px;">
          Se connecter
        </button>
      </div>
      <a href="http://localhost:4200" style="display:block;margin-top:20px;text-align:center;color:#9aa5b4;font-size:12px;text-decoration:none;">&#8592; Retour à BIZMASTER</a>
    </div>
  </div>
</div>
  `
})
export class LoginComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route  = inject(ActivatedRoute);
  private readonly store  = inject(CollabStoreService);

  invite      = signal<InvitePayload | null>(null);
  emailVal    = '';
  passwordVal = '';
  error       = signal('');
  companyName = signal('');

  ngOnInit() {
    const token  = this.route.snapshot.queryParamMap.get('invite');
    const isAuth = this.route.snapshot.queryParamMap.get('auth') === '1';
    if (token) {
      const payload = this.decodeToken(token);
      if (payload) {
        this.invite.set(payload);
        this.emailVal = payload.user.email;
        this.companyName.set(payload.company.name);
        if (isAuth) {
          this.store.hydrateFromInvite(payload);
          this.router.navigate([HOME_FOR_ROLE[payload.user.role] ?? '/dashboard']);
          return;
        }
      }
    }
    const existing = this.store.currentUser();
    if (existing) { this.router.navigate([HOME_FOR_ROLE[existing.role] ?? '/dashboard']); }
  }

  login() {
    this.error.set('');
    const inv = this.invite();
    if (!inv) { this.error.set('Utilisez votre lien d\'invitation.'); return; }
    if (this.emailVal !== inv.user.email) { this.error.set('Email incorrect.'); return; }
    if (this.passwordVal !== inv.password) { this.error.set('Mot de passe incorrect.'); return; }
    this.store.hydrateFromInvite(inv);
    this.router.navigate([HOME_FOR_ROLE[inv.user.role] ?? '/dashboard']);
  }

  roleFr(role: string): string {
    const map: Record<string, string> = { owner: 'Chef d\'entreprise', employee: 'Manager', accountant: 'Caissier' };
    return map[role] ?? role;
  }

  private decodeToken(raw: string): InvitePayload | undefined {
    try {
      const base64 = raw.trim().replace(/-/g, '+').replace(/_/g, '/');
      const padded  = base64 + '==='.slice((base64.length + 3) % 4);
      const binary  = atob(padded);
      const bytes   = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      return JSON.parse(new TextDecoder().decode(bytes)) as InvitePayload;
    } catch { return undefined; }
  }
}
