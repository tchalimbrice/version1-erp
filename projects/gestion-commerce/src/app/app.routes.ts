import { Routes } from '@angular/router';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  { path: 'connexion',    loadComponent: () => import('./pages/connexion/connexion.component').then(m => m.ConnexionComponent) },
  { path: 'dashboard',   loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),         canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'entreprises', loadComponent: () => import('./pages/companies/companies.component').then(m => m.CompaniesComponent),       canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'audits',      loadComponent: () => import('./pages/audits/audits.component').then(m => m.AuditsComponent),              canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'produits',    loadComponent: () => import('./pages/produits/produits.component').then(m => m.ProduitsComponent),             canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'clients',     loadComponent: () => import('./pages/clients/clients.component').then(m => m.ClientsComponent),               canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'ventes',      loadComponent: () => import('./pages/ventes/ventes.component').then(m => m.VentesComponent),                  canActivate: [roleGuard], data: { roles: ['employee', 'accountant'] } },
  { path: 'factures',    loadComponent: () => import('./pages/factures/factures.component').then(m => m.FacturesComponent),             canActivate: [roleGuard], data: { roles: ['employee', 'accountant'] } },
  { path: 'stocks',      loadComponent: () => import('./pages/stocks/stocks.component').then(m => m.StocksComponent),                  canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'fournisseurs',loadComponent: () => import('./pages/fournisseurs/fournisseurs.component').then(m => m.FournisseursComponent), canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'parametres',  loadComponent: () => import('./pages/parametres/parametres.component').then(m => m.ParametresComponent),       canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: '**', redirectTo: '/connexion' }
];
