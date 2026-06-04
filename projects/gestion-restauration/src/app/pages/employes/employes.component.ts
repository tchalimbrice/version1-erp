import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Employe { nom: string; poste: string; tel: string; statut: string; }

@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employes.component.html',
})
export class EmployesComponent {
  search = signal('');

  readonly allEmployes: Employe[] = [
    { nom: 'Marc Dupont',    poste: 'Serveur',   tel: '06 11 22 33 44', statut: 'Actif'  },
    { nom: 'Julie Martin',   poste: 'Serveuse',  tel: '06 22 33 44 55', statut: 'Actif'  },
    { nom: 'Thomas Bernard', poste: 'Cuisinier', tel: '06 33 44 55 66', statut: 'Congé'  },
    { nom: 'Laura Petit',    poste: 'Plongeur',  tel: '06 44 45 66 77', statut: 'Actif'  },
    { nom: 'Nicolas Leroy',  poste: 'Manager',   tel: '06 55 66 77 88', statut: 'Actif'  },
  ];

  readonly filtered = computed(() => {
    const q = this.search().toLowerCase();
    if (!q) return this.allEmployes;
    return this.allEmployes.filter(e => e.nom.toLowerCase().includes(q) || e.poste.toLowerCase().includes(q));
  });

  statutClass(s: string): string {
    return s === 'Actif' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';
  }
}
