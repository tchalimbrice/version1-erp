import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erp-auth',
  standalone: true,
  imports: [],
  templateUrl: './erp-auth.component.html',
  styleUrl: './erp-auth.component.scss'
})
export class ErpAuthComponent {
  constructor(private readonly router: Router) {}

  onStart()           { this.router.navigate(['/erp-company-setup']); }
  onDemo()            { this.router.navigate(['/erp-company-setup']); }
  openLogin()         { this.router.navigate(['/connexion']); }
  openCommentCaMarche(){ this.router.navigate(['/comment-ca-marche']); }
}
