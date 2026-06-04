import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CollabStoreService, Role } from './services/collab-store.service';

interface NavLink { label: string; path: string; }

const roleHome: Record<Role, string> = {
  owner: '/dashboard',
  employee: '/devis',
  hr: '/personnel',
  accountant: '/comptabilite',
};

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly role         = computed(() => this.store.currentUser()?.role);
  readonly companyName  = computed(() => this.store.company()?.name ?? 'BTP Manager');
  readonly userName     = computed(() => this.store.currentUser()?.name ?? '');
  readonly userInitials = computed(() => {
    const n = this.userName();
    return n.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || '?';
  });

  constructor(public readonly store: CollabStoreService) {}

  roleFr(role: Role): string {
    const map: Record<Role, string> = {
      owner:      'Manager / Directeur',
      employee:   'Architecte / Technicien',
      hr:         'Responsable RH',
      accountant: 'Comptable'};
    return map[role] ?? role;
  }

  linksForRole(role: Role): NavLink[] {
    if (role === 'owner' && this.store.mode() === 'centralized') return [
      { label: 'Tableau de bord',  path: '/dashboard'      },
      { label: 'Chantiers',        path: '/chantiers'      },
      { label: 'Sous-traitants',   path: '/sous-traitants' },
      { label: 'Devis',            path: '/devis'          },
      { label: 'Contrats',         path: '/contrats'       },
      { label: 'Matériaux',        path: '/materiaux'      },
      { label: 'Engins',           path: '/engins'         },
      { label: 'Personnel',        path: '/personnel'      },
      { label: 'Comptabilité',     path: '/comptabilite'   },
      { label: 'Paramètres',       path: '/parametres'     },
    ];
    if (role === 'owner') return [
      { label: 'Tableau de bord',  path: '/dashboard'      },
      { label: 'Chantiers',        path: '/chantiers'      },
      { label: 'Sous-traitants',   path: '/sous-traitants' },
      { label: 'Paramètres',       path: '/parametres'     },
    ];
    if (role === 'employee') return [
      { label: 'Devis',       path: '/devis'      },
      { label: 'Contrats',    path: '/contrats'   },
      { label: 'Matériaux',   path: '/materiaux'  },
    ];
    if (role === 'hr') return [
      { label: 'Personnel', path: '/personnel' },
    ];
    return [
      { label: 'Comptabilité', path: '/comptabilite' },
    ];
  }

  homeLink(role: Role): string {
    return roleHome[role] ?? '/connexion';
  }
}
