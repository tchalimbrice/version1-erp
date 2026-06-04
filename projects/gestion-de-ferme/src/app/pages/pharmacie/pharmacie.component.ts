import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

interface MedicineRow {
  id: string;
  name: string;
  category: string;
  stock: number;
  threshold: number;
  unit: string;
  status: 'OK' | 'A commander';
}

@Component({
  selector: 'app-pharmacie',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './pharmacie.component.html',
  styleUrl: './pharmacie.component.scss'
})
export class PharmacieComponent {
  readonly showForm = signal(false);

  form = {
    name: '',
    category: 'Vitamines',
    stock: 0,
    threshold: 0,
    unit: 'boîtes'
  };

  medicines: MedicineRow[] = [
    { id: '1', name: 'Ivermectine', category: 'Antiparasitaire', stock: 24, threshold: 10, unit: 'boîtes', status: 'OK' },
    { id: '2', name: 'Vitamines B', category: 'Vitamines', stock: 8, threshold: 12, unit: 'boîtes', status: 'A commander' },
    { id: '3', name: 'Vaccin Newcastle', category: 'Vaccin', stock: 18, threshold: 10, unit: 'flacons', status: 'OK' },
    { id: '4', name: 'Antibiotique', category: 'Traitement', stock: 6, threshold: 8, unit: 'flacons', status: 'A commander' }
  ];

  constructor(private readonly store: CollabStoreService, private readonly router: Router) {}

  get totalStock(): number {
    return this.medicines.reduce((sum, med) => sum + med.stock, 0);
  }

  get lowStockCount(): number {
    return this.medicines.filter(med => med.status === 'A commander').length;
  }

  openForm() {
    this.showForm.set(true);
  }

  closeForm() {
    this.showForm.set(false);
  }

  addMedicine() {
    if (!this.form.name || !this.form.stock) return;
    const status: MedicineRow['status'] = Number(this.form.stock) <= Number(this.form.threshold) ? 'A commander' : 'OK';
    this.medicines = [
      {
        id: crypto.randomUUID(),
        name: this.form.name,
        category: this.form.category,
        stock: Number(this.form.stock),
        threshold: Number(this.form.threshold),
        unit: this.form.unit,
        status
      },
      ...this.medicines
    ];
    this.form = { name: '', category: 'Vitamines', stock: 0, threshold: 0, unit: 'boîtes' };
    this.showForm.set(false);
  }

  formatMoney(value: number): string {
    return new Intl.NumberFormat('fr-FR').format(value);
  }

  logout() {
    this.store.logout();
    this.router.navigate(['/connexion']);
  }
}
