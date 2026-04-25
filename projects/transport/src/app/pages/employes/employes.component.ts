import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

type Statut = 'Actif' | 'En congé' | 'Absent';

interface Employe {
  id: string; nom: string; email: string; telephone: string; poste: string; salaire: number; statut: Statut;
}

@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.scss'
})
export class EmployesComponent {
  showForm = false;
  form = { nom: '', email: '', telephone: '', poste: 'Contrôleur', salaire: 0 };

  employes: Employe[] = [
    { id: '1', nom: 'Koné Bakary',    email: 'kone@trans.ci',    telephone: '07 00 11 22', poste: 'Contrôleur',      salaire: 90000,  statut: 'Actif'},
    { id: '2', nom: 'Diallo Fanta',   email: 'diallo@trans.ci',  telephone: '05 44 55 66', poste: 'Agent guichet',   salaire: 75000,  statut: 'Actif'},
    { id: '3', nom: 'Traoré Issouf',  email: 'traore@trans.ci',  telephone: '01 23 45 67', poste: 'Mécanicien',      salaire: 110000, statut: 'En congé' },
    { id: '4', nom: 'Bamba Siaka',    email: 'bamba@trans.ci',   telephone: '07 88 99 00', poste: 'Agent sécurité',  salaire: 80000,  statut: 'Actif'},
    { id: '5', nom: 'Coulibaly Adja', email: 'couli@trans.ci',   telephone: '05 11 22 33', poste: 'Administratif',   salaire: 95000,  statut: 'Absent'},
  ];

  get actifs():  number { return this.employes.filter(e => e.statut === 'Actif').length; }
  get enConge(): number { return this.employes.filter(e => e.statut === 'En congé').length; }
  get absents(): number { return this.employes.filter(e => e.statut === 'Absent').length; }

  constructor(private readonly store: CollabStoreService) {}

  formatMoney(n: number): string { return new Intl.NumberFormat('fr-FR').format(n); }

  addEmploye() {
    if (!this.form.nom) return;
    this.employes.push({ id: Date.now().toString(), ...this.form, statut: 'Actif' });
    this.form = { nom: '', email: '', telephone: '', poste: 'Contrôleur', salaire: 0 };
    this.showForm = false;
  }

  logView() {
    this.store.logAction('hr', this.store.currentUser()?.name ?? 'RH', 'Consulte les employés');
  }

  get returnRoute(): string {
    return this.store.mode() === 'centralized' ? '/dashboard' : '/chauffeurs';
  }
}
