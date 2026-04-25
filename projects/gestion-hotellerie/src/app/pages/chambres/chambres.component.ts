import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Statut = 'Libre' | 'Occupée' | 'Maintenance';

interface Chambre {
  id: string; numero: string; type: string; capacite: number; etage: number; statut: Statut;
}

@Component({
  selector: 'app-chambres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chambres.component.html',
  styleUrl: './chambres.component.scss'
})
export class ChambresComponent {
  viewMode = signal<'grid' | 'list'>('grid');
  filterEtage = signal('Tous les étages');
  filterStatut = signal('Tous les états');
  showForm = signal(false);

  form = { numero: '', type: 'Standard', capacite: 2, etage: 1 };

  chambres: Chambre[] = [
    { id: '1', numero: '101', type: 'Standard',  capacite: 2, etage: 1, statut: 'Libre' },
    { id: '2', numero: '102', type: 'Standard',  capacite: 2, etage: 1, statut: 'Occupée' },
    { id: '3', numero: '103', type: 'Supérieur', capacite: 2, etage: 1, statut: 'Libre' },
    { id: '4', numero: '201', type: 'Standard',  capacite: 2, etage: 2, statut: 'Libre' },
    { id: '5', numero: '202', type: 'Deluxe',    capacite: 3, etage: 2, statut: 'Maintenance' },
    { id: '6', numero: '203', type: 'Standard',  capacite: 2, etage: 2, statut: 'Occupée' },
    { id: '7', numero: '301', type: 'Suite',     capacite: 4, etage: 3, statut: 'Libre' },
    { id: '8', numero: '302', type: 'Supérieur', capacite: 2, etage: 3, statut: 'Libre' },
  ];

  etages = ['Tous les étages', '1er étage', '2ème étage', '3ème étage'];
  etatsOptions = ['Tous les états', 'Libre', 'Occupée', 'Maintenance'];

  get filtered(): Chambre[] {
    return this.chambres.filter(c => {
      const okEtage = this.filterEtage() === 'Tous les étages' || c.etage === +this.filterEtage().charAt(0);
      const okStatut = this.filterStatut() === 'Tous les états' || c.statut === this.filterStatut();
      return okEtage && okStatut;
    });
  }

  addChambre() {
    if (!this.form.numero) return;
    this.chambres.push({
      id: Date.now().toString(), numero: this.form.numero, type: this.form.type,
      capacite: this.form.capacite, etage: this.form.etage, statut: 'Libre'});
    this.form = { numero: '', type: 'Standard', capacite: 2, etage: 1 };
    this.showForm.set(false);
  }
}
