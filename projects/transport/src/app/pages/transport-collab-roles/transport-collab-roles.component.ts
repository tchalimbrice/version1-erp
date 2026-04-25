import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../services/collab-store.service';

type CompanyDomain =
  | 'transport'
  | 'gestion-commerce'
  | 'gestion-sante'
  | 'gestion-education'
  | 'gestion-construction'
  | 'gestion-logistique';

interface RoleOption {
  key: Role;
  label: string;
  description: string;
}

const domainRoleOptions: Record<CompanyDomain, RoleOption[]> = {
  transport: [
    { key: 'employee', label: 'Employés', description: 'Accès trajets, véhicules et suivi en temps réel.' },
    { key: 'hr', label: 'RH', description: 'Accès chauffeurs, employés et planning.' },
    { key: 'accountant', label: 'Comptable', description: 'Accès factures, tickets et ventes.' }
  ],
  'gestion-commerce': [
    { key: 'employee', label: 'Vendeurs', description: 'Accès ventes, catalogue et commandes.' },
    { key: 'hr', label: 'Administratif', description: 'Accès employés, planning et stocks.' },
    { key: 'accountant', label: 'Comptable', description: 'Accès facturation et trésorerie.' }
  ],
  'gestion-sante': [
    { key: 'employee', label: 'Personnel soignant', description: 'Accès patients, dossiers et rendez-vous.' },
    { key: 'hr', label: 'Administratif', description: 'Accès planning et ressources.' },
    { key: 'accountant', label: 'Comptable', description: 'Accès facturation et dépenses.' }
  ],
  'gestion-education': [
    { key: 'employee', label: 'Enseignants', description: 'Accès cours, notes et présence.' },
    { key: 'hr', label: 'Administratif', description: 'Accès emploi du temps et ressources.' },
    { key: 'accountant', label: 'Comptable', description: 'Accès frais et paiements.' }
  ],
  'gestion-construction': [
    { key: 'employee', label: 'Opérateurs', description: 'Accès chantiers, tâches et matériaux.' },
    { key: 'hr', label: 'Supervision', description: 'Accès équipes et plannings.' },
    { key: 'accountant', label: 'Comptable', description: 'Accès budgets et factures.' }
  ],
  'gestion-logistique': [
    { key: 'employee', label: 'Chauffeurs', description: 'Accès livraisons, trajets et suivi.' },
    { key: 'hr', label: 'Planning', description: 'Accès ressources et affectations.' },
    { key: 'accountant', label: 'Comptable', description: 'Accès coûts et facturation.' }
  ]
};

const domainTitles: Record<CompanyDomain, string> = {
  transport: 'Transport',
  'gestion-commerce': 'Commerce',
  'gestion-sante': 'Santé',
  'gestion-education': 'Éducation',
  'gestion-construction': 'Construction',
  'gestion-logistique': 'Logistique'
};

@Component({
  selector: 'app-transport-collab-roles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transport-collab-roles.component.html',
  styleUrl: './transport-collab-roles.component.scss'
})
export class TransportCollabRolesComponent {
  domain: CompanyDomain = 'transport';
  roles: Partial<Record<Role, boolean>> = {
    employee: false,
    hr: false,
    accountant: false
  };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    const requestedDomain = this.route.snapshot.queryParamMap.get('domain') as CompanyDomain | null;
    if (requestedDomain && requestedDomain in domainTitles) {
      this.domain = requestedDomain;
    }
  }

  get roleOptions(): RoleOption[] {
    return domainRoleOptions[this.domain] ?? domainRoleOptions.transport;
  }

  get domainLabel(): string {
    return domainTitles[this.domain] ?? 'Transport';
  }

  proceed() {
    if (!this.roles.employee && !this.roles.hr && !this.roles.accountant) return;
    const selected = Object.entries(this.roles)
      .filter(([_, v]) => v)
      .map(([k]) => k)
      .join(',');
    this.router.navigate(['/transport-collab-info'], {
      queryParams: { roles: selected, domain: this.domain }
    });
  }
}
