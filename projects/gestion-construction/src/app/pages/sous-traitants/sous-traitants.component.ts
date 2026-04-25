import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

type Specialite = 'Électricité' | 'Plomberie' | 'Menuiserie' | 'Peinture' | 'Carrelage' | 'Étanchéité' | 'Climatisation' | 'Terrassement' | 'Soudure' | 'Autre';
type StatutContrat = 'En cours' | 'Terminé' | 'En attente' | 'Résilié';

interface SousTraitant {
  id: string;
  entreprise: string;
  contact: string;
  telephone: string;
  specialite: Specialite;
  chantier: string;
  montantContrat: number;
  montantPaye: number;
  dateDebut: string;
  dateFin: string;
  statut: StatutContrat;
  notes: string;
}

@Component({
  selector: 'app-sous-traitants',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sous-traitants.component.html',
  styleUrl: './sous-traitants.component.scss'
})
export class SousTraitantsComponent {
  activeTab = signal<'tout' | 'en-cours' | 'termine'>('tout');
  showForm  = signal(false);

  form: Omit<SousTraitant, 'id'> = this.emptyForm();

  sousTraitants: SousTraitant[] = [
    { id:'1', entreprise:'Électro BF SARL',      contact:'Kaboré Mamadou',  telephone:'70 11 22 33', specialite:'Électricité',    chantier:'CH-001', montantContrat:8500000,  montantPaye:5100000, dateDebut:'2024-02-01', dateFin:'2024-08-31', statut:'En cours',  notes:'' },
    { id:'2', entreprise:'Plomb & Sanitaire Co.', contact:'Diallo Sékou',    telephone:'70 22 33 44', specialite:'Plomberie',      chantier:'CH-001', montantContrat:4200000,  montantPaye:4200000, dateDebut:'2024-01-15', dateFin:'2024-06-30', statut:'Terminé',   notes:'' },
    { id:'3', entreprise:'Menuiserie Moderne',    contact:'Traoré Adama',    telephone:'70 33 44 55', specialite:'Menuiserie',     chantier:'CH-002', montantContrat:12000000, montantPaye:6000000, dateDebut:'2024-03-01', dateFin:'2024-10-31', statut:'En cours',  notes:'Portes et fenêtres aluminium' },
    { id:'4', entreprise:'ColorPro BF',           contact:'Sawadogo Jean',   telephone:'70 44 55 66', specialite:'Peinture',       chantier:'CH-001', montantContrat:3800000,  montantPaye:0,       dateDebut:'2024-06-01', dateFin:'2024-08-31', statut:'En attente',notes:'' },
    { id:'5', entreprise:'Carrelage Expert',      contact:'Ouédraogo B.',    telephone:'70 55 66 77', specialite:'Carrelage',      chantier:'CH-005', montantContrat:5500000,  montantPaye:2750000, dateDebut:'2024-02-15', dateFin:'2024-07-15', statut:'En cours',  notes:'' },
    { id:'6', entreprise:'Étanche Plus SARL',     contact:'Compaoré A.',     telephone:'70 66 77 88', specialite:'Étanchéité',     chantier:'CH-002', montantContrat:7200000,  montantPaye:7200000, dateDebut:'2024-02-01', dateFin:'2024-03-31', statut:'Terminé',   notes:'Toiture terrasse' },
    { id:'7', entreprise:'AirConfort BF',         contact:'Nikiéma S.',      telephone:'70 77 88 99', specialite:'Climatisation',  chantier:'CH-002', montantContrat:15000000, montantPaye:5000000, dateDebut:'2024-04-01', dateFin:'2024-11-30', statut:'En cours',  notes:'36 splits + centrale' },
    { id:'8', entreprise:'Terrassement Express',  contact:'Zongo Pierre',    telephone:'70 88 99 00', specialite:'Terrassement',   chantier:'CH-004', montantContrat:6000000,  montantPaye:6000000, dateDebut:'2024-03-01', dateFin:'2024-03-31', statut:'Terminé',   notes:'' },
  ];

  get filtered(): SousTraitant[] {
    const t = this.activeTab();
    if (t === 'en-cours') return this.sousTraitants.filter(s => s.statut === 'En cours' || s.statut === 'En attente');
    if (t === 'termine')  return this.sousTraitants.filter(s => s.statut === 'Terminé' || s.statut === 'Résilié');
    return this.sousTraitants;
  }

  get totalContrats(): number { return this.sousTraitants.reduce((s, t) => s + t.montantContrat, 0); }
  get totalPaye(): number { return this.sousTraitants.reduce((s, t) => s + t.montantPaye, 0); }
  get enCours(): number { return this.sousTraitants.filter(s => s.statut === 'En cours').length; }

  formatMoney(n: number): string {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + ' M';
    if (n >= 1_000)     return (n / 1_000).toFixed(0) + ' K';
    return n.toString();
  }

  statutClass(s: StatutContrat): string {
    const m: Record<StatutContrat, string> = {
      'En cours':  'badge badge--blue',
      'Terminé':   'badge badge--green',
      'En attente':'badge badge--yellow',
      'Résilié':   'badge badge--red',
    };
    return m[s];
  }

  addSousTraitant() {
    if (!this.form.entreprise) return;
    this.sousTraitants.unshift({ id: Date.now().toString(), ...this.form });
    this.form = this.emptyForm();
    this.showForm.set(false);
  }

  private emptyForm(): Omit<SousTraitant, 'id'> {
    return { entreprise: '', contact: '', telephone: '', specialite: 'Électricité', chantier: '', montantContrat: 0, montantPaye: 0, dateDebut: '', dateFin: '', statut: 'En attente', notes: '' };
  }

  readonly specialites: Specialite[] = ['Électricité', 'Plomberie', 'Menuiserie', 'Peinture', 'Carrelage', 'Étanchéité', 'Climatisation', 'Terrassement', 'Soudure', 'Autre'];
  readonly statuts: StatutContrat[] = ['En attente', 'En cours', 'Terminé', 'Résilié'];

  constructor(public readonly store: CollabStoreService) {}
}
