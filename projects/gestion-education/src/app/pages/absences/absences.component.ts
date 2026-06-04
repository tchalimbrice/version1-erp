import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

interface AbsenceEleve {
  id: string; date: string; eleve: string; classe: string;
  motif: string; statut: 'absent' | 'en retard' | 'justifié'; justification: string;
}

interface EtatProf {
  id: string; nom: string; matiere: string;
  statut: 'présent' | 'absent' | 'en permission'; motif: string; date: string;
}

@Component({
  selector: 'app-absences',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    @use '../../shared-page.scss';
    .tabs { display:flex; gap:4px; background:#f0f4f8; border-radius:12px; padding:4px; margin-bottom:24px; width:fit-content; }
    .tab  { padding:9px 20px; border:none; border-radius:9px; font-size:13px; font-weight:600; cursor:pointer; background:transparent; color:#7f8c8d; transition:all .15s; }
    .tab.active { background:#fff; color:#1a3a5c; box-shadow:0 1px 4px rgba(0,0,0,.08); }
  `],
  template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title"> Absences</h1>
      <p class="page__sub">Gestion des absences élèves et état de présence du corps enseignant</p>
    </div>
    <div class="page__actions">
      @if (tab() === 'eleves') {
        <button class="btn btn--primary" (click)="showAddAbsence.set(true)">+ Signaler une absence</button>
      }
      @if (tab() === 'profs') {
        <button class="btn btn--primary" (click)="showAddEtat.set(true)">+ Saisir l'état du jour</button>
      }
    </div>
  </div>

  <div class="tabs">
    <button class="tab" [class.active]="tab()==='eleves'" (click)="tab.set('eleves')"> Élèves</button>
    <button class="tab" [class.active]="tab()==='profs'"  (click)="tab.set('profs')"> Enseignants</button>
  </div>

  <!-- ── Absences élèves ── -->
  @if (tab() === 'eleves') {
    <div class="kpi-grid">
      <div class="kpi-card" style="border-left-color:#c0392b">
        <div class="kpi-card__icon" style="background:#fdecea"></div>
        <div class="kpi-card__body">
          <div class="kpi-card__value">{{ absentsJour() }}</div>
          <div class="kpi-card__label">Absents aujourd'hui</div>
        </div>
      </div>
      <div class="kpi-card" style="border-left-color:#f39c12">
        <div class="kpi-card__icon" style="background:#fef9e7"></div>
        <div class="kpi-card__body">
          <div class="kpi-card__value">{{ retardsJour() }}</div>
          <div class="kpi-card__label">En retard</div>
        </div>
      </div>
      <div class="kpi-card" style="border-left-color:#27ae60">
        <div class="kpi-card__icon" style="background:#d5f5e3"></div>
        <div class="kpi-card__body">
          <div class="kpi-card__value">{{ justifiesJour() }}</div>
          <div class="kpi-card__label">Absences justifiées</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card__head">
        <span class="card__title">Registre des absences</span>
        <div style="display:flex;gap:10px;align-items:center;">
          <input type="date" [(ngModel)]="filterDate" class="field__input" style="padding:6px 10px;font-size:13px;" />
          <input [(ngModel)]="filterClasse" placeholder="Classe…" class="field__input" style="padding:6px 10px;font-size:13px;width:120px;" />
        </div>
      </div>
      <table class="table">
        <thead><tr><th>Date</th><th>Élève</th><th>Classe</th><th>Statut</th><th>Motif</th><th>Justification</th><th></th></tr></thead>
        <tbody>
          @for (a of filteredAbsences(); track a.id) {
            <tr>
              <td class="text-muted">{{ a.date }}</td>
              <td class="fw-med">{{ a.eleve }}</td>
              <td>{{ a.classe }}</td>
              <td>
                <span class="badge"
                  [class.badge--red]="a.statut==='absent'"
                  [class.badge--yellow]="a.statut==='en retard'"
                  [class.badge--green]="a.statut==='justifié'">
                  {{ a.statut }}
                </span>
              </td>
              <td>{{ a.motif || '–' }}</td>
              <td>{{ a.justification || '–' }}</td>
              <td>
                @if (a.statut === 'absent') {
                  <button class="btn btn--outline" style="padding:3px 8px;font-size:11px;" (click)="justifier(a)">Justifier</button>
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  <!-- ── État enseignants ── -->
  @if (tab() === 'profs') {
    <div class="kpi-grid">
      <div class="kpi-card" style="border-left-color:#27ae60">
        <div class="kpi-card__icon" style="background:#d5f5e3"></div>
        <div class="kpi-card__body">
          <div class="kpi-card__value">{{ profsPresents() }}</div>
          <div class="kpi-card__label">Présents</div>
        </div>
      </div>
      <div class="kpi-card" style="border-left-color:#c0392b">
        <div class="kpi-card__icon" style="background:#fdecea"></div>
        <div class="kpi-card__body">
          <div class="kpi-card__value">{{ profsAbsents() }}</div>
          <div class="kpi-card__label">Absents</div>
        </div>
      </div>
      <div class="kpi-card" style="border-left-color:#f39c12">
        <div class="kpi-card__icon" style="background:#fef9e7"></div>
        <div class="kpi-card__body">
          <div class="kpi-card__value">{{ profsPermission() }}</div>
          <div class="kpi-card__label">En permission</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card__head"><span class="card__title">État de présence — Enseignants</span></div>
      <table class="table">
        <thead><tr><th>Enseignant</th><th>Matière</th><th>Date</th><th>Statut</th><th>Motif / Remarque</th></tr></thead>
        <tbody>
          @for (p of etatsProfs(); track p.id) {
            <tr>
              <td class="fw-med">{{ p.nom }}</td>
              <td>{{ p.matiere }}</td>
              <td class="text-muted">{{ p.date }}</td>
              <td>
                <span class="badge"
                  [class.badge--green]="p.statut==='présent'"
                  [class.badge--red]="p.statut==='absent'"
                  [class.badge--yellow]="p.statut==='en permission'">
                  {{ p.statut }}
                </span>
              </td>
              <td>{{ p.motif || '–' }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  <!-- Modal : Absence élève -->
  @if (showAddAbsence()) {
    <div class="modal-overlay" (click)="showAddAbsence.set(false)">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal__head">
          <span class="modal__title">Signaler une absence</span>
          <button class="modal__close" (click)="showAddAbsence.set(false)">✕</button>
        </div>
        <div class="modal__body">
          <div class="fields-row">
            <div class="field"><label class="field__label">Nom de l'élève *</label><input class="field__input" [(ngModel)]="newAbs.eleve" placeholder="Nom Prénom" /></div>
            <div class="field"><label class="field__label">Classe *</label><input class="field__input" [(ngModel)]="newAbs.classe" placeholder="Ex: 3ème A" /></div>
          </div>
          <div class="fields-row">
            <div class="field">
              <label class="field__label">Statut</label>
              <select class="field__select" [(ngModel)]="newAbs.statut">
                <option value="absent">Absent</option>
                <option value="en retard">En retard</option>
                <option value="justifié">Justifié</option>
              </select>
            </div>
            <div class="field"><label class="field__label">Date</label><input class="field__input" type="date" [(ngModel)]="newAbs.date" /></div>
          </div>
          <div class="field"><label class="field__label">Motif</label><input class="field__input" [(ngModel)]="newAbs.motif" placeholder="Ex: Maladie, Voyage…" /></div>
          <div class="field"><label class="field__label">Justification (si applicable)</label><input class="field__input" [(ngModel)]="newAbs.justification" placeholder="Ex: Certificat médical fourni" /></div>
        </div>
        <div class="modal__foot">
          <button class="btn btn--outline" (click)="showAddAbsence.set(false)">Annuler</button>
          <button class="btn btn--primary" (click)="saveAbsence()">Enregistrer</button>
        </div>
      </div>
    </div>
  }

  <!-- Modal : État enseignant -->
  @if (showAddEtat()) {
    <div class="modal-overlay" (click)="showAddEtat.set(false)">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal__head">
          <span class="modal__title">Saisir l'état d'un enseignant</span>
          <button class="modal__close" (click)="showAddEtat.set(false)">✕</button>
        </div>
        <div class="modal__body">
          <div class="fields-row">
            <div class="field"><label class="field__label">Nom de l'enseignant *</label><input class="field__input" [(ngModel)]="newEtat.nom" placeholder="Nom Prénom" /></div>
            <div class="field"><label class="field__label">Matière</label><input class="field__input" [(ngModel)]="newEtat.matiere" placeholder="Ex: Mathématiques" /></div>
          </div>
          <div class="fields-row">
            <div class="field">
              <label class="field__label">Statut *</label>
              <select class="field__select" [(ngModel)]="newEtat.statut">
                <option value="présent">Présent</option>
                <option value="absent">Absent</option>
                <option value="en permission">En permission</option>
              </select>
            </div>
            <div class="field"><label class="field__label">Date</label><input class="field__input" type="date" [(ngModel)]="newEtat.date" /></div>
          </div>
          <div class="field"><label class="field__label">Motif / Remarque</label><input class="field__input" [(ngModel)]="newEtat.motif" placeholder="Précisez si absent ou en permission…" /></div>
        </div>
        <div class="modal__foot">
          <button class="btn btn--outline" (click)="showAddEtat.set(false)">Annuler</button>
          <button class="btn btn--primary" (click)="saveEtat()">Enregistrer</button>
        </div>
      </div>
    </div>
  }
</div>
  `
})
export class AbsencesComponent {
  constructor(private readonly store: CollabStoreService) {}

  tab = signal<'eleves' | 'profs'>('eleves');
  showAddAbsence = signal(false);
  showAddEtat    = signal(false);
  filterDate  = '';
  filterClasse = '';

  absences = signal<AbsenceEleve[]>([
    { id:'1', date:'23/04/2026', eleve:'KONAN Marie',     classe:'3ème A', statut:'absent',   motif:'Maladie',  justification:'' },
    { id:'2', date:'23/04/2026', eleve:'KOFFI Jean-Paul', classe:'5ème B', statut:'en retard',motif:'Transport',justification:'' },
    { id:'3', date:'22/04/2026', eleve:'BAMBA Fatoumata', classe:'Tle D',  statut:'justifié', motif:'Deuil',    justification:'Acte de décès fourni' },
    { id:'4', date:'23/04/2026', eleve:'DIALLO Ibrahima', classe:'4ème C', statut:'absent',   motif:'',         justification:'' },
  ]);

  etatsProfs = signal<EtatProf[]>([
    { id:'1', nom:'M. KOUASSI Roger',    matiere:'Mathématiques',   statut:'présent',      motif:'',                     date:'23/04/2026' },
    { id:'2', nom:'Mme YAO Christine',   matiere:'Français',        statut:'absent',       motif:'Maladie',              date:'23/04/2026' },
    { id:'3', nom:'M. TOURE Seydou',     matiere:'Histoire-Géo',    statut:'en permission',motif:'Conférence pédagogique',date:'23/04/2026' },
    { id:'4', nom:'M. COULIBALY Pierre', matiere:'Sciences Nat.',   statut:'présent',      motif:'',                     date:'23/04/2026' },
  ]);

  newAbs: Partial<AbsenceEleve> = { date: new Date().toLocaleDateString('fr-FR'), statut: 'absent', eleve: '', classe: '', motif: '', justification: '' };
  newEtat: Partial<EtatProf>    = { date: new Date().toLocaleDateString('fr-FR'), statut: 'présent', nom: '', matiere: '', motif: '' };

  filteredAbsences = computed(() => {
    return this.absences().filter(a => {
      if (this.filterClasse && !a.classe.toLowerCase().includes(this.filterClasse.toLowerCase())) return false;
      return true;
    });
  });

  absentsJour    = computed(() => this.absences().filter(a => a.statut === 'absent').length);
  retardsJour    = computed(() => this.absences().filter(a => a.statut === 'en retard').length);
  justifiesJour  = computed(() => this.absences().filter(a => a.statut === 'justifié').length);
  profsPresents  = computed(() => this.etatsProfs().filter(p => p.statut === 'présent').length);
  profsAbsents   = computed(() => this.etatsProfs().filter(p => p.statut === 'absent').length);
  profsPermission= computed(() => this.etatsProfs().filter(p => p.statut === 'en permission').length);

  justifier(a: AbsenceEleve) {
    this.absences.update(list => list.map(x => x.id === a.id ? { ...x, statut: 'justifié' } : x));
  }

  saveAbsence() {
    if (!this.newAbs.eleve || !this.newAbs.classe) return;
    this.absences.update(list => [{ ...this.newAbs as AbsenceEleve, id: Date.now().toString() }, ...list]);
    this.newAbs = { date: new Date().toLocaleDateString('fr-FR'), statut: 'absent', eleve: '', classe: '', motif: '', justification: '' };
    this.showAddAbsence.set(false);
  }

  saveEtat() {
    if (!this.newEtat.nom) return;
    this.etatsProfs.update(list => [{ ...this.newEtat as EtatProf, id: Date.now().toString() }, ...list]);
    this.newEtat = { date: new Date().toLocaleDateString('fr-FR'), statut: 'présent', nom: '', matiere: '', motif: '' };
    this.showAddEtat.set(false);
  }
}
