import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  subCategory: string;
  description: string;
  image: string;
}

type Tab = 'Plats' | 'Boissons' | 'Desserts' | 'Catégories';

const BLANK_FORM = (): Omit<MenuItem, 'id'> => ({
  name: '', price: 0, category: 'Plats', subCategory: 'Plat principal', description: '', image: '',
});

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {

  readonly tabs: Tab[] = ['Plats', 'Boissons', 'Desserts', 'Catégories'];
  activeTab = signal<Tab>('Plats');

  items = signal<MenuItem[]>([
    {
      id: '1', name: 'Burger Classic', price: 13.50,
      category: 'Plats', subCategory: 'Plat principal',
      description: 'Burger fait maison avec steak haché 180g, cheddar fondu, laitue, tomate fraîche et oignons caramélisés. Servi avec salade verte et sauce maison.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: '2', name: 'Pizza Margherita', price: 11.00,
      category: 'Plats', subCategory: 'Plat principal',
      description: 'Pizza italienne au feu de bois, sauce tomate San Marzano, mozzarella fior di latte et basilic frais. Diamètre 30cm.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: '3', name: 'Salade César', price: 9.50,
      category: 'Plats', subCategory: 'Salade',
      description: 'Salade romaine croquante, poulet grillé, croûtons de pain au levain, copeaux de parmesan et sauce César maison.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: '4', name: 'Steak Frites', price: 16.50,
      category: 'Plats', subCategory: 'Plat principal',
      description: 'Entrecôte de bœuf charolais 200g, cuisson au choix, accompagnée de frites maison dorées et d\'une sauce béarnaise.',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: '5', name: 'Pâtes Carbonara', price: 11.50,
      category: 'Plats', subCategory: 'Plat principal',
      description: 'Spaghetti al dente, sauce carbonara crémeuse, lardons fumés de qualité et parmesan Parmigiano Reggiano râpé.',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: '6', name: 'Poisson du Jour', price: 16.50,
      category: 'Plats', subCategory: 'Plat principal',
      description: 'Filet de poisson frais choisi chaque matin au marché, légumes de saison et beurre citronné à l\'estragon.',
      image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: '7', name: 'Eau minérale', price: 2.00,
      category: 'Boissons', subCategory: 'Eau',
      description: 'Eau minérale naturelle 50cl en bouteille, plate ou gazeuse selon votre préférence.',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: '8', name: "Jus d'orange", price: 4.00,
      category: 'Boissons', subCategory: 'Jus de fruit',
      description: 'Jus d\'orange pressé à la minute avec des oranges fraîches de saison, sans ajout de sucre.',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: '9', name: 'Coca-Cola 33cl', price: 3.00,
      category: 'Boissons', subCategory: 'Soda',
      description: 'Coca-Cola original en canette 33cl, servi bien frais avec glaçons et quartier de citron.',
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: '10', name: 'Fondant chocolat', price: 6.00,
      category: 'Desserts', subCategory: 'Gâteau',
      description: 'Fondant au chocolat noir 70% coulant, cuit à la minute, servi chaud avec une boule de glace vanille de Madagascar.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: '11', name: 'Crème brûlée', price: 5.50,
      category: 'Desserts', subCategory: 'Crème',
      description: 'Crème brûlée à la vanille de Madagascar, caramélisée au chalumeau, servie dans son ramequin traditionnel.',
      image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: '12', name: 'Tarte Tatin', price: 6.50,
      category: 'Desserts', subCategory: 'Tarte',
      description: 'Tarte tatin aux pommes Golden caramélisées, servie tiède avec une quenelle de crème fraîche épaisse.',
      image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600&q=80&auto=format&fit=crop',
    },
  ]);

  categories = signal(['Plat principal', 'Entrée', 'Salade', 'Dessert', 'Boisson', 'Soda', 'Jus de fruit', 'Eau', 'Gâteau', 'Crème', 'Tarte']);

  readonly filtered = computed(() => {
    const tab = this.activeTab();
    if (tab === 'Catégories') return [];
    return this.items().filter(i => i.category === tab);
  });

  /* ── Detail modal ── */
  selectedItem = signal<MenuItem | null>(null);
  openDetail(item: MenuItem) { this.selectedItem.set(item); }
  closeDetail()              { this.selectedItem.set(null); }

  /* ── 3-dot dropdown ── */
  openDropdownId = signal<string | null>(null);
  toggleDropdown(id: string, event: Event) {
    event.stopPropagation();
    this.openDropdownId.update(v => v === id ? null : id);
  }
  closeAllDropdowns() { this.openDropdownId.set(null); }

  /* ── Delete ── */
  deleteItem(item: MenuItem, event?: Event) {
    event?.stopPropagation();
    if (confirm(`Supprimer "${item.name}" ?`)) {
      this.items.update(l => l.filter(i => i.id !== item.id));
      this.closeDetail();
    }
    this.openDropdownId.set(null);
  }

  /* ── Add / Edit form ── */
  formMode = signal<'add' | 'edit' | null>(null);
  formItemId = '';
  formItem = BLANK_FORM();

  openAddForm() {
    this.formItem = BLANK_FORM();
    this.formItemId = '';
    this.formMode.set('add');
    this.closeDetail();
  }

  openEditForm(item: MenuItem, event?: Event) {
    event?.stopPropagation();
    this.formItem = { name: item.name, price: item.price, category: item.category, subCategory: item.subCategory, description: item.description, image: item.image };
    this.formItemId = item.id;
    this.formMode.set('edit');
    this.closeDetail();
    this.openDropdownId.set(null);
  }

  closeForm() { this.formMode.set(null); }

  submitForm() {
    if (!this.formItem.name.trim()) return;
    const mode = this.formMode();
    if (mode === 'add') {
      this.items.update(l => [...l, { ...this.formItem, id: Date.now().toString() }]);
    } else if (mode === 'edit') {
      const id = this.formItemId;
      this.items.update(l => l.map(i => i.id === id ? { ...this.formItem, id } : i));
    }
    this.closeForm();
  }

  /* ── Image error fallback ── */
  imgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    (img.parentElement as HTMLElement).style.background = '#e2e8f0';
  }
}
