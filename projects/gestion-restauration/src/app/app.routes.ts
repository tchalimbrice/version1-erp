import { Routes } from '@angular/router';
import { roleGuard } from './guards/role.guard';
import { LoginComponent } from './pages/connexion/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { EmployesComponent } from './pages/employes/employes.component';
import { StockComponent } from './pages/stock/stock.component';
import { ParametresComponent } from './pages/parametres/parametres.component';

export const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'connexion',        component: LoginComponent },
  { path: 'dashboard',        component: DashboardComponent,        canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'parametres',       component: ParametresComponent,       canActivate: [roleGuard], data: { roles: ['owner'] } },
  { path: 'stock',            component: StockComponent,            canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'employes',         component: EmployesComponent,         canActivate: [roleGuard], data: { roles: ['employee'] } },
  { path: 'commandes',        component: CommandesComponent,        canActivate: [roleGuard], data: { roles: ['accountant'] } },
  { path: 'nouvelle-commande', redirectTo: 'commandes', pathMatch: 'full' },
  { path: 'reservations',     component: ReservationsComponent,     canActivate: [roleGuard], data: { roles: ['accountant'] } },
  { path: 'menu',             component: MenuComponent,             canActivate: [roleGuard], data: { roles: ['accountant'] } },
  { path: 'clients',          component: ClientsComponent,          canActivate: [roleGuard], data: { roles: ['accountant'] } },
];
