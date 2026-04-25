import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CollabStoreService, Collaborator, Role } from '../../services/collab-store.service';
import { encodeInvite, InvitePayloadV1 } from '../../utils/invite';

interface CollaboratorForm {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  password: string;
  inviteUrl?: string;
}

@Component({
  selector: 'app-hotel-collab-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hotel-collab-info.component.html',
  styleUrl: './hotel-collab-info.component.scss'
})
export class HotelCollabInfoComponent {
  collaborators: CollaboratorForm[] = [];
  generated = false;
  origin = window.location.origin;
  ownerInviteUrl = '';
  private ownerInviteToken = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly store: CollabStoreService
  ) {
    const rolesParam = this.route.snapshot.queryParamMap.get('roles') ?? '';
    const roles = rolesParam.split(',').filter(Boolean) as Role[];
    this.collaborators = roles.map((role) => ({
      firstName: '',
      lastName: '',
      email: '',
      role,
      password: ''}));
  }

  generateLinks() {
    if (this.collaborators.some(c => !c.firstName || !c.lastName || !c.email || !c.password)) return;
    const company = this.store.company();
    if (!company) return;
    const mode = this.store.mode() ?? 'collaborative';

    const list: Collaborator[] = this.collaborators.map(c => ({
      id: crypto.randomUUID(),
      firstName: c.firstName,
      lastName: c.lastName,
      email: c.email,
      role: c.role,
      password: c.password,
      token: this.store.generateToken()
    }));
    this.store.setCollaborators(list);

    this.collaborators = this.collaborators.map((c) => {
      const userName = `${c.firstName} ${c.lastName}`.trim();
      const payload: InvitePayloadV1 = {
        v: 1,
        domain: 'gestion-hotellerie',
        issuedAt: new Date().toISOString(),
        mode,
        company,
        user: { role: c.role, name: userName, email: c.email },
        password: c.password
      };
      const invite = encodeInvite(payload);
      return { ...c, inviteUrl: `${this.origin}/connexion?invite=${invite}` };
    });

    const ownerPayload: InvitePayloadV1 = {
      v: 1,
      domain: 'gestion-hotellerie',
      issuedAt: new Date().toISOString(),
      mode,
      company,
      user: { role: 'owner', name: company.name, email: company.email },
      password: company.adminPassword
    };
    this.ownerInviteToken = encodeInvite(ownerPayload);
    this.ownerInviteUrl = `${this.origin}/connexion?invite=${this.ownerInviteToken}`;
    this.generated = true;
  }

  finish() {
    const queryParams = this.ownerInviteToken ? { invite: this.ownerInviteToken } : {};
    this.router.navigate(['/connexion'], { queryParams });
  }
}
