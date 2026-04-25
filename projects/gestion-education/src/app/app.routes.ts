import { Routes } from '@angular/router';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  { path: 'connexion',      loadComponent: () => import('./pages/connexion/connexion.component').then(m => m.ConnexionComponent) },
  { path: 'dashboard',      loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),             canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'eleves',         loadComponent: () => import('./pages/eleves/eleves.component').then(m => m.ElevesComponent),                       canActivate: [roleGuard], data: { roles: ['owner', 'hr'] } },
  { path: 'emploi-du-temps',loadComponent: () => import('./pages/emploi-du-temps/emploi-du-temps.component').then(m => m.EmploiDuTempsComponent), canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'enseignants',    loadComponent: () => import('./pages/enseignants/enseignants.component').then(m => m.EnseignantsComponent),         canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'parametres',     loadComponent: () => import('./pages/parametres/parametres.component').then(m => m.ParametresComponent),            canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'notes',          loadComponent: () => import('./pages/notes/notes.component').then(m => m.NotesComponent),                           canActivate: [roleGuard], data: { roles: ['hr'] } },
  { path: 'absences',       loadComponent: () => import('./pages/absences/absences.component').then(m => m.AbsencesComponent),                  canActivate: [roleGuard], data: { roles: ['hr', 'employee'] } },
  { path: 'paiements',      loadComponent: () => import('./pages/paiements/paiements.component').then(m => m.PaiementsComponent),               canActivate: [roleGuard], data: { roles: ['accountant'] } },
  { path: 'classes',        loadComponent: () => import('./pages/classes/classes.component').then(m => m.ClassesComponent),                     canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'presences',      redirectTo: '/absences' },
  { path: '**', redirectTo: '/connexion' }
];
