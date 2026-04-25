import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReceptionistService, Commande, StatutCommande, TypeCommande, LigneCommande } from '../../services/receptionist.service';

@Component({
  selector: 'app-commandes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './commandes.component.html',
  styleUrl: './commandes.component.scss'
})
export class CommandesComponent {
  readonly svc = inject(ReceptionistService);

  activeTab = signal<StatutCommande | 'Toutes'>('Toutes');
  search    = signal('');
  showForm  = signal(false);
  selected  = signal<Commande | null>(null);

  tabs: Array<StatutCommande | 'Toutes'> = ['Toutes','En attente','En cours','Livrée','Annulée'];
  types: TypeCommande[] = ['Room service','Restaurant','Bar','Blanchisserie','Divers'];

  form = {
    chambre: '', clientNom: '', type: 'Room service' as TypeCommande,
    notes: '', dateCommande: new Date().toLocaleDateString('fr-FR'),
    heureCommande: new Date().toLocaleTimeString('fr-FR', { hour:'2-digit', minute:'2-digit' })
  };
  lignes: LigneCommande[] = [{ produit:'', quantite:1, prixUnit:0 }];

  filtered = computed(() => {
    const tab = this.activeTab();
    const q   = this.search().toLowerCase();
    return this.svc.commandes().filter(c =>
      (tab === 'Toutes' || c.statut === tab) &&
      (!q || c.clientNom.toLowerCase().includes(q) || c.chambre.includes(q) || c.numero.toLowerCase().includes(q))
    );
  });

  kpis = computed(() => {
    const all = this.svc.commandes();
    return {
      total:      all.length,
      attente:    all.filter(c => c.statut === 'En attente').length,
      enCours:    all.filter(c => c.statut === 'En cours').length,
      total24h:   all.reduce((s, c) => s + c.montant, 0),
    };
  });

  totalLignes() { return this.lignes.reduce((s, l) => s + l.quantite * l.prixUnit, 0); }
  ajouterLigne() { this.lignes.push({ produit:'', quantite:1, prixUnit:0 }); }
  supprimerLigne(i: number) { if (this.lignes.length > 1) this.lignes.splice(i, 1); }

  ajouter() {
    if (!this.form.chambre || !this.form.clientNom || this.lignes.every(l => !l.produit)) return;
    const lignes = this.lignes.filter(l => l.produit.trim());
    this.svc.ajouterCommande({
      ...this.form,
      lignes,
      montant: this.totalLignes(),
      statut: 'En attente'
    });
    this.form = { chambre:'', clientNom:'', type:'Room service', notes:'', dateCommande: new Date().toLocaleDateString('fr-FR'), heureCommande: new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'}) };
    this.lignes = [{ produit:'', quantite:1, prixUnit:0 }];
    this.showForm.set(false);
  }

  changerStatut(id: number, statut: StatutCommande) {
    this.svc.changerStatutCommande(id, statut);
    this.selected.set(null);
  }

  countTab(t: string) { return t === 'Toutes' ? this.svc.commandes().length : this.svc.commandes().filter(c => c.statut === t).length; }
  fmt(n: number) { return n.toLocaleString('fr-FR') + ' FCFA'; }

  statutCls(s: StatutCommande) {
    const m: Record<StatutCommande, string> = { 'En attente':'badge--wait','En cours':'badge--progress','Livrée':'badge--done','Annulée':'badge--cancel' };
    return 'badge ' + m[s];
  }
  typeCls(t: TypeCommande) {
    const m: Record<TypeCommande, string> = { 'Room service':'badge--rs','Restaurant':'badge--rest','Bar':'badge--bar','Blanchisserie':'badge--blanch','Divers':'badge--div' };
    return 'badge ' + m[t];
  }
}
