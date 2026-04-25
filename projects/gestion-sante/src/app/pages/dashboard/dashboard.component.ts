import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

interface RecentActivity {
  patient: string; type: string; date: string; medecin: string; statut: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly today = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  kpis = [
    { label: 'Patients aujourd\'hui', value: '24', sub: '+3 vs hier', color: '#1a5276', icon: '' },
    { label: 'Rendez-vous',           value: '18', sub: '6 en attente',  color: '#117a65', icon: '' },
    { label: 'Consultations',         value: '12', sub: 'ce jour',       color: '#7d3c98', icon: '' },
    { label: 'Recettes du jour',      value: '185 000 Fcfa', sub: '+12% ce mois', color: '#b7950b', icon: '' },
  ];

  recentActivities: RecentActivity[] = [
    { patient: 'Koné Aminata',    type: 'Consultation',  date: '08h30', medecin: 'Dr. Diallo',  statut: 'Terminée' },
    { patient: 'Traoré Boubacar', type: 'Rendez-vous',   date: '09h00', medecin: 'Dr. Touré',   statut: 'En cours' },
    { patient: 'Bamba Fatoumata', type: 'Ordonnance',    date: '09h45', medecin: 'Dr. Diallo',  statut: 'Terminée' },
    { patient: 'Coulibaly Issouf',type: 'Consultation',  date: '10h15', medecin: 'Dr. Kaboré',  statut: 'En attente' },
    { patient: 'Ouattara Hawa',   type: 'Rendez-vous',   date: '10h30', medecin: 'Dr. Touré',   statut: 'Confirmé' },
  ];

  readonly barData = [
    { label: 'Lun', rdv: 14, consult: 10 },
    { label: 'Mar', rdv: 18, consult: 13 },
    { label: 'Mer', rdv: 12, consult: 9  },
    { label: 'Jeu', rdv: 20, consult: 15 },
    { label: 'Ven', rdv: 16, consult: 11 },
    { label: 'Sam', rdv: 8,  consult: 6  },
  ];

  readonly maxBar = Math.max(...this.barData.map(d => d.rdv));

  readonly pieSegments = this.buildPie([
    { label: 'Médecins',   pct: 35, color: '#1a5276' },
    { label: 'Infirmiers', pct: 45, color: '#117a65' },
    { label: 'Secrétaires',pct: 20, color: '#7d3c98' },
  ]);

  private buildPie(data: { label: string; pct: number; color: string }[]) {
    let cumul = 0;
    return data.map(seg => {
      const start = cumul / 100 * 2 * Math.PI - Math.PI / 2;
      cumul += seg.pct;
      const end = cumul / 100 * 2 * Math.PI - Math.PI / 2;
      const r = 60, cx = 70, cy = 70;
      const x1 = cx + r * Math.cos(start), y1 = cy + r * Math.sin(start);
      const x2 = cx + r * Math.cos(end),   y2 = cy + r * Math.sin(end);
      const large = seg.pct > 50 ? 1 : 0;
      return { ...seg, d: `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} Z` };
    });
  }

  constructor(public readonly store: CollabStoreService) {}

  statutClass(s: string): string {
    if (s === 'Terminée')   return 'badge badge--green';
    if (s === 'En cours')   return 'badge badge--blue';
    if (s === 'En attente') return 'badge badge--yellow';
    return 'badge badge--gray';
  }
}
