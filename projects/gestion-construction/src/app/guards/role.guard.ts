import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CollabStoreService } from '../services/collab-store.service';

export const roleGuard: CanActivateFn = (route) => {
  const store  = inject(CollabStoreService);
  const router = inject(Router);
  const user   = store.currentUser();
  if (!user) { router.navigate(['/connexion']); return false; }
  const allowed: string[] = route.data?.['roles'] ?? [];
  if (allowed.length && !allowed.includes(user.role)) {
    router.navigate(['/dashboard']); return false;
  }
  return true;
};
