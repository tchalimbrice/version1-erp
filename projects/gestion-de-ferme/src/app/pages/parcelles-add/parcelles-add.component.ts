import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parcelles-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parcelles-add.component.html',
  styleUrl: './parcelles-add.component.scss'
})
export class ParcellesAddComponent {
  name = '';
  culture = '';
  area = '';
  status = '';

  constructor(private readonly router: Router) {}

  submit() {
    if (!this.name || !this.culture || !this.area) return;
    this.router.navigate(['/parcelles']);
  }

  cancel() {
    this.router.navigate(['/parcelles']);
  }
}
