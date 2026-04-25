import { Component, signal, computed } from '@angular/core';

interface Cours {
  id: number; matiere: string; enseignant: string;
  classe: string; salle: string; jour: string;
  heureDebut: string; heureFin: string; couleur: string;
}

@Component({
  selector: 'app-emploi-du-temps',
  imports: [],
  styleUrl: '../../shared-page.scss',
  template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Emploi du temps</h1><p class="page__sub">Semaine du 14 au 18 avril 2025</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="showModal.set(true)">+ Ajouter un cours</button> </div> </div> <div class="filter-bar"> <select class="btn btn--ghost" [value]="filterClasse()" (change)="filterClasse.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Toutes les classes</option> @for (c of classes; track c) { <option [value]="c">{{ c }}</option> }
    </select> <select class="btn btn--ghost" [value]="filterEnseignant()" (change)="filterEnseignant.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Tous les enseignants</option> @for (e of enseignants; track e) { <option [value]="e">{{ e }}</option> }
    </select> </div> <div style="overflow-x:auto;"> <div style="display:grid;grid-template-columns:80px repeat(5,1fr);gap:2px;min-width:700px;"> <div></div> @for (j of jours; track j) {
        <div style="background:#1a3a5c;color:#fff;padding:10px;text-align:center;border-radius:8px;font-size:13px;font-weight:700;">{{ j }}</div> }
      @for (h of heures; track h) {
        <div style="background:#f8f9fb;padding:8px 6px;text-align:center;border-radius:6px;font-size:11px;font-weight:700;color:#8a9ab0;align-self:center;">{{ h }}</div> @for (j of jours; track j) {
          <div style="background:#fff;border:1px solid #e3e8f0;border-radius:8px;min-height:60px;padding:4px;position:relative;"> @for (c of getSlot(j, h); track c.id) {
              <div style="border-radius:6px;padding:5px 7px;margin:2px 0;font-size:11px;cursor:pointer;"[style.background]="c.couleur+'22'" [style.border-left]="'3px solid '+c.couleur"(click)="selected.set(c)"> <div style="font-weight:700;" [style.color]="c.couleur">{{ c.matiere }}</div> <div style="color:#555;">{{ c.classe }}</div> <div style="color:#aaa;">{{ c.enseignant }}</div> </div> }
          </div> }
      }
    </div> </div> @if (selected()) {
    <div class="modal-overlay" (click)="selected.set(null)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">{{ selected()!.matiere }} — {{ selected()!.classe }}</span> <button class="modal__close" (click)="selected.set(null)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Jour</label><input class="field__input" [value]="selected()!.jour" readonly/></div> <div class="field"><label class="field__label">Horaire</label><input class="field__input" [value]="selected()!.heureDebut+' – '+selected()!.heureFin" readonly/></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Enseignant</label><input class="field__input" [value]="selected()!.enseignant" readonly/></div> <div class="field"><label class="field__label">Salle</label><input class="field__input" [value]="selected()!.salle" readonly/></div> </div> </div> <div class="modal__foot"> <button class="btn btn--danger" (click)="deleteCours(selected()!.id);selected.set(null)">Supprimer</button> <button class="btn btn--ghost" (click)="selected.set(null)">Fermer</button> </div> </div> </div> }

  @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Ajouter un cours</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Matière</label> <input class="field__input" [value]="form.matiere" (input)="form.matiere=$any($event.target).value" placeholder="Mathématiques"/> </div> <div class="field"><label class="field__label">Enseignant</label> <select class="field__select" [value]="form.enseignant" (change)="form.enseignant=$any($event.target).value"> @for (e of enseignants; track e) { <option [value]="e">{{ e }}</option> }
              </select> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Classe</label> <select class="field__select" [value]="form.classe" (change)="form.classe=$any($event.target).value"> @for (c of classes; track c) { <option [value]="c">{{ c }}</option> }
              </select> </div> <div class="field"><label class="field__label">Salle</label> <input class="field__input" [value]="form.salle" (input)="form.salle=$any($event.target).value" placeholder="S-01"/> </div> </div> <div class="fields-row--3"> <div class="field"><label class="field__label">Jour</label> <select class="field__select" [value]="form.jour" (change)="form.jour=$any($event.target).value"> @for (j of jours; track j) { <option [value]="j">{{ j }}</option> }
              </select> </div> <div class="field"><label class="field__label">Début</label> <select class="field__select" [value]="form.heureDebut" (change)="form.heureDebut=$any($event.target).value"> @for (h of heures; track h) { <option [value]="h">{{ h }}</option> }
              </select> </div> <div class="field"><label class="field__label">Fin</label> <select class="field__select" [value]="form.heureFin" (change)="form.heureFin=$any($event.target).value"> @for (h of heures; track h) { <option [value]="h">{{ h }}</option> }
              </select> </div> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addCours()">Ajouter</button> </div> </div> </div> }
</div> `,
})
export class EmploiDuTempsComponent {
  filterClasse     = signal('');
  filterEnseignant = signal('');
  showModal        = signal(false);
  selected         = signal<Cours | null>(null);

  jours    = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi'];
  heures   = ['07h30','08h30','09h30','10h30','11h30','13h30','14h30','15h30','16h30'];
  classes  = ['CP A','CE1 A','CE2 A','CM1 A','CM2 A','6ème A','6ème B','5ème A','4ème A','3ème A','2nde A','1ère A','Tle A'];
  enseignants = ['M. Martin','Mme Kouassi','M. Diallo','Mme Bamba','M. N\'Goran','Mme Traoré','M. Coulibaly'];
  couleurs = ['#3498db','#27ae60','#e67e22','#9b59b6','#e74c3c','#1abc9c','#f39c12'];

  form = { matiere:'', enseignant:'M. Martin', classe:'6ème A', salle:'S-06', jour:'Lundi', heureDebut:'07h30', heureFin:'08h30' };

  cours = signal<Cours[]>([
    { id:1,  matiere:'Mathématiques', enseignant:'M. Martin',    classe:'6ème A', salle:'S-06', jour:'Lundi',    heureDebut:'07h30', heureFin:'08h30', couleur:'#3498db' },
    { id:2,  matiere:'Français',      enseignant:'Mme Kouassi',  classe:'CM1 A',  salle:'S-04', jour:'Lundi',    heureDebut:'07h30', heureFin:'08h30', couleur:'#27ae60' },
    { id:3,  matiere:'Histoire-Géo',  enseignant:'M. Diallo',    classe:'5ème A', salle:'S-08', jour:'Lundi',    heureDebut:'08h30', heureFin:'09h30', couleur:'#e67e22' },
    { id:4,  matiere:'Anglais',       enseignant:'M. N\'Goran',  classe:'4ème A', salle:'S-09', jour:'Lundi',    heureDebut:'09h30', heureFin:'10h30', couleur:'#9b59b6' },
    { id:5,  matiere:'Sciences',      enseignant:'Mme Bamba',    classe:'3ème A', salle:'S-10', jour:'Mardi',    heureDebut:'07h30', heureFin:'08h30', couleur:'#1abc9c' },
    { id:6,  matiere:'Mathématiques', enseignant:'M. Martin',    classe:'5ème A', salle:'S-08', jour:'Mardi',    heureDebut:'08h30', heureFin:'09h30', couleur:'#3498db' },
    { id:7,  matiere:'EPS',           enseignant:'Mme Traoré',   classe:'CM2 A',  salle:'Terrain', jour:'Mercredi', heureDebut:'07h30', heureFin:'09h30', couleur:'#e74c3c' },
    { id:8,  matiere:'Français',      enseignant:'Mme Kouassi',  classe:'6ème A', salle:'S-06', jour:'Mercredi', heureDebut:'09h30', heureFin:'10h30', couleur:'#27ae60' },
    { id:9,  matiere:'Informatique',  enseignant:'M. Coulibaly', classe:'2nde A', salle:'Labo',    jour:'Jeudi',    heureDebut:'13h30', heureFin:'15h30', couleur:'#f39c12' },
    { id:10, matiere:'Anglais',       enseignant:'M. N\'Goran',  classe:'2nde A', salle:'S-11', jour:'Vendredi', heureDebut:'07h30', heureFin:'08h30', couleur:'#9b59b6' },
  ]);

  filtered = computed(() => {
    const fc = this.filterClasse();
    const fe = this.filterEnseignant();
    return this.cours().filter(c => (!fc || c.classe === fc) &&
      (!fe || c.enseignant === fe)
    );
  });

  getSlot(jour: string, heure: string): Cours[] {
    return this.filtered().filter(c => c.jour === jour && c.heureDebut === heure);
  }

  deleteCours(id: number) { this.cours.update(list => list.filter(c => c.id !== id)); }

  addCours() {
    const f = this.form;
    if (!f.matiere) return;
    const ids = this.cours().map(c => c.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    const couleur = this.couleurs[id % this.couleurs.length];
    this.cours.update(list => [...list, { id, ...f, couleur }]);
    this.form = { matiere:'', enseignant:'M. Martin', classe:'6ème A', salle:'S-06', jour:'Lundi', heureDebut:'07h30', heureFin:'08h30' };
    this.showModal.set(false);
  }
}
