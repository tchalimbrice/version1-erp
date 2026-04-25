import { Component, inject } from '@angular/core';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  styleUrl: '../../shared-page.scss',
  template: `
<div class="page"> <div class="page__header"> <div> <h1 class="page__title">Tableau de bord</h1> <p class="page__sub">{{ store.company()?.name }} — Avril 2025</p> </div> </div> <div class="kpi-grid"> @for (k of kpis; track k.label) {
      <div class="kpi-card" [style.border-left-color]="k.color"> <div class="kpi-card__icon" [style.background]="k.color+'22'" [style.color]="k.color" [innerHTML]="k.icon"></div> <div class="kpi-card__body"> <div class="kpi-card__value">{{ k.value }}</div> <div class="kpi-card__label">{{ k.label }}</div> <div class="kpi-card__sub">{{ k.sub }}</div> </div> </div> }
  </div> <div class="charts-row"> <div class="card"> <div class="card__head"><span class="card__title">Ventes par mois (2025)</span></div> <div class="bar-chart"> @for (b of barData; track b.lbl) {
          <div class="bar-chart__col"> <div class="bar-chart__val">{{ b.val }}</div> <div class="bar-chart__bar" [style.height.px]="b.h" [style.background]="b.color"></div> <div class="bar-chart__lbl">{{ b.lbl }}</div> </div> }
      </div> </div> <div class="card"> <div class="card__head"><span class="card__title">Répartition des ventes</span></div> <div class="pie-wrap"> <svg class="pie-svg" viewBox="0 0 42 42"> <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#e3e8f0" stroke-width="6"/> <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#27ae60" stroke-width="6"stroke-dasharray="45 55" stroke-dashoffset="25"/> <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#3498db" stroke-width="6"stroke-dasharray="30 70" stroke-dashoffset="-20"/> <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#f39c12" stroke-width="6"stroke-dasharray="25 75" stroke-dashoffset="-50"/> </svg> <div class="pie-legend"> <div class="pie-legend__item"><div class="pie-legend__dot" style="background:#27ae60"></div>Épicerie 45%</div> <div class="pie-legend__item"><div class="pie-legend__dot" style="background:#3498db"></div>Boissons 30%</div> <div class="pie-legend__item"><div class="pie-legend__dot" style="background:#f39c12"></div>Cosmétiques 25%</div> </div> </div> </div> </div> <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;"> <div class="card"> <div class="card__head"><span class="card__title">Top produits du mois</span></div> <table class="table"> <thead><tr><th>Produit</th><th>Qté</th><th>Chiffre d'affaires</th></tr></thead> <tbody> @for (p of topProduits; track p.nom) {
            <tr> <td class="fw-med">{{ p.nom }}</td> <td class="text-muted">{{ p.qte }}</td> <td style="color:#27ae60;font-weight:700;">{{ p.ca }}</td> </tr> }
        </tbody> </table> </div> <div class="card"> <div class="card__head"><span class="card__title">Alertes stock</span></div> <div style="display:flex;flex-direction:column;gap:8px;"> @for (a of alertesStock; track a.produit) {
          <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:#fef9e7;border-radius:8px;border-left:3px solid #f39c12;"> <span style="font-size:13px;font-weight:600;color:#555;">{{ a.produit }}</span> <span class="badge badge--yellow">{{ a.stock }} restant(s)</span> </div> }
      </div> </div> </div> <div class="card"> <div class="card__head"><span class="card__title">Dernières ventes</span></div> <table class="table"> <thead><tr><th>N° Vente</th><th>Client</th><th>Montant</th><th>Statut</th><th>Date</th></tr></thead> <tbody> @for (v of dernieresVentes; track v.ref) {
          <tr> <td><span class="mono">{{ v.ref }}</span></td> <td class="fw-med">{{ v.client }}</td> <td style="font-weight:700;color:#1a2a4a;">{{ v.montant }}</td> <td><span class="badge" [class]="v.cls">{{ v.statut }}</span></td> <td class="text-muted text-sm">{{ v.date }}</td> </tr> }
      </tbody> </table> </div>
</div> `,
})
export class DashboardComponent {
  readonly store = inject(CollabStoreService);

  kpis = [
    { label: 'CA du mois',       value: '8.4M',  sub: '+12% vs mars',        color: '#27ae60', icon: '' },
    { label: 'Ventes (mois)',     value: '347',   sub: '14 aujourd\'hui',      color: '#3498db', icon: '' },
    { label: 'Clients actifs',   value: '128',   sub: '+8 ce mois',           color: '#9b59b6', icon: '' },
    { label: 'Produits en stock',value: '284',   sub: '12 en rupture',        color: '#e67e22', icon: '' },
    { label: 'Factures impayées',value: '23',    sub: '1.2M FCFA',            color: '#e74c3c', icon: '' },
    { label: 'Marge brute',      value: '32%',   sub: 'Objectif : 35%',       color: '#1abc9c', icon: '' },
  ];

  barData = [
    { lbl:'Jan', val:'5.2M', h: 70,  color: '#2ecc71' },
    { lbl:'Fév', val:'6.1M', h: 82,  color: '#27ae60' },
    { lbl:'Mar', val:'7.5M', h: 100, color: '#1e8449' },
    { lbl:'Avr', val:'8.4M', h: 110, color: '#27ae60' },
  ];

  topProduits = [
    { nom: 'Farine de blé 50kg',   qte: 142, ca: '1 136 000 FCFA' },
    { nom: 'Huile palme 5L',       qte: 98,  ca: '686 000 FCFA'},
    { nom: 'Savon Palmolive ×12',  qte: 87,  ca: '435 000 FCFA'},
    { nom: 'Eau minérale 1.5L',    qte: 210, ca: '315 000 FCFA'},
    { nom: 'Riz brisé 50kg',       qte: 65,  ca: '975 000 FCFA'},
  ];

  alertesStock = [
    { produit: 'Sucre cristal 25kg', stock: 4 },
    { produit: 'Lait concentré ×24', stock: 7 },
    { produit: 'Tomate concentrée',  stock: 3 },
    { produit: 'Poisson fumé 5kg',   stock: 6 },
  ];

  dernieresVentes = [
    { ref:'VTE-2025-0347', client:'Mme Konan Aya',     montant:'45 000 FCFA',  statut:'Payé',    cls:'badge badge--green',  date:'20/04/2025' },
    { ref:'VTE-2025-0346', client:'Supermarché Ivoire', montant:'320 000 FCFA', statut:'Payé',    cls:'badge badge--green',  date:'20/04/2025' },
    { ref:'VTE-2025-0345', client:'M. Yao Bernard',     montant:'18 500 FCFA',  statut:'Crédit',  cls:'badge badge--yellow', date:'19/04/2025' },
    { ref:'VTE-2025-0344', client:'Boutique Fatou',     montant:'87 000 FCFA',  statut:'Payé',    cls:'badge badge--green',  date:'19/04/2025' },
    { ref:'VTE-2025-0343', client:'M. Traoré Issouf',   montant:'12 000 FCFA',  statut:'Annulé',  cls:'badge badge--red',    date:'18/04/2025' },
  ];
}
