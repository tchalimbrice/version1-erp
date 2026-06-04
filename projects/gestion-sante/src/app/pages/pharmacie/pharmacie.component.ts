import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmacieStoreService } from '../../services/pharmacie-store.service';

interface Medicament {
  id: string; nom: string; dci: string; forme: string; dosage: string;
  stock: number; seuil: number; prixUnitaire: number; fournisseur: string;
  dateExpiration: string; inamPris: boolean; inamTaux: number;
}

interface VenteMed {
  id: string; date: string; patient: string; medicaments: string;
  montantTotal: number; montantInam: number; montantPatient: number;
  statut: 'payé' | 'inam' | 'partiel'; ordonnanceRef: string;
}

interface DemandeInam {
  id: string; date: string; patient: string; medicaments: string;
  montant: number; statut: 'en attente' | 'approuvé' | 'rejeté'; reference: string;
}

@Component({
  selector: 'app-pharmacie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    @use '../../shared-page.scss';
    .inam-badge { display:inline-flex; align-items:center; gap:4px; padding:3px 10px; border-radius:20px; font-size:11px; font-weight:700; background:#d5f5e3; color:#1e8449; }
    .stock-low { color:#c0392b; font-weight:700; }
    .stock-ok  { color:#1e8449; font-weight:700; }
  `],
  template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title">Pharmacie</h1>
      <p class="page__sub">Gestion des médicaments, ventes et prise en charge INAM</p>
    </div>
  </div>

  <div class="kpi-grid">
    <div class="kpi-card" style="border-left-color:#1a5276">
      <div class="kpi-card__icon" style="background:#d6eaf8"></div>
      <div class="kpi-card__body">
        <div class="kpi-card__value">{{ medicaments().length }}</div>
        <div class="kpi-card__label">Médicaments en stock</div>
      </div>
    </div>
    <div class="kpi-card" style="border-left-color:#c0392b">
      <div class="kpi-card__icon" style="background:#fdecea"></div>
      <div class="kpi-card__body">
        <div class="kpi-card__value">{{ stocksBas() }}</div>
        <div class="kpi-card__label">Stocks bas</div>
      </div>
    </div>
    <div class="kpi-card" style="border-left-color:#27ae60">
      <div class="kpi-card__icon" style="background:#d5f5e3"></div>
      <div class="kpi-card__body">
        <div class="kpi-card__value">{{ ventesJour() }}</div>
        <div class="kpi-card__label">Ventes aujourd'hui</div>
      </div>
    </div>
    <div class="kpi-card" style="border-left-color:#f39c12">
      <div class="kpi-card__icon" style="background:#fef9e7"></div>
      <div class="kpi-card__body">
        <div class="kpi-card__value">{{ demandesInamEnAttente() }}</div>
        <div class="kpi-card__label">Demandes INAM en attente</div>
      </div>
    </div>
  </div>

  <div class="page__actions" style="display:flex; gap:12px; flex-wrap:wrap; margin-top:24px;">
    <button type="button" class="btn btn--primary" (click)="go('/pharmacie/produits')">Gérer les Stocks</button>
    <button type="button" class="btn btn--primary" (click)="go('/pharmacie/ventes')">Gérer les Ventes</button>
    <button type="button" class="btn btn--primary" (click)="go('/pharmacie/factures')">Voir les Factures</button>
    <button type="button" class="btn btn--primary" (click)="go('/pharmacie/soins')">Gérer les INAM</button>
  </div>
</div>
  `
})
export class PharmacieComponent {
  medicaments = signal<Medicament[]>([]);
  ventes = signal<VenteMed[]>([]);
  demandesInam = signal<DemandeInam[]>([]);

  stocksBas = computed(() => this.medicaments().filter(m => m.stock <= m.seuil).length);
  ventesJour = computed(() => this.ventes().filter(v => v.date === new Date().toLocaleDateString('fr-FR')).length);
  demandesInamEnAttente = computed(() => this.demandesInam().filter(d => d.statut === 'en attente').length);

  constructor(
    private readonly store: PharmacieStoreService,
    private readonly router: Router
  ) {
    this.medicaments.set(this.store.medicaments());
    this.ventes.set(this.store.ventes());
    this.demandesInam.set(this.store.demandesInam());
  }

  go(path: string): void {
    void this.router.navigateByUrl(path);
  }
}
