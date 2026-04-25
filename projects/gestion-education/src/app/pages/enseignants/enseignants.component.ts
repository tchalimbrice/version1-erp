import { Component, signal, computed } from '@angular/core';

type TypeContrat = 'CDI' | 'CDD' | 'Vacataire' | 'Stagiaire';

interface Enseignant {
  id: number; matricule: string; nom: string; prenom: string;
  matierePrincipale: string; matieres: string[];
  classes: string[]; contrat: TypeContrat;
  tel: string; email: string;
  heuresHebdo: number; experience: number;
}

@Component({
  selector: 'app-enseignants',
  imports: [],
  styleUrl: '../../shared-page.scss',
  template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Enseignants</h1><p class="page__sub">{{ filtered().length }} enseignant(s)</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="showModal.set(true)">+ Ajouter un enseignant</button> </div> </div> <div class="filter-bar"> <input class="search-input" placeholder="Rechercher (nom, matière…)" [value]="search()" (input)="search.set($any($event.target).value)"/> <select class="btn btn--ghost" [value]="filterContrat()" (change)="filterContrat.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Tous contrats</option> <option value="CDI">CDI</option><option value="CDD">CDD</option> <option value="Vacataire">Vacataire</option><option value="Stagiaire">Stagiaire</option> </select> </div> <div class="table-wrap"> <table class="table"> <thead><tr> <th>Matricule</th><th>Nom & Prénom</th><th>Matière principale</th> <th>Classes</th><th>Contrat</th><th>Heures/sem.</th><th>Expérience</th><th></th> </tr></thead> <tbody> @for (e of filtered(); track e.id) {
          <tr style="cursor:pointer;" (click)="selected.set(e)"> <td><span class="mono">{{ e.matricule }}</span></td> <td><span class="fw-bold">{{ e.nom }}</span> {{ e.prenom }}</td> <td>{{ e.matierePrincipale }}</td> <td> @for (c of e.classes.slice(0,3); track c) {
                <span class="badge badge--blue" style="margin:1px;">{{ c }}</span> }
              @if (e.classes.length > 3) { <span class="text-muted text-sm">+{{ e.classes.length-3 }}</span> }
            </td> <td><span class="badge" [class]="contratCls(e.contrat)">{{ e.contrat }}</span></td> <td class="fw-med">{{ e.heuresHebdo }}h</td> <td class="text-muted">{{ e.experience }} ans</td> <td><button class="btn btn--ghost" style="padding:4px 10px;font-size:11px;" (click)="$event.stopPropagation();selected.set(e)">Profil</button></td> </tr> }
      </tbody> </table> </div> @if (selected()) {
    <div class="modal-overlay" (click)="selected.set(null)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">{{ selected()!.nom }} {{ selected()!.prenom }}</span> <button class="modal__close" (click)="selected.set(null)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Matricule</label><input class="field__input" [value]="selected()!.matricule" readonly/></div> <div class="field"><label class="field__label">Contrat</label> <div style="margin-top:4px;"><span class="badge" [class]="contratCls(selected()!.contrat)">{{ selected()!.contrat }}</span></div> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Téléphone</label><input class="field__input" [value]="selected()!.tel" readonly/></div> <div class="field"><label class="field__label">Email</label><input class="field__input" [value]="selected()!.email" readonly/></div> </div> <div class="field"><label class="field__label">Matières enseignées</label> <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px;"> @for (m of selected()!.matieres; track m) {
                <span class="badge badge--teal">{{ m }}</span> }
            </div> </div> <div class="field"><label class="field__label">Classes assignées</label> <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px;"> @for (c of selected()!.classes; track c) {
                <span class="badge badge--blue">{{ c }}</span> }
            </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Heures / semaine</label><input class="field__input" [value]="selected()!.heuresHebdo+'h'" readonly/></div> <div class="field"><label class="field__label">Expérience</label><input class="field__input" [value]="selected()!.experience+' ans'" readonly/></div> </div> </div> <div class="modal__foot"><button class="btn btn--ghost" (click)="selected.set(null)">Fermer</button></div> </div> </div> }

  @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Ajouter un enseignant</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Nom</label> <input class="field__input" [value]="form.nom" (input)="form.nom=$any($event.target).value" placeholder="Nom"/> </div> <div class="field"><label class="field__label">Prénom</label> <input class="field__input" [value]="form.prenom" (input)="form.prenom=$any($event.target).value" placeholder="Prénom"/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Matière principale</label> <input class="field__input" [value]="form.matiere" (input)="form.matiere=$any($event.target).value" placeholder="Mathématiques"/> </div> <div class="field"><label class="field__label">Type de contrat</label> <select class="field__select" [value]="form.contrat" (change)="form.contrat=$any($event.target).value"> <option value="CDI">CDI</option><option value="CDD">CDD</option> <option value="Vacataire">Vacataire</option><option value="Stagiaire">Stagiaire</option> </select> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Téléphone</label> <input class="field__input" [value]="form.tel" (input)="form.tel=$any($event.target).value" placeholder="+225 07..."/> </div> <div class="field"><label class="field__label">Heures / sem.</label> <input class="field__input" type="number" [value]="form.heures" (input)="form.heures=+$any($event.target).value" placeholder="18"/> </div> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addEnseignant()">Ajouter</button> </div> </div> </div> }
