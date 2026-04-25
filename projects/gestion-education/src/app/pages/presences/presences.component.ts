import { Component, signal, computed } from '@angular/core';

type StatutPresence = 'Présent' | 'Absent' | 'Retard' | 'Excusé';

interface PresenceRecord {
  id: number; eleveNom: string; classe: string;
  date: string; statut: StatutPresence; motif: string;
}

@Component({
  selector: 'app-presences',
  imports: [],
  styleUrl: '../../shared-page.scss',
  template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Présences</h1><p class="page__sub">Suivi des absences et retards</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="showModal.set(true)">+ Signaler une absence</button> </div> </div> <div class="kpi-grid" style="grid-template-columns:repeat(4,1fr);"> @for (k of kpis(); track k.label) {
      <div class="kpi-card" [style.border-left-color]="k.color"> <div class="kpi-card__icon" [style.background]="k.color+'22'" [style.color]="k.color" [innerHTML]="k.icon"></div> <div class="kpi-card__body"> <div class="kpi-card__value">{{ k.value }}</div> <div class="kpi-card__label">{{ k.label }}</div> </div> </div> }
  </div> <div class="filter-bar"> <input class="search-input" placeholder="Rechercher (élève, classe…)" [value]="search()" (input)="search.set($any($event.target).value)"/> <input class="btn btn--ghost" type="date" [value]="filterDate()" (change)="filterDate.set($any($event.target).value)" style="cursor:pointer;padding:8px 12px;border:1.5px solid #e3e8f0;border-radius:9px;font-size:13px;"/> <select class="btn btn--ghost" [value]="filterStatut()" (change)="filterStatut.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Tous statuts</option> <option value="Absent">Absent</option><option value="Retard">Retard</option> <option value="Excusé">Excusé</option> </select> <select class="btn btn--ghost" [value]="filterClasse()" (change)="filterClasse.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Toutes classes</option> @for (c of classes; track c) { <option [value]="c">{{ c }}</option> }
    </select> </div> <div class="table-wrap"> <table class="table"> <thead><tr><th>Élève</th><th>Classe</th><th>Date</th><th>Statut</th><th>Motif</th><th></th></tr></thead> <tbody> @for (p of filtered(); track p.id) {
          <tr> <td class="fw-bold">{{ p.eleveNom }}</td> <td>{{ p.classe }}</td> <td class="text-muted text-sm">{{ p.date }}</td> <td><span class="badge" [class]="statutCls(p.statut)">{{ p.statut }}</span></td> <td class="text-muted">{{ p.motif || '—' }}</td> <td> <button class="btn btn--ghost" style="padding:3px 8px;font-size:11px;" (click)="excuse(p.id)">Excuser</button> </td> </tr> }
      </tbody> </table> </div> @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Signaler une absence / retard</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Nom de l'élève</label> <input class="field__input" [value]="form.eleveNom" (input)="form.eleveNom=$any($event.target).value" placeholder="Nom Prénom"/> </div> <div class="field"><label class="field__label">Classe</label> <select class="field__select" [value]="form.classe" (change)="form.classe=$any($event.target).value"> @for (c of classes; track c) { <option [value]="c">{{ c }}</option> }
              </select> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Date</label> <input class="field__input" type="date" [value]="form.date" (input)="form.date=$any($event.target).value"/> </div> <div class="field"><label class="field__label">Statut</label> <select class="field__select" [value]="form.statut" (change)="form.statut=$any($event.target).value"> <option value="Absent">Absent</option> <option value="Retard">Retard</option> <option value="Excusé">Excusé</option> </select> </div> </div> <div class="field"><label class="field__label">Motif (optionnel)</label> <input class="field__input" [value]="form.motif" (input)="form.motif=$any($event.target).value" placeholder="Maladie, voyage…"/> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addPresence()">Enregistrer</button> </div> </div> </div> }
</div> `,
})
export class PresencesComponent {
  search        = signal('');
  filterDate    = signal('');
  filterStatut  = signal('');
  filterClasse  = signal('');
  showModal     = signal(false);

  classes = ['CP A','CE1 A','CE2 A','CM1 A','CM2 A','6ème A','6ème B','5ème A','4ème A','3ème A','2nde A','1ère A','Tle A'];
  form    = { eleveNom:'', classe:'6ème A', date:'2025-04-20', statut:'Absent', motif:'' };

  presences = signal<PresenceRecord[]>([
    { id:1,  eleveNom:'Traoré Drissa',    classe:'6ème A', date:'2025-04-20', statut:'Absent',  motif:'Maladie' },
    { id:2,  eleveNom:'Bamba Cheick',     classe:'6ème A', date:'2025-04-20', statut:'Retard',  motif:'Transport' },
    { id:3,  eleveNom:'Koné Hamidou',     classe:'3ème A', date:'2025-04-19', statut:'Absent',  motif:'' },
    { id:4,  eleveNom:'Sawadogo Léonce',  classe:'1ère A', date:'2025-04-19', statut:'Absent',  motif:'Non justifiée' },
    { id:5,  eleveNom:'Coulibaly Gnénéba',classe:'4ème A', date:'2025-04-18', statut:'Retard',  motif:'' },
    { id:6,  eleveNom:'Yao Bertrand',     classe:'CM2 A',  date:'2025-04-18', statut:'Excusé',  motif:'Convocation médicale' },
    { id:7,  eleveNom:'Diallo Fatou',     classe:'CE2 A',  date:'2025-04-17', statut:'Absent',  motif:'' },
    { id:8,  eleveNom:'N\'Goran Estelle', classe:'5ème A', date:'2025-04-16', statut:'Retard',  motif:'Pluie' },
    { id:9,  eleveNom:'Diabaté Justin',   classe:'CE1 A',  date:'2025-04-16', statut:'Absent',  motif:'Décès familial' },
    { id:10, eleveNom:'Ouédraogo Kadidia',classe:'2nde A', date:'2025-04-15', statut:'Excusé',  motif:'Compétition sportive' },
  ]);

  filtered = computed(() => {
    const q  = this.search().toLowerCase();
    const fd = this.filterDate();
    const fs = this.filterStatut();
    const fc = this.filterClasse();
    return this.presences().filter(p => (!q  || p.eleveNom.toLowerCase().includes(q) || p.classe.toLowerCase().includes(q)) &&
      (!fd || p.date === fd) &&
      (!fs || p.statut === fs) &&
      (!fc || p.classe === fc)
    );
  });

  kpis = computed(() => {
    const all = this.presences();
    const today = all.filter(p => p.date === '2025-04-20');
    return [
      { label: 'Absences (total)',  value: all.filter(p => p.statut === 'Absent').length,  color: '#e74c3c', icon: '' },
      { label: 'Retards (total)',   value: all.filter(p => p.statut === 'Retard').length,  color: '#f39c12', icon: '' },
      { label: 'Excusés (total)',   value: all.filter(p => p.statut === 'Excusé').length,  color: '#3498db', icon: '' },
      { label: 'Aujourd\'hui',      value: today.length,                                    color: '#9b59b6', icon: '' },
    ];
  });

  statutCls(s: StatutPresence) {
    const m: Record<StatutPresence, string> = { Présent:'badge badge--green', Absent:'badge badge--red', Retard:'badge badge--yellow', Excusé:'badge badge--blue' };
    return m[s];
  }

  excuse(id: number) {
    this.presences.update(list => list.map(p => p.id === id ? { ...p, statut: 'Excusé' as StatutPresence } : p));
  }

  addPresence() {
    const f = this.form;
    if (!f.eleveNom) return;
    const ids = this.presences().map(p => p.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    this.presences.update(list => [...list, { id, eleveNom: f.eleveNom, classe: f.classe, date: f.date, statut: f.statut as StatutPresence, motif: f.motif }]);
    this.form = { eleveNom:'', classe:'6ème A', date:'2025-04-20', statut:'Absent', motif:'' };
    this.showModal.set(false);
  }
}
