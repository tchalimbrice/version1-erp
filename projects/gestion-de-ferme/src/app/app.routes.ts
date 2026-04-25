import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ParcellesComponent } from './pages/parcelles/parcelles.component';
import { ParcellesAddComponent } from './pages/parcelles-add/parcelles-add.component';
import { ElevageComponent } from './pages/elevage/elevage.component';
import { SuiviSanitaireComponent } from './pages/suivi-sanitaire/suivi-sanitaire.component';
import { ProductionElevageComponent } from './pages/production-elevage/production-elevage.component';
import { FermeCollabRolesComponent } from './pages/ferme-collab-roles/ferme-collab-roles.component';
import { FermeCollabInfoComponent } from './pages/ferme-collab-info/ferme-collab-info.component';
import { CollabLoginComponent } from './pages/collab-login/collab-login.component';
import { RhComponent } from './pages/rh/rh.component';
import { ComptabiliteComponent } from './pages/comptabilite/comptabilite.component';
import { InventaireComponent } from './pages/inventaire/inventaire.component';
import { VentesComponent } from './pages/ventes/ventes.component';
import { FinancesComponent } from './pages/finances/finances.component';
import { RapportsComponent } from './pages/rapports/rapports.component';
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
  { path: 'elevage',            component: ElevageComponent,           canActivate: [roleGuard], data: { roles: ['employee', 'owner'] } },
  { path: 'suivi-sanitaire',    component: SuiviSanitaireComponent,    canActivate: [roleGuard], data: { roles: ['employee', 'owner'] } },
  { path: 'production-elevage', component: ProductionElevageComponent, canActivate: [roleGuard], data: { roles: ['employee', 'owner'] } },
  { path: 'inventaire',         component: InventaireComponent,        canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'ventes',             component: VentesComponent,            canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'rapports',           component: RapportsComponent,          canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'rh',                 component: RhComponent,                canActivate: [roleGuard], data: { roles: ['hr'] } },
  { path: 'comptabilite',       component: ComptabiliteComponent,      canActivate: [roleGuard], data: { roles: ['accountant'] } }
];
