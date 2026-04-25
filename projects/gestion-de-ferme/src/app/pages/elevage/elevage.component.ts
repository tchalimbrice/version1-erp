import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

type Espece = 'Bovin' | 'Ovin' | 'Caprin' | 'Porcin' | 'Volaille' | 'Lapin' | 'Équin';
type EtatSante = 'Bonne santé' | 'Vigilance' | 'Malade' | 'Quarantaine' | 'Décédé';
type Sexe = 'Mâle' | 'Femelle';

export interface Animal {
  id: string;
  numero: string;
  espece: Espece;
  race: string;
  sexe: Sexe;
  lot: string;
  dateNaissance: string;
  poids: number;
  etat: EtatSante;
  notes: string;
}

@Component({
  selector: 'app-elevage',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './elevage.component.html',
  styleUrl: './elevage.component.scss'
})
export class ElevageComponent {
  showForm = signal(false);
  filterEspece = signal('Toutes');
  filterEtat   = signal('Tous');
  filterLot    = signal('Tous');

  readonly especes: Espece[]   = ['Bovin', 'Ovin', 'Caprin', 'Porcin', 'Volaille', 'Lapin', 'Équin'];
  readonly etats: EtatSante[]  = ['Bonne santé', 'Vigilance', 'Malade', 'Quarantaine', 'Décédé'];
  readonly lots: string[]      = ['Lot A', 'Lot B', 'Lot C', 'Lot D', 'Lot E'];

  form: Partial<Animal> = { espece: 'Bovin', sexe: 'Mâle', lot: 'Lot A', etat: 'Bonne santé', poids: 0, notes: '' };

  animaux: Animal[] = [
    { id: '1',  numero: 'BV-001', espece: 'Bovin',    race: 'Zébu local',     sexe: 'Mâle',   lot: 'Lot A', dateNaissance: '2022-03-10', poids: 320, etat: 'Bonne santé', notes: '' },
    { id: '2',  numero: 'BV-002', espece: 'Bovin',    race: 'Zébu local',     sexe: 'Femelle',lot: 'Lot A', dateNaissance: '2021-07-22', poids: 280, etat: 'Bonne santé', notes: '' },
    { id: '3',  numero: 'BV-003', espece: 'Bovin',    race: 'Métis',          sexe: 'Femelle',lot: 'Lot A', dateNaissance: '2020-11-05', poids: 310, etat: 'Vigilance',   notes: 'Légère toux depuis 3 jours' },
    { id: '4',  numero: 'OV-001', espece: 'Ovin',     race: 'Brebis Peul',    sexe: 'Femelle',lot: 'Lot B', dateNaissance: '2023-01-15', poids: 45,  etat: 'Bonne santé', notes: '' },
    { id: '5',  numero: 'OV-002', espece: 'Ovin',     race: 'Bélier Djallonké',sexe: 'Mâle',  lot: 'Lot B', dateNaissance: '2022-06-20', poids: 55,  etat: 'Bonne santé', notes: '' },
    { id: '6',  numero: 'CP-001', espece: 'Caprin',   race: 'Chèvre naine',   sexe: 'Femelle',lot: 'Lot B', dateNaissance: '2023-02-08', poids: 28,  etat: 'Bonne santé', notes: '' },
    { id: '7',  numero: 'CP-002', espece: 'Caprin',   race: 'Bouc',           sexe: 'Mâle',   lot: 'Lot B', dateNaissance: '2022-09-12', poids: 35,  etat: 'Malade',      notes: 'Diarrhée — traitement en cours' },
    { id: '8',  numero: 'VL-001', espece: 'Volaille', race: 'Poulet de chair',sexe: 'Mâle',   lot: 'Lot C', dateNaissance: '2024-01-20', poids: 2.1, etat: 'Bonne santé', notes: '' },
    { id: '9',  numero: 'VL-002', espece: 'Volaille', race: 'Poule pondeuse', sexe: 'Femelle',lot: 'Lot C', dateNaissance: '2023-11-10', poids: 1.8, etat: 'Bonne santé', notes: '' },
    { id: '10', numero: 'VL-003', espece: 'Volaille', race: 'Poule pondeuse', sexe: 'Femelle',lot: 'Lot C', dateNaissance: '2023-11-10', poids: 1.7, etat: 'Vigilance',   notes: '' },
    { id: '11', numero: 'PR-001', espece: 'Porcin',   race: 'Truie large',    sexe: 'Femelle',lot: 'Lot D', dateNaissance: '2022-05-18', poids: 180, etat: 'Bonne santé', notes: '' },
    { id: '12', numero: 'LB-001', espece: 'Lapin',    race: 'Lapin géant',    sexe: 'Mâle',   lot: 'Lot E', dateNaissance: '2024-02-01', poids: 4.2, etat: 'Bonne santé', notes: '' },
  ];

  get filtered(): Animal[] {
    return this.animaux.filter(a => {
      const okEsp = this.filterEspece() === 'Toutes' || a.espece === this.filterEspece();
      const okEtat= this.filterEtat()   === 'Tous'|| a.etat   === this.filterEtat();
      const okLot = this.filterLot()    === 'Tous'|| a.lot    === this.filterLot();
      return okEsp && okEtat && okLot;
    });
  }

  get totalBonneSante(): number { return this.animaux.filter(a => a.etat === 'Bonne santé').length; }
  get totalMalades():    number { return this.animaux.filter(a => a.etat === 'Malade' || a.etat === 'Quarantaine').length; }
  get totalVigilance():  number { return this.animaux.filter(a => a.etat === 'Vigilance').length; }
  get countByEspece(): Array<{espece: string; count: number; icon: string}> {
    const map: Record<string, number> = {};
    for (const a of this.animaux) map[a.espece] = (map[a.espece] ?? 0) + 1;
    const icons: Record<string, string> = { Bovin:'', Ovin:'', Caprin:'', Porcin:'', Volaille:'', Lapin:'', Équin:'' };
    return Object.entries(map).map(([espece, count]) => ({ espece, count, icon: icons[espece] ?? '' }));
  }

  age(dob: string): string {
    const d = new Date(dob);
    const now = new Date();
    const months = (now.getFullYear() - d.getFullYear()) * 12 + (now.getMonth() - d.getMonth());
    if (months < 1) return '< 1 mois';
    if (months < 12) return `${months} mois`;
    const years = Math.floor(months / 12);
    const rem = months % 12;
    return rem ? `${years} an${years > 1 ? 's' : ''} ${rem} mois` : `${years} an${years > 1 ? 's' : ''}`;
  }

  etatClass(e: EtatSante): string {
    const map: Record<EtatSante, string> = {
      'Bonne santé': 'status green',
      'Vigilance':   'status orange',
      'Malade':      'status red',
      'Quarantaine': 'status purple',
      'Décédé':      'status gray',
    };
    return map[e];
  }

  addAnimal() {
    const f = this.form;
    if (!f.numero || !f.espece || !f.race) return;
    this.animaux.unshift({
      id: Date.now().toString(),
      numero: f.numero!,
      espece: f.espece!,
      race:   f.race!,
      sexe:   f.sexe!,
      lot:    f.lot!,
      dateNaissance: f.dateNaissance ?? '',
      poids:  f.poids ?? 0,
      etat:   f.etat!,
      notes:  f.notes ?? ''});
    this.form = { espece: 'Bovin', sexe: 'Mâle', lot: 'Lot A', etat: 'Bonne santé', poids: 0, notes: '' };
    this.showForm.set(false);
  }

  constructor(public readonly store: CollabStoreService) {}
}
