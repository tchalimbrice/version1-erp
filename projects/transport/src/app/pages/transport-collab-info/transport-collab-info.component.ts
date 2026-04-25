import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CollabStoreService, Collaborator, InviteDomain, Role } from '../../services/collab-store.service';
import { encodeInvite, InvitePayloadV1 } from '../../utils/invite';

interface CollaboratorForm {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  password: string;
  token?: string;
  inviteUrl?: string;
}

@Component({
  selector: 'app-transport-collab-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transport-collab-info.component.html',
  styleUrl: './transport-collab-info.component.scss'
})
export class TransportCollabInfoComponent {
  collaborators: CollaboratorForm[] = [];
  generated = false;
  origin = window.location.origin;
  ownerInviteUrl = '';
  domain: InviteDomain = 'transport';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly store: CollabStoreService
  ) {
    const rolesParam = this.route.snapshot.queryParamMap.get('roles') ?? '';
    const roles = rolesParam.split(',').filter(Boolean) as Role[];
    const domainParam = this.route.snapshot.queryParamMap.get('domain');
    if (domainParam) {
      this.domain = domainParam as InviteDomain;
      this.store.setDomain(this.domain);
    }
    this.collaborators = roles.map((role) => ({
      firstName: '',
      lastName: '',
      email: '',
      role,
      password: ''
    }));
  }

  generateLinks() {
    if (this.collaborators.some(c => !c.firstName || !c.lastName || !c.email || !c.password)) return;

    const list: Collaborator[] = this.collaborators.map(c => {
      const token = this.store.generateToken();
      return {
        id: crypto.randomUUID(),
        firstName: c.firstName,
        lastName: c.lastName,
        email: c.email,
        role: c.role,
        password: c.password,
        token
      };
    });

    this.store.setCollaborators(list);
    const company = this.store.company();
    const mode = this.store.mode() ?? 'collaborative';
    const domain = this.store.domain() ?? this.domain;

    this.collaborators = this.collaborators.map((c, i) => {
      const userName = `${c.firstName} ${c.lastName}`.trim();
      const payload: InvitePayloadV1 | undefined = company
        ? {
            v: 1,
            domain,
            issuedAt: new Date().toISOString(),
            mode,
            company,
            user: { role: c.role, name: userName, email: c.email },
            password: c.password
          }
        : undefined;
      const invite = payload ? encodeInvite(payload) : '';
      return {
        ...c,
        token: list[i].token,
        inviteUrl: invite ? `${this.origin}/connexion?invite=${invite}` : undefined
      };
    });

    if (company) {
      const ownerPayload: InvitePayloadV1 = {
        v: 1,
        domain,
        issuedAt: new Date().toISOString(),
        mode,
        company,
        user: { role: 'owner', name: company.name, email: company.email },
        password: company.adminPassword,
        collaborators: list
      };
      this.ownerInviteUrl = `${this.origin}/connexion?invite=${encodeInvite(ownerPayload)}`;
    }
    this.generated = true;
  }

  finish() {
    const company = this.store.company();
    if (company) {
      this.store.loginOwner(company.email, company.adminPassword);
    }
    this.router.navigate(['/dashboard']);
  }
}
