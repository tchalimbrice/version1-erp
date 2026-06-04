import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Reservation {
  heure: string; nom: string; table: string; personnes: number; statut: string;
}

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservations.component.html',
})
export class ReservationsComponent {
  selectedDate = '2025-04-29';
  selectedPeriod = '1 Jour';
  readonly periods = ['1 Jour', '2 Jours', '7 Jours'];

  showModal = signal(false);
  reservationForm: Reservation = { heure: '12:00', nom: '', table: 'Table 1', personnes: 2, statut: 'Confirmé' };
  readonly tableOptions = Array.from({ length: 10 }, (_, i) => 'Table ' + (i + 1));

  reservations = signal<Reservation[]>([
    { heure: '12:00', nom: 'Jean Martin',    table: 'Table 3', personnes: 2, statut: 'Confirmé'  },
    { heure: '13:00', nom: 'Sophie Durand',  table: 'Table 5', personnes: 4, statut: 'Confirmé'  },
    { heure: '13:30', nom: 'Paul Bernard',   table: 'Table 2', personnes: 3, statut: 'En attente' },
    { heure: '19:00', nom: 'Marie Leroy',    table: 'Table 7', personnes: 6, statut: 'Confirmé'  },
    { heure: '19:30', nom: 'Lucas Moreau',   table: 'Table 1', personnes: 2, statut: 'Confirmé'  },
  ]);

  readonly stats = computed(() => {
    const list = this.reservations();
    return [
      { label: 'Total réservations', value: list.length },
      { label: 'Confirmées', value: list.filter(r => r.statut === 'Confirmé').length },
      { label: 'En attente', value: list.filter(r => r.statut === 'En attente').length },
      { label: 'Annulées', value: list.filter(r => r.statut === 'Annulée').length },
    ];
  });

  readonly filtered = computed(() => this.reservations());

  openAddReservation() {
    this.reservationForm = { heure: '12:00', nom: '', table: 'Table 1', personnes: 2, statut: 'Confirmé' };
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  submitReservation() {
    const reservation = this.reservationForm;
    if (!reservation.nom.trim()) return;
    this.reservations.update(list => [...list, { ...reservation, nom: reservation.nom.trim() }]);
    this.closeModal();
  }

  statutClass(s: string): string {
    if (s === 'Confirmé')  return 'bg-green-100 text-green-700';
    if (s === 'En attente') return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  }
}
