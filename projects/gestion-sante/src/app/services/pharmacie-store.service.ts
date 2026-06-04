import { Injectable, computed, signal } from '@angular/core';

export type PharmacieRole = 'pharmacien' | 'hr' | 'owner';
export type VenteStatut = 'payé' | 'inam' | 'partiel';
export type InamStatut = 'en attente' | 'approuvé' | 'rejeté';

export interface SoinLigne {
  date: string;
  nature: string;
  code: string;
  prixRemboursement: number;
  montantInam: number;
  montantBeneficiaire: number;
}

export interface FeuilleSoins {
  id: string;
  reference: string;
  dateCreation: string;
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
}

export interface Medicament {
  id: string;
  nom: string;
  dci: string;
  forme: string;
  dosage: string;
  stock: number;
  seuil: number;
  prixUnitaire: number;
  fournisseur: string;
  dateExpiration: string;
  inamPris: boolean;
  inamTaux: number;
}

export interface VenteMed {
  id: string;
  date: string;
  patient: string;
  medicaments: string;
  montantTotal: number;
  montantInam: number;
  montantPatient: number;
  statut: VenteStatut;
  ordonnanceRef: string;
}

export interface DemandeInam {
  id: string;
  date: string;
  patient: string;
  medicaments: string;
  montant: number;
  statut: InamStatut;
  reference: string;
}

const STORAGE_KEY = 'gestion-sante_pharmacie_state';

@Injectable({ providedIn: 'root' })
export class PharmacieStoreService {
  readonly medicaments = signal<Medicament[]>([
    { id: '1', nom: 'Paracétamol 500mg', dci: 'Paracétamol', forme: 'Comprimé', dosage: '500mg', stock: 250, seuil: 50, prixUnitaire: 200, fournisseur: 'Pharma CI', dateExpiration: '2025-12-31', inamPris: true, inamTaux: 70 },
    { id: '2', nom: 'Amoxicilline 500mg', dci: 'Amoxicilline', forme: 'Gélule', dosage: '500mg', stock: 12, seuil: 30, prixUnitaire: 350, fournisseur: 'MedSupply', dateExpiration: '2025-06-30', inamPris: true, inamTaux: 80 },
    { id: '3', nom: 'Ibuprofène 400mg', dci: 'Ibuprofène', forme: 'Comprimé', dosage: '400mg', stock: 180, seuil: 40, prixUnitaire: 250, fournisseur: 'Pharma CI', dateExpiration: '2026-03-15', inamPris: false, inamTaux: 0 },
    { id: '4', nom: 'Métronidazole 250mg', dci: 'Métronidazole', forme: 'Comprimé', dosage: '250mg', stock: 8, seuil: 20, prixUnitaire: 150, fournisseur: 'MedSupply', dateExpiration: '2025-09-01', inamPris: true, inamTaux: 60 },
  ]);

  readonly ventes = signal<VenteMed[]>([
    { id: '1', date: '23/04/2026', patient: 'KONAN Marie', medicaments: 'Paracétamol x3, Ibuprofène x2', montantTotal: 1100, montantInam: 770, montantPatient: 330, statut: 'inam', ordonnanceRef: 'ORD-0012' },
    { id: '2', date: '23/04/2026', patient: 'KOFFI Jean', medicaments: 'Amoxicilline x10', montantTotal: 3500, montantInam: 2800, montantPatient: 700, statut: 'payé', ordonnanceRef: 'ORD-0011' },
    { id: '3', date: '22/04/2026', patient: 'BAMBA Fatoumata', medicaments: 'Métronidazole x6', montantTotal: 900, montantInam: 0, montantPatient: 900, statut: 'payé', ordonnanceRef: 'ORD-0010' },
  ]);

  readonly demandesInam = signal<DemandeInam[]>([
    { id: '1', date: '23/04/2026', patient: 'KONAN Marie', medicaments: 'Paracétamol, Ibuprofène', montant: 770, statut: 'en attente', reference: 'INAM-2026-001' },
    { id: '2', date: '22/04/2026', patient: 'KOFFI Jean', medicaments: 'Amoxicilline', montant: 2800, statut: 'approuvé', reference: 'INAM-2026-002' },
  ]);

