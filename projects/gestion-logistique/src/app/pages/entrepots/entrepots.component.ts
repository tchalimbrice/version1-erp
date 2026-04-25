import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

type TypeEntrepot = 'Standard' | 'Frigorifique' | 'Sécurisé' | 'Vrac' | 'Transit';

interface Entrepot {
  id: string; code: string; nom: string; adresse: string; type: TypeEntrepot;
  capaciteTotale: number; stockActuel: number; responsable: string; telephone: string; notes: string;
}

interface Colis { id: string; ref: string; client: string; entrepot: string; poids: number; arrivee: string; depart: string; statut: 'Stocké' | 'En transit' | 'Expédié'; }

@Component({ selector: 'app-entrepots', standalone: true, imports: [CommonModule, FormsModule],
  templateUrl: './entrepots.component.html', styleUrl: './entrepots.component.scss' })
export class EntrepotsComponent {
  activeTab = signal<'entrepots'|'stock'>('entrepots');
  showForm  = signal(false);
  form: Omit<Entrepot,'id'|'code'> = this.empty();

  entrepots: Entrepot[] = [
    {id:'1', code:'ENT-OUA-01', nom:'Dépôt Central Ouagadougou', adresse:'Zone industrielle Gounghin', type:'Standard',     capaciteTotale:5000, stockActuel:3240, responsable:'Sawadogo Appolinaire', telephone:'70 11 22 33', notes:'Principal hub de distribution'},
    {id:'2', code:'ENT-OUA-02', nom:'Entrepôt Frigorifique Nord', adresse:'Secteur 28, Ouagadougou',  type:'Frigorifique',  capaciteTotale:800,  stockActuel:520,  responsable:'Ouédraogo Clarisse',   telephone:'70 22 33 44', notes:'Température +2°C à +8°C'},
    {id:'3', code:'ENT-BOB-01', nom:'Agence Bobo-Dioulasso',      adresse:'Zone commercial Bobo',     type:'Standard',     capaciteTotale:2500, stockActuel:1180, responsable:'Coulibaly Mamadou',     telephone:'70 33 44 55', notes:''},
    {id:'4', code:'ENT-OUA-03', nom:'Zone Transit Douane',        adresse:'Frontière entrée nord',    type:'Transit',      capaciteTotale:3000, stockActuel:2100, responsable:'Diallo Adama',          telephone:'70 44 55 66', notes:'Marchandises en attente dédouanement'},
    {id:'5', code:'ENT-KDP-01', nom:'Dépôt Koudougou',           adresse:'RN1, Koudougou',           type:'Vrac',         capaciteTotale:1500, stockActuel:320,  responsable:'Tapsoba Serge',         telephone:'70 55 66 77', notes:'Agrégats et matériaux de construction'},
  ];

  colis: Colis[] = [
    {id:'1', ref:'COL-00142', client:'SuperMart SA',      entrepot:'ENT-OUA-01', poids:245,  arrivee:'2024-04-18', depart:'2024-04-21', statut:'Stocké'},
    {id:'2', ref:'COL-00143', client:'Pharmavie SARL',   entrepot:'ENT-OUA-02', poids:42,   arrivee:'2024-04-19', depart:'2024-04-20', statut:'Expédié'},
    {id:'3', ref:'COL-00144', client:'BTP Matériaux',    entrepot:'ENT-OUA-01', poids:1800, arrivee:'2024-04-17', depart:'2024-04-22', statut:'Stocké'},
    {id:'4', ref:'COL-00145', client:'AgriSud BF',       entrepot:'ENT-BOB-01', poids:380,  arrivee:'2024-04-15', depart:'2024-04-20', statut:'En transit'},
    {id:'5', ref:'COL-00146', client:'Minoterie BF',     entrepot:'ENT-OUA-01', poids:5000, arrivee:'2024-04-19', depart:'2024-04-22', statut:'Stocké'},
    {id:'6', ref:'COL-00147', client:'TotalEnergies BF', entrepot:'ENT-OUA-03', poids:8500, arrivee:'2024-04-17', depart:'2024-04-23', statut:'En transit'},
  ];

  tauxOccupation(e: Entrepot): number { return Math.round((e.stockActuel / e.capaciteTotale) * 100); }

  colisStatutClass(s: string): string {
    if (s === 'Expédié')   return 'badge badge--green';
    if (s === 'En transit') return 'badge badge--blue';
    return 'badge badge--yellow';
  }

  typeClass(t: TypeEntrepot): string {
    const m: Record<TypeEntrepot, string> = {
      'Standard':    'badge badge--blue',
      'Frigorifique':'badge badge--purple',
      'Sécurisé':    'badge badge--red',
      'Vrac':        'badge badge--orange',
      'Transit':     'badge badge--teal',
    };
    return m[t];
  }

  addEntrepot() {
    if (!this.form.nom) return;
    const num = this.entrepots.length + 1;
    this.entrepots.unshift({ id: Date.now().toString(), code: 'ENT-OUA-0' + num, ...this.form });
    this.form = this.empty(); this.showForm.set(false);
  }

  private empty(): Omit<Entrepot,'id'|'code'> {
    return { nom:'', adresse:'', type:'Standard', capaciteTotale:0, stockActuel:0, responsable:'', telephone:'', notes:'' };
  }

  readonly types: TypeEntrepot[] = ['Standard','Frigorifique','Sécurisé','Vrac','Transit'];
  constructor(public readonly store: CollabStoreService) {}
}
