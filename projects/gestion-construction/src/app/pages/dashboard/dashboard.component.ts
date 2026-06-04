import { Component, OnInit, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

interface PieSegment { label: string; value: number; color: string; }

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/construction/dashboard/summary';
  readonly companyName = computed(() => this.store.company()?.name ?? 'BTP Manager');

  kpis = [
    { label: 'Chantiers actifs',    value: '7',          sub: '2 en retard',    icon: '',  color: '#e67e22', bg: '#fef0e7' },
    { label: 'CA en cours (FCFA)',  value: '142 M',       sub: 'â†‘ 18% ce mois', icon: '',  color: '#27ae60', bg: '#d5f5e3' },
    { label: 'Devis en attente',    value: '5',           sub: '3 Ã  relancer',  icon: '',  color: '#2980b9', bg: '#d6eaf8' },
    { label: 'Ouvriers mobilisÃ©s',  value: '48',          sub: '6 absents',     icon: '',  color: '#8e44ad', bg: '#f4ecf7' },
    { label: 'Engins opÃ©rationnels',value: '12 / 15',     sub: '3 en entretien',icon: '',  color: '#e74c3c', bg: '#fdecea' },
    { label: 'Factures impayÃ©es',   value: '3',           sub: '28 M FCFA',     icon: '',  color: '#d35400', bg: '#fef5e7' },
  ];

  chantiers = [
    { ref: 'CH-001', nom: 'RÃ©sidence Les Palmiers',    client: 'SCI Palmiers',     avancement: 72, statut: 'En cours',    budget: '85 M' },
    { ref: 'CH-002', nom: 'Immeuble Bureau Centre',    client: 'SARL Immobuild',   avancement: 45, statut: 'En cours',    budget: '120 M' },
    { ref: 'CH-003', nom: 'Route Nationale RN4',       client: 'MinistÃ¨re Travaux',avancement: 91, statut: 'Finition',    budget: '200 M' },
    { ref: 'CH-004', nom: 'EntrepÃ´t Logistique Port',  client: 'TransAfric SARL',  avancement: 18, statut: 'En retard',   budget: '55 M' },
    { ref: 'CH-005', nom: 'Ã‰cole Primaire Kossodo',    client: 'Mairie Kossodo',   avancement: 63, statut: 'En cours',    budget: '32 M' },
  ];

  barData = [
    { label: 'Jan', value: 95 },
    { label: 'FÃ©v', value: 112 },
    { label: 'Mar', value: 88 },
    { label: 'Avr', value: 142 },
    { label: 'Mai', value: 76 },
    { label: 'Juin', value: 130 },
  ];

  pieSegments: PieSegment[] = [
    { label: 'Gros Å“uvre',    value: 38, color: '#e67e22' },
    { label: 'Second Å“uvre',  value: 27, color: '#2980b9' },
    { label: 'VRD',           value: 20, color: '#27ae60' },
    { label: 'Finitions',     value: 15, color: '#8e44ad' },
  ];

  constructor(public readonly store: CollabStoreService) {}

  ngOnInit(): void {
    this.http.get<{ service: string; metrics: Array<{ code: string; label: string; value: number; color: string }> }>(this.apiUrl)
      .subscribe({
        next: summary => this.applySummary(summary),
        error: () => undefined,
      });
  }

  private applySummary(summary: { service: string; metrics: Array<{ code: string; label: string; value: number; color: string }> }): void {
    const metrics = new Map(summary.metrics.map(metric => [metric.code, metric.value] as const));
    const projects = metrics.get('projects');
    const materials = metrics.get('materials');
    const workers = metrics.get('workers');

    if (projects !== undefined) this.kpis[0].value = String(projects);
    if (materials !== undefined) this.kpis[2].value = String(materials);
    if (workers !== undefined) this.kpis[3].value = String(workers);
    this.chantiers = [...this.chantiers];
  }
  get maxBar() { return Math.max(...this.barData.map(d => d.value), 1); }

  get pieChart(): string {
    const cx = 65, cy = 65, r = 55;
    let startAngle = -Math.PI / 2;
    const total = this.pieSegments.reduce((s, p) => s + p.value, 0);
    return this.pieSegments.map(seg => {
      const angle = (seg.value / total) * 2 * Math.PI;
      const x1 = cx + r * Math.cos(startAngle);
      const y1 = cy + r * Math.sin(startAngle);
      startAngle += angle;
      const x2 = cx + r * Math.cos(startAngle);
      const y2 = cy + r * Math.sin(startAngle);
      const large = angle > Math.PI ? 1 : 0;
      return `<path d="M${cx},${cy} L${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 ${large},1 ${x2.toFixed(1)},${y2.toFixed(1)} Z" fill="${seg.color}" />`;
    }).join('');
  }

  statutClass(s: string) {
    if (s === 'En cours')  return 'badge badge--blue';
    if (s === 'Finition')  return 'badge badge--green';
    if (s === 'En retard') return 'badge badge--red';
    if (s === 'TerminÃ©')   return 'badge badge--gray';
    return 'badge badge--gray';
  }

}

