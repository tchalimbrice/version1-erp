import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CollabStoreService } from '../../../services/collab-store.service';
import { encodeInvite, InvitePayloadV1 } from '../../../utils/invite';

type CompanyMode = 'centralized' | 'collaborative';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  companyName = '';
  address = '';
  phone = '';
  email = '';
  password = '';
  confirmPassword = '';
  accepted = false;
  mode: CompanyMode = 'centralized';
  error = '';

  constructor(
    private readonly store: CollabStoreService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    const modeParam = this.route.snapshot.queryParamMap.get('mode');
    if (modeParam === 'collaborative') this.mode = 'collaborative';
  }

  submit() {
    this.error = '';
    if (!this.companyName || !this.email || !this.password) {
      this.error = 'Veuillez remplir les champs obligatoires.';
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.error = 'Les mots de passe ne correspondent pas.';
      return;
    }
    if (!this.accepted) {
      this.error = 'Veuillez accepter les termes et conditions.';
      return;
    }

    this.store.setCompany({
      name: this.companyName,
      address: this.address,
      phone: this.phone,
      email: this.email,
      adminPassword: this.password
    });
    this.store.setMode(this.mode);

    if (this.mode === 'collaborative') {
      this.router.navigate(['/hotel-collab-roles']);
      return;
    }

    const payload: InvitePayloadV1 = {
      v: 1,
      domain: 'gestion-hotellerie',
      issuedAt: new Date().toISOString(),
      mode: this.mode,
      company: this.store.company()!,
      user: { role: 'owner', name: this.companyName, email: this.email },
      password: this.password
    };
    const invite = encodeInvite(payload);
    this.router.navigate(['/connexion'], { queryParams: { invite } });
  }
}

