import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CollabStoreService } from '../../../services/collab-store.service';

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
  ownerName = '';
  phone = '';
  email = '';
  address = '';
  password = '';
  confirmPassword = '';
  error = '';
  mode: CompanyMode = 'centralized';

  constructor(
    private readonly router: Router,
    private readonly store: CollabStoreService,
    private readonly route: ActivatedRoute
  ) {
    const modeParam = this.route.snapshot.queryParamMap.get('mode');
    if (modeParam === 'collaborative') {
      this.mode = 'collaborative';
    }
  }

  register() {
    this.error = '';
    if (!this.companyName || !this.ownerName || !this.phone || !this.email || !this.address) {
      this.error = 'Veuillez renseigner tous les champs.';
      return;
    }
    if (!this.password || this.password !== this.confirmPassword) {
      this.error = 'Les mots de passe ne correspondent pas.';
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
      this.router.navigate(['/ferme-collab-roles']);
      return;
    }

    this.store.loginOwner(this.email, this.password);
    this.router.navigate(['/tableau-de-bord']);
  }
}
