import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ferme-collab-roles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ferme-collab-roles.component.html',
  styleUrl: './ferme-collab-roles.component.scss'
})
export class FermeCollabRolesComponent {
  roles = {
    employee: false,
    hr: false,
    accountant: false
  };

  constructor(private readonly router: Router) {}

  proceed() {
    if (!this.roles.employee && !this.roles.hr && !this.roles.accountant) return;
    const selected = Object.entries(this.roles)
      .filter(([_, v]) => v)
      .map(([k]) => k)
      .join(',');
    this.router.navigate(['/ferme-collab-info'], { queryParams: { roles: selected } });
  }
}
