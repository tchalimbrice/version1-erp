import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';
import { decodeInvite, type InvitePayloadV1 } from '../../utils/invite';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {
  private readonly store = inject(CollabStoreService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  email = '';
  password = '';
  error = '';
  companyName = this.store.company()?.name ?? '';
  collaboratorName = '';
  collaboratorRole = '';
  hasInvite = false;

  private pendingPayload: InvitePayloadV1 | undefined;

  constructor() {
    const token      = this.route.snapshot.queryParamMap.get('invite');
    const authVerified = this.route.snapshot.queryParamMap.get('auth') === '1';

    if (token && authVerified) {
      // Came from central hub — already validated, auto-login
      const payload = decodeInvite(token);
      if (payload) { this.store.hydrateFromInvite(payload); this.redirectByRole(payload.user.role); return; }
    }
    if (token) { this.processInvite(token); return; }
    const existing = this.store.currentUser();
    if (existing) { this.redirectByRole(existing.role); }
  }

  login() {
    this.error = '';

    if (!this.email) { this.error = 'Veuillez saisir votre email.'; return; }
    if (!this.password) { this.error = 'Veuillez saisir votre mot de passe.'; return; }

    if (this.pendingPayload) {
      this.loginWithPendingPayload();
      return;
    }

    const company = this.store.company();
    if (!company) {
      this.error = "Aucune entreprise configurée. Utilisez votre lien d'invitation pour la première connexion.";
      return;
    }
    if (this.email !== company.email) { this.error = 'Email incorrect.'; return; }
    if (this.password !== company.adminPassword) { this.error = 'Mot de passe incorrect.'; return; }

    this.store.hydrateFromInvite({
      company,
      mode: this.store.mode() ?? 'centralized',
      user: { role: 'owner', name: company.name, email: company.email }
    });
    this.redirectByRole('owner');
  }

  private processInvite(token: string) {
    const payload = decodeInvite(token);
    if (!payload) {
      this.error = "Lien d'invitation invalide ou corrompu.";
      return;
    }
    this.pendingPayload = payload;
    this.email = payload.user.email;
    this.companyName = payload.company.name;
    this.collaboratorName = payload.user.name;
    this.collaboratorRole = this.roleFr(payload.user.role);
    this.hasInvite = true;
  }

  private loginWithPendingPayload() {
    if (!this.pendingPayload) { this.error = "Aucune invitation chargée."; return; }
    if (this.email !== this.pendingPayload.user.email) { this.error = 'Email incorrect.'; return; }
    if (this.password !== this.pendingPayload.password) { this.error = 'Mot de passe incorrect.'; return; }
    this.store.hydrateFromInvite(this.pendingPayload);
    this.redirectByRole(this.pendingPayload.user.role);
  }

  private roleFr(role: string): string {
    const map: Record<string, string> = {
      owner: 'Directeur / Propriétaire',
      employee: 'Architecte',
      hr: 'Responsable RH',
      accountant: 'Comptable'
    };
    return map[role] ?? role;
  }

  private redirectByRole(role: string) {
    const dest: Record<string, string> = {
      owner: '/dashboard',
      employee: '/devis',
      hr: '/personnel',
      accountant: '/comptabilite'
    };
    this.router.navigate([dest[role] ?? '/dashboard']);
  }
}
