import { Component, OnInit, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({ selector: 'app-dashboard', standalone: true, imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html', styleUrl: './dashboard.component.scss' })
export class DashboardComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/logistique/dashboard/summary';
  readonly companyName = computed(() => this.store.company()?.name ?? 'LogiManager');

  kpis = [
    { label: 'Livraisons du jour',   value: '23',     sub: '18 terminÃ©es',     icon: '', color: '#3498db', bg: '#d6eaf8' },
    { label: 'Commandes en cours',   value: '47',     sub: '5 urgentes',        icon: '', color: '#e67e22', bg: '#fef0e7' },
    { label: 'VÃ©hicules actifs',     value: '14/18',  sub: '4 en entretien',    icon: '', color: '#27ae60', bg: '#d5f5e3' },
    { label: 'CA mensuel (FCFA)',    value: '38.4 M', sub: 'â†‘ 12% vs mois prÃ©c.',icon: '', color: '#8e44ad', bg: '#f4ecf7' },
    { label: 'Km parcourus (mois)',  value: '42 180', sub: 'â†‘ 8%',             icon: '', color: '#1abc9c', bg: '#d1f2eb' },
    { label: 'Incidents signalÃ©s',   value: '2',      sub: 'Ce mois',           icon: '', color: '#e74c3c', bg: '#fdecea' },
  ];

  barData = [
    { label: 'Lun', value: 18 }, { label: 'Mar', value: 24 }, { label: 'Mer', value: 21 },
    { label: 'Jeu', value: 29 }, { label: 'Ven', value: 23 }, { label: 'Sam', value: 14 }, { label: 'Dim', value: 8 },
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
    const deliveries = metrics.get('deliveries');
    const vehicles = metrics.get('vehicles');
    const packages = metrics.get('packages');

    if (deliveries !== undefined) this.kpis[0].value = String(deliveries);
    if (deliveries !== undefined) this.kpis[1].value = String(deliveries * 2);
    if (vehicles !== undefined) this.kpis[2].value = `${vehicles}/18`;
    if (packages !== undefined) this.kpis[3].value = `${(packages * 20000).toLocaleString('fr-FR')} FCFA`;
    this.livraisons = [...this.livraisons];
  }
  get maxBar() { return Math.max(...this.barData.map(d => d.value), 1); }

  pieSegments = [
    { label: 'Express J+1',   value: 35, color: '#3498db' },
    { label: 'Standard J+3',  value: 42, color: '#27ae60' },
    { label: 'Groupage',      value: 15, color: '#e67e22' },
    { label: 'Frigorifique',  value: 8,  color: '#8e44ad' },
  ];

  get pieChart(): string {
    const cx = 65, cy = 65, r = 55;
    let a = -Math.PI / 2;
    const tot = this.pieSegments.reduce((s, p) => s + p.value, 0);
    return this.pieSegments.map(seg => {
      const da = (seg.value / tot) * 2 * Math.PI;
      const x1 = cx + r * Math.cos(a); const y1 = cy + r * Math.sin(a);
      a += da;
      const x2 = cx + r * Math.cos(a); const y2 = cy + r * Math.sin(a);
      const lg = da > Math.PI ? 1 : 0;
      return `<path d="M${cx},${cy} L${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 ${lg},1 ${x2.toFixed(1)},${y2.toFixed(1)} Z" fill="${seg.color}"/>`;
    }).join('');
  }

  livraisons = [
    { ref:'LIV-0420-001', client:'SuperMart SA',      dest:'Bobo-Dioulasso',  chauffeur:'KonÃ© Seydou',    statut:'En route',  heure:'08:30' },
    { ref:'LIV-0420-002', client:'Pharmavie SARL',    dest:'Ouahigouya',      chauffeur:'NikiÃ©ma Lassina',statut:'LivrÃ©',     heure:'07:15' },
    { ref:'LIV-0420-003', client:'BTP MatÃ©riaux',     dest:'Koudougou',       chauffeur:'Zongo Firmin',   statut:'En route',  heure:'09:00' },
    { ref:'LIV-0420-004', client:'AgriSud BF',        dest:'Fada N\'Gourma',  chauffeur:'TraorÃ© Karim',   statut:'Retard',    heure:'06:00' },
    { ref:'LIV-0420-005', client:'Importex SARL',     dest:'Ouagadougou',     chauffeur:'Barry Moussa',   statut:'TerminÃ©',   heure:'10:30' },
  ];

  statutClass(s: string) {
    if (s === 'LivrÃ©' || s === 'TerminÃ©') return 'badge badge--green';
    if (s === 'En route')  return 'badge badge--blue';
    if (s === 'Retard')    return 'badge badge--red';
    if (s === 'PlanifiÃ©')  return 'badge badge--gray';
    return 'badge badge--yellow';
  }


}

