import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CollabStoreService, Role } from '../services/collab-store.service';

const roleHomes: Record<Role, string> = {
  owner: '/dashboard',
  employee: '/reservations',
  hr: '/employes',
  accountant: '/facturation',
  receptionist: '/accueil-reception',
};

export const roleGuard: CanActivateFn = (route) => {
  const store = inject(CollabStoreService);
  const router = inject(Router);

  const allowed = route.data?.['roles'] as Role[] | undefined;
  const user = store.currentUser();

  if (!allowed || allowed.length === 0) return true;
  if (!user) {
    router.navigate(['/connexion']);
    return false;
  }
  if (!allowed.includes(user.role)) {
    router.navigate([roleHomes[user.role] ?? '/connexion']);
    return false;
  }
  return true;
};

