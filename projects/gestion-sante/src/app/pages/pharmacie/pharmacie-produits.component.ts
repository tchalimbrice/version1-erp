import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PharmacieStoreService, Medicament } from '../../services/pharmacie-store.service';

@Component({
  selector: 'app-pharmacie-produits',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  styleUrl: './pharmacie-produits.component.scss',
  template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title">Stocks pharmacie</h1>
      <p class="page__sub">Gestion des médicaments et des niveaux de stock</p>
    </div>
    <div class="page__actions">
      <a class="btn btn--outline" routerLink="/pharmacie">← Retour à la pharmacie</a>
      <button class="btn btn--primary" (click)="showAddMed.set(true)">+ Nouveau médicament</button>
    </div>
  </div>

  <div class="card">
    <div class="card__head">
      <span class="card__title">Inventaire</span>
      <input [(ngModel)]="searchMed" placeholder="Rechercher un médicament…" class="field__input" />
    </div>
    <table class="table">
      <thead>
        <tr><th>Médicament</th><th>DCI</th><th>Forme</th><th>Stock</th><th>Prix</th><th>Expiration</th><th>INAM</th><th></th></tr>
      </thead>
      <tbody>
        @for (med of filteredMeds(); track med.id) {
          <tr>
            <td class="fw-med">{{ med.nom }}</td>
            <td class="text-muted">{{ med.dci }}</td>
            <td>{{ med.forme }} {{ med.dosage }}</td>
            <td [class.stock-low]="med.stock <= med.seuil" [class.stock-ok]="med.stock > med.seuil">
              {{ med.stock }} <span class="text-muted" style="font-size:11px;">(seuil {{ med.seuil }})</span>
            </td>
            <td>{{ med.prixUnitaire | number:'1.0-0' }} FCFA</td>
            <td [style.color]="isExpired(med.dateExpiration) ? '#c0392b' : '#555'">{{ med.dateExpiration }}</td>
            <td>
              @if (med.inamPris) {
                <span class="badge badge--green">INAM {{ med.inamTaux }}%</span>
              } @else {
                <span class="badge badge--gray">Non</span>
              }
            </td>
            <td>
              <button class="btn btn--outline" style="font-size:11px;" (click)="editMed(med)">Modifier</button>
            </td>
          </tr>
        }
      </tbody>
    </table>
  </div>

  @if (showAddMed()) {
    <div class="modal-overlay" (click)="showAddMed.set(false)">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal__head">
          <span class="modal__title">{{ newMed.id ? 'Modifier' : 'Ajouter' }} un médicament</span>
          <button class="modal__close" (click)="showAddMed.set(false)">✕</button>
        </div>
        <div class="modal__body">
          <div class="fields-row">
            <div class="field"><label class="field__label">Nom *</label><input class="field__input" [(ngModel)]="newMed.nom" /></div>
            <div class="field"><label class="field__label">DCI</label><input class="field__input" [(ngModel)]="newMed.dci" /></div>
          </div>
          <div class="fields-row">
            <div class="field"><label class="field__label">Forme</label><input class="field__input" [(ngModel)]="newMed.forme" /></div>
            <div class="field"><label class="field__label">Dosage</label><input class="field__input" [(ngModel)]="newMed.dosage" /></div>
          </div>
          <div class="fields-row">
            <div class="field"><label class="field__label">Stock initial</label><input class="field__input" type="number" [(ngModel)]="newMed.stock" /></div>
            <div class="field"><label class="field__label">Seuil d'alerte</label><input class="field__input" type="number" [(ngModel)]="newMed.seuil" /></div>
          </div>
          <div class="fields-row">
            <div class="field"><label class="field__label">Prix unitaire (FCFA)</label><input class="field__input" type="number" [(ngModel)]="newMed.prixUnitaire" /></div>
            <div class="field"><label class="field__label">Expiration</label><input class="field__input" type="date" [(ngModel)]="newMed.dateExpiration" /></div>
          </div>
          <div class="fields-row">
            <div class="field"><label class="field__label">Pris en charge INAM</label>
              <select class="field__select" [(ngModel)]="newMed.inamPris">
                <option [ngValue]="false">Non</option>
                <option [ngValue]="true">Oui</option>
              </select>
            </div>
            @if (newMed.inamPris) {
              <div class="field"><label class="field__label">Taux INAM (%)</label><input class="field__input" type="number" [(ngModel)]="newMed.inamTaux" /></div>
            }
          </div>
        </div>
        <div class="modal__foot">
          <button class="btn btn--outline" (click)="showAddMed.set(false)">Annuler</button>
          <button class="btn btn--primary" (click)="saveMed()">Enregistrer</button>
        </div>
      </div>
    </div>
  }
</div>
  `
})
export class PharmacieProduitsComponent {
  searchMed = '';
  showAddMed = signal(false);
  newMed: Partial<Medicament> = this.blankMed();

  filteredMeds = computed(() => {
    const query = this.searchMed.toLowerCase();
    return this.store.medicaments().filter(m => !query || m.nom.toLowerCase().includes(query) || m.dci.toLowerCase().includes(query));
  });

  constructor(public readonly store: PharmacieStoreService) {}

  isExpired(date: string): boolean {
    return new Date(date) < new Date();
  }

  editMed(med: Medicament) {
    this.newMed = { ...med };
    this.showAddMed.set(true);
  }

  saveMed() {
    if (!this.newMed.nom) return;
    const med: Medicament = {
      id: this.newMed.id || Date.now().toString(),
      nom: this.newMed.nom,
      dci: this.newMed.dci || '',
      forme: this.newMed.forme || '',
      dosage: this.newMed.dosage || '',
      stock: this.newMed.stock ?? 0,
      seuil: this.newMed.seuil ?? 10,
      prixUnitaire: this.newMed.prixUnitaire ?? 0,
      fournisseur: this.newMed.fournisseur || '',
      dateExpiration: this.newMed.dateExpiration || '',
      inamPris: this.newMed.inamPris ?? false,
      inamTaux: this.newMed.inamTaux ?? 0,
    };
    this.store.saveMed(med);
    this.newMed = this.blankMed();
    this.showAddMed.set(false);
  }

  private blankMed(): Partial<Medicament> {
    return { nom: '', dci: '', forme: '', dosage: '', stock: 0, seuil: 10, prixUnitaire: 0, fournisseur: '', dateExpiration: '', inamPris: false, inamTaux: 0 };
  }
}
