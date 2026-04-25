import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Sexe = 'M' | 'F';
type Groupe = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

interface Patient {
  id: string; nom: string; prenom: string; dateNaissance: string;
  sexe: Sexe; telephone: string; email: string;
  groupe: Groupe; antecedents: string; derniereVisite: string;
}

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss'
})
export class PatientsComponent {
  showForm = signal(false);
  search = signal('');

  form = { nom: '', prenom: '', dateNaissance: '', sexe: 'M' as Sexe, telephone: '', email: '', groupe: 'O+' as Groupe, antecedents: '' };

  patients: Patient[] = [
    { id: '1', nom: 'Koné',       prenom: 'Aminata',  dateNaissance: '1985-03-14', sexe: 'F', telephone: '07 11 22 33', email: 'kone.a@mail.ci',    groupe: 'A+', antecedents: 'Hypertension',    derniereVisite: '18/04/2024' },
    { id: '2', nom: 'Traoré',     prenom: 'Boubacar', dateNaissance: '1978-07-22', sexe: 'M', telephone: '05 44 55 66', email: 'traore.b@mail.ci',  groupe: 'O+', antecedents: 'Diabète type 2',  derniereVisite: '20/04/2024' },
    { id: '3', nom: 'Bamba',      prenom: 'Fatoumata',dateNaissance: '1992-11-05', sexe: 'F', telephone: '01 77 88 99', email: 'bamba.f@mail.ci',   groupe: 'B-', antecedents: 'Aucun',            derniereVisite: '20/04/2024' },
    { id: '4', nom: 'Coulibaly',  prenom: 'Issouf',   dateNaissance: '1965-01-30', sexe: 'M', telephone: '07 00 11 22', email: 'couli.i@mail.ci',   groupe: 'AB+',antecedents: 'Asthme',           derniereVisite: '15/04/2024' },
    { id: '5', nom: 'Ouattara',   prenom: 'Hawa',     dateNaissance: '2000-06-18', sexe: 'F', telephone: '05 33 44 55', email: 'ouatt.h@mail.ci',   groupe: 'O-', antecedents: 'Allergie pénicilline', derniereVisite: '19/04/2024' },
    { id: '6', nom: 'Diallo',     prenom: 'Moussa',   dateNaissance: '1955-09-12', sexe: 'M', telephone: '07 66 77 88', email: 'diallo.m@mail.ci',  groupe: 'A-', antecedents: 'Cardiaque',         derniereVisite: '17/04/2024' },
  ];

  get filtered(): Patient[] {
    const q = this.search().toLowerCase();
    if (!q) return this.patients;
    return this.patients.filter(p => `${p.nom} ${p.prenom}`.toLowerCase().includes(q) ||
      p.telephone.includes(q)
    );
  }

  age(dob: string): number {
    const d = new Date(dob);
    const now = new Date();
    let age = now.getFullYear() - d.getFullYear();
    const m = now.getMonth() - d.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < d.getDate())) age--;
    return age;
  }

  addPatient() {
    if (!this.form.nom || !this.form.prenom) return;
    this.patients.unshift({
      id: Date.now().toString(),
      ...this.form,
      derniereVisite: new Date().toLocaleDateString('fr-FR')
    });
    this.form = { nom: '', prenom: '', dateNaissance: '', sexe: 'M', telephone: '', email: '', groupe: 'O+', antecedents: '' };
    this.showForm.set(false);
  }
}
