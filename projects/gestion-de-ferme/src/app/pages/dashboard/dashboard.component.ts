import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

interface SummaryStat {
  label: string;
  value: string;
  delta: string;
  deltaClass: 'trend-up' | 'trend-down';
  icon: string;
  accent?: boolean;
}

interface QuickCard {
  label: string;
  value: string;
  delta: string;
  note: string;
}

interface DashboardActivity {
  actorName: string;
  action: string;
  at: string;
  tone: 'green' | 'blue' | 'orange' | 'purple';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly userName = computed(() => this.store.currentUser()?.name ?? 'Jean Dupont');
  readonly greetingName = computed(() => this.userName().split(' ')[0] ?? 'Jean');
  readonly userInitials = computed(() => {
    const parts = this.userName().trim().split(/\s+/);
    return parts.slice(0, 2).map(part => part[0] ?? '').join('').toUpperCase() || 'JD';
  });

  readonly summaryStats: SummaryStat[] = [
    {
      label: 'Animaux',
      value: '128',
      delta: '+ 5 ce mois',
      deltaClass: 'trend-up',
      icon: '🐄'
    },
    {
      label: 'Aliments en stock',
      value: '12,450 kg',
      delta: '- 250 kg ce mois',
      deltaClass: 'trend-down',
      icon: '🌾',
      accent: true
    },
    {
      label: 'Revenus (mois)',
      value: '2,450 €',
      delta: '+ 12%',
      deltaClass: 'trend-up',
      icon: '💶'
    },
    {
      label: 'Dépenses (mois)',
      value: '1,230 €',
      delta: '+ 8%',
      deltaClass: 'trend-down',
      icon: '📉'
    }
  ];

  readonly quickCards: QuickCard[] = [
    { label: 'Bovins', value: '45', delta: '+ 4', note: 'Veaux inclus' },
    { label: 'Ovins', value: '30', delta: '+ 2', note: '3 en suivi' },
    { label: 'Caprins', value: '25', delta: '+ 1', note: '2 à surveiller' },
    { label: 'Volailles', value: '28', delta: '+ 6', note: 'Lot sain' }
  ];

  readonly revenueLabels = ['1 Mar', '8 Mar', '15 Mar', '22 Mar'];
  readonly revenueSeries = [1100, 1550, 1400, 1950, 1700, 2450];
  private readonly fallbackActivities: DashboardActivity[] = [
    { actorName: 'Anais', action: 'A ajouté des animaux', at: '2026-05-02T08:45:00.000Z', tone: 'green' },
    { actorName: 'Marcel', action: 'Traitement sanitaire effectué', at: '2026-05-01T16:30:00.000Z', tone: 'blue' },
    { actorName: 'Vincent', action: 'Vente de 12 sacs', at: '2026-05-01T11:20:00.000Z', tone: 'orange' },
    { actorName: 'Noa', action: 'Nouvel inventaire publié', at: '2026-04-30T09:10:00.000Z', tone: 'purple' }
  ];

  readonly recentActivities = computed<DashboardActivity[]>(() => {
    const activities = this.store.activities();
    if (!activities.length) return this.fallbackActivities;

    return activities.slice(0, 4).map((activity, index) => ({
      actorName: activity.actorName,
      action: activity.action,
      at: activity.at,
      tone: (['green', 'blue', 'orange', 'purple'] as const)[index % 4]
    }));
  });

  constructor(private readonly store: CollabStoreService) {}

  chartPath(values: number[]): string {
    if (!values.length) return '';

    const width = 420;
    const height = 210;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const stepX = width / (values.length - 1 || 1);

    const points = values.map((value, index) => {
      const x = index * stepX;
      const y = height - ((value - min) / range) * (height - 24) - 12;
      return `${x},${y}`;
    });

    return `M ${points.join(' L ')}`;
  }

  chartFill(values: number[]): string {
    if (!values.length) return '';

    const width = 420;
    const height = 210;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const stepX = width / (values.length - 1 || 1);

    const points = values.map((value, index) => {
      const x = index * stepX;
      const y = height - ((value - min) / range) * (height - 24) - 12;
      return `${x},${y}`;
    });

    return `M 0,${height} L ${points.join(' L ')} L ${width},${height} Z`;
  }
}
