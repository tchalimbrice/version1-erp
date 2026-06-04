import { Routes } from '@angular/router';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  { path: 'connexion',    loadComponent: () => import('./pages/connexion/connexion.component').then(m => m.ConnexionComponent) },
  { path: 'dashboard',      loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),               canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'chantiers',      loadComponent: () => import('./pages/chantiers/chantiers.component').then(m => m.ChantiersComponent),               canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'sous-traitants', loadComponent: () => import('./pages/sous-traitants/sous-traitants.component').then(m => m.SousTraitantsComponent), canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'parametres',     loadComponent: () => import('./pages/parametres/parametres.component').then(m => m.ParametresComponent),            canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'devis',          loadComponent: () => import('./pages/devis/devis.component').then(m => m.DevisComponent),                           canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'contrats',       loadComponent: () => import('./pages/devis/devis.component').then(m => m.DevisComponent),                           canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'materiaux',      loadComponent: () => import('./pages/materiaux/materiaux.component').then(m => m.MateriauxComponent),               canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'engins',         loadComponent: () => import('./pages/engins/engins.component').then(m => m.EnginsComponent),                        canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'personnel',      loadComponent: () => import('./pages/personnel/personnel.component').then(m => m.PersonnelComponent),               canActivate: [roleGuard], data: { roles: ['hr'] } },
  { path: 'comptabilite',   loadComponent: () => import('./pages/comptabilite/comptabilite.component').then(m => m.ComptabiliteComponent),       canActivate: [roleGuard], data: { roles: ['accountant'] } },
  { path: '**', redirectTo: '/connexion' }
];
