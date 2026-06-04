import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CollabStoreService, SaleEntry } from '../../services/collab-store.service';

interface FinanceTransaction {
  date: string;
  type: 'Revenu' | 'Depense';
  category: string;
  description: string;
  amount: number;
  method: string;
}

interface TrendPoint {
  label: string;
  revenue: number;
  expense: number;
  profit: number;
}

interface SummaryItem {
  label: string;
  value: number;
  tone: 'green' | 'red' | 'blue' | 'orange';
  delta: string;
}

interface ExpenseItem {
  category: string;
  amount: number;
  color: string;
}

@Component({
  selector: 'app-finances',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './finances.component.html',
  styleUrl: './finances.component.scss'
})
export class FinancesComponent {
  readonly sales = computed(() => this.store.sales());
  readonly revenueTotal = computed(() => this.sales().reduce((sum, sale) => sum + sale.total, 0));
  readonly expenseTotal = computed(() => this.expenseItems.reduce((sum, item) => sum + item.amount, 0));
  readonly netProfit = computed(() => this.revenueTotal() - this.expenseTotal());
  readonly margin = computed(() => (this.revenueTotal() ? (this.netProfit() / this.revenueTotal()) * 100 : 0));

  readonly trend = computed<TrendPoint[]>(() => [
    { label: 'Dec', revenue: 1500000, expense: 820000, profit: 680000 },
    { label: 'Jan', revenue: 1800000, expense: 900000, profit: 900000 },
    { label: 'Feb', revenue: 1950000, expense: 980000, profit: 970000 },
    { label: 'Mar', revenue: 2200000, expense: 1020000, profit: 1180000 },
    { label: 'Apr', revenue: 2100000, expense: 1100000, profit: 1000000 },
    { label: 'May', revenue: 2450000, expense: 1230000, profit: 1220000 }
  ]);

  readonly expenseItems: ExpenseItem[] = [
    { category: 'Aliments', amount: 516000, color: '#16a34a' },
    { category: 'Soins veterinaires', amount: 264000, color: '#ef4444' },
    { category: "Main d'oeuvre", amount: 184000, color: '#f59e0b' },
    { category: 'Transport', amount: 123000, color: '#a855f7' },
    { category: 'Equipement', amount: 98000, color: '#0ea5e9' },
    { category: 'Autres', amount: 89000, color: '#64748b' }
  ];

  readonly summaryCards = computed<SummaryItem[]>(() => [
    { label: 'Revenus totaux', value: this.revenueTotal(), tone: 'green', delta: '+12.4% par rapport a avril' },
    { label: 'Depenses totales', value: this.expenseTotal(), tone: 'red', delta: '+5.5% par rapport a avril' },
    { label: 'Benefice net', value: this.netProfit(), tone: 'orange', delta: '+28.3% par rapport a avril' },
    { label: 'Marge beneficaire', value: this.margin(), tone: 'blue', delta: '+8.1% par rapport a avril' }
  ]);

  readonly transactions = computed(() => this.buildTransactions());
  readonly transactionSummary = computed(() => [
    { label: 'Revenus totaux', value: this.formatMoney(this.revenueTotal()) + ' FCFA' },
    { label: 'Depenses totales', value: this.formatMoney(this.expenseTotal()) + ' FCFA' },
    { label: 'Benefice net', value: this.formatMoney(this.netProfit()) + ' FCFA' },
    { label: 'Marge beneficaire', value: this.margin().toFixed(1) + '%' },
    { label: 'Solde du compte', value: this.formatMoney(this.netProfit()) + ' FCFA' }
  ]);

  constructor(private readonly store: CollabStoreService) {
    if (this.store.sales().length === 0) {
      this.store.setSales(this.seedSales());
    }
  }

  formatMoney(amount: number): string {
    return new Intl.NumberFormat('fr-FR').format(Math.round(amount));
  }

