import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

type CompanyMode = 'centralized' | 'collaborative';
type CompanyDomain =
  | 'transport' | 'agriculture' | 'commerce' | 'health'
  | 'education' | 'construction' | 'hospitality' | 'logistics';

interface CompanyForm {
  nom: string; adresse: string; telephone: string; email: string; adminPassword: string;
}

interface CollabRoleDef {
  key: string;
  label: string;
  description: string;
  icon: string;
  access: string[];
}

interface CollabEntry {
  roleDef: CollabRoleDef;
  nom: string;
  prenom: string;
  email: string;
  password: string;
}

interface GeneratedLink {
  name: string;
  role: string;
  email: string;
  url: string;
}

const COLLAB_ROLES: Record<CompanyDomain, CollabRoleDef[]> = {
  health: [
    { key: 'hr',          label: 'Secrétaire',         icon: '📋', description: 'Gestion administrative quotidienne',     access: ['Rendez-vous', 'Patients', 'Consultations', 'Ordonnances'] },
    { key: 'accountant',  label: 'Comptable / Caissier',icon: '💰', description: 'Facturation et comptabilité',           access: ['Facturation'] },
    { key: 'employee',    label: 'Responsable RH',      icon: '👥', description: 'Gestion du personnel soignant',         access: ['Personnel'] },
    { key: 'pharmacien',  label: 'Pharmacien',          icon: '💊', description: 'Gestion de la pharmacie et INAM',       access: ['Pharmacie', 'Stocks', 'Ventes', 'INAM'] },
  ],
  commerce: [
    { key: 'employee',    label: 'Caissier',            icon: '🛒', description: 'Ventes, clients et facturation',        access: ['Clients', 'Factures', 'Ventes', 'Produits'] },
  ],
  construction: [
    { key: 'employee',    label: 'Architecte',          icon: '📐', description: 'Devis, contrats et matériaux',          access: ['Devis & Contrats', 'Matériaux'] },
    { key: 'hr',          label: 'Responsable RH',      icon: '👥', description: 'Gestion du personnel de chantier',      access: ['Personnel'] },
    { key: 'accountant',  label: 'Comptable',           icon: '💰', description: 'Comptabilité et finances',              access: ['Comptabilité'] },
  ],
  logistics: [
    { key: 'employee',    label: 'Employé Logistique',  icon: '📦', description: 'Opérations et suivi en temps réel',     access: ['Commandes', 'Livraisons', 'Véhicules', 'Entrepôts', 'Clients', 'Suivi GPS'] },
    { key: 'accountant',  label: 'Comptable',           icon: '💰', description: 'Facturation et impression',             access: ['Facturation'] },
    { key: 'hr',          label: 'Responsable RH',      icon: '🚗', description: 'Gestion des chauffeurs',                access: ['Chauffeurs'] },
  ],
  education: [
    { key: 'owner_college', label: 'Directeur Collège / Lycée', icon: '🏫', description: 'Gestion collège et lycée',     access: ['Tableau de bord', 'Emploi du temps', 'Paramètres'] },
    { key: 'hr',          label: 'Secrétaire',                  icon: '📝', description: 'Notes, élèves et absences',     access: ['Notes & Bulletins', 'Gestion des élèves', 'Absences'] },
    { key: 'accountant',  label: 'Comptable',                   icon: '💰', description: 'Paiements et inscription',      access: ['Paiements & Facturation'] },
    { key: 'employee',    label: 'Surveillant / Vigile',        icon: '👁️', description: 'Suivi des absences élèves',    access: ['Absences'] },
  ],
  agriculture: [
    { key: 'employee',    label: 'Employé Agricole',    icon: '🌾', description: 'Gestion des parcelles et élevage',      access: ['Parcelles', 'Élevage', 'Inventaire', 'Ventes', 'Rapports'] },
    { key: 'hr',          label: 'Responsable RH',      icon: '👥', description: 'Gestion du personnel',                  access: ['RH'] },
    { key: 'accountant',  label: 'Comptable',           icon: '💰', description: 'Comptabilité et finances',              access: ['Comptabilité'] },
  ],
  transport: [
    { key: 'employee',    label: 'Employé',             icon: '🚌', description: 'Gestion opérationnelle',               access: ['Véhicules', 'Trajets', 'Billets'] },
    { key: 'hr',          label: 'Responsable RH',      icon: '👥', description: 'Gestion du personnel',                  access: ['RH', 'Chauffeurs'] },
    { key: 'accountant',  label: 'Comptable',           icon: '💰', description: 'Comptabilité',                          access: ['Comptabilité'] },
  ],
  hospitality: [
    { key: 'employee',    label: 'Réceptionniste',      icon: '🏨', description: 'Accueil et réservations',               access: ['Réservations', 'Check-in/out', 'Chambres'] },
    { key: 'hr',          label: 'Responsable RH',      icon: '👥', description: 'Gestion du personnel',                  access: ['RH'] },
    { key: 'accountant',  label: 'Comptable',           icon: '💰', description: 'Facturation et comptabilité',           access: ['Facturation'] },
  ],
};

@Component({
  selector: 'app-erp-company-setup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './erp-company-setup.component.html',
  styleUrl: './erp-company-setup.component.scss'
})
export class ErpCompanySetupComponent {
  currentStep = 1;
  selectedMode: CompanyMode | null = null;
  selectedDomain: CompanyDomain | null = null;

  company: CompanyForm = { nom: '', adresse: '', telephone: '', email: '', adminPassword: '' };

  // Step 4
  selectedCollabKeys = new Set<string>();

  // Step 5
  collabEntries: CollabEntry[] = [];

