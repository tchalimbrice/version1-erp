import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CollabStoreService, SaleEntry } from '../../services/collab-store.service';

@Component({
  selector: 'app-ventes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './ventes.component.html',
  styleUrl: './ventes.component.scss'
})
export class VentesComponent {
  readonly sales = computed(() => this.store.sales());
  readonly totalSales = computed(() => this.store.sales().reduce((sum, sale) => sum + sale.total, 0));

  showForm = false;
  form = {
    product: 'Tomates',
    quantity: 0,
    unit: 'kg',
    unitPrice: 0,
    client: ''
  };

  constructor(private readonly store: CollabStoreService) {
    if (this.store.sales().length === 0) {
      this.store.setSales(this.seedSales());
    }
  }

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  addSale() {
    if (!this.form.product || !this.form.quantity || !this.form.unitPrice || !this.form.client) {
      return;
    }

    const entry: SaleEntry = {
      id: crypto.randomUUID().slice(0, 8),
      product: this.form.product,
      quantity: Number(this.form.quantity),
      unit: this.form.unit,
      unitPrice: Number(this.form.unitPrice),
      total: Number(this.form.quantity) * Number(this.form.unitPrice),
      client: this.form.client,
      date: new Date().toISOString()
    };

    this.store.addSale(entry);
    this.form = {
      product: 'Tomates',
      quantity: 0,
      unit: 'kg',
      unitPrice: 0,
      client: ''
    };
    this.showForm = false;
  }

  formatMoney(amount: number): string {
    return new Intl.NumberFormat('fr-FR').format(amount);
  }

  private seedSales(): SaleEntry[] {
    return [
      {
        id: '00159002',
        product: 'Maïs',
        quantity: 50,
        unit: 'kg',
        unitPrice: 1000,
        total: 50000,
        client: 'Market Central',
        date: new Date().toISOString()
      },
      {
        id: '00159003',
        product: 'Lait',
        quantity: 30,
        unit: 'L',
        unitPrice: 1500,
        total: 45000,
        client: 'Client rural',
        date: new Date().toISOString()
      },
      {
        id: '00159004',
        product: 'Oeufs',
        quantity: 200,
        unit: 'pièces',
        unitPrice: 450,
        total: 90000,
        client: 'Client local',
        date: new Date().toISOString()
      }
    ];
  }
}
