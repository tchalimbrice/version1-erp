import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface OrderItem { name: string; price: number; qty: number; }

const CATALOGUE = [
  { name: 'Burger Classic',    price: 12.50 },
  { name: 'Pizza Margherita',  price: 11.00 },
  { name: 'Salade César',      price: 9.50  },
  { name: 'Steak Frites',      price: 16.50 },
  { name: 'Pâtes Carbonara',   price: 13.00 },
  { name: 'Poisson du Jour',   price: 15.50 },
  { name: 'Coca-Cola 33cl',    price: 3.00  },
  { name: 'Jus d\'orange',     price: 4.00  },
  { name: 'Eau minérale',      price: 2.00  },
  { name: 'Fondant chocolat',  price: 6.00  },
  { name: 'Crème brûlée',      price: 5.50  },
];

@Component({
  selector: 'app-nouvelle-commande',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nouvelle-commande.component.html',
})
export class NouvelleCommandeComponent {
  selectedTable  = '';
  clientName     = '';
  serveur        = '';
  remarks        = '';
  productSearch  = '';
  showCatalogue  = false;

  readonly tables  = ['Table 1','Table 2','Table 3','Table 4','Table 5','Table 6','Table 7','Table 8','Table 9','Table 10'];
  readonly serveurs = ['Marc Dupont','Julie Martin','Thomas Bernard','Laura Petit'];
  readonly catalogue = CATALOGUE;

  items = signal<OrderItem[]>([]);

  readonly subTotal  = computed(() => this.items().reduce((s, i) => s + i.price * i.qty, 0));
  readonly tva       = computed(() => this.subTotal() * 0.10);
  readonly total     = computed(() => this.subTotal() + this.tva());

  get filteredCatalogue() {
    const q = this.productSearch.toLowerCase();
    return this.catalogue.filter(p => !q || p.name.toLowerCase().includes(q));
  }

  addProduct(product: { name: string; price: number }) {
    this.items.update(items => {
      const existing = items.find(i => i.name === product.name);
      if (existing) return items.map(i => i.name === product.name ? { ...i, qty: i.qty + 1 } : i);
      return [...items, { name: product.name, price: product.price, qty: 1 }];
    });
    this.showCatalogue = false;
    this.productSearch = '';
  }

  changeQty(name: string, delta: number) {
    this.items.update(items =>
      items.map(i => i.name === name ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
    );
  }

  removeItem(name: string) {
    this.items.update(items => items.filter(i => i.name !== name));
  }

  constructor(private readonly router: Router) {}

  annuler() { this.router.navigate(['/commandes']); }

  enregistrer() {
    if (!this.selectedTable || this.items().length === 0) return;
    this.router.navigate(['/commandes']);
  }
}
