import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';
import { decodeInvite, extractInviteTokenFromText } from '../../utils/invite';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {
  inviteText = signal('');
  email      = signal('');
  password   = signal('');
  error      = signal('');
  step       = signal<'invite' | 'login'>('invite');

  private pendingPayload: ReturnType<typeof decodeInvite> = undefined;

  constructor(
    private readonly store: CollabStoreService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    const inviteParam = this.route.snapshot.queryParamMap.get('invite');
    const authVerified = this.route.snapshot.queryParamMap.get('auth') === '1';
    if (inviteParam && authVerified) {
      const payload = decodeInvite(inviteParam);
      if (payload) { this.store.hydrateFromInvite(payload); this.redirectByRole(payload.user.role); return; }
    }
    const existing = this.store.currentUser();
    if (existing) { this.redirectByRole(existing.role); return; }
    if (inviteParam) {
      this.inviteText.set(inviteParam);
      this.parseInvite();
    }
  }

  parseInvite() {
    this.error.set('');
    const token = extractInviteTokenFromText(this.inviteText());
    if (!token) { this.error.set('Veuillez coller votre lien unique.'); return; }
    const payload = decodeInvite(token);
    if (!payload) { this.error.set('Lien unique invalide ou expiré.'); return; }
    this.pendingPayload = payload;
    this.email.set(payload.user.email);
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

  backToInvite() { this.step.set('invite'); this.pendingPayload = undefined; this.error.set(''); }

  private redirectByRole(role: string) {
    const dest: Record<string, string> = {
      owner: '/dashboard',
      employee: '/patients',
      hr: '/rendez-vous',
      accountant: '/facturation',
      pharmacien: '/pharmacie'
    };
    this.router.navigate([dest[role] ?? '/dashboard']);
  }
}
