import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';
import { decodeInvite } from '../../utils/invite';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule],
  template: `
<div style="min-height:100vh;background:linear-gradient(135deg,#3a2a1a 0%,#1e1509 100%);display:flex;align-items:center;justify-content:center;padding:20px;position:relative;overflow:hidden;">
  <div style="position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&auto=format&fit=crop') center/cover no-repeat;opacity:.16;pointer-events:none;"></div>
  <div style="background:#fff;border-radius:22px;width:420px;max-width:100%;box-shadow:0 24px 64px rgba(0,0,0,.4);overflow:hidden;position:relative;z-index:1;">

    <div style="background:linear-gradient(135deg,#3a2a1a,#1e1509);padding:34px;text-align:center;">
      <div style="width:68px;height:68px;background:linear-gradient(135deg,#e67e22,#d35400);border-radius:18px;display:grid;place-items:center;font-size:32px;margin:0 auto 16px;box-shadow:0 4px 16px rgba(0,0,0,.25);">🏗️</div>
      <div style="font-size:10px;color:rgba(255,255,255,.5);letter-spacing:2.5px;font-weight:800;text-transform:uppercase;margin-bottom:6px;">BIZMASTER ERP</div>
      <div style="font-size:22px;font-weight:900;color:#fff;letter-spacing:.5px;">Gestion Construction</div>
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

      @if (hasInvite()) {
        <div style="display:flex;flex-direction:column;gap:15px;">
          <div style="display:flex;flex-direction:column;gap:5px;">
            <label style="font-size:11px;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:.5px;">Adresse email</label>
            <input type="email" [value]="email()" readonly
              style="border:1.5px solid #e3e8f0;border-radius:10px;padding:11px 14px;font-size:13px;background:#f8f9fb;color:#444;outline:none;cursor:not-allowed;" />
          </div>
          <div style="display:flex;flex-direction:column;gap:5px;">
            <label style="font-size:11px;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:.5px;">Mot de passe</label>
            <input type="password" [value]="password()" (input)="password.set($any($event.target).value)" (keydown.enter)="login()"
              placeholder="••••••••"
              style="border:1.5px solid #e3e8f0;border-radius:10px;padding:11px 14px;font-size:13px;outline:none;" />
          </div>
          <button (click)="login()"
            style="background:linear-gradient(135deg,#e67e22,#d35400);color:#fff;border:none;border-radius:11px;padding:13px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 4px 12px rgba(230,126,34,.35);">
            Se connecter →
          </button>
        </div>
      } @else {
        <div style="text-align:center;padding:24px 0;">
          <div style="font-size:52px;margin-bottom:14px;">🔗</div>
          <p style="color:#444;font-size:14px;font-weight:600;margin-bottom:8px;">Lien d'invitation requis</p>
          <p style="color:#8a9ab0;font-size:12px;line-height:1.6;">Utilisez le lien d'invitation fourni<br/>par votre administrateur.</p>
        </div>
      }

      <a href="http://localhost:4200" style="display:block;margin-top:22px;text-align:center;color:#9aa5b4;font-size:12px;text-decoration:none;">← Retour à BIZMASTER</a>
    </div>
  </div>
</div>
  `
})
export class ConnexionComponent {
  private store = inject(CollabStoreService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  email      = signal('');
  password   = signal('');
  error      = signal('');
  companyName = signal('');
  hasInvite  = signal(false);

  private pendingPayload: ReturnType<typeof decodeInvite> = undefined;

  constructor() {
    const existing = this.store.currentUser();
    if (existing) { this.redirectByRole(existing.role); return; }
    const token = this.route.snapshot.queryParamMap.get('invite');
    if (token) this.processInvite(token);
  }

  private processInvite(token: string) {
    const payload = decodeInvite(token);
    if (!payload) { this.error.set('Lien d\'invitation invalide ou expiré.'); return; }
    this.pendingPayload = payload;
    this.email.set(payload.user.email);
    this.companyName.set(payload.company.name);
    this.hasInvite.set(true);
  }

  login() {
    this.error.set('');
    if (!this.pendingPayload) { this.error.set('Lien d\'invitation manquant.'); return; }
    if (!this.password()) { this.error.set('Veuillez saisir votre mot de passe.'); return; }
    if (this.password() !== this.pendingPayload.password) {
      this.error.set('Mot de passe incorrect.'); return;
    }
    this.store.hydrateFromInvite(this.pendingPayload);
    this.redirectByRole(this.pendingPayload.user.role);
  }

  private redirectByRole(role: string) {
    const dest: Record<string, string> = {
      owner: '/dashboard', employee: '/devis', hr: '/personnel', accountant: '/comptabilite'
    };
    this.router.navigate([dest[role] ?? '/dashboard']);
  }
}
