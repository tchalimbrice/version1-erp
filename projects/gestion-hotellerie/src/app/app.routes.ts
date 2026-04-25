import { Routes } from '@angular/router';
import { roleGuard } from './guards/role.guard';

import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HotelCollabRolesComponent } from './pages/hotel-collab-roles/hotel-collab-roles.component';
import { HotelCollabInfoComponent } from './pages/hotel-collab-info/hotel-collab-info.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ParametresComponent } from './pages/parametres/parametres.component';

import { ReservationsComponent } from './pages/reservations/reservations.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import { ChambresComponent } from './pages/chambres/chambres.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { MenageComponent } from './pages/menage/menage.component';
import { RapportsComponent } from './pages/rapports/rapports.component';

import { EmployesComponent } from './pages/employes/employes.component';
import { AnciensEmployesComponent } from './pages/anciens-employes/anciens-employes.component';
import { FacturationComponent } from './pages/facturation/facturation.component';
import { AccueilReceptionComponent } from './pages/accueil-reception/accueil-reception.component';
import { ClientsHotelComponent } from './pages/clients-hotel/clients-hotel.component';
import { ReservationsReceptionComponent } from './pages/reservations-reception/reservations-reception.component';
import { CommandesComponent } from './pages/commandes/commandes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'connexion', component: LoginComponent },
  { path: 'inscription', component: RegisterComponent },
  { path: 'hotel-collab-roles', component: HotelCollabRolesComponent },
  { path: 'hotel-collab-info', component: HotelCollabInfoComponent },

  { path: 'dashboard',   component: DashboardComponent,  canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'parametres',  component: ParametresComponent,  canActivate: [roleGuard], data: { roles: ['owner'] } },

  { path: 'reservations', component: ReservationsComponent, canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'checkin',      component: CheckinComponent,      canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'chambres',     component: ChambresComponent,     canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'clients',      component: ClientsComponent,      canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'menage',       component: MenageComponent,       canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'rapports',     component: RapportsComponent,     canActivate: [roleGuard], data: { roles: ['employee'] } },

  { path: 'employes',          component: EmployesComponent,        canActivate: [roleGuard], data: { roles: ['hr'] } },
  { path: 'anciens-employes',  component: AnciensEmployesComponent, canActivate: [roleGuard], data: { roles: ['hr'] } },
  { path: 'facturation',       component: FacturationComponent,     canActivate: [roleGuard], data: { roles: ['accountant'] } },

  { path: 'accueil-reception',      component: AccueilReceptionComponent,      canActivate: [roleGuard], data: { roles: ['receptionist'] } },
  { path: 'clients-hotel',          component: ClientsHotelComponent,          canActivate: [roleGuard], data: { roles: ['receptionist'] } },
  { path: 'reservations-reception', component: ReservationsReceptionComponent, canActivate: [roleGuard], data: { roles: ['receptionist'] } },
  { path: 'commandes',              component: CommandesComponent,             canActivate: [roleGuard], data: { roles: ['receptionist'] } },
];
