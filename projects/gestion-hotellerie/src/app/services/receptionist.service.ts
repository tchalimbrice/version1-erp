import { Injectable, signal, computed } from '@angular/core';

export type TypeDocument = 'CNI' | 'Passeport' | 'Carte de séjour';
export type StatutReservation = 'Confirmée' | 'En attente' | 'Arrivée' | 'Partie' | 'Annulée';
export type StatutCommande   = 'En attente' | 'En cours' | 'Livrée' | 'Annulée';
export type TypeCommande     = 'Room service' | 'Restaurant' | 'Bar' | 'Blanchisserie' | 'Divers';

export interface ClientHotel {
  id: number; code: string; nom: string; prenom: string;
  tel: string; email: string; adresse: string; nationalite: string;
  typeDocument: TypeDocument; numeroDocument: string;
  totalSejours: number; dateCreation: string;
}

export interface Reservation {
  id: number; numero: string;
  clientId: number; clientNom: string;
  chambre: string; typeChambre: string;
  dateArrivee: string; dateDepart: string;
  nbNuits: number; nbPersonnes: number;
  statut: StatutReservation;
  montant: number; notes: string;
  dateCreation: string;
}

export interface LigneCommande { produit: string; quantite: number; prixUnit: number; }
export interface Commande {
  id: number; numero: string;
  chambre: string; clientNom: string;
  type: TypeCommande;
  lignes: LigneCommande[];
  montant: number;
  statut: StatutCommande;
  dateCommande: string; heureCommande: string;
  notes: string;
}

const KEY = 'hotel_reception_v1';

interface State { clients: ClientHotel[]; reservations: Reservation[]; commandes: Commande[]; }

