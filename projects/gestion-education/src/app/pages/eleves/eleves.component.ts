import { Component, signal, computed } from '@angular/core';

type StatutEleve = 'Actif' | 'Redoublant' | 'Transféré' | 'Exclu';

interface Eleve {
  id: number; matricule: string; nom: string; prenom: string;
  dateNaissance: string; classe: string; niveau: string;
  parentNom: string; parentTel: string;
  moyenneGen: number; statut: StatutEleve;
}

@Component({
  selector: 'app-eleves',
  imports: [],
  styleUrl: '../../shared-page.scss',
  template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Élèves</h1><p class="page__sub">{{ filtered().length }} élève(s) trouvé(s)</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="openAddForm()">+ Inscrire un élève</button> </div> </div> <div class="filter-bar"> <input class="search-input" placeholder="Rechercher (nom, matricule, classe…)" [value]="search()" (input)="search.set($any($event.target).value)"/> <select class="btn btn--ghost" [value]="filterNiveau()" (change)="filterNiveau.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Tous niveaux</option> @for (n of niveaux; track n) { <option [value]="n">{{ n }}</option> }
    </select> <select class="btn btn--ghost" [value]="filterStatut()" (change)="filterStatut.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Tous statuts</option> <option value="Actif">Actif</option><option value="Redoublant">Redoublant</option> <option value="Transféré">Transféré</option><option value="Exclu">Exclu</option> </select> </div> <div class="table-wrap"> <table class="table"> <thead><tr> <th>Matricule</th><th>Nom & Prénom</th><th>Classe</th><th>Niveau</th> <th>Moy. Gén.</th><th>Parent / Contact</th><th>Statut</th><th></th> </tr></thead> <tbody> @for (e of filtered(); track e.id) {
          <tr style="cursor:pointer;" (click)="selected.set(e)"> <td><span class="mono">{{ e.matricule }}</span></td> <td><span class="fw-bold">{{ e.nom }}</span> {{ e.prenom }}</td> <td>{{ e.classe }}</td> <td><span class="badge badge--blue">{{ e.niveau }}</span></td> <td><span class="note" [class]="noteClass(e.moyenneGen)">{{ e.moyenneGen }}/20</span></td> <td><div class="fw-med">{{ e.parentNom }}</div><div class="text-muted text-sm">{{ e.parentTel }}</div></td> <td><span class="badge" [class]="statutCls(e.statut)">{{ e.statut }}</span></td> <td><button class="btn btn--ghost" style="padding:4px 10px;font-size:11px;" (click)="$event.stopPropagation();selected.set(e)">Détails</button></td> </tr> }
      </tbody> </table> </div> @if (selected()) {
    <div class="modal-overlay" (click)="selected.set(null)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Fiche — {{ selected()!.nom }} {{ selected()!.prenom }}</span> <button class="modal__close" (click)="selected.set(null)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Matricule</label><input class="field__input" [value]="selected()!.matricule" readonly/></div> <div class="field"><label class="field__label">Classe</label><input class="field__input" [value]="selected()!.classe" readonly/></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Nom</label><input class="field__input" [value]="selected()!.nom" readonly/></div> <div class="field"><label class="field__label">Prénom</label><input class="field__input" [value]="selected()!.prenom" readonly/></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Date de naissance</label><input class="field__input" [value]="selected()!.dateNaissance" readonly/></div> <div class="field"><label class="field__label">Moyenne générale</label> <div style="margin-top:4px;"><span class="note" [class]="noteClass(selected()!.moyenneGen)">{{ selected()!.moyenneGen }}/20</span></div> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Nom du parent</label><input class="field__input" [value]="selected()!.parentNom" readonly/></div> <div class="field"><label class="field__label">Téléphone parent</label><input class="field__input" [value]="selected()!.parentTel" readonly/></div> </div> <div class="field"><label class="field__label">Statut</label> <div style="margin-top:4px;"><span class="badge" [class]="statutCls(selected()!.statut)">{{ selected()!.statut }}</span></div> </div> </div> <div class="modal__foot"><button class="btn btn--ghost" (click)="selected.set(null)">Fermer</button></div> </div> </div> }

  @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Inscrire un nouvel élève</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Matricule</label> <input class="field__input" [value]="form.matricule" readonly/></div> <div class="field"><label class="field__label">Nom</label> <input class="field__input" [value]="form.nom" (input)="form.nom=$any($event.target).value" placeholder="Nom de famille"/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Prénom</label> <input class="field__input" [value]="form.prenom" (input)="form.prenom=$any($event.target).value" placeholder="Prénom"/> </div> <div class="field"><label class="field__label">Date de naissance</label> <input class="field__input" type="date" [value]="form.dateNaissance" (input)="form.dateNaissance=$any($event.target).value"/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Classe</label> <select class="field__select" [value]="form.classe" (change)="form.classe=$any($event.target).value"> @for (c of classes; track c) { <option [value]="c">{{ c }}</option> }
              </select> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Nom du parent</label> <input class="field__input" [value]="form.parentNom" (input)="form.parentNom=$any($event.target).value" placeholder="Nom complet"/> </div> <div class="field"><label class="field__label">Téléphone parent</label> <input class="field__input" [value]="form.parentTel" (input)="form.parentTel=$any($event.target).value" placeholder="+225 07..."/> </div> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addEleve()">Inscrire</button> </div> </div> </div> }
</div> `,
})
export class ElevesComponent {
  search        = signal('');
  filterNiveau  = signal('');
  filterStatut  = signal('');
  showModal     = signal(false);
  selected      = signal<Eleve | null>(null);

  niveaux  = ['Primaire', 'Collège', 'Lycée'];
  classes  = ['CP','CE1','CE2','CM1','CM2','6ème','5ème','4ème','3ème','2nde','1ère','Terminale'];
  form     = { matricule:'', nom:'', prenom:'', dateNaissance:'', classe:'CP', parentNom:'', parentTel:'' };

  eleves = signal<Eleve[]>([
    { id:1,  matricule:'EDU-2024-001', nom:'Kouamé',    prenom:'Ange',     dateNaissance:'2015-03-12', classe:'CM1',  niveau:'Primaire', parentNom:'Kouamé Pierre',     parentTel:'+225 07 11 22 33', moyenneGen:17.5, statut:'Actif' },
    { id:2,  matricule:'EDU-2024-002', nom:'Yao',       prenom:'Bertrand', dateNaissance:'2014-07-20', classe:'CM2',  niveau:'Primaire', parentNom:'Yao Alphonse',      parentTel:'+225 05 44 55 66', moyenneGen:13.2, statut:'Actif' },
    { id:3,  matricule:'EDU-2024-003', nom:'Bamba',     prenom:'Cheick',   dateNaissance:'2013-11-05', classe:'6ème', niveau:'Collège',  parentNom:'Bamba Mamadou',     parentTel:'+225 01 77 88 99', moyenneGen:10.8, statut:'Actif' },
    { id:4,  matricule:'EDU-2024-004', nom:'Traoré',    prenom:'Drissa',   dateNaissance:'2013-09-18', classe:'6ème', niveau:'Collège',  parentNom:'Traoré Ibrahim',    parentTel:'+225 07 22 33 44', moyenneGen:7.4,  statut:'Redoublant' },
    { id:5,  matricule:'EDU-2024-005', nom:'N\'Goran',  prenom:'Estelle',  dateNaissance:'2012-04-30', classe:'5ème', niveau:'Collège',  parentNom:'N\'Goran Jacques',  parentTel:'+225 05 55 66 77', moyenneGen:19.1, statut:'Actif' },
    { id:6,  matricule:'EDU-2024-006', nom:'Diallo',    prenom:'Fatou',    dateNaissance:'2016-01-15', classe:'CE2',  niveau:'Primaire', parentNom:'Diallo Seydou',     parentTel:'+225 01 88 99 00', moyenneGen:15.0, statut:'Actif' },
    { id:7,  matricule:'EDU-2024-007', nom:'Coulibaly', prenom:'Gnénéba',  dateNaissance:'2011-08-22', classe:'4ème', niveau:'Collège',  parentNom:'Coulibaly Lamine',  parentTel:'+225 07 33 44 55', moyenneGen:12.7, statut:'Actif' },
    { id:8,  matricule:'EDU-2024-008', nom:'Koné',      prenom:'Hamidou',  dateNaissance:'2010-06-10', classe:'3ème', niveau:'Collège',  parentNom:'Koné Ousmane',      parentTel:'+225 05 66 77 88', moyenneGen:9.5,  statut:'Actif' },
    { id:9,  matricule:'EDU-2024-009', nom:'Sanogo',    prenom:'Ines',     dateNaissance:'2015-12-03', classe:'CP',   niveau:'Primaire', parentNom:'Sanogo Adama',      parentTel:'+225 01 99 00 11', moyenneGen:16.3, statut:'Actif' },
    { id:10, matricule:'EDU-2024-010', nom:'Diabaté',   prenom:'Justin',   dateNaissance:'2014-05-28', classe:'CE1',  niveau:'Primaire', parentNom:'Diabaté Souleyman', parentTel:'+225 07 44 55 66', moyenneGen:11.5, statut:'Actif' },
    { id:11, matricule:'EDU-2024-011', nom:'Ouédraogo', prenom:'Kadidia',  dateNaissance:'2009-03-17', classe:'2nde', niveau:'Lycée',    parentNom:'Ouédraogo René',    parentTel:'+225 05 77 88 99', moyenneGen:14.8, statut:'Actif' },
    { id:12, matricule:'EDU-2024-012', nom:'Sawadogo',  prenom:'Léonce',   dateNaissance:'2008-10-04', classe:'1ère', niveau:'Lycée',    parentNom:'Sawadogo André',    parentTel:'+225 01 00 11 22', moyenneGen:6.0,  statut:'Redoublant' },
  ]);

  filtered = computed(() => {
    const q  = this.search().toLowerCase();
    const nv = this.filterNiveau();
    const st = this.filterStatut();
    return this.eleves().filter(e => (!q  || e.nom.toLowerCase().includes(q) || e.prenom.toLowerCase().includes(q) || e.matricule.toLowerCase().includes(q) || e.classe.toLowerCase().includes(q)) &&
      (!nv || e.niveau === nv) &&
      (!st || e.statut === st)
    );
  });

  noteClass(n: number) {
    if (n >= 16) return 'note note--A';
    if (n >= 12) return 'note note--B';
    if (n >= 10) return 'note note--C';
    if (n >= 7)  return 'note note--D';
    return 'note note--F';
  }

  statutCls(s: StatutEleve) {
    const m: Record<StatutEleve, string> = { Actif:'badge badge--green', Redoublant:'badge badge--yellow', Transféré:'badge badge--blue', Exclu:'badge badge--red' };
    return m[s];
  }

  openAddForm() {
    this.form.matricule = this.nextMatricule();
    this.showModal.set(true);
  }

  private nextMatricule(): string {
    const nextId = this.eleves().length ? Math.max(...this.eleves().map(e => e.id)) + 1 : 1;
    return `EDU-2024-${String(nextId).padStart(3,'0')}`;
  }

  addEleve() {
    const f = this.form;
    if (!f.nom || !f.prenom) return;
    const ids = this.eleves().map(e => e.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    const niveauMap: Record<string, string> = { CP:'Primaire', CE1:'Primaire', CE2:'Primaire', CM1:'Primaire', CM2:'Primaire', '6ème':'Collège', '5ème':'Collège', '4ème':'Collège', '3ème':'Collège', '2nde':'Lycée', '1ère':'Lycée', Terminale:'Lycée' };
    this.eleves.update(list => [...list, {
      id, matricule: f.matricule || `EDU-2024-${String(id).padStart(3,'0')}`,
      nom: f.nom, prenom: f.prenom, dateNaissance: f.dateNaissance,
      classe: f.classe, niveau: niveauMap[f.classe] ?? 'Primaire',
      parentNom: f.parentNom, parentTel: f.parentTel,
      moyenneGen: 0, statut: 'Actif'}]);
    this.form = { matricule:'', nom:'', prenom:'', dateNaissance:'', classe:'CP', parentNom:'', parentTel:'' };
    this.showModal.set(false);
  }
}
