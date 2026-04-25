import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  companyName = '';
  address = '';
  phone = '';
  email = '';
  password = '';
  confirmPassword = '';
  accepted = false;
  error = '';

  constructor(
    private readonly store: CollabStoreService,
    private readonly router: Router
  ) {}

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

    this.router.navigate(['/erp-company-setup']);
  }
}
