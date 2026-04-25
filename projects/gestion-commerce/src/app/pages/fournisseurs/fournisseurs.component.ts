import { Component, signal, computed } from '@angular/core';

interface Fournisseur {
  id: number; code: string; nom: string; contact: string;
  tel: string; email: string; adresse: string;
  produitsLivres: string[]; delaiLivraison: number;
  totalCommandes: number; soldeARegler: number; noteQualite: number;
}

@Component({
  selector: 'app-fournisseurs',
  imports: [],
  styleUrl: '../../shared-page.scss',
  template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Fournisseurs</h1><p class="page__sub">{{ fournisseurs().length }} fournisseur(s)</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="showModal.set(true)">+ Nouveau fournisseur</button> </div> </div> <div class="filter-bar"> <input class="search-input" placeholder="Rechercher (nom, produit…)" [value]="search()" (input)="search.set($any($event.target).value)"/> </div> <div class="table-wrap"> <table class="table"> <thead><tr> <th>Code</th><th>Fournisseur</th><th>Contact</th><th>Téléphone</th> <th>Délai livraison</th><th>Total commandes</th><th>Solde à régler</th><th>Qualité</th><th></th> </tr></thead> <tbody> @for (f of filtered(); track f.id) {
          <tr style="cursor:pointer;" (click)="selected.set(f)"> <td><span class="mono">{{ f.code }}</span></td> <td class="fw-bold">{{ f.nom }}</td> <td class="text-muted">{{ f.contact }}</td> <td class="text-muted">{{ f.tel }}</td> <td class="text-muted">{{ f.delaiLivraison }} j</td> <td style="font-weight:700;color:#1a2a4a;">{{ fmt(f.totalCommandes) }}</td> <td [style.color]="f.soldeARegler > 0 ? '#e74c3c' : '#27ae60'" style="font-weight:700;"> {{ f.soldeARegler > 0 ? fmt(f.soldeARegler) : '—' }}
            </td> <td> <div style="display:flex;gap:2px;"> @for (s of stars(f.noteQualite); track $index) {
                  <span [style.color]="s ? '#f39c12' : '#ddd'">★</span> }
              </div> </td> <td><button class="btn btn--ghost" style="padding:4px 10px;font-size:11px;" (click)="$event.stopPropagation();selected.set(f)">Fiche</button></td> </tr> }
      </tbody> </table> </div> @if (selected()) {
    <div class="modal-overlay" (click)="selected.set(null)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">{{ selected()!.nom }}</span> <button class="modal__close" (click)="selected.set(null)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Code</label><input class="field__input" [value]="selected()!.code" readonly/></div> <div class="field"><label class="field__label">Contact</label><input class="field__input" [value]="selected()!.contact" readonly/></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Téléphone</label><input class="field__input" [value]="selected()!.tel" readonly/></div> <div class="field"><label class="field__label">Email</label><input class="field__input" [value]="selected()!.email || '—'" readonly/></div> </div> <div class="field"><label class="field__label">Adresse</label><input class="field__input" [value]="selected()!.adresse" readonly/></div> <div class="field"><label class="field__label">Produits livrés</label> <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px;"> @for (p of selected()!.produitsLivres; track p) {
                <span class="badge badge--teal">{{ p }}</span> }
            </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Total commandes</label><input class="field__input" [value]="fmt(selected()!.totalCommandes)" readonly/></div> <div class="field"><label class="field__label">Solde à régler</label> <input class="field__input" [value]="selected()!.soldeARegler>0 ? fmt(selected()!.soldeARegler) : 'Aucun'" readonly
                [style.color]="selected()!.soldeARegler>0 ? '#e74c3c' : '#27ae60'"/> </div> </div> </div> <div class="modal__foot"><button class="btn btn--ghost" (click)="selected.set(null)">Fermer</button></div> </div> </div> }

  @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Nouveau fournisseur</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Nom / Raison sociale</label> <input class="field__input" [value]="form.nom" (input)="form.nom=$any($event.target).value" placeholder="Nom de l'entreprise"/> </div> <div class="field"><label class="field__label">Contact principal</label> <input class="field__input" [value]="form.contact" (input)="form.contact=$any($event.target).value" placeholder="Nom du représentant"/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Téléphone</label> <input class="field__input" [value]="form.tel" (input)="form.tel=$any($event.target).value" placeholder="+225 27..."/> </div> <div class="field"><label class="field__label">Délai livraison (jours)</label> <input class="field__input" type="number" [value]="form.delai" (input)="form.delai=+$any($event.target).value" placeholder="3"/> </div> </div> <div class="field"><label class="field__label">Adresse</label> <input class="field__input" [value]="form.adresse" (input)="form.adresse=$any($event.target).value" placeholder="Ville, quartier…"/> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addFournisseur()">Créer</button> </div> </div> </div> }
</div> `,
})
export class FournisseursComponent {
  search    = signal('');
  showModal = signal(false);
  selected  = signal<Fournisseur | null>(null);
  form      = { nom:'', contact:'', tel:'', adresse:'', delai: 3 };

  fournisseurs = signal<Fournisseur[]>([
    { id:1, code:'FRN-001', nom:'SITRAPAL',          contact:'M. Aka Jean',     tel:'+225 27 21 11 22', email:'achat@sitrapal.ci',    adresse:'Abidjan, Zone Ind.', produitsLivres:['Farine blé','Semoule'],           delaiLivraison:2, totalCommandes:8400000,  soldeARegler:0,       noteQualite:5 },
    { id:2, code:'FRN-002', nom:'PALMCI',             contact:'Mme Koffi',       tel:'+225 27 21 22 33', email:'vente@palmci.ci',       adresse:'San-Pédro',          produitsLivres:['Huile de palme','Margarine'],     delaiLivraison:3, totalCommandes:5200000,  soldeARegler:0,       noteQualite:4 },
    { id:3, code:'FRN-003', nom:'SIFCA',              contact:'M. Bamba',        tel:'+225 27 22 33 44', email:'',                     adresse:'Abidjan, Treichville',produitsLivres:['Riz brisé','Riz parfumé'],       delaiLivraison:3, totalCommandes:12000000, soldeARegler:450000,  noteQualite:4 },
    { id:4, code:'FRN-004', nom:'SUCRIVOIRE',         contact:'M. Coulibaly',    tel:'+225 27 22 44 55', email:'',                     adresse:'Abidjan, Vridi',     produitsLivres:['Sucre cristal','Sucre en poudre'],delaiLivraison:2, totalCommandes:3800000,  soldeARegler:0,       noteQualite:5 },
    { id:5, code:'FRN-005', nom:'SOLIBRA',            contact:'Mme Diabaté',     tel:'+225 27 22 55 66', email:'distrib@solibra.ci',   adresse:'Abidjan, Yopougon',  produitsLivres:['Bière Flag','Coca-Cola','Fanta'],  delaiLivraison:1, totalCommandes:9600000,  soldeARegler:0,       noteQualite:5 },
    { id:6, code:'FRN-006', nom:'UNILEVER CI',        contact:'M. Sanogo',       tel:'+225 27 22 66 77', email:'unilever@ci.net',      adresse:'Abidjan, Plateau',   produitsLivres:['Lessive Omo','Savon Omo'],        delaiLivraison:4, totalCommandes:2800000,  soldeARegler:180000, noteQualite:3 },
    { id:7, code:'FRN-007', nom:'NESTLÉ Côte d\'Ivoire',contact:'Mme Traoré',   tel:'+225 27 22 77 88', email:'nestle@ci.nestle.com', adresse:'Abidjan, Cocody',    produitsLivres:['Lait concentré','Nescafé','Milo'],delaiLivraison:5, totalCommandes:4400000,  soldeARegler:0,       noteQualite:4 },
    { id:8, code:'FRN-008', nom:'DIST. IVOIRIENNE',   contact:'M. Diallo',       tel:'+225 07 33 44 55', email:'',                     adresse:'Abidjan, Marcory',   produitsLivres:['Tomate concentrée','Sardines','Haricots'], delaiLivraison:1, totalCommandes:1200000, soldeARegler:95000, noteQualite:3 },
  ]);

  filtered = computed(() => {
    const q = this.search().toLowerCase();
    return this.fournisseurs().filter(f => !q || f.nom.toLowerCase().includes(q) || f.produitsLivres.some(p => p.toLowerCase().includes(q)));
  });

  fmt(n: number) { return n.toLocaleString('fr-FR') + ' FCFA'; }
  stars(n: number) { return Array.from({length: 5}, (_, i) => i < n); }

  addFournisseur() {
    const f = this.form;
    if (!f.nom) return;
    const ids = this.fournisseurs().map(x => x.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    this.fournisseurs.update(list => [...list, { id, code: `FRN-${String(id).padStart(3,'0')}`, nom: f.nom, contact: f.contact, tel: f.tel, email: '', adresse: f.adresse, produitsLivres: [], delaiLivraison: f.delai, totalCommandes: 0, soldeARegler: 0, noteQualite: 3 }]);
    this.form = { nom:'', contact:'', tel:'', adresse:'', delai: 3 };
    this.showModal.set(false);
  }
}
