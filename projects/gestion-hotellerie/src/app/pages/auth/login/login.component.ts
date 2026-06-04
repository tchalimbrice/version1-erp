import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CollabStoreService } from '../../../services/collab-store.service';
import { decodeInvite } from '../../../utils/invite';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
<div style="min-height:100vh;background:linear-gradient(135deg,#2c1a5c 0%,#160d2e 100%);display:flex;align-items:center;justify-content:center;padding:20px;position:relative;overflow:hidden;">
  <div style="position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1455587734955-081b22074882?w=1600&auto=format&fit=crop') center/cover no-repeat;opacity:.16;pointer-events:none;"></div>
  <div style="background:#fff;border-radius:22px;width:420px;max-width:100%;box-shadow:0 24px 64px rgba(0,0,0,.4);overflow:hidden;position:relative;z-index:1;">

    <div style="background:linear-gradient(135deg,#2c1a5c,#160d2e);padding:34px;text-align:center;">
      <div style="width:68px;height:68px;background:linear-gradient(135deg,#f39c12,#d68910);border-radius:18px;display:grid;place-items:center;font-size:32px;margin:0 auto 16px;box-shadow:0 4px 16px rgba(0,0,0,.25);">🏨</div>
      <div style="font-size:10px;color:rgba(255,255,255,.5);letter-spacing:2.5px;font-weight:800;text-transform:uppercase;margin-bottom:6px;">BIZMASTER ERP</div>
      <div style="font-size:22px;font-weight:900;color:#fff;letter-spacing:.5px;">Gestion Hôtellerie</div>
      @if (companyName()) {
        <div style="margin-top:10px;font-size:13px;color:rgba(255,255,255,.65);font-weight:500;">{{ companyName() }}</div>
      }
    </div>

    <div style="padding:30px 34px;">
      @if (error()) {
        <div style="background:#fdecea;color:#c0392b;border:1px solid #f5c6cb;border-radius:10px;padding:11px 15px;font-size:13px;margin-bottom:18px;display:flex;align-items:center;gap:8px;">
          <span>⚠️</span><span>{{ error() }}</span>
        </div>
      }

      <div style="display:flex;flex-direction:column;gap:15px;">
        <div style="display:flex;flex-direction:column;gap:5px;">
          <label style="font-size:11px;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:.5px;">Adresse email</label>
          <input type="email" [value]="email()" (input)="email.set($any($event.target).value)"
            placeholder="votre@email.ci"
            style="border:1.5px solid #e3e8f0;border-radius:10px;padding:11px 14px;font-size:13px;outline:none;transition:border-color .15s;" />
        </div>
        <div style="display:flex;flex-direction:column;gap:5px;">
          <label style="font-size:11px;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:.5px;">Mot de passe</label>
          <input type="password" [value]="password()" (input)="password.set($any($event.target).value)" (keydown.enter)="login()"
            placeholder="••••••••"
            style="border:1.5px solid #e3e8f0;border-radius:10px;padding:11px 14px;font-size:13px;outline:none;" />
        </div>
        <button (click)="login()"
          style="background:linear-gradient(135deg,#f39c12,#d68910);color:#fff;border:none;border-radius:11px;padding:13px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 4px 12px rgba(243,156,18,.35);">
          Se connecter →
        </button>
      </div>

      <a href="http://localhost:4200" style="display:block;margin-top:22px;text-align:center;color:#9aa5b4;font-size:12px;text-decoration:none;">← Retour à BIZMASTER</a>
    </div>
  </div>
</div>
  `
})
export class LoginComponent {
  private store = inject(CollabStoreService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  email       = signal('');
  password    = signal('');
  error       = signal('');
  companyName = signal(this.store.company()?.name ?? '');

  private pendingPayload: ReturnType<typeof decodeInvite> = undefined;

  constructor() {
    const token       = this.route.snapshot.queryParamMap.get('invite');
    const authVerified = this.route.snapshot.queryParamMap.get('auth') === '1';
    if (token && authVerified) {
      const payload = decodeInvite(token);
      if (payload) { this.store.hydrateFromInvite(payload); this.redirectByRole(payload.user.role); return; }
    }
    if (token) { this.processInvite(token); return; }
    const existing = this.store.currentUser();
    if (existing) { this.redirectByRole(existing.role); }
  }

  private processInvite(token: string) {
    const payload = decodeInvite(token);
    if (!payload) { this.error.set('Lien d\'invitation invalide ou expiré.'); return; }
    this.pendingPayload = payload;
    this.email.set(payload.user.email);
    this.companyName.set(payload.company.name);
  }

  login() {
    this.error.set('');
    if (!this.email()) { this.error.set('Veuillez saisir votre email.'); return; }
    if (!this.password()) { this.error.set('Veuillez saisir votre mot de passe.'); return; }

    if (this.pendingPayload) {
      if (this.email() !== this.pendingPayload.user.email) { this.error.set('Email incorrect.'); return; }
      if (this.password() !== this.pendingPayload.password) { this.error.set('Mot de passe incorrect.'); return; }
      this.store.hydrateFromInvite(this.pendingPayload);
      this.redirectByRole(this.pendingPayload.user.role);
      return;
    }

    const company = this.store.company();
    if (!company) {
      this.error.set('Aucune entreprise configurée. Accédez via BIZMASTER pour votre première connexion.');
      return;
    }
    if (this.email() !== company.email) { this.error.set('Email incorrect.'); return; }
    if (this.password() !== company.adminPassword) { this.error.set('Mot de passe incorrect.'); return; }
    this.store.setCurrentUser({ role: 'owner', name: company.name, email: company.email });
    this.redirectByRole('owner');
  }

  private redirectByRole(role: string) {
    const dest: Record<string, string> = {
      owner: '/dashboard', employee: '/reservations',
      hr: '/employes', accountant: '/facturation', receptionist: '/accueil-reception'
    };
    this.router.navigate([dest[role] ?? '/dashboard']);
  }
}
