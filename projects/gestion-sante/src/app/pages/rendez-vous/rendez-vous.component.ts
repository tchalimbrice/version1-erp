import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type StatutRDV = 'Confirmé' | 'En attente' | 'Annulé' | 'Terminé';

interface RendezVous {
  id: string; patient: string; medecin: string; date: string;
  heure: string; motif: string; statut: StatutRDV;
}

@Component({
  selector: 'app-rendez-vous',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rendez-vous.component.html',
  styleUrl: './rendez-vous.component.scss'
})
export class RendezVousComponent {
  showForm = signal(false);
  activeTab = signal<'Tous' | StatutRDV>('Tous');
  tabs: Array<'Tous' | StatutRDV> = ['Tous', 'Confirmé', 'En attente', 'Terminé', 'Annulé'];

  form = { patient: '', medecin: '', date: '', heure: '', motif: '' };

  rdvs: RendezVous[] = [
    { id: '1', patient: 'Koné Aminata',     medecin: 'Dr. Diallo',  date: '20/04/2024', heure: '08h30', motif: 'Suivi hypertension',      statut: 'Terminé'},
    { id: '2', patient: 'Traoré Boubacar',  medecin: 'Dr. Touré',   date: '20/04/2024', heure: '09h00', motif: 'Consultation générale',    statut: 'En cours'},
    { id: '3', patient: 'Bamba Fatoumata',  medecin: 'Dr. Kaboré',  date: '20/04/2024', heure: '10h00', motif: 'Douleurs abdominales',     statut: 'Confirmé'},
    { id: '4', patient: 'Coulibaly Issouf', medecin: 'Dr. Diallo',  date: '21/04/2024', heure: '08h00', motif: 'Renouvellement ordonnance',statut: 'Confirmé'},
    { id: '5', patient: 'Ouattara Hawa',    medecin: 'Dr. Touré',   date: '21/04/2024', heure: '09h30', motif: 'Bilan sanguin',            statut: 'En attente' },
    { id: '6', patient: 'Diallo Moussa',    medecin: 'Dr. Kaboré',  date: '22/04/2024', heure: '11h00', motif: 'Contrôle cardiaque',       statut: 'En attente' },
    { id: '7', patient: 'Yao Christophe',   medecin: 'Dr. Diallo',  date: '19/04/2024', heure: '14h30', motif: 'Fièvre persistante',       statut: 'Annulé'},
  ] as RendezVous[];

  get filtered(): RendezVous[] {
    const t = this.activeTab();
    return t === 'Tous' ? this.rdvs : this.rdvs.filter(r => r.statut === t);
  }

  addRDV() {
    if (!this.form.patient || !this.form.medecin) return;
    this.rdvs.unshift({
      id: Date.now().toString(),
      ...this.form,
      statut: 'En attente'});
    this.form = { patient: '', medecin: '', date: '', heure: '', motif: '' };
    this.showForm.set(false);
  }

  statutClass(s: string): string {
    if (s === 'Terminé')    return 'badge badge--green';
    if (s === 'Confirmé')   return 'badge badge--blue';
    if (s === 'En attente') return 'badge badge--yellow';
    if (s === 'Annulé')     return 'badge badge--red';
    return 'badge badge--gray';
  }
}
