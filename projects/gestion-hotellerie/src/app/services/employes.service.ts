import { Injectable, signal, computed } from '@angular/core';

export type Departement = 'Réception' | 'Ménage' | 'Restauration' | 'Sécurité' | 'Direction';
export type Contrat = 'CDI' | 'CDD' | 'Temps partiel' | 'Stagiaire';
export type StatutEmp = 'Actif' | 'En congé' | 'Arrêt maladie';
export type MotifDepart = 'Renvoi' | 'Démission' | 'Promotion' | 'Fin de contrat';

export interface Employe {
  id: number; matricule: string; nom: string; prenom: string;
  poste: string; departement: Departement; contrat: Contrat;
  statut: StatutEmp; salaire: number; dateEntree: string; tel: string; email: string;
  notes: string;
  actif: boolean;
  dateFinContrat?: string;
  motifDepart?: MotifDepart;
  noteDepart?: string;
}

const STORAGE_KEY = 'hotel_employes_v1';

const INITIAL: Employe[] = [
  { id:1,  matricule:'EMP-001', nom:'Kouassi',   prenom:'Adjoua',     poste:'Réceptionniste senior',    departement:'Réception',    contrat:'CDI',       statut:'Actif',        salaire:280000, dateEntree:'15/03/2021', tel:'+225 07 11 22 33', email:'a.kouassi@hotel.ci',   notes:'Responsable du shift matin.', actif:true },
  { id:2,  matricule:'EMP-002', nom:'Diallo',    prenom:'Mamadou',    poste:'Réceptionniste',            departement:'Réception',    contrat:'CDI',       statut:'Actif',        salaire:230000, dateEntree:'02/07/2022', tel:'+225 05 22 33 44', email:'m.diallo@hotel.ci',    notes:'', actif:true },
  { id:3,  matricule:'EMP-003', nom:'Yao',       prenom:'Bernadette', poste:'Femme de chambre',          departement:'Ménage',       contrat:'CDI',       statut:'En congé',     salaire:180000, dateEntree:'10/01/2020', tel:'+225 07 33 44 55', email:'',                     notes:'Congé maternité jusqu\'au 01/07/2025.', actif:true },
  { id:4,  matricule:'EMP-004', nom:'Traoré',    prenom:'Salif',      poste:'Valet de chambre',          departement:'Ménage',       contrat:'CDD',       statut:'Actif',        salaire:160000, dateEntree:'01/09/2023', tel:'+225 01 44 55 66', email:'',                     notes:'', actif:true },
  { id:5,  matricule:'EMP-005', nom:'Konaté',    prenom:'Fatoumata',  poste:'Chef cuisinier',            departement:'Restauration', contrat:'CDI',       statut:'Actif',        salaire:350000, dateEntree:'05/06/2019', tel:'+225 07 55 66 77', email:'f.konate@hotel.ci',    notes:'Formé à l\'École Hôtelière d\'Abidjan.', actif:true },
  { id:6,  matricule:'EMP-006', nom:'Bamba',     prenom:'Oumar',      poste:'Serveur',                   departement:'Restauration', contrat:'CDD',       statut:'Actif',        salaire:170000, dateEntree:'01/04/2024', tel:'+225 05 66 77 88', email:'',                     notes:'', actif:true },
  { id:7,  matricule:'EMP-007', nom:'Coulibaly', prenom:'Ibrahim',    poste:'Agent de sécurité',         departement:'Sécurité',     contrat:'CDI',       statut:'Actif',        salaire:200000, dateEntree:'20/11/2021', tel:'+225 07 77 88 99', email:'',                     notes:'', actif:true },
  { id:8,  matricule:'EMP-008', nom:'Sanogo',    prenom:'Moussa',     poste:'Agent de sécurité nuit',    departement:'Sécurité',     contrat:'CDI',       statut:'Arrêt maladie',salaire:200000, dateEntree:'14/02/2020', tel:'+225 01 88 99 00', email:'',                     notes:'Arrêt prolongé depuis mars 2025.', actif:true },
  { id:9,  matricule:'EMP-009', nom:'N\'Guessan',prenom:'Koffi',      poste:'Directeur adjoint',         departement:'Direction',    contrat:'CDI',       statut:'Actif',        salaire:620000, dateEntree:'01/01/2018', tel:'+225 07 99 00 11', email:'k.nguessan@hotel.ci',  notes:'', actif:true },
  { id:10, matricule:'EMP-010', nom:'Aka',       prenom:'Raïssa',     poste:'Stagiaire réception',       departement:'Réception',    contrat:'Stagiaire', statut:'Actif',        salaire:75000,  dateEntree:'03/03/2025', tel:'+225 05 00 11 22', email:'',                     notes:'', actif:true },
  { id:11, matricule:'EMP-011', nom:'Konan',     prenom:'Didier',     poste:'Serveur',                   departement:'Restauration', contrat:'CDD',       statut:'Actif',        salaire:165000, dateEntree:'01/06/2023', tel:'+225 07 12 23 34', email:'',                     notes:'', actif:false, dateFinContrat:'31/03/2025', motifDepart:'Fin de contrat', noteDepart:'CDD non renouvelé. Bon élément, à rappeler si besoin.' },
  { id:12, matricule:'EMP-012', nom:'Touré',     prenom:'Aïssatou',   poste:'Femme de chambre',          departement:'Ménage',       contrat:'CDI',       statut:'Actif',        salaire:180000, dateEntree:'10/05/2021', tel:'+225 05 34 45 56', email:'',                     notes:'', actif:false, dateFinContrat:'15/01/2025', motifDepart:'Démission',     noteDepart:'Départ pour suivre le conjoint à l\'étranger.' },
  { id:13, matricule:'EMP-013', nom:'Kone',      prenom:'Lacina',     poste:'Agent de sécurité',         departement:'Sécurité',     contrat:'CDI',       statut:'Actif',        salaire:200000, dateEntree:'02/03/2020', tel:'+225 07 56 67 78', email:'',                     notes:'', actif:false, dateFinContrat:'30/11/2024', motifDepart:'Renvoi',        noteDepart:'Abandon de poste répété malgré avertissements.' },
];

