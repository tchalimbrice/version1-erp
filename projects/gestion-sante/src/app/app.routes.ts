import { Routes } from '@angular/router';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  { path: 'connexion',    loadComponent: () => import('./pages/connexion/connexion.component').then(m => m.ConnexionComponent) },
  { path: 'dashboard',   loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),       canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'parametres',  loadComponent: () => import('./pages/parametres/parametres.component').then(m => m.ParametresComponent),    canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'patients',    loadComponent: () => import('./pages/patients/patients.component').then(m => m.PatientsComponent),          canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'rendez-vous', loadComponent: () => import('./pages/rendez-vous/rendez-vous.component').then(m => m.RendezVousComponent),  canActivate: [roleGuard], data: { roles: ['hr'] } },
  { path: 'consultations',loadComponent: () => import('./pages/consultations/consultations.component').then(m => m.ConsultationsComponent), canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'ordonnances', loadComponent: () => import('./pages/ordonnances/ordonnances.component').then(m => m.OrdonnancesComponent), canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'personnel',   loadComponent: () => import('./pages/personnel/personnel.component').then(m => m.PersonnelComponent),      canActivate: [roleGuard], data: { roles: ['hr'] } },
  { path: 'facturation', loadComponent: () => import('./pages/facturation/facturation.component').then(m => m.FacturationComponent), canActivate: [roleGuard], data: { roles: ['accountant'] } },
  { path: 'pharmacie',        loadComponent: () => import('./pages/pharmacie/pharmacie.component').then(m => m.PharmacieComponent),        canActivate: [roleGuard], data: { roles: ['pharmacien'] } },
  { path: 'pharmacie/produits', loadComponent: () => import('./pages/pharmacie/pharmacie-produits.component').then(m => m.PharmacieProduitsComponent), canActivate: [roleGuard], data: { roles: ['pharmacien'] } },
  { path: 'pharmacie/ventes',   loadComponent: () => import('./pages/pharmacie/pharmacie-ventes.component').then(m => m.PharmacieVentesComponent),   canActivate: [roleGuard], data: { roles: ['pharmacien'] } },
  { path: 'pharmacie/factures', loadComponent: () => import('./pages/pharmacie/pharmacie-factures.component').then(m => m.PharmacieFacturesComponent), canActivate: [roleGuard], data: { roles: ['pharmacien'] } },
  { path: 'pharmacie/inam',     loadComponent: () => import('./pages/pharmacie/pharmacie-inam.component').then(m => m.PharmacieInamComponent),     canActivate: [roleGuard], data: { roles: ['pharmacien'] } },
  { path: 'pharmacie/soins',    loadComponent: () => import('./pages/pharmacie/pharmacie-inam.component').then(m => m.PharmacieInamComponent),     canActivate: [roleGuard], data: { roles: ['pharmacien'] } },
  { path: 'pharmacie/soins/historique', loadComponent: () => import('./pages/pharmacie/pharmacie-inam.component').then(m => m.PharmacieInamComponent), canActivate: [roleGuard], data: { roles: ['pharmacien'] } },
  { path: '**', redirectTo: '/connexion' }
];
