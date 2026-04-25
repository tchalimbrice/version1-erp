import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

type StatutFacture = 'Payée' | 'En attente' | 'En retard' | 'Partiellement payée' | 'Annulée';

interface Facture {
  id: string; numero: string; client: string; commande: string;
  dateEmission: string; dateEcheance: string; montantHT: number;
  tva: number; montantTTC: number; montantPaye: number; statut: StatutFacture; notes: string;
}

@Component({ selector: 'app-facturation', standalone: true, imports: [CommonModule, FormsModule],
  templateUrl: './facturation.component.html', styleUrl: './facturation.component.scss' })
export class FacturationComponent {
  activeTab = signal<'tout'|'impayee'|'payee'>('tout');
  showForm  = signal(false);
  form: Omit<Facture,'id'|'numero'|'montantTTC'> = this.empty();

  factures: Facture[] = [
    {id:'1', numero:'FAC-2024-001', client:'SuperMart SA',       commande:'CMD-2024-001', dateEmission:'2024-04-01', dateEcheance:'2024-04-30', montantHT:157627, tva:18, montantTTC:185000,  montantPaye:185000,  statut:'Payée',            notes:''},
    {id:'2', numero:'FAC-2024-002', client:'Pharmavie SARL',     commande:'CMD-2024-002', dateEmission:'2024-04-05', dateEcheance:'2024-04-20', montantHT:80508,  tva:18, montantTTC:95000,   montantPaye:95000,   statut:'Payée',            notes:''},
    {id:'3', numero:'FAC-2024-003', client:'BTP Matériaux',      commande:'CMD-2024-003', dateEmission:'2024-04-10', dateEcheance:'2024-05-10', montantHT:355932, tva:18, montantTTC:420000,  montantPaye:200000,  statut:'Partiellement payée',notes:'Acompte 50% reçu'},
    {id:'4', numero:'FAC-2024-004', client:'AgriSud BF',         commande:'CMD-2024-004', dateEmission:'2024-04-08', dateEcheance:'2024-04-23', montantHT:178000, tva:18, montantTTC:210000,  montantPaye:0,       statut:'En retard',        notes:'Relance envoyée'},
    {id:'5', numero:'FAC-2024-005', client:'Importex SARL',      commande:'CMD-2024-005', dateEmission:'2024-04-02', dateEcheance:'2024-04-17', montantHT:237288, tva:18, montantTTC:280000,  montantPaye:280000,  statut:'Payée',            notes:''},
    {id:'6', numero:'FAC-2024-006', client:'Minoterie BF',       commande:'CMD-2024-006', dateEmission:'2024-04-12', dateEcheance:'2024-05-12', montantHT:165254, tva:18, montantTTC:195000,  montantPaye:0,       statut:'En attente',       notes:''},
    {id:'7', numero:'FAC-2024-007', client:'TotalEnergies BF',   commande:'CMD-2024-007', dateEmission:'2024-04-08', dateEcheance:'2024-05-08', montantHT:720339, tva:18, montantTTC:850000,  montantPaye:425000,  statut:'Partiellement payée',notes:''},
    {id:'8', numero:'FAC-2024-008', client:'Boulangerie Moderne',commande:'CMD-2024-008', dateEmission:'2024-04-15', dateEcheance:'2024-04-22', montantHT:35593,  tva:18, montantTTC:42000,   montantPaye:42000,   statut:'Payée',            notes:''},
  ];

  get filtered(): Facture[] {
    const t = this.activeTab();
    if (t === 'impayee') return this.factures.filter(f => f.statut !== 'Payée' && f.statut !== 'Annulée');
    if (t === 'payee')   return this.factures.filter(f => f.statut === 'Payée');
    return this.factures;
  }

  get totalTTC(): number  { return this.factures.reduce((s,f) => s + f.montantTTC, 0); }
  get totalPaye(): number { return this.factures.reduce((s,f) => s + f.montantPaye, 0); }
  get totalImpaye(): number { return this.totalTTC - this.totalPaye; }

  fmt(n: number): string { return n >= 1_000_000 ? (n/1_000_000).toFixed(1)+' M' : n >= 1_000 ? (n/1_000).toFixed(0)+' K' : n.toString(); }

  statutClass(s: StatutFacture): string {
    const m: Record<StatutFacture, string> = {
      'Payée':               'badge badge--green',
      'En attente':          'badge badge--yellow',
      'En retard':           'badge badge--red',
      'Partiellement payée': 'badge badge--orange',
      'Annulée':             'badge badge--gray',
    };
    return m[s];
  }

  marquerPaye(f: Facture) {
    f.montantPaye = f.montantTTC;
    f.statut = 'Payée';
  }

  addFacture() {
    if (!this.form.client) return;
    const num = this.factures.length + 1;
    const ttc = this.form.montantHT * (1 + this.form.tva / 100);
    this.factures.unshift({ id: Date.now().toString(), numero: 'FAC-2024-' + String(num).padStart(3,'0'), montantTTC: Math.round(ttc), ...this.form });
    this.form = this.empty(); this.showForm.set(false);
  }

  private empty(): Omit<Facture,'id'|'numero'|'montantTTC'> {
    return { client:'', commande:'', dateEmission:'', dateEcheance:'', montantHT:0, tva:18, montantPaye:0, statut:'En attente', notes:'' };
  }

  readonly statuts: StatutFacture[] = ['En attente','Partiellement payée','Payée','En retard','Annulée'];
  constructor(public readonly store: CollabStoreService) {}
}
