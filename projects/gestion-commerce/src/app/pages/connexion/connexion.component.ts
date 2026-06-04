import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule],
  template: `
<div style="min-height:100vh;background:linear-gradient(135deg,#1a4a3a 0%,#0d2e24 100%);display:flex;align-items:center;justify-content:center;padding:20px;position:relative;overflow:hidden;">
  <div style="position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop') center/cover no-repeat;opacity:.14;pointer-events:none;"></div>
  <div style="background:#fff;border-radius:22px;width:420px;max-width:100%;box-shadow:0 24px 64px rgba(0,0,0,.4);overflow:hidden;position:relative;z-index:1;">

    <div style="background:linear-gradient(135deg,#1a4a3a,#0d2e24);padding:34px;text-align:center;">
      <div style="width:68px;height:68px;background:linear-gradient(135deg,#27ae60,#1e8449);border-radius:18px;display:grid;place-items:center;font-size:32px;margin:0 auto 16px;box-shadow:0 4px 16px rgba(0,0,0,.25);">🛒</div>
      <div style="font-size:10px;color:rgba(255,255,255,.5);letter-spacing:2.5px;font-weight:800;text-transform:uppercase;margin-bottom:6px;">BIZMASTER ERP</div>
      <div style="font-size:22px;font-weight:900;color:#fff;letter-spacing:.5px;">Gestion Commerce</div>
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
            style="border:1.5px solid #e3e8f0;border-radius:10px;padding:11px 14px;font-size:13px;background:#f8f9fb;color:#444;outline:none;" />
        </div>
        <div style="display:flex;flex-direction:column;gap:5px;">
          <label style="font-size:11px;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:.5px;">Mot de passe</label>
          <input type="password" [value]="password()" (input)="password.set($any($event.target).value)" (keydown.enter)="login()"
            placeholder="••••••••"
            style="border:1.5px solid #e3e8f0;border-radius:10px;padding:11px 14px;font-size:13px;outline:none;" />
        </div>
        <button (click)="login()"
          style="background:linear-gradient(135deg,#27ae60,#1e8449);color:#fff;border:none;border-radius:11px;padding:13px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 4px 12px rgba(39,174,96,.35);">
          Se connecter →
        </button>
      </div>

      <div style="margin-top:22px;font-size:12px;color:#9aa5b4;line-height:1.6;">
        Utilisez l'email et le mot de passe de votre compte BizMaster. Par défaut, vous pouvez utiliser <strong>owner@bizmaster.com</strong> / <strong>Password123!</strong> pour un accès administratif.
      </div>
    </div>
  </div>
</div>
  `
})
export class ConnexionComponent {
  private readonly store = inject(CollabStoreService);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  email = signal('');
  password = signal('');
  error = signal('');

  constructor() {
    const existing = this.store.currentUser();
    if (existing) { this.router.navigate(['/dashboard']); }
  }

  async login() {
    this.error.set('');
    if (!this.email()) {
      this.error.set('Veuillez saisir une adresse email.');
      return;
    }
    if (!this.password()) {
      this.error.set('Veuillez saisir un mot de passe.');
      return;
    }

    try {
      await this.authService.login(this.email(), this.password());
      const role = this.store.currentUser()?.role ?? 'owner';
      const dest: Record<string, string> = {
        owner: '/dashboard',
        employee: '/produits',
        hr: '/produits',
        accountant: '/factures'
      };
      this.router.navigate([dest[role] ?? '/dashboard']);
    } catch (error) {
      this.error.set('Connexion impossible. Vérifiez vos identifiants.');
    }
  }
}
