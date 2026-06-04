import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollaboratorService, CollaboratorDto } from '../../services/collaborator.service';
import { UserApiService } from '../../services/user-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collaborators',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './collaborators.component.html',
  styleUrl: './collaborators.component.scss'
})
export class CollaboratorsComponent implements OnInit {
  companyId: number | null = null;
  collaborators: CollaboratorDto[] = [];
  loading = false;
  // form
  emailQuery = '';
  userSuggestions: Array<{ id: number; email: string; firstName: string; lastName: string; }> = [];
  newUserId = 0;
  newPosition = '';
  newDataAccess = true;
  newReportAccess = true;
  newSettingsAccess = false;
  message = '';

  constructor(
    private collaboratorService: CollaboratorService,
    private userApi: UserApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.companyId = params['companyId'] ? Number(params['companyId']) : null;
      if (this.companyId) this.load();
    });
  }

  load() {
    if (!this.companyId) return;
    this.loading = true;
    this.collaboratorService.listByCompany(this.companyId).subscribe({ next: (data) => { this.collaborators = data || []; this.loading = false; }, error: () => { this.loading = false; } });
  }

  add() {
    if (!this.companyId) { this.message = 'CompanyId missing'; return; }
    if (!this.newUserId) { this.message = 'Veuillez sélectionner un utilisateur valide.'; return; }
    const payload: CollaboratorDto = { companyId: this.companyId, userId: this.newUserId, position: this.newPosition, dataAccess: this.newDataAccess, reportAccess: this.newReportAccess, settingsAccess: this.newSettingsAccess };
    this.collaboratorService.add(payload).subscribe({ next: () => { this.message = 'Collaborator added'; this.resetForm(); this.load(); }, error: (err) => { this.message = err?.error?.message || 'Error adding collaborator'; } });
  }

  searchUsersByEmail(query: string) {
    this.emailQuery = query;
    if (!query || query.length < 3) {
      this.userSuggestions = [];
      return;
    }

    this.userApi.searchByEmail(query).subscribe({
      next: (response: any) => {
        const users = response?.data ?? response ?? [];
        this.userSuggestions = Array.isArray(users)
          ? users.map((user: any) => ({
              id: user.id,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName
            }))
          : [];
      },
      error: () => {
        this.userSuggestions = [];
      }
    });
  }

  selectSuggestion(user: { id: number; email: string; firstName: string; lastName: string; }) {
    this.newUserId = user.id;
    this.emailQuery = user.email;
    this.userSuggestions = [];
    this.message = `Utilisateur sélectionné : ${user.firstName} ${user.lastName}`;
  }

  resetForm() {
    this.newUserId = 0; this.newPosition = ''; this.newDataAccess = true; this.newReportAccess = true; this.newSettingsAccess = false; this.message = '';
  }

  suspend(id: number) { this.collaboratorService.suspend(id).subscribe({ next: () => this.load() }); }
  activate(id: number) { this.collaboratorService.activate(id).subscribe({ next: () => this.load() }); }
  remove(id: number) { this.collaboratorService.remove(id).subscribe({ next: () => this.load() }); }
}
