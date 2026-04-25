import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

type Statut = 'Actif' | 'En congé' | 'Absent';

interface Employe {
  id: string; nom: string; email: string; poste: string; affectation: string; salaire: number; statut: Statut;
}

@Component({
  selector: 'app-rh',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './rh.component.html',
  styleUrl: './rh.component.scss'
})
export class RhComponent {
  showForm = false;
  form = { nom: '', email: '', poste: 'Ouvrier agricole', affectation: '', salaire: 0 };

  employes: Employe[] = [
    { id: '1', nom: 'Koné Jean',     email: 'kone@ferme.ci',   poste: 'Ouvrier agricole',    affectation: 'Parcelle A', salaire: 85000,  statut: 'Actif'},
    { id: '2', nom: 'Diallo Awa',    email: 'diallo@ferme.ci', poste: 'Technicien',           affectation: 'Élevage B',  salaire: 120000, statut: 'Actif'},
    { id: '3', nom: 'Traoré Moussa', email: 'traore@ferme.ci', poste: 'Responsable parcelle', affectation: 'Parcelle C', salaire: 150000, statut: 'En congé' },
    { id: '4', nom: 'Coulibaly Ami', email: 'couli@ferme.ci',  poste: 'Éleveur',              affectation: 'Lot Bovin',  salaire: 95000,  statut: 'Absent'},
    { id: '5', nom: 'Bamba Seydou',  email: 'bamba@ferme.ci',  poste: 'Ouvrier agricole',    affectation: 'Parcelle B', salaire: 85000,  statut: 'Actif'},
  ];

  get actifs():  number { return this.employes.filter(e => e.statut === 'Actif').length; }
  get enConge(): number { return this.employes.filter(e => e.statut === 'En congé').length; }
  get absents(): number { return this.employes.filter(e => e.statut === 'Absent').length; }

  constructor(private readonly store: CollabStoreService, private readonly router: Router) {}

  formatMoney(n: number): string { return new Intl.NumberFormat('fr-FR').format(n); }

  addEmploye() {
    if (!this.form.nom) return;
    this.employes.push({ id: Date.now().toString(), ...this.form, statut: 'Actif' });
    this.form = { nom: '', email: '', poste: 'Ouvrier agricole', affectation: '', salaire: 0 };
    this.showForm = false;
  }

  logout() { this.store.logout(); this.router.navigate(['/connexion']); }
}
