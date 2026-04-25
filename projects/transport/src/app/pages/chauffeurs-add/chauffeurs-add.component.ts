import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-chauffeurs-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chauffeurs-add.component.html',
  styleUrl: './chauffeurs-add.component.scss'
})
export class ChauffeursAddComponent {
  driverName = '';
  phone = '';
  license = '';
  vehicle = '';

  constructor(private readonly store: CollabStoreService, private readonly router: Router) {}

  submit() {
    if (!this.driverName || !this.phone || !this.license) return;
    this.store.logAction('hr', this.store.currentUser()?.name ?? 'RH', 'Ajoute un chauffeur');
    this.router.navigate(['/chauffeurs']);
  }

  cancel() {
    this.router.navigate(['/chauffeurs']);
  }
}
