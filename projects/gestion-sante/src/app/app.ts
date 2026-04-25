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
  readonly companyName  = computed(() => this.store.company()?.name ?? 'MediManager');
  readonly userName     = computed(() => this.store.currentUser()?.name ?? '');
  readonly userInitials = computed(() => {
    const n = this.userName();
    return n.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || '?';
  });

  constructor(public readonly store: CollabStoreService) {}

  roleFr(role: Role): string {
    const map: Record<Role, string> = {
      owner:      'Directeur',
      employee:   'Responsable RH',
      hr:         'Secrétaire',
      accountant: 'Comptable / Caissier',
      pharmacien: 'Pharmacien'
    };
    return map[role] ?? role;
  }

  linksForRole(role: Role): NavLink[] {
    if (role === 'owner') return [
      { label: 'Tableau de bord', path: '/dashboard',     icon: '📊' },
      { label: 'Paramètres',      path: '/parametres',    icon: '⚙️' },
    ];
    if (role === 'hr') return [
      { label: 'Rendez-vous',   path: '/rendez-vous',   icon: '📅' },
      { label: 'Patients',      path: '/patients',      icon: '🧑‍⚕️' },
      { label: 'Consultations', path: '/consultations', icon: '🩺' },
      { label: 'Ordonnances',   path: '/ordonnances',   icon: '💊' },
    ];
    if (role === 'employee') return [
      { label: 'Personnel', path: '/personnel', icon: '👥' },
    ];
    if (role === 'accountant') return [
      { label: 'Facturation', path: '/facturation', icon: '💰' },
    ];
    if (role === 'pharmacien') return [
      { label: 'Pharmacie', path: '/pharmacie', icon: '💊' },
    ];
    return [];
  }
}
