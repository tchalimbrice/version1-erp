import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvitationService } from '../../services/invitation.service';

@Component({
  selector: 'app-invitation-accept',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './invitation-accept.component.html',
  styleUrl: './invitation-accept.component.scss'
})
export class InvitationAcceptComponent implements OnInit {
  token = '';
  password = '';
  confirm = '';
  message = '';
  accepting = false;

  constructor(private route: ActivatedRoute, private invitationService: InvitationService, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      this.token = typeof token === 'string' ? token : Array.isArray(token) ? token[0] ?? '' : '';
      if (this.token) {
        this.invitationService.getByToken(this.token).subscribe({ next: () => {}, error: () => { this.message = 'Invitation invalide ou expirÃ©e.'; } });
      }
    });
  }

  accept() {
    if (!this.token) {
      this.message = 'Token manquant.';
      return;
    }
    if (!this.accepting) {
      this.accepting = true;
      return;
    }
    if (this.password !== this.confirm) {
      this.message = 'Les mots de passe ne correspondent pas.';
      return;
    }

    this.invitationService.accept(this.token, this.password, this.confirm).subscribe({
      next: () => {
        this.message = 'Invitation acceptÃ©e. Connectez-vous.';
        window.setTimeout(() => void this.router.navigate(['/connexion']), 1500);
      },
      error: (err) => {
        this.message = err?.error?.message || 'Erreur lors de l\'acceptation.';
      }
    });
  }

  goToRegister() {
    if (!this.token) return;
    this.router.navigate(['/register'], { queryParams: { token: this.token } });
  }
}
