import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['../../shared-page.scss'],
  template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title">Entreprises</h1>
      <p class="page__sub">Gestion des entreprises</p>
    </div>
  </div>
  <div class="card">
    <div class="card__body">
      <p>Aucune entreprise à afficher pour le moment.</p>
    </div>
  </div>
</div>
  `,
})
export class CompaniesComponent {}
