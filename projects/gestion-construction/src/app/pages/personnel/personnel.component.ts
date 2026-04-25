import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

type Poste = 'Maçon' | 'Ferrailleur' | 'Coffreur' | 'Plombier' | 'Électricien' | 'Carreleur' | 'Peintre' | 'Conducteur engin' | 'Chef d\'équipe' | 'Conducteur de travaux' | 'Ingénieur' | 'Géomètre' | 'Gardien';
type Contrat = 'CDI' | 'CDD' | 'Journalier' | 'Sous-traitance';
type StatutEmp = 'Actif' | 'En congé' | 'Absent' | 'Fin de contrat';

interface Employe {
  id: string;
  matricule: string;
  nom: string;
  prenom: string;
  poste: Poste;
  chantier: string;
  contrat: Contrat;
  dateEntree: string;
  salaire: number;
  statut: StatutEmp;
  telephone: string;
}

@Component({
  selector: 'app-personnel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personnel.component.html',
  styleUrl: './personnel.component.scss'
})
export class PersonnelComponent {
  activeTab = signal<'tout' | 'actif' | 'conge'>('tout');
  showForm  = signal(false);
  search    = signal('');

  form: Omit<Employe, 'id' | 'matricule'> = this.emptyForm();

  employes: Employe[] = [
    { id:'1',  matricule:'EMP-001', nom:'Kouamé',   prenom:'Jean',     poste:'Conducteur de travaux',contrat:'CDI',       chantier:'CH-001', dateEntree:'2020-03-01', salaire:350000, statut:'Actif',       telephone:'70 11 22 33' },
    { id:'2',  matricule:'EMP-002', nom:'Traoré',   prenom:'Ibrahim',  poste:'Conducteur de travaux',contrat:'CDI',       chantier:'CH-002', dateEntree:'2019-06-15', salaire:380000, statut:'Actif',       telephone:'70 22 33 44' },
    { id:'3',  matricule:'EMP-003', nom:'Sawadogo', prenom:'Paul',     poste:'Ingénieur',            contrat:'CDI',       chantier:'CH-003', dateEntree:'2018-01-10', salaire:520000, statut:'Actif',       telephone:'70 33 44 55' },
    { id:'4',  matricule:'EMP-004', nom:'Diallo',   prenom:'Moussa',   poste:'Géomètre',             contrat:'CDI',       chantier:'CH-004', dateEntree:'2021-09-01', salaire:290000, statut:'Actif',       telephone:'70 44 55 66' },
    { id:'5',  matricule:'EMP-005', nom:'Ouédraogo',prenom:'Serge',    poste:'Chef d\'équipe',       contrat:'CDI',       chantier:'CH-005', dateEntree:'2022-02-01', salaire:260000, statut:'Actif',       telephone:'70 55 66 77' },
    { id:'6',  matricule:'EMP-006', nom:'Kaboré',   prenom:'Rasmané',  poste:'Maçon',                contrat:'CDD',       chantier:'CH-001', dateEntree:'2024-01-15', salaire:180000, statut:'Actif',       telephone:'70 66 77 88' },
    { id:'7',  matricule:'EMP-007', nom:'Zongo',    prenom:'Clément',  poste:'Ferrailleur',          contrat:'CDD',       chantier:'CH-002', dateEntree:'2024-02-01', salaire:160000, statut:'Actif',       telephone:'70 77 88 99' },
    { id:'8',  matricule:'EMP-008', nom:'Barry',    prenom:'Souleymane',poste:'Plombier',            contrat:'CDI',       chantier:'CH-001', dateEntree:'2023-05-01', salaire:200000, statut:'En congé',     telephone:'70 88 99 00' },
    { id:'9',  matricule:'EMP-009', nom:'Compaoré', prenom:'Aïcha',    poste:'Électricien',          contrat:'CDI',       chantier:'CH-002', dateEntree:'2022-11-01', salaire:220000, statut:'Actif',       telephone:'70 99 00 11' },
    { id:'10', matricule:'EMP-010', nom:'Nikiéma',  prenom:'Théodore', poste:'Conducteur engin',     contrat:'CDI',       chantier:'CH-003', dateEntree:'2021-03-15', salaire:240000, statut:'Actif',       telephone:'71 11 22 33' },
    { id:'11', matricule:'EMP-011', nom:'Ouattara', prenom:'Safiatou', poste:'Maçon',                contrat:'Journalier',chantier:'CH-004', dateEntree:'2024-03-01', salaire:6000,   statut:'Absent',       telephone:'71 22 33 44' },
    { id:'12', matricule:'EMP-012', nom:'Tapsoba',  prenom:'Grégoire', poste:'Carreleur',            contrat:'CDD',       chantier:'CH-005', dateEntree:'2024-01-20', salaire:175000, statut:'Actif',       telephone:'71 33 44 55' },
  ];

  get filtered(): Employe[] {
    let list = this.employes;
    const q = this.search().toLowerCase();
    if (q) list = list.filter(e => `${e.nom} ${e.prenom} ${e.matricule} ${e.poste}`.toLowerCase().includes(q));
    const t = this.activeTab();
    if (t === 'actif') list = list.filter(e => e.statut === 'Actif');
    if (t === 'conge') list = list.filter(e => e.statut === 'En congé' || e.statut === 'Absent');
    return list;
  }

  get actifs(): number { return this.employes.filter(e => e.statut === 'Actif').length; }
  get massesSalariale(): number { return this.employes.filter(e => e.statut === 'Actif').reduce((s, e) => s + e.salaire, 0); }

  formatMoney(n: number): string {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + ' M';
    if (n >= 1_000)     return (n / 1_000).toFixed(0) + ' K';
    return n.toString();
  }

  statutClass(s: StatutEmp): string {
    const m: Record<StatutEmp, string> = {
      'Actif':          'badge badge--green',
      'En congé':       'badge badge--blue',
      'Absent':         'badge badge--yellow',
      'Fin de contrat': 'badge badge--gray',
    };
    return m[s];
  }

  addEmploye() {
    if (!this.form.nom || !this.form.prenom) return;
    const num = this.employes.length + 1;
    const matricule = 'EMP-' + String(num).padStart(3, '0');
    this.employes.unshift({ id: Date.now().toString(), matricule, ...this.form });
    this.form = this.emptyForm();
    this.showForm.set(false);
  }

  private emptyForm(): Omit<Employe, 'id' | 'matricule'> {
    return { nom: '', prenom: '', poste: 'Maçon', chantier: '', contrat: 'CDD', dateEntree: '', salaire: 0, statut: 'Actif', telephone: '' };
  }

  readonly postes: Poste[] = ['Maçon', 'Ferrailleur', 'Coffreur', 'Plombier', 'Électricien', 'Carreleur', 'Peintre', 'Conducteur engin', 'Chef d\'équipe', 'Conducteur de travaux', 'Ingénieur', 'Géomètre', 'Gardien'];
  readonly contrats: Contrat[] = ['CDI', 'CDD', 'Journalier', 'Sous-traitance'];
  readonly statuts: StatutEmp[] = ['Actif', 'En congé', 'Absent', 'Fin de contrat'];

  constructor(public readonly store: CollabStoreService) {}
}
