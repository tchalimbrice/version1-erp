import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

type StatutCmd = 'En attente' | 'En préparation' | 'En transit' | 'Livré' | 'Annulé' | 'Incident';
type TypeTransport = 'Express J+1' | 'Standard J+3' | 'Groupage' | 'Frigorifique' | 'Hors gabarit';

interface Commande {
  id: string; ref: string; client: string; telephone: string;
  origine: string; destination: string; type: TypeTransport;
  poids: number; volume: number; dateCommande: string; dateLivraison: string;
  montant: number; statut: StatutCmd; notes: string;
}

@Component({ selector: 'app-commandes', standalone: true, imports: [CommonModule, FormsModule],
  templateUrl: './commandes.component.html', styleUrl: './commandes.component.scss' })
export class CommandesComponent {
  activeTab = signal<'tout'|'en-cours'|'livre'|'incident'>('tout');
  showForm  = signal(false);
  search    = signal('');
  form: Omit<Commande,'id'|'ref'> = this.empty();

  commandes: Commande[] = [
    {id:'1', ref:'CMD-2024-001', client:'SuperMart SA',       telephone:'70 11 22 33', origine:'Ouagadougou',  destination:'Bobo-Dioulasso', type:'Standard J+3',  poids:2400, volume:14.5, dateCommande:'2024-04-18', dateLivraison:'2024-04-21', montant:185000,  statut:'En transit',     notes:'Fragile'},
    {id:'2', ref:'CMD-2024-002', client:'Pharmavie SARL',     telephone:'70 22 33 44', origine:'Ouagadougou',  destination:'Ouahigouya',     type:'Express J+1',   poids:420,  volume:2.1,  dateCommande:'2024-04-19', dateLivraison:'2024-04-20', montant:95000,   statut:'Livré',          notes:'Médicaments'},
    {id:'3', ref:'CMD-2024-003', client:'BTP Matériaux',      telephone:'70 33 44 55', origine:'Koudougou',    destination:'Ouagadougou',    type:'Hors gabarit',  poids:8500, volume:32.0, dateCommande:'2024-04-17', dateLivraison:'2024-04-22', montant:420000,  statut:'En préparation', notes:'Ciment + ferraille'},
    {id:'4', ref:'CMD-2024-004', client:'AgriSud BF',         telephone:'70 44 55 66', origine:'Ouagadougou',  destination:'Fada N\'Gourma', type:'Frigorifique',  poids:1800, volume:9.2,  dateCommande:'2024-04-18', dateLivraison:'2024-04-20', montant:210000,  statut:'Incident',       notes:'Panne camion signalée'},
    {id:'5', ref:'CMD-2024-005', client:'Importex SARL',      telephone:'70 55 66 77', origine:'Port Lomé',    destination:'Ouagadougou',    type:'Groupage',      poids:3200, volume:18.0, dateCommande:'2024-04-15', dateLivraison:'2024-04-20', montant:280000,  statut:'Livré',          notes:''},
    {id:'6', ref:'CMD-2024-006', client:'Minoterie BF',       telephone:'70 66 77 88', origine:'Ouagadougou',  destination:'Koupèla',        type:'Standard J+3',  poids:5000, volume:20.0, dateCommande:'2024-04-19', dateLivraison:'2024-04-22', montant:195000,  statut:'En attente',     notes:''},
    {id:'7', ref:'CMD-2024-007', client:'TotalEnergies BF',   telephone:'70 77 88 99', origine:'Abidjan',      destination:'Ouagadougou',    type:'Hors gabarit',  poids:12000,volume:0,    dateCommande:'2024-04-17', dateLivraison:'2024-04-23', montant:850000,  statut:'En transit',     notes:'Matériel pétrolier'},
    {id:'8', ref:'CMD-2024-008', client:'Boulangerie Moderne',telephone:'70 88 99 00', origine:'Ouagadougou',  destination:'Ziniaré',        type:'Express J+1',   poids:280,  volume:1.5,  dateCommande:'2024-04-20', dateLivraison:'2024-04-21', montant:42000,   statut:'En attente',     notes:''},
  ];

  get filtered(): Commande[] {
    let list = this.commandes;
    const q = this.search().toLowerCase();
    if (q) list = list.filter(c => `${c.ref} ${c.client} ${c.destination}`.toLowerCase().includes(q));
    const t = this.activeTab();
    if (t === 'en-cours') list = list.filter(c => c.statut === 'En transit' || c.statut === 'En préparation' || c.statut === 'En attente');
    if (t === 'livre')    list = list.filter(c => c.statut === 'Livré');
    if (t === 'incident') list = list.filter(c => c.statut === 'Incident' || c.statut === 'Annulé');
    return list;
  }

  get enCours(): number { return this.commandes.filter(c => c.statut === 'En transit' || c.statut === 'En préparation').length; }
  get caTotal(): number { return this.commandes.reduce((s,c) => s + c.montant, 0); }

  fmt(n: number): string { return n >= 1_000_000 ? (n/1_000_000).toFixed(1)+' M' : n >= 1_000 ? (n/1_000).toFixed(0)+' K' : n.toString(); }

  statutClass(s: StatutCmd): string {
    const m: Record<StatutCmd, string> = {
      'En attente':     'badge badge--gray',
      'En préparation': 'badge badge--yellow',
      'En transit':     'badge badge--blue',
      'Livré':          'badge badge--green',
      'Annulé':         'badge badge--gray',
      'Incident':       'badge badge--red',
    };
    return m[s];
  }

  typeClass(t: TypeTransport): string {
    const m: Record<TypeTransport, string> = {
      'Express J+1':  'badge badge--orange',
      'Standard J+3': 'badge badge--blue',
      'Groupage':     'badge badge--teal',
      'Frigorifique': 'badge badge--purple',
      'Hors gabarit': 'badge badge--red',
    };
    return m[t];
  }

  addCommande() {
    if (!this.form.client || !this.form.destination) return;
    const num = this.commandes.length + 1;
    this.commandes.unshift({ id: Date.now().toString(), ref: 'CMD-2024-' + String(num).padStart(3,'0'), ...this.form });
    this.form = this.empty(); this.showForm.set(false);
  }

  private empty(): Omit<Commande,'id'|'ref'> {
    return { client:'', telephone:'', origine:'Ouagadougou', destination:'', type:'Standard J+3', poids:0, volume:0, dateCommande:'', dateLivraison:'', montant:0, statut:'En attente', notes:'' };
  }

  readonly types: TypeTransport[] = ['Express J+1','Standard J+3','Groupage','Frigorifique','Hors gabarit'];
  readonly statuts: StatutCmd[]   = ['En attente','En préparation','En transit','Livré','Annulé','Incident'];
  constructor(public readonly store: CollabStoreService) {}
}
