import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

interface MaintenanceItem {
  label: string;
  type: 'bus' | 'permis' | 'carte-grise';
  date: string;
}

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent {
  items: MaintenanceItem[] = [
    { label: 'Bus A-234', type: 'bus', date: '2026-04-20' },
    { label: 'Permis - Pierre Martin', type: 'permis', date: '2026-04-10' },
    { label: 'Carte grise - Bus B-120', type: 'carte-grise', date: '2026-05-02' }
  ];

  constructor(private readonly store: CollabStoreService) {}

  getAlerts() {
    const now = new Date();
    return this.items.filter(i => {
      const d = new Date(i.date);
      const diffDays = (d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
      return diffDays <= 30;
    });
  }

  notify() {
    this.store.logAction('employee', this.store.currentUser()?.name ?? 'Employé', 'Met Ã  jour les notifications de maintenance');
  }

  get returnRoute(): string {
    return this.store.mode() === 'centralized' ? '/dashboard' : '/trajets';
  }
}

