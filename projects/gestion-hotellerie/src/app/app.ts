import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CollabStoreService, Role } from './services/collab-store.service';

interface NavLink { label: string; path: string; }

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly companyName = computed(() => this.store.company()?.name ?? 'BELLEVUE');
  readonly role = computed(() => this.store.currentUser()?.role);
  readonly userName = computed(() => this.store.currentUser()?.name ?? '');

  readonly userInitials = computed(() => {
    const n = this.store.currentUser()?.name ?? '';
    return n.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || 'U';
  });

  constructor(public readonly store: CollabStoreService) {}

  roleFr(role: Role): string {
    const map: Record<Role, string> = {
      owner:        'Chef d\'entreprise',
      employee:     'Personnel hôtel',
      hr:           'Ressources Humaines',
      accountant:   'Comptable',
      receptionist: 'Réceptionniste',
    };
    return map[role] ?? role;
  }

  linksForRole(role: Role | undefined): NavLink[] {
    if (!role) return [];
    if (role === 'owner' && this.store.mode() === 'centralized') return [
      { label: 'Tableau de bord',        path: '/dashboard'         },
      { label: 'Réservations',           path: '/reservations'      },
      { label: 'Check-in / Check-out',   path: '/checkin'           },
      { label: 'Chambres',               path: '/chambres'          },
      { label: 'Clients',                path: '/clients'           },
      { label: 'Ménage',                 path: '/menage'            },
      { label: 'Employés',               path: '/employes'          },
      { label: 'Accueil réception',      path: '/accueil-reception' },
      { label: 'Facturation',            path: '/facturation'       },
      { label: 'Paramètres',             path: '/parametres'        },
    ];
    if (role === 'owner') return [
      { label: 'Tableau de bord', path: '/dashboard'  },
      { label: 'Paramètres',      path: '/parametres' },
    ];
    if (role === 'employee') return [
      { label: 'Réservations',         path: '/reservations' },
      { label: 'Check-in / Check-out', path: '/checkin'      },
      { label: 'Chambres',             path: '/chambres'     },
      { label: 'Clients',              path: '/clients'      },
      { label: 'Ménage',               path: '/menage'       },
    ];
    if (role === 'hr') return [
      { label: 'Employés actifs',  path: '/employes'          },
      { label: 'Anciens employés', path: '/anciens-employes'  },
    ];
    if (role === 'receptionist') return [
      { label: 'Accueil',       path: '/accueil-reception'      },
      { label: 'Clients',       path: '/clients-hotel'          },
      { label: 'Réservations',  path: '/reservations-reception' },
      { label: 'Commandes',     path: '/commandes'              },
    ];
    return [
      { label: 'Facturation', path: '/facturation' },
    ];
  }
}
