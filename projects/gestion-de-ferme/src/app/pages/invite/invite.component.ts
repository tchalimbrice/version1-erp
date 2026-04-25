import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CollabStoreService, Role } from '../../services/collab-store.service';
import { decodeInvite } from '../../utils/invite';

const roleHomes: Record<Role, string> = {
  owner: '/tableau-de-bord',
  employee: '/parcelles',
  hr: '/rh',
  accountant: '/comptabilite'
};

@Component({
  selector: 'app-invite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invite.component.html',
  styleUrl: './invite.component.scss'
})
export class InviteComponent {
  error = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly store: CollabStoreService
  ) {
    const inviteParam = this.route.snapshot.queryParamMap.get('invite') ?? '';
    const payload = inviteParam ? decodeInvite(inviteParam) : undefined;
    if (!payload) {
      this.error = 'Lien invalide ou manquant.';
      return;
    }
    this.router.navigate(['/connexion'], { queryParams: { invite: inviteParam } });
  }
}

