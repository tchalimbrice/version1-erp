import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface ReproductionRow {
  animal: string;
  espece: string;
  saillie: string;
  naissance: string;
  jours: number;
  statut: string;
}

interface ReproForm {
  animal: string;
  espece: string;
  saillie: string;
  naissance: string;
  jours: number;
  statut: string;
}

@Component({
  selector: 'app-reproduction',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './reproduction.component.html',
  styleUrl: './reproduction.component.scss'
})
export class ReproductionComponent {
  readonly showForm = signal(false);

  readonly gestations = [
    { label: 'Taux de gestation', value: '65%', delta: '+ 6% ce mois', tone: 'green' },
    { label: 'Femelles gestantes', value: '12', delta: 'sur 20 femelles', tone: 'blue' },
    { label: 'Mises bas ce mois', value: '3', delta: '+ 1 vs mois dernier', tone: 'orange' },
    { label: 'Naissances ce mois', value: '4', delta: '+ 2 vs mois dernier', tone: 'purple' }
  ];

  readonly rows = signal<ReproductionRow[]>([
    { animal: 'Vache N15', espece: 'Bovine', saillie: '15/02/2024', naissance: '22/11/2024', jours: 165, statut: 'Gestante' },
    { animal: 'Vache N16', espece: 'Bovine', saillie: '20/02/2024', naissance: '27/11/2024', jours: 190, statut: 'Gestante' },
    { animal: 'Chèvre N7', espece: 'Caprine', saillie: '10/05/2024', naissance: '15/08/2024', jours: 87, statut: 'Gestante' }
  ]);

  form: ReproForm = {
    animal: '',
    espece: 'Bovine',
    saillie: '',
    naissance: '',
    jours: 0,
    statut: 'Gestante'
  };

  openForm() {
    this.showForm.set(true);
  }

  closeForm() {
    this.showForm.set(false);
  }

  addRow() {
    if (!this.form.animal || !this.form.saillie) return;
    this.rows.update(list => [
      {
        animal: this.form.animal,
        espece: this.form.espece,
        saillie: this.form.saillie,
        naissance: this.form.naissance || '-',
        jours: this.form.jours,
        statut: this.form.statut
      },
      ...list
    ]);

    this.form = { animal: '', espece: 'Bovine', saillie: '', naissance: '', jours: 0, statut: 'Gestante' };
    this.showForm.set(false);
  }
}
