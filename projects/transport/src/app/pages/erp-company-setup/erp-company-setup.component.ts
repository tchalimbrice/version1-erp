import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';

type CompanyMode = 'centralized' | 'collaborative';
type CompanyDomain =
  | 'transport'
  | 'gestion-commerce'
  | 'gestion-sante'
  | 'gestion-education'
  | 'gestion-construction'
  | 'gestion-logistique';

@Component({
  selector: 'app-erp-company-setup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './erp-company-setup.component.html',
  styleUrl: './erp-company-setup.component.scss'
})
export class ErpCompanySetupComponent {
  currentStep = 1;
  totalSteps = 2;
  selectedMode: CompanyMode | null = null;
  selectedDomain: CompanyDomain | null = null;

  constructor(
    private readonly store: CollabStoreService,
    private readonly router: Router
  ) {}

  selectMode(mode: CompanyMode) {
    this.selectedMode = mode;
    this.store.setMode(mode);
  }

  selectDomain(domain: CompanyDomain) {
    this.selectedDomain = domain;
    this.store.setDomain(domain);
  }

  nextStep() {
    if (this.currentStep === 1 && !this.selectedMode) return;
    if (this.currentStep === 2) {
      if (!this.selectedDomain) return;
      this.redirectToDomainApp(this.selectedDomain);
      return;
    }
    if (this.currentStep < this.totalSteps) this.currentStep++;
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goBack() {
    this.router.navigate(['/erp-auth']);
  }

  private redirectToDomainApp(domain: CompanyDomain) {
    if (this.selectedMode === 'centralized') {
      this.router.navigate(['/connexion']);
      return;
    }
    this.router.navigate(['/transport-collab-roles'], {
      queryParams: { domain }
    });
  }
}
