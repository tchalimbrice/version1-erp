import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PharmacieStoreService, VenteMed } from '../../services/pharmacie-store.service';

@Component({
  selector: 'app-pharmacie-factures',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styles: [
    `
      @use '../../shared-page.scss';
      .page__actions { display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
      .btn--small { padding:4px 10px; font-size:11px; }
      .table { width:100%; border-collapse:collapse; margin-top:16px; }
      .table th, .table td { padding:12px 16px; text-align:left; border-bottom:1px solid #ecf0f1; }
      .table th { background:#f8f9fa; font-weight:600; color:#2c3e50; }
      .table tbody tr:hover { background:#f8f9fa; }
      .fw-med { font-weight:600; }
      .text-muted { color:#7f8c8d; }
      .badge { display:inline-flex; align-items:center; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; }
      .badge--green { background:#d5f5e3; color:#1e8449; }
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
      <h1 class="page__title">Factures pharmacie</h1>
      <p class="page__sub">Historique des factures générées pour les ventes</p>
    </div>
    <div class="page__actions">
      <a class="btn btn--outline" routerLink="/pharmacie">← Retour à la pharmacie</a>
      <a class="btn btn--primary" routerLink="/pharmacie/ventes">Voir les ventes</a>
    </div>
  </div>

  <div class="card">
    <div class="card__head"><span class="card__title">Liste des factures</span></div>
    <table class="table">
      <thead>
        <tr><th>N° facture</th><th>Date</th><th>Patient</th><th>Montant</th><th>Statut</th><th></th></tr>
      </thead>
      <tbody>
        @for (vente of store.ventes(); track vente.id) {
          <tr>
            <td class="fw-med">FACT-{{ vente.id }}</td>
            <td class="text-muted">{{ vente.date }}</td>
            <td>{{ vente.patient }}</td>
            <td>{{ vente.montantTotal | number:'1.0-0' }} FCFA</td>
            <td><span class="badge" [class.badge--green]="vente.statut==='payé'" [class.badge--yellow]="vente.statut==='partiel'">{{ vente.statut }}</span></td>
            <td><button class="btn btn--small btn--outline" (click)="printFacture(vente)">🖨️ Imprimer</button></td>
          </tr>
        }
      </tbody>
    </table>
  </div>
</div>
  `
})
export class PharmacieFacturesComponent {
  constructor(public readonly store: PharmacieStoreService) {}

  printFacture(vente: VenteMed) {
    const popup = window.open('', '_blank')!;
    popup.document.write(`<html><body style="font-family:Arial;padding:30px"><h2>FACTURE PHARMACIE - FACT-${vente.id}</h2><p><strong>Date :</strong> ${vente.date}</p><p><strong>Patient :</strong> ${vente.patient}</p><p><strong>Médicaments :</strong> ${vente.medicaments}</p><hr/><p><strong>Montant total :</strong> ${vente.montantTotal.toLocaleString('fr-FR')} FCFA</p><p><strong>Part INAM :</strong> ${vente.montantInam.toLocaleString('fr-FR')} FCFA</p><p><strong>Part patient :</strong> ${vente.montantPatient.toLocaleString('fr-FR')} FCFA</p><p><strong>Statut :</strong> ${vente.statut}</p></body></html>`);
    popup.print();
  }
}
