import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';
import { decodeInvite, extractInviteTokenFromText } from '../../utils/invite';

@Component({
  selector: 'app-collab-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './collab-login.component.html',
  styleUrl: './collab-login.component.scss'
})
export class CollabLoginComponent {
  inviteText = '';
  error = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly store: CollabStoreService
  ) {
    const invite = this.route.snapshot.queryParamMap.get('invite');
    const token = this.route.snapshot.queryParamMap.get('token');
    this.inviteText = invite ?? token ?? '';
    if (invite) this.connect();
  }

  connect() {
    this.error = '';
    const raw = extractInviteTokenFromText(this.inviteText);
    if (!raw) {
      this.error = 'Lien manquant.';
      return;
    }
    const payload = decodeInvite(raw);
    if (!payload) {
      this.error = 'Lien invalide. Demandez un nouveau lien unique.';
      return;
    }
    this.store.hydrateFromInvite(payload);
    const role = payload.user.role;
    if (role === 'owner') this.router.navigate(['/tableau-de-bord']);
    if (role === 'employee') this.router.navigate(['/parcelles']);
    if (role === 'hr') this.router.navigate(['/rh']);
    if (role === 'accountant') this.router.navigate(['/comptabilite']);
  }
}
