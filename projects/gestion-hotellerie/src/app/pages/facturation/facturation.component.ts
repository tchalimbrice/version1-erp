import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type StatutFacture = 'Payée' | 'En attente' | 'En retard' | 'Annulée';
type TypeFacture = 'Séjour' | 'Restauration' | 'Service' | 'Divers';

interface Facture {
  id: number; numero: string; client: string; chambre: string;
  type: TypeFacture; montantHT: number; tva: number; montantTTC: number;
  statut: StatutFacture; dateEmission: string; dateEcheance: string;
}

@Component({
  selector: 'app-facturation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './facturation.component.html',
  styleUrl: './facturation.component.scss'
})
export class FacturationComponent {
  activeTab = signal<StatutFacture | 'Toutes'>('Toutes');
  showForm  = signal(false);
  selected  = signal<Facture | null>(null);
  search    = signal('');

  tabs: Array<StatutFacture | 'Toutes'> = ['Toutes', 'En attente', 'En retard', 'Payée', 'Annulée'];
  types: TypeFacture[] = ['Séjour', 'Restauration', 'Service', 'Divers'];

  form = { client: '', chambre: '', type: 'Séjour' as TypeFacture, montantHT: 0, tva: 18, dateEcheance: '' };

  factures = signal<Facture[]>([
    { id:1,  numero:'FAC-2025-001', client:'Jean Dupont',         chambre:'201', type:'Séjour',       montantHT:203390, tva:18, montantTTC:240000, statut:'Payée',      dateEmission:'15/04/2025', dateEcheance:'15/04/2025' },
    { id:2,  numero:'FAC-2025-002', client:'Supermarché Ivoire',  chambre:'—',   type:'Restauration', montantHT:84746,  tva:18, montantTTC:100000, statut:'Payée',      dateEmission:'16/04/2025', dateEcheance:'16/04/2025' },
    { id:3,  numero:'FAC-2025-003', client:'Hôtel Ivoire Palace', chambre:'305', type:'Séjour',       montantHT:305085, tva:18, montantTTC:360000, statut:'En attente', dateEmission:'17/04/2025', dateEcheance:'30/04/2025' },
    { id:4,  numero:'FAC-2025-004', client:'Mme Koffi Ama',       chambre:'12',  type:'Séjour',       montantHT:152542, tva:18, montantTTC:180000, statut:'En attente', dateEmission:'18/04/2025', dateEcheance:'02/05/2025' },
    { id:5,  numero:'FAC-2025-005', client:'Sodici Sarl',         chambre:'—',   type:'Service',      montantHT:42373,  tva:18, montantTTC:50000,  statut:'En retard',  dateEmission:'01/03/2025', dateEcheance:'31/03/2025' },
    { id:6,  numero:'FAC-2025-006', client:'M. Traoré Issouf',    chambre:'215', type:'Séjour',       montantHT:228814, tva:18, montantTTC:270000, statut:'En retard',  dateEmission:'10/03/2025', dateEcheance:'25/03/2025' },
    { id:7,  numero:'FAC-2025-007', client:'Mme Diallo Mariam',   chambre:'105', type:'Séjour',       montantHT:101695, tva:18, montantTTC:120000, statut:'Payée',      dateEmission:'20/04/2025', dateEcheance:'20/04/2025' },
    { id:8,  numero:'FAC-2025-008', client:'Thomas Petit',        chambre:'—',   type:'Restauration', montantHT:25423,  tva:18, montantTTC:30000,  statut:'Annulée',    dateEmission:'21/04/2025', dateEcheance:'21/04/2025' },
  ]);

  filtered = computed(() => {
    const tab = this.activeTab();
    const q   = this.search().toLowerCase();
    return this.factures().filter(f =>
      (tab === 'Toutes' || f.statut === tab) &&
      (!q || f.client.toLowerCase().includes(q) || f.numero.toLowerCase().includes(q))
    );
  });

  kpis = computed(() => {
    const all = this.factures().filter(f => f.statut !== 'Annulée');
    const total   = all.reduce((s, f) => s + f.montantTTC, 0);
    const payees  = all.filter(f => f.statut === 'Payée').reduce((s, f) => s + f.montantTTC, 0);
    const attente = all.filter(f => f.statut === 'En attente').reduce((s, f) => s + f.montantTTC, 0);
    const retard  = all.filter(f => f.statut === 'En retard').reduce((s, f) => s + f.montantTTC, 0);
    return { total, payees, attente, retard, nbRetard: this.factures().filter(f => f.statut === 'En retard').length };
  });

  countTab(t: string) {
    return t === 'Toutes' ? this.factures().length : this.factures().filter(f => f.statut === t).length;
  }

  fmt(n: number) { return n.toLocaleString('fr-FR') + ' FCFA'; }
  fmtK(n: number) { return n >= 1_000_000 ? (n/1_000_000).toFixed(1)+'M FCFA' : (n/1000).toFixed(0)+'k FCFA'; }

  statutCls(s: StatutFacture) {
    const m: Record<StatutFacture, string> = { 'Payée':'badge--payee', 'En attente':'badge--attente', 'En retard':'badge--retard', 'Annulée':'badge--annulee' };
    return 'badge ' + m[s];
  }
  typeCls(t: TypeFacture) {
    const m: Record<TypeFacture, string> = { 'Séjour':'badge--sejour', 'Restauration':'badge--resto', 'Service':'badge--service', 'Divers':'badge--divers' };
    return 'badge ' + m[t];
  }

  marquerPayee(id: number) {
    this.factures.update(list => list.map(f => f.id === id ? { ...f, statut: 'Payée' as StatutFacture } : f));
    this.selected.set(null);
  }

  addFacture() {
    const f = this.form;
    if (!f.client || !f.montantHT) return;
    const ids = this.factures().map(x => x.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    const ttc = Math.round(f.montantHT * (1 + f.tva / 100));
    this.factures.update(list => [...list, {
      id, numero: `FAC-2025-${String(id).padStart(3,'0')}`,
      client: f.client, chambre: f.chambre || '—', type: f.type,
      montantHT: f.montantHT, tva: f.tva, montantTTC: ttc,
      statut: 'En attente', dateEmission: new Date().toLocaleDateString('fr-FR'), dateEcheance: f.dateEcheance
    }]);
    this.form = { client: '', chambre: '', type: 'Séjour', montantHT: 0, tva: 18, dateEcheance: '' };
    this.showForm.set(false);
  }
}
