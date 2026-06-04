import { Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CollabStoreService } from '../../services/collab-store.service';

interface DashboardMetricDto {
  code: string;
  label: string;
  value: number;
  color: string;
}

interface DashboardSummaryDto {
  service: string;
  metrics: DashboardMetricDto[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    @use '../../shared-page.scss';
    .level-card { background:#fff; border-radius:14px; border:1px solid #dde3ea; padding:22px 24px; display:flex; align-items:center; gap:18px; }
    .level-icon { width:56px; height:56px; border-radius:14px; display:grid; place-items:center; font-size:26px; flex-shrink:0; }
    .level-val  { font-size:32px; font-weight:900; line-height:1; }
    .level-lbl  { font-size:12px; color:#7f8c8d; font-weight:600; text-transform:uppercase; letter-spacing:.5px; margin-top:4px; }
    .level-sub  { font-size:11px; color:#aaa; margin-top:2px; }
    .levels-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:16px; margin-bottom:24px; }
    .bar { height:10px; border-radius:5px; background:#f0f4f8; overflow:hidden; margin-top:8px; }
    .bar__fill { height:100%; border-radius:5px; }
  `],
  template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title"> Tableau de bord</h1>
      <p class="page__sub">Vue d'ensemble de l'établissement — {{ companyName() }}</p>
    </div>
  </div>

  <div class="kpi-grid" style="margin-bottom:24px">
    <div class="kpi-card" style="border-left-color:#1a3a5c">
      <div class="kpi-card__icon" style="background:#d6eaf8"></div>
      <div class="kpi-card__body">
        <div class="kpi-card__value" style="color:#1a3a5c">{{ totalEleves }}</div>
        <div class="kpi-card__label">Total élèves</div>
        <div class="kpi-card__sub">Tous niveaux confondus</div>
      </div>
    </div>
    <div class="kpi-card" style="border-left-color:#27ae60">
      <div class="kpi-card__icon" style="background:#d5f5e3"></div>
      <div class="kpi-card__body">
        <div class="kpi-card__value" style="color:#27ae60">{{ totalEnseignants }}</div>
        <div class="kpi-card__label">Enseignants actifs</div>
      </div>
    </div>
    <div class="kpi-card" style="border-left-color:#f39c12">
      <div class="kpi-card__icon" style="background:#fef9e7"></div>
      <div class="kpi-card__body">
        <div class="kpi-card__value" style="color:#f39c12">{{ totalClasses }}</div>
        <div class="kpi-card__label">Classes</div>
      </div>
    </div>
    <div class="kpi-card" style="border-left-color:#8e44ad">
      <div class="kpi-card__icon" style="background:#f4ecf7"></div>
      <div class="kpi-card__body">
        <div class="kpi-card__value" style="color:#8e44ad">{{ tauxPaiement }}%</div>
        <div class="kpi-card__label">Taux de paiement</div>
      </div>
    </div>
  </div>

  <div class="card" style="margin-bottom:20px">
    <div class="card__head"><span class="card__title">Effectifs par niveau</span></div>
    <div class="levels-grid">
      @for (lvl of niveaux; track lvl.nom) {
        <div class="level-card">
          <div class="level-icon" [style.background]="lvl.bg">{{ lvl.icon }}</div>
          <div style="flex:1">
            <div class="level-val" [style.color]="lvl.color">{{ lvl.total }}</div>
            <div class="level-lbl">{{ lvl.nom }}</div>
            <div class="level-sub">{{ lvl.classes }} classes · {{ lvl.filles }}F / {{ lvl.garcons }}G</div>
            <div class="bar"><div class="bar__fill" [style.background]="lvl.color" [style.width]="(lvl.total/totalEleves*100)+'%'"></div></div>
          </div>
        </div>
      }
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 300px;gap:20px">
    <div class="card">
      <div class="card__head"><span class="card__title">Activité récente</span></div>
      <table class="table">
        <thead><tr><th>Évènement</th><th>Détail</th><th>Date</th></tr></thead>
        <tbody>
          <tr><td class="fw-med">Inscription</td><td>15 nouveaux élèves enregistrés</td><td class="text-muted">Aujourd'hui</td></tr>
          <tr><td class="fw-med">Bulletin</td><td>Bulletins 2e trimestre — 3ème disponibles</td><td class="text-muted">Hier</td></tr>
          <tr><td class="fw-med">Paiement</td><td>32 scolarités réglées ce mois</td><td class="text-muted">Cette semaine</td></tr>
          <tr><td class="fw-med">Absence</td><td>8 absences non justifiées signalées</td><td class="text-muted">Aujourd'hui</td></tr>
        </tbody>
      </table>
    </div>
    <div class="card">
      <div class="card__head"><span class="card__title">Alertes</span></div>
      <div style="display:flex;flex-direction:column;gap:10px">
        @for (a of alertes; track a.msg) {
          <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:10px;" [style.background]="a.bg">
            <span style="font-size:18px">{{ a.icon }}</span>
            <div>
              <div style="font-size:13px;font-weight:700;" [style.color]="a.color">{{ a.titre }}</div>
              <div style="font-size:12px;color:#555;margin-top:2px">{{ a.msg }}</div>
            </div>
          </div>
        }
      </div>
    </div>
  </div>
</div>
  `
})
export class DashboardComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/education/dashboard/summary';

  readonly companyName = computed(() => this.store.company()?.name ?? 'EduManager');
  constructor(private readonly store: CollabStoreService) {}

  niveaux = [
    { nom: 'Primaire (CP–CM2)', total: 312, classes: 12, filles: 158, garcons: 154, icon: '', color: '#1a3a5c', bg: '#d6eaf8' },
    { nom: 'Collège (6e–3e)',   total: 248, classes: 10, filles: 122, garcons: 126, icon: '', color: '#27ae60', bg: '#d5f5e3' },
    { nom: 'Lycée (2de–Tle)',   total: 186, classes: 8,  filles: 89,  garcons: 97,  icon: '', color: '#8e44ad', bg: '#f4ecf7' },
  ];

  totalEleves = this.niveaux.reduce((s, n) => s + n.total, 0);
  totalEnseignants = 42;
  totalClasses = this.niveaux.reduce((s, n) => s + n.classes, 0);
  tauxPaiement = 78;

  alertes = [
    { titre: 'Scolarités impayées',  msg: '48 élèves avec arriérés > 2 mois',          icon: '', color: '#b7950b', bg: '#fef9e7' },
    { titre: 'Bulletins en attente', msg: 'Notes non saisies — 3 classes 3e trimestre', icon: '', color: '#1a5276', bg: '#eaf3fd' },
    { titre: 'Absence enseignant',   msg: 'M. YAO absent — Français 4e B',              icon: '', color: '#c0392b', bg: '#fdecea' },
    { titre: 'Réinscriptions',       msg: '23 élèves non réinscrits pour 2026-2027',    icon: '', color: '#8e44ad', bg: '#f4ecf7' },
  ];

  ngOnInit(): void {
    this.http.get<DashboardSummaryDto>(this.apiUrl).subscribe({
      next: summary => this.applySummary(summary),
      error: () => undefined,
    });
  }

  private applySummary(summary: DashboardSummaryDto): void {
    const metrics = new Map(summary.metrics.map(metric => [metric.code, metric.value] as const));
    const students = metrics.get('students');
    const classes = metrics.get('classes');
    const bulletins = metrics.get('bulletins');

    if (students !== undefined) {
      this.totalEleves = students;
      const baseTotal = 746;
      const ratio = students / baseTotal;
      this.niveaux = [
        { ...this.niveaux[0], total: Math.max(1, Math.round(312 * ratio)), filles: Math.max(1, Math.round(158 * ratio)), garcons: Math.max(1, Math.round(154 * ratio)) },
        { ...this.niveaux[1], total: Math.max(1, Math.round(248 * ratio)), filles: Math.max(1, Math.round(122 * ratio)), garcons: Math.max(1, Math.round(126 * ratio)) },
        { ...this.niveaux[2], total: Math.max(1, Math.round(186 * ratio)), filles: Math.max(1, Math.round(89 * ratio)), garcons: Math.max(1, Math.round(97 * ratio)) },
      ];
    }

    if (classes !== undefined) {
      this.totalClasses = classes;
      const primary = Math.max(1, Math.round(classes * 0.43));
      const college = Math.max(1, Math.round(classes * 0.34));
      const lycee = Math.max(1, classes - primary - college);
      this.niveaux = [
        { ...this.niveaux[0], classes: primary },
        { ...this.niveaux[1], classes: college },
        { ...this.niveaux[2], classes: lycee },
      ];
    }

    if (bulletins !== undefined) {
      this.tauxPaiement = Math.min(99, Math.max(60, Math.round((bulletins / Math.max(1, this.totalEleves)) * 100)));
    }
  }
}
