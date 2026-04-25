import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parcelles',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './parcelles.component.html',
  styleUrl: './parcelles.component.scss'
})
export class ParcellesComponent {
  showForm = false;
  name = '';
  culture = '';
  area = '';
  status = '';

  toggleForm() {
    this.showForm = !this.showForm;
  }

  submitForm() {
    if (!this.name || !this.culture || !this.area) return;
    this.name = '';
    this.culture = '';
    this.area = '';
    this.status = '';
    this.showForm = false;
  }
}
