import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-parametres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parametres.component.html',
  styleUrl: './parametres.component.scss'
})
export class ParametresComponent {
  saved = false;

  clinique = {
    nom: '',
    adresse: '',
    telephone: '',
    email: '',
    agrementSanitaire: '',
    responsable: '',
    specialites: 'Médecine générale, Cardiologie, Pédiatrie'};

  constructor(private readonly store: CollabStoreService) {
    const c = this.store.company();
    if (c) {
      this.clinique.nom       = c.name;
      this.clinique.adresse   = c.address;
      this.clinique.telephone = c.phone;
      this.clinique.email     = c.email;
    }
  }

  save() {
    this.saved = true;
    setTimeout(() => this.saved = false, 2500);
  }
}