  readonly feuillesSoins = signal<FeuilleSoins[]>([
    {
      id: '1',
      reference: 'SOINS-2026-001',
      dateCreation: '23/04/2026 08:45',
      regime: 'AMO',
      patient: { nom: 'KONAN', prenoms: 'Marie', dateNaissance: '1991-03-18', numeroInam: 'INAM-45872' },
      prescripteur: { nom: 'Dr. Diallo', code: 'MED-014', codeFormation: 'CF-2201', accident: false, grossesse: true },
      soins: [
        { date: '23/04/2026', nature: 'Consultation générale', code: 'C001', prixRemboursement: 5000, montantInam: 3500, montantBeneficiaire: 1500 },
        { date: '23/04/2026', nature: 'Échographie de contrôle', code: 'ECH-03', prixRemboursement: 12000, montantInam: 8400, montantBeneficiaire: 3600 },
      ],
      pharmacie: { code1: 'PH-001', code2: 'PH-002', dateDelivrance1: '23/04/2026', dateDelivrance2: '23/04/2026' },
    },
    {
      id: '2',
      reference: 'SOINS-2026-002',
      dateCreation: '22/04/2026 14:10',
      regime: 'CNAM',
      patient: { nom: 'TRAORE', prenoms: 'Boubacar', dateNaissance: '1987-11-02', numeroInam: 'INAM-55201' },
      prescripteur: { nom: 'Dr. Touré', code: 'MED-021', codeFormation: 'CF-2299', accident: false, grossesse: false },
      soins: [
        { date: '22/04/2026', nature: 'Biologie de routine', code: 'BIO-11', prixRemboursement: 15000, montantInam: 9000, montantBeneficiaire: 6000 },
      ],
      pharmacie: { code1: 'PH-003', code2: '', dateDelivrance1: '22/04/2026', dateDelivrance2: '' },
    },
  ]);

  readonly medicamentsCount = computed(() => this.medicaments().length);
  readonly stocksBas = computed(() => this.medicaments().filter(m => m.stock <= m.seuil).length);
  readonly ventesToday = computed(() => this.ventes().filter(v => v.date === new Date().toLocaleDateString('fr-FR')).length);
  readonly demandesInamEnAttente = computed(() => this.demandesInam().filter(d => d.statut === 'en attente').length);
  readonly montantInamApprouve = computed(() => this.demandesInam().filter(d => d.statut === 'approuvé').reduce((total, item) => total + item.montant, 0));
  readonly feuillesSoinsCount = computed(() => this.feuillesSoins().length);

  constructor() { this.loadState(); }

  saveMed(med: Medicament): void {
    const list = this.medicaments();
    if (list.some(item => item.id === med.id)) {
      this.medicaments.set(list.map(item => item.id === med.id ? med : item));
    } else {
      this.medicaments.set([med, ...list]);
    }
    this.saveState();
  }

  saveVente(vente: VenteMed): void {
    this.ventes.set([vente, ...this.ventes()]);
    this.saveState();
  }

  saveInam(demande: DemandeInam): void {
    this.demandesInam.set([demande, ...this.demandesInam()]);
    this.saveState();
  }

  approuverInam(id: string): void {
    this.demandesInam.update(list => list.map(item => item.id === id ? { ...item, statut: 'approuvé' } : item));
    this.saveState();
  }

  saveFeuilleSoins(feuille: FeuilleSoins): void {
    const list = this.feuillesSoins();
    if (list.some(item => item.id === feuille.id)) {
      this.feuillesSoins.set(list.map(item => item.id === feuille.id ? feuille : item));
    } else {
      this.feuillesSoins.set([feuille, ...list]);
    }
    this.saveState();
  }

  deleteFeuilleSoins(id: string): void {
    this.feuillesSoins.update(list => list.filter(item => item.id !== id));
    this.saveState();
  }

  generateFeuilleReference(): string {
    return `SOINS-${new Date().getFullYear()}-${String(this.feuillesSoins().length + 1).padStart(3, '0')}`;
  }

  private loadState(): void {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      this.saveState();
      return;
    }
    try {
      const payload = JSON.parse(stored) as { medicaments?: Medicament[]; ventes?: VenteMed[]; demandesInam?: DemandeInam[]; feuillesSoins?: FeuilleSoins[] };
      if (payload.medicaments) this.medicaments.set(payload.medicaments);
      if (payload.ventes) this.ventes.set(payload.ventes);
      if (payload.demandesInam) this.demandesInam.set(payload.demandesInam);
      if (payload.feuillesSoins) this.feuillesSoins.set(payload.feuillesSoins);
    } catch {
      this.saveState();
    }
  }

  private saveState(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      medicaments: this.medicaments(),
      ventes: this.ventes(),
      demandesInam: this.demandesInam(),
      feuillesSoins: this.feuillesSoins()
    }));
  }

  generateInamReference(): string {
    return `INAM-${new Date().getFullYear()}-${String(this.demandesInam().length + 1).padStart(3, '0')}`;
  }
}
