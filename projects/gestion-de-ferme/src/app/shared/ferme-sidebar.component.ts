import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CollabStoreService, Role } from '../services/collab-store.service';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-ferme-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './ferme-sidebar.component.html',
  styleUrl: './ferme-sidebar.component.scss'
})
export class FermeSidebarComponent {
  @Input() active = '';

  readonly companyName = computed(() => this.store.company()?.name ?? 'AGROFEST');
  readonly role = computed(() => this.store.currentUser()?.role);
  readonly userName = computed(() => this.store.currentUser()?.name ?? '');
  readonly userInitials = computed(() => {
    const n = this.store.currentUser()?.name ?? '';
    return n.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || 'U';
  });

  constructor(private readonly store: CollabStoreService, private readonly router: Router) {}

  get links(): NavLink[] {
    const r = this.role();

    if (r === 'owner') {
      return [
        { label: 'Tableau de bord', path: '/tableau-de-bord' },
        { label: 'Finances', path: '/finances' },
        { label: 'Paramètres', path: '/parametres' }
      ];
    }

    if (r === 'employee') {
      return [
        { label: 'Animaux', path: '/animaux' },
        { label: 'Aliments', path: '/aliments' },
        { label: 'Activités', path: '/activites' },
        { label: 'Reproduction', path: '/reproduction' },
        { label: 'Santé', path: '/sante' },
      ];
    }

    if (r === 'pharmacien') {
      return [{ label: 'Pharmacie', path: '/pharmacie' }];
    }

    if (r === 'hr') {
      return [{ label: 'RH', path: '/rh' }];
    }

    return [{ label: 'Comptabilité', path: '/comptabilite' }];
  }

  logout() {
    this.store.logout();
    this.router.navigate(['/connexion']);
  }
}
