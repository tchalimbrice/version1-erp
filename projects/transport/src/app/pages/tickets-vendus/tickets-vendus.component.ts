import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-tickets-vendus',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tickets-vendus.component.html',
  styleUrl: './tickets-vendus.component.scss'
})
export class TicketsVendusComponent {
  constructor(public readonly store: CollabStoreService) {}

  get returnRoute(): string {
    return this.store.mode() === 'centralized' ? '/dashboard' : '/tickets';
  }
}
