import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

interface Reservation {
  client: string; chambre: string; dates: string; statut: 'Confirmée' | 'Arrivée' | 'En attente';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly userName = computed(() => this.store.currentUser()?.name ?? 'Chef d\'entreprise');
  readonly today = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  readonly reservations: Reservation[] = [
    { client: 'Jean Dupont',   chambre: '201', dates: '26/04 - 28/04', statut: 'Confirmée' },
    { client: 'Marie Lemoine', chambre: '105', dates: '26/04 - 27/04', statut: 'Arrivée'},
    { client: 'Paul Durand',   chambre: '305', dates: '27/04 - 30/04', statut: 'En attente' },
    { client: 'Lucie Bernard', chambre: '12',  dates: '28/04 - 25/04', statut: 'Confirmée' },
  ];

  // SVG line chart – occupation sur 7 jours
  readonly chartDays   = ['26/04','27/04','28/04','29/04','30/04','01/05','02/05'];
  readonly chartValues = [65, 72, 78, 70, 68, 80, 75];

  readonly polyline = this.buildPolyline();
  readonly area     = this.buildArea();

  private buildPolyline(): string {
    return this.chartValues.map((v, i) => `${10 + i * 46.7},${90 - v * 0.8}`).join(' ');
  }
  private buildArea(): string {
    const pts = this.chartValues.map((v, i) => `${10 + i * 46.7},${90 - v * 0.8}`).join(' ');
    return `M 10,90 L ${pts} L ${10 + 6 * 46.7},90 Z`;
  }

  constructor(public readonly store: CollabStoreService) {}
}
