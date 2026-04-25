import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CollabStoreService, Role } from './services/collab-store.service';

interface NavLink { label: string; path: string; icon: string; }

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly role         = computed(() => this.store.currentUser()?.role);
  readonly companyName  = computed(() => this.store.company()?.name ?? 'LogiManager');
  readonly userName     = computed(() => this.store.currentUser()?.name ?? '');
  readonly userInitials = computed(() => {
    const n = this.userName();
    return n.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || '?';
  });

  constructor(public readonly store: CollabStoreService) {}

  roleFr(role: Role): string {
    const map: Record<Role, string> = {
      owner:      'Manager / Directeur',
      employee:   'Employé Logistique',
      hr:         'Responsable RH',
      accountant: 'Comptable'};
    return map[role] ?? role;
  }

  linksForRole(role: Role): NavLink[] {
    if (role === 'owner') return [
      { label: 'Tableau de bord', path: '/dashboard',  icon: '📊' },
      { label: 'Paramètres',      path: '/parametres', icon: '⚙️' },
    ];
    if (role === 'employee') return [
      { label: 'Commandes',        path: '/commandes',        icon: '📋' },
      { label: 'Livraisons',       path: '/livraisons',       icon: '🚚' },
      { label: 'Véhicules',        path: '/vehicules',        icon: '🚛' },
      { label: 'Entrepôts',        path: '/entrepots',        icon: '🏭' },
      { label: 'Clients',          path: '/clients',          icon: '👤' },
      { label: 'Suivi temps réel', path: '/suivi-temps-reel', icon: '📍' },
    ];
    if (role === 'hr') return [
      { label: 'Chauffeurs', path: '/chauffeurs', icon: '🧑‍✈️' },
    ];
    return [
      { label: 'Facturation', path: '/facturation', icon: '💰' },
    ];
  }
}
