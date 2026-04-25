import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Poste = 'Médecin généraliste' | 'Médecin spécialiste' | 'Infirmier(e)' | 'Sage-femme' | 'Secrétaire médicale' | 'Aide-soignant(e)';
type StatutP = 'Actif' | 'En congé' | 'Absent';

interface Personnel {
  id: string; nom: string; prenom: string; poste: Poste; specialite: string;
  telephone: string; email: string; statut: StatutP; salaire: number;
}

@Component({
  selector: 'app-personnel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personnel.component.html',
  styleUrl: './personnel.component.scss'
})
export class PersonnelComponent {
  showForm = signal(false);
  form = { nom: '', prenom: '', poste: 'Médecin généraliste' as Poste, specialite: '', telephone: '', email: '', salaire: 0 };

  personnel: Personnel[] = [
    { id: '1', nom: 'Diallo',    prenom: 'Moussa',    poste: 'Médecin généraliste',  specialite: 'Médecine générale',  telephone: '07 11 22 33', email: 'diallo@sante.ci',   statut: 'Actif',     salaire: 450000 },
    { id: '2', nom: 'Touré',     prenom: 'Aïssatou',  poste: 'Médecin spécialiste',  specialite: 'Cardiologie',        telephone: '05 44 55 66', email: 'toure@sante.ci',    statut: 'Actif',     salaire: 620000 },
    { id: '3', nom: 'Kaboré',    prenom: 'Ibrahim',   poste: 'Médecin spécialiste',  specialite: 'Pédiatrie',          telephone: '01 77 88 99', email: 'kabore@sante.ci',   statut: 'Actif',     salaire: 580000 },
    { id: '4', nom: 'Ouédraogo', prenom: 'Mariam',    poste: 'Infirmier(e)',          specialite: '—',                  telephone: '07 00 11 22', email: 'oued@sante.ci',     statut: 'Actif',     salaire: 220000 },
    { id: '5', nom: 'Sanogo',    prenom: 'Adama',     poste: 'Infirmier(e)',          specialite: '—',                  telephone: '05 33 44 55', email: 'sanogo@sante.ci',   statut: 'En congé',  salaire: 220000 },
    { id: '6', nom: 'Koné',      prenom: 'Patricia',  poste: 'Secrétaire médicale',   specialite: '—',                  telephone: '07 66 77 88', email: 'kone.p@sante.ci',   statut: 'Actif',     salaire: 150000 },
  ];

  get actifs():    number { return this.personnel.filter(p => p.statut === 'Actif').length; }
  get enConge():   number { return this.personnel.filter(p => p.statut === 'En congé').length; }
  get medecins():  number { return this.personnel.filter(p => p.poste.startsWith('Médecin')).length; }

  formatMoney(n: number): string { return new Intl.NumberFormat('fr-FR').format(n); }

  addPersonnel() {
    if (!this.form.nom || !this.form.prenom) return;
    this.personnel.push({ id: Date.now().toString(), ...this.form, statut: 'Actif' });
    this.form = { nom: '', prenom: '', poste: 'Médecin généraliste', specialite: '', telephone: '', email: '', salaire: 0 };
    this.showForm.set(false);
  }

  statutClass(s: StatutP): string {
    if (s === 'Actif')    return 'badge badge--green';
    if (s === 'En congé') return 'badge badge--yellow';
    return 'badge badge--red';
  }
}
