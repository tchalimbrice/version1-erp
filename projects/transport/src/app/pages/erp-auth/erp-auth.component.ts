import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erp-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './erp-auth.component.html',
  styleUrl: './erp-auth.component.scss'
})
export class ErpAuthComponent {
  isLoginModalOpen = signal(false);
  email = '';
  password = '';

  constructor(private readonly router: Router) {}

  onStart() {
    this.router.navigate(['/inscription']);
  }

  onDemo() {
    this.router.navigate(['/dashboard']);
  }

  openLogin() {
    this.isLoginModalOpen.set(true);
  }

  onLoginClose() {
    this.isLoginModalOpen.set(false);
  }

  onLogin() {
    this.onLoginClose();
  }
}
