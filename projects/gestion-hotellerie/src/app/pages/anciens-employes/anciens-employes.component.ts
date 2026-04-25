import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  EmployesService, Employe, Departement, Contrat, MotifDepart
} from '../../services/employes.service';

@Component({
  selector: 'app-anciens-employes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './anciens-employes.component.html',
  styleUrl: './anciens-employes.component.scss'
})
export class AnciensEmployesComponent {
  readonly svc = inject(EmployesService);

  search      = signal('');
  filterMotif = signal('');
  selected    = signal<Employe | null>(null);

  motifs: MotifDepart[] = ['Renvoi', 'Démission', 'Promotion', 'Fin de contrat'];

  filtered = computed(() => {
    const q = this.search().toLowerCase();
    const m = this.filterMotif();
    return this.svc.anciens().filter(e =>
      (!q || e.nom.toLowerCase().includes(q) || e.prenom.toLowerCase().includes(q) || e.poste.toLowerCase().includes(q)) &&
      (!m || e.motifDepart === m)
    );
  });

  kpis = computed(() => {
    const all = this.svc.anciens();
    const byMotif = (m: MotifDepart) => all.filter(e => e.motifDepart === m).length;
    return {
      total:      all.length,
      renvois:    byMotif('Renvoi'),
      demissions: byMotif('Démission'),
      fins:       byMotif('Fin de contrat'),
      promotions: byMotif('Promotion'),
    };
  });

  reactiver(id: number) {
    this.svc.reactiver(id);
    this.selected.set(null);
  }

  fmt(n: number) { return n.toLocaleString('fr-FR') + ' FCFA'; }
  initiales(e: Employe) { return (e.prenom[0] + e.nom[0]).toUpperCase(); }

  motifCls(m: MotifDepart | undefined) {
    if (!m) return 'badge';
    const map: Record<MotifDepart, string> = { 'Renvoi':'badge--renvoi', 'Démission':'badge--dem', 'Promotion':'badge--promo', 'Fin de contrat':'badge--fin' };
    return 'badge ' + map[m];
  }
  contratCls(c: Contrat) {
    const m: Record<Contrat, string> = { 'CDI':'badge--cdi', 'CDD':'badge--cdd', 'Temps partiel':'badge--temps', 'Stagiaire':'badge--stag' };
    return 'badge ' + m[c];
  }
  deptCls(d: Departement) {
    const m: Record<Departement, string> = { 'Réception':'badge--reception', 'Ménage':'badge--menage', 'Restauration':'badge--resto', 'Sécurité':'badge--secu', 'Direction':'badge--dir' };
    return 'badge ' + m[d];
  }
}
