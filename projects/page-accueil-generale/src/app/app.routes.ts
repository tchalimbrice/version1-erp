import { Routes } from '@angular/router';
import { ErpAuthComponent } from './pages/erp-auth/erp-auth.component';
import { ErpCompanySetupComponent } from './pages/erp-company-setup/erp-company-setup.component';

export const routes: Routes = [
  { path: '', component: ErpAuthComponent },
  { path: 'erp-company-setup', component: ErpCompanySetupComponent }
];
