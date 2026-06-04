import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface FoodRow {
  id: string;
  name: string;
  category: string;
  stock: number;
  threshold: number;
  unit: string;
  status: 'ok' | 'warning' | 'low';
  icon: 'corn' | 'soy' | 'hay' | 'wheat' | 'feed';
}

interface FoodForm {
  name: string;
  category: string;
  stock: number;
  threshold: number;
  unit: string;
}

@Component({
  selector: 'app-aliments',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './aliments.component.html',
  styleUrl: './aliments.component.scss'
})
export class AlimentsComponent {
  readonly search = signal('');
  readonly showForm = signal(false);
  readonly foods = signal<FoodRow[]>([
    { id: '1', name: 'Maïs', category: 'Céréales', stock: 650, threshold: 200, unit: 'kg', status: 'ok', icon: 'corn' },
    { id: '2', name: 'Tourteau de soja', category: 'Protéines', stock: 300, threshold: 100, unit: 'kg', status: 'ok', icon: 'soy' },
    { id: '3', name: 'Foin', category: 'Fourrages', stock: 500, threshold: 150, unit: 'kg', status: 'ok', icon: 'hay' },
    { id: '4', name: 'Son de blé', category: 'Céréales', stock: 200, threshold: 80, unit: 'kg', status: 'warning', icon: 'wheat' },
    { id: '5', name: 'Aliment volaille', category: 'Aliments composés', stock: 150, threshold: 60, unit: 'kg', status: 'warning', icon: 'feed' }
  ]);

  form: FoodForm = {
    name: '',
    category: 'Céréales',
    stock: 0,
    threshold: 0,
    unit: 'kg'
  };

  readonly visibleFoods = computed(() => {
    const query = this.search().trim().toLowerCase();
    if (!query) return this.foods();
    return this.foods().filter(food =>
      [food.name, food.category, food.unit].some(value => value.toLowerCase().includes(query))
    );
  });

  openForm() {
    this.showForm.set(true);
  }

  closeForm() {
    this.showForm.set(false);
  }

  addFood() {
    if (!this.form.name || !this.form.category) return;
    const status = this.form.stock <= this.form.threshold ? 'warning' : 'ok';
    this.foods.update(list => [
      {
        id: crypto.randomUUID(),
        name: this.form.name,
        category: this.form.category,
        stock: this.form.stock,
        threshold: this.form.threshold,
        unit: this.form.unit,
        status,
        icon: 'feed'
      },
      ...list
    ]);
    this.form = { name: '', category: 'Céréales', stock: 0, threshold: 0, unit: 'kg' };
    this.showForm.set(false);
  }

  trackById(_: number, item: FoodRow) {
    return item.id;
  }

  statusLabel(status: FoodRow['status']) {
    if (status === 'ok') return 'OK';
    if (status === 'warning') return 'À surveiller';
    return 'Stock faible';
  }
}
