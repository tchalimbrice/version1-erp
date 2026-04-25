import { Routes } from '@angular/router';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  { path: 'connexion',       loadComponent: () => import('./pages/connexion/connexion.component').then(m => m.ConnexionComponent) },
  { path: 'dashboard',       loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),         canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'parametres',      loadComponent: () => import('./pages/parametres/parametres.component').then(m => m.ParametresComponent),      canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'commandes',       loadComponent: () => import('./pages/commandes/commandes.component').then(m => m.CommandesComponent),         canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'livraisons',      loadComponent: () => import('./pages/livraisons/livraisons.component').then(m => m.LivraisonsComponent),      canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'vehicules',       loadComponent: () => import('./pages/vehicules/vehicules.component').then(m => m.VehiculesComponent),         canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'entrepots',       loadComponent: () => import('./pages/entrepots/entrepots.component').then(m => m.EntrepotsComponent),         canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'clients',         loadComponent: () => import('./pages/clients/clients.component').then(m => m.ClientsComponent),               canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'suivi-temps-reel',loadComponent: () => import('./pages/suivi-temps-reel/suivi-temps-reel.component').then(m => m.SuiviTempsReelComponent), canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'chauffeurs',      loadComponent: () => import('./pages/chauffeurs/chauffeurs.component').then(m => m.ChauffeursComponent),      canActivate: [roleGuard], data: { roles: ['hr'] } },
  { path: 'facturation',     loadComponent: () => import('./pages/facturation/facturation.component').then(m => m.FacturationComponent),   canActivate: [roleGuard], data: { roles: ['accountant'] } },
  { path: '**', redirectTo: '/connexion' }
];
