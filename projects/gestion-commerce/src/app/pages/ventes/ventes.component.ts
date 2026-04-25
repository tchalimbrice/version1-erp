import { Component, signal, computed } from '@angular/core';

type StatutVente = 'Payé' | 'Crédit' | 'Annulé';

interface LigneVente { produit: string; qte: number; prixUnit: number; }
interface Vente {
  id: number; reference: string; client: string;
  lignes: LigneVente[]; total: number; statut: StatutVente;
  date: string; vendeur: string;
}

@Component({
  selector: 'app-ventes',
  imports: [],
  styleUrl: '../../shared-page.scss',
  template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Ventes</h1><p class="page__sub">{{ filtered().length }} vente(s) — CA : {{ fmtK(caFiltered()) }}</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="showModal.set(true)">+ Nouvelle vente</button> </div> </div> <div class="tabs"> @for (t of tabs; track t.val) {
      <button class="tab" [class.active]="activeTab()===t.val" (click)="activeTab.set(t.val)">{{ t.lbl }} ({{ countTab(t.val) }})</button> }
  </div> <div class="filter-bar"> <input class="search-input" placeholder="Rechercher (client, référence…)" [value]="search()" (input)="search.set($any($event.target).value)"/> </div> <div class="table-wrap"> <table class="table"> <thead><tr><th>Référence</th><th>Client</th><th>Articles</th><th>Total</th><th>Statut</th><th>Vendeur</th><th>Date</th><th></th></tr></thead> <tbody> @for (v of filtered(); track v.id) {
          <tr style="cursor:pointer;" (click)="selected.set(v)"> <td><span class="mono">{{ v.reference }}</span></td> <td class="fw-bold">{{ v.client }}</td> <td class="text-muted text-sm">{{ v.lignes.length }} article(s)</td> <td style="font-weight:700;color:#1a2a4a;">{{ fmt(v.total) }}</td> <td><span class="badge" [class]="statutCls(v.statut)">{{ v.statut }}</span></td> <td class="text-muted">{{ v.vendeur }}</td> <td class="text-muted text-sm">{{ v.date }}</td> <td><button class="btn btn--ghost" style="padding:4px 10px;font-size:11px;" (click)="$event.stopPropagation();selected.set(v)">Détail</button></td> </tr> }
      </tbody> </table> </div> @if (selected()) {
    <div class="modal-overlay" (click)="selected.set(null)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Vente {{ selected()!.reference }}</span> <button class="modal__close" (click)="selected.set(null)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Client</label><input class="field__input" [value]="selected()!.client" readonly/></div> <div class="field"><label class="field__label">Statut</label> <div style="margin-top:4px;"><span class="badge" [class]="statutCls(selected()!.statut)">{{ selected()!.statut }}</span></div> </div> </div> <div class="table-wrap" style="box-shadow:none;border:1px solid #e3e8f0;"> <table class="table"> <thead><tr><th>Produit</th><th>Qté</th><th>Prix unit.</th><th>Sous-total</th></tr></thead> <tbody> @for (l of selected()!.lignes; track l.produit) {
                  <tr> <td>{{ l.produit }}</td> <td>{{ l.qte }}</td> <td class="text-muted">{{ fmt(l.prixUnit) }}</td> <td class="fw-bold">{{ fmt(l.qte * l.prixUnit) }}</td> </tr> }
              </tbody> </table> </div> <div style="text-align:right;font-size:16px;font-weight:900;color:#27ae60;">Total : {{ fmt(selected()!.total) }}</div> </div> <div class="modal__foot"> @if (selected()!.statut === 'Crédit') {
            <button class="btn btn--primary" (click)="marquerPaye(selected()!.id);selected.set(null)">Marquer payé</button> }
          <button class="btn btn--ghost" (click)="selected.set(null)">Fermer</button> </div> </div> </div> }

  @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Nouvelle vente</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Client</label> <input class="field__input" [value]="form.client" (input)="form.client=$any($event.target).value" placeholder="Nom du client"/> </div> <div class="field"><label class="field__label">Statut paiement</label> <select class="field__select" [value]="form.statut" (change)="form.statut=$any($event.target).value"> <option value="Payé">Payé</option> <option value="Crédit">Crédit</option> </select> </div> </div> <div class="field"><label class="field__label">Articles (produit × qté)</label> <input class="field__input" [value]="form.articles" (input)="form.articles=$any($event.target).value" placeholder="ex: Farine ×2, Huile ×5"/> </div> <div class="field"><label class="field__label">Montant total (FCFA)</label> <input class="field__input" type="number" [value]="form.total" (input)="form.total=+$any($event.target).value" placeholder="45000"/> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addVente()">Enregistrer</button> </div> </div> </div> }
</div> `,
})
export class VentesComponent {
  search    = signal('');
  activeTab = signal('all');
  showModal = signal(false);
  selected  = signal<Vente | null>(null);

  tabs = [{ val:'all', lbl:'Toutes' },{ val:'Payé', lbl:'Payées' },{ val:'Crédit', lbl:'Crédits' },{ val:'Annulé', lbl:'Annulées' }];
  form = { client:'', statut:'Payé', articles:'', total: 0 };

  ventes = signal<Vente[]>([
    { id:1,  reference:'VTE-2025-0347', client:'Mme Konan Aya',      lignes:[{produit:'Farine 50kg',qte:2,prixUnit:8000},{produit:'Huile 5L',qte:1,prixUnit:7000}],       total:23000,  statut:'Payé',   date:'20/04/2025', vendeur:'Mme Yao' },
    { id:2,  reference:'VTE-2025-0346', client:'Supermarché Ivoire', lignes:[{produit:'Riz 50kg',qte:10,prixUnit:15000},{produit:'Sucre 25kg',qte:5,prixUnit:10500}],     total:202500, statut:'Payé',   date:'20/04/2025', vendeur:'M. Konan' },
    { id:3,  reference:'VTE-2025-0345', client:'M. Yao Bernard',     lignes:[{produit:'Coca-Cola ×24',qte:2,prixUnit:12000}],                                             total:24000,  statut:'Crédit', date:'19/04/2025', vendeur:'Mme Yao' },
    { id:4,  reference:'VTE-2025-0344', client:'Boutique Fatou',     lignes:[{produit:'Savon ×12',qte:5,prixUnit:5000},{produit:'Lessive 1kg',qte:10,prixUnit:2500}],     total:50000,  statut:'Payé',   date:'19/04/2025', vendeur:'M. Konan' },
    { id:5,  reference:'VTE-2025-0343', client:'M. Traoré Issouf',   lignes:[{produit:'Pain de mie',qte:3,prixUnit:4000}],                                                total:12000,  statut:'Annulé', date:'18/04/2025', vendeur:'Mme Yao' },
    { id:6,  reference:'VTE-2025-0342', client:'Sodici Sarl',        lignes:[{produit:'Farine 50kg',qte:20,prixUnit:8000},{produit:'Riz 50kg',qte:15,prixUnit:15000}],    total:385000, statut:'Payé',   date:'18/04/2025', vendeur:'M. Konan' },
    { id:7,  reference:'VTE-2025-0341', client:'Mme Diallo Mariam',  lignes:[{produit:'Huile 5L',qte:12,prixUnit:7000},{produit:'Tomate 400g',qte:24,prixUnit:900}],      total:105600, statut:'Crédit', date:'17/04/2025', vendeur:'Mme Yao' },
    { id:8,  reference:'VTE-2025-0340', client:'Hôtel Ivoire Palace', lignes:[{produit:'Poulet 1.5kg',qte:30,prixUnit:4500},{produit:'Riz 50kg',qte:5,prixUnit:15000}],   total:210000, statut:'Payé',   date:'17/04/2025', vendeur:'M. Konan' },
  ]);

  filtered = computed(() => {
    const q  = this.search().toLowerCase();
    const ft = this.activeTab();
    return this.ventes().filter(v => (!q  || v.client.toLowerCase().includes(q) || v.reference.toLowerCase().includes(q)) &&
      (ft === 'all' || v.statut === ft)
    );
  });

  caFiltered = computed(() => this.filtered().filter(v => v.statut !== 'Annulé').reduce((s, v) => s + v.total, 0));
  countTab(t: string) { return t==='all' ? this.ventes().length : this.ventes().filter(v => v.statut === t).length; }

  fmt(n: number) { return n.toLocaleString('fr-FR') + ' FCFA'; }
  fmtK(n: number) { return n >= 1_000_000 ? (n/1_000_000).toFixed(1)+'M FCFA' : n >= 1000 ? (n/1000).toFixed(0)+'k FCFA' : n+' FCFA'; }

  statutCls(s: StatutVente) {
    const m: Record<StatutVente, string> = { Payé:'badge badge--green', Crédit:'badge badge--yellow', Annulé:'badge badge--red' };
    return m[s];
  }

  marquerPaye(id: number) {
    this.ventes.update(list => list.map(v => v.id === id ? { ...v, statut: 'Payé' as StatutVente } : v));
  }

  addVente() {
    const f = this.form;
    if (!f.client || !f.total) return;
    const ids = this.ventes().map(v => v.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    this.ventes.update(list => [{
      id, reference: `VTE-2025-${String(id+340).padStart(4,'0')}`,
      client: f.client, statut: f.statut as StatutVente, total: f.total,
      lignes: [{ produit: f.articles || 'Divers', qte: 1, prixUnit: f.total }],
      date: new Date().toLocaleDateString('fr-FR'), vendeur: 'Mme Yao'}, ...list]);
    this.form = { client:'', statut:'Payé', articles:'', total: 0 };
    this.showModal.set(false);
  }
}
