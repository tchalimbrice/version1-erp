import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

type TypeEngin = 'Pelleteuse' | 'Bulldozer' | 'Grue' | 'Camion benne' | 'Bétonière' | 'Compacteur' | 'Nacelle' | 'Chargeuse' | 'Niveleuse' | 'Camion malaxeur';
type StatutEngin = 'Opérationnel' | 'En chantier' | 'En entretien' | 'En panne' | 'Loué' | 'Hors service';

interface Engin {
  id: string;
  reference: string;
  type: TypeEngin;
  marque: string;
  immatriculation: string;
  chantier: string;
  chauffeur: string;
  statut: StatutEngin;
  dateEntretien: string;
  prochainEntretien: string;
  notes: string;
}

@Component({
  selector: 'app-engins',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './engins.component.html',
  styleUrl: './engins.component.scss'
})
export class EnginsComponent {
  activeTab = signal<'tout' | 'operationnel' | 'maintenance'>('tout');
  showForm  = signal(false);

  form: Omit<Engin, 'id' | 'reference'> = this.emptyForm();

  engins: Engin[] = [
    { id:'1',  reference:'ENG-001', type:'Pelleteuse',      marque:'Caterpillar 320', immatriculation:'11 BF 4521', chantier:'CH-004', chauffeur:'Nikiéma Théodore', statut:'En chantier',  dateEntretien:'2024-02-15', prochainEntretien:'2024-05-15', notes:'' },
    { id:'2',  reference:'ENG-002', type:'Camion benne',    marque:'MAN TGS 6x4',    immatriculation:'11 BF 4522', chantier:'CH-001', chauffeur:'Ouédraogo Sami',   statut:'En chantier',  dateEntretien:'2024-03-01', prochainEntretien:'2024-06-01', notes:'' },
    { id:'3',  reference:'ENG-003', type:'Camion benne',    marque:'MAN TGS 6x4',    immatriculation:'11 BF 4523', chantier:'CH-003', chauffeur:'Barry Abou',       statut:'En chantier',  dateEntretien:'2024-03-01', prochainEntretien:'2024-06-01', notes:'' },
    { id:'4',  reference:'ENG-004', type:'Grue',            marque:'Liebherr LTM 100',immatriculation:'11 BF 4524', chantier:'CH-002', chauffeur:'Compaoré Lamine',  statut:'En chantier',  dateEntretien:'2024-01-20', prochainEntretien:'2024-04-20', notes:'Vérification câbles prévue' },
    { id:'5',  reference:'ENG-005', type:'Bétonière',       marque:'Altrad 350L',    immatriculation:'—',          chantier:'CH-001', chauffeur:'—',                statut:'En chantier',  dateEntretien:'2024-02-01', prochainEntretien:'2024-05-01', notes:'' },
    { id:'6',  reference:'ENG-006', type:'Bétonière',       marque:'Altrad 350L',    immatriculation:'—',          chantier:'CH-005', chauffeur:'—',                statut:'En chantier',  dateEntretien:'2024-02-01', prochainEntretien:'2024-05-01', notes:'' },
    { id:'7',  reference:'ENG-007', type:'Compacteur',      marque:'Bomag BW 213',   immatriculation:'11 BF 4525', chantier:'CH-003', chauffeur:'Tapsoba Michel',   statut:'En chantier',  dateEntretien:'2024-01-10', prochainEntretien:'2024-04-10', notes:'' },
    { id:'8',  reference:'ENG-008', type:'Chargeuse',       marque:'Komatsu WA380',  immatriculation:'11 BF 4526', chantier:'—',      chauffeur:'—',                statut:'En entretien', dateEntretien:'2024-03-20', prochainEntretien:'2024-06-20', notes:'Remplacement filtre hydraulique' },
    { id:'9',  reference:'ENG-009', type:'Bulldozer',       marque:'Caterpillar D6T', immatriculation:'11 BF 4527', chantier:'—',      chauffeur:'—',                statut:'En panne',     dateEntretien:'2024-01-05', prochainEntretien:'2024-04-05', notes:'Boîte de vitesse défaillante' },
    { id:'10', reference:'ENG-010', type:'Nacelle',         marque:'Haulotte HA18',  immatriculation:'—',          chantier:'CH-002', chauffeur:'—',                statut:'Opérationnel', dateEntretien:'2024-03-10', prochainEntretien:'2024-09-10', notes:'' },
    { id:'11', reference:'ENG-011', type:'Niveleuse',       marque:'Caterpillar 140K',immatriculation:'11 BF 4528', chantier:'CH-003', chauffeur:'Ouédraogo Flavien',statut:'En chantier',  dateEntretien:'2024-02-20', prochainEntretien:'2024-05-20', notes:'' },
    { id:'12', reference:'ENG-012', type:'Camion malaxeur', marque:'Mercedes Axor',  immatriculation:'11 BF 4529', chantier:'—',      chauffeur:'—',                statut:'En entretien', dateEntretien:'2024-04-01', prochainEntretien:'2024-07-01', notes:'Vidange générale' },
  ];

  get filtered(): Engin[] {
    const t = this.activeTab();
    if (t === 'operationnel') return this.engins.filter(e => e.statut === 'Opérationnel' || e.statut === 'En chantier');
    if (t === 'maintenance')  return this.engins.filter(e => e.statut === 'En entretien' || e.statut === 'En panne' || e.statut === 'Hors service');
    return this.engins;
  }

  get operationnels(): number { return this.engins.filter(e => e.statut === 'Opérationnel' || e.statut === 'En chantier').length; }
  get enMaintenance(): number { return this.engins.filter(e => e.statut === 'En entretien' || e.statut === 'En panne').length; }

  statutClass(s: StatutEngin): string {
    const m: Record<StatutEngin, string> = {
      'Opérationnel': 'badge badge--green',
      'En chantier':  'badge badge--blue',
      'En entretien': 'badge badge--yellow',
      'En panne':     'badge badge--red',
      'Loué':         'badge badge--purple',
      'Hors service': 'badge badge--gray',
    };
    return m[s];
  }

  addEngin() {
    if (!this.form.type || !this.form.marque) return;
    const num = this.engins.length + 1;
    const reference = 'ENG-' + String(num).padStart(3, '0');
    this.engins.unshift({ id: Date.now().toString(), reference, ...this.form });
    this.form = this.emptyForm();
    this.showForm.set(false);
  }

  private emptyForm(): Omit<Engin, 'id' | 'reference'> {
    return { type: 'Pelleteuse', marque: '', immatriculation: '', chantier: '', chauffeur: '', statut: 'Opérationnel', dateEntretien: '', prochainEntretien: '', notes: '' };
  }

  readonly types: TypeEngin[] = ['Pelleteuse', 'Bulldozer', 'Grue', 'Camion benne', 'Bétonière', 'Compacteur', 'Nacelle', 'Chargeuse', 'Niveleuse', 'Camion malaxeur'];
  readonly statuts: StatutEngin[] = ['Opérationnel', 'En chantier', 'En entretien', 'En panne', 'Loué', 'Hors service'];

  constructor(public readonly store: CollabStoreService) {}
}
