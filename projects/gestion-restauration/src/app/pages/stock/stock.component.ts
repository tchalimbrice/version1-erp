import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface StockItem { nom: string; categorie: string; qte: number; unite: string; statut: string; }

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock.component.html',
})
export class StockComponent {
  search = signal('');
  showForm = signal(false);
  itemForm: StockItem = { nom: '', categorie: 'Viandes', qte: 0, unite: 'kg', statut: 'En stock' };

  readonly categories = ['Viandes', 'Boulangerie', 'Produits laitiers', 'Légumes', 'Surgelés', 'Boissons', 'Autres'];
  readonly units = ['kg', 'pcs', 'cl', 'L', 'g'];

  items = signal<StockItem[]>([
    { nom: 'Steak haché',       categorie: 'Viandes',          qte: 12, unite: 'kg',  statut: 'En stock'    },
    { nom: 'Pain burger',       categorie: 'Boulangerie',       qte: 24, unite: 'pcs', statut: 'En stock'    },
    { nom: 'Fromage cheddar',   categorie: 'Produits laitiers', qte: 3,  unite: 'kg',  statut: 'Stock faible' },
    { nom: 'Salade verte',      categorie: 'Légumes',           qte: 5,  unite: 'kg',  statut: 'En stock'    },
    { nom: 'Tomate',            categorie: 'Légumes',           qte: 1,  unite: 'kg',  statut: 'Stock faible' },
    { nom: 'Frites surgelées',  categorie: 'Surgelés',          qte: 5,  unite: 'kg',  statut: 'En stock'    },
    { nom: 'Pâte à pizza',      categorie: 'Boulangerie',       qte: 8,  unite: 'pcs', statut: 'En stock'    },
    { nom: 'Coca-Cola',         categorie: 'Boissons',          qte: 48, unite: 'cl',  statut: 'En stock'    },
  ]);

  readonly filtered = computed(() => {
    const q = this.search().toLowerCase();
    if (!q) return this.items();
    return this.items().filter(i => i.nom.toLowerCase().includes(q) || i.categorie.toLowerCase().includes(q));
  });

  openAddForm() {
    this.itemForm = { nom: '', categorie: 'Viandes', qte: 0, unite: 'kg', statut: 'En stock' };
    this.showForm.set(true);
  }

  closeForm() {
    this.showForm.set(false);
  }

  submitForm() {
    const item = this.itemForm;
    if (!item.nom.trim()) return;
    this.items.update(list => [...list, { ...item, nom: item.nom.trim() }]);
    this.closeForm();
  }

  deleteItem(name: string) {
    this.items.update(list => list.filter(item => item.nom !== name));
  }

  statutClass(s: string): string {
    return s === 'En stock' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700';
  }
}
