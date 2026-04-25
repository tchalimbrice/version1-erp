import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type StatutF = 'Payé' | 'En attente' | 'Annulé';

interface Facture {
  id: string; numero: string; patient: string; date: string;
  actes: string; montant: number; statut: StatutF;
}

@Component({
  selector: 'app-facturation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './facturation.component.html',
  styleUrl: './facturation.component.scss'
})
export class FacturationComponent {
  showForm = signal(false);
  form = { patient: '', date: '', actes: '', montant: 0 };

  factures: Facture[] = [
    { id: '1', numero: 'FAC-2024-001', patient: 'Koné Aminata',     date: '20/04/2024', actes: 'Consultation + Bilan', montant: 25000,  statut: 'Payé'},
    { id: '2', numero: 'FAC-2024-002', patient: 'Traoré Boubacar',  date: '20/04/2024', actes: 'Consultation générale',montant: 15000,  statut: 'Payé'},
    { id: '3', numero: 'FAC-2024-003', patient: 'Bamba Fatoumata',  date: '19/04/2024', actes: 'Échographie + Consult',montant: 45000,  statut: 'En attente'},
    { id: '4', numero: 'FAC-2024-004', patient: 'Coulibaly Issouf', date: '18/04/2024', actes: 'Radiologie + Consult', montant: 55000,  statut: 'Payé'},
    { id: '5', numero: 'FAC-2024-005', patient: 'Ouattara Hawa',    date: '17/04/2024', actes: 'Bilan sanguin complet', montant: 30000,  statut: 'En attente'},
    { id: '6', numero: 'FAC-2024-006', patient: 'Diallo Moussa',    date: '15/04/2024', actes: 'ECG + Consultation',   montant: 35000,  statut: 'Annulé'},
  ];

  get totalPaye():    number { return this.factures.filter(f => f.statut === 'Payé').reduce((s, f) => s + f.montant, 0); }
  get totalAttente(): number { return this.factures.filter(f => f.statut === 'En attente').reduce((s, f) => s + f.montant, 0); }

  formatMoney(n: number): string { return new Intl.NumberFormat('fr-FR').format(n); }

  nextNum(): string {
    const n = this.factures.length + 1;
    return `FAC-2024-${String(n).padStart(3, '0')}`;
  }

  addFacture() {
    if (!this.form.patient || !this.form.montant) return;
    this.factures.unshift({
      id: Date.now().toString(),
      numero: this.nextNum(),
      ...this.form,
      statut: 'En attente'});
    this.form = { patient: '', date: '', actes: '', montant: 0 };
    this.showForm.set(false);
  }

  marquerPaye(f: Facture) { f.statut = 'Payé'; }

  statutClass(s: StatutF): string {
    if (s === 'Payé')       return 'badge badge--green';
    if (s === 'En attente') return 'badge badge--yellow';
    return 'badge badge--red';
  }
}
