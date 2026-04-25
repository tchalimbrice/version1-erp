import { Component, signal, computed } from '@angular/core';

type CategorieProduit = 'Épicerie' | 'Boissons' | 'Cosmétiques' | 'Ménager' | 'Boulangerie' | 'Frais';

interface Produit {
  id: number; reference: string; nom: string; categorie: CategorieProduit;
  prixAchat: number; prixVente: number; stock: number; stockMin: number;
  fournisseur: string; unite: string;
}

@Component({
  selector: 'app-produits',
  imports: [],
  styleUrl: '../../shared-page.scss',
  template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Catalogue produits</h1><p class="page__sub">{{ filtered().length }} produit(s)</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="showModal.set(true)">+ Nouveau produit</button> </div> </div> <div class="filter-bar"> <input class="search-input" placeholder="Rechercher (nom, référence…)" [value]="search()" (input)="search.set($any($event.target).value)"/> <select class="btn btn--ghost" [value]="filterCat()" (change)="filterCat.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Toutes catégories</option> @for (c of categories; track c) { <option [value]="c">{{ c }}</option> }
    </select> <select class="btn btn--ghost" [value]="filterStock()" (change)="filterStock.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Tous stocks</option> <option value="alert">Stock critique</option> <option value="ok">Stock OK</option> </select> </div> <div class="table-wrap"> <table class="table"> <thead><tr> <th>Référence</th><th>Produit</th><th>Catégorie</th> <th>Prix achat</th><th>Prix vente</th><th>Marge</th> <th>Stock</th><th>Fournisseur</th><th></th> </tr></thead> <tbody> @for (p of filtered(); track p.id) {
          <tr style="cursor:pointer;" (click)="selected.set(p)"> <td><span class="mono">{{ p.reference }}</span></td> <td class="fw-bold">{{ p.nom }}</td> <td><span class="badge" [class]="catCls(p.categorie)">{{ p.categorie }}</span></td> <td class="text-muted">{{ fmt(p.prixAchat) }}</td> <td style="color:#27ae60;font-weight:700;">{{ fmt(p.prixVente) }}</td> <td><span class="badge" [class]="margeCls(p)">{{ marge(p) }}%</span></td> <td> <span class="badge" [class]="stockCls(p)">{{ p.stock }} {{ p.unite }}</span> </td> <td class="text-muted text-sm">{{ p.fournisseur }}</td> <td><button class="btn btn--ghost" style="padding:4px 10px;font-size:11px;" (click)="$event.stopPropagation();selected.set(p)">Détail</button></td> </tr> }
      </tbody> </table> </div> @if (selected()) {
    <div class="modal-overlay" (click)="selected.set(null)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">{{ selected()!.nom }}</span> <button class="modal__close" (click)="selected.set(null)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Référence</label><input class="field__input" [value]="selected()!.reference" readonly/></div> <div class="field"><label class="field__label">Catégorie</label><input class="field__input" [value]="selected()!.categorie" readonly/></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Prix d'achat</label><input class="field__input" [value]="fmt(selected()!.prixAchat)" readonly/></div> <div class="field"><label class="field__label">Prix de vente</label><input class="field__input" [value]="fmt(selected()!.prixVente)" readonly/></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Stock actuel</label><input class="field__input" [value]="selected()!.stock+' '+selected()!.unite" readonly/></div> <div class="field"><label class="field__label">Stock minimum</label><input class="field__input" [value]="selected()!.stockMin+' '+selected()!.unite" readonly/></div> </div> <div class="field"><label class="field__label">Fournisseur</label><input class="field__input" [value]="selected()!.fournisseur" readonly/></div> <div class="field"><label class="field__label">Marge brute</label> <div style="margin-top:4px;"><span class="badge" [class]="margeCls(selected()!)">{{ marge(selected()!) }}%</span></div> </div> </div> <div class="modal__foot"><button class="btn btn--ghost" (click)="selected.set(null)">Fermer</button></div> </div> </div> }

  @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Nouveau produit</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Nom du produit</label> <input class="field__input" [value]="form.nom" (input)="form.nom=$any($event.target).value" placeholder="Farine de blé 50kg"/> </div> <div class="field"><label class="field__label">Catégorie</label> <select class="field__select" [value]="form.categorie" (change)="form.categorie=$any($event.target).value"> @for (c of categories; track c) { <option [value]="c">{{ c }}</option> }
              </select> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Prix d'achat (FCFA)</label> <input class="field__input" type="number" [value]="form.prixAchat" (input)="form.prixAchat=+$any($event.target).value"/> </div> <div class="field"><label class="field__label">Prix de vente (FCFA)</label> <input class="field__input" type="number" [value]="form.prixVente" (input)="form.prixVente=+$any($event.target).value"/> </div> </div> <div class="fields-row--3"> <div class="field"><label class="field__label">Stock initial</label> <input class="field__input" type="number" [value]="form.stock" (input)="form.stock=+$any($event.target).value"/> </div> <div class="field"><label class="field__label">Stock min.</label> <input class="field__input" type="number" [value]="form.stockMin" (input)="form.stockMin=+$any($event.target).value"/> </div> <div class="field"><label class="field__label">Unité</label> <select class="field__select" [value]="form.unite" (change)="form.unite=$any($event.target).value"> <option value="pcs">pcs</option><option value="kg">kg</option> <option value="L">L</option><option value="carton">carton</option> </select> </div> </div> <div class="field"><label class="field__label">Fournisseur</label> <input class="field__input" [value]="form.fournisseur" (input)="form.fournisseur=$any($event.target).value" placeholder="Nom du fournisseur"/> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addProduit()">Créer</button> </div> </div> </div> }
</div> `,
})
export class ProduitsComponent {
  search     = signal('');
  filterCat  = signal('');
  filterStock= signal('');
  showModal  = signal(false);
  selected   = signal<Produit | null>(null);

  categories: CategorieProduit[] = ['Épicerie','Boissons','Cosmétiques','Ménager','Boulangerie','Frais'];
  form = { nom:'', categorie:'Épicerie', prixAchat:0, prixVente:0, stock:0, stockMin:5, unite:'pcs', fournisseur:'' };

  produits = signal<Produit[]>([
    { id:1,  reference:'PRD-001', nom:'Farine de blé 50kg',    categorie:'Épicerie',    prixAchat:7000,  prixVente:8000,  stock:48,  stockMin:10, fournisseur:'SITRAPAL',        unite:'sac'},
    { id:2,  reference:'PRD-002', nom:'Huile de palme 5L',     categorie:'Épicerie',    prixAchat:6200,  prixVente:7000,  stock:34,  stockMin:10, fournisseur:'PALMCI',          unite:'bidon'},
    { id:3,  reference:'PRD-003', nom:'Riz brisé 50kg',        categorie:'Épicerie',    prixAchat:13000, prixVente:15000, stock:22,  stockMin:8,  fournisseur:'SIFCA',           unite:'sac'},
    { id:4,  reference:'PRD-004', nom:'Sucre cristal 25kg',    categorie:'Épicerie',    prixAchat:9000,  prixVente:10500, stock:4,   stockMin:8,  fournisseur:'SUCRIVOIRE',      unite:'sac'},
    { id:5,  reference:'PRD-005', nom:'Eau minérale 1.5L',     categorie:'Boissons',    prixAchat:1100,  prixVente:1500,  stock:120, stockMin:30, fournisseur:'SODA AFRIQUE',    unite:'pcs'},
    { id:6,  reference:'PRD-006', nom:'Coca-Cola 33cl ×24',    categorie:'Boissons',    prixAchat:9600,  prixVente:12000, stock:18,  stockMin:6,  fournisseur:'SOLIBRA',         unite:'carton' },
    { id:7,  reference:'PRD-007', nom:'Bière Flag 65cl ×12',   categorie:'Boissons',    prixAchat:7200,  prixVente:9000,  stock:25,  stockMin:10, fournisseur:'SOLIBRA',         unite:'carton' },
    { id:8,  reference:'PRD-008', nom:'Savon Palmolive ×12',   categorie:'Cosmétiques', prixAchat:3600,  prixVente:5000,  stock:40,  stockMin:10, fournisseur:'DIST. IVOIRIENNE',unite:'carton' },
    { id:9,  reference:'PRD-009', nom:'Shampoing Pantene 400ml',categorie:'Cosmétiques',prixAchat:2800,  prixVente:3500,  stock:55,  stockMin:15, fournisseur:'P&G',             unite:'pcs'},
    { id:10, reference:'PRD-010', nom:'Lessive Omo 1kg',       categorie:'Ménager',     prixAchat:1800,  prixVente:2500,  stock:62,  stockMin:20, fournisseur:'UNILEVER',        unite:'pcs'},
    { id:11, reference:'PRD-011', nom:'Tomate concentrée 400g',categorie:'Épicerie',    prixAchat:600,   prixVente:900,   stock:3,   stockMin:20, fournisseur:'DIST. IVOIRIENNE',unite:'pcs'},
    { id:12, reference:'PRD-012', nom:'Lait concentré ×24',    categorie:'Épicerie',    prixAchat:8400,  prixVente:10800, stock:7,   stockMin:10, fournisseur:'NESTLÉ',          unite:'carton' },
    { id:13, reference:'PRD-013', nom:'Pain de mie ×10',       categorie:'Boulangerie', prixAchat:3000,  prixVente:4000,  stock:15,  stockMin:5,  fournisseur:'BOULANGERIE IVOIRE',unite:'carton'},
    { id:14, reference:'PRD-014', nom:'Poulet entier 1.5kg',   categorie:'Frais',       prixAchat:3500,  prixVente:4500,  stock:20,  stockMin:5,  fournisseur:'SIPRA',           unite:'pcs'},
  ]);

  filtered = computed(() => {
    const q  = this.search().toLowerCase();
    const fc = this.filterCat();
    const fs = this.filterStock();
    return this.produits().filter(p => (!q  || p.nom.toLowerCase().includes(q) || p.reference.toLowerCase().includes(q)) &&
      (!fc || p.categorie === fc) &&
      (!fs || (fs==='alert' ? p.stock <= p.stockMin : p.stock > p.stockMin))
    );
  });

  marge(p: Produit) { return Math.round((p.prixVente - p.prixAchat) / p.prixVente * 100); }
  fmt(n: number) { return n.toLocaleString('fr-FR') + ' F'; }

  catCls(c: CategorieProduit) {
    const m: Record<CategorieProduit, string> = { 'Épicerie':'badge badge--green', 'Boissons':'badge badge--blue', 'Cosmétiques':'badge badge--purple', 'Ménager':'badge badge--teal', 'Boulangerie':'badge badge--orange', 'Frais':'badge badge--yellow' };
    return m[c] ?? 'badge badge--gray';
  }
  stockCls(p: Produit) { return p.stock <= p.stockMin ? 'badge badge--red' : p.stock <= p.stockMin*2 ? 'badge badge--yellow' : 'badge badge--green'; }
  margeCls(p: Produit) { const m = this.marge(p); return m >= 25 ? 'badge badge--green' : m >= 15 ? 'badge badge--yellow' : 'badge badge--red'; }

  addProduit() {
    const f = this.form;
    if (!f.nom) return;
    const ids = this.produits().map(p => p.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    this.produits.update(list => [...list, { id, reference: `PRD-${String(id).padStart(3,'0')}`, nom: f.nom, categorie: f.categorie as CategorieProduit, prixAchat: f.prixAchat, prixVente: f.prixVente, stock: f.stock, stockMin: f.stockMin, fournisseur: f.fournisseur, unite: f.unite }]);
    this.form = { nom:'', categorie:'Épicerie', prixAchat:0, prixVente:0, stock:0, stockMin:5, unite:'pcs', fournisseur:'' };
    this.showModal.set(false);
  }
}
