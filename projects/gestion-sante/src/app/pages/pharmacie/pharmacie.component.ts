import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

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
    .tabs { display:flex; gap:4px; background:#f0f4f8; border-radius:12px; padding:4px; margin-bottom:24px; }
    .tab { flex:1; padding:9px 14px; border:none; border-radius:9px; font-size:13px; font-weight:600; cursor:pointer; background:transparent; color:#7f8c8d; transition:all .15s; }
    .tab.active { background:#fff; color:#1a5276; box-shadow:0 1px 4px rgba(0,0,0,.08); }
    .inam-badge { display:inline-flex; align-items:center; gap:4px; padding:3px 10px; border-radius:20px; font-size:11px; font-weight:700; background:#d5f5e3; color:#1e8449; }
    .stock-low { color:#c0392b; font-weight:700; }
    .stock-ok  { color:#1e8449; font-weight:700; }
  `],
  template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title">💊 Pharmacie</h1>
      <p class="page__sub">Gestion des médicaments, ventes et prise en charge INAM</p>
    </div>
    <div class="page__actions">
      @if (activeTab() === 'stocks') {
        <button class="btn btn--primary" (click)="showAddMed.set(true)">+ Médicament</button>
      }
      @if (activeTab() === 'ventes') {
        <button class="btn btn--primary" (click)="showAddVente.set(true)">+ Vente</button>
      }
    </div>
  </div>

  <!-- KPIs -->
  <div class="kpi-grid">
    <div class="kpi-card" style="border-left-color:#1a5276">
      <div class="kpi-card__icon" style="background:#d6eaf8">💊</div>
      <div class="kpi-card__body">
        <div class="kpi-card__value">{{ medicaments().length }}</div>
        <div class="kpi-card__label">Médicaments en stock</div>
      </div>
    </div>
    <div class="kpi-card" style="border-left-color:#c0392b">
      <div class="kpi-card__icon" style="background:#fdecea">⚠️</div>
      <div class="kpi-card__body">
        <div class="kpi-card__value">{{ stocksBas() }}</div>
        <div class="kpi-card__label">Stocks bas (seuil atteint)</div>
      </div>
    </div>
    <div class="kpi-card" style="border-left-color:#27ae60">
      <div class="kpi-card__icon" style="background:#d5f5e3">💰</div>
      <div class="kpi-card__body">
        <div class="kpi-card__value">{{ ventesJour() }}</div>
        <div class="kpi-card__label">Ventes aujourd'hui</div>
      </div>
    </div>
    <div class="kpi-card" style="border-left-color:#f39c12">
      <div class="kpi-card__icon" style="background:#fef9e7">🏥</div>
      <div class="kpi-card__body">
        <div class="kpi-card__value">{{ demandesInamEnAttente() }}</div>
        <div class="kpi-card__label">Demandes INAM en attente</div>
      </div>
    </div>
  </div>

  <!-- Tabs -->
  <div class="tabs">
    <button class="tab" [class.active]="activeTab()==='stocks'" (click)="activeTab.set('stocks')">📦 Stocks</button>
    <button class="tab" [class.active]="activeTab()==='ventes'" (click)="activeTab.set('ventes')">🛒 Ventes</button>
    <button class="tab" [class.active]="activeTab()==='factures'" (click)="activeTab.set('factures')">🧾 Factures</button>
    <button class="tab" [class.active]="activeTab()==='inam'" (click)="activeTab.set('inam')">🏥 INAM</button>
  </div>

  <!-- ── Stocks ── -->
  @if (activeTab() === 'stocks') {
    <div class="card">
      <div class="card__head">
        <span class="card__title">Inventaire des médicaments</span>
        <input [(ngModel)]="searchMed" placeholder="Rechercher…" style="border:1px solid #dde3ea;border-radius:8px;padding:6px 12px;font-size:13px;outline:none;"/>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Médicament</th><th>DCI</th><th>Forme</th><th>Stock</th>
            <th>Prix unit.</th><th>Expiration</th><th>INAM</th><th></th>
          </tr>
        </thead>
        <tbody>
          @for (m of filteredMeds(); track m.id) {
            <tr>
              <td class="fw-med">{{ m.nom }}</td>
              <td class="text-muted">{{ m.dci }}</td>
              <td>{{ m.forme }} {{ m.dosage }}</td>
              <td [class.stock-low]="m.stock <= m.seuil" [class.stock-ok]="m.stock > m.seuil">
                {{ m.stock }} <span class="text-muted" style="font-size:11px;">(seuil: {{ m.seuil }})</span>
              </td>
              <td>{{ m.prixUnitaire | number:'1.0-0' }} FCFA</td>
              <td [style.color]="isExpired(m.dateExpiration) ? '#c0392b' : '#555'">{{ m.dateExpiration }}</td>
              <td>
                @if (m.inamPris) {
                  <span class="inam-badge">INAM {{ m.inamTaux }}%</span>
                } @else {
                  <span class="badge badge--gray">Non</span>
                }
              </td>
              <td>
                <button class="btn btn--outline" style="padding:4px 10px;font-size:11px;" (click)="editMed(m)">Modifier</button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  <!-- ── Ventes ── -->
  @if (activeTab() === 'ventes') {
    <div class="card">
      <div class="card__head"><span class="card__title">Ventes de médicaments</span></div>
      <table class="table">
        <thead>
          <tr><th>Date</th><th>Patient</th><th>Médicaments</th><th>Montant total</th><th>Part INAM</th><th>Part patient</th><th>Statut</th></tr>
        </thead>
        <tbody>
          @for (v of ventes(); track v.id) {
            <tr>
              <td class="text-muted">{{ v.date }}</td>
              <td class="fw-med">{{ v.patient }}</td>
              <td>{{ v.medicaments }}</td>
              <td>{{ v.montantTotal | number:'1.0-0' }} FCFA</td>
              <td class="text-muted">{{ v.montantInam | number:'1.0-0' }} FCFA</td>
              <td>{{ v.montantPatient | number:'1.0-0' }} FCFA</td>
              <td>
                <span class="badge" [class.badge--green]="v.statut==='payé'" [class.badge--blue]="v.statut==='inam'" [class.badge--yellow]="v.statut==='partiel'">
                  {{ v.statut }}
                </span>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  <!-- ── Factures ── -->
  @if (activeTab() === 'factures') {
    <div class="card">
      <div class="card__head"><span class="card__title">Factures pharmacie</span></div>
      <table class="table">
        <thead>
          <tr><th>N° Facture</th><th>Date</th><th>Patient</th><th>Montant</th><th>Statut</th><th>Action</th></tr>
        </thead>
        <tbody>
          @for (v of ventes(); track v.id) {
            <tr>
              <td class="fw-med">FACT-{{ v.id }}</td>
              <td class="text-muted">{{ v.date }}</td>
              <td>{{ v.patient }}</td>
              <td>{{ v.montantTotal | number:'1.0-0' }} FCFA</td>
              <td>
                <span class="badge" [class.badge--green]="v.statut==='payé'" [class.badge--yellow]="v.statut==='partiel'">{{ v.statut }}</span>
              </td>
              <td>
                <button class="btn btn--outline" style="padding:4px 10px;font-size:11px;" (click)="printFacture(v)">🖨️ Imprimer</button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  <!-- ── INAM ── -->
  @if (activeTab() === 'inam') {
    <div class="card" style="margin-bottom:16px">
      <div class="card__head">
        <span class="card__title">Demandes de prise en charge INAM</span>
        <button class="btn btn--primary" style="font-size:12px;padding:7px 14px;" (click)="showAddInam.set(true)">+ Nouvelle demande</button>
      </div>
      <table class="table">
        <thead>
          <tr><th>N° Ref</th><th>Date</th><th>Patient</th><th>Médicaments</th><th>Montant</th><th>Statut</th><th>Action</th></tr>
        </thead>
        <tbody>
          @for (d of demandesInam(); track d.id) {
            <tr>
              <td class="fw-med">{{ d.reference }}</td>
              <td class="text-muted">{{ d.date }}</td>
              <td>{{ d.patient }}</td>
              <td>{{ d.medicaments }}</td>
              <td>{{ d.montant | number:'1.0-0' }} FCFA</td>
              <td>
                <span class="badge"
                  [class.badge--yellow]="d.statut==='en attente'"
                  [class.badge--green]="d.statut==='approuvé'"
                  [class.badge--red]="d.statut==='rejeté'">
                  {{ d.statut }}
                </span>
              </td>
              <td>
                @if (d.statut === 'en attente') {
                  <button class="btn btn--outline" style="padding:3px 8px;font-size:11px;" (click)="approuverInam(d)">Approuver</button>
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- INAM Stats -->
    <div class="card">
      <div class="card__head"><span class="card__title">Récapitulatif INAM du mois</span></div>
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-card__val" style="color:#1a5276">{{ demandesInam().length }}</div>
          <div class="stat-card__lbl">Demandes totales</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__val" style="color:#27ae60">{{ demandesInam().filter(d=>d.statut==='approuvé').length }}</div>
          <div class="stat-card__lbl">Approuvées</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__val" style="color:#f39c12">{{ demandesInam().filter(d=>d.statut==='en attente').length }}</div>
          <div class="stat-card__lbl">En attente</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__val" style="color:#c0392b">{{ montantInamMois() | number:'1.0-0' }}</div>
          <div class="stat-card__lbl">Montant FCFA</div>
        </div>
      </div>
    </div>
  }

  <!-- Modal : Ajouter médicament -->
  @if (showAddMed()) {
    <div class="modal-overlay" (click)="showAddMed.set(false)">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal__head">
          <span class="modal__title">Ajouter un médicament</span>
          <button class="modal__close" (click)="showAddMed.set(false)">✕</button>
        </div>
        <div class="modal__body">
          <div class="fields-row">
            <div class="field"><label class="field__label">Nom commercial *</label><input class="field__input" [(ngModel)]="newMed.nom" placeholder="Ex: Paracétamol 500mg" /></div>
            <div class="field"><label class="field__label">DCI</label><input class="field__input" [(ngModel)]="newMed.dci" placeholder="Dénomination commune" /></div>
          </div>
          <div class="fields-row">
            <div class="field"><label class="field__label">Forme</label><input class="field__input" [(ngModel)]="newMed.forme" placeholder="Comprimé, Sirop…" /></div>
            <div class="field"><label class="field__label">Dosage</label><input class="field__input" [(ngModel)]="newMed.dosage" placeholder="500mg, 250ml…" /></div>
          </div>
          <div class="fields-row">
            <div class="field"><label class="field__label">Stock initial</label><input class="field__input" type="number" [(ngModel)]="newMed.stock" /></div>
            <div class="field"><label class="field__label">Seuil d'alerte</label><input class="field__input" type="number" [(ngModel)]="newMed.seuil" /></div>
          </div>
          <div class="fields-row">
            <div class="field"><label class="field__label">Prix unitaire (FCFA)</label><input class="field__input" type="number" [(ngModel)]="newMed.prixUnitaire" /></div>
            <div class="field"><label class="field__label">Date d'expiration</label><input class="field__input" type="date" [(ngModel)]="newMed.dateExpiration" /></div>
          </div>
          <div class="fields-row">
            <div class="field">
              <label class="field__label">Pris en charge INAM</label>
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

  <!-- Modal : Nouvelle vente -->
  @if (showAddVente()) {
    <div class="modal-overlay" (click)="showAddVente.set(false)">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal__head">
          <span class="modal__title">Nouvelle vente</span>
          <button class="modal__close" (click)="showAddVente.set(false)">✕</button>
        </div>
        <div class="modal__body">
          <div class="field"><label class="field__label">Patient</label><input class="field__input" [(ngModel)]="newVente.patient" placeholder="Nom du patient" /></div>
          <div class="field"><label class="field__label">Médicaments (description)</label><input class="field__input" [(ngModel)]="newVente.medicaments" placeholder="Ex: Paracétamol x2, Amoxicilline x1" /></div>
          <div class="field"><label class="field__label">N° Ordonnance</label><input class="field__input" [(ngModel)]="newVente.ordonnanceRef" placeholder="ORD-XXXX" /></div>
          <div class="fields-row">
            <div class="field"><label class="field__label">Montant total (FCFA)</label><input class="field__input" type="number" [(ngModel)]="newVente.montantTotal" /></div>
            <div class="field"><label class="field__label">Part INAM (FCFA)</label><input class="field__input" type="number" [(ngModel)]="newVente.montantInam" /></div>
          </div>
          <div class="field">
            <label class="field__label">Statut paiement</label>
            <select class="field__select" [(ngModel)]="newVente.statut">
              <option value="payé">Payé intégralement</option>
              <option value="inam">Pris en charge INAM</option>
              <option value="partiel">Paiement partiel</option>
            </select>
          </div>
        </div>
        <div class="modal__foot">
          <button class="btn btn--outline" (click)="showAddVente.set(false)">Annuler</button>
          <button class="btn btn--primary" (click)="saveVente()">Enregistrer</button>
        </div>
      </div>
    </div>
  }

  <!-- Modal : Demande INAM -->
  @if (showAddInam()) {
    <div class="modal-overlay" (click)="showAddInam.set(false)">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal__head">
          <span class="modal__title">Nouvelle demande INAM</span>
          <button class="modal__close" (click)="showAddInam.set(false)">✕</button>
        </div>
        <div class="modal__body">
          <div class="field"><label class="field__label">Patient</label><input class="field__input" [(ngModel)]="newInam.patient" placeholder="Nom du patient" /></div>
          <div class="field"><label class="field__label">Médicaments concernés</label><input class="field__input" [(ngModel)]="newInam.medicaments" placeholder="Liste des médicaments" /></div>
          <div class="field"><label class="field__label">Montant demandé (FCFA)</label><input class="field__input" type="number" [(ngModel)]="newInam.montant" /></div>
        </div>
        <div class="modal__foot">
          <button class="btn btn--outline" (click)="showAddInam.set(false)">Annuler</button>
          <button class="btn btn--primary" (click)="saveInam()">Soumettre</button>
        </div>
      </div>
    </div>
  }
</div>
  `
})
export class PharmacieComponent {
  constructor(private readonly store: CollabStoreService) {}

  activeTab = signal<'stocks' | 'ventes' | 'factures' | 'inam'>('stocks');
  showAddMed = signal(false);
  showAddVente = signal(false);
  showAddInam = signal(false);
  searchMed = '';

  medicaments = signal<Medicament[]>([
    { id: '1', nom: 'Paracétamol 500mg', dci: 'Paracétamol', forme: 'Comprimé', dosage: '500mg', stock: 250, seuil: 50, prixUnitaire: 200, fournisseur: 'Pharma CI', dateExpiration: '2025-12-31', inamPris: true, inamTaux: 70 },
    { id: '2', nom: 'Amoxicilline 500mg', dci: 'Amoxicilline', forme: 'Gélule', dosage: '500mg', stock: 12, seuil: 30, prixUnitaire: 350, fournisseur: 'MedSupply', dateExpiration: '2025-06-30', inamPris: true, inamTaux: 80 },
    { id: '3', nom: 'Ibuprofène 400mg', dci: 'Ibuprofène', forme: 'Comprimé', dosage: '400mg', stock: 180, seuil: 40, prixUnitaire: 250, fournisseur: 'Pharma CI', dateExpiration: '2026-03-15', inamPris: false, inamTaux: 0 },
    { id: '4', nom: 'Métronidazole 250mg', dci: 'Métronidazole', forme: 'Comprimé', dosage: '250mg', stock: 8, seuil: 20, prixUnitaire: 150, fournisseur: 'MedSupply', dateExpiration: '2025-09-01', inamPris: true, inamTaux: 60 },
  ]);

  ventes = signal<VenteMed[]>([
    { id: '1', date: '23/04/2026', patient: 'KONAN Marie', medicaments: 'Paracétamol x3, Ibuprofène x2', montantTotal: 1100, montantInam: 770, montantPatient: 330, statut: 'inam', ordonnanceRef: 'ORD-0012' },
    { id: '2', date: '23/04/2026', patient: 'KOFFI Jean', medicaments: 'Amoxicilline x10', montantTotal: 3500, montantInam: 2800, montantPatient: 700, statut: 'payé', ordonnanceRef: 'ORD-0011' },
    { id: '3', date: '22/04/2026', patient: 'BAMBA Fatoumata', medicaments: 'Métronidazole x6', montantTotal: 900, montantInam: 0, montantPatient: 900, statut: 'payé', ordonnanceRef: 'ORD-0010' },
  ]);

  demandesInam = signal<DemandeInam[]>([
    { id: '1', date: '23/04/2026', patient: 'KONAN Marie', medicaments: 'Paracétamol, Ibuprofène', montant: 770, statut: 'en attente', reference: 'INAM-2026-001' },
    { id: '2', date: '22/04/2026', patient: 'KOFFI Jean', medicaments: 'Amoxicilline', montant: 2800, statut: 'approuvé', reference: 'INAM-2026-002' },
  ]);

  newMed: Partial<Medicament> = this.blankMed();
  newVente: Partial<VenteMed> = this.blankVente();
  newInam: Partial<DemandeInam> = { patient: '', medicaments: '', montant: 0 };

  filteredMeds = computed(() => {
    const q = this.searchMed.toLowerCase();
    return this.medicaments().filter(m => !q || m.nom.toLowerCase().includes(q) || m.dci.toLowerCase().includes(q));
  });

  stocksBas         = computed(() => this.medicaments().filter(m => m.stock <= m.seuil).length);
  ventesJour        = computed(() => this.ventes().filter(v => v.date === new Date().toLocaleDateString('fr-FR')).length);
  demandesInamEnAttente = computed(() => this.demandesInam().filter(d => d.statut === 'en attente').length);
  montantInamMois   = computed(() => this.demandesInam().filter(d => d.statut === 'approuvé').reduce((s, d) => s + d.montant, 0));

  isExpired(date: string): boolean {
    return new Date(date) < new Date();
  }

  editMed(m: Medicament) { this.newMed = { ...m }; this.showAddMed.set(true); }

  saveMed() {
    if (!this.newMed.nom) return;
    const med = this.newMed as Medicament;
    if (!med.id) {
      med.id = Date.now().toString();
      this.medicaments.update(list => [...list, med]);
    } else {
      this.medicaments.update(list => list.map(m => m.id === med.id ? med : m));
    }
    this.newMed = this.blankMed();
    this.showAddMed.set(false);
  }

  saveVente() {
    if (!this.newVente.patient) return;
    const v = this.newVente as VenteMed;
    v.id = Date.now().toString();
    v.date = new Date().toLocaleDateString('fr-FR');
    v.montantPatient = (v.montantTotal ?? 0) - (v.montantInam ?? 0);
    this.ventes.update(list => [v, ...list]);
    this.newVente = this.blankVente();
    this.showAddVente.set(false);
  }

  saveInam() {
    if (!this.newInam.patient) return;
    const d: DemandeInam = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('fr-FR'),
      patient: this.newInam.patient!,
      medicaments: this.newInam.medicaments!,
      montant: this.newInam.montant!,
      statut: 'en attente',
      reference: `INAM-${new Date().getFullYear()}-${String(this.demandesInam().length + 1).padStart(3, '0')}`
    };
    this.demandesInam.update(list => [d, ...list]);
    this.newInam = { patient: '', medicaments: '', montant: 0 };
    this.showAddInam.set(false);
  }

  approuverInam(d: DemandeInam) {
    this.demandesInam.update(list => list.map(i => i.id === d.id ? { ...i, statut: 'approuvé' } : i));
  }

  printFacture(v: VenteMed) {
    const w = window.open('', '_blank')!;
    w.document.write(`<html><body style="font-family:Arial;padding:30px">
      <h2>FACTURE PHARMACIE - FACT-${v.id}</h2>
      <p><b>Date :</b> ${v.date}</p>
      <p><b>Patient :</b> ${v.patient}</p>
      <p><b>Médicaments :</b> ${v.medicaments}</p>
      <hr/>
      <p><b>Montant total :</b> ${v.montantTotal.toLocaleString('fr-FR')} FCFA</p>
      <p><b>Part INAM :</b> ${v.montantInam.toLocaleString('fr-FR')} FCFA</p>
      <p><b>Part patient :</b> ${v.montantPatient.toLocaleString('fr-FR')} FCFA</p>
      <p><b>Statut :</b> ${v.statut}</p>
    </body></html>`);
    w.print();
  }

  private blankMed(): Partial<Medicament> {
    return { nom: '', dci: '', forme: '', dosage: '', stock: 0, seuil: 10, prixUnitaire: 0, fournisseur: '', dateExpiration: '', inamPris: false, inamTaux: 0 };
  }
  private blankVente(): Partial<VenteMed> {
    return { patient: '', medicaments: '', montantTotal: 0, montantInam: 0, ordonnanceRef: '', statut: 'payé' };
  }
}
