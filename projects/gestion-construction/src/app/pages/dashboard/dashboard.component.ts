import { Component, computed } from '@angular/core';
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
export class DashboardComponent {
  readonly companyName = computed(() => this.store.company()?.name ?? 'BTP Manager');

  kpis = [
    { label: 'Chantiers actifs',    value: '7',          sub: '2 en retard',    icon: '',  color: '#e67e22', bg: '#fef0e7' },
    { label: 'CA en cours (FCFA)',  value: '142 M',       sub: '↑ 18% ce mois', icon: '',  color: '#27ae60', bg: '#d5f5e3' },
    { label: 'Devis en attente',    value: '5',           sub: '3 à relancer',  icon: '',  color: '#2980b9', bg: '#d6eaf8' },
    { label: 'Ouvriers mobilisés',  value: '48',          sub: '6 absents',     icon: '',  color: '#8e44ad', bg: '#f4ecf7' },
    { label: 'Engins opérationnels',value: '12 / 15',     sub: '3 en entretien',icon: '',  color: '#e74c3c', bg: '#fdecea' },
    { label: 'Factures impayées',   value: '3',           sub: '28 M FCFA',     icon: '',  color: '#d35400', bg: '#fef5e7' },
  ];

  chantiers = [
    { ref: 'CH-001', nom: 'Résidence Les Palmiers',    client: 'SCI Palmiers',     avancement: 72, statut: 'En cours',    budget: '85 M' },
    { ref: 'CH-002', nom: 'Immeuble Bureau Centre',    client: 'SARL Immobuild',   avancement: 45, statut: 'En cours',    budget: '120 M' },
    { ref: 'CH-003', nom: 'Route Nationale RN4',       client: 'Ministère Travaux',avancement: 91, statut: 'Finition',    budget: '200 M' },
    { ref: 'CH-004', nom: 'Entrepôt Logistique Port',  client: 'TransAfric SARL',  avancement: 18, statut: 'En retard',   budget: '55 M' },
    { ref: 'CH-005', nom: 'École Primaire Kossodo',    client: 'Mairie Kossodo',   avancement: 63, statut: 'En cours',    budget: '32 M' },
  ];

  barData = [
    { label: 'Jan', value: 95 },
    { label: 'Fév', value: 112 },
    { label: 'Mar', value: 88 },
    { label: 'Avr', value: 142 },
    { label: 'Mai', value: 76 },
    { label: 'Juin', value: 130 },
  ];

  pieSegments: PieSegment[] = [
    { label: 'Gros œuvre',    value: 38, color: '#e67e22' },
    { label: 'Second œuvre',  value: 27, color: '#2980b9' },
    { label: 'VRD',           value: 20, color: '#27ae60' },
    { label: 'Finitions',     value: 15, color: '#8e44ad' },
  ];

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
    if (s === 'Terminé')   return 'badge badge--gray';
    return 'badge badge--gray';
  }

  constructor(public readonly store: CollabStoreService) {}
}
