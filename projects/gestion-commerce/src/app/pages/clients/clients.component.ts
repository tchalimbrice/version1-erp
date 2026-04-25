import { Component, signal, computed } from '@angular/core';

type TypeClient = 'Particulier' | 'Revendeur' | 'Grossiste' | 'Entreprise';

interface Client {
  id: number; code: string; nom: string; type: TypeClient;
  tel: string; email: string; adresse: string;
  totalAchats: number; soldeCredit: number; derniereVisite: string;
}

@Component({
  selector: 'app-clients',
  imports: [],
  styleUrl: '../../shared-page.scss',
  template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Clients</h1><p class="page__sub">{{ filtered().length }} client(s)</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="showModal.set(true)">+ Nouveau client</button> </div> </div> <div class="filter-bar"> <input class="search-input" placeholder="Rechercher (nom, code, tél…)" [value]="search()" (input)="search.set($any($event.target).value)"/> <select class="btn btn--ghost" [value]="filterType()" (change)="filterType.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Tous types</option> @for (t of types; track t) { <option [value]="t">{{ t }}</option> }
    </select> <select class="btn btn--ghost" [value]="filterCredit()" (change)="filterCredit.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Tous soldes</option> <option value="credit">Avec crédit</option> <option value="ok">Solde nul</option> </select> </div> <div class="table-wrap"> <table class="table"> <thead><tr> <th>Code</th><th>Nom / Raison sociale</th><th>Type</th> <th>Téléphone</th><th>Total achats</th><th>Solde crédit</th><th>Dernière visite</th><th></th> </tr></thead> <tbody> @for (c of filtered(); track c.id) {
          <tr style="cursor:pointer;" (click)="selected.set(c)"> <td><span class="mono">{{ c.code }}</span></td> <td class="fw-bold">{{ c.nom }}</td> <td><span class="badge" [class]="typeCls(c.type)">{{ c.type }}</span></td> <td class="text-muted">{{ c.tel }}</td> <td style="font-weight:700;color:#1a2a4a;">{{ fmt(c.totalAchats) }}</td> <td [style.color]="c.soldeCredit > 0 ? '#e74c3c' : '#27ae60'" style="font-weight:700;"> {{ c.soldeCredit > 0 ? fmt(c.soldeCredit) : '—' }}
            </td> <td class="text-muted text-sm">{{ c.derniereVisite }}</td> <td><button class="btn btn--ghost" style="padding:4px 10px;font-size:11px;" (click)="$event.stopPropagation();selected.set(c)">Fiche</button></td> </tr> }
      </tbody> </table> </div> @if (selected()) {
    <div class="modal-overlay" (click)="selected.set(null)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">{{ selected()!.nom }}</span> <button class="modal__close" (click)="selected.set(null)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Code client</label><input class="field__input" [value]="selected()!.code" readonly/></div> <div class="field"><label class="field__label">Type</label> <div style="margin-top:4px;"><span class="badge" [class]="typeCls(selected()!.type)">{{ selected()!.type }}</span></div> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Téléphone</label><input class="field__input" [value]="selected()!.tel" readonly/></div> <div class="field"><label class="field__label">Email</label><input class="field__input" [value]="selected()!.email || '—'" readonly/></div> </div> <div class="field"><label class="field__label">Adresse</label><input class="field__input" [value]="selected()!.adresse" readonly/></div> <div class="fields-row"> <div class="field"><label class="field__label">Total achats</label><input class="field__input" [value]="fmt(selected()!.totalAchats)" readonly/></div> <div class="field"><label class="field__label">Solde crédit</label> <input class="field__input" [value]="selected()!.soldeCredit>0 ? fmt(selected()!.soldeCredit) : 'Aucun'" readonly
                [style.color]="selected()!.soldeCredit>0 ? '#e74c3c' : '#27ae60'"/> </div> </div> <div class="field"><label class="field__label">Dernière visite</label><input class="field__input" [value]="selected()!.derniereVisite" readonly/></div> </div> <div class="modal__foot"><button class="btn btn--ghost" (click)="selected.set(null)">Fermer</button></div> </div> </div> }

  @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Nouveau client</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Nom / Raison sociale</label> <input class="field__input" [value]="form.nom" (input)="form.nom=$any($event.target).value" placeholder="Nom complet"/> </div> <div class="field"><label class="field__label">Type de client</label> <select class="field__select" [value]="form.type" (change)="form.type=$any($event.target).value"> @for (t of types; track t) { <option [value]="t">{{ t }}</option> }
              </select> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Téléphone</label> <input class="field__input" [value]="form.tel" (input)="form.tel=$any($event.target).value" placeholder="+225 07..."/> </div> <div class="field"><label class="field__label">Email</label> <input class="field__input" [value]="form.email" (input)="form.email=$any($event.target).value" placeholder="email@..."/> </div> </div> <div class="field"><label class="field__label">Adresse</label> <input class="field__input" [value]="form.adresse" (input)="form.adresse=$any($event.target).value" placeholder="Quartier, ville…"/> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addClient()">Créer</button> </div> </div> </div> }
</div> `,
})
export class ClientsComponent {
  search      = signal('');
  filterType  = signal('');
  filterCredit= signal('');
  showModal   = signal(false);
  selected    = signal<Client | null>(null);

  types: TypeClient[] = ['Particulier','Revendeur','Grossiste','Entreprise'];
  form = { nom:'', type:'Particulier', tel:'', email:'', adresse:'' };

  clients = signal<Client[]>([
    { id:1,  code:'CLI-001', nom:'Mme Konan Aya',        type:'Particulier', tel:'+225 07 11 22 33', email:'',                  adresse:'Abidjan, Yopougon',  totalAchats:450000,  soldeCredit:0,      derniereVisite:'20/04/2025' },
    { id:2,  code:'CLI-002', nom:'Supermarché Ivoire',   type:'Grossiste',   tel:'+225 27 21 32 43', email:'achat@smivoire.ci', adresse:'Abidjan, Plateau',   totalAchats:12500000,soldeCredit:0,      derniereVisite:'20/04/2025' },
    { id:3,  code:'CLI-003', nom:'M. Yao Bernard',       type:'Revendeur',   tel:'+225 05 44 55 66', email:'',                  adresse:'Abidjan, Cocody',    totalAchats:2800000, soldeCredit:18500,  derniereVisite:'19/04/2025' },
    { id:4,  code:'CLI-004', nom:'Boutique Fatou',       type:'Revendeur',   tel:'+225 01 77 88 99', email:'boutique@fatou.ci', adresse:'Bouaké, Centre',     totalAchats:5600000, soldeCredit:0,      derniereVisite:'19/04/2025' },
    { id:5,  code:'CLI-005', nom:'M. Traoré Issouf',     type:'Particulier', tel:'+225 07 22 33 44', email:'',                  adresse:'Abidjan, Abobo',     totalAchats:120000,  soldeCredit:12000,  derniereVisite:'18/04/2025' },
    { id:6,  code:'CLI-006', nom:'Sodici Sarl',          type:'Entreprise',  tel:'+225 27 22 44 55', email:'achat@sodici.ci',   adresse:'Abidjan, Zone Ind.', totalAchats:8400000, soldeCredit:0,      derniereVisite:'17/04/2025' },
    { id:7,  code:'CLI-007', nom:'Mme Diallo Mariam',    type:'Revendeur',   tel:'+225 05 55 66 77', email:'',                  adresse:'San-Pédro',          totalAchats:1200000, soldeCredit:45000,  derniereVisite:'16/04/2025' },
    { id:8,  code:'CLI-008', nom:'Hôtel Ivoire Palace',  type:'Entreprise',  tel:'+225 27 22 11 22', email:'achat@ivoire.ci',   adresse:'Abidjan, Cocody',    totalAchats:6700000, soldeCredit:320000, derniereVisite:'15/04/2025' },
    { id:9,  code:'CLI-009', nom:'M. Coulibaly Koffi',   type:'Particulier', tel:'+225 07 33 44 55', email:'',                  adresse:'Abidjan, Marcory',   totalAchats:380000,  soldeCredit:0,      derniereVisite:'14/04/2025' },
    { id:10, code:'CLI-010', nom:'Mini-Marché Express',  type:'Revendeur',   tel:'+225 05 66 77 88', email:'mini@express.ci',   adresse:'Daloa',              totalAchats:3200000, soldeCredit:88000,  derniereVisite:'12/04/2025' },
  ]);

  filtered = computed(() => {
    const q  = this.search().toLowerCase();
    const ft = this.filterType();
    const fc = this.filterCredit();
    return this.clients().filter(c => (!q  || c.nom.toLowerCase().includes(q) || c.code.toLowerCase().includes(q) || c.tel.includes(q)) &&
      (!ft || c.type === ft) &&
      (!fc || (fc==='credit' ? c.soldeCredit > 0 : c.soldeCredit === 0))
    );
  });

  fmt(n: number) { return n.toLocaleString('fr-FR') + ' FCFA'; }
  typeCls(t: TypeClient) {
    const m: Record<TypeClient, string> = { Particulier:'badge badge--gray', Revendeur:'badge badge--blue', Grossiste:'badge badge--purple', Entreprise:'badge badge--teal' };
    return m[t];
  }

  addClient() {
    const f = this.form;
    if (!f.nom) return;
    const ids = this.clients().map(c => c.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    this.clients.update(list => [...list, { id, code: `CLI-${String(id).padStart(3,'0')}`, nom: f.nom, type: f.type as TypeClient, tel: f.tel, email: f.email, adresse: f.adresse, totalAchats: 0, soldeCredit: 0, derniereVisite: new Date().toLocaleDateString('fr-FR') }]);
    this.form = { nom:'', type:'Particulier', tel:'', email:'', adresse:'' };
    this.showModal.set(false);
  }
}