  linePath(selector: 'revenue' | 'expense' | 'profit'): string {
    const points = this.trend();
    if (!points.length) return '';

    const width = 340;
    const height = 190;
    const values = points.map(point => point[selector]);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const stepX = points.length === 1 ? 0 : width / (points.length - 1);

    return points
      .map((point, index) => {
        const x = index * stepX;
        const y = height - ((point[selector] - min) / range) * (height - 20) + 10;
        return `${index === 0 ? 'M' : 'L'} ${x + 10} ${y}`;
      })
      .join(' ');
  }

  lineFill(selector: 'revenue' | 'expense' | 'profit'): string {
    const points = this.trend();
    if (!points.length) return '';

    const width = 340;
    const height = 190;
    const values = points.map(point => point[selector]);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const stepX = points.length === 1 ? 0 : width / (points.length - 1);
    const path = points.map((point, index) => {
      const x = index * stepX;
      const y = height - ((point[selector] - min) / range) * (height - 20) + 10;
      return `${x + 10},${y}`;
    });

    return `M 10 190 L ${path.join(' L ')} L 350 190 Z`;
  }

  chartValue(selector: 'revenue' | 'expense' | 'profit'): number {
    return Math.max(...this.trend().map(point => point[selector]));
  }

  totalExpenses(): number {
    return this.expenseTotal();
  }

  donutDash(offset: number): string {
    const total = this.expenseItems.reduce((sum, item) => sum + item.amount, 0) || 1;
    const pct = (offset / total) * 100;
    return `${pct} ${100 - pct}`;
  }

  get totalExpensePercent(): number {
    return this.expenseTotal();
  }

  buildDonutSegments() {
    const total = this.expenseTotal() || 1;
    let current = 0;
    return this.expenseItems.map(item => {
      const start = current;
      const span = (item.amount / total) * 100;
      current += span;
      return {
        label: item.category,
        amount: item.amount,
        percent: span,
        start,
        end: current,
        color: item.color
      };
    });
  }

  private buildTransactions(): FinanceTransaction[] {
    const revenueRows: FinanceTransaction[] = this.sales().slice(0, 5).map((sale, index) => ({
      date: this.sampleDate(index),
      type: 'Revenu',
      category: 'Vente',
      description: `${sale.product} - ${sale.quantity} ${sale.unit}`,
      amount: sale.total,
      method: index % 2 === 0 ? 'Especes' : 'Mobile Money'
    }));

    const expenseRows: FinanceTransaction[] = [
      { date: '30/05/2024', type: 'Depense', category: 'Aliments', description: 'Achat de mais', amount: 450000, method: 'Especes' },
      { date: '28/05/2024', type: 'Depense', category: 'Aliments', description: 'Aliment betail', amount: 220000, method: 'Mobile Money' },
      { date: '25/05/2024', type: 'Depense', category: 'Soins veterinaires', description: 'Vaccins et medicaments', amount: 120000, method: 'Especes' },
      { date: '21/05/2024', type: 'Revenu', category: 'Vente', description: 'Vente de lait frais', amount: 175000, method: 'Especes' },
      { date: '17/05/2024', type: 'Depense', category: 'Transport', description: 'Transport des aliments', amount: 60000, method: 'Mobile Money' }
    ];

    return [...revenueRows, ...expenseRows];
  }

  private sampleDate(index: number): string {
    const month = 5 - Math.min(index, 4);
    return `${String(30 - index * 2).padStart(2, '0')}/0${Math.max(month, 1)}/2024`;
  }

  private seedSales(): SaleEntry[] {
    return [
      {
        id: '00159002',
        product: 'Mais',
        quantity: 50,
        unit: 'kg',
        unitPrice: 1000,
        total: 50000,
        client: 'Marche central',
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
        unit: 'pieces',
        unitPrice: 450,
        total: 90000,
        client: 'Client local',
        date: new Date().toISOString()
      }
    ];
  }
}
