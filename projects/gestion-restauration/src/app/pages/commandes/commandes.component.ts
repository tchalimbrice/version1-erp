import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Commande {
  id: string; table: string; client: string; date: string; total: string; statut: string;
}

@Component({
  selector: 'app-commandes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './commandes.component.html',
})
export class CommandesComponent {
  activeTab = signal<string>('Toutes');
  search    = signal('');
  showForm  = signal(false);

  form = {
    table: '',
    client: '',
    date: '',
    total: '',
    statut: 'En préparation',
  };

  readonly tabs = ['Toutes', 'En préparation', 'Servies', 'Annulées'];

  readonly allCommandes = signal<Commande[]>([
    { id: '#1025', table: 'Table 5', client: 'Jean Martin',    date: '29/04/2025 13:45', total: '45,50 €', statut: 'En préparation' },
    { id: '#1024', table: 'Table 2', client: 'Sophie Durand',  date: '29/04/2025 13:20', total: '23,00 €', statut: 'Servi'          },
    { id: '#1023', table: 'Table 8', client: 'Paul Bernard',   date: '29/04/2025 13:00', total: '31,00 €', statut: 'En préparation' },
    { id: '#1022', table: 'Table 3', client: 'Marie Leroy',    date: '29/04/2025 12:15', total: '16,50 €', statut: 'Annulé'         },
    { id: '#1021', table: 'Table 1', client: 'Lucas Moreau',   date: '29/04/2025 11:50', total: '28,00 €', statut: 'Servi'          },
    { id: '#1020', table: 'Table 7', client: 'Emma Petit',     date: '29/04/2025 11:30', total: '55,00 €', statut: 'Servi'          },
    { id: '#1019', table: 'Table 4', client: 'Thomas Bernard', date: '29/04/2025 10:45', total: '18,50 €', statut: 'Servi'          },
    { id: '#1018', table: 'Table 4', client: '',               date: '29/04/2025 10:15', total: '12,00 €', statut: 'Annulé'         },
  ]);

  readonly filtered = computed(() => {
    const tab = this.activeTab();
    const q   = this.search().toLowerCase();
    return this.allCommandes().filter(c => {
      const matchTab = tab === 'Toutes' || c.statut === tab || (tab === 'Servies' && c.statut === 'Servi');
      const matchQ   = !q || c.id.toLowerCase().includes(q) || c.client.toLowerCase().includes(q) || c.table.toLowerCase().includes(q);
      return matchTab && matchQ;
    });
  });

  statutClass(s: string): string {
    if (s === 'Servi')          return 'bg-green-100 text-green-700';
    if (s === 'En préparation') return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  }

  openForm(): void {
    this.form = {
      table: '',
      client: '',
      date: new Date().toLocaleString('fr-FR'),
      total: '',
      statut: 'En préparation',
    };
    this.showForm.set(true);
  }

  closeForm(): void {
    this.showForm.set(false);
  }

  saveCommande(): void {
    if (!this.form.table || !this.form.total) return;
    this.allCommandes.update(list => [
      {
        id: `#${Math.floor(1000 + Math.random() * 9000)}`,
        table: this.form.table,
        client: this.form.client || '—',
        date: this.form.date || new Date().toLocaleString('fr-FR'),
        total: this.form.total,
        statut: this.form.statut,
      },
      ...list,
  ]);
    this.closeForm();
  }
}
