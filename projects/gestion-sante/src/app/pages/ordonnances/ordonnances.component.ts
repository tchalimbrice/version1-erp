import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Ordonnance {
  id: string; patient: string; medecin: string; date: string;
  medicaments: string; posologie: string; duree: string; renouvellable: boolean;
}

@Component({
  selector: 'app-ordonnances',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ordonnances.component.html',
  styleUrl: './ordonnances.component.scss'
})
export class OrdonnancesComponent {
  showForm = signal(false);
  form = { patient: '', medecin: '', date: '', medicaments: '', posologie: '', duree: '7 jours', renouvellable: false };

  ordonnances: Ordonnance[] = [
    { id: '1', patient: 'Koné Aminata',     medecin: 'Dr. Diallo', date: '20/04/2024', medicaments: 'Amlodipine 5mg',     posologie: '1 cp/jour le matin',      duree: '30 jours',  renouvellable: true  },
    { id: '2', patient: 'Traoré Boubacar',  medecin: 'Dr. Touré',  date: '20/04/2024', medicaments: 'Fer + Vitamine C',   posologie: '1 cp/jour pendant repas', duree: '30 jours',  renouvellable: false },
    { id: '3', patient: 'Bamba Fatoumata',  medecin: 'Dr. Kaboré', date: '19/04/2024', medicaments: 'Oméprazole 20mg',    posologie: '1 gélule avant repas',    duree: '14 jours',  renouvellable: false },
    { id: '4', patient: 'Coulibaly Issouf', medecin: 'Dr. Diallo', date: '18/04/2024', medicaments: 'Amoxicilline 500mg', posologie: '1 cp x3/jour',            duree: '7 jours',   renouvellable: false },
    { id: '5', patient: 'Ouattara Hawa',    medecin: 'Dr. Touré',  date: '17/04/2024', medicaments: 'Paracétamol 500mg',  posologie: '2 cp si douleur (max 4/j)',duree: '5 jours',   renouvellable: false },
  ];

  addOrdonnance() {
    if (!this.form.patient || !this.form.medicaments) return;
    this.ordonnances.unshift({ id: Date.now().toString(), ...this.form });
    this.form = { patient: '', medecin: '', date: '', medicaments: '', posologie: '', duree: '7 jours', renouvellable: false };
    this.showForm.set(false);
  }
}
