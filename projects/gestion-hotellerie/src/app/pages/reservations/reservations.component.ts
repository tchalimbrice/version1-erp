import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Statut = 'Confirmée' | 'En attente' | 'Annulée' | 'Arrivée';

interface Reservation {
  id: string; client: string; chambre: string; arrivee: string; depart: string;
  statut: Statut; montant: number;
}

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {
  activeTab = signal<'Toutes' | Statut>('Toutes');
  showForm = signal(false);

  form = { client: '', chambre: '', arrivee: '', depart: '', montant: 0 };

  reservations: Reservation[] = [
    { id: '1', client: 'Jean Dupont',    chambre: '201', arrivee: '26/04/2024', depart: '28/04/2024', statut: 'Confirmée',  montant: 240 },
    { id: '2', client: 'Marie Lemoine',  chambre: '105', arrivee: '26/04/2024', depart: '27/04/2024', statut: 'Arrivée',    montant: 120 },
    { id: '3', client: 'Paul Durand',    chambre: '305', arrivee: '27/04/2024', depart: '30/04/2024', statut: 'En attente', montant: 360 },
    { id: '4', client: 'Lucie Bernard',  chambre: '12',  arrivee: '28/04/2024', depart: '29/04/2024', statut: 'Confirmée',  montant: 180 },
    { id: '5', client: 'Thomas Petit',   chambre: '215', arrivee: '28/04/2024', depart: '01/05/2024', statut: 'Confirmée',  montant: 270 },
  ];

  tabs: Array<'Toutes' | Statut> = ['Toutes', 'Confirmée', 'En attente', 'Annulée'];

  get filtered(): Reservation[] {
    const t = this.activeTab();
    return t === 'Toutes' ? this.reservations : this.reservations.filter(r => r.statut === t);
  }

  saveForm() {
    if (!this.form.client || !this.form.chambre) return;
    this.reservations.unshift({
      id: Date.now().toString(), client: this.form.client, chambre: this.form.chambre,
      arrivee: this.form.arrivee, depart: this.form.depart, statut: 'En attente', montant: this.form.montant
    });
    this.form = { client: '', chambre: '', arrivee: '', depart: '', montant: 0 };
    this.showForm.set(false);
  }
}
