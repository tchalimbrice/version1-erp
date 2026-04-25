import { Component, signal, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CollabStoreService } from '../../services/collab-store.service';
import { decodeInvite, extractInviteTokenFromText } from '../../utils/invite';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    .wrap { min-height:100vh; display:flex; align-items:center; justify-content:center; padding:20px; position:relative; overflow:hidden; background:linear-gradient(135deg,#1a3a5c 0%,#0d2137 100%); }
    .bg-img { position:absolute; inset:0; background:url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&auto=format&fit=crop') center/cover no-repeat; opacity:.18; }
    .card { position:relative; z-index:1; background:#fff; border-radius:20px; width:460px; max-width:100%; box-shadow:0 24px 64px rgba(0,0,0,.4); overflow:hidden; }
    .card__header { background:linear-gradient(135deg,#1a3a5c,#0d2137); padding:32px; text-align:center; }
    .card__logo { width:64px; height:64px; background:linear-gradient(135deg,#f39c12,#e67e22); border-radius:16px; display:grid; place-items:center; font-size:30px; margin:0 auto 14px; display:none; }
    .card__sub  { font-size:11px; color:rgba(255,255,255,.45); letter-spacing:2px; font-weight:700; text-transform:uppercase; margin-bottom:4px; }
    .card__name { font-size:20px; font-weight:800; color:#fff; }
    .card__company { margin-top:8px; font-size:13px; color:rgba(255,255,255,.6); }
    .card__body { padding:28px 32px; }
    .error { background:#fdecea; color:#c0392b; border-radius:10px; padding:10px 14px; font-size:13px; margin-bottom:16px; }
    .field { display:flex; flex-direction:column; gap:5px; margin-bottom:14px; }
    .label { font-size:11px; font-weight:700; color:#555; text-transform:uppercase; letter-spacing:.4px; }
    .input { border:1.5px solid #e3e8f0; border-radius:9px; padding:10px 13px; font-size:13px; outline:none; transition:border-color .15s; }
    .input:focus { border-color:#1a3a5c; }
    .textarea { border:1.5px solid #e3e8f0; border-radius:9px; padding:10px 13px; font-size:13px; outline:none; resize:vertical; font-family:monospace; transition:border-color .15s; }
    .textarea:focus { border-color:#1a3a5c; }
    .btn-main { background:linear-gradient(135deg,#f39c12,#e67e22); color:#fff; border:none; border-radius:10px; padding:12px; font-size:14px; font-weight:700; cursor:pointer; width:100%; margin-bottom:10px; }
    .btn-back { background:none; border:none; color:#8a9ab0; font-size:13px; cursor:pointer; width:100%; text-align:center; padding:4px; }
    .btn-back:hover { color:#1a3a5c; }
    .link-back { display:block; margin-top:16px; text-align:center; color:#8a9ab0; font-size:13px; text-decoration:none; }
    .link-back:hover { color:#1a3a5c; }
  `],
  template: `
<div class="wrap">
  <div class="bg-img"></div>
  <div class="card">
    <div class="card__header">
      <div class="card__logo">🏫</div>
      <div class="card__sub">BIZMASTER ERP</div>
      <div class="card__name">Gestion Éducation</div>
      @if (companyName()) { <div class="card__company">{{ companyName() }}</div> }
    </div>
    <div class="card__body">
      @if (error()) { <div class="error">{{ error() }}</div> }

      @if (step() === 'invite') {
        <div class="field">
          <label class="label">Lien unique d'accès</label>
          <textarea class="textarea" [value]="inviteText()" (input)="inviteText.set($any($event.target).value)"
            rows="4" placeholder="Collez votre lien d'invitation ici…"></textarea>
        </div>
        <button class="btn-main" (click)="parseInvite()">Accéder à l'espace</button>
      }

      @if (step() === 'login') {
        <div class="field">
          <label class="label">Email</label>
          <input class="input" type="email" [value]="email()" (input)="email.set($any($event.target).value)" placeholder="votre@email.ci" />
        </div>
        <div class="field">
          <label class="label">Mot de passe</label>
          <input class="input" type="password" [value]="password()" (input)="password.set($any($event.target).value)"
            (keydown.enter)="login()" placeholder="••••••••" />
        </div>
        <button class="btn-main" (click)="login()">Se connecter</button>
        <button class="btn-back" (click)="step.set('invite')">← Retour au lien d'accès</button>
      }

      <a href="http://localhost:4200" class="link-back">← Retour à BIZMASTER</a>
    </div>
  </div>
</div>
  `
})
export class ConnexionComponent {
  readonly store  = inject(CollabStoreService);
  private readonly router = inject(Router);
  private readonly route  = inject(ActivatedRoute);

  step        = signal<'invite' | 'login'>('invite');
  inviteText  = signal('');
  email       = signal('');
  password    = signal('');
  error       = signal('');
  companyName = signal(this.store.company()?.name ?? '');

  private pendingPayload: ReturnType<typeof decodeInvite> = undefined;

  constructor() {
    const existing = this.store.currentUser();
    if (existing) { this.redirectByRole(existing.role); return; }

    const inviteParam = this.route.snapshot.queryParamMap.get('invite');
    if (inviteParam) { this.inviteText.set(inviteParam); this.parseInvite(); }
  }

  parseInvite() {
    this.error.set('');
    const token = extractInviteTokenFromText(this.inviteText());
    if (!token) { this.error.set('Veuillez coller votre lien d\'invitation.'); return; }
    const payload = decodeInvite(token);
    if (!payload) { this.error.set('Lien d\'invitation invalide ou expiré.'); return; }
    this.pendingPayload = payload;
    this.email.set(payload.user.email);
    this.companyName.set(payload.company.name);
    this.step.set('login');
  }

  login() {
    this.error.set('');
    if (!this.pendingPayload) { this.error.set('Veuillez d\'abord valider votre lien d\'accès.'); return; }
    if (this.email() !== this.pendingPayload.user.email) { this.error.set('Email incorrect.'); return; }
    if (this.password() !== this.pendingPayload.password) { this.error.set('Mot de passe incorrect.'); return; }
    this.store.hydrateFromInvite(this.pendingPayload);
    this.redirectByRole(this.pendingPayload.user.role);
  }

  private redirectByRole(role: string) {
    const dest: Record<string, string> = {
      owner: '/dashboard', hr: '/notes', accountant: '/paiements', employee: '/absences'
    };
    this.router.navigate([dest[role] ?? '/dashboard']);
  }
}
