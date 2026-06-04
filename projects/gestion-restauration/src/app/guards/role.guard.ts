import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CollabStoreService } from '../services/collab-store.service';

function homeForRole(role: string): string {
  const map: Record<string, string> = {
    owner:      '/dashboard',
    employee:   '/stock',
    accountant: '/commandes',
  };
  return map[role] ?? '/connexion';
}

export const roleGuard: CanActivateFn = (route) => {
  const store  = inject(CollabStoreService);
  const router = inject(Router);
  const user   = store.currentUser();
  const mode   = store.mode();
  if (!user) { router.navigate(['/connexion']); return false; }
  if (user.role === 'owner' && mode === 'centralized') return true;
  const allowed: string[] = route.data?.['roles'] ?? [];
  if (allowed.length && !allowed.includes(user.role)) {
    router.navigate([homeForRole(user.role)]); return false;
  }
  return true;
};
