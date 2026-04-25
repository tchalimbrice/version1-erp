import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';
import { encodeInvite, InvitePayloadV1 } from '../../utils/invite';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly ownerInviteUrl = computed(() => {
    const company = this.store.company();
    const user = this.store.currentUser();
    const mode = this.store.mode() ?? 'centralized';
    if (!company || !user || user.role !== 'owner') return '';
    const payload: InvitePayloadV1 = {
      v: 1,
      domain: 'transport',
      issuedAt: new Date().toISOString(),
      mode,
      company,
      user: { role: 'owner', name: company.name, email: company.email },
      password: company.adminPassword,
      collaborators: this.store.collaborators()
    };
    return `${window.location.origin}/connexion?invite=${encodeInvite(payload)}`;
  });

  constructor(public readonly store: CollabStoreService) {}
}
