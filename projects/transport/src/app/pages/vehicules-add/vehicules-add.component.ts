import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicules-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicules-add.component.html',
  styleUrl: './vehicules-add.component.scss'
})
export class VehiculesAddComponent {
  plate = '';
  type = '';
  status = '';
  driver = '';

  constructor(private readonly router: Router) {}

  submit() {
    if (!this.plate || !this.type) return;
    this.router.navigate(['/vehicules']);
  }

  cancel() {
    this.router.navigate(['/vehicules']);
  }
}
