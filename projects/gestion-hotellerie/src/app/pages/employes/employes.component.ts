import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  EmployesService, Employe, Departement, Contrat, StatutEmp, MotifDepart
} from '../../services/employes.service';

@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.scss'
})
export class EmployesComponent {
  private svc = inject(EmployesService);

  activeTab    = signal<Departement | 'Tous'>('Tous');
  search       = signal('');
  showAjout    = signal(false);
  showEdit     = signal(false);
  showCloture  = signal(false);
  selected     = signal<Employe | null>(null);
  ficheOuverte = signal<Employe | null>(null);

  tabs: Array<Departement | 'Tous'> = ['Tous', 'Réception', 'Ménage', 'Restauration', 'Sécurité', 'Direction'];
  departements: Departement[] = ['Réception', 'Ménage', 'Restauration', 'Sécurité', 'Direction'];
  contrats: Contrat[] = ['CDI', 'CDD', 'Temps partiel', 'Stagiaire'];
  statuts: StatutEmp[] = ['Actif', 'En congé', 'Arrêt maladie'];
  motifs: MotifDepart[] = ['Renvoi', 'Démission', 'Promotion', 'Fin de contrat'];

  ajoutForm = { nom:'', prenom:'', poste:'', departement:'Réception' as Departement, contrat:'CDI' as Contrat, statut:'Actif' as StatutEmp, salaire:0, tel:'', email:'', dateEntree:'' };
  editForm  = { nom:'', prenom:'', poste:'', departement:'Réception' as Departement, contrat:'CDI' as Contrat, statut:'Actif' as StatutEmp, salaire:0, tel:'', email:'', notes:'' };
  clotureForm = { motif: 'Fin de contrat' as MotifDepart, noteDepart:'' };

  filtered = computed(() => {
    const tab = this.activeTab();
    const q   = this.search().toLowerCase();
    return this.svc.actifs().filter(e =>
      (tab === 'Tous' || e.departement === tab) &&
      (!q || e.nom.toLowerCase().includes(q) || e.prenom.toLowerCase().includes(q) || e.poste.toLowerCase().includes(q))
    );
  });

  kpis = computed(() => {
    const all = this.svc.actifs();
    return {
      total:  all.length,
      actifs: all.filter(e => e.statut === 'Actif').length,
      conges: all.filter(e => e.statut === 'En congé' || e.statut === 'Arrêt maladie').length,
      masse:  all.filter(e => e.statut === 'Actif').reduce((s, e) => s + e.salaire, 0),
      anciens: this.svc.anciens().length
    };
  });

  fmt(n: number) { return n.toLocaleString('fr-FR') + ' FCFA'; }
  initiales(e: Employe) { return (e.prenom[0] + e.nom[0]).toUpperCase(); }

  ouvrirFiche(e: Employe) { this.ficheOuverte.set(e); }

  ouvrirEdit(e: Employe) {
    this.selected.set(e);
    this.editForm = { nom: e.nom, prenom: e.prenom, poste: e.poste, departement: e.departement, contrat: e.contrat, statut: e.statut, salaire: e.salaire, tel: e.tel, email: e.email, notes: e.notes };
    this.showEdit.set(true);
  }

  ouvrirCloture(e: Employe) {
    this.selected.set(e);
    this.clotureForm = { motif: 'Fin de contrat', noteDepart: '' };
    this.showCloture.set(true);
  }

  sauvegarderEdit() {
    const e = this.selected();
    if (!e) return;
    this.svc.modifier(e.id, { ...this.editForm });
    this.showEdit.set(false);
    this.selected.set(null);
  }

  confirmerCloture() {
    const e = this.selected();
    if (!e) return;
    this.svc.cloturerContrat(e.id, this.clotureForm.motif, this.clotureForm.noteDepart);
    this.showCloture.set(false);
    this.selected.set(null);
  }

  ajouterEmploye() {
    const f = this.ajoutForm;
    if (!f.nom || !f.prenom || !f.poste) return;
    this.svc.ajouter({ ...f, notes: '', dateEntree: f.dateEntree || new Date().toLocaleDateString('fr-FR'), actif: true } as any);
    this.ajoutForm = { nom:'', prenom:'', poste:'', departement:'Réception', contrat:'CDI', statut:'Actif', salaire:0, tel:'', email:'', dateEntree:'' };
    this.showAjout.set(false);
  }

  toggleConge(id: number) { this.svc.toggleConge(id); }

  statutCls(s: StatutEmp) {
    const m: Record<StatutEmp, string> = { 'Actif':'badge--actif', 'En congé':'badge--conge', 'Arrêt maladie':'badge--arret' };
    return 'badge ' + m[s];
  }
  contratCls(c: Contrat) {
    const m: Record<Contrat, string> = { 'CDI':'badge--cdi', 'CDD':'badge--cdd', 'Temps partiel':'badge--temps', 'Stagiaire':'badge--stag' };
    return 'badge ' + m[c];
  }
  deptCls(d: Departement) {
    const m: Record<Departement, string> = { 'Réception':'badge--reception', 'Ménage':'badge--menage', 'Restauration':'badge--resto', 'Sécurité':'badge--secu', 'Direction':'badge--dir' };
    return 'badge ' + m[d];
  }
  motifCls(m: MotifDepart) {
    const map: Record<MotifDepart, string> = { 'Renvoi':'badge--renvoi', 'Démission':'badge--dem', 'Promotion':'badge--promo', 'Fin de contrat':'badge--fin' };
    return 'badge ' + map[m];
  }
}