  // Final
  generatedLinks: GeneratedLink[] = [];
  linksGenerated = false;
  ownerLink = '';

  constructor(private readonly router: Router) {}

  get totalSteps(): number {
    return this.selectedMode === 'collaborative' ? 5 : 3;
  }

  get step1Valid(): boolean {
    return !!(this.company.nom && this.company.email && this.company.adminPassword);
  }

  get availableCollabRoles(): CollabRoleDef[] {
    if (!this.selectedDomain) return [];
    return COLLAB_ROLES[this.selectedDomain] ?? [];
  }

  get step4Valid(): boolean {
    return this.selectedCollabKeys.size > 0;
  }

  get step5Valid(): boolean {
    return this.collabEntries.every(e => e.nom && e.prenom && e.email && e.password);
  }

  selectMode(mode: CompanyMode) { this.selectedMode = mode; }
  selectDomain(domain: CompanyDomain) { this.selectedDomain = domain; }

  toggleCollabRole(key: string) {
    if (this.selectedCollabKeys.has(key)) this.selectedCollabKeys.delete(key);
    else this.selectedCollabKeys.add(key);
  }

  isCollabSelected(key: string): boolean {
    return this.selectedCollabKeys.has(key);
  }

  buildCollabEntries() {
    const defs = this.availableCollabRoles.filter(r => this.selectedCollabKeys.has(r.key));
    this.collabEntries = defs.map(roleDef => ({ roleDef, nom: '', prenom: '', email: '', password: '' }));
  }

  nextStep() {
    if (this.currentStep === 1 && !this.step1Valid) return;
    if (this.currentStep === 2 && !this.selectedMode) return;
    if (this.currentStep === 3) {
      if (!this.selectedDomain) return;
      if (this.selectedMode === 'centralized') {
        this.redirectToDomainApp(this.selectedDomain, 'centralized');
        return;
      }
      this.currentStep++;
      return;
    }
    if (this.currentStep === 4) {
      if (!this.step4Valid) return;
      this.buildCollabEntries();
      this.currentStep++;
      return;
    }
    if (this.currentStep === 5) {
      if (!this.step5Valid) return;
      this.generateAllLinks();
      return;
    }
    if (this.currentStep < this.totalSteps) this.currentStep++;
  }

  previousStep() {
    if (this.currentStep > 1) this.currentStep--;
  }

  goBack() {
    if (this.currentStep > 1) { this.previousStep(); return; }
    this.router.navigate(['/']);
  }

  private encodeToken(payload: object): string {
    const json = JSON.stringify(payload);
    const bytes = new TextEncoder().encode(json);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
  }

  private buildBasePayload(domain: CompanyDomain, mode: CompanyMode) {
    const domainName: Record<CompanyDomain, string> = {
      hospitality: 'gestion-hotellerie', agriculture: 'gestion-de-ferme',
      transport: 'transport', commerce: 'gestion-commerce', health: 'gestion-sante',
      education: 'gestion-education', construction: 'gestion-construction', logistics: 'gestion-logistique'
    };
    return {
      v: 1,
      domain: domainName[domain],
      issuedAt: new Date().toISOString(),
      mode,
      company: {
        name: this.company.nom, address: this.company.adresse,
        phone: this.company.telephone, email: this.company.email,
        adminPassword: this.company.adminPassword
      }
    };
  }

  private getDomainPort(domain: CompanyDomain): number | null {
    const ports: Record<CompanyDomain, number> = {
      agriculture: 4201, transport: 4202, health: 4203, construction: 4204,
      logistics: 4205, education: 4206, commerce: 4207, hospitality: 4400
    };
    return ports[domain] ?? null;
  }

  private getLoginRoute(_domain: CompanyDomain): string {
    return '/connexion';
  }

  generateAllLinks() {
    if (!this.selectedDomain || !this.selectedMode) return;
    const port = this.getDomainPort(this.selectedDomain);
    if (!port) return;
    const loginRoute = this.getLoginRoute(this.selectedDomain);
    const base = this.buildBasePayload(this.selectedDomain, 'collaborative');

    // Owner link
    const ownerPayload = {
      ...base,
      user: { role: 'owner', name: this.company.nom, email: this.company.email },
      password: this.company.adminPassword
    };
    this.ownerLink = `http://localhost:${port}${loginRoute}?invite=${this.encodeToken(ownerPayload)}`;

    // Collaborator links
    this.generatedLinks = this.collabEntries.map(entry => {
      const payload = {
        ...base,
        user: {
          role: entry.roleDef.key,
          name: `${entry.prenom} ${entry.nom}`,
          email: entry.email
        },
        password: entry.password
      };
      return {
        name: `${entry.prenom} ${entry.nom}`,
        role: entry.roleDef.label,
        email: entry.email,
        url: `http://localhost:${port}${loginRoute}?invite=${this.encodeToken(payload)}`
      };
    });

    this.linksGenerated = true;
  }

  copyLink(url: string) {
    navigator.clipboard.writeText(url).then(() => {}).catch(() => {});
  }

  goToDashboard() {
    window.location.href = this.ownerLink;
  }

  private redirectToDomainApp(domain: CompanyDomain, mode: CompanyMode) {
    const port = this.getDomainPort(domain);
    if (!port) { alert(`Le domaine "${domain}" n'est pas encore disponible.`); return; }
    const payload = {
      ...this.buildBasePayload(domain, mode),
      user: { role: 'owner', name: this.company.nom, email: this.company.email },
      password: this.company.adminPassword
    };
    const token = this.encodeToken(payload);
    window.location.href = `http://localhost:${port}${this.getLoginRoute(domain)}?invite=${token}`;
  }
}
