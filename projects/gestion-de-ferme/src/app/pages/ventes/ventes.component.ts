import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CollabStoreService, SaleEntry } from '../../services/collab-store.service';

@Component({
  selector: 'app-ventes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ventes.component.html',
  styleUrl: './ventes.component.scss'
})
export class VentesComponent {
  readonly sales = computed(() => this.store.sales());
  readonly totalSales = computed(() => this.store.sales().reduce((sum, s) => sum + s.total, 0));

  constructor(private readonly store: CollabStoreService) {
    if (this.store.sales().length === 0) {
      this.store.setSales(this.seedSales());
    }
  }

  addSale() {
    const sample: SaleEntry = {
      id: crypto.randomUUID().slice(0, 8),
      product: 'Tomates',
      quantity: 40,
      unit: 'kg',
      unitPrice: 900,
      total: 36000,
      client: 'Marché Central',
      date: new Date().toISOString()
    };
    this.store.addSale(sample);
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
