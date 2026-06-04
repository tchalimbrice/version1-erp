import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type ModeP = 'complet' | 'tranches';
type StatutMois = 'payé' | 'en attente' | 'en retard';

interface EcheanceMois {
  mois: string; montant: number; statut: StatutMois; datePaiement?: string; recu?: string;
}

interface PaiementEleve {
  id: string; nom: string; prenom: string; classe: string; niveau: 'primaire'|'college'|'lycee';
  serie?: string; nouveau: boolean; anneeScolaire: string;
  mode: ModeP; montantTotal: number; montantInscription: number;
  inscriptionPayee: boolean; echeances: EcheanceMois[];
  dateNaissance: string; age: number;
}

@Component({
  selector: 'app-paiements',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    @use '../../shared-page.scss';
    .tabs { display:flex; gap:4px; background:#f0f4f8; border-radius:12px; padding:4px; margin-bottom:24px; width:fit-content; }
    .tab  { padding:9px 20px; border:none; border-radius:9px; font-size:13px; font-weight:600; cursor:pointer; background:transparent; color:#7f8c8d; }
    .tab.active { background:#fff; color:#1a3a5c; box-shadow:0 1px 4px rgba(0,0,0,.08); }
    .echeances-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(130px,1fr)); gap:8px; margin-top:12px; }
    .mois-card { border-radius:10px; padding:10px 12px; border:1.5px solid #e0e0e0; text-align:center; cursor:pointer; transition:all .12s; }
    .mois-card.payé     { border-color:#27ae60; background:#d5f5e3; }
    .mois-card.en-retard{ border-color:#c0392b; background:#fdecea; }
    .mois-card.en-attente{ border-color:#dde3ea; background:#f8fafc; }
    .mois-nom { font-size:12px; font-weight:700; color:#555; margin-bottom:4px; }
    .mois-val { font-size:13px; font-weight:800; color:#0f2942; }
    .mois-statut { font-size:10px; margin-top:3px; font-weight:700; }
  `],
  template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title"> Paiements & Facturation</h1>
      <p class="page__sub">Inscription, scolarités, paiements en tranches et reçus</p>
    </div>
    <div class="page__actions">
      <button class="btn btn--outline" (click)="tab.set('inscription')"> Nouvelle inscription</button>
      <button class="btn btn--primary" (click)="tab.set('paiement')">+ Enregistrer paiement</button>
    </div>
  </div>

  <div class="tabs">
    <button class="tab" [class.active]="tab()==='liste'"       (click)="tab.set('liste')"> Liste élèves</button>
    <button class="tab" [class.active]="tab()==='paiement'"    (click)="tab.set('paiement')"> Paiement</button>
    <button class="tab" [class.active]="tab()==='inscription'" (click)="tab.set('inscription')"> Inscription</button>
    <button class="tab" [class.active]="tab()==='historique'"  (click)="tab.set('historique')"> Historique</button>
  </div>

  <!-- ── Liste des élèves ── -->
  @if (tab() === 'liste') {
    <div class="kpi-grid">
      <div class="kpi-card" style="border-left-color:#27ae60">
        <div class="kpi-card__icon" style="background:#d5f5e3"></div>
        <div class="kpi-card__body"><div class="kpi-card__value">{{ aJour() }}</div><div class="kpi-card__label">À jour</div></div>
      </div>
      <div class="kpi-card" style="border-left-color:#c0392b">
        <div class="kpi-card__icon" style="background:#fdecea"></div>
        <div class="kpi-card__body"><div class="kpi-card__value">{{ enRetard() }}</div><div class="kpi-card__label">En retard</div></div>
      </div>
      <div class="kpi-card" style="border-left-color:#1a3a5c">
        <div class="kpi-card__icon" style="background:#d6eaf8"></div>
        <div class="kpi-card__body"><div class="kpi-card__value">{{ eleves().length }}</div><div class="kpi-card__label">Total inscrits</div></div>
      </div>
    </div>
    <div class="card">
      <div class="card__head">
        <span class="card__title">Élèves inscrits</span>
        <input [(ngModel)]="search" placeholder="Rechercher…" style="border:1px solid #dde3ea;border-radius:8px;padding:6px 12px;font-size:13px;outline:none"/>
      </div>
      <table class="table">
        <thead><tr><th>Nom & Prénom</th><th>Classe</th><th>Mode</th><th>Inscription</th><th>Scolarité</th><th>Statut</th><th></th></tr></thead>
        <tbody>
          @for (e of filteredEleves(); track e.id) {
            <tr>
              <td class="fw-med">{{ e.nom }} {{ e.prenom }}</td>
              <td>{{ e.classe }}</td>
              <td><span class="badge" [class.badge--blue]="e.mode==='tranches'" [class.badge--green]="e.mode==='complet'">{{ e.mode }}</span></td>
              <td>
                @if (e.inscriptionPayee) { <span class="badge badge--green">✓ Payée</span> }
                @else { <span class="badge badge--red">Non payée</span> }
              </td>
              <td>{{ e.montantTotal | number:'1.0-0' }} FCFA</td>
              <td>
                @if (hasRetard(e)) { <span class="badge badge--red">Retard</span> }
                @else { <span class="badge badge--green">À jour</span> }
              </td>
              <td style="display:flex;gap:6px">
                <button class="btn btn--outline" style="padding:3px 8px;font-size:11px;" (click)="voirDetail(e)">Détail</button>
                <button class="btn btn--primary" style="padding:3px 8px;font-size:11px;" (click)="imprimerRecuInscription(e)">🖨️</button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  <!-- ── Enregistrer paiement ── -->
  @if (tab() === 'paiement') {
    <div class="card" style="max-width:680px">
      <div class="card__head"><span class="card__title">Enregistrer un paiement</span></div>
      <div class="modal__body" style="padding:0">
        <div class="field" style="margin-bottom:14px">
          <label class="field__label">Sélectionner un élève</label>
          <select class="field__select" [(ngModel)]="pEleve">
            <option value="">-- Choisir un élève --</option>
            @for (e of eleves(); track e.id) {
              <option [value]="e.id">{{ e.nom }} {{ e.prenom }} — {{ e.classe }}</option>
            }
          </select>
        </div>
        @if (selectedEleve()) {
          <div style="background:#f7f9fb;border-radius:12px;padding:16px;margin-bottom:16px">
            <div style="font-weight:700;font-size:14px;margin-bottom:12px">Échéancier — {{ selectedEleve()!.nom }} {{ selectedEleve()!.prenom }}</div>
            <div class="echeances-grid">
              @for (ec of selectedEleve()!.echeances; track ec.mois) {
                <div class="mois-card" [class.payé]="ec.statut==='payé'" [class.en-retard]="ec.statut==='en retard'" [class.en-attente]="ec.statut==='en attente'"
                  (click)="payerMois(ec)">
                  <div class="mois-nom">{{ ec.mois }}</div>
                  <div class="mois-val">{{ ec.montant | number:'1.0-0' }}</div>
                  <div class="mois-statut" [style.color]="ec.statut==='payé'?'#27ae60':ec.statut==='en retard'?'#c0392b':'#999'">
                    {{ ec.statut === 'payé' ? '✓ Payé' : ec.statut === 'en retard' ? '⚠ Retard' : 'En attente' }}
                  </div>
                </div>
              }
            </div>
          </div>
        }
        <div class="fields-row">
          <div class="field">
            <label class="field__label">Type de paiement</label>
            <select class="field__select" [(ngModel)]="typePaiement">
              <option value="mensuel">Mensualité</option>
              <option value="complet">Paiement complet</option>
              <option value="inscription">Frais d'inscription</option>
            </select>
          </div>
          <div class="field">
            <label class="field__label">Montant (FCFA)</label>
            <input class="field__input" type="number" [(ngModel)]="montantPaye" />
          </div>
        </div>
        <button class="btn btn--primary" (click)="enregistrerPaiement()" style="margin-top:8px">Enregistrer et générer le reçu</button>
      </div>
    </div>
  }

  <!-- ── Nouvelle inscription ── -->
  @if (tab() === 'inscription') {
    <div class="card" style="max-width:700px">
      <div class="card__head"><span class="card__title">Nouvelle inscription</span></div>
      <div style="display:flex;flex-direction:column;gap:12px">
        <div class="fields-row">
          <div class="field"><label class="field__label">Nom *</label><input class="field__input" [(ngModel)]="nInsc.nom" placeholder="Nom de famille"/></div>
          <div class="field"><label class="field__label">Prénom *</label><input class="field__input" [(ngModel)]="nInsc.prenom" placeholder="Prénom"/></div>
        </div>
        <div class="fields-row">
          <div class="field"><label class="field__label">Date de naissance</label><input class="field__input" type="date" [(ngModel)]="nInsc.dateNaissance"/></div>
          <div class="field">
            <label class="field__label">Statut</label>
            <select class="field__select" [(ngModel)]="nInsc.nouveau">
              <option [ngValue]="true">Nouvel élève</option>
              <option [ngValue]="false">Ancien élève</option>
            </select>
          </div>
        </div>
        <div class="fields-row">
          <div class="field">
            <label class="field__label">Niveau</label>
            <select class="field__select" [(ngModel)]="nInsc.niveau">
              <option value="primaire">Primaire</option>
              <option value="college">Collège</option>
              <option value="lycee">Lycée</option>
            </select>
          </div>
          <div class="field">
            <label class="field__label">Classe</label>
            <select class="field__select" [(ngModel)]="nInsc.classe">
              @for (c of classesForNiveau(nInsc.niveau); track c) { <option [value]="c">{{ c }}</option> }
            </select>
          </div>
        </div>
        @if (nInsc.niveau === 'lycee') {
          <div class="field">
            <label class="field__label">Série</label>
            <select class="field__select" [(ngModel)]="nInsc.serie">
              <optgroup label="Série Moderne"><option value="A4">A4</option><option value="D">D</option></optgroup>
              <optgroup label="Série Technique"><option value="F1">F1 (Électronique)</option><option value="F2">F2 (Génie Civil)</option><option value="G1">G1 (Gestion)</option><option value="G2">G2 (Secrétariat)</option></optgroup>
            </select>
          </div>
        }
        <div class="fields-row">
          <div class="field">
            <label class="field__label">Mode de paiement</label>
            <select class="field__select" [(ngModel)]="nInsc.mode">
              <option value="tranches">Paiement en tranches</option>
              <option value="complet">Paiement complet</option>
            </select>
          </div>
          @if (nInsc.mode === 'tranches') {
            <div class="field">
              <label class="field__label">Montant mensuel (FCFA)</label>
              <input class="field__input" type="number" [(ngModel)]="nInsc.montantMensuel" />
            </div>
          }
        </div>
        @if (nInsc.mode === 'tranches') {
          <div class="fields-row">
            <div class="field">
              <label class="field__label">Date limite de paiement (jour du mois)</label>
              <input class="field__input" type="number" min="1" max="28" [(ngModel)]="nInsc.jourLimite" placeholder="Ex: 10" />
            </div>
          </div>
          <div style="background:#eaf3fd;border-radius:10px;padding:12px;font-size:13px;color:#1a5276">
            ℹ️ Une notification sera envoyée au comptable le {{ nInsc.jourLimite - 5 > 0 ? nInsc.jourLimite - 5 : 1 }} de chaque mois.
          </div>
        }
        <div class="fields-row">
          <div class="field"><label class="field__label">Frais d'inscription (FCFA)</label><input class="field__input" type="number" [(ngModel)]="nInsc.montantInscription"/></div>
          <div class="field"><label class="field__label">Montant total scolarité (FCFA)</label><input class="field__input" type="number" [(ngModel)]="nInsc.montantTotal"/></div>
        </div>
        <button class="btn btn--primary" (click)="inscrire()" style="margin-top:4px">Inscrire et générer le reçu d'inscription</button>
      </div>
    </div>
  }

  <!-- ── Historique des reçus ── -->
  @if (tab() === 'historique') {
    <div class="card">
      <div class="card__head"><span class="card__title">Historique des reçus</span></div>
      <table class="table">
        <thead><tr><th>N° Reçu</th><th>Date</th><th>Élève</th><th>Classe</th><th>Type</th><th>Montant</th><th>Action</th></tr></thead>
        <tbody>
          @for (r of recus(); track r.id) {
            <tr>
              <td class="fw-med">{{ r.numero }}</td>
              <td class="text-muted">{{ r.date }}</td>
              <td>{{ r.eleve }}</td>
              <td>{{ r.classe }}</td>
              <td><span class="badge badge--blue">{{ r.type }}</span></td>
              <td>{{ r.montant | number:'1.0-0' }} FCFA</td>
              <td><button class="btn btn--outline" style="padding:3px 8px;font-size:11px;" (click)="imprimerRecu(r)">🖨️ Imprimer</button></td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }
</div>
  `
})
export class PaiementsComponent {
  tab = signal<'liste'|'paiement'|'inscription'|'historique'>('liste');
  search = '';
  pEleve = '';
  typePaiement = 'mensuel';
  montantPaye = 0;

  nInsc = { nom:'', prenom:'', dateNaissance:'', nouveau:true, niveau:'college' as 'primaire'|'college'|'lycee',
             classe:'6ème A', serie:'D', mode:'tranches' as ModeP, montantMensuel:15000, montantInscription:25000,
             montantTotal:135000, jourLimite:10 };

  MOIS_SCOLAIRES = ['Septembre','Octobre','Novembre','Décembre','Janvier','Février','Mars','Avril','Mai','Juin'];

  eleves = signal<PaiementEleve[]>([
    { id:'1', nom:'KONAN', prenom:'Marie',   classe:'3ème A', niveau:'college', nouveau:false, anneeScolaire:'2025-2026',
      mode:'tranches', montantTotal:180000, montantInscription:25000, inscriptionPayee:true,
      dateNaissance:'2010-03-15', age:16,
      echeances: this.MOIS_SCOLAIRES.map((m,i) => ({ mois:m, montant:18000, statut: i<5?'payé':'en attente' as StatutMois })) },
    { id:'2', nom:'KOFFI', prenom:'Jean',    classe:'Tle D',  niveau:'lycee',  serie:'D', nouveau:false, anneeScolaire:'2025-2026',
      mode:'complet', montantTotal:220000, montantInscription:30000, inscriptionPayee:true,
      dateNaissance:'2007-08-20', age:18,
      echeances: this.MOIS_SCOLAIRES.map(m => ({ mois:m, montant:22000, statut:'payé' as StatutMois })) },
    { id:'3', nom:'BAMBA', prenom:'Fatou',   classe:'6ème B', niveau:'college', nouveau:true, anneeScolaire:'2025-2026',
      mode:'tranches', montantTotal:120000, montantInscription:25000, inscriptionPayee:true,
      dateNaissance:'2013-01-05', age:13,
      echeances: this.MOIS_SCOLAIRES.map((m,i) => ({ mois:m, montant:12000, statut: i<3?'payé':i===3?'en retard':'en attente' as StatutMois })) },
  ]);

  recus = signal<{id:string;numero:string;date:string;eleve:string;classe:string;type:string;montant:number}[]>([
    { id:'1', numero:'REC-2026-001', date:'23/04/2026', eleve:'KONAN Marie',   classe:'3ème A', type:'Mensualité Avril',   montant:18000 },
    { id:'2', numero:'REC-2026-002', date:'01/03/2026', eleve:'BAMBA Fatou',   classe:'6ème B', type:'Inscription',        montant:25000 },
    { id:'3', numero:'REC-2026-003', date:'15/02/2026', eleve:'KOFFI Jean',    classe:'Tle D',  type:'Scolarité complète', montant:220000 },
  ]);

  selectedEleve = computed(() => this.eleves().find(e => e.id === this.pEleve) ?? null);
  filteredEleves = computed(() => !this.search ? this.eleves() : this.eleves().filter(e =>
    `${e.nom} ${e.prenom} ${e.classe}`.toLowerCase().includes(this.search.toLowerCase())));

  aJour    = computed(() => this.eleves().filter(e => !this.hasRetard(e)).length);
  enRetard = computed(() => this.eleves().filter(e => this.hasRetard(e)).length);

  hasRetard(e: PaiementEleve): boolean {
    return e.echeances.some(ec => ec.statut === 'en retard');
  }

  classesForNiveau(n: string): string[] {
    if (n === 'primaire') return ['CP A','CP B','CE1 A','CE1 B','CE2 A','CE2 B','CM1 A','CM1 B','CM2 A','CM2 B'];
    if (n === 'college')  return ['6ème A','6ème B','5ème A','5ème B','4ème A','4ème B','3ème A','3ème B'];
    return ['2nde A4','2nde D','2nde F','1ère A4','1ère D','1ère F1','1ère F2','Tle A4','Tle D','Tle G1','Tle G2'];
  }

  payerMois(ec: EcheanceMois) {
    if (ec.statut === 'payé') return;
    ec.statut = 'payé';
    ec.datePaiement = new Date().toLocaleDateString('fr-FR');
    const e = this.selectedEleve()!;
    const num = `REC-${new Date().getFullYear()}-${String(this.recus().length+1).padStart(3,'0')}`;
    this.recus.update(r => [{ id:Date.now().toString(), numero:num, date:ec.datePaiement!, eleve:`${e.nom} ${e.prenom}`, classe:e.classe, type:`Mensualité ${ec.mois}`, montant:ec.montant }, ...r]);
    this.imprimerRecuMois(e, ec, num);
  }

  enregistrerPaiement() {
    const e = this.selectedEleve(); if (!e) return;
    const num = `REC-${new Date().getFullYear()}-${String(this.recus().length+1).padStart(3,'0')}`;
    this.recus.update(r => [{ id:Date.now().toString(), numero:num, date:new Date().toLocaleDateString('fr-FR'), eleve:`${e.nom} ${e.prenom}`, classe:e.classe, type:this.typePaiement, montant:this.montantPaye }, ...r]);
    alert(`Reçu ${num} généré !`);
  }

  inscrire() {
    if (!this.nInsc.nom || !this.nInsc.prenom) return;
    const echeances = this.MOIS_SCOLAIRES.map(m => ({ mois:m, montant:this.nInsc.montantMensuel, statut:'en attente' as StatutMois }));
    const nouvel: PaiementEleve = { id:Date.now().toString(), nom:this.nInsc.nom, prenom:this.nInsc.prenom,
      classe:this.nInsc.classe, niveau:this.nInsc.niveau, serie:this.nInsc.serie, nouveau:this.nInsc.nouveau,
      anneeScolaire:'2025-2026', mode:this.nInsc.mode, montantTotal:this.nInsc.montantTotal,
      montantInscription:this.nInsc.montantInscription, inscriptionPayee:false,
      dateNaissance:this.nInsc.dateNaissance, age:0, echeances };
    this.eleves.update(l => [nouvel, ...l]);
    this.imprimerRecuInscription(nouvel);
    this.tab.set('liste');
  }

  voirDetail(e: PaiementEleve) { this.pEleve = e.id; this.tab.set('paiement'); }

  imprimerRecuInscription(e: PaiementEleve) {
    const w = window.open('','_blank')!;
    w.document.write(`<html><body style="font-family:Arial;padding:30px;max-width:600px;margin:auto">
      <h2 style="text-align:center">REÇU D'INSCRIPTION</h2>
      <p style="text-align:center;color:#555">${new Date().toLocaleDateString('fr-FR')}</p><hr/>
      <p><b>Élève :</b> ${e.nom} ${e.prenom}</p>
      <p><b>Classe :</b> ${e.classe}</p>
      <p><b>Statut :</b> ${e.nouveau?'Nouvel élève':'Ancien élève'}</p>
      <p><b>Année scolaire :</b> ${e.anneeScolaire}</p><hr/>
      <p><b>Frais d'inscription :</b> ${e.montantInscription.toLocaleString('fr-FR')} FCFA</p>
      <p><b>Scolarité totale :</b> ${e.montantTotal.toLocaleString('fr-FR')} FCFA</p>
      <p><b>Mode de paiement :</b> ${e.mode}</p><hr/>
      <p style="text-align:right;margin-top:20px">Signature du comptable : _______________</p>
    </body></html>`);
    w.print();
  }

  imprimerRecuMois(e: PaiementEleve, ec: EcheanceMois, num: string) {
    const w = window.open('','_blank')!;
    w.document.write(`<html><body style="font-family:Arial;padding:30px;max-width:600px;margin:auto">
      <h2 style="text-align:center">REÇU DE PAIEMENT</h2>
      <p style="text-align:center;color:#555">N° ${num} — ${ec.datePaiement}</p><hr/>
      <p><b>Élève :</b> ${e.nom} ${e.prenom}</p>
      <p><b>Classe :</b> ${e.classe}</p>
      <p><b>Mensualité :</b> ${ec.mois}</p>
      <p><b>Montant payé :</b> ${ec.montant.toLocaleString('fr-FR')} FCFA</p>
      <hr/>
      <p style="text-align:right;margin-top:20px">Signature du comptable : _______________</p>
    </body></html>`);
    w.print();
  }

  imprimerRecu(r: {numero:string;date:string;eleve:string;classe:string;type:string;montant:number}) {
    const w = window.open('','_blank')!;
    w.document.write(`<html><body style="font-family:Arial;padding:30px;max-width:600px;margin:auto">
      <h2 style="text-align:center">REÇU DE PAIEMENT — ${r.numero}</h2>
      <p style="text-align:center;color:#555">${r.date}</p><hr/>
      <p><b>Élève :</b> ${r.eleve}</p>
      <p><b>Classe :</b> ${r.classe}</p>
      <p><b>Type :</b> ${r.type}</p>
      <p><b>Montant :</b> ${r.montant.toLocaleString('fr-FR')} FCFA</p>
      <hr/><p style="text-align:right;margin-top:20px">Signature : _______________</p>
    </body></html>`);
    w.print();
  }
}