const INIT: State = {
  clients: [
    { id:1,  code:'CLI-001', nom:'Dupont',   prenom:'Jean',      tel:'+33 6 11 22 33 44', email:'jean.dupont@gmail.com',   adresse:'Paris, France',         nationalite:'Française',    typeDocument:'Passeport',      numeroDocument:'09AB12345',  totalSejours:3,  dateCreation:'10/01/2025' },
    { id:2,  code:'CLI-002', nom:'Lemoine',  prenom:'Marie',     tel:'+33 6 22 33 44 55', email:'m.lemoine@orange.fr',     adresse:'Lyon, France',          nationalite:'Française',    typeDocument:'CNI',            numeroDocument:'CI987654321',totalSejours:1,  dateCreation:'15/02/2025' },
    { id:3,  code:'CLI-003', nom:'Konaté',   prenom:'Aminata',   tel:'+225 07 33 44 55 6',email:'a.konate@gmail.com',      adresse:'Abidjan, Côte d\'Ivoire',nationalite:'Ivoirienne',  typeDocument:'Passeport',      numeroDocument:'A1234567',   totalSejours:5,  dateCreation:'01/03/2025' },
    { id:4,  code:'CLI-004', nom:'Müller',   prenom:'Hans',      tel:'+49 171 345 6789',  email:'hans.mueller@web.de',     adresse:'Berlin, Allemagne',     nationalite:'Allemande',    typeDocument:'Passeport',      numeroDocument:'C01X00T47',  totalSejours:2,  dateCreation:'20/03/2025' },
    { id:5,  code:'CLI-005', nom:'Traoré',   prenom:'Fatoumata', tel:'+225 05 55 66 77 8',email:'',                        adresse:'Bouaké, Côte d\'Ivoire', nationalite:'Ivoirienne',  typeDocument:'CNI',            numeroDocument:'CI876543',   totalSejours:2,  dateCreation:'05/04/2025' },
    { id:6,  code:'CLI-006', nom:'Bernard',  prenom:'Sophie',    tel:'+33 7 44 55 66 77', email:'sophie.b@outlook.com',    adresse:'Marseille, France',     nationalite:'Française',    typeDocument:'CNI',            numeroDocument:'CI765432',   totalSejours:1,  dateCreation:'10/04/2025' },
    { id:7,  code:'CLI-007', nom:'Diallo',   prenom:'Mamadou',   tel:'+224 622 11 22 33', email:'m.diallo@yahoo.fr',       adresse:'Conakry, Guinée',       nationalite:'Guinéenne',    typeDocument:'Passeport',      numeroDocument:'G8765432',   totalSejours:4,  dateCreation:'12/04/2025' },
  ],
  reservations: [
    { id:1, numero:'RES-001', clientId:1, clientNom:'Jean Dupont',      chambre:'201', typeChambre:'Standard',   dateArrivee:'20/04/2025', dateDepart:'23/04/2025', nbNuits:3, nbPersonnes:1, statut:'Partie',     montant:360000, notes:'',                          dateCreation:'15/04/2025' },
    { id:2, numero:'RES-002', clientId:3, clientNom:'Aminata Konaté',   chambre:'305', typeChambre:'Suite',      dateArrivee:'22/04/2025', dateDepart:'26/04/2025', nbNuits:4, nbPersonnes:2, statut:'Arrivée',    montant:960000, notes:'Cliente VIP, fleurs à l\'arrivée.',dateCreation:'10/04/2025' },
    { id:3, numero:'RES-003', clientId:4, clientNom:'Hans Müller',      chambre:'102', typeChambre:'Standard',   dateArrivee:'23/04/2025', dateDepart:'25/04/2025', nbNuits:2, nbPersonnes:1, statut:'Confirmée',  montant:240000, notes:'',                          dateCreation:'18/04/2025' },
    { id:4, numero:'RES-004', clientId:2, clientNom:'Marie Lemoine',    chambre:'215', typeChambre:'Supérieur',  dateArrivee:'25/04/2025', dateDepart:'27/04/2025', nbNuits:2, nbPersonnes:2, statut:'Confirmée',  montant:320000, notes:'Lit bébé demandé.',          dateCreation:'20/04/2025' },
    { id:5, numero:'RES-005', clientId:7, clientNom:'Mamadou Diallo',   chambre:'103', typeChambre:'Standard',   dateArrivee:'26/04/2025', dateDepart:'28/04/2025', nbNuits:2, nbPersonnes:1, statut:'En attente', montant:240000, notes:'',                          dateCreation:'21/04/2025' },
    { id:6, numero:'RES-006', clientId:5, clientNom:'Fatoumata Traoré', chambre:'12',  typeChambre:'Standard',   dateArrivee:'28/04/2025', dateDepart:'30/04/2025', nbNuits:2, nbPersonnes:2, statut:'En attente', montant:240000, notes:'',                          dateCreation:'21/04/2025' },
  ],
  commandes: [
    { id:1, numero:'CMD-001', chambre:'305', clientNom:'Aminata Konaté',   type:'Room service', lignes:[{produit:'Petit-déjeuner continental',quantite:2,prixUnit:15000},{produit:'Jus d\'orange frais',quantite:2,prixUnit:3500}], montant:37000, statut:'Livrée',      dateCommande:'22/04/2025', heureCommande:'07:30', notes:'' },
    { id:2, numero:'CMD-002', chambre:'201', clientNom:'Jean Dupont',      type:'Bar',          lignes:[{produit:'Coca-Cola',quantite:3,prixUnit:2000},{produit:'Eau minérale',quantite:2,prixUnit:1500}],                           montant:9000,  statut:'Livrée',      dateCommande:'21/04/2025', heureCommande:'20:15', notes:'' },
    { id:3, numero:'CMD-003', chambre:'305', clientNom:'Aminata Konaté',   type:'Room service', lignes:[{produit:'Dîner gastronomique',quantite:2,prixUnit:35000}],                                                                  montant:70000, statut:'En cours',    dateCommande:'22/04/2025', heureCommande:'19:45', notes:'Sans gluten.' },
    { id:4, numero:'CMD-004', chambre:'102', clientNom:'Hans Müller',      type:'Blanchisserie',lignes:[{produit:'Chemise',quantite:3,prixUnit:3000},{produit:'Pantalon',quantite:2,prixUnit:4000}],                                 montant:17000, statut:'En attente',  dateCommande:'23/04/2025', heureCommande:'09:00', notes:'Retour avant 18h.' },
    { id:5, numero:'CMD-005', chambre:'215', clientNom:'Marie Lemoine',    type:'Restaurant',   lignes:[{produit:'Menu déjeuner',quantite:2,prixUnit:18000},{produit:'Vin blanc',quantite:1,prixUnit:12000}],                        montant:48000, statut:'En attente',  dateCommande:'25/04/2025', heureCommande:'13:00', notes:'' },
  ]
};

