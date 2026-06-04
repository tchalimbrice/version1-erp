import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audits',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['../../shared-page.scss'],
  template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title">Audits</h1>
      <p class="page__sub">Historique des audits</p>
    </div>
  </div>
  <div class="card">
    <div class="card__body">
      <p>Aucun audit disponible pour le moment.</p>
    </div>
  </div>
</div>
  `,
})
export class AuditsComponent {}
