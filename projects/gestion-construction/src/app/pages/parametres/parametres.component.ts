import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollabStoreService, type Collaborator, type Role } from '../../services/collab-store.service';
import { buildInviteLink, encodeInvite } from '../../utils/invite';

type ModeAcces = 'centralized' | 'collaborative';

interface CompanyForm {
  name: string;
  address: string;
  phone: string;
  email: string;
  adminPassword: string;
  mode: ModeAcces;
}

interface CollaboratorForm {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  password: string;
}

@Component({
  selector: 'app-parametres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parametres.component.html',
  styleUrl: './parametres.component.scss'
})
export class ParametresComponent {
  saved = signal(false);
  feedback = signal('');
  inviteBaseUrl = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4300';

  readonly collaborators = computed(() => this.store.collaborators());

  form: CompanyForm;
  collaboratorForm: CollaboratorForm = {
    firstName: '',
    lastName: '',
    email: '',
    role: 'employee',
    password: '',
  };

  readonly roleOptions: Array<{ value: Role; label: string; description: string }> = [
    { value: 'owner', label: "Chef d'entreprise", description: 'Dashboard, chantiers, sous-traitants, engins, parametres' },
    { value: 'accountant', label: 'Comptable', description: 'Comptabilite' },
    { value: 'hr', label: 'Ressources humaines', description: 'Personnel' },
    { value: 'employee', label: 'Architecte / Technicien', description: 'Devis, contrats et materiaux' },
  ];

  constructor(public readonly store: CollabStoreService) {
    const company = store.company();
    this.form = {
      name: company?.name ?? '',
      address: company?.address ?? '',
      phone: company?.phone ?? '',
      email: company?.email ?? '',
      adminPassword: company?.adminPassword ?? '',
      mode: store.mode() ?? 'centralized',
    };
  }

  save() {
    this.store.setCompany({
      name: this.form.name,
      address: this.form.address,
      phone: this.form.phone,
      email: this.form.email,
      adminPassword: this.form.adminPassword,
    });
    this.store.setMode(this.form.mode);
    this.saved.set(true);
    this.feedback.set("Informations de l'entreprise enregistrees.");
    setTimeout(() => {
      this.saved.set(false);
      this.feedback.set('');
    }, 2500);
  }

  addCollaborator() {
    if (!this.form.name || !this.form.email) {
      this.feedback.set("Enregistrez d'abord les informations de l'entreprise.");
      return;
    }
    if (!this.collaboratorForm.firstName || !this.collaboratorForm.lastName || !this.collaboratorForm.email || !this.collaboratorForm.password) {
      this.feedback.set("Remplissez le prenom, le nom, l'email et le mot de passe du collaborateur.");
      return;
    }

    const company = {
      name: this.form.name,
      address: this.form.address,
      phone: this.form.phone,
      email: this.form.email,
      adminPassword: this.form.adminPassword,
    };

    const collaboratorName = `${this.collaboratorForm.firstName} ${this.collaboratorForm.lastName}`.trim();
    const token = encodeInvite({
      v: 1,
      domain: 'gestion-construction',
      issuedAt: new Date().toISOString(),
      mode: 'collaborative',
      company,
      user: {
        role: this.collaboratorForm.role,
        name: collaboratorName,
        email: this.collaboratorForm.email,
      },
      password: this.collaboratorForm.password,
    });

    const collaborator: Collaborator = {
      id: Date.now().toString(),
      firstName: this.collaboratorForm.firstName,
      lastName: this.collaboratorForm.lastName,
      email: this.collaboratorForm.email,
      role: this.collaboratorForm.role,
      password: this.collaboratorForm.password,
      token,
    };

    this.store.setCollaborators([collaborator, ...this.collaborators()]);
    this.store.setMode('collaborative');
    this.form.mode = 'collaborative';
    this.feedback.set(`Lien genere pour ${collaboratorName}.`);
    void this.copyLink(this.getInviteLink(collaborator));

    this.collaboratorForm = {
      firstName: '',
      lastName: '',
      email: '',
      role: 'employee',
      password: '',
    };
  }

  getInviteLink(collaborator: Collaborator): string {
    return buildInviteLink(collaborator.token, this.inviteBaseUrl);
  }

  async copyLink(link: string) {
    try {
      await navigator.clipboard.writeText(link);
      this.feedback.set('Lien copie dans le presse-papiers.');
    } catch {
      this.feedback.set("Lien genere, mais la copie automatique a echoue.");
    }
  }

  removeCollaborator(id: string) {
    this.store.setCollaborators(this.collaborators().filter(c => c.id !== id));
    this.feedback.set('Collaborateur retire.');
  }
}
