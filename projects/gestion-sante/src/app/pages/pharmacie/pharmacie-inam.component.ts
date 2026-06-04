import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FeuilleSoins, PharmacieStoreService, SoinLigne } from '../../services/pharmacie-store.service';

type ViewMode = 'formulaire' | 'historique';

type FeuilleForm = {
  regime: string;
  patient: {
    nom: string;
    prenoms: string;
    dateNaissance: string;
    numeroInam: string;
  };
  prescripteur: {
    nom: string;
    code: string;
    codeFormation: string;
    accident: boolean;
    grossesse: boolean;
  };
  soins: SoinLigne[];
  pharmacie: {
    code1: string;
    code2: string;
    dateDelivrance1: string;
    dateDelivrance2: string;
  };
};

@Component({
  selector: 'app-pharmacie-inam',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    @use '../../shared-page.scss';
    .tabs {
      display: flex;
      gap: 4px;
      background: #f0f4f8;
      border-radius: 12px;
      padding: 4px;
      margin: 0 0 24px;
      width: fit-content;
      max-width: 100%;
      flex-wrap: wrap;
    }
    .tab {
      border: none;
      border-radius: 9px;
      padding: 9px 14px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      background: transparent;
      color: #7f8c8d;
      text-decoration: none;
      transition: all 0.15s;
    }
    .tab.active { background: #fff; color: #1a5276; box-shadow: 0 1px 4px rgba(0,0,0,.08); }
    .summary-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; margin-bottom: 20px; }
    .summary-card { background: #fff; border: 1px solid #dde3ea; border-radius: 14px; padding: 16px 18px; }
    .summary-card__value { font-size: 26px; font-weight: 900; color: #0f2942; line-height: 1; }
    .summary-card__label { font-size: 12px; color: #7f8c8d; font-weight: 700; margin-top: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
    .field { display: flex; flex-direction: column; gap: 6px; }
    .field__label { font-size: 12px; font-weight: 700; color: #555; text-transform: uppercase; letter-spacing: 0.4px; }
    .field__input, .field__select {
      border: 1.5px solid #dde3ea;
      border-radius: 9px;
      padding: 9px 13px;
      font-size: 13px;
      color: #333;
      outline: none;
      background: #fff;
      font-family: inherit;
    }
    .field__input:focus, .field__select:focus { border-color: #1a5276; }
    .fields-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
    .section { margin-bottom: 18px; }
    .section__title { font-size: 15px; font-weight: 800; color: #0f2942; margin: 0 0 12px; }
    .inline-actions { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
    .table .line-total { font-weight: 700; color: #1a5276; }
    .details-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; }
    .detail-item { display: flex; flex-direction: column; gap: 4px; }
    .detail-lbl { font-size: 11px; font-weight: 700; color: #7f8c8d; text-transform: uppercase; letter-spacing: 0.5px; }
    .detail-val { font-size: 14px; font-weight: 600; color: #0f2942; }
    .line-list { display: grid; gap: 10px; }
    .line-chip { display: flex; justify-content: space-between; gap: 12px; padding: 12px 14px; border: 1px solid #e4e9ef; border-radius: 12px; background: #fbfcfe; }
    .line-chip strong { color: #0f2942; }
  `],
  template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title">Feuilles de soins</h1>
      <p class="page__sub">Ajout et historique des feuilles de soins INAM</p>
    </div>
    <button type="button" class="btn btn--outline" (click)="go('/pharmacie')">Retour à la pharmacie</button>
  </div>

  <div class="tabs">
    <button type="button" class="tab" [class.active]="viewMode() === 'formulaire'" (click)="go('/pharmacie/soins')">Ajouter une feuille de soins</button>
    <button type="button" class="tab" [class.active]="viewMode() === 'historique'" (click)="go('/pharmacie/soins/historique')">Historique des feuilles de soins</button>
  </div>

  <div class="summary-row">
    <div class="summary-card">
      <div class="summary-card__value">{{ store.feuillesSoinsCount() }}</div>
      <div class="summary-card__label">Feuilles enregistrées</div>
    </div>
    <div class="summary-card">
      <div class="summary-card__value">{{ totalSoins() }}</div>
      <div class="summary-card__label">Lignes de soins</div>
    </div>
    <div class="summary-card">
      <div class="summary-card__value">{{ montantTotalRembourse() | number:'1.0-0' }}</div>
      <div class="summary-card__label">Montant remboursable</div>
    </div>
    <div class="summary-card">
      <div class="summary-card__value">{{ montantBeneficiaire() | number:'1.0-0' }}</div>
      <div class="summary-card__label">Part bénéficiaire</div>
    </div>
  </div>

  @if (viewMode() === 'formulaire') {
    <div class="card">
      <div class="card__head">
        <span class="card__title">Nouvelle feuille de soins</span>
        <div class="inline-actions">
          <button class="btn btn--outline" type="button" (click)="resetForm()">Réinitialiser</button>
          <button class="btn btn--primary" type="button" (click)="saveFeuille()">Enregistrer</button>
        </div>
      </div>

      <div class="section">
        <h2 class="section__title">Informations générales</h2>
        <div class="fields-row">
          <div class="field">
            <label class="field__label">Régime</label>
            <select class="field__select" [(ngModel)]="form.regime">
              <option value="AMO">AMO</option>
              <option value="CNAM">CNAM</option>
              <option value="MUTUELLE">Mutuelle</option>
              <option value="AUTRE">Autre</option>
            </select>
          </div>
          <div class="field">
            <label class="field__label">Numéro INAM</label>
            <input class="field__input" [(ngModel)]="form.patient.numeroInam" />
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section__title">Patient</h2>
        <div class="fields-row">
          <div class="field"><label class="field__label">Nom</label><input class="field__input" [(ngModel)]="form.patient.nom" /></div>
          <div class="field"><label class="field__label">Prénoms</label><input class="field__input" [(ngModel)]="form.patient.prenoms" /></div>
          <div class="field"><label class="field__label">Date de naissance</label><input class="field__input" type="date" [(ngModel)]="form.patient.dateNaissance" /></div>
        </div>
      </div>

      <div class="section">
        <h2 class="section__title">Prescripteur</h2>
        <div class="fields-row">
          <div class="field"><label class="field__label">Nom</label><input class="field__input" [(ngModel)]="form.prescripteur.nom" /></div>
          <div class="field"><label class="field__label">Code</label><input class="field__input" [(ngModel)]="form.prescripteur.code" /></div>
          <div class="field"><label class="field__label">Code formation</label><input class="field__input" [(ngModel)]="form.prescripteur.codeFormation" /></div>
        </div>
        <div class="fields-row" style="margin-top:12px;">
          <label class="field" style="flex-direction:row;align-items:center;gap:10px;">
            <input type="checkbox" [(ngModel)]="form.prescripteur.accident" />
            <span class="field__label" style="margin:0;">Accident</span>
          </label>
          <label class="field" style="flex-direction:row;align-items:center;gap:10px;">
            <input type="checkbox" [(ngModel)]="form.prescripteur.grossesse" />
            <span class="field__label" style="margin:0;">Grossesse</span>
          </label>
        </div>
      </div>

      <div class="section">
        <div class="inline-actions" style="justify-content:space-between;">
          <h2 class="section__title" style="margin:0;">Lignes de soins</h2>
          <button class="btn btn--outline" type="button" (click)="addSoin()">+ Ajouter une ligne</button>
        </div>
        <div style="overflow:auto;">
          <table class="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Nature</th>
                <th>Code</th>
                <th>Prix remboursable</th>
                <th>Montant INAM</th>
                <th>Part bénéficiaire</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              @for (soin of form.soins; track $index) {
                <tr>
                  <td><input class="field__input" type="date" [(ngModel)]="soin.date" [ngModelOptions]="{ standalone: true }" /></td>
                  <td><input class="field__input" [(ngModel)]="soin.nature" [ngModelOptions]="{ standalone: true }" /></td>
                  <td><input class="field__input" [(ngModel)]="soin.code" [ngModelOptions]="{ standalone: true }" /></td>
                  <td><input class="field__input" type="number" [(ngModel)]="soin.prixRemboursement" [ngModelOptions]="{ standalone: true }" /></td>
                  <td><input class="field__input" type="number" [(ngModel)]="soin.montantInam" [ngModelOptions]="{ standalone: true }" /></td>
                  <td><input class="field__input" type="number" [(ngModel)]="soin.montantBeneficiaire" [ngModelOptions]="{ standalone: true }" /></td>
                  <td><button class="btn btn--outline" type="button" (click)="removeSoin($index)" [disabled]="form.soins.length === 1">Supprimer</button></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>

      <div class="section">
        <h2 class="section__title">Pharmacie</h2>
        <div class="fields-row">
          <div class="field"><label class="field__label">Code pharmacie 1</label><input class="field__input" [(ngModel)]="form.pharmacie.code1" /></div>
          <div class="field"><label class="field__label">Date délivrance 1</label><input class="field__input" type="date" [(ngModel)]="form.pharmacie.dateDelivrance1" /></div>
          <div class="field"><label class="field__label">Code pharmacie 2</label><input class="field__input" [(ngModel)]="form.pharmacie.code2" /></div>
          <div class="field"><label class="field__label">Date délivrance 2</label><input class="field__input" type="date" [(ngModel)]="form.pharmacie.dateDelivrance2" /></div>
        </div>
      </div>
    </div>
  }

  @if (viewMode() === 'historique') {
    <div class="card">
      <div class="card__head">
        <span class="card__title">Historique des feuilles de soins</span>
        <div class="inline-actions">
          <button class="btn btn--outline" type="button" (click)="viewMode.set('formulaire')">+ Nouvelle feuille</button>
        </div>
      </div>

      <div style="overflow:auto;">
        <table class="table">
          <thead>
            <tr>
              <th>Référence</th>
              <th>Date</th>
              <th>Patient</th>
              <th>Régime</th>
              <th>Soins</th>
              <th>Remboursable</th>
              <th>Bénéficiaire</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            @for (feuille of store.feuillesSoins(); track feuille.id) {
              <tr>
                <td class="fw-med">{{ feuille.reference }}</td>
                <td class="text-muted">{{ feuille.dateCreation }}</td>
                <td>{{ feuille.patient.nom }} {{ feuille.patient.prenoms }}</td>
                <td>{{ feuille.regime }}</td>
                <td>{{ feuille.soins.length }}</td>
                <td class="line-total">{{ totalFeuille(feuille).remboursable | number:'1.0-0' }} FCFA</td>
                <td class="line-total">{{ totalFeuille(feuille).beneficiaire | number:'1.0-0' }} FCFA</td>
                <td class="inline-actions">
                  <button class="btn btn--outline" type="button" (click)="selectFeuille(feuille)">Détails</button>
                  <button class="btn btn--outline" type="button" (click)="deleteFeuille(feuille.id)">Supprimer</button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  }

  @if (selectedFeuille()) {
    <div class="modal-overlay" (click)="selectedFeuille.set(null)">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal__head">
          <span class="modal__title">Détails de la feuille</span>
          <button class="modal__close" type="button" (click)="selectedFeuille.set(null)">×</button>
        </div>
        <div class="modal__body">
          <div class="details-grid">
            <div class="detail-item"><span class="detail-lbl">Référence</span><span class="detail-val">{{ selectedFeuille()!.reference }}</span></div>
            <div class="detail-item"><span class="detail-lbl">Date</span><span class="detail-val">{{ selectedFeuille()!.dateCreation }}</span></div>
            <div class="detail-item"><span class="detail-lbl">Régime</span><span class="detail-val">{{ selectedFeuille()!.regime }}</span></div>
            <div class="detail-item"><span class="detail-lbl">N° INAM</span><span class="detail-val">{{ selectedFeuille()!.patient.numeroInam }}</span></div>
            <div class="detail-item"><span class="detail-lbl">Patient</span><span class="detail-val">{{ selectedFeuille()!.patient.nom }} {{ selectedFeuille()!.patient.prenoms }}</span></div>
            <div class="detail-item"><span class="detail-lbl">Prescripteur</span><span class="detail-val">{{ selectedFeuille()!.prescripteur.nom }}</span></div>
          </div>

          <div class="section" style="margin-top:16px;">
            <h2 class="section__title">Lignes de soins</h2>
            <div class="line-list">
              @for (soin of selectedFeuille()!.soins; track $index) {
                <div class="line-chip">
                  <div>
                    <strong>{{ soin.nature }}</strong>
                    <div class="text-muted">{{ soin.date }} · {{ soin.code }}</div>
                  </div>
                  <div class="text-muted" style="text-align:right;">
                    <div>{{ soin.prixRemboursement | number:'1.0-0' }} FCFA</div>
                    <div>INAM: {{ soin.montantInam | number:'1.0-0' }} FCFA</div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
        <div class="modal__foot">
          <button class="btn btn--outline" type="button" (click)="selectedFeuille.set(null)">Fermer</button>
        </div>
      </div>
    </div>
  }
</div>
  `
})
export class PharmacieInamComponent {
  readonly viewMode = signal<ViewMode>('formulaire');
  readonly selectedFeuille = signal<FeuilleSoins | null>(null);

  form: FeuilleForm = this.blankForm();

  readonly totalSoins = computed(() => this.form.soins.length);
  readonly montantTotalRembourse = computed(() => this.form.soins.reduce((sum, soin) => sum + (Number(soin.prixRemboursement) || 0), 0));
  readonly montantBeneficiaire = computed(() => this.form.soins.reduce((sum, soin) => sum + (Number(soin.montantBeneficiaire) || 0), 0));

  constructor(
    public readonly store: PharmacieStoreService,
    private readonly router: Router
  ) {
    this.viewMode.set(this.router.url.includes('/historique') ? 'historique' : 'formulaire');
  }

  go(path: string): void {
    void this.router.navigateByUrl(path);
  }

  addSoin(): void {
    this.form.soins.push(this.blankSoin());
  }

  removeSoin(index: number): void {
    if (this.form.soins.length === 1) return;
    this.form.soins.splice(index, 1);
  }

  saveFeuille(): void {
    if (!this.form.patient.nom || !this.form.patient.prenoms || !this.form.prescripteur.nom) {
      return;
    }

    const feuille: FeuilleSoins = {
      id: Date.now().toString(),
      reference: this.store.generateFeuilleReference(),
      dateCreation: new Date().toLocaleDateString('fr-FR') + ' ' + new Date().toLocaleTimeString('fr-FR'),
      regime: this.form.regime,
      patient: { ...this.form.patient },
      prescripteur: { ...this.form.prescripteur },
      soins: this.form.soins.map(item => ({
        date: item.date,
        nature: item.nature,
        code: item.code,
        prixRemboursement: Number(item.prixRemboursement) || 0,
        montantInam: Number(item.montantInam) || 0,
        montantBeneficiaire: Number(item.montantBeneficiaire) || 0,
      })),
      pharmacie: { ...this.form.pharmacie },
    };

    this.store.saveFeuilleSoins(feuille);
    this.resetForm();
    this.viewMode.set('historique');
  }

  deleteFeuille(id: string): void {
    this.store.deleteFeuilleSoins(id);
    if (this.selectedFeuille()?.id === id) {
      this.selectedFeuille.set(null);
    }
  }

  selectFeuille(feuille: FeuilleSoins): void {
    this.selectedFeuille.set(feuille);
  }

  resetForm(): void {
    this.form = this.blankForm();
  }

  totalFeuille(feuille: FeuilleSoins): { remboursable: number; beneficiaire: number } {
    return feuille.soins.reduce((acc, soin) => {
      acc.remboursable += Number(soin.prixRemboursement) || 0;
      acc.beneficiaire += Number(soin.montantBeneficiaire) || 0;
      return acc;
    }, { remboursable: 0, beneficiaire: 0 });
  }

  private blankSoin(): SoinLigne {
    return { date: '', nature: '', code: '', prixRemboursement: 0, montantInam: 0, montantBeneficiaire: 0 };
  }

  private blankForm(): FeuilleForm {
    return {
      regime: 'AMO',
      patient: { nom: '', prenoms: '', dateNaissance: '', numeroInam: '' },
      prescripteur: { nom: '', code: '', codeFormation: '', accident: false, grossesse: false },
      soins: [this.blankSoin()],
      pharmacie: { code1: '', code2: '', dateDelivrance1: '', dateDelivrance2: '' },
    };
  }
}
