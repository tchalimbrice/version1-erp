import { Component, signal, computed } from '@angular/core';

type StatutFacture = 'Payée' | 'En attente' | 'En retard' | 'Annulée';

interface Facture {
  id: number; numero: string; client: string;
  montantHT: number; tva: number; montantTTC: number;
  statut: StatutFacture; dateEmission: string; dateEcheance: string;
}

@Component({
  selector: 'app-factures',
  imports: [],
  styleUrl: '../../shared-page.scss',
  template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Factures</h1><p class="page__sub">{{ filtered().length }} facture(s)</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="showModal.set(true)">+ Nouvelle facture</button> </div> </div> <div class="kpi-grid" style="grid-template-columns:repeat(4,1fr);"> @for (k of kpis(); track k.label) {
      <div class="kpi-card" [style.border-left-color]="k.color"> <div class="kpi-card__icon" [style.background]="k.color+'22'" [style.color]="k.color" [innerHTML]="k.icon"></div> <div class="kpi-card__body"> <div class="kpi-card__value">{{ k.value }}</div> <div class="kpi-card__label">{{ k.label }}</div> </div> </div> }
  </div> <div class="tabs"> @for (t of tabs; track t.val) {
      <button class="tab" [class.active]="activeTab()===t.val" (click)="activeTab.set(t.val)">{{ t.lbl }} ({{ countTab(t.val) }})</button> }
  </div> <div class="filter-bar"> <input class="search-input" placeholder="Rechercher (numéro, client…)" [value]="search()" (input)="search.set($any($event.target).value)"/> </div> <div class="table-wrap"> <table class="table"> <thead><tr> <th>N° Facture</th><th>Client</th><th>Montant HT</th><th>TVA</th> <th>Montant TTC</th><th>Statut</th><th>Émission</th><th>Échéance</th><th></th> </tr></thead> <tbody> @for (f of filtered(); track f.id) {
          <tr style="cursor:pointer;" (click)="selected.set(f)"> <td><span class="mono">{{ f.numero }}</span></td> <td class="fw-bold">{{ f.client }}</td> <td class="text-muted">{{ fmt(f.montantHT) }}</td> <td class="text-muted">{{ f.tva }}%</td> <td style="font-weight:700;color:#1a2a4a;">{{ fmt(f.montantTTC) }}</td> <td><span class="badge" [class]="statutCls(f.statut)">{{ f.statut }}</span></td> <td class="text-muted text-sm">{{ f.dateEmission }}</td> <td class="text-muted text-sm" [style.color]="f.statut==='En retard'?'#e74c3c':''">{{ f.dateEcheance }}</td> <td> @if (f.statut !== 'Payée' && f.statut !== 'Annulée') {
                <button class="btn btn--primary" style="padding:4px 10px;font-size:11px;" (click)="$event.stopPropagation();marquerPayee(f.id)">Payer</button> }
            </td> </tr> }
      </tbody> </table> </div> @if (selected()) {
    <div class="modal-overlay" (click)="selected.set(null)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Facture {{ selected()!.numero }}</span> <button class="modal__close" (click)="selected.set(null)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Client</label><input class="field__input" [value]="selected()!.client" readonly/></div> <div class="field"><label class="field__label">Statut</label> <div style="margin-top:4px;"><span class="badge" [class]="statutCls(selected()!.statut)">{{ selected()!.statut }}</span></div> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Montant HT</label><input class="field__input" [value]="fmt(selected()!.montantHT)" readonly/></div> <div class="field"><label class="field__label">TVA ({{ selected()!.tva }}%)</label><input class="field__input" [value]="fmt(selected()!.montantTTC - selected()!.montantHT)" readonly/></div> </div> <div class="field"><label class="field__label">Montant TTC</label> <input class="field__input" [value]="fmt(selected()!.montantTTC)" readonly style="font-size:16px;font-weight:800;color:#27ae60;"/> </div> <div class="fields-row"> <div class="field"><label class="field__label">Date d'émission</label><input class="field__input" [value]="selected()!.dateEmission" readonly/></div> <div class="field"><label class="field__label">Date d'échéance</label><input class="field__input" [value]="selected()!.dateEcheance" readonly/></div> </div> </div> <div class="modal__foot"> @if (selected()!.statut !== 'Payée' && selected()!.statut !== 'Annulée') {
            <button class="btn btn--primary" (click)="marquerPayee(selected()!.id);selected.set(null)">Marquer payée</button> }
          <button class="btn btn--ghost" (click)="selected.set(null)">Fermer</button> </div> </div> </div> }

  @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Nouvelle facture</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Client</label> <input class="field__input" [value]="form.client" (input)="form.client=$any($event.target).value" placeholder="Nom du client"/> </div> <div class="field"><label class="field__label">TVA (%)</label> <select class="field__select" [value]="form.tva" (change)="form.tva=+$any($event.target).value"> <option value="0">0%</option><option value="9">9%</option><option value="18">18%</option> </select> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Montant HT (FCFA)</label> <input class="field__input" type="number" [value]="form.montantHT" (input)="form.montantHT=+$any($event.target).value"/> </div> <div class="field"><label class="field__label">Date d'échéance</label> <input class="field__input" type="date" [value]="form.dateEcheance" (input)="form.dateEcheance=$any($event.target).value"/> </div> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addFacture()">Créer</button> </div> </div> </div> }
</div> `,
})
export class FacturesComponent {
  search    = signal('');
  activeTab = signal('all');
  showModal = signal(false);
  selected  = signal<Facture | null>(null);

  tabs = [{ val:'all', lbl:'Toutes' },{ val:'En attente', lbl:'En attente' },{ val:'En retard', lbl:'En retard' },{ val:'Payée', lbl:'Payées' }];
  form = { client:'', montantHT: 0, tva: 18, dateEcheance: '' };

  factures = signal<Facture[]>([
    { id:1,  numero:'FAC-2025-001', client:'Supermarché Ivoire',  montantHT:271186, tva:18, montantTTC:320000, statut:'Payée',      dateEmission:'01/04/2025', dateEcheance:'15/04/2025' },
    { id:2,  numero:'FAC-2025-002', client:'Sodici Sarl',         montantHT:326271, tva:18, montantTTC:385000, statut:'Payée',      dateEmission:'05/04/2025', dateEcheance:'20/04/2025' },
    { id:3,  numero:'FAC-2025-003', client:'Hôtel Ivoire Palace', montantHT:177966, tva:18, montantTTC:210000, statut:'En attente', dateEmission:'10/04/2025', dateEcheance:'25/04/2025' },
    { id:4,  numero:'FAC-2025-004', client:'Boutique Fatou',      montantHT:169492, tva:18, montantTTC:200000, statut:'En retard',  dateEmission:'01/03/2025', dateEcheance:'31/03/2025' },
    { id:5,  numero:'FAC-2025-005', client:'Mini-Marché Express', montantHT:84746,  tva:18, montantTTC:100000, statut:'En retard',  dateEmission:'15/03/2025', dateEcheance:'30/03/2025' },
    { id:6,  numero:'FAC-2025-006', client:'Mme Diallo Mariam',   montantHT:89492,  tva:18, montantTTC:105600, statut:'En attente', dateEmission:'17/04/2025', dateEcheance:'02/05/2025' },
    { id:7,  numero:'FAC-2025-007', client:'Supermarché Ivoire',  montantHT:169492, tva:18, montantTTC:200000, statut:'En attente', dateEmission:'18/04/2025', dateEcheance:'03/05/2025' },
  ]);

  filtered = computed(() => {
    const q  = this.search().toLowerCase();
    const ft = this.activeTab();
    return this.factures().filter(f => (!q  || f.client.toLowerCase().includes(q) || f.numero.toLowerCase().includes(q)) &&
      (ft === 'all' || f.statut === ft)
    );
  });

  kpis = computed(() => {
    const all = this.factures();
    const total   = all.reduce((s, f) => s + f.montantTTC, 0);
    const payees  = all.filter(f => f.statut === 'Payée').reduce((s, f) => s + f.montantTTC, 0);
    const attente = all.filter(f => f.statut === 'En attente' || f.statut === 'En retard').reduce((s, f) => s + f.montantTTC, 0);
    const retard  = all.filter(f => f.statut === 'En retard').length;
    return [
      { label: 'Total facturé',  value: this.fmtK(total),   color: '#1a2a4a', icon: '' },
      { label: 'Encaissé',       value: this.fmtK(payees),  color: '#27ae60', icon: '' },
      { label: 'À encaisser',    value: this.fmtK(attente), color: '#f39c12', icon: '' },
      { label: 'En retard',      value: String(retard),      color: '#e74c3c', icon: '' },
    ];
  });

  countTab(t: string) { return t==='all' ? this.factures().length : this.factures().filter(f => f.statut === t).length; }
  fmt(n: number) { return n.toLocaleString('fr-FR') + ' FCFA'; }
  fmtK(n: number) { return n >= 1_000_000 ? (n/1_000_000).toFixed(1)+'M' : n >= 1000 ? (n/1000).toFixed(0)+'k' : String(n); }

  statutCls(s: StatutFacture) {
    const m: Record<StatutFacture, string> = { Payée:'badge badge--green', 'En attente':'badge badge--blue', 'En retard':'badge badge--red', Annulée:'badge badge--gray' };
    return m[s];
  }

  marquerPayee(id: number) {
    this.factures.update(list => list.map(f => f.id === id ? { ...f, statut: 'Payée' as StatutFacture } : f));
  }

  addFacture() {
    const f = this.form;
    if (!f.client || !f.montantHT) return;
    const ids = this.factures().map(x => x.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    const ttc = Math.round(f.montantHT * (1 + f.tva / 100));
    this.factures.update(list => [...list, {
      id, numero: `FAC-2025-${String(id).padStart(3,'0')}`,
      client: f.client, montantHT: f.montantHT, tva: f.tva, montantTTC: ttc,
      statut: 'En attente', dateEmission: new Date().toLocaleDateString('fr-FR'), dateEcheance: f.dateEcheance
    }]);
    this.form = { client:'', montantHT: 0, tva: 18, dateEcheance: '' };
    this.showModal.set(false);
  }
}
