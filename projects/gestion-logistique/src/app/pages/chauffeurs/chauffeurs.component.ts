import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

type StatutChauffeur = 'Actif' | 'En mission' | 'En congé' | 'Suspendu' | 'Fin de contrat';

interface Chauffeur {
  id: string; matricule: string; nom: string; prenom: string;
  telephone: string; permis: string; permisExpiration: string;
  vehicule: string; kmTotal: number; livraisons: number;
  salaire: number; statut: StatutChauffeur; notes: string;
}

@Component({ selector: 'app-chauffeurs', standalone: true, imports: [CommonModule, FormsModule],
  templateUrl: './chauffeurs.component.html', styleUrl: './chauffeurs.component.scss' })
export class ChauffeursComponent {
  showForm = signal(false);
  search   = signal('');
  form: Omit<Chauffeur,'id'|'matricule'> = this.empty();

  chauffeurs: Chauffeur[] = [
    {id:'1',  matricule:'CH-001', nom:'Koné',      prenom:'Seydou',   telephone:'70 11 22 33', permis:'CE',  permisExpiration:'2026-03-15', vehicule:'11 BF 2201', kmTotal:182400, livraisons:312, salaire:280000, statut:'En mission',   notes:''},
    {id:'2',  matricule:'CH-002', nom:'Nikiéma',   prenom:'Lassina',  telephone:'70 22 33 44', permis:'CE',  permisExpiration:'2025-11-20', vehicule:'11 BF 2202', kmTotal:145200, livraisons:248, salaire:265000, statut:'Actif',         notes:''},
    {id:'3',  matricule:'CH-003', nom:'Traoré',    prenom:'Karim',    telephone:'70 33 44 55', permis:'CE',  permisExpiration:'2025-08-10', vehicule:'11 BF 2203', kmTotal:220100, livraisons:380, salaire:285000, statut:'En mission',   notes:'Permis à renouveler bientôt'},
    {id:'4',  matricule:'CH-004', nom:'Barry',     prenom:'Moussa',   telephone:'70 44 55 66', permis:'CE+', permisExpiration:'2027-01-05', vehicule:'11 BF 2204', kmTotal:310500, livraisons:520, salaire:310000, statut:'Actif',         notes:'Senior — longues distances'},
    {id:'5',  matricule:'CH-005', nom:'Zongo',     prenom:'Firmin',   telephone:'70 55 66 77', permis:'C',   permisExpiration:'2026-05-22', vehicule:'11 BF 2205', kmTotal:98700,  livraisons:165, salaire:240000, statut:'En mission',   notes:''},
    {id:'6',  matricule:'CH-006', nom:'Ouédraogo', prenom:'Marc',     telephone:'70 66 77 88', permis:'CE',  permisExpiration:'2025-12-30', vehicule:'11 BF 2206', kmTotal:167800, livraisons:285, salaire:270000, statut:'Actif',         notes:''},
    {id:'7',  matricule:'CH-007', nom:'Compaoré',  prenom:'Yvan',     telephone:'70 77 88 99', permis:'B',   permisExpiration:'2027-06-18', vehicule:'11 BF 2207', kmTotal:54300,  livraisons:210, salaire:185000, statut:'Actif',         notes:'Livraisons urbaines uniquement'},
    {id:'8',  matricule:'CH-008', nom:'Diallo',    prenom:'Ibou',     telephone:'70 88 99 00', permis:'CE+', permisExpiration:'2026-09-14', vehicule:'11 BF 2208', kmTotal:425000, livraisons:680, salaire:320000, statut:'En mission',   notes:'International — Côte d\'Ivoire/Burkina'},
    {id:'9',  matricule:'CH-009', nom:'Kaboré',    prenom:'Rasmané',  telephone:'71 11 22 33', permis:'B',   permisExpiration:'2025-04-30', vehicule:'11 BF 2210', kmTotal:72100,  livraisons:145, salaire:175000, statut:'En congé',      notes:'Congé annuel'},
    {id:'10', matricule:'CH-010', nom:'Sawadogo',  prenom:'Sylvain',  telephone:'71 22 33 44', permis:'CE+', permisExpiration:'2027-02-28', vehicule:'11 BF 2212', kmTotal:251000, livraisons:430, salaire:305000, statut:'Actif',         notes:''},
  ];

  get filtered(): Chauffeur[] {
    const q = this.search().toLowerCase();
    if (!q) return this.chauffeurs;
    return this.chauffeurs.filter(c => `${c.nom} ${c.prenom} ${c.matricule} ${c.vehicule}`.toLowerCase().includes(q));
  }

  get actifs(): number { return this.chauffeurs.filter(c => c.statut === 'Actif' || c.statut === 'En mission').length; }
  get masseSalariale(): number { return this.chauffeurs.filter(c => c.statut !== 'Fin de contrat').reduce((s,c) => s + c.salaire, 0); }

  fmt(n: number): string { return n >= 1_000_000 ? (n/1_000_000).toFixed(2)+' M' : n >= 1_000 ? (n/1_000).toFixed(0)+' K' : n.toString(); }

  statutClass(s: StatutChauffeur): string {
    const m: Record<StatutChauffeur, string> = {
      'Actif':          'badge badge--green',
      'En mission':     'badge badge--blue',
      'En congé':       'badge badge--yellow',
      'Suspendu':       'badge badge--red',
      'Fin de contrat': 'badge badge--gray',
    };
    return m[s];
  }

  addChauffeur() {
    if (!this.form.nom) return;
    const num = this.chauffeurs.length + 1;
    this.chauffeurs.unshift({ id: Date.now().toString(), matricule: 'CH-' + String(num).padStart(3,'0'), ...this.form });
    this.form = this.empty(); this.showForm.set(false);
  }

  private empty(): Omit<Chauffeur,'id'|'matricule'> {
    return { nom:'', prenom:'', telephone:'', permis:'C', permisExpiration:'', vehicule:'', kmTotal:0, livraisons:0, salaire:0, statut:'Actif', notes:'' };
  }

  readonly statuts: StatutChauffeur[] = ['Actif','En mission','En congé','Suspendu','Fin de contrat'];
  constructor(public readonly store: CollabStoreService) {}
}
