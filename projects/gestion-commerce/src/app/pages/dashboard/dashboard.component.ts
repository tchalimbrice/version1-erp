import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollabStoreService } from '../../services/collab-store.service';
import { ApiService, DashboardMetric } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['../../shared-page.scss'],
  template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title">Tableau de bord</h1>
      <p class="page__sub">{{ store.company()?.name ?? 'Commerce Manager' }}</p>
    </div>
  </div>

  <div class="kpi-grid">
    <div class="kpi-card" *ngFor="let k of kpis(); trackBy: trackByLabel" [style.border-left-color]="k.color">
      <div class="kpi-card__icon" [style.background]="k.color + '22'" [style.color]="k.color">
        {{ k.code === 'companies' ? '🏢' : k.code === 'audits' ? '📝' : k.code === 'products' ? '📦' : '' }}
      </div>
      <div class="kpi-card__body">
        <div class="kpi-card__value">{{ k.value }}</div>
        <div class="kpi-card__label">{{ k.label }}</div>
        <div class="kpi-card__sub">Mis à jour récemment</div>
      </div>
    </div>
  </div>

  <div class="charts-row">
    <div class="card">
      <div class="card__head"><span class="card__title">Ventes par mois</span></div>
      <div class="bar-chart">
        <div class="bar-chart__col" *ngFor="let b of barData; trackBy: trackByLabel">
          <div class="bar-chart__val">{{ b.val }}</div>
          <div class="bar-chart__bar" [style.height.px]="b.h" [style.background]="b.color"></div>
          <div class="bar-chart__lbl">{{ b.lbl }}</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card__head"><span class="card__title">Répartition des ventes</span></div>
      <div class="pie-wrap">
        <svg class="pie-svg" viewBox="0 0 42 42">
          <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#e3e8f0" stroke-width="6" />
          <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#27ae60" stroke-width="6" stroke-dasharray="45 55" stroke-dashoffset="25" />
          <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#3498db" stroke-width="6" stroke-dasharray="30 70" stroke-dashoffset="-20" />
          <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#f39c12" stroke-width="6" stroke-dasharray="25 75" stroke-dashoffset="-50" />
        </svg>
        <div class="pie-legend">
          <div class="pie-legend__item"><span class="pie-legend__dot" style="background:#27ae60"></span>Épicerie 45%</div>
          <div class="pie-legend__item"><span class="pie-legend__dot" style="background:#3498db"></span>Boissons 30%</div>
          <div class="pie-legend__item"><span class="pie-legend__dot" style="background:#f39c12"></span>Cosmétiques 25%</div>
        </div>
      </div>
    </div>
  </div>
` 
})
export class DashboardComponent {
  readonly store = inject(CollabStoreService);
  private readonly api = inject(ApiService);

  kpis = signal<DashboardMetric[]>([]);

  barData = [
    { lbl: 'Jan', val: '5.2M', h: 70, color: '#2ecc71' },
    { lbl: 'Fév', val: '6.1M', h: 82, color: '#27ae60' },
    { lbl: 'Mar', val: '7.5M', h: 100, color: '#1e8449' },
    { lbl: 'Avr', val: '8.4M', h: 110, color: '#27ae60' },
  ];

  constructor() {
    this.loadSummary();
  }

  private async loadSummary() {
    try {
      const response = await this.api.getDashboardSummary();
      this.kpis.set(response.metrics || []);
    } catch {
      this.kpis.set([{ code: 'error', label: 'Résumé indisponible', value: 0, color: '#e74c3c' }]);
    }
  }

  trackByLabel(index: number, item: { label?: string; lbl?: string }) {
    return item.label ?? item.lbl;
  }
}
