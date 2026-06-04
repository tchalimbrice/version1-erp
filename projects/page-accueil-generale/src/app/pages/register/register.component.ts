import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../../services/user-api.service';
import { InvitationService } from '../../services/invitation.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  username = '';
  email = '';
  firstName = '';
  lastName = '';
  password = '';
  confirm = '';
  domain = '';
  token = '';
  message = '';
  loading = false;
  submitted = false;

  constructor(private userApi: UserApiService, private invitationService: InvitationService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      this.token = typeof token === 'string' ? token : Array.isArray(token) ? token[0] ?? '' : '';
    });
  }

  register() {
    this.submitted = true;
    this.message = '';
    if (!this.isFormValid()) { this.message = 'Veuillez remplir correctement tous les champs.'; return; }
    if (this.password !== this.confirm) { this.message = 'Les mots de passe ne correspondent pas.'; return; }
    this.loading = true;
    const payload = { username: this.username, email: this.email, firstName: this.firstName, lastName: this.lastName, password: this.password, domain: this.domain };
    this.userApi.register(payload).subscribe({
      next: () => {
        this.loading = false;
        if (this.token) {
          this.invitationService.accept(this.token, this.password, this.confirm).subscribe({
            next: () => {
              this.message = 'Inscription et acceptation rÃ©ussies. Connectez-vous.';
              window.setTimeout(() => void this.router.navigate(['/connexion']), 1500);
            },
            error: (err) => {
              this.message = err?.error?.message || 'Erreur lors de l\'acceptation de l\'invitation.';
            }
          });
        } else {
          this.message = 'Inscription rÃ©ussie. Connectez-vous.';
          window.setTimeout(() => void this.router.navigate(['/connexion']), 1200);
        }
      },
      error: (err) => { this.loading = false; this.message = err?.error?.message || 'Erreur lors de l\'inscription.'; }
    });
  }

  isFormValid(): boolean {
    return !!(this.username && this.email && this.firstName && this.lastName && this.domain && this.password && this.confirm && this.password === this.confirm);
  }
}
