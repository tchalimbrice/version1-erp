import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-parametres',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['../../shared-page.scss'],
  template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Paramètres</h1><p class="page__sub">Configuration du commerce</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="save()">Enregistrer</button> </div> </div> @if (saved()) {
    <div style="background:#d5f5e3;color:#1e8449;border-radius:10px;padding:12px 16px;font-size:13px;font-weight:600;margin-bottom:16px;"> ✓ Modifications enregistrées avec succès.
    </div> }

  <div class="card"> <div class="card__head"><span class="card__title">Informations du commerce</span></div> <div style="display:flex;flex-direction:column;gap:14px;"> <div class="fields-row"> <div class="field"><label class="field__label">Nom du commerce</label> <input class="field__input" [value]="form.name" (input)="form.name=$any($event.target).value" placeholder="Mon Commerce Sarl"/> </div> <div class="field"><label class="field__label">Gérant</label> <input class="field__input" [value]="form.gerant" (input)="form.gerant=$any($event.target).value" placeholder="Nom du gérant"/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Adresse</label> <input class="field__input" [value]="form.adresse" (input)="form.adresse=$any($event.target).value" placeholder="Abidjan, Cocody"/> </div> <div class="field"><label class="field__label">Téléphone</label> <input class="field__input" [value]="form.tel" (input)="form.tel=$any($event.target).value" placeholder="+225 27 ..."/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Email</label> <input class="field__input" type="email" [value]="form.email" (input)="form.email=$any($event.target).value" placeholder="contact@commerce.ci"/> </div> <div class="field"><label class="field__label">N° Registre du commerce</label> <input class="field__input" [value]="form.rcc" (input)="form.rcc=$any($event.target).value" placeholder="CI-ABJ-2024-..."/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Devise</label> <select class="field__select" [value]="form.devise" (change)="form.devise=$any($event.target).value"> <option value="FCFA">FCFA</option><option value="EUR">EUR</option><option value="USD">USD</option> </select> </div> <div class="field"><label class="field__label">TVA par défaut (%)</label> <select class="field__select" [value]="form.tva" (change)="form.tva=$any($event.target).value"> <option value="0">0%</option><option value="9">9%</option><option value="18">18%</option> </select> </div> </div> </div> </div> <div class="card"> <div class="card__head"><span class="card__title">Utilisateurs & Rôles</span></div> <div class="table-wrap" style="box-shadow:none;border:none;"> <table class="table"> <thead><tr><th>Nom</th><th>Identifiant</th><th>Rôle</th><th>Statut</th></tr></thead> <tbody> @for (u of store.users(); track u.email) {
            <tr> <td class="fw-bold">{{ u.name }}</td> <td><span class="mono">{{ u.email }}</span></td> <td><span class="badge" [class]="roleCls(u.role)">{{ roleFr(u.role) }}</span></td> <td><span class="badge badge--green">Actif</span></td> </tr> }
        </tbody> </table> </div> </div> <div class="card"> <div class="card__head"><span class="card__title">Zone de danger</span></div> <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:#fdecea;border-radius:10px;"> <div> <div style="font-weight:700;color:#c0392b;">Réinitialiser toutes les données</div> <div style="font-size:12px;color:#e74c3c;margin-top:2px;">Efface produits, clients, ventes et factures</div> </div> <button class="btn btn--danger" (click)="resetConfirm()">Réinitialiser</button> </div> </div>
</div> `,
})
export class ParametresComponent {
  readonly store = inject(CollabStoreService);
  saved = signal(false);

  form!: { name: string; gerant: string; adresse: string; tel: string; email: string; rcc: string; devise: string; tva: string; };

  constructor() {
    const c = this.store.company();
    this.form = {
      name: c?.name ?? '',
      gerant: 'M. Konan Didier',
      adresse: 'Abidjan, Cocody',
      tel: '+225 27 22 11 22',
      email: 'contact@commerce.ci',
      rcc: 'CI-ABJ-2024-00123',
      devise: 'FCFA',
      tva: '18',
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
    const m: Record<string, string> = { owner:'Gérant', employee:'Vendeur', hr:'RH', accountant:'Comptable' };
    return m[role] ?? role;
  }
  roleCls(role: string) {
    const m: Record<string, string> = { owner:'badge badge--purple', employee:'badge badge--blue', hr:'badge badge--teal', accountant:'badge badge--orange' };
    return m[role] ?? 'badge badge--gray';
  }
}
