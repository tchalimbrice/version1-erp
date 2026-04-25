import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-chauffeurs',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './chauffeurs.component.html',
  styleUrl: './chauffeurs.component.scss'
})
export class ChauffeursComponent {
  showForm = false;
  driverName = '';
  phone = '';
  license = '';
  vehicle = '';

  constructor(private readonly store: CollabStoreService) {}

  logAdd() {
    this.store.logAction('hr', this.store.currentUser()?.name ?? 'RH', 'Ajoute un chauffeur');
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  submitForm() {
    if (!this.driverName || !this.phone || !this.license) return;
    this.logAdd();
    this.driverName = '';
    this.phone = '';
    this.license = '';
    this.vehicle = '';
    this.showForm = false;
  }

  get returnRoute(): string {
    return this.store.mode() === 'centralized' ? '/dashboard' : '/chauffeurs';
  }
}
