import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

type StatutDevis = 'Brouillon' | 'Envoyé' | 'Accepté' | 'Refusé' | 'Expiré';
type TypeContrat = 'Devis' | 'Contrat forfait' | 'Contrat série de prix' | 'Avenant';

interface Devis {
  id: string;
  numero: string;
  client: string;
  chantier: string;
  type: TypeContrat;
  montant: number;
  dateEmission: string;
  dateValidite: string;
  statut: StatutDevis;
  notes: string;
}

@Component({
  selector: 'app-devis',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.scss'
})
export class DevisComponent {
  activeTab = signal<'tout' | 'en-attente' | 'accepte' | 'refuse'>('tout');
  showForm  = signal(false);

  form: Omit<Devis, 'id' | 'numero'> = this.emptyForm();

  devis: Devis[] = [
    { id:'1', numero:'DV-2024-001', client:'SCI Palmiers',       chantier:'Résidence Les Palmiers',  type:'Contrat forfait',      montant:85000000, dateEmission:'2023-12-10', dateValidite:'2024-01-10', statut:'Accepté',   notes:'' },
    { id:'2', numero:'DV-2024-002', client:'SARL Immobuild',     chantier:'Immeuble Bureau Centre',  type:'Contrat série de prix',montant:120000000,dateEmission:'2024-01-15', dateValidite:'2024-02-15', statut:'Accepté',   notes:'' },
    { id:'3', numero:'DV-2024-003', client:'Ministère Travaux',  chantier:'Route Nationale RN4',     type:'Contrat forfait',      montant:200000000,dateEmission:'2023-09-01', dateValidite:'2023-10-01', statut:'Accepté',   notes:'Marché public' },
    { id:'4', numero:'DV-2024-004', client:'TransAfric SARL',    chantier:'Entrepôt Logistique',     type:'Contrat forfait',      montant:55000000, dateEmission:'2024-02-20', dateValidite:'2024-03-20', statut:'Accepté',   notes:'' },
    { id:'5', numero:'DV-2024-005', client:'Groupe Hôtelier ABC',chantier:'Hôtel 4 étoiles Ouaga',  type:'Devis',                montant:340000000,dateEmission:'2024-03-01', dateValidite:'2024-04-01', statut:'Envoyé',    notes:'En attente décision CA' },
    { id:'6', numero:'DV-2024-006', client:'BTP Résidences SA',  chantier:'Cité 50 Logements',      type:'Devis',                montant:185000000,dateEmission:'2024-03-15', dateValidite:'2024-04-15', statut:'Envoyé',    notes:'' },
    { id:'7', numero:'DV-2024-007', client:'Clinique Sainte-Anne',chantier:'Réhabilitation clinique',type:'Devis',               montant:28000000, dateEmission:'2024-04-01', dateValidite:'2024-04-30', statut:'Brouillon',  notes:'En cours de chiffrage' },
    { id:'8', numero:'AV-2024-001', client:'SCI Palmiers',       chantier:'Résidence Les Palmiers',  type:'Avenant',              montant:4500000,  dateEmission:'2024-02-10', dateValidite:'2024-02-28', statut:'Accepté',   notes:'Travaux supplémentaires sous-sol' },
    { id:'9', numero:'DV-2024-008', client:'Mairie Bobo',        chantier:'Marché municipal',        type:'Devis',                montant:92000000, dateEmission:'2024-01-20', dateValidite:'2024-02-20', statut:'Refusé',    notes:'Prix trop élevé selon client' },
  ];

  get filtered(): Devis[] {
    let list = this.devis;
    const t = this.activeTab();
    if (t === 'en-attente') list = list.filter(d => d.statut === 'Envoyé' || d.statut === 'Brouillon');
    if (t === 'accepte')    list = list.filter(d => d.statut === 'Accepté');
    if (t === 'refuse')     list = list.filter(d => d.statut === 'Refusé' || d.statut === 'Expiré');
    return list;
  }

  get totalAccepte(): number { return this.devis.filter(d => d.statut === 'Accepté').reduce((s, d) => s + d.montant, 0); }
  get totalEnAttente(): number { return this.devis.filter(d => d.statut === 'Envoyé').reduce((s, d) => s + d.montant, 0); }

  formatMoney(n: number): string {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + ' M';
    if (n >= 1_000)     return (n / 1_000).toFixed(0) + ' K';
    return n.toString();
  }

  statutClass(s: StatutDevis): string {
    const m: Record<StatutDevis, string> = {
      'Brouillon': 'badge badge--gray',
      'Envoyé':    'badge badge--blue',
      'Accepté':   'badge badge--green',
      'Refusé':    'badge badge--red',
      'Expiré':    'badge badge--yellow',
    };
    return m[s];
  }

  addDevis() {
    if (!this.form.client || !this.form.montant) return;
    const num = this.devis.length + 1;
    const numero = 'DV-2024-' + String(num).padStart(3, '0');
    this.devis.unshift({ id: Date.now().toString(), numero, ...this.form });
    this.form = this.emptyForm();
    this.showForm.set(false);
  }

  private emptyForm(): Omit<Devis, 'id' | 'numero'> {
    return { client: '', chantier: '', type: 'Devis', montant: 0, dateEmission: '', dateValidite: '', statut: 'Brouillon', notes: '' };
  }

  readonly types: TypeContrat[] = ['Devis', 'Contrat forfait', 'Contrat série de prix', 'Avenant'];
  readonly statuts: StatutDevis[] = ['Brouillon', 'Envoyé', 'Accepté', 'Refusé', 'Expiré'];

  constructor(public readonly store: CollabStoreService) {}
}
