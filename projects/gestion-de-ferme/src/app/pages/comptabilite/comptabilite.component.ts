import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CollabStoreService, SaleEntry } from '../../services/collab-store.service';

type TypeTx = 'Recette' | 'Dépense';

interface Transaction {
  id: string; date: string; libelle: string; type: TypeTx; montant: number; categorie: string;
}

@Component({
  selector: 'app-comptabilite',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './comptabilite.component.html',
  styleUrl: './comptabilite.component.scss'
})
export class ComptabiliteComponent {
  readonly sales = computed(() => this.store.sales());
  readonly totalRecettes = computed(() => this.sales().reduce((s, v) => s + v.total, 0) + 320000);
  readonly totalDepenses = computed(() => 185000);
  readonly solde = computed(() => this.totalRecettes() - this.totalDepenses());

  showForm = false;
  form = { libelle: '', type: 'Recette' as TypeTx, montant: 0, categorie: 'Vente' };

  transactions: Transaction[] = [
    { id: '1', date: '26/04/2024', libelle: 'Vente maïs – Marché Bouaké',     type: 'Recette', montant: 185000, categorie: 'Vente'},
    { id: '2', date: '25/04/2024', libelle: 'Achat semences saison 2',         type: 'Dépense', montant: 45000,  categorie: 'Intrants'},
    { id: '3', date: '24/04/2024', libelle: 'Vente volailles – Coop Dabou',    type: 'Recette', montant: 98000,  categorie: 'Vente'},
    { id: '4', date: '23/04/2024', libelle: 'Salaires ouvriers – Avril',       type: 'Dépense', montant: 120000, categorie: 'Main-d\'œuvre' },
    { id: '5', date: '22/04/2024', libelle: 'Vente tomates – Client direct',   type: 'Recette', montant: 62000,  categorie: 'Vente'},
    { id: '6', date: '20/04/2024', libelle: 'Carburant tracteurs',             type: 'Dépense', montant: 20000,  categorie: 'Matériel'},
  ];

  get recettes(): number { return this.transactions.filter(t => t.type === 'Recette').reduce((s, t) => s + t.montant, 0); }
  get depenses(): number { return this.transactions.filter(t => t.type === 'Dépense').reduce((s, t) => s + t.montant, 0); }

  constructor(private readonly store: CollabStoreService, private readonly router: Router) {}

  formatMoney(n: number): string { return new Intl.NumberFormat('fr-FR').format(n); }

  addTransaction() {
    if (!this.form.libelle || !this.form.montant) return;
    const now = new Date();
    this.transactions.unshift({
      id: Date.now().toString(),
      date: `${now.getDate().toString().padStart(2,'0')}/${(now.getMonth()+1).toString().padStart(2,'0')}/${now.getFullYear()}`,
      ...this.form
    });
    this.form = { libelle: '', type: 'Recette', montant: 0, categorie: 'Vente' };
    this.showForm = false;
  }

  logout() { this.store.logout(); this.router.navigate(['/connexion']); }
}
