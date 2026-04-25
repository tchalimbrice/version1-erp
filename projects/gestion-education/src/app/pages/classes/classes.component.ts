import { Component, signal, computed } from '@angular/core';

interface Classe {
  id: number; nom: string; niveau: string;
  enseignantPrincipal: string; effectif: number; capacite: number;
  salle: string; moyenneClasse: number;
}

@Component({
  selector: 'app-classes',
  imports: [],
  styleUrl: '../../shared-page.scss',
  template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Classes</h1><p class="page__sub">{{ classes().length }} classe(s) — {{ totalEleves() }} élèves au total</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="showModal.set(true)">+ Nouvelle classe</button> </div> </div> <div class="tabs"> @for (t of tabs; track t.val) {
      <button class="tab" [class.active]="activeTab()===t.val" (click)="activeTab.set(t.val)">{{ t.lbl }}</button> }
  </div> <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;"> @for (c of filtered(); track c.id) {
      <div class="card" style="cursor:pointer;margin-bottom:0;" (click)="selected.set(c)"> <div class="card__head"> <span class="card__title">{{ c.nom }}</span> <span class="badge" [class]="niveauCls(c.niveau)">{{ c.niveau }}</span> </div> <div style="display:flex;flex-direction:column;gap:8px;font-size:13px;"> <div style="display:flex;justify-content:space-between;"> <span class="text-muted">Effectif</span> <span class="fw-bold">{{ c.effectif }} / {{ c.capacite }} élèves</span> </div> <div class="progress-bar"> <div class="progress-bar__fill" [style.width]="(c.effectif/c.capacite*100)+'%'"[style.background]="c.effectif/c.capacite > .9 ? '#e74c3c' : c.effectif/c.capacite > .75 ? '#f39c12' : '#27ae60'"></div> </div> <div style="display:flex;justify-content:space-between;"> <span class="text-muted">Prof principal</span> <span class="fw-med">{{ c.enseignantPrincipal }}</span> </div> <div style="display:flex;justify-content:space-between;"> <span class="text-muted">Salle</span> <span class="mono">{{ c.salle }}</span> </div> <div style="display:flex;justify-content:space-between;"> <span class="text-muted">Moyenne classe</span> <span class="note" [class]="noteClass(c.moyenneClasse)">{{ c.moyenneClasse }}/20</span> </div> </div> </div> }
  </div> @if (selected()) {
    <div class="modal-overlay" (click)="selected.set(null)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Classe {{ selected()!.nom }}</span> <button class="modal__close" (click)="selected.set(null)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Nom de la classe</label><input class="field__input" [value]="selected()!.nom" readonly/></div> <div class="field"><label class="field__label">Niveau</label><input class="field__input" [value]="selected()!.niveau" readonly/></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Enseignant principal</label><input class="field__input" [value]="selected()!.enseignantPrincipal" readonly/></div> <div class="field"><label class="field__label">Salle</label><input class="field__input" [value]="selected()!.salle" readonly/></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Effectif actuel</label><input class="field__input" [value]="selected()!.effectif" readonly/></div> <div class="field"><label class="field__label">Capacité max</label><input class="field__input" [value]="selected()!.capacite" readonly/></div> </div> <div class="field"><label class="field__label">Moyenne de classe</label> <div style="margin-top:4px;"><span class="note" [class]="noteClass(selected()!.moyenneClasse)">{{ selected()!.moyenneClasse }}/20</span></div> </div> </div> <div class="modal__foot"><button class="btn btn--ghost" (click)="selected.set(null)">Fermer</button></div> </div> </div> }

  @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Nouvelle classe</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Nom (ex: 6ème A)</label> <input class="field__input" [value]="form.nom" (input)="form.nom=$any($event.target).value" placeholder="6ème A"/> </div> <div class="field"><label class="field__label">Niveau</label> <select class="field__select" [value]="form.niveau" (change)="form.niveau=$any($event.target).value"> <option value="Primaire">Primaire</option> <option value="Collège">Collège</option> <option value="Lycée">Lycée</option> </select> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Enseignant principal</label> <input class="field__input" [value]="form.enseignantPrincipal" (input)="form.enseignantPrincipal=$any($event.target).value" placeholder="Nom de l'enseignant"/> </div> <div class="field"><label class="field__label">Salle</label> <input class="field__input" [value]="form.salle" (input)="form.salle=$any($event.target).value" placeholder="Salle A1"/> </div> </div> <div class="field"><label class="field__label">Capacité maximale</label> <input class="field__input" type="number" [value]="form.capacite" (input)="form.capacite=+$any($event.target).value" placeholder="40"/> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addClass()">Créer la classe</button> </div> </div> </div> }
</div> `,
})
export class ClassesComponent {
  activeTab  = signal('all');
  showModal  = signal(false);
  selected   = signal<Classe | null>(null);

  tabs = [
    { val: 'all',      lbl: 'Toutes' },
    { val: 'Primaire', lbl: 'Primaire' },
    { val: 'Collège',  lbl: 'Collège' },
    { val: 'Lycée',    lbl: 'Lycée' },
  ];

  form = { nom:'', niveau:'Primaire', enseignantPrincipal:'', salle:'', capacite: 40 };

  classes = signal<Classe[]>([
    { id:1,  nom:'CP A',    niveau:'Primaire', enseignantPrincipal:'Mme Kouassi',   effectif:28, capacite:35, salle:'S-01', moyenneClasse:14.2 },
    { id:2,  nom:'CE1 A',   niveau:'Primaire', enseignantPrincipal:'M. Diallo',     effectif:32, capacite:35, salle:'S-02', moyenneClasse:13.8 },
    { id:3,  nom:'CE2 A',   niveau:'Primaire', enseignantPrincipal:'Mme Traoré',    effectif:30, capacite:35, salle:'S-03', moyenneClasse:12.5 },
    { id:4,  nom:'CM1 A',   niveau:'Primaire', enseignantPrincipal:'M. Bamba',      effectif:34, capacite:40, salle:'S-04', moyenneClasse:13.1 },
    { id:5,  nom:'CM2 A',   niveau:'Primaire', enseignantPrincipal:'Mme Sanogo',    effectif:29, capacite:40, salle:'S-05', moyenneClasse:14.7 },
    { id:6,  nom:'6ème A',  niveau:'Collège',  enseignantPrincipal:'M. Coulibaly',  effectif:38, capacite:45, salle:'S-06', moyenneClasse:11.9 },
    { id:7,  nom:'6ème B',  niveau:'Collège',  enseignantPrincipal:'Mme Diabaté',   effectif:36, capacite:45, salle:'S-07', moyenneClasse:12.4 },
    { id:8,  nom:'5ème A',  niveau:'Collège',  enseignantPrincipal:'M. Yao',        effectif:40, capacite:45, salle:'S-08', moyenneClasse:13.6 },
    { id:9,  nom:'4ème A',  niveau:'Collège',  enseignantPrincipal:'Mme N\'Goran',  effectif:35, capacite:45, salle:'S-09', moyenneClasse:12.1 },
    { id:10, nom:'3ème A',  niveau:'Collège',  enseignantPrincipal:'M. Koné',       effectif:33, capacite:45, salle:'S-10', moyenneClasse:13.0 },
    { id:11, nom:'2nde A',  niveau:'Lycée',    enseignantPrincipal:'Mme Ouédraogo', effectif:42, capacite:50, salle:'S-11', moyenneClasse:11.5 },
    { id:12, nom:'1ère A',  niveau:'Lycée',    enseignantPrincipal:'M. Sawadogo',   effectif:38, capacite:50, salle:'S-12', moyenneClasse:12.8 },
    { id:13, nom:'Tle A',   niveau:'Lycée',    enseignantPrincipal:'Mme Koffi',     effectif:35, capacite:50, salle:'S-13', moyenneClasse:13.4 },
    { id:14, nom:'Tle B',   niveau:'Lycée',    enseignantPrincipal:'M. Fofana',     effectif:32, capacite:50, salle:'S-14', moyenneClasse:11.8 },
  ]);

  filtered = computed(() => {
    const t = this.activeTab();
    return t === 'all' ? this.classes() : this.classes().filter(c => c.niveau === t);
  });

  totalEleves = computed(() => this.classes().reduce((s, c) => s + c.effectif, 0));

  niveauCls(n: string) {
    const m: Record<string, string> = { Primaire:'badge badge--green', Collège:'badge badge--blue', Lycée:'badge badge--purple' };
    return m[n] ?? 'badge badge--gray';
  }

  noteClass(n: number) {
    if (n >= 16) return 'note note--A';
    if (n >= 12) return 'note note--B';
    if (n >= 10) return 'note note--C';
    if (n >= 7)  return 'note note--D';
    return 'note note--F';
  }

  addClass() {
    const f = this.form;
    if (!f.nom) return;
    const ids = this.classes().map(c => c.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    this.classes.update(list => [...list, { id, nom: f.nom, niveau: f.niveau, enseignantPrincipal: f.enseignantPrincipal, effectif: 0, capacite: f.capacite, salle: f.salle, moyenneClasse: 0 }]);
    this.form = { nom:'', niveau:'Primaire', enseignantPrincipal:'', salle:'', capacite: 40 };
    this.showModal.set(false);
  }
}
