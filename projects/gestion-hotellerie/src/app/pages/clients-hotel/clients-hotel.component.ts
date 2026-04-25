import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReceptionistService, ClientHotel, TypeDocument } from '../../services/receptionist.service';

@Component({
  selector: 'app-clients-hotel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clients-hotel.component.html',
  styleUrl: './clients-hotel.component.scss'
})
export class ClientsHotelComponent {
  readonly svc = inject(ReceptionistService);

  search    = signal('');
  showForm  = signal(false);
  showEdit  = signal(false);
  selected  = signal<ClientHotel | null>(null);

  types: TypeDocument[] = ['CNI', 'Passeport', 'Carte de séjour'];
  nationalites = ['Ivoirienne','Française','Guinéenne','Sénégalaise','Malienne','Burkinabé','Allemande','Américaine','Britannique','Autre'];

  vierge = () => ({ nom:'', prenom:'', tel:'', email:'', adresse:'', nationalite:'Ivoirienne', typeDocument:'CNI' as TypeDocument, numeroDocument:'' });
  form = this.vierge();
  editForm: Partial<ClientHotel> = {};

  filtered = computed(() => {
    const q = this.search().toLowerCase();
    return this.svc.clients().filter(c =>
      !q || c.nom.toLowerCase().includes(q) || c.prenom.toLowerCase().includes(q) ||
      c.tel.includes(q) || c.email.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
    );
  });

  sejours(clientId: number) {
    return this.svc.reservations().filter(r => r.clientId === clientId);
  }

  ouvrirEdit(c: ClientHotel) {
    this.selected.set(c);
    this.editForm = { ...c };
    this.showEdit.set(true);
  }

  sauvegarder() {
    const c = this.selected();
    if (!c) return;
    this.svc.modifierClient(c.id, this.editForm);
    this.showEdit.set(false);
  }

  ajouter() {
    if (!this.form.nom || !this.form.prenom || !this.form.tel) return;
    const client = this.svc.ajouterClient(this.form);
    this.form = this.vierge();
    this.showForm.set(false);
    this.selected.set(client);
  }

  initiales(c: ClientHotel) { return (c.prenom[0] + c.nom[0]).toUpperCase(); }
  fmt(n: number) { return n.toLocaleString('fr-FR') + ' FCFA'; }

  statutResCls(s: string) {
    const m: Record<string, string> = { 'Confirmée':'badge--confirm','En attente':'badge--wait','Arrivée':'badge--here','Partie':'badge--gone','Annulée':'badge--cancel' };
    return 'badge ' + (m[s] ?? '');
  }
}
