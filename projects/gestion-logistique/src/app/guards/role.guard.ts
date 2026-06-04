import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CollabStoreService } from '../services/collab-store.service';

export const roleGuard: CanActivateFn = (route) => {
  const store = inject(CollabStoreService); const router = inject(Router);
  const user = store.currentUser();
  const mode = store.mode?.();
  if (!user) { router.navigate(['/connexion']); return false; }
  if (user.role === 'owner' && mode === 'centralized') return true;
  const allowed: string[] = route.data?.['roles'] ?? [];
  if (allowed.length && !allowed.includes(user.role)) { router.navigate(['/dashboard']); return false; }
  return true;
};
