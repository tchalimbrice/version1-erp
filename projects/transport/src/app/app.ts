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
    if (role === 'owner') return [{ label: 'Dashboard', path: '/dashboard' }, { label: 'Paramètres', path: '/parametres' }];
    if (role === 'employee') {
      return [
        { label: 'Trajets', path: '/trajets' },
        { label: 'Véhicules', path: '/vehicules' },
        { label: 'Affectations', path: '/transport-assign' },
        { label: 'Maintenance', path: '/maintenance' },
        { label: 'Suivi', path: '/suivi' },
        { label: 'Passagers', path: '/passagers' }
      ];
    }
    if (role === 'hr') return [{ label: 'Chauffeurs', path: '/chauffeurs' }, { label: 'Employés', path: '/employes' }];
    return [{ label: 'Vente tickets', path: '/tickets' }, { label: 'Tickets vendus', path: '/tickets-vendus' }, { label: 'Clients', path: '/clients' }];
  }
}
