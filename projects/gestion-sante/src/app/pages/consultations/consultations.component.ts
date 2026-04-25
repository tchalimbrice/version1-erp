import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Consultation {
  id: string; patient: string; medecin: string; date: string;
  motif: string; diagnostic: string; traitement: string; poids: string; tension: string;
}

@Component({
  selector: 'app-consultations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consultations.component.html',
  styleUrl: './consultations.component.scss'
})
export class ConsultationsComponent {
  showForm = signal(false);
  selected = signal<Consultation | null>(null);

  form = { patient: '', medecin: '', date: '', motif: '', diagnostic: '', traitement: '', poids: '', tension: '' };

  consultations: Consultation[] = [
    { id: '1', patient: 'Koné Aminata',     medecin: 'Dr. Diallo', date: '20/04/2024', motif: 'Suivi hypertension',   diagnostic: 'Hypertension stable',    traitement: 'Amlodipine 5mg',        poids: '68 kg', tension: '130/85' },
    { id: '2', patient: 'Traoré Boubacar',  medecin: 'Dr. Touré',  date: '20/04/2024', motif: 'Fatigue chronique',    diagnostic: 'Anémie ferriprive',      traitement: 'Fer + vitamines',       poids: '72 kg', tension: '118/76' },
    { id: '3', patient: 'Bamba Fatoumata',  medecin: 'Dr. Kaboré', date: '19/04/2024', motif: 'Douleurs abdominales', diagnostic: 'Gastrite',               traitement: 'Oméprazole 20mg',       poids: '58 kg', tension: '120/80' },
    { id: '4', patient: 'Coulibaly Issouf', medecin: 'Dr. Diallo', date: '18/04/2024', motif: 'Toux persistante',     diagnostic: 'Bronchite aiguë',        traitement: 'Amoxicilline 500mg',    poids: '85 kg', tension: '125/82' },
    { id: '5', patient: 'Ouattara Hawa',    medecin: 'Dr. Touré',  date: '17/04/2024', motif: 'Bilan général',        diagnostic: 'Bonne santé générale',   traitement: 'Aucun',                 poids: '54 kg', tension: '115/75' },
  ];

  addConsultation() {
    if (!this.form.patient || !this.form.diagnostic) return;
    this.consultations.unshift({ id: Date.now().toString(), ...this.form });
    this.form = { patient: '', medecin: '', date: '', motif: '', diagnostic: '', traitement: '', poids: '', tension: '' };
    this.showForm.set(false);
  }
}
