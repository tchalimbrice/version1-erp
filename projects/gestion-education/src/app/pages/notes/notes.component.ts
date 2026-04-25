import { Component, signal, computed } from '@angular/core';

interface Note {
  id: number; eleveNom: string; classe: string;
  matiere: string; type: string; note: number; coeff: number;
  date: string; enseignant: string;
}

@Component({
  selector: 'app-notes',
  imports: [],
  styleUrl: '../../shared-page.scss',
  template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Notes & Évaluations</h1><p class="page__sub">{{ filtered().length }} note(s) enregistrée(s)</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="showModal.set(true)">+ Saisir une note</button> </div> </div> <div class="filter-bar"> <input class="search-input" placeholder="Rechercher (élève, matière…)" [value]="search()" (input)="search.set($any($event.target).value)"/> <select class="btn btn--ghost" [value]="filterClasse()" (change)="filterClasse.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Toutes classes</option> @for (c of classes; track c) { <option [value]="c">{{ c }}</option> }
    </select> <select class="btn btn--ghost" [value]="filterMatiere()" (change)="filterMatiere.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Toutes matières</option> @for (m of matieres; track m) { <option [value]="m">{{ m }}</option> }
    </select> </div> <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;"> <div class="card"> <div class="card__head"><span class="card__title">Statistiques globales</span></div> <div style="display:flex;gap:20px;flex-wrap:wrap;"> @for (s of stats(); track s.label) {
          <div style="text-align:center;"> <div style="font-size:22px;font-weight:900;color:#1a3a5c;">{{ s.val }}</div> <div style="font-size:11px;color:#8a9ab0;font-weight:600;text-transform:uppercase;">{{ s.label }}</div> </div> }
      </div> </div> <div class="card"> <div class="card__head"><span class="card__title">Distribution des notes</span></div> <div style="display:flex;align-items:flex-end;gap:8px;height:70px;"> @for (b of distribution(); track b.lbl) {
          <div style="display:flex;flex-direction:column;align-items:center;flex:1;gap:3px;"> <div style="font-size:10px;font-weight:700;" [style.color]="b.color">{{ b.count }}</div> <div style="width:100%;border-radius:4px 4px 0 0;" [style.height.px]="b.h" [style.background]="b.color"></div> <div style="font-size:10px;color:#aaa;font-weight:600;">{{ b.lbl }}</div> </div> }
      </div> </div> </div> <div class="table-wrap"> <table class="table"> <thead><tr><th>Élève</th><th>Classe</th><th>Matière</th><th>Type</th><th>Note</th><th>Coeff.</th><th>Date</th><th>Enseignant</th></tr></thead> <tbody> @for (n of filtered(); track n.id) {
          <tr> <td class="fw-bold">{{ n.eleveNom }}</td> <td>{{ n.classe }}</td> <td>{{ n.matiere }}</td> <td><span class="badge badge--gray">{{ n.type }}</span></td> <td><span class="note" [class]="noteClass(n.note)">{{ n.note }}/20</span></td> <td class="text-muted">×{{ n.coeff }}</td> <td class="text-muted text-sm">{{ n.date }}</td> <td class="text-muted">{{ n.enseignant }}</td> </tr> }
      </tbody> </table> </div> @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Saisir une note</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Nom de l'élève</label> <input class="field__input" [value]="form.eleveNom" (input)="form.eleveNom=$any($event.target).value" placeholder="Nom Prénom"/> </div> <div class="field"><label class="field__label">Classe</label> <select class="field__select" [value]="form.classe" (change)="form.classe=$any($event.target).value"> @for (c of classes; track c) { <option [value]="c">{{ c }}</option> }
              </select> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Matière</label> <select class="field__select" [value]="form.matiere" (change)="form.matiere=$any($event.target).value"> @for (m of matieres; track m) { <option [value]="m">{{ m }}</option> }
              </select> </div> <div class="field"><label class="field__label">Type</label> <select class="field__select" [value]="form.type" (change)="form.type=$any($event.target).value"> <option value="Devoir">Devoir</option><option value="Interro">Interro</option> <option value="Examen">Examen</option><option value="TP">TP</option> </select> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Note (/20)</label> <input class="field__input" type="number" min="0" max="20" step="0.5" [value]="form.note" (input)="form.note=+$any($event.target).value" placeholder="14.5"/> </div> <div class="field"><label class="field__label">Coefficient</label> <input class="field__input" type="number" min="1" max="5" [value]="form.coeff" (input)="form.coeff=+$any($event.target).value" placeholder="2"/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Date</label> <input class="field__input" type="date" [value]="form.date" (input)="form.date=$any($event.target).value"/> </div> <div class="field"><label class="field__label">Enseignant</label> <input class="field__input" [value]="form.enseignant" (input)="form.enseignant=$any($event.target).value" placeholder="M. Martin"/> </div> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addNote()">Enregistrer</button> </div> </div> </div> }
</div> `,
})
export class NotesComponent {
  search        = signal('');
  filterClasse  = signal('');
  filterMatiere = signal('');
  showModal     = signal(false);

  classes  = ['CP A','CE1 A','CE2 A','CM1 A','CM2 A','6ème A','6ème B','5ème A','4ème A','3ème A','2nde A','1ère A','Tle A'];
  matieres = ['Mathématiques','Français','Histoire-Géo','Sciences','Anglais','EPS','Informatique','Arts plastiques','Physique','SVT'];

  form = { eleveNom:'', classe:'6ème A', matiere:'Mathématiques', type:'Devoir', note: 14, coeff: 2, date:'2025-04-15', enseignant:'' };

  notes = signal<Note[]>([
    { id:1,  eleveNom:'Kouamé Ange',    classe:'CM1 A',  matiere:'Mathématiques', type:'Devoir',  note:17,   coeff:2, date:'2025-04-10', enseignant:'M. Martin' },
    { id:2,  eleveNom:'Kouamé Ange',    classe:'CM1 A',  matiere:'Français',      type:'Interro', note:15,   coeff:2, date:'2025-04-08', enseignant:'Mme Kouassi' },
    { id:3,  eleveNom:'Yao Bertrand',   classe:'CM2 A',  matiere:'Mathématiques', type:'Devoir',  note:13.5, coeff:2, date:'2025-04-10', enseignant:'M. Martin' },
    { id:4,  eleveNom:'Bamba Cheick',   classe:'6ème A', matiere:'Histoire-Géo',  type:'Examen',  note:11,   coeff:3, date:'2025-04-05', enseignant:'M. Diallo' },
    { id:5,  eleveNom:'Traoré Drissa',  classe:'6ème A', matiere:'Mathématiques', type:'Devoir',  note:7,    coeff:2, date:'2025-04-10', enseignant:'M. Martin' },
    { id:6,  eleveNom:'N\'Goran Estelle',classe:'5ème A',matiere:'Anglais',       type:'Interro', note:19,   coeff:2, date:'2025-04-09', enseignant:'M. N\'Goran' },
    { id:7,  eleveNom:'Diallo Fatou',   classe:'CE2 A',  matiere:'Français',      type:'Devoir',  note:15,   coeff:2, date:'2025-04-11', enseignant:'Mme Kouassi' },
    { id:8,  eleveNom:'Coulibaly Gnénéba',classe:'4ème A',matiere:'Sciences',    type:'TP',      note:13,   coeff:2, date:'2025-04-07', enseignant:'Mme Bamba' },
    { id:9,  eleveNom:'Koné Hamidou',   classe:'3ème A', matiere:'Mathématiques', type:'Examen',  note:9,    coeff:3, date:'2025-04-05', enseignant:'M. Martin' },
    { id:10, eleveNom:'Sanogo Ines',    classe:'CP A',   matiere:'Français',      type:'Devoir',  note:16,   coeff:2, date:'2025-04-12', enseignant:'Mme Kouassi' },
    { id:11, eleveNom:'Diabaté Justin', classe:'CE1 A',  matiere:'Mathématiques', type:'Interro', note:11.5, coeff:2, date:'2025-04-09', enseignant:'M. Martin' },
    { id:12, eleveNom:'Ouédraogo Kadidia',classe:'2nde A',matiere:'Informatique',type:'TP',      note:14,   coeff:2, date:'2025-04-11', enseignant:'M. Coulibaly' },
  ]);

  filtered = computed(() => {
    const q  = this.search().toLowerCase();
    const fc = this.filterClasse();
    const fm = this.filterMatiere();
    return this.notes().filter(n => (!q  || n.eleveNom.toLowerCase().includes(q) || n.matiere.toLowerCase().includes(q)) &&
      (!fc || n.classe === fc) &&
      (!fm || n.matiere === fm)
    );
  });

  stats = computed(() => {
    const all = this.filtered();
    if (!all.length) return [];
    const moy = all.reduce((s, n) => s + n.note, 0) / all.length;
    const max = Math.max(...all.map(n => n.note));
    const min = Math.min(...all.map(n => n.note));
    const reussite = all.filter(n => n.note >= 10).length;
    return [
      { label: 'Moyenne',   val: moy.toFixed(1) },
      { label: 'Max',       val: max.toFixed(1) },
      { label: 'Min',       val: min.toFixed(1) },
      { label: '≥10 (réussite)', val: `${Math.round(reussite/all.length*100)}%` },
    ];
  });

  distribution = computed(() => {
    const all = this.notes();
    const buckets = [
      { lbl:'0-4',   min:0,  max:4,  count:0, color:'#e74c3c', h:0 },
      { lbl:'5-9',   min:5,  max:9,  count:0, color:'#e67e22', h:0 },
      { lbl:'10-13', min:10, max:13, count:0, color:'#f39c12', h:0 },
      { lbl:'14-16', min:14, max:16, count:0, color:'#27ae60', h:0 },
      { lbl:'17-20', min:17, max:20, count:0, color:'#1a5276', h:0 },
    ];
    all.forEach(n => { const b = buckets.find(b => n.note >= b.min && n.note <= b.max); if (b) b.count++; });
    const maxCount = Math.max(...buckets.map(b => b.count), 1);
    buckets.forEach(b => b.h = Math.max(4, Math.round(b.count / maxCount * 55)));
    return buckets;
  });

  noteClass(n: number) {
    if (n >= 16) return 'note note--A';
    if (n >= 12) return 'note note--B';
    if (n >= 10) return 'note note--C';
    if (n >= 7)  return 'note note--D';
    return 'note note--F';
  }

  addNote() {
    const f = this.form;
    if (!f.eleveNom) return;
    const ids = this.notes().map(n => n.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    this.notes.update(list => [...list, { id, ...f }]);
    this.form = { eleveNom:'', classe:'6ème A', matiere:'Mathématiques', type:'Devoir', note: 14, coeff: 2, date:'2025-04-15', enseignant:'' };
    this.showModal.set(false);
  }
}
