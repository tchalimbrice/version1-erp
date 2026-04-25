import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReceptionistService, Reservation, StatutReservation } from '../../services/receptionist.service';

@Component({
  selector: 'app-reservations-reception',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservations-reception.component.html',
  styleUrl: './reservations-reception.component.scss'
})
export class ReservationsReceptionComponent {
  readonly svc = inject(ReceptionistService);

  activeTab = signal<StatutReservation | 'Toutes'>('Toutes');
  search    = signal('');
  showForm  = signal(false);
  selected  = signal<Reservation | null>(null);

  tabs: Array<StatutReservation | 'Toutes'> = ['Toutes','Confirmée','En attente','Arrivée','Partie','Annulée'];
  statuts: StatutReservation[] = ['Confirmée','En attente','Arrivée','Partie','Annulée'];
  typesChambre = ['Standard','Supérieur','Suite','Suite junior','Appartement'];

  form = { clientId: 0, clientNom:'', chambre:'', typeChambre:'Standard', dateArrivee:'', dateDepart:'', nbPersonnes:1, montant:0, notes:'' };

  get clientsOptions() { return this.svc.clients(); }

  filtered = computed(() => {
    const tab = this.activeTab();
    const q   = this.search().toLowerCase();
    return this.svc.reservations().filter(r =>
      (tab === 'Toutes' || r.statut === tab) &&
      (!q || r.clientNom.toLowerCase().includes(q) || r.numero.toLowerCase().includes(q) || r.chambre.includes(q))
    );
  });

  kpis = computed(() => {
    const all = this.svc.reservations();
    return {
      total:      all.length,
      confirmees: all.filter(r => r.statut === 'Confirmée').length,
      arrivees:   all.filter(r => r.statut === 'Arrivée').length,
      attente:    all.filter(r => r.statut === 'En attente').length,
    };
  });

  nbNuits(): number {
    if (!this.form.dateArrivee || !this.form.dateDepart) return 0;
    const a = new Date(this.form.dateArrivee);
    const d = new Date(this.form.dateDepart);
    return Math.max(0, Math.round((d.getTime() - a.getTime()) / 86400000));
  }

  selectionnerClient(id: number) {
    const c = this.svc.clients().find(x => x.id === id);
    if (c) { this.form.clientId = c.id; this.form.clientNom = `${c.prenom} ${c.nom}`; }
  }

  ajouter() {
    if (!this.form.clientNom || !this.form.chambre || !this.form.dateArrivee || !this.form.dateDepart) return;
    this.svc.ajouterReservation({ ...this.form, statut: 'Confirmée', nbNuits: this.nbNuits() });
    this.form = { clientId:0, clientNom:'', chambre:'', typeChambre:'Standard', dateArrivee:'', dateDepart:'', nbPersonnes:1, montant:0, notes:'' };
    this.showForm.set(false);
  }

  changerStatut(id: number, statut: StatutReservation) {
    this.svc.changerStatutReservation(id, statut);
    this.selected.set(null);
  }

  countTab(t: string) { return t === 'Toutes' ? this.svc.reservations().length : this.svc.reservations().filter(r => r.statut === t).length; }
  fmt(n: number) { return n.toLocaleString('fr-FR') + ' FCFA'; }

  statutCls(s: StatutReservation) {
    const m: Record<StatutReservation, string> = { 'Confirmée':'badge--confirm','En attente':'badge--wait','Arrivée':'badge--here','Partie':'badge--gone','Annulée':'badge--cancel' };
    return 'badge ' + m[s];
  }
}
