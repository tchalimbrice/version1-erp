import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Client { nom: string; tel: string; email: string; points: number; }

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clients.component.html',
})
export class ClientsComponent {
  search = signal('');
  showForm = signal(false);
  clientForm: Client = { nom: '', tel: '', email: '', points: 0 };

  clients = signal<Client[]>([
    { nom: 'Jean Martin',    tel: '06 12 34 56 78', email: 'jean@mail.com',    points: 129 },
    { nom: 'Sophie Durand',  tel: '06 23 45 67 89', email: 'sophie@mail.com',  points: 80  },
    { nom: 'Paul Bernard',   tel: '09 34 56 78 90', email: 'paul@mail.com',    points: 200 },
    { nom: 'Marie Leroy',    tel: '06 45 67 80 01', email: 'marie@mail.com',   points: 156 },
    { nom: 'Lucas Moreau',   tel: '05 56 78 90 12', email: 'lucas@mail.com',   points: 80  },
    { nom: 'Emma Petit',     tel: '06 67 89 01 23', email: 'emma@mail.com',    points: 150 },
  ]);

  readonly filtered = computed(() => {
    const q = this.search().toLowerCase();
    if (!q) return this.clients();
    return this.clients().filter(c => c.nom.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) || c.tel.includes(q));
  });

  openAddForm() {
    this.clientForm = { nom: '', tel: '', email: '', points: 0 };
    this.showForm.set(true);
  }

  closeForm() {
    this.showForm.set(false);
  }

  submitForm() {
    const client = this.clientForm;
    if (!client.nom.trim() || !client.email.trim()) return;
    this.clients.update(list => [...list, { ...client, nom: client.nom.trim(), email: client.email.trim() }]);
    this.closeForm();
  }

  deleteClient(email: string) {
    this.clients.update(list => list.filter(client => client.email !== email));
  }
}
