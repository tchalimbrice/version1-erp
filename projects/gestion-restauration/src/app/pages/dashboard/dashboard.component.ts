import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface ChartPoint { x: number; y: number; }
interface PieSegment { label: string; pct: number; color: string; dashArray: string; dashOffset: number; }
interface Stat { label: string; value: string; change: string; up: boolean; icon: string; color: string; bg: string; }
interface Commande { id: string; table: string; date: string; total: string; statut: string; }

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/restauration/dashboard/summary';

  readonly stats: Stat[] = [
    { label: "Chiffre d'affaires", value: '12 450 €', change: '+12% vs hier', up: true, icon: 'revenue',       color: '#10b981', bg: '#d1fae5' },
    { label: 'Commandes',          value: '63',        change: '+8% vs hier',  up: true, icon: 'orders',        color: '#3b82f6', bg: '#dbeafe' },
    { label: 'Réservations',       value: '24',        change: '+5% vs hier',  up: true, icon: 'reservations',  color: '#8b5cf6', bg: '#ede9fe' },
    { label: 'Clients',            value: '142',       change: '+15% vs hier', up: true, icon: 'clients',       color: '#f59e0b', bg: '#fef3c7' },
  ];

  readonly recentCommandes: Commande[] = [
    { id: '#1025', table: 'Table 5', date: '30/04/2024 13:49', total: '45,50 €', statut: 'En préparation' },
    { id: '#1024', table: 'Table 2', date: '30/04/2024 13:27', total: '23,00 €', statut: 'Servie'         },
    { id: '#1023', table: 'Table 8', date: '30/04/2024 13:15', total: '38,25 €', statut: 'En préparation' },
    { id: '#1022', table: 'Table 1', date: '29/04/2024 12:16', total: '16,50 €', statut: 'Annulée'        },
  ];

  readonly days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  readonly revenueValues = [1200, 1650, 1450, 1900, 2150, 1870, 2450];
  readonly linePath      = this.buildLinePath(this.revenueValues);
  readonly lineAreaPath  = this.buildAreaPath(this.revenueValues);
  readonly chartPoints   = this.buildPoints(this.revenueValues);

  readonly pieData = [
    { label: 'Plats',    pct: 48, color: '#ef4444' },
    { label: 'Boissons', pct: 22, color: '#3b82f6' },
    { label: 'Desserts', pct: 18, color: '#f59e0b' },
    { label: 'Autres',   pct: 12, color: '#6b7280' },
  ];
  readonly pieSegments = this.buildPie(this.pieData);

  constructor() {}

  ngOnInit(): void {
    this.http.get<{ service: string; metrics: Array<{ code: string; label: string; value: number; color: string }> }>(this.apiUrl)
      .subscribe({
        next: summary => this.applySummary(summary),
        error: () => undefined,
      });
  }

  private applySummary(summary: { service: string; metrics: Array<{ code: string; label: string; value: number; color: string }> }): void {
    const metrics = new Map(summary.metrics.map(metric => [metric.code, metric.value] as const));
    const reservations = metrics.get('reservations');
    const orders = metrics.get('orders');
    const tables = metrics.get('tables');

    if (orders !== undefined) this.stats[0].value = `${orders.toLocaleString('fr-FR')} €`;
    if (orders !== undefined) this.stats[1].value = String(orders);
    if (reservations !== undefined) this.stats[2].value = String(reservations);
    if (tables !== undefined) this.stats[3].value = String(tables);
  }

  statutClass(s: string): string {
    if (s === 'Servie')          return 'badge badge--green';
    if (s === 'En préparation')  return 'badge badge--orange';
    return 'badge badge--red';
  }

  private buildLinePath(v: number[]): string {
    const W = 700, H = 150, pad = 12;
    const mn = Math.min(...v), mx = Math.max(...v);
    return v.map((val, i) => {
      const x = i * (W / (v.length - 1));
      const y = H - pad - ((val - mn) / (mx - mn)) * (H - pad * 2);
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(' ');
  }

  private buildAreaPath(v: number[]): string {
    return `${this.buildLinePath(v)} L 700 150 L 0 150 Z`;
  }

  private buildPoints(v: number[]): ChartPoint[] {
    const W = 700, H = 150, pad = 12;
    const mn = Math.min(...v), mx = Math.max(...v);
    return v.map((val, i) => ({
      x: Number((i * (W / (v.length - 1))).toFixed(1)),
      y: Number((H - pad - ((val - mn) / (mx - mn)) * (H - pad * 2)).toFixed(1)),
    }));
  }

  private buildPie(items: { label: string; pct: number; color: string }[]): PieSegment[] {
    const r = 60, circ = 2 * Math.PI * r;
    let offset = 0;
    return items.map(item => {
      const len = (item.pct / 100) * circ;
      const seg: PieSegment = {
        label: item.label, pct: item.pct, color: item.color,
        dashArray: `${len.toFixed(2)} ${circ.toFixed(2)}`,
        dashOffset: offset,
      };
      offset -= len;
      return seg;
    });
  }
}
