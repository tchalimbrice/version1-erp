import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({ selector: 'app-dashboard', standalone: true, imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html', styleUrl: './dashboard.component.scss' })
export class DashboardComponent {
  readonly companyName = computed(() => this.store.company()?.name ?? 'LogiManager');

  kpis = [
    { label: 'Livraisons du jour',   value: '23',     sub: '18 terminées',     icon: '', color: '#3498db', bg: '#d6eaf8' },
    { label: 'Commandes en cours',   value: '47',     sub: '5 urgentes',        icon: '', color: '#e67e22', bg: '#fef0e7' },
    { label: 'Véhicules actifs',     value: '14/18',  sub: '4 en entretien',    icon: '', color: '#27ae60', bg: '#d5f5e3' },
    { label: 'CA mensuel (FCFA)',    value: '38.4 M', sub: '↑ 12% vs mois préc.',icon: '', color: '#8e44ad', bg: '#f4ecf7' },
    { label: 'Km parcourus (mois)',  value: '42 180', sub: '↑ 8%',             icon: '', color: '#1abc9c', bg: '#d1f2eb' },
    { label: 'Incidents signalés',   value: '2',      sub: 'Ce mois',           icon: '', color: '#e74c3c', bg: '#fdecea' },
  ];

  barData = [
    { label: 'Lun', value: 18 }, { label: 'Mar', value: 24 }, { label: 'Mer', value: 21 },
    { label: 'Jeu', value: 29 }, { label: 'Ven', value: 23 }, { label: 'Sam', value: 14 }, { label: 'Dim', value: 8 },
  ];
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
    { ref:'LIV-0420-001', client:'SuperMart SA',      dest:'Bobo-Dioulasso',  chauffeur:'Koné Seydou',    statut:'En route',  heure:'08:30' },
    { ref:'LIV-0420-002', client:'Pharmavie SARL',    dest:'Ouahigouya',      chauffeur:'Nikiéma Lassina',statut:'Livré',     heure:'07:15' },
    { ref:'LIV-0420-003', client:'BTP Matériaux',     dest:'Koudougou',       chauffeur:'Zongo Firmin',   statut:'En route',  heure:'09:00' },
    { ref:'LIV-0420-004', client:'AgriSud BF',        dest:'Fada N\'Gourma',  chauffeur:'Traoré Karim',   statut:'Retard',    heure:'06:00' },
    { ref:'LIV-0420-005', client:'Importex SARL',     dest:'Ouagadougou',     chauffeur:'Barry Moussa',   statut:'Terminé',   heure:'10:30' },
  ];

  statutClass(s: string) {
    if (s === 'Livré' || s === 'Terminé') return 'badge badge--green';
    if (s === 'En route')  return 'badge badge--blue';
    if (s === 'Retard')    return 'badge badge--red';
    if (s === 'Planifié')  return 'badge badge--gray';
    return 'badge badge--yellow';
  }

  constructor(public readonly store: CollabStoreService) {}
}
