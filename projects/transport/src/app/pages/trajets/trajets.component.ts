import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-trajets',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './trajets.component.html',
  styleUrl: './trajets.component.scss'
})
export class TrajetsComponent {
  constructor(private readonly store: CollabStoreService) {}

  logView() {
    this.store.logAction('employee', this.store.currentUser()?.name ?? 'Employé', 'Consulte la liste des trajets');
  }

  get returnRoute(): string {
    return this.store.mode() === 'centralized' ? '/dashboard' : '/trajets';
  }
}

