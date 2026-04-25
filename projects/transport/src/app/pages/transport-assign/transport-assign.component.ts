import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

interface Affectation {
  id: string; trajet: string; vehicule: string; chauffeur: string; date: string; heure: string;
}

@Component({
  selector: 'app-transport-assign',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './transport-assign.component.html',
  styleUrl: './transport-assign.component.scss'
})
export class TransportAssignComponent {
  form = { trajet: '', vehicule: '', chauffeur: '', date: '', heure: '' };

  affectations: Affectation[] = [
    { id: '1', trajet: 'Abidjan → Bouaké',        vehicule: 'AB-1234-CI – Mercedes Sprinter', chauffeur: 'Alona Rarth',   date: '20/04/2024', heure: '07:00' },
    { id: '2', trajet: 'Bouaké → Korhogo',         vehicule: 'CD-5678-CI – Toyota Coaster',    chauffeur: 'Dohn Maxan',    date: '20/04/2024', heure: '09:30' },
    { id: '3', trajet: 'Abidjan → Yamoussoukro',   vehicule: 'EF-9012-CI – Iveco Daily',       chauffeur: 'Koné Ibrahim',  date: '21/04/2024', heure: '06:00' },
  ];

  constructor(private readonly store: CollabStoreService) {}

  assign() {
    if (!this.form.trajet || !this.form.vehicule || !this.form.chauffeur) return;
    this.affectations.unshift({ id: Date.now().toString(), ...this.form });
    this.store.logAction('employee', this.store.currentUser()?.name ?? 'Employé', `Affecte ${this.form.trajet}`);
    this.form = { trajet: '', vehicule: '', chauffeur: '', date: '', heure: '' };
  }

  get returnRoute(): string {
    return this.store.mode() === 'centralized' ? '/dashboard' : '/trajets';
  }
}