</div> `,
})
export class EnseignantsComponent {
  search        = signal('');
  filterContrat = signal('');
  showModal     = signal(false);
  selected      = signal<Enseignant | null>(null);

  form = { nom:'', prenom:'', matiere:'', contrat:'CDI', tel:'', heures: 18 };

  enseignants = signal<Enseignant[]>([
    { id:1,  matricule:'ENS-001', nom:'Martin',     prenom:'Jean-Paul', matierePrincipale:'Mathématiques', matieres:['Mathématiques','Physique'],         classes:['6ème A','6ème B','5ème A'], contrat:'CDI',      tel:'+225 07 11 22 33', email:'j.martin@ecole.ci',   heuresHebdo:18, experience:12 },
    { id:2,  matricule:'ENS-002', nom:'Kouassi',    prenom:'Marie',     matierePrincipale:'Français',       matieres:['Français','Littérature'],           classes:['CM1 A','CM2 A','6ème A'],  contrat:'CDI',      tel:'+225 05 44 55 66', email:'m.kouassi@ecole.ci',  heuresHebdo:20, experience:8  },
    { id:3,  matricule:'ENS-003', nom:'Diallo',     prenom:'Abdou',     matierePrincipale:'Histoire-Géo',   matieres:['Histoire-Géo','EMC'],               classes:['5ème A','4ème A','3ème A'], contrat:'CDI',      tel:'+225 01 77 88 99', email:'a.diallo@ecole.ci',   heuresHebdo:16, experience:15 },
    { id:4,  matricule:'ENS-004', nom:'Bamba',      prenom:'Salimata',  matierePrincipale:'Sciences',       matieres:['SVT','Sciences'],                   classes:['4ème A','3ème A'],          contrat:'CDD',      tel:'+225 07 22 33 44', email:'s.bamba@ecole.ci',    heuresHebdo:14, experience:4  },
    { id:5,  matricule:'ENS-005', nom:'N\'Goran',   prenom:'Éric',      matierePrincipale:'Anglais',        matieres:['Anglais'],                          classes:['5ème A','4ème A','3ème A','2nde A'], contrat:'CDI', tel:'+225 05 55 66 77', email:'e.ngoran@ecole.ci', heuresHebdo:22, experience:9  },
    { id:6,  matricule:'ENS-006', nom:'Traoré',     prenom:'Fanta',     matierePrincipale:'EPS',            matieres:['EPS'],                              classes:['CP A','CE1 A','CE2 A','CM1 A','CM2 A'], contrat:'CDI', tel:'+225 01 88 99 00', email:'f.traore@ecole.ci', heuresHebdo:24, experience:6 },
    { id:7,  matricule:'ENS-007', nom:'Coulibaly',  prenom:'Tidiane',   matierePrincipale:'Informatique',   matieres:['Informatique','Mathématiques'],      classes:['2nde A','1ère A','Tle A'],  contrat:'Vacataire',tel:'+225 07 33 44 55', email:'t.coulibaly@ecole.ci',heuresHebdo:12, experience:3  },
    { id:8,  matricule:'ENS-008', nom:'Koffi',      prenom:'Adjoua',    matierePrincipale:'Arts plastiques',matieres:['Arts plastiques','Musique'],         classes:['CE1 A','CE2 A','CM1 A'],   contrat:'CDD',      tel:'+225 05 66 77 88', email:'a.koffi@ecole.ci',    heuresHebdo:10, experience:5  },
  ]);

  filtered = computed(() => {
    const q = this.search().toLowerCase();
    const c = this.filterContrat();
    return this.enseignants().filter(e => (!q || e.nom.toLowerCase().includes(q) || e.prenom.toLowerCase().includes(q) || e.matierePrincipale.toLowerCase().includes(q)) &&
      (!c || e.contrat === c)
    );
  });

  contratCls(c: TypeContrat) {
    const m: Record<TypeContrat, string> = { CDI:'badge badge--green', CDD:'badge badge--blue', Vacataire:'badge badge--yellow', Stagiaire:'badge badge--gray' };
    return m[c];
  }

  addEnseignant() {
    const f = this.form;
    if (!f.nom || !f.prenom) return;
    const ids = this.enseignants().map(e => e.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    this.enseignants.update(list => [...list, {
      id, matricule: `ENS-${String(id).padStart(3,'0')}`,
      nom: f.nom, prenom: f.prenom, matierePrincipale: f.matiere,
      matieres: [f.matiere], classes: [],
      contrat: f.contrat as TypeContrat, tel: f.tel, email: '',
      heuresHebdo: f.heures, experience: 0
    }]);
    this.form = { nom:'', prenom:'', matiere:'', contrat:'CDI', tel:'', heures: 18 };
    this.showModal.set(false);
  }
}
