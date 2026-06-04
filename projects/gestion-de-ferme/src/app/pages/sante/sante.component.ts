import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface HealthRow {
  date: string;
  animal: string;
  type: string;
  description: string;
  status: 'Termine' | 'A venir';
  nextDate: string;
}

interface HealthForm {
  date: string;
  animal: string;
  type: string;
  description: string;
  nextDate: string;
}

@Component({
  selector: 'app-sante',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sante.component.html',
  styleUrl: './sante.component.scss'
})
export class SanteComponent {
  readonly showForm = signal(false);

  readonly rows = signal<HealthRow[]>([
    { date: '20/05/2024', animal: 'Vache N15', type: 'Traitement', description: 'Traitement contre la fievre', status: 'Termine', nextDate: '-' },
    { date: '18/05/2024', animal: 'Veau N21', type: 'Vaccination', description: 'Vaccin contre la diarrhee', status: 'Termine', nextDate: '-' },
    { date: '05/05/2024', animal: 'Vache N16', type: 'Vermifugation', description: 'Vermifugation reguliere', status: 'Termine', nextDate: '-' },
    { date: '01/05/2024', animal: 'Taureau N3', type: 'Vaccination', description: 'Vaccin contre la fievre aphteuse', status: 'A venir', nextDate: '07/05/2024' }
  ]);

  form: HealthForm = { date: '', animal: '', type: 'Traitement', description: '', nextDate: '' };

  openForm() {
    this.showForm.set(true);
  }

  closeForm() {
    this.showForm.set(false);
  }

  addRow() {
    if (!this.form.date || !this.form.animal || !this.form.type) return;
    this.rows.update(list => [
      {
        date: this.form.date,
        animal: this.form.animal,
        type: this.form.type,
        description: this.form.description,
        status: this.form.nextDate ? 'A venir' : 'Termine',
        nextDate: this.form.nextDate || '-'
      },
      ...list
    ]);
    this.form = { date: '', animal: '', type: 'Traitement', description: '', nextDate: '' };
    this.showForm.set(false);
  }
}
