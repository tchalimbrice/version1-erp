import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CollabStoreService } from '../services/collab-store.service';

export const roleGuard: CanActivateFn = (route) => {
  const store = inject(CollabStoreService);
  const router = inject(Router);
  const user = store.currentUser();
  if (!user) { router.navigate(['/connexion']); return false; }
  const mode = store.mode();
  const path = route.routeConfig?.path ?? '';
  if (user.role === 'owner') {
    if (mode === 'centralized') return true;
    if (path === 'dashboard' || path === 'parametres') return true;
    router.navigate(['/dashboard']);
    return false;
  }
  const allowed: string[] = route.data?.['roles'] ?? [];
  if (allowed.length && !allowed.includes(user.role)) {
    const fallback: Record<string, string> = {
      employee: '/patients',
      hr: '/rendez-vous',
      accountant: '/facturation',
      pharmacien: '/pharmacie',
    };
    router.navigate([fallback[user.role] ?? '/connexion']);
    return false;
  }
  return true;
};
