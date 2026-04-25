import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Reservation {
  id: string; client: string; chambre: string; type: string;
  arrivee: string; depart: string; statut: 'confirmee' | 'arrivee' | 'en_attente';
}

@Component({
  selector: 'app-checkin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkin.component.html',
  styleUrl: './checkin.component.scss'
})
export class CheckinComponent {
  activeTab = signal<'checkin' | 'checkout'>('checkin');
  step = signal<1 | 2 | 3>(1);
  searchQuery = signal('');
  selectedResa = signal<Reservation | null>(null);

  reservations: Reservation[] = [
    { id: '#RDV-2024-1589', client: 'Jean Dupont',    chambre: '201', type: 'Standard', arrivee: '26/04/2024', depart: '28/04/2024', statut: 'confirmee' },
    { id: '#RDV-2024-1590', client: 'Marie Lemoine',  chambre: '105', type: 'Supérieur', arrivee: '26/04/2024', depart: '27/04/2024', statut: 'confirmee' },
    { id: '#RDV-2024-1591', client: 'Paul Durand',    chambre: '305', type: 'Standard', arrivee: '27/04/2024', depart: '30/04/2024', statut: 'confirmee' },
  ];

  departClients: Reservation[] = [
    { id: '#RDV-2024-1580', client: 'Sophie Bernard', chambre: '202', type: 'Deluxe',   arrivee: '23/04/2024', depart: '26/04/2024', statut: 'arrivee' },
    { id: '#RDV-2024-1581', client: 'Thomas Petit',   chambre: '310', type: 'Standard', arrivee: '24/04/2024', depart: '26/04/2024', statut: 'arrivee' },
  ];

  get filteredResas(): Reservation[] {
    const q = this.searchQuery().toLowerCase();
    if (!q) return [];
    return this.reservations.filter(r => r.client.toLowerCase().includes(q) || r.id.toLowerCase().includes(q)
    );
  }

  selectResa(r: Reservation) {
    this.selectedResa.set(r);
    this.step.set(2);
  }

  proceedCheckin() { this.step.set(3); }
  reset() { this.step.set(1); this.searchQuery.set(''); this.selectedResa.set(null); }
  setTab(t: 'checkin' | 'checkout') { this.activeTab.set(t); this.reset(); }
}