@Injectable({ providedIn: 'root' })
export class EmployesService {
  private _tous = signal<Employe[]>(this.load());

  readonly actifs  = computed(() => this._tous().filter(e => e.actif));
  readonly anciens = computed(() => this._tous().filter(e => !e.actif));
  readonly tous    = this._tous.asReadonly();

  private load(): Employe[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : INITIAL;
    } catch { return INITIAL; }
  }

  private save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(this._tous())); }

  ajouter(data: Omit<Employe, 'id' | 'matricule' | 'actif' | 'notes'>) {
    const ids = this._tous().map(e => e.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    this._tous.update(list => [...list, {
      ...data, id, matricule: `EMP-${String(id).padStart(3,'0')}`, actif: true, notes: ''
    }]);
    this.save();
  }

  modifier(id: number, changes: Partial<Employe>) {
    this._tous.update(list => list.map(e => e.id === id ? { ...e, ...changes } : e));
    this.save();
  }

  cloturerContrat(id: number, motif: MotifDepart, noteDepart: string) {
    const today = new Date().toLocaleDateString('fr-FR');
    this._tous.update(list => list.map(e =>
      e.id === id ? { ...e, actif: false, dateFinContrat: today, motifDepart: motif, noteDepart } : e
    ));
    this.save();
  }

  toggleConge(id: number) {
    this._tous.update(list => list.map(e => {
      if (e.id !== id) return e;
      return { ...e, statut: e.statut === 'En congé' ? 'Actif' : 'En congé' as StatutEmp };
    }));
    this.save();
  }

  updateNote(id: number, notes: string) {
    this._tous.update(list => list.map(e => e.id === id ? { ...e, notes } : e));
    this.save();
  }

  reactiver(id: number) {
    this._tous.update(list => list.map(e =>
      e.id === id ? { ...e, actif: true, statut: 'Actif', dateFinContrat: undefined, motifDepart: undefined, noteDepart: undefined } : e
    ));
    this.save();
  }
}
