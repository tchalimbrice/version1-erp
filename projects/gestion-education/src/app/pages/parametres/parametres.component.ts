import { Component, inject, signal } from '@angular/core';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-parametres',
  imports: [],
  styleUrl: '../../shared-page.scss',
  template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Paramètres</h1><p class="page__sub">Configuration de l'établissement</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="save()">Enregistrer</button> </div> </div> @if (saved()) {
    <div style="background:#d5f5e3;color:#1e8449;border-radius:10px;padding:12px 16px;font-size:13px;font-weight:600;margin-bottom:16px;"> ✓ Modifications enregistrées avec succès.
    </div> }

  <div class="card"> <div class="card__head"><span class="card__title">Informations de l'établissement</span></div> <div style="display:flex;flex-direction:column;gap:14px;"> <div class="fields-row"> <div class="field"><label class="field__label">Nom de l'établissement</label> <input class="field__input" [value]="form.name" (input)="form.name=$any($event.target).value" placeholder="École Primaire Excellence"/> </div> <div class="field"><label class="field__label">Directeur / Principal</label> <input class="field__input" [value]="form.directeur" (input)="form.directeur=$any($event.target).value" placeholder="M. Kouassi Ange"/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Adresse</label> <input class="field__input" [value]="form.adresse" (input)="form.adresse=$any($event.target).value" placeholder="Abidjan, Cocody"/> </div> <div class="field"><label class="field__label">Téléphone</label> <input class="field__input" [value]="form.tel" (input)="form.tel=$any($event.target).value" placeholder="+225 27 22 ..."/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Email</label> <input class="field__input" type="email" [value]="form.email" (input)="form.email=$any($event.target).value" placeholder="contact@ecole.ci"/> </div> <div class="field"><label class="field__label">Année scolaire</label> <input class="field__input" [value]="form.anneeScolaire" (input)="form.anneeScolaire=$any($event.target).value" placeholder="2024-2025"/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Niveaux enseignés</label> <input class="field__input" [value]="form.niveaux" (input)="form.niveaux=$any($event.target).value" placeholder="Primaire, Collège, Lycée"/> </div> <div class="field"><label class="field__label">Devise (monnaie)</label> <select class="field__select" [value]="form.devise" (change)="form.devise=$any($event.target).value"> <option value="FCFA">FCFA</option> <option value="EUR">EUR</option> <option value="USD">USD</option> <option value="XOF">XOF</option> </select> </div> </div> </div> </div> <div class="card"> <div class="card__head"><span class="card__title">Utilisateurs & Rôles</span></div> <div class="table-wrap" style="box-shadow:none;border:none;"> <table class="table"> <thead><tr><th>Nom</th><th>Identifiant</th><th>Rôle</th><th>Statut</th></tr></thead> <tbody> @for (u of store.users(); track u.id) {
            <tr> <td class="fw-bold">{{ u.name }}</td> <td><span class="mono">{{ u.username }}</span></td> <td><span class="badge" [class]="roleCls(u.role)">{{ roleFr(u.role) }}</span></td> <td><span class="badge badge--green">Actif</span></td> </tr> }
        </tbody> </table> </div> </div> <div class="card"> <div class="card__head"><span class="card__title">Frais de scolarité par niveau</span></div> <div style="display:flex;flex-direction:column;gap:12px;"> @for (f of fraisNiveaux; track f.niveau) {
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#f8f9fb;border-radius:10px;"> <span class="fw-med">{{ f.niveau }}</span> <div style="display:flex;align-items:center;gap:10px;"> <input class="field__input" type="number" [value]="f.montant" (input)="f.montant=+$any($event.target).value" style="width:140px;margin:0;"/> <span class="text-muted text-sm">FCFA / an</span> </div> </div> }
    </div> </div> <div class="card"> <div class="card__head"><span class="card__title">Zone de danger</span></div> <div style="display:flex;flex-direction:column;gap:12px;"> <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:#fdecea;border-radius:10px;"> <div> <div style="font-weight:700;color:#c0392b;">Réinitialiser toutes les données</div> <div style="font-size:12px;color:#e74c3c;margin-top:2px;">Efface élèves, notes, présences et paiements</div> </div> <button class="btn btn--danger" (click)="resetConfirm()">Réinitialiser</button> </div> </div> </div>
</div> `,
})
export class ParametresComponent {
  readonly store = inject(CollabStoreService);
  saved = signal(false);

  form!: { name: string; directeur: string; adresse: string; tel: string; email: string; anneeScolaire: string; niveaux: string; devise: string; };

  fraisNiveaux = [
    { niveau: 'Maternelle', montant: 80000  },
    { niveau: 'Primaire',   montant: 100000 },
    { niveau: 'Collège',    montant: 150000 },
    { niveau: 'Lycée',      montant: 180000 },
  ];

  constructor() {
    const c = this.store.company();
    this.form = {
      name: c?.name ?? '',
      directeur: 'M. Kouassi Ange',
      adresse: 'Abidjan, Cocody',
      tel: '+225 27 22 44 55 66',
      email: 'contact@ecole.ci',
      anneeScolaire: '2024-2025',
      niveaux: 'Primaire, Collège, Lycée',
      devise: 'FCFA',
    };
  }

  save() {
    this.store.updateCompanyName(this.form.name);
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 3000);
  }

  resetConfirm() {
    if (confirm('Confirmer la réinitialisation ? Cette action est irréversible.')) {
      this.store.reset();
    }
  }

  roleFr(role: string) {
    const m: Record<string, string> = { owner:'Directeur', employee:'Enseignant', hr:'Secrétaire', accountant:'Comptable' };
    return m[role] ?? role;
  }

  roleCls(role: string) {
    const m: Record<string, string> = { owner:'badge badge--purple', employee:'badge badge--blue', hr:'badge badge--teal', accountant:'badge badge--orange' };
    return m[role] ?? 'badge badge--gray';
  }
}
