import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

type TypeOp = 'Recette' | 'Dépense';
type CategorieOp = 'Acompte client' | 'Solde facture' | 'Achat matériaux' | 'Salaires' | 'Location engin' | 'Sous-traitance' | 'Frais généraux' | 'Taxes & impôts' | 'Autre';
type StatutFacture = 'Payée' | 'En attente' | 'En retard' | 'Partiellement payée';

interface Operation {
  id: string;
  date: string;
  type: TypeOp;
  categorie: CategorieOp;
  description: string;
  chantier: string;
  montant: number;
  statut: StatutFacture;
}

@Component({
  selector: 'app-comptabilite',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comptabilite.component.html',
  styleUrl: './comptabilite.component.scss'
})
export class ComptabiliteComponent {
  activeTab = signal<'tout' | 'recettes' | 'depenses' | 'impayees'>('tout');
  showForm  = signal(false);

  form: Omit<Operation, 'id'> = this.emptyForm();

  operations: Operation[] = [
    { id:'1',  date:'2024-04-15', type:'Recette',  categorie:'Acompte client',   description:'Acompte 30% — SCI Palmiers CH-001',        chantier:'CH-001', montant:25500000, statut:'Payée' },
    { id:'2',  date:'2024-04-10', type:'Recette',  categorie:'Solde facture',    description:'Situation travaux N°3 — Ministère RN4',     chantier:'CH-003', montant:40000000, statut:'Payée' },
    { id:'3',  date:'2024-04-08', type:'Dépense',  categorie:'Achat matériaux',  description:'Commande ciment 500 sacs — CIMFASO',         chantier:'CH-001', montant:3750000,  statut:'Payée' },
    { id:'4',  date:'2024-04-05', type:'Dépense',  categorie:'Salaires',         description:'Salaires avril 2024',                       chantier:'—',      montant:8250000,  statut:'Payée' },
    { id:'5',  date:'2024-04-01', type:'Recette',  categorie:'Acompte client',   description:'Démarrage CH-002 — SARL Immobuild',         chantier:'CH-002', montant:36000000, statut:'Payée' },
    { id:'6',  date:'2024-03-28', type:'Dépense',  categorie:'Location engin',   description:'Location pelleteuse CAT 320 — 15 jours',    chantier:'CH-004', montant:2250000,  statut:'Payée' },
    { id:'7',  date:'2024-03-25', type:'Dépense',  categorie:'Sous-traitance',   description:'Acompte Électro BF SARL',                   chantier:'CH-001', montant:2550000,  statut:'Payée' },
    { id:'8',  date:'2024-03-20', type:'Recette',  categorie:'Solde facture',    description:'Situation travaux N°5 — Mairie Kossodo',    chantier:'CH-005', montant:9600000,  statut:'En attente' },
    { id:'9',  date:'2024-03-15', type:'Dépense',  categorie:'Achat matériaux',  description:'Ferraille HA10 & HA12 — ACOFASO',           chantier:'CH-002', montant:5600000,  statut:'Payée' },
    { id:'10', date:'2024-03-10', type:'Recette',  categorie:'Solde facture',    description:'Situation travaux N°8 — SCI Palmiers',      chantier:'CH-001', montant:17000000, statut:'En retard' },
    { id:'11', date:'2024-03-05', type:'Dépense',  categorie:'Frais généraux',   description:'Carburant parc engins — mars',              chantier:'—',      montant:1850000,  statut:'Payée' },
    { id:'12', date:'2024-02-28', type:'Dépense',  categorie:'Taxes & impôts',   description:'Patente + TVA Q1 2024',                     chantier:'—',      montant:4200000,  statut:'Payée' },
  ];

  get filtered(): Operation[] {
    const t = this.activeTab();
    if (t === 'recettes')  return this.operations.filter(o => o.type === 'Recette');
    if (t === 'depenses')  return this.operations.filter(o => o.type === 'Dépense');
    if (t === 'impayees')  return this.operations.filter(o => o.statut === 'En attente' || o.statut === 'En retard' || o.statut === 'Partiellement payée');
    return this.operations;
  }

  get totalRecettes(): number { return this.operations.filter(o => o.type === 'Recette').reduce((s, o) => s + o.montant, 0); }
  get totalDepenses(): number { return this.operations.filter(o => o.type === 'Dépense').reduce((s, o) => s + o.montant, 0); }
  get solde(): number { return this.totalRecettes - this.totalDepenses; }
  get totalImpaye(): number { return this.operations.filter(o => o.statut === 'En attente' || o.statut === 'En retard').reduce((s, o) => s + o.montant, 0); }

  formatMoney(n: number): string {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + ' M';
    if (n >= 1_000)     return (n / 1_000).toFixed(0) + ' K';
    return n.toString();
  }

  typeClass(t: TypeOp): string {
    return t === 'Recette' ? 'badge badge--green' : 'badge badge--red';
  }

  statutClass(s: StatutFacture): string {
    const m: Record<StatutFacture, string> = {
      'Payée':               'badge badge--green',
      'En attente':          'badge badge--yellow',
      'En retard':           'badge badge--red',
      'Partiellement payée': 'badge badge--orange',
    };
    return m[s];
  }

  addOperation() {
    if (!this.form.description || !this.form.montant) return;
    this.operations.unshift({ id: Date.now().toString(), ...this.form });
    this.form = this.emptyForm();
    this.showForm.set(false);
  }

  private emptyForm(): Omit<Operation, 'id'> {
    return { date: '', type: 'Recette', categorie: 'Acompte client', description: '', chantier: '', montant: 0, statut: 'En attente' };
  }

  readonly categories: CategorieOp[] = ['Acompte client', 'Solde facture', 'Achat matériaux', 'Salaires', 'Location engin', 'Sous-traitance', 'Frais généraux', 'Taxes & impôts', 'Autre'];
  readonly statuts: StatutFacture[] = ['Payée', 'En attente', 'En retard', 'Partiellement payée'];

  constructor(public readonly store: CollabStoreService) {}
}
