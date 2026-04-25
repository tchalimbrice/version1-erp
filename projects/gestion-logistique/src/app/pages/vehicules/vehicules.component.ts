import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

type TypeVehicule = 'Camion porteur' | 'Semi-remorque' | 'Frigorifique' | 'Camionnette' | 'Fourgon' | 'Tracteur';
type StatutVehicule = 'Disponible' | 'En mission' | 'En entretien' | 'En panne' | 'Hors service';

interface Vehicule {
  id: string; immatriculation: string; type: TypeVehicule; marque: string;
  capacite: number; chauffeur: string; statut: StatutVehicule;
  kmTotal: number; dateEntretien: string; prochainEntretien: string;
  assuranceExpiration: string; notes: string;
}

@Component({ selector: 'app-vehicules', standalone: true, imports: [CommonModule, FormsModule],
  templateUrl: './vehicules.component.html', styleUrl: './vehicules.component.scss' })
export class VehiculesComponent {
  activeTab = signal<'tout'|'dispo'|'mission'|'maintenance'>('tout');
  showForm  = signal(false);
  form: Omit<Vehicule,'id'> = this.empty();

  vehicules: Vehicule[] = [
    {id:'1',  immatriculation:'11 BF 2201', type:'Camion porteur',  marque:'MAN TGS 26.480',    capacite:15000, chauffeur:'Koné Seydou',      statut:'En mission',   kmTotal:182400, dateEntretien:'2024-03-01', prochainEntretien:'2024-06-01', assuranceExpiration:'2025-01-15', notes:''},
    {id:'2',  immatriculation:'11 BF 2202', type:'Camion porteur',  marque:'MAN TGS 26.480',    capacite:15000, chauffeur:'Nikiéma Lassina', statut:'Disponible',   kmTotal:145200, dateEntretien:'2024-03-15', prochainEntretien:'2024-06-15', assuranceExpiration:'2025-02-20', notes:''},
    {id:'3',  immatriculation:'11 BF 2203', type:'Camion porteur',  marque:'Mercedes Actros',   capacite:18000, chauffeur:'Traoré Karim',     statut:'En mission',   kmTotal:220100, dateEntretien:'2024-02-20', prochainEntretien:'2024-05-20', assuranceExpiration:'2024-12-31', notes:'Vidange à faire'},
    {id:'4',  immatriculation:'11 BF 2204', type:'Semi-remorque',   marque:'Volvo FH 500',      capacite:28000, chauffeur:'Barry Moussa',     statut:'Disponible',   kmTotal:310500, dateEntretien:'2024-04-01', prochainEntretien:'2024-07-01', assuranceExpiration:'2025-03-10', notes:''},
    {id:'5',  immatriculation:'11 BF 2205', type:'Camion porteur',  marque:'MAN TGX 18.460',    capacite:12000, chauffeur:'Zongo Firmin',     statut:'En mission',   kmTotal:98700,  dateEntretien:'2024-02-10', prochainEntretien:'2024-05-10', assuranceExpiration:'2024-11-30', notes:''},
    {id:'6',  immatriculation:'11 BF 2206', type:'Camion porteur',  marque:'Renault T 480',     capacite:14000, chauffeur:'Ouédraogo Marc',   statut:'Disponible',   kmTotal:167800, dateEntretien:'2024-03-25', prochainEntretien:'2024-06-25', assuranceExpiration:'2025-04-05', notes:''},
    {id:'7',  immatriculation:'11 BF 2207', type:'Fourgon',         marque:'Mercedes Sprinter', capacite:1500,  chauffeur:'Compaoré Yvan',    statut:'Disponible',   kmTotal:54300,  dateEntretien:'2024-04-10', prochainEntretien:'2024-10-10', assuranceExpiration:'2025-01-20', notes:''},
    {id:'8',  immatriculation:'11 BF 2208', type:'Semi-remorque',   marque:'DAF XF 530',        capacite:28000, chauffeur:'Diallo Ibou',      statut:'En mission',   kmTotal:425000, dateEntretien:'2024-03-10', prochainEntretien:'2024-06-10', assuranceExpiration:'2025-05-12', notes:''},
    {id:'9',  immatriculation:'11 BF 2209', type:'Frigorifique',    marque:'Iveco Daily +7°',   capacite:5000,  chauffeur:'—',                statut:'En entretien', kmTotal:88400,  dateEntretien:'2024-04-18', prochainEntretien:'2024-07-18', assuranceExpiration:'2025-02-14', notes:'Révision compresseur froid'},
    {id:'10', immatriculation:'11 BF 2210', type:'Camionnette',     marque:'Toyota Hilux',      capacite:1000,  chauffeur:'Kaboré Rasmané',   statut:'Disponible',   kmTotal:72100,  dateEntretien:'2024-02-28', prochainEntretien:'2024-05-28', assuranceExpiration:'2024-10-15', notes:'Assurance à renouveler'},
    {id:'11', immatriculation:'11 BF 2211', type:'Camion porteur',  marque:'Scania R 450',      capacite:16000, chauffeur:'—',                statut:'En panne',     kmTotal:198300, dateEntretien:'2024-01-15', prochainEntretien:'2024-04-15', assuranceExpiration:'2025-01-08', notes:'Boîte de vitesse HS'},
    {id:'12', immatriculation:'11 BF 2212', type:'Tracteur',        marque:'MAN TGX 18.460',    capacite:25000, chauffeur:'Sawadogo Sylvain', statut:'Disponible',   kmTotal:251000, dateEntretien:'2024-04-05', prochainEntretien:'2024-07-05', assuranceExpiration:'2025-06-30', notes:''},
  ];

  get filtered(): Vehicule[] {
    const t = this.activeTab();
    if (t === 'dispo')       return this.vehicules.filter(v => v.statut === 'Disponible');
    if (t === 'mission')     return this.vehicules.filter(v => v.statut === 'En mission');
    if (t === 'maintenance') return this.vehicules.filter(v => v.statut === 'En entretien' || v.statut === 'En panne' || v.statut === 'Hors service');
    return this.vehicules;
  }

  get disponibles(): number { return this.vehicules.filter(v => v.statut === 'Disponible').length; }
  get enMission(): number   { return this.vehicules.filter(v => v.statut === 'En mission').length; }
  get enMaintenance(): number { return this.vehicules.filter(v => v.statut === 'En entretien' || v.statut === 'En panne').length; }

  statutClass(s: StatutVehicule): string {
    const m: Record<StatutVehicule, string> = {
      'Disponible':   'badge badge--green',
      'En mission':   'badge badge--blue',
      'En entretien': 'badge badge--yellow',
      'En panne':     'badge badge--red',
      'Hors service': 'badge badge--gray',
    };
    return m[s];
  }

  addVehicule() {
    if (!this.form.immatriculation) return;
    this.vehicules.unshift({ id: Date.now().toString(), ...this.form });
    this.form = this.empty(); this.showForm.set(false);
  }

  private empty(): Omit<Vehicule,'id'> {
    return { immatriculation:'', type:'Camion porteur', marque:'', capacite:0, chauffeur:'', statut:'Disponible', kmTotal:0, dateEntretien:'', prochainEntretien:'', assuranceExpiration:'', notes:'' };
  }

  readonly types: TypeVehicule[] = ['Camion porteur','Semi-remorque','Frigorifique','Camionnette','Fourgon','Tracteur'];
  readonly statuts: StatutVehicule[] = ['Disponible','En mission','En entretien','En panne','Hors service'];
  constructor(public readonly store: CollabStoreService) {}
}
