import { Component, computed } from '@angular/core';
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
  saved = false;

  hotel = {
    nom: '', adresse: '', telephone: '', email: '', etoiles: 3,
    devise: 'EUR', checkIn: '14:00', checkOut: '12:00'};

  constructor(private readonly store: CollabStoreService) {
    const c = this.store.company();
    if (c) {
      this.hotel.nom       = c.name;
      this.hotel.adresse   = c.address;
      this.hotel.telephone = c.phone;
      this.hotel.email     = c.email;
    }
  }

  save() {
    this.saved = true;
    setTimeout(() => this.saved = false, 3000);
  }
}
