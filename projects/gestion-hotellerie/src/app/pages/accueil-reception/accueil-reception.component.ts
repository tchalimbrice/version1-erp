import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';
import { ReceptionistService } from '../../services/receptionist.service';

@Component({
  selector: 'app-accueil-reception',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './accueil-reception.component.html',
  styleUrl: './accueil-reception.component.scss'
})
export class AccueilReceptionComponent {
  readonly store = inject(CollabStoreService);
  readonly svc   = inject(ReceptionistService);

  readonly prenom = computed(() => {
    const name = this.store.currentUser()?.name ?? '';
    return name.split(' ')[0];
  });

  readonly arriveesDuJour = computed(() =>
    this.svc.reservations().filter(r => r.statut === 'Confirmée').slice(0, 5)
  );

  readonly commandesEnAttente = computed(() =>
    this.svc.commandes().filter(c => c.statut === 'En attente' || c.statut === 'En cours').slice(0, 5)
  );

  fmt(n: number) { return n.toLocaleString('fr-FR') + ' FCFA'; }

  statutResCls(s: string) {
    const m: Record<string, string> = { 'Confirmée':'res--confirm', 'En attente':'res--wait', 'Arrivée':'res--here', 'Partie':'res--gone', 'Annulée':'res--cancel' };
    return 'res-badge ' + (m[s] ?? '');
  }

  statutCmdCls(s: string) {
    const m: Record<string, string> = { 'En attente':'cmd--wait', 'En cours':'cmd--progress', 'Livrée':'cmd--done', 'Annulée':'cmd--cancel' };
    return 'cmd-badge ' + (m[s] ?? '');
  }
}
