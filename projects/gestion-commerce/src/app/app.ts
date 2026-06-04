import { Component, computed } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CollabStoreService, Role } from './services/collab-store.service';

interface NavLink { label: string; path: string; icon: string; }

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly role         = computed(() => this.store.currentUser()?.role);
  readonly companyName  = computed(() => this.store.company()?.name ?? 'CommerceManager');
  readonly userName     = computed(() => this.store.currentUser()?.name ?? '');
  readonly userInitials = computed(() => {
    const n = this.userName();
    return n.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || '?';
  });

  constructor(public readonly store: CollabStoreService) {}

  roleFr(role: Role): string {
    const map: Record<Role, string> = {
      owner:      'Manager / Directeur',
      employee:   'Caissier / Vendeur',
      hr:         'Responsable RH',
      accountant: 'Comptable'};
    return map[role] ?? role;
  }

  linksForRole(role: Role): NavLink[] {
    if (role === 'owner') return [
      { label: 'Tableau de bord', path: '/dashboard',   icon: '📊' },
      { label: 'Entreprises',     path: '/entreprises', icon: '🏢' },
      { label: 'Audits',          path: '/audits',      icon: '📝' },
      { label: 'Stocks',          path: '/stocks',       icon: '📦' },
      { label: 'Fournisseurs',    path: '/fournisseurs', icon: '🚚' },
      { label: 'Paramètres',      path: '/parametres',   icon: '⚙️' },
    ];
    if (role === 'employee') return [
      { label: 'Produits', path: '/produits', icon: '🏷️' },
      { label: 'Clients',  path: '/clients',  icon: '👤' },
      { label: 'Ventes',   path: '/ventes',   icon: '💳' },
      { label: 'Factures', path: '/factures', icon: '🧾' },
    ];
    if (role === 'hr') return [
      { label: 'Tableau de bord', path: '/dashboard', icon: '📊' },
    ];
    return [
      { label: 'Ventes',   path: '/ventes',   icon: '💳' },
      { label: 'Factures', path: '/factures', icon: '🧾' },
    ];
  }
}
