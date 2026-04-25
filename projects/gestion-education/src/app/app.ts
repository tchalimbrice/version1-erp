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
  readonly companyName  = computed(() => this.store.company()?.name ?? 'EduManager');
  readonly userName     = computed(() => this.store.currentUser()?.name ?? '');
  readonly userInitials = computed(() => {
    const n = this.userName();
    return n.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || '?';
  });

  constructor(public readonly store: CollabStoreService) {}

  roleFr(role: Role): string {
    const map: Record<Role, string> = {
      owner:      'Directeur',
      employee:   'Surveillant / Employé',
      hr:         'Secrétaire',
      accountant: 'Comptable'
    };
    return map[role] ?? role;
  }

  linksForRole(role: Role): NavLink[] {
    if (role === 'owner') return [
      { label: 'Tableau de bord',  path: '/dashboard',       icon: '📊' },
      { label: 'Élèves',           path: '/eleves',           icon: '🧑‍🎓' },
      { label: 'Emploi du temps',  path: '/emploi-du-temps',  icon: '📅' },
      { label: 'Enseignants',      path: '/enseignants',      icon: '👨‍🏫' },
      { label: 'Paramètres',       path: '/parametres',       icon: '⚙️' },
    ];
    if (role === 'hr') return [
      { label: 'Notes & Bulletins', path: '/notes',    icon: '📝' },
      { label: 'Gestion des élèves',path: '/eleves',   icon: '🧑‍🎓' },
      { label: 'Absences',          path: '/absences', icon: '📋' },
    ];
    if (role === 'accountant') return [
      { label: 'Paiements',  path: '/paiements', icon: '💰' },
    ];
    // employee = surveillant
    return [
      { label: 'Absences', path: '/absences', icon: '📋' },
    ];
  }
}
