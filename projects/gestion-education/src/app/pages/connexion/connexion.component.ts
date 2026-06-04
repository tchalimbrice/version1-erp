import { Component, signal, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CollabStoreService } from '../../services/collab-store.service';
import { decodeInvite } from '../../utils/invite';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    .wrap { min-height:100vh; display:flex; align-items:center; justify-content:center; padding:20px; position:relative; overflow:hidden; background:linear-gradient(135deg,#1a3a5c 0%,#0d2137 100%); }
    .bg-img { position:absolute; inset:0; background:url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&auto=format&fit=crop') center/cover no-repeat; opacity:.18; }
    .card { position:relative; z-index:1; background:#fff; border-radius:20px; width:460px; max-width:100%; box-shadow:0 24px 64px rgba(0,0,0,.4); overflow:hidden; }
    .card__header { background:linear-gradient(135deg,#1a3a5c,#0d2137); padding:32px; text-align:center; }
    .card__sub  { font-size:11px; color:rgba(255,255,255,.45); letter-spacing:2px; font-weight:700; text-transform:uppercase; margin-bottom:4px; }
    .card__name { font-size:20px; font-weight:800; color:#fff; }
    .card__company { margin-top:8px; font-size:13px; color:rgba(255,255,255,.6); }
    .card__welcome { margin-top:10px; font-size:14px; color:rgba(255,255,255,.8); font-weight:600; }
    .card__role { font-size:12px; color:rgba(255,255,255,.55); margin-top:4px; }
    .card__body { padding:28px 32px; }
    .error { background:#fdecea; color:#c0392b; border-radius:10px; padding:10px 14px; font-size:13px; margin-bottom:16px; }
    .field { display:flex; flex-direction:column; gap:5px; margin-bottom:14px; }
    .label { font-size:11px; font-weight:700; color:#555; text-transform:uppercase; letter-spacing:.4px; }
    .input { border:1.5px solid #e3e8f0; border-radius:9px; padding:10px 13px; font-size:13px; outline:none; transition:border-color .15s; }
    .input:focus { border-color:#1a3a5c; }
    .input[readonly] { background:#f7f9fc; color:#666; }
    .btn-main { background:linear-gradient(135deg,#f39c12,#e67e22); color:#fff; border:none; border-radius:10px; padding:12px; font-size:14px; font-weight:700; cursor:pointer; width:100%; margin-bottom:10px; }
    .link-back { display:block; margin-top:16px; text-align:center; color:#8a9ab0; font-size:13px; text-decoration:none; }
    .link-back:hover { color:#1a3a5c; }
  `],
  template: `
<div class="wrap">
  <div class="bg-img"></div>
  <div class="card">
    <div class="card__header">
      <div class="card__sub">BIZMASTER ERP</div>
      <div class="card__name">Gestion Éducation</div>
      @if (companyName()) { <div class="card__company">{{ companyName() }}</div> }
      @if (collaboratorName()) {
        <div class="card__welcome">Bienvenue, {{ collaboratorName() }}</div>
        <div class="card__role">{{ collaboratorRole() }}</div>
      }
    </div>
    <div class="card__body">
      @if (error()) { <div class="error">{{ error() }}</div> }

      <div class="field">
        <label class="label">Email</label>
        <input class="input" type="email" [value]="email()" (input)="email.set($any($event.target).value)"
          [readonly]="hasInvite()" placeholder="votre@email.ci" />
      </div>
      <div class="field">
        <label class="label">Mot de passe</label>
        <input class="input" type="password" [value]="password()" (input)="password.set($any($event.target).value)"
          (keydown.enter)="login()" placeholder="••••••••" />
      </div>
      <button class="btn-main" (click)="login()">Se connecter</button>

      <a href="http://localhost:4200" class="link-back">← Retour à BIZMASTER</a>
    </div>
  </div>
</div>
  `
})
export class ConnexionComponent {
  readonly store   = inject(CollabStoreService);
  private readonly router = inject(Router);
  private readonly route  = inject(ActivatedRoute);

  email            = signal('');
  password         = signal('');
  error            = signal('');
  companyName      = signal(this.store.company()?.name ?? '');
  collaboratorName = signal('');
  collaboratorRole = signal('');
  hasInvite        = signal(false);

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
    this.collaboratorName.set(payload.user.name);
    this.collaboratorRole.set(this.roleFr(payload.user.role));
    this.hasInvite.set(true);
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
      this.error.set('Aucune entreprise configurée. Utilisez votre lien d\'invitation pour la première connexion.');
      return;
    }
    if (this.email() !== company.email) { this.error.set('Email incorrect.'); return; }
    if (this.password() !== company.adminPassword) { this.error.set('Mot de passe incorrect.'); return; }
    this.store.hydrateFromInvite({
      company,
      mode: this.store.mode() ?? 'centralized',
      user: { role: 'owner', name: company.name, email: company.email }
    });
    this.redirectByRole('owner');
  }

  private roleFr(role: string): string {
    const map: Record<string, string> = {
      owner: 'Directeur', hr: 'Secrétaire', accountant: 'Comptable', employee: 'Surveillant'
    };
    return map[role] ?? role;
  }

  private redirectByRole(role: string) {
    const dest: Record<string, string> = {
      owner: '/dashboard', hr: '/notes', accountant: '/paiements', employee: '/absences'
    };
    this.router.navigate([dest[role] ?? '/dashboard']);
  }
}
