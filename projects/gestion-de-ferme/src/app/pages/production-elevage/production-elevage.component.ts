import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

type TypeProd = 'Lait' | 'Œufs' | 'Viande' | 'Laine' | 'Poids vif';

interface Production {
  id: string;
  date: string;
  animal: string;
  lot: string;
  type: TypeProd;
  quantite: number;
  unite: string;
  notes: string;
}

@Component({
  selector: 'app-production-elevage',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './production-elevage.component.html',
  styleUrl: './production-elevage.component.scss'
})
export class ProductionElevageComponent {
  activeTab = signal<'lait' | 'oeufs' | 'poids' | 'tout'>('tout');
  showForm = signal(false);
  filterMonth = signal('');

  form = { date: '', animal: '', lot: 'Lot A', type: 'Lait' as TypeProd, quantite: 0, unite: 'litres', notes: '' };

  productions: Production[] = [
    // Lait (bovins lot A)
    { id: '1',  date: '20/04/2024', animal: 'BV-002', lot: 'Lot A', type: 'Lait',      quantite: 8.5, unite: 'litres',  notes: '' },
    { id: '2',  date: '20/04/2024', animal: 'BV-001', lot: 'Lot A', type: 'Lait',      quantite: 6.2, unite: 'litres',  notes: '' },
    { id: '3',  date: '19/04/2024', animal: 'BV-002', lot: 'Lot A', type: 'Lait',      quantite: 9.1, unite: 'litres',  notes: '' },
    { id: '4',  date: '19/04/2024', animal: 'BV-001', lot: 'Lot A', type: 'Lait',      quantite: 5.8, unite: 'litres',  notes: '' },
    { id: '5',  date: '18/04/2024', animal: 'BV-002', lot: 'Lot A', type: 'Lait',      quantite: 8.8, unite: 'litres',  notes: 'Production normale' },
    // Œufs (volailles lot C)
    { id: '6',  date: '20/04/2024', animal: 'Lot C',  lot: 'Lot C', type: 'Œufs',     quantite: 42,  unite: 'œufs',   notes: '' },
    { id: '7',  date: '19/04/2024', animal: 'Lot C',  lot: 'Lot C', type: 'Œufs',     quantite: 38,  unite: 'œufs',   notes: '2 poules non pondeuses' },
    { id: '8',  date: '18/04/2024', animal: 'Lot C',  lot: 'Lot C', type: 'Œufs',     quantite: 45,  unite: 'œufs',   notes: '' },
    { id: '9',  date: '17/04/2024', animal: 'Lot C',  lot: 'Lot C', type: 'Œufs',     quantite: 40,  unite: 'œufs',   notes: '' },
    // Poids
    { id: '10', date: '15/04/2024', animal: 'BV-001', lot: 'Lot A', type: 'Poids vif', quantite: 320, unite: 'kg',     notes: 'Pesée mensuelle' },
    { id: '11', date: '15/04/2024', animal: 'BV-003', lot: 'Lot A', type: 'Poids vif', quantite: 310, unite: 'kg',     notes: '' },
    { id: '12', date: '15/04/2024', animal: 'PR-001', lot: 'Lot D', type: 'Poids vif', quantite: 180, unite: 'kg',     notes: 'Prête pour la vente' },
    { id: '13', date: '15/04/2024', animal: 'OV-002', lot: 'Lot B', type: 'Viande',    quantite: 18,  unite: 'kg',     notes: 'Vendu au marché' },
  ];

  get filtered(): Production[] {
    let list = this.productions;
    const tab = this.activeTab();
    if (tab === 'lait')  list = list.filter(p => p.type === 'Lait');
    if (tab === 'oeufs') list = list.filter(p => p.type === 'Œufs');
    if (tab === 'poids') list = list.filter(p => p.type === 'Poids vif' || p.type === 'Viande');
    return list;
  }

  totalLait():   number { return +this.productions.filter(p => p.type === 'Lait').reduce((s,p) => s + p.quantite, 0).toFixed(1); }
  totalOeufs():  number { return this.productions.filter(p => p.type === 'Œufs').reduce((s,p) => s + p.quantite, 0); }
  totalViande(): number { return +this.productions.filter(p => p.type === 'Viande').reduce((s,p) => s + p.quantite, 0).toFixed(1); }

  readonly laitChart = this.buildLaitChart();
  private buildLaitChart() {
    const days = ['17/04', '18/04', '19/04', '20/04'];
    return days.map(d => {
      const total = this.productions
        .filter(p => p.type === 'Lait' && p.date.startsWith(d.replace('/','/')))
        .reduce((s, p) => s + p.quantite, 0);
      return { label: d, value: total };
    });
  }

  readonly maxLait = Math.max(...this.laitChart.map(d => d.value), 1);

  addProduction() {
    if (!this.form.animal || !this.form.quantite) return;
    this.productions.unshift({ id: Date.now().toString(), ...this.form });
    this.form = { date: '', animal: '', lot: 'Lot A', type: 'Lait', quantite: 0, unite: 'litres', notes: '' };
    this.showForm.set(false);
  }

  typeClass(t: TypeProd): string {
    const map: Record<TypeProd, string> = {
      'Lait': 'type-badge type-lait',
      'Œufs': 'type-badge type-oeufs',
      'Viande': 'type-badge type-viande',
      'Laine': 'type-badge type-laine',
      'Poids vif': 'type-badge type-poids',
    };
    return map[t];
  }

  constructor(public readonly store: CollabStoreService) {}
}
