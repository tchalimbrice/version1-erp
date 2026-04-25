import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-vehicules',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './vehicules.component.html',
  styleUrl: './vehicules.component.scss'
})
export class VehiculesComponent {
  showForm = false;
  plate = '';
  type = '';
  status = '';
  driver = '';

  constructor(private readonly store: CollabStoreService) {}

  toggleForm() {
    this.showForm = !this.showForm;
  }

  submitForm() {
    if (!this.plate || !this.type) return;
    this.plate = '';
    this.type = '';
    this.status = '';
    this.driver = '';
    this.showForm = false;
  }

  get returnRoute(): string {
    return this.store.mode() === 'centralized' ? '/dashboard' : '/trajets';
  }
}
