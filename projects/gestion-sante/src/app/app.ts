import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CollabStoreService, Role } from './services/collab-store.service';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly role = computed(() => this.store.currentUser()?.role);
  readonly companyName = computed(() => this.store.company()?.name ?? 'MediManager');
  readonly userName = computed(() => this.store.currentUser()?.name ?? '');
  readonly userInitials = computed(() => {
    const n = this.userName();
    return n.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || '?';
  });

  constructor(public readonly store: CollabStoreService) {}

  roleFr(role: Role): string {
    const map: Record<Role, string> = {
      owner: 'Directeur / Propriétaire',
      employee: 'Médecin / Infirmier',
      hr: 'Secrétaire médicale',
      accountant: 'Comptable',
      pharmacien: 'Pharmacien',
    };
    return map[role] ?? role;
  }

  linksForRole(role: Role): NavLink[] {
    if (role === 'owner' && this.store.mode() === 'centralized') {
      return [
        { label: 'Tableau de bord', path: '/dashboard' },
        { label: 'Paramètres', path: '/parametres' },
        { label: 'Rendez-vous', path: '/rendez-vous' },
        { label: 'Patients', path: '/patients' },
        { label: 'Consultations', path: '/consultations' },
        { label: 'Ordonnances', path: '/ordonnances' },
        { label: 'Personnel', path: '/personnel' },
        { label: 'Finances', path: '/facturation' },
        { label: 'Pharmacie', path: '/pharmacie' },
      ];
    }

    if (role === 'owner') {
      return [
        { label: 'Tableau de bord', path: '/dashboard' },
        { label: 'Paramètres', path: '/parametres' },
      ];
    }

    if (role === 'employee') {
      return [
        { label: 'Patients', path: '/patients' },
        { label: 'Consultations', path: '/consultations' },
        { label: 'Ordonnances', path: '/ordonnances' },
      ];
    }

    if (role === 'hr') {
      return [
        { label: 'Rendez-vous', path: '/rendez-vous' },
        { label: 'Personnel', path: '/personnel' },
      ];
    }

    if (role === 'accountant') {
      return [{ label: 'Finances', path: '/facturation' }];
    }

    if (role === 'pharmacien') {
      return [{ label: 'Pharmacie', path: '/pharmacie' }];
    }

    return [];
  }
}
