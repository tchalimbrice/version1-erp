import { Routes } from '@angular/router';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VehiculesComponent } from './pages/vehicules/vehicules.component';
import { TrajetsComponent } from './pages/trajets/trajets.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { SuiviComponent } from './pages/suivi/suivi.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ChauffeursComponent } from './pages/chauffeurs/chauffeurs.component';
import { ChauffeursAddComponent } from './pages/chauffeurs-add/chauffeurs-add.component';
import { VehiculesAddComponent } from './pages/vehicules-add/vehicules-add.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TicketsVendusComponent } from './pages/tickets-vendus/tickets-vendus.component';
import { PassagersComponent } from './pages/passagers/passagers.component';
import { ErpAuthComponent } from './pages/erp-auth/erp-auth.component';
import { ErpCompanySetupComponent } from './pages/erp-company-setup/erp-company-setup.component';
import { TransportCollabRolesComponent } from './pages/transport-collab-roles/transport-collab-roles.component';
import { TransportCollabInfoComponent } from './pages/transport-collab-info/transport-collab-info.component';
import { CollabLoginComponent } from './pages/collab-login/collab-login.component';
import { EmployesComponent } from './pages/employes/employes.component';
import { TransportAssignComponent } from './pages/transport-assign/transport-assign.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { roleGuard } from './guards/role.guard';
import { InviteComponent } from './pages/invite/invite.component';

export const routes: Routes = [
  { path: '', redirectTo: 'erp-auth', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'invite', component: InviteComponent },
  { path: 'vehicules', component: VehiculesComponent, canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'vehicules-ajout', component: VehiculesAddComponent, canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'trajets', component: TrajetsComponent, canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'parametres', component: ParametresComponent, canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'suivi', component: SuiviComponent, canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'clients', component: ClientsComponent, canActivate: [roleGuard], data: { roles: ['accountant'] } },
  { path: 'chauffeurs', component: ChauffeursComponent, canActivate: [roleGuard], data: { roles: ['hr'] } },
  { path: 'chauffeurs-ajout', component: ChauffeursAddComponent, canActivate: [roleGuard], data: { roles: ['hr'] } },
  { path: 'tickets', component: TicketsComponent, canActivate: [roleGuard], data: { roles: ['accountant'] } },
  { path: 'tickets-vendus', component: TicketsVendusComponent, canActivate: [roleGuard], data: { roles: ['accountant'] } },
  { path: 'passagers', component: PassagersComponent, canActivate: [roleGuard], data: { roles: ['employee', 'accountant'] } },
  { path: 'erp-auth', component: ErpAuthComponent },
  { path: 'erp-company-setup', component: ErpCompanySetupComponent },
  { path: 'transport-collab-roles', component: TransportCollabRolesComponent },
  { path: 'transport-collab-info', component: TransportCollabInfoComponent },
  { path: 'collab-login', component: CollabLoginComponent },
  { path: 'employes', component: EmployesComponent, canActivate: [roleGuard], data: { roles: ['hr'] } },
  { path: 'transport-assign', component: TransportAssignComponent, canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'maintenance', component: MaintenanceComponent, canActivate: [roleGuard], data: { roles: ['employee'] } }
];
