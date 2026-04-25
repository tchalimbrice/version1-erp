import { Component, signal, computed } from '@angular/core';

type TypeMouvement = 'Entrée' | 'Sortie' | 'Ajustement';

interface MouvementStock {
  id: number; produit: string; type: TypeMouvement;
  quantite: number; raison: string; date: string; agent: string;
}

@Component({
  selector: 'app-stocks',
  imports: [],
  styleUrl: '../../shared-page.scss',
  template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Gestion des stocks</h1><p class="page__sub">Inventaire et mouvements</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="showModal.set(true)">+ Mouvement de stock</button> </div> </div> <div class="tabs"> <button class="tab" [class.active]="vue()==='inventaire'" (click)="vue.set('inventaire')">Inventaire</button> <button class="tab" [class.active]="vue()==='mouvements'" (click)="vue.set('mouvements')">Mouvements</button> <button class="tab" [class.active]="vue()==='alertes'" (click)="vue.set('alertes')"> Alertes ({{ alertes().length }})</button> </div> @if (vue() === 'inventaire') {
    <div class="filter-bar"> <input class="search-input" placeholder="Rechercher un produit…" [value]="search()" (input)="search.set($any($event.target).value)"/> </div> <div class="table-wrap"> <table class="table"> <thead><tr><th>Produit</th><th>Catégorie</th><th>Stock actuel</th><th>Stock min.</th><th>État</th><th>Valeur stock</th></tr></thead> <tbody> @for (p of inventaireFiltered(); track p.ref) {
            <tr> <td class="fw-bold">{{ p.nom }}</td> <td><span class="badge badge--gray">{{ p.categorie }}</span></td> <td><span style="font-weight:700;" [style.color]="p.stock <= p.stockMin ? '#e74c3c' : '#27ae60'">{{ p.stock }} {{ p.unite }}</span></td> <td class="text-muted">{{ p.stockMin }} {{ p.unite }}</td> <td> @if (p.stock === 0) { <span class="badge badge--red">Rupture</span> }
                @else if (p.stock <= p.stockMin) { <span class="badge badge--yellow">Critique</span> }
                @else { <span class="badge badge--green">OK</span> }
              </td> <td class="fw-med">{{ fmt(p.stock * p.prixAchat) }}</td> </tr> }
        </tbody> </table> </div> }

  @if (vue() === 'mouvements') {
    <div class="table-wrap"> <table class="table"> <thead><tr><th>Produit</th><th>Type</th><th>Quantité</th><th>Raison</th><th>Agent</th><th>Date</th></tr></thead> <tbody> @for (m of mouvements(); track m.id) {
            <tr> <td class="fw-bold">{{ m.produit }}</td> <td><span class="badge" [class]="mouvCls(m.type)">{{ m.type }}</span></td> <td style="font-weight:700;" [style.color]="m.type==='Entrée'?'#27ae60':m.type==='Sortie'?'#e74c3c':'#f39c12'"> {{ m.type === 'Entrée' ? '+' : m.type === 'Sortie' ? '-' : '~' }}{{ m.quantite }}
              </td> <td class="text-muted">{{ m.raison }}</td> <td class="text-muted">{{ m.agent }}</td> <td class="text-muted text-sm">{{ m.date }}</td> </tr> }
        </tbody> </table> </div> }

  @if (vue() === 'alertes') {
    <div style="display:flex;flex-direction:column;gap:10px;"> @for (a of alertes(); track a.ref) {
        <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-radius:12px;"[style.background]="a.stock===0 ? '#fdecea' : '#fef9e7'"[style.border-left]="a.stock===0 ? '4px solid #e74c3c' : '4px solid #f39c12'"> <div> <div style="font-weight:700;color:#333;">{{ a.nom }}</div> <div style="font-size:12px;color:#aaa;">{{ a.categorie }} — Min : {{ a.stockMin }} {{ a.unite }}</div> </div> <div style="text-align:right;"> <span class="badge" [class]="a.stock===0 ? 'badge badge--red' : 'badge badge--yellow'"> {{ a.stock === 0 ? 'RUPTURE' : a.stock+' restant(s)' }}
            </span> </div> </div> }
    </div> }

  @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Mouvement de stock</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Produit</label> <input class="field__input" [value]="form.produit" (input)="form.produit=$any($event.target).value" placeholder="Nom du produit"/> </div> <div class="field"><label class="field__label">Type</label> <select class="field__select" [value]="form.type" (change)="form.type=$any($event.target).value"> <option value="Entrée">Entrée (livraison)</option> <option value="Sortie">Sortie (vente/perte)</option> <option value="Ajustement">Ajustement inventaire</option> </select> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Quantité</label> <input class="field__input" type="number" [value]="form.quantite" (input)="form.quantite=+$any($event.target).value" placeholder="10"/> </div> <div class="field"><label class="field__label">Raison</label> <input class="field__input" [value]="form.raison" (input)="form.raison=$any($event.target).value" placeholder="Livraison fournisseur…"/> </div> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addMouvement()">Enregistrer</button> </div> </div> </div> }
</div> `,
})
export class StocksComponent {
  vue       = signal<'inventaire'|'mouvements'|'alertes'>('inventaire');
  search    = signal('');
  showModal = signal(false);
  form      = { produit:'', type:'Entrée', quantite: 0, raison:'' };

  inventaire = [
    { ref:'PRD-001', nom:'Farine de blé 50kg',    categorie:'Épicerie',    stock:48,  stockMin:10, unite:'sac',    prixAchat:7000  },
    { ref:'PRD-002', nom:'Huile de palme 5L',     categorie:'Épicerie',    stock:34,  stockMin:10, unite:'bidon',  prixAchat:6200  },
    { ref:'PRD-003', nom:'Riz brisé 50kg',        categorie:'Épicerie',    stock:22,  stockMin:8,  unite:'sac',    prixAchat:13000 },
    { ref:'PRD-004', nom:'Sucre cristal 25kg',    categorie:'Épicerie',    stock:4,   stockMin:8,  unite:'sac',    prixAchat:9000  },
    { ref:'PRD-005', nom:'Eau minérale 1.5L',     categorie:'Boissons',    stock:120, stockMin:30, unite:'pcs',    prixAchat:1100  },
    { ref:'PRD-006', nom:'Coca-Cola ×24',         categorie:'Boissons',    stock:18,  stockMin:6,  unite:'carton', prixAchat:9600  },
    { ref:'PRD-007', nom:'Bière Flag ×12',        categorie:'Boissons',    stock:25,  stockMin:10, unite:'carton', prixAchat:7200  },
    { ref:'PRD-008', nom:'Savon Palmolive ×12',   categorie:'Cosmétiques', stock:40,  stockMin:10, unite:'carton', prixAchat:3600  },
    { ref:'PRD-011', nom:'Tomate concentrée 400g',categorie:'Épicerie',    stock:3,   stockMin:20, unite:'pcs',    prixAchat:600   },
    { ref:'PRD-012', nom:'Lait concentré ×24',    categorie:'Épicerie',    stock:7,   stockMin:10, unite:'carton', prixAchat:8400  },
  ];

  mouvements = signal([
    { id:1,  produit:'Farine de blé 50kg',  type:'Entrée' as TypeMouvement, quantite:20, raison:'Livraison SITRAPAL',     date:'20/04/2025', agent:'M. Konan' },
    { id:2,  produit:'Coca-Cola ×24',       type:'Sortie' as TypeMouvement, quantite:5,  raison:'Vente VTE-0346',         date:'20/04/2025', agent:'Mme Yao' },
    { id:3,  produit:'Sucre cristal 25kg',  type:'Sortie' as TypeMouvement, quantite:4,  raison:'Vente directe',          date:'19/04/2025', agent:'Mme Yao' },
    { id:4,  produit:'Tomate concentrée',   type:'Ajustement' as TypeMouvement, quantite:3,  raison:'Inventaire physique',    date:'19/04/2025', agent:'M. Konan' },
    { id:5,  produit:'Riz brisé 50kg',      type:'Entrée' as TypeMouvement, quantite:10, raison:'Livraison SIFCA',        date:'18/04/2025', agent:'M. Konan' },
    { id:6,  produit:'Lait concentré ×24',  type:'Sortie' as TypeMouvement, quantite:3,  raison:'Vente grossiste',        date:'17/04/2025', agent:'Mme Yao' },
  ]);

  inventaireFiltered = computed(() => {
    const q = this.search().toLowerCase();
    return this.inventaire.filter(p => !q || p.nom.toLowerCase().includes(q));
  });

  alertes = computed(() => this.inventaire.filter(p => p.stock <= p.stockMin));

  fmt(n: number) { return n.toLocaleString('fr-FR') + ' FCFA'; }
  mouvCls(t: TypeMouvement) {
    const m: Record<TypeMouvement, string> = { Entrée:'badge badge--green', Sortie:'badge badge--red', Ajustement:'badge badge--yellow' };
    return m[t];
  }

  addMouvement() {
    const f = this.form;
    if (!f.produit || !f.quantite) return;
    const ids = this.mouvements().map(m => m.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    this.mouvements.update(list => [{ id, produit: f.produit, type: f.type as TypeMouvement, quantite: f.quantite, raison: f.raison, date: new Date().toLocaleDateString('fr-FR'), agent: 'M. Konan' }, ...list]);
    this.form = { produit:'', type:'Entrée', quantite: 0, raison:'' };
    this.showModal.set(false);
  }
}
