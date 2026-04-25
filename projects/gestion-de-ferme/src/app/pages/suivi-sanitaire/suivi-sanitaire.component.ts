import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

type TypeSoin = 'Vaccination' | 'Traitement' | 'Visite vétérinaire' | 'Déparasitage' | 'Chirurgie';
type StatutSoin = 'Planifié' | 'Effectué' | 'Annulé';

interface SuiviSanitaire {
  id: string;
  animal: string;
  lot: string;
  type: TypeSoin;
  description: string;
  date: string;
  veterinaire: string;
  produit: string;
  statut: StatutSoin;
  notes: string;
}

interface Vaccination {
  id: string;
  animal: string;
  lot: string;
  vaccin: string;
  dateFaite: string;
  prochaine: string;
  veterinaire: string;
}

@Component({
  selector: 'app-suivi-sanitaire',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './suivi-sanitaire.component.html',
  styleUrl: './suivi-sanitaire.component.scss'
})
export class SuiviSanitaireComponent {
  activeTab = signal<'soins' | 'vaccins' | 'malades'>('soins');
  showForm = signal(false);

  formSoin = {
    animal: '', lot: 'Lot A', type: 'Vaccination' as TypeSoin,
    description: '', date: '', veterinaire: '', produit: '', notes: ''};

  soins: SuiviSanitaire[] = [
    { id: '1', animal: 'BV-003',  lot: 'Lot A', type: 'Visite vétérinaire', description: 'Examen toux',         date: '19/04/2024', veterinaire: 'Dr. Ouédraogo', produit: '—',            statut: 'Effectué',  notes: 'Prescription: Oxytétracycline 5 jours' },
    { id: '2', animal: 'CP-002',  lot: 'Lot B', type: 'Traitement',         description: 'Traitement diarrhée', date: '20/04/2024', veterinaire: 'Dr. Ouédraogo', produit: 'Métronidzaole',  statut: 'Effectué',  notes: '3× /jour pendant 5 jours' },
    { id: '3', animal: 'Lot C',   lot: 'Lot C', type: 'Déparasitage',       description: 'Déparasitage volaille',date: '15/04/2024', veterinaire: 'Dr. Koné',     produit: 'Ivermectine',   statut: 'Effectué',  notes: '' },
    { id: '4', animal: 'Lot A',   lot: 'Lot A', type: 'Vaccination',        description: 'Vaccin FMD',          date: '25/04/2024', veterinaire: 'Dr. Ouédraogo', produit: 'Vaccin FMD',    statut: 'Planifié',  notes: 'À faire avant le marché' },
    { id: '5', animal: 'PR-001',  lot: 'Lot D', type: 'Vaccination',        description: 'Vaccin peste porcine',date: '22/04/2024', veterinaire: 'Dr. Koné',     produit: 'PPC vaccin',    statut: 'Planifié',  notes: '' },
    { id: '6', animal: 'OV-001',  lot: 'Lot B', type: 'Chirurgie',          description: 'Césarienne',          date: '10/04/2024', veterinaire: 'Dr. Ouédraogo', produit: '—',             statut: 'Effectué',  notes: 'Agneau né en bonne santé' },
  ];

  vaccinations: Vaccination[] = [
    { id: '1', animal: 'Lot A (bovins)', lot: 'Lot A', vaccin: 'Fièvre aphteuse (FMD)', dateFaite: '25/01/2024', prochaine: '25/07/2024', veterinaire: 'Dr. Ouédraogo' },
    { id: '2', animal: 'Lot A (bovins)', lot: 'Lot A', vaccin: 'Pasteurellose',          dateFaite: '10/02/2024', prochaine: '10/08/2024', veterinaire: 'Dr. Ouédraogo' },
    { id: '3', animal: 'Lot B (petits ruminants)', lot: 'Lot B', vaccin: 'Brucellose',   dateFaite: '05/03/2024', prochaine: '05/03/2025', veterinaire: 'Dr. Koné' },
    { id: '4', animal: 'Lot C (volailles)', lot: 'Lot C', vaccin: 'Newcastle',           dateFaite: '01/04/2024', prochaine: '01/07/2024', veterinaire: 'Dr. Koné' },
    { id: '5', animal: 'Lot D (porcins)', lot: 'Lot D', vaccin: 'Peste porcine classique', dateFaite: '20/03/2024', prochaine: '22/04/2024', veterinaire: 'Dr. Koné' },
  ];

  get malades() {
    return this.soins.filter(s => s.type === 'Traitement' && s.statut !== 'Annulé');
  }

  get prochainsSoins() {
    return this.soins.filter(s => s.statut === 'Planifié');
  }

  statutClass(s: StatutSoin): string {
    if (s === 'Effectué') return 'badge green';
    if (s === 'Planifié') return 'badge orange';
    return 'badge gray';
  }

  vaccProchaine(date: string): boolean {
    const [d, m, y] = date.split('/').map(Number);
    const target = new Date(y, m - 1, d);
    const diff = (target.getTime() - Date.now()) / (1000 * 60 * 60 * 24);
    return diff <= 14;
  }

  addSoin() {
    if (!this.formSoin.animal || !this.formSoin.type) return;
    this.soins.unshift({
      id: Date.now().toString(),
      ...this.formSoin,
      statut: 'Planifié',
    });
    this.formSoin = { animal: '', lot: 'Lot A', type: 'Vaccination', description: '', date: '', veterinaire: '', produit: '', notes: '' };
    this.showForm.set(false);
  }

  constructor(public readonly store: CollabStoreService) {}
}
