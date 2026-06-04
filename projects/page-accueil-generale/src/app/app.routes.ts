import { Routes } from '@angular/router';
import { ErpAuthComponent } from './pages/erp-auth/erp-auth.component';
import { ErpCompanySetupComponent } from './pages/erp-company-setup/erp-company-setup.component';
import { ConnexionCentraleComponent } from './pages/connexion/connexion.component';
import { CommentCaMarcheComponent } from './pages/comment-ca-marche/comment-ca-marche.component';
import { InvitationAcceptComponent } from './pages/invitation-accept/invitation-accept.component';
import { RegisterComponent } from './pages/register/register.component';
import { CollaboratorsComponent } from './pages/collaborators/collaborators.component';

export const routes: Routes = [
  { path: '', component: ErpAuthComponent },
  { path: 'connexion', component: ConnexionCentraleComponent },
  { path: 'erp-company-setup', component: ErpCompanySetupComponent },
  { path: 'comment-ca-marche', component: CommentCaMarcheComponent },
  { path: 'invite/accept', component: InvitationAcceptComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'collaborators', component: CollaboratorsComponent },
];
