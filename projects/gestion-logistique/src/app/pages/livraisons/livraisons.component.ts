import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

type StatutLiv = 'Planifié' | 'En chargement' | 'En route' | 'Livré' | 'Retard' | 'Incident' | 'Retour';

interface Livraison {
  id: string; ref: string; commande: string; client: string;
  origine: string; destination: string; distance: number;
  chauffeur: string; vehicule: string; dateDepart: string;
  heureDepart: string; statut: StatutLiv; kmParcourus: number; notes: string;
}

@Component({ selector: 'app-livraisons', standalone: true, imports: [CommonModule, FormsModule],
  templateUrl: './livraisons.component.html', styleUrl: './livraisons.component.scss' })
export class LivraisonsComponent {
  activeTab = signal<'tout'|'aujourd-hui'|'en-route'|'livre'>('aujourd-hui');
  showForm  = signal(false);
  form: Omit<Livraison,'id'|'ref'> = this.empty();

  livraisons: Livraison[] = [
    {id:'1', ref:'LIV-0420-001', commande:'CMD-2024-001', client:'SuperMart SA',       origine:'Ouagadougou', destination:'Bobo-Dioulasso', distance:360, chauffeur:'Koné Seydou',      vehicule:'11 BF 2201', dateDepart:'2024-04-20', heureDepart:'08:30', statut:'En route',       kmParcourus:210, notes:''},
    {id:'2', ref:'LIV-0420-002', commande:'CMD-2024-002', client:'Pharmavie SARL',    origine:'Ouagadougou', destination:'Ouahigouya',     distance:190, chauffeur:'Nikiéma Lassina', vehicule:'11 BF 2202', dateDepart:'2024-04-20', heureDepart:'07:15', statut:'Livré',           kmParcourus:190, notes:''},
    {id:'3', ref:'LIV-0420-003', commande:'CMD-2024-003', client:'BTP Matériaux',     origine:'Koudougou',   destination:'Ouagadougou',    distance:100, chauffeur:'Zongo Firmin',     vehicule:'11 BF 2205', dateDepart:'2024-04-20', heureDepart:'09:00', statut:'En route',       kmParcourus:45,  notes:'Chargement lourd'},
    {id:'4', ref:'LIV-0420-004', commande:'CMD-2024-004', client:'AgriSud BF',        origine:'Ouagadougou', destination:'Fada N\'Gourma', distance:220, chauffeur:'Traoré Karim',     vehicule:'11 BF 2203', dateDepart:'2024-04-20', heureDepart:'06:00', statut:'Retard',          kmParcourus:80,  notes:'Panne signalée km 80'},
    {id:'5', ref:'LIV-0420-005', commande:'CMD-2024-005', client:'Importex SARL',     origine:'Port Lomé',   destination:'Ouagadougou',    distance:1100,chauffeur:'Barry Moussa',     vehicule:'11 BF 2204', dateDepart:'2024-04-19', heureDepart:'18:00', statut:'Livré',           kmParcourus:1100,notes:''},
    {id:'6', ref:'LIV-0419-001', commande:'CMD-2024-006', client:'Minoterie BF',      origine:'Ouagadougou', destination:'Koupèla',        distance:142, chauffeur:'Ouédraogo Marc',   vehicule:'11 BF 2206', dateDepart:'2024-04-19', heureDepart:'14:00', statut:'Livré',           kmParcourus:142, notes:''},
    {id:'7', ref:'LIV-0420-006', commande:'CMD-2024-007', client:'TotalEnergies BF',  origine:'Abidjan',     destination:'Ouagadougou',    distance:1200,chauffeur:'Diallo Ibou',       vehicule:'11 BF 2208', dateDepart:'2024-04-19', heureDepart:'22:00', statut:'En route',       kmParcourus:850, notes:'Matériel sensible'},
    {id:'8', ref:'LIV-0420-007', commande:'CMD-2024-008', client:'Boulangerie Moderne',origine:'Ouagadougou',destination:'Ziniaré',         distance:35,  chauffeur:'Compaoré Yvan',    vehicule:'11 BF 2207', dateDepart:'2024-04-20', heureDepart:'06:30', statut:'Livré',           kmParcourus:35,  notes:''},
  ];

  get filtered(): Livraison[] {
    const t = this.activeTab();
    if (t === 'aujourd-hui') return this.livraisons.filter(l => l.dateDepart === '2024-04-20');
    if (t === 'en-route')    return this.livraisons.filter(l => l.statut === 'En route' || l.statut === 'En chargement');
    if (t === 'livre')       return this.livraisons.filter(l => l.statut === 'Livré');
    return this.livraisons;
  }

  get enRoute(): number { return this.livraisons.filter(l => l.statut === 'En route').length; }
  get incidents(): number { return this.livraisons.filter(l => l.statut === 'Retard' || l.statut === 'Incident').length; }

  statutClass(s: StatutLiv): string {
    const m: Record<StatutLiv, string> = {
      'Planifié':     'badge badge--gray',
      'En chargement':'badge badge--yellow',
      'En route':     'badge badge--blue',
      'Livré':        'badge badge--green',
      'Retard':       'badge badge--red',
      'Incident':     'badge badge--red',
      'Retour':       'badge badge--orange',
    };
    return m[s];
  }

  progression(l: Livraison): number {
    if (l.statut === 'Livré') return 100;
    if (!l.distance) return 0;
    return Math.min(100, Math.round((l.kmParcourus / l.distance) * 100));
  }

  addLivraison() {
    if (!this.form.client || !this.form.chauffeur) return;
    const num = this.livraisons.length + 1;
    this.livraisons.unshift({ id: Date.now().toString(), ref: 'LIV-0420-' + String(num).padStart(3,'0'), ...this.form });
    this.form = this.empty(); this.showForm.set(false);
  }

  private empty(): Omit<Livraison,'id'|'ref'> {
    return { commande:'', client:'', origine:'Ouagadougou', destination:'', distance:0, chauffeur:'', vehicule:'', dateDepart:'', heureDepart:'', statut:'Planifié', kmParcourus:0, notes:'' };
  }

  readonly statuts: StatutLiv[] = ['Planifié','En chargement','En route','Livré','Retard','Incident','Retour'];
  constructor(public readonly store: CollabStoreService) {}
}
