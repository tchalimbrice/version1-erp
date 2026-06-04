import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AnimauxComponent } from './pages/animaux/animaux.component';
import { AlimentsComponent } from './pages/aliments/aliments.component';
import { ActivitesComponent } from './pages/activites/activites.component';
import { ParcellesComponent } from './pages/parcelles/parcelles.component';
import { ParcellesAddComponent } from './pages/parcelles-add/parcelles-add.component';
import { ReproductionComponent } from './pages/reproduction/reproduction.component';
import { SanteComponent } from './pages/sante/sante.component';
import { FermeCollabRolesComponent } from './pages/ferme-collab-roles/ferme-collab-roles.component';
import { FermeCollabInfoComponent } from './pages/ferme-collab-info/ferme-collab-info.component';
import { CollabLoginComponent } from './pages/collab-login/collab-login.component';
import { RhComponent } from './pages/rh/rh.component';
import { ComptabiliteComponent } from './pages/comptabilite/comptabilite.component';
import { VentesComponent } from './pages/ventes/ventes.component';
import { FinancesComponent } from './pages/finances/finances.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { PharmacieComponent } from './pages/pharmacie/pharmacie.component';
import { roleGuard } from './guards/role.guard';
import { InviteComponent } from './pages/invite/invite.component';

export const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'connexion', component: LoginComponent },
  { path: 'inscription', component: RegisterComponent },
  { path: 'invite', component: InviteComponent },
  { path: 'ferme-collab-roles', component: FermeCollabRolesComponent },
  { path: 'ferme-collab-info', component: FermeCollabInfoComponent },
  { path: 'collab-login', component: CollabLoginComponent },
  { path: 'tableau-de-bord',    component: DashboardComponent,         canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'finances',           component: FinancesComponent,          canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'parcelles',          component: ParcellesComponent,         canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'parcelles-ajout',    component: ParcellesAddComponent,      canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'animaux',            component: AnimauxComponent,           canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'elevage',            redirectTo: 'animaux',                 pathMatch: 'full' },
  { path: 'aliments',           component: AlimentsComponent,          canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'inventaire',         redirectTo: 'aliments',                pathMatch: 'full' },
  { path: 'activites',          component: ActivitesComponent,         canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'sante',              component: SanteComponent,             canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'suivi-sanitaire',    redirectTo: 'sante',                   pathMatch: 'full' },
  { path: 'reproduction',       component: ReproductionComponent,      canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'production-elevage', redirectTo: 'reproduction',           pathMatch: 'full' },
  { path: 'ventes',             component: VentesComponent,            canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'pharmacie',          component: PharmacieComponent,         canActivate: [roleGuard], data: { roles: ['pharmacien'] } },
  { path: 'parametres',         component: ParametresComponent,        canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'rh',                 component: RhComponent,                canActivate: [roleGuard], data: { roles: ['hr'] } },
  { path: 'comptabilite',       component: ComptabiliteComponent,      canActivate: [roleGuard], data: { roles: ['accountant'] } }
];
