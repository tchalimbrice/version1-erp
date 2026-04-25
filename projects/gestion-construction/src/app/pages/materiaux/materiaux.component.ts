import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

type Categorie = 'Ciment & Béton' | 'Acier & Ferraille' | 'Bois & Coffrage' | 'Carrelage & Revêtement' | 'Plomberie' | 'Électricité' | 'Peinture' | 'Agrégats' | 'Divers';

interface Materiau {
  id: string;
  reference: string;
  designation: string;
  categorie: Categorie;
  unite: string;
  stock: number;
  stockMin: number;
  prixUnitaire: number;
  chantier: string;
  fournisseur: string;
}

@Component({
  selector: 'app-materiaux',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './materiaux.component.html',
  styleUrl: './materiaux.component.scss'
})
export class MateriauxComponent {
  activeTab = signal<'tout' | 'alerte' | 'ok'>('tout');
  showForm  = signal(false);
  search    = signal('');

  form: Omit<Materiau, 'id' | 'reference'> = this.emptyForm();

  materiaux: Materiau[] = [
    { id:'1',  reference:'MAT-001', designation:'Ciment CPA 42.5',         categorie:'Ciment & Béton',         unite:'sac 50kg', stock:850,  stockMin:200, prixUnitaire:7500,   chantier:'CH-001', fournisseur:'CIMFASO' },
    { id:'2',  reference:'MAT-002', designation:'Sable de rivière',         categorie:'Agrégats',               unite:'m³',       stock:45,   stockMin:20,  prixUnitaire:25000,  chantier:'CH-001', fournisseur:'Carrière Ouaga' },
    { id:'3',  reference:'MAT-003', designation:'Gravier 20/40',            categorie:'Agrégats',               unite:'m³',       stock:12,   stockMin:15,  prixUnitaire:35000,  chantier:'CH-002', fournisseur:'Carrière Ouaga' },
    { id:'4',  reference:'MAT-004', designation:'Fer à béton HA 10mm',      categorie:'Acier & Ferraille',      unite:'barre 6m', stock:320,  stockMin:100, prixUnitaire:4200,   chantier:'CH-001', fournisseur:'ACOFASO' },
    { id:'5',  reference:'MAT-005', designation:'Fer à béton HA 12mm',      categorie:'Acier & Ferraille',      unite:'barre 6m', stock:180,  stockMin:80,  prixUnitaire:5800,   chantier:'CH-002', fournisseur:'ACOFASO' },
    { id:'6',  reference:'MAT-006', designation:'Planches coffrages 27mm',  categorie:'Bois & Coffrage',        unite:'pièce',    stock:95,   stockMin:50,  prixUnitaire:3500,   chantier:'CH-002', fournisseur:'Menuiserie Ziniaré' },
    { id:'7',  reference:'MAT-007', designation:'Carrelage 60x60 gris',     categorie:'Carrelage & Revêtement', unite:'m²',       stock:420,  stockMin:100, prixUnitaire:8500,   chantier:'CH-001', fournisseur:'CERAMICA' },
    { id:'8',  reference:'MAT-008', designation:'Tube PVC 110',           categorie:'Plomberie',              unite:'barre 3m', stock:28,   stockMin:30,  prixUnitaire:4800,   chantier:'CH-005', fournisseur:'Hydraulique Plus' },
    { id:'9',  reference:'MAT-009', designation:'Câble électrique 2.5mm²', categorie:'Électricité',            unite:'m',        stock:650,  stockMin:200, prixUnitaire:850,    chantier:'CH-005', fournisseur:'ELECSA' },
    { id:'10', reference:'MAT-010', designation:'Peinture acrylique blanche',categorie:'Peinture',             unite:'bidon 20L',stock:22,   stockMin:10,  prixUnitaire:22000,  chantier:'CH-001', fournisseur:'SOTOCO' },
    { id:'11', reference:'MAT-011', designation:'Hourdis 16x20x50',        categorie:'Ciment & Béton',         unite:'pièce',    stock:1800, stockMin:500, prixUnitaire:450,    chantier:'CH-002', fournisseur:'Préfabrique BF' },
    { id:'12', reference:'MAT-012', designation:'Parpaings 15x20x40',      categorie:'Ciment & Béton',         unite:'pièce',    stock:320,  stockMin:500, prixUnitaire:320,    chantier:'CH-004', fournisseur:'Préfabrique BF' },
  ];

  get filtered(): Materiau[] {
    let list = this.materiaux;
    const q = this.search().toLowerCase();
    if (q) list = list.filter(m => m.designation.toLowerCase().includes(q) || m.reference.toLowerCase().includes(q) || m.categorie.toLowerCase().includes(q));
    const t = this.activeTab();
    if (t === 'alerte') list = list.filter(m => m.stock <= m.stockMin);
    if (t === 'ok')     list = list.filter(m => m.stock > m.stockMin);
    return list;
  }

  get enAlerte(): number { return this.materiaux.filter(m => m.stock <= m.stockMin).length; }
  get valeurStock(): number { return this.materiaux.reduce((s, m) => s + m.stock * m.prixUnitaire, 0); }

  formatMoney(n: number): string {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + ' M';
    if (n >= 1_000)     return (n / 1_000).toFixed(0) + ' K';
    return n.toString();
  }

  alerteClass(m: Materiau): string {
    if (m.stock === 0)          return 'badge badge--red';
    if (m.stock <= m.stockMin)  return 'badge badge--yellow';
    return 'badge badge--green';
  }

  alerteLabel(m: Materiau): string {
    if (m.stock === 0)          return 'Rupture';
    if (m.stock <= m.stockMin)  return 'Alerte';
    return 'OK';
  }

  addMateriau() {
    if (!this.form.designation) return;
    const num = this.materiaux.length + 1;
    const reference = 'MAT-' + String(num).padStart(3, '0');
    this.materiaux.unshift({ id: Date.now().toString(), reference, ...this.form });
    this.form = this.emptyForm();
    this.showForm.set(false);
  }

  private emptyForm(): Omit<Materiau, 'id' | 'reference'> {
    return { designation: '', categorie: 'Ciment & Béton', unite: 'pièce', stock: 0, stockMin: 0, prixUnitaire: 0, chantier: '', fournisseur: '' };
  }

  readonly categories: Categorie[] = ['Ciment & Béton', 'Acier & Ferraille', 'Bois & Coffrage', 'Carrelage & Revêtement', 'Plomberie', 'Électricité', 'Peinture', 'Agrégats', 'Divers'];

  constructor(public readonly store: CollabStoreService) {}
}
