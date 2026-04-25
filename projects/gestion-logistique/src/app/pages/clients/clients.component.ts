import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

interface Client {
  id: string; code: string; nom: string; secteur: string; contact: string;
  telephone: string; email: string; adresse: string;
  commandes: number; caTotal: number; enCours: number; notes: string;
}

@Component({ selector: 'app-clients', standalone: true, imports: [CommonModule, FormsModule],
  templateUrl: './clients.component.html', styleUrl: './clients.component.scss' })
export class ClientsComponent {
  showForm = signal(false);
  search   = signal('');
  form: Omit<Client,'id'|'code'|'commandes'|'caTotal'|'enCours'> = this.empty();

  clients: Client[] = [
    {id:'1', code:'CLT-001', nom:'SuperMart SA',        secteur:'Distribution', contact:'Koné Paul',      telephone:'70 11 22 33', email:'kone@supermart.bf',      adresse:'Secteur 15, Ouaga', commandes:48, caTotal:9200000,  enCours:2, notes:'Client prioritaire'},
    {id:'2', code:'CLT-002', nom:'Pharmavie SARL',      secteur:'Pharmacie',    contact:'Diallo Fatouma', telephone:'70 22 33 44', email:'info@pharmavie.bf',      adresse:'Zogona, Ouaga',     commandes:32, caTotal:4800000,  enCours:1, notes:'Livraisons urgentes fréquentes'},
    {id:'3', code:'CLT-003', nom:'BTP Matériaux',       secteur:'Construction', contact:'Traoré Mamadou', telephone:'70 33 44 55', email:'btpmat@gmail.com',       adresse:'Koudougou',         commandes:15, caTotal:8500000,  enCours:1, notes:''},
    {id:'4', code:'CLT-004', nom:'AgriSud BF',          secteur:'Agriculture',  contact:'Sawadogo Luc',   telephone:'70 44 55 66', email:'agrisud@agri.bf',        adresse:'Fada N\'Gourma',    commandes:28, caTotal:5600000,  enCours:1, notes:'Produits périssables'},
    {id:'5', code:'CLT-005', nom:'Importex SARL',       secteur:'Import/Export',contact:'Barry Ibrahim',  telephone:'70 55 66 77', email:'importex@sarl.bf',       adresse:'Ouagadougou',       commandes:62, caTotal:22000000, enCours:0, notes:'International — Corridor Abidjan'},
    {id:'6', code:'CLT-006', nom:'Minoterie BF',        secteur:'Agro-industrie',contact:'Ouédraogo Elie',telephone:'70 66 77 88', email:'minoterie@bf.com',       adresse:'Zone industrielle', commandes:21, caTotal:4100000,  enCours:1, notes:''},
    {id:'7', code:'CLT-007', nom:'TotalEnergies BF',    secteur:'Énergie',      contact:'Compaoré Alain', telephone:'70 77 88 99', email:'total.bf@total.com',     adresse:'Ouagadougou',       commandes:8,  caTotal:15000000, enCours:1, notes:'Produits dangereux — habilitation requise'},
    {id:'8', code:'CLT-008', nom:'Boulangerie Moderne', secteur:'Agroalimentaire',contact:'Nikiéma Arielle',telephone:'71 11 22 33',email:'boulan.mod@gmail.com',  adresse:'Ouagadougou',       commandes:85, caTotal:1800000,  enCours:1, notes:'Livraisons quotidiennes tôt matin'},
  ];

  get filtered(): Client[] {
    const q = this.search().toLowerCase();
    if (!q) return this.clients;
    return this.clients.filter(c => `${c.nom} ${c.code} ${c.secteur} ${c.contact}`.toLowerCase().includes(q));
  }

  get totalCA(): number { return this.clients.reduce((s,c) => s + c.caTotal, 0); }

  fmt(n: number): string { return n >= 1_000_000 ? (n/1_000_000).toFixed(1)+' M' : n >= 1_000 ? (n/1_000).toFixed(0)+' K' : n.toString(); }

  addClient() {
    if (!this.form.nom) return;
    const num = this.clients.length + 1;
    this.clients.unshift({ id: Date.now().toString(), code: 'CLT-' + String(num).padStart(3,'0'), commandes: 0, caTotal: 0, enCours: 0, ...this.form });
    this.form = this.empty(); this.showForm.set(false);
  }

  private empty(): Omit<Client,'id'|'code'|'commandes'|'caTotal'|'enCours'> {
    return { nom:'', secteur:'', contact:'', telephone:'', email:'', adresse:'', notes:'' };
  }

  constructor(public readonly store: CollabStoreService) {}
}
