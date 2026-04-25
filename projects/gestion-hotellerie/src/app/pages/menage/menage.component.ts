import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Statut = 'À préparer' | 'En cours' | 'Terminée';

interface Tache {
  id: string; chambre: string; type: string; employe: string; priorite: 'normale' | 'urgente'; statut: Statut;
}

@Component({
  selector: 'app-menage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menage.component.html',
  styleUrl: './menage.component.scss'
})
export class MenageComponent {
  taches: Tache[] = [
    { id: '1', chambre: '118', type: 'Nettoyage complet',  employe: 'Marie D.', priorite: 'urgente',  statut: 'À préparer' },
    { id: '2', chambre: '203', type: 'Nettoyage complet',  employe: 'Sophie L.', priorite: 'normale',  statut: 'En cours'},
    { id: '3', chambre: '305', type: 'Préparation check-in', employe: 'Paul M.',  priorite: 'urgente',  statut: 'Terminée'},
    { id: '4', chambre: '101', type: 'Remplacement linge', employe: 'Marie D.', priorite: 'normale',  statut: 'À préparer' },
    { id: '5', chambre: '202', type: 'Nettoyage complet',  employe: 'Sophie L.', priorite: 'normale',  statut: 'En cours'},
    { id: '6', chambre: '301', type: 'Préparation check-in', employe: 'Paul M.', priorite: 'urgente',  statut: 'Terminée'},
  ];

  get aFaire(): number   { return this.taches.filter(t => t.statut === 'À préparer').length; }
  get enCours(): number  { return this.taches.filter(t => t.statut === 'En cours').length; }
  get terminees(): number { return this.taches.filter(t => t.statut === 'Terminée').length; }

  nextStatut(t: Tache) {
    if (t.statut === 'À préparer') t.statut = 'En cours';
    else if (t.statut === 'En cours') t.statut = 'Terminée';
  }
}
