import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elevage-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './elevage-add.component.html',
  styleUrl: './elevage-add.component.scss'
})
export class ElevageAddComponent {
  species = '';
  batch = '';
  age = '';
  status = '';

  constructor(private readonly router: Router) {}

  submit() {
    if (!this.species || !this.batch || !this.age) return;
    this.router.navigate(['/elevage']);
  }

  cancel() {
    this.router.navigate(['/elevage']);
  }
}
