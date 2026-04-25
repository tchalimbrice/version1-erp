import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CollabStoreService, Role } from './services/collab-store.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly companyName = computed(() => this.store.company()?.name ?? '—');
  readonly role = computed(() => this.store.currentUser()?.role);
  readonly userName = computed(() => this.store.currentUser()?.name ?? '');

  constructor(public readonly store: CollabStoreService) {}

  linksForRole(role: Role | undefined): Array<{ label: string; path: string }> {
    if (!role) return [];
    if (role === 'owner') return [{ label: 'Tableau de bord', path: '/tableau-de-bord' }, { label: 'Finances', path: '/finances' }];
    if (role === 'employee') {
      return [
        { label: 'Parcelles', path: '/parcelles' },
        { label: 'Élevage', path: '/elevage' },
        { label: 'Inventaire', path: '/inventaire' },
        { label: 'Ventes', path: '/ventes' },
        { label: 'Rapports', path: '/rapports' }
      ];
    }
    if (role === 'hr') return [{ label: 'RH', path: '/rh' }];
    return [{ label: 'Comptabilité', path: '/comptabilite' }];
  }
}
