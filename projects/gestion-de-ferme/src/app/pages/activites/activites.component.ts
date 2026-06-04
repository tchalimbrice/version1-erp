import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

type ActivityType = 'Achat d\'aliments' | 'Traitement' | 'Vente d\'oeufs' | 'Naissance' | 'Achat d\'animal';

interface ActivityRow {
  id: string;
  date: string;
  type: ActivityType;
  description: string;
  concerned: string;
  amount: string;
  tone: 'green' | 'orange' | 'red' | 'blue' | 'purple';
}

interface ActivityForm {
  date: string;
  type: ActivityType;
  description: string;
  concerned: string;
  amount: string;
}

@Component({
  selector: 'app-activites',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './activites.component.html',
  styleUrl: './activites.component.scss'
})
export class ActivitesComponent {
  readonly search = signal('');
  readonly selectedType = signal<'Tous' | ActivityType>('Tous');
  readonly showForm = signal(false);

  readonly types: Array<'Tous' | ActivityType> = [
    'Tous',
    'Achat d\'aliments',
    'Traitement',
    'Vente d\'oeufs',
    'Naissance',
    'Achat d\'animal'
  ];

  readonly activities = signal<ActivityRow[]>([
    { id: '1', date: '20/05/2024', type: 'Achat d\'aliments', description: '50 kg de maïs', concerned: 'Aliments', amount: '-25 €', tone: 'green' },
    { id: '2', date: '19/05/2024', type: 'Traitement', description: 'Traitement Vache N15', concerned: 'BOV-001', amount: '-8 €', tone: 'blue' },
    { id: '3', date: '18/05/2024', type: 'Vente d\'oeufs', description: '30 plateaux d\'oeufs', concerned: 'Volailles', amount: '+45 €', tone: 'orange' },
    { id: '4', date: '16/05/2024', type: 'Naissance', description: 'Naissance Vache N21', concerned: 'BOV-004', amount: '-', tone: 'purple' },
    { id: '5', date: '17/05/2024', type: 'Achat d\'animal', description: 'Achat Vache N16', concerned: 'BOV-002', amount: '-1,200 €', tone: 'red' }
  ]);

  form: ActivityForm = {
    date: '',
    type: 'Achat d\'aliments',
    description: '',
    concerned: '',
    amount: '-0 €'
  };

  readonly visibleActivities = computed(() => {
    const query = this.search().trim().toLowerCase();
    const type = this.selectedType();
    return this.activities().filter(activity => {
      const matchesType = type === 'Tous' || activity.type === type;
      const matchesQuery =
        !query ||
        [activity.date, activity.type, activity.description, activity.concerned, activity.amount]
          .some(value => value.toLowerCase().includes(query));
      return matchesType && matchesQuery;
    });
  });

  openForm() {
    this.showForm.set(true);
  }

  closeForm() {
    this.showForm.set(false);
  }

  addActivity() {
    if (!this.form.date || !this.form.description) return;
    const tone: ActivityRow['tone'] =
      this.form.type === 'Naissance' ? 'purple' :
      this.form.type === 'Traitement' ? 'blue' :
      this.form.type === 'Vente d\'oeufs' ? 'orange' :
      this.form.type === 'Achat d\'animal' ? 'red' : 'green';

    this.activities.update(list => [
      {
        id: crypto.randomUUID(),
        date: this.form.date,
        type: this.form.type,
        description: this.form.description,
        concerned: this.form.concerned || 'N/A',
        amount: this.form.amount || '-0 €',
        tone
      },
      ...list
    ]);

    this.form = { date: '', type: 'Achat d\'aliments', description: '', concerned: '', amount: '-0 €' };
    this.showForm.set(false);
  }

  selectType(type: 'Tous' | ActivityType) {
    this.selectedType.set(type);
  }

  trackById(_: number, activity: ActivityRow) {
    return activity.id;
  }
}
