import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

type Species = 'Bovins' | 'Ovins' | 'Caprins' | 'Volailles';
type Status = 'En bonne sante' | 'Sous surveillance' | 'A surveiller';

interface AnimalRow {
  id: string;
  photo: string;
  numero: string;
  espece: Species;
  race: string;
  age: string;
  statut: Status;
  statusTone: 'green' | 'orange' | 'yellow';
}

interface AnimalForm {
  numero: string;
  espece: Species;
  race: string;
  age: string;
  statut: Status;
}

@Component({
  selector: 'app-animaux',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './animaux.component.html',
  styleUrl: './animaux.component.scss'
})
export class AnimauxComponent {
  readonly search = signal('');
  readonly activeFilter = signal<'Tous' | Species>('Tous');
  readonly showForm = signal(false);
  readonly animals = signal<AnimalRow[]>([
    { id: '1', photo: 'cow-1', numero: 'BOV-001', espece: 'Bovins', race: 'Vache N16', age: '4 ans', statut: 'En bonne sante', statusTone: 'green' },
    { id: '2', photo: 'cow-2', numero: 'BOV-002', espece: 'Bovins', race: 'Vache N13', age: '5 ans', statut: 'En bonne sante', statusTone: 'green' },
    { id: '3', photo: 'goat-1', numero: 'BOV-003', espece: 'Bovins', race: 'Taureau N3', age: '3 ans', statut: 'Sous surveillance', statusTone: 'orange' },
    { id: '4', photo: 'sheep-1', numero: 'BOV-004', espece: 'Ovins', race: 'Mouton N21', age: '6 mois', statut: 'En bonne sante', statusTone: 'green' },
    { id: '5', photo: 'cow-3', numero: 'BOV-005', espece: 'Caprins', race: 'Chevre N7', age: '2 ans', statut: 'A surveiller', statusTone: 'yellow' },
    { id: '6', photo: 'hen-1', numero: 'BOV-006', espece: 'Volailles', race: 'Poule N4', age: '10 mois', statut: 'En bonne sante', statusTone: 'green' }
  ]);

  readonly speciesTabs: Array<{ label: 'Tous' | Species; count: number }> = [
    { label: 'Tous', count: 128 },
    { label: 'Bovins', count: 45 },
    { label: 'Ovins', count: 25 },
    { label: 'Caprins', count: 25 },
    { label: 'Volailles', count: 28 }
  ];

  form: AnimalForm = {
    numero: '',
    espece: 'Bovins',
    race: '',
    age: '',
    statut: 'En bonne sante'
  };

  readonly visibleAnimals = computed(() => {
    const query = this.search().trim().toLowerCase();
    const filter = this.activeFilter();
    return this.animals().filter(animal => {
      const matchesFilter = filter === 'Tous' || animal.espece === filter;
      const matchesQuery =
        !query ||
        animal.numero.toLowerCase().includes(query) ||
        animal.race.toLowerCase().includes(query) ||
        animal.espece.toLowerCase().includes(query);
      return matchesFilter && matchesQuery;
    });
  });

  selectTab(tab: 'Tous' | Species) {
    this.activeFilter.set(tab);
  }

  openForm() {
    this.showForm.set(true);
  }

  closeForm() {
    this.showForm.set(false);
  }

  addAnimal() {
    const current = this.form;
    if (!current.numero || !current.race || !current.age) return;

    const tone = current.statut === 'En bonne sante' ? 'green' : current.statut === 'Sous surveillance' ? 'orange' : 'yellow';
    this.animals.update(list => [
      {
        id: crypto.randomUUID(),
        photo: 'new',
        numero: current.numero,
        espece: current.espece,
        race: current.race,
        age: current.age,
        statut: current.statut,
        statusTone: tone
      },
      ...list
    ]);

    this.form = {
      numero: '',
      espece: 'Bovins',
      race: '',
      age: '',
      statut: 'En bonne sante'
    };
    this.showForm.set(false);
  }

  trackById(_: number, animal: AnimalRow) {
    return animal.id;
  }
}
