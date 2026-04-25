import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

type StatutChantier = 'En cours' | 'En retard' | 'Finition' | 'Terminé' | 'Suspendu' | 'Planifié';
type TypeTravaux = 'Gros œuvre' | 'Second œuvre' | 'VRD' | 'Génie civil' | 'Réhabilitation' | 'Autre';

interface Chantier {
  id: string;
  ref: string;
  nom: string;
  client: string;
  adresse: string;
  type: TypeTravaux;
  dateDebut: string;
  dateFin: string;
  budget: number;
  depenses: number;
  avancement: number;
  statut: StatutChantier;
  chefChantier: string;
  notes: string;
}

@Component({
  selector: 'app-chantiers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chantiers.component.html',
  styleUrl: './chantiers.component.scss'
})
export class ChantiersComponent {
  activeTab = signal<'tout' | 'en-cours' | 'retard' | 'termine'>('tout');
  showForm  = signal(false);
  search    = signal('');
  selected  = signal<Chantier | null>(null);

  form: Omit<Chantier, 'id' | 'ref'> = this.emptyForm();

  chantiers: Chantier[] = [
    { id:'1', ref:'CH-001', nom:'Résidence Les Palmiers',    client:'SCI Palmiers',      adresse:'Ouagadougou, Secteur 15', type:'Gros œuvre',    dateDebut:'2024-01-15', dateFin:'2024-09-30', budget:85000000,  depenses:61200000, avancement:72, statut:'En cours',  chefChantier:'Kouamé Jean',    notes:'' },
    { id:'2', ref:'CH-002', nom:'Immeuble Bureau Centre',    client:'SARL Immobuild',    adresse:'Ouagadougou, Zogona',     type:'Gros œuvre',    dateDebut:'2024-02-01', dateFin:'2024-12-31', budget:120000000, depenses:54000000, avancement:45, statut:'En cours',  chefChantier:'Traoré Ibrahim', notes:'Fondations spéciales' },
    { id:'3', ref:'CH-003', nom:'Route Nationale RN4',       client:'Ministère Travaux', adresse:'RN4 km 12-28',            type:'VRD',           dateDebut:'2023-10-01', dateFin:'2024-05-31', budget:200000000, depenses:182000000,avancement:91, statut:'Finition',  chefChantier:'Sawadogo Paul',  notes:'' },
    { id:'4', ref:'CH-004', nom:'Entrepôt Logistique Port',  client:'TransAfric SARL',   adresse:'Zone industrielle',       type:'Génie civil',   dateDebut:'2024-03-01', dateFin:'2024-08-31', budget:55000000,  depenses:9900000,  avancement:18, statut:'En retard', chefChantier:'Diallo Moussa',  notes:'Retard approvisionnement' },
    { id:'5', ref:'CH-005', nom:'École Primaire Kossodo',    client:'Mairie Kossodo',    adresse:'Kossodo',                 type:'Second œuvre',  dateDebut:'2024-01-20', dateFin:'2024-07-15', budget:32000000,  depenses:20160000, avancement:63, statut:'En cours',  chefChantier:'Ouédraogo Serge',notes:'' },
    { id:'6', ref:'CH-006', nom:'Villa Luxe Ouaga 2000',     client:'M. Compaoré A.',    adresse:'Ouaga 2000, lot 45',      type:'Second œuvre',  dateDebut:'2024-04-01', dateFin:'2024-10-31', budget:48000000,  depenses:0,        avancement:0,  statut:'Planifié',  chefChantier:'Traoré Ibrahim', notes:'' },
    { id:'7', ref:'CH-007', nom:'Réhabilitation Stade',      client:'Ministère Sports',  adresse:'Ouagadougou, Secteur 4',  type:'Réhabilitation',dateDebut:'2023-06-01', dateFin:'2024-03-31', budget:75000000,  depenses:75000000, avancement:100,statut:'Terminé',   chefChantier:'Sawadogo Paul',  notes:'Livré avec 2 sem avance' },
  ];

  get filtered(): Chantier[] {
    let list = this.chantiers;
    const q = this.search().toLowerCase();
    if (q) list = list.filter(c => c.nom.toLowerCase().includes(q) || c.client.toLowerCase().includes(q) || c.ref.toLowerCase().includes(q));
    const t = this.activeTab();
    if (t === 'en-cours') list = list.filter(c => c.statut === 'En cours' || c.statut === 'Finition' || c.statut === 'Planifié');
    if (t === 'retard')   list = list.filter(c => c.statut === 'En retard' || c.statut === 'Suspendu');
    if (t === 'termine')  list = list.filter(c => c.statut === 'Terminé');
    return list;
  }

  get totalBudget(): number { return this.chantiers.filter(c => c.statut !== 'Terminé').reduce((s, c) => s + c.budget, 0); }
  get totalDepenses(): number { return this.chantiers.reduce((s, c) => s + c.depenses, 0); }
  get actifs(): number { return this.chantiers.filter(c => c.statut === 'En cours' || c.statut === 'Finition').length; }

  formatMoney(n: number): string {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + ' M';
    if (n >= 1_000)     return (n / 1_000).toFixed(0) + ' K';
    return n.toString();
  }

  statutClass(s: StatutChantier): string {
    const m: Record<StatutChantier, string> = {
      'En cours':  'badge badge--blue',
      'Finition':  'badge badge--green',
      'En retard': 'badge badge--red',
      'Terminé':   'badge badge--gray',
      'Suspendu':  'badge badge--yellow',
      'Planifié':  'badge badge--purple',
    };
    return m[s];
  }

  addChantier() {
    if (!this.form.nom || !this.form.client) return;
    const num = this.chantiers.length + 1;
    const ref = 'CH-' + String(num).padStart(3, '0');
    this.chantiers.unshift({ id: Date.now().toString(), ref, ...this.form });
    this.form = this.emptyForm();
    this.showForm.set(false);
  }

  private emptyForm(): Omit<Chantier, 'id' | 'ref'> {
    return { nom: '', client: '', adresse: '', type: 'Gros œuvre', dateDebut: '', dateFin: '', budget: 0, depenses: 0, avancement: 0, statut: 'Planifié', chefChantier: '', notes: '' };
  }

  readonly types: TypeTravaux[] = ['Gros œuvre', 'Second œuvre', 'VRD', 'Génie civil', 'Réhabilitation', 'Autre'];
  readonly statuts: StatutChantier[] = ['Planifié', 'En cours', 'Finition', 'En retard', 'Suspendu', 'Terminé'];

  constructor(public readonly store: CollabStoreService) {}
}
