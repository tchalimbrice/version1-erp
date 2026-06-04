import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CollabStoreService, Role } from '../services/collab-store.service';

const roleHomes: Record<Role, string> = {
  owner: '/tableau-de-bord',
  employee: '/parcelles',
  hr: '/rh',
  accountant: '/comptabilite',
  pharmacien: '/pharmacie'
};

export const roleGuard: CanActivateFn = (route) => {
  const store = inject(CollabStoreService);
  const router = inject(Router);

  const allowed = route.data?.['roles'] as Role[] | undefined;
  const user = store.currentUser();
  const mode = store.mode();

  if (!allowed || allowed.length === 0) return true;
  if (!user) {
    router.navigate(['/connexion']);
    return false;
  }
  if (user.role === 'owner' && mode === 'centralized') return true;
  if (!allowed.includes(user.role)) {
    router.navigate([roleHomes[user.role] ?? '/connexion']);
    return false;
  }
  return true;
};
