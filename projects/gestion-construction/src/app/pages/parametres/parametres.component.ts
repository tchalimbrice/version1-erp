import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-parametres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parametres.component.html',
  styleUrl: './parametres.component.scss'
})
export class ParametresComponent {
  saved = signal(false);
  form!: { name: string; address: string; phone: string; email: string; adminPassword: string; };

  save() {
    this.store.company.set({ ...this.form });
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 2500);
  }

  constructor(public readonly store: CollabStoreService) {
    const c = store.company();
    this.form = { name: c?.name ?? '', address: c?.address ?? '', phone: c?.phone ?? '', email: c?.email ?? '', adminPassword: c?.adminPassword ?? '' };
  }
}
