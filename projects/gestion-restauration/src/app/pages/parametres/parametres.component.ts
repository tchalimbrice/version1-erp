import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-parametres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parametres.component.html',
})
export class ParametresComponent {
  readonly store = inject(CollabStoreService);
  activeTab = 'Général';
  readonly tabs = ['Général', 'Restaurant', 'Utilisateurs', 'Impressions', 'Notifications', 'Sauvegarde'];

  nomRestaurant = this.store.company()?.name ?? '';
  adresse       = this.store.company()?.address ?? '';
  telephone     = this.store.company()?.phone ?? '';
  email         = this.store.company()?.email ?? '';
  devise        = 'Euro (€)';

  readonly devises = ['Euro (€)', 'FCFA', 'Dollar (USD)', 'Livre (GBP)'];

  save() {
    this.store.updateCompanyName(this.nomRestaurant);
  }
}
