import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PharmacieStoreService, VenteMed } from '../../services/pharmacie-store.service';

@Component({
  selector: 'app-pharmacie-ventes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  styles: [
    `
      @use '../../shared-page.scss';
      .page__actions { display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
      .field { margin-bottom:12px; }
      .field__label { display:block; margin-bottom:6px; font-weight:500; color:#2c3e50; }
      .field__input, .field__select { width:100%; padding:8px 12px; border:1px solid #bdc3c7; border-radius:6px; font-size:14px; outline:none; }
      .field__input:focus, .field__select:focus { border-color:#1a5276; box-shadow:0 0 0 2px rgba(26,82,118,.1); }
      .table { width:100%; border-collapse:collapse; margin-top:16px; }
      .table th, .table td { padding:12px 16px; text-align:left; border-bottom:1px solid #ecf0f1; }
      .table th { background:#f8f9fa; font-weight:600; color:#2c3e50; }
      .table tbody tr:hover { background:#f8f9fa; }
      .fw-med { font-weight:600; }
      .text-muted { color:#7f8c8d; }
      .badge { display:inline-flex; align-items:center; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; }
      .badge--green { background:#d5f5e3; color:#1e8449; }
      .badge--blue { background:#d6eaf8; color:#1a5276; }
      .badge--yellow { background:#fef9e7; color:#f39c12; }
      .btn { display:inline-flex; align-items:center; gap:6px; padding:8px 16px; border:none; border-radius:8px; font-size:14px; font-weight:500; cursor:pointer; text-decoration:none; transition:all .15s; }
      .btn--primary { background:#1a5276; color:#fff; }
      .btn--primary:hover { background:#154360; }
      .btn--outline { background:transparent; color:#1a5276; border:1px solid #1a5276; }
      .btn--outline:hover { background:#1a5276; color:#fff; }
    `
  ],
  template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title">Ventes pharmacie</h1>
      <p class="page__sub">Suivi des ventes et génération de factures</p>
    </div>
    <div class="page__actions">
      <a class="btn btn--outline" routerLink="/pharmacie">← Retour à la pharmacie</a>
      <button class="btn btn--primary" (click)="showAddVente.set(true)">+ Nouvelle vente</button>
    </div>
  </div>

  <div class="card">
    <div class="card__head"><span class="card__title">Historique des ventes</span></div>
    <table class="table">
      <thead>
        <tr><th>Date</th><th>Patient</th><th>Médicaments</th><th>Montant total</th><th>Part INAM</th><th>Patient</th><th>Statut</th></tr>
      </thead>
      <tbody>
        @for (vente of store.ventes(); track vente.id) {
          <tr>
            <td class="text-muted">{{ vente.date }}</td>
            <td class="fw-med">{{ vente.patient }}</td>
            <td>{{ vente.medicaments }}</td>
            <td>{{ vente.montantTotal | number:'1.0-0' }} FCFA</td>
            <td class="text-muted">{{ vente.montantInam | number:'1.0-0' }} FCFA</td>
            <td>{{ vente.montantPatient | number:'1.0-0' }} FCFA</td>
            <td><span class="badge" [class.badge--green]="vente.statut==='payé'" [class.badge--blue]="vente.statut==='inam'" [class.badge--yellow]="vente.statut==='partiel'">{{ vente.statut }}</span></td>
          </tr>
        }
      </tbody>
    </table>
  </div>

  @if (showAddVente()) {
    <div class="modal-overlay" (click)="showAddVente.set(false)">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal__head">
          <span class="modal__title">Nouvelle vente</span>
          <button class="modal__close" (click)="showAddVente.set(false)">✕</button>
        </div>
        <div class="modal__body">
          <div class="field"><label class="field__label">Patient</label><input class="field__input" [(ngModel)]="newVente.patient" /></div>
          <div class="field"><label class="field__label">Médicaments</label><input class="field__input" [(ngModel)]="newVente.medicaments" placeholder="Ex: Paracétamol x2" /></div>
          <div class="field"><label class="field__label">N° Ordonnance</label><input class="field__input" [(ngModel)]="newVente.ordonnanceRef" /></div>
          <div class="fields-row" style="display:flex;gap:12px;flex-wrap:wrap;">
            <div class="field" style="flex:1 1 220px;"><label class="field__label">Montant total</label><input class="field__input" type="number" [(ngModel)]="newVente.montantTotal" /></div>
            <div class="field" style="flex:1 1 220px;"><label class="field__label">Part INAM</label><input class="field__input" type="number" [(ngModel)]="newVente.montantInam" /></div>
          </div>
          <div class="field"><label class="field__label">Statut paiement</label>
            <select class="field__select" [(ngModel)]="newVente.statut">
              <option value="payé">Payé intégralement</option>
              <option value="inam">Pris en charge INAM</option>
              <option value="partiel">Paiement partiel</option>
            </select>
          </div>
        </div>
        <div class="modal__foot">
          <button class="btn btn--outline" (click)="showAddVente.set(false)">Annuler</button>
          <button class="btn btn--primary" (click)="saveVente()">Enregistrer</button>
        </div>
      </div>
    </div>
  }
</div>
  `
})
export class PharmacieVentesComponent {
  showAddVente = signal(false);
  newVente: Partial<VenteMed> = this.blankVente();

  constructor(public readonly store: PharmacieStoreService) {}

  saveVente() {
    if (!this.newVente.patient) return;
    const vente: VenteMed = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('fr-FR'),
      patient: this.newVente.patient ?? '',
      medicaments: this.newVente.medicaments ?? '',
      ordonnanceRef: this.newVente.ordonnanceRef ?? '',
      montantTotal: this.newVente.montantTotal ?? 0,
      montantInam: this.newVente.montantInam ?? 0,
      montantPatient: (this.newVente.montantTotal ?? 0) - (this.newVente.montantInam ?? 0),
      statut: this.newVente.statut ?? 'payé',
    };
    this.store.saveVente(vente);
    this.newVente = this.blankVente();
    this.showAddVente.set(false);
  }

  private blankVente(): Partial<VenteMed> {
    return { patient: '', medicaments: '', montantTotal: 0, montantInam: 0, ordonnanceRef: '', statut: 'payé' };
  }
}