@Injectable({ providedIn: 'root' })
export class ReceptionistService {
  private _state = signal<State>(this.load());

  readonly clients      = computed(() => this._state().clients);
  readonly reservations = computed(() => this._state().reservations);
  readonly commandes    = computed(() => this._state().commandes);

  readonly stats = computed(() => {
    const today = new Date().toLocaleDateString('fr-FR');
    const res   = this._state().reservations;
    const cmd   = this._state().commandes;
    return {
      arrivees:      res.filter(r => r.dateArrivee === today && r.statut === 'Confirmée').length,
      departs:       res.filter(r => r.dateDepart  === today && r.statut === 'Arrivée').length,
      enSejour:      res.filter(r => r.statut === 'Arrivée').length,
      commandesActives: cmd.filter(c => c.statut === 'En attente' || c.statut === 'En cours').length,
    };
  });

  private load(): State {
    try { const r = localStorage.getItem(KEY); return r ? JSON.parse(r) : INIT; } catch { return INIT; }
  }
  private save() { localStorage.setItem(KEY, JSON.stringify(this._state())); }

  // Clients
  ajouterClient(data: Omit<ClientHotel, 'id' | 'code' | 'totalSejours' | 'dateCreation'>) {
    const ids = this._state().clients.map(c => c.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    const client: ClientHotel = { ...data, id, code: `CLI-${String(id).padStart(3,'0')}`, totalSejours: 0, dateCreation: new Date().toLocaleDateString('fr-FR') };
    this._state.update(s => ({ ...s, clients: [...s.clients, client] }));
    this.save();
    return client;
  }

  modifierClient(id: number, changes: Partial<ClientHotel>) {
    this._state.update(s => ({ ...s, clients: s.clients.map(c => c.id === id ? { ...c, ...changes } : c) }));
    this.save();
  }

  // Réservations
  ajouterReservation(data: Omit<Reservation, 'id' | 'numero' | 'dateCreation'>) {
    const ids = this._state().reservations.map(r => r.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    const res: Reservation = { ...data, id, numero: `RES-${String(id).padStart(3,'0')}`, dateCreation: new Date().toLocaleDateString('fr-FR') };
    this._state.update(s => ({ ...s, reservations: [res, ...s.reservations] }));
    this._state.update(s => ({ ...s, clients: s.clients.map(c => c.id === data.clientId ? { ...c, totalSejours: c.totalSejours + 1 } : c) }));
    this.save();
  }

  changerStatutReservation(id: number, statut: StatutReservation) {
    this._state.update(s => ({ ...s, reservations: s.reservations.map(r => r.id === id ? { ...r, statut } : r) }));
    this.save();
  }

  // Commandes
  ajouterCommande(data: Omit<Commande, 'id' | 'numero'>) {
    const ids = this._state().commandes.map(c => c.id);
    const id  = ids.length ? Math.max(...ids) + 1 : 1;
    const cmd: Commande = { ...data, id, numero: `CMD-${String(id).padStart(3,'0')}` };
    this._state.update(s => ({ ...s, commandes: [cmd, ...s.commandes] }));
    this.save();
  }

  changerStatutCommande(id: number, statut: StatutCommande) {
    this._state.update(s => ({ ...s, commandes: s.commandes.map(c => c.id === id ? { ...c, statut } : c) }));
    this.save();
  }
}
