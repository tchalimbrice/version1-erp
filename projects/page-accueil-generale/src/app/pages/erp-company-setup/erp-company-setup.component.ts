import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InvitationService } from '../../services/invitation.service';

type CompanyMode = 'centralized' | 'collaborative';
type CompanyDomain =
  | 'education' | 'construction' | 'logistics' | 'hospitality'
  | 'restauration' | 'commerce' | 'ferme' | 'sante' | 'transport';

interface CompanyForm {
  nom: string; adresse: string; telephone: string; email: string; adminPassword: string;
  langue: string; pays: string;
}

interface CountryEntry { name: string; dial: string; }

const COUNTRIES: CountryEntry[] = [
  { name: 'Afghanistan', dial: '+93' },
  { name: 'Afrique du Sud', dial: '+27' },
  { name: 'Albanie', dial: '+355' },
  { name: 'AlgÃ©rie', dial: '+213' },
  { name: 'Allemagne', dial: '+49' },
  { name: 'Andorre', dial: '+376' },
  { name: 'Angola', dial: '+244' },
  { name: 'Arabie Saoudite', dial: '+966' },
  { name: 'Argentine', dial: '+54' },
  { name: 'ArmÃ©nie', dial: '+374' },
  { name: 'Australie', dial: '+61' },
  { name: 'Autriche', dial: '+43' },
  { name: 'AzerbaÃ¯djan', dial: '+994' },
  { name: 'BahreÃ¯n', dial: '+973' },
  { name: 'Bangladesh', dial: '+880' },
  { name: 'BÃ©larus', dial: '+375' },
  { name: 'Belgique', dial: '+32' },
  { name: 'BÃ©nin', dial: '+229' },
  { name: 'Bolivie', dial: '+591' },
  { name: 'Bosnie-HerzÃ©govine', dial: '+387' },
  { name: 'Botswana', dial: '+267' },
  { name: 'BrÃ©sil', dial: '+55' },
  { name: 'Bulgarie', dial: '+359' },
  { name: 'Burkina Faso', dial: '+226' },
  { name: 'Burundi', dial: '+257' },
  { name: 'Cambodge', dial: '+855' },
  { name: 'Cameroun', dial: '+237' },
  { name: 'Canada', dial: '+1' },
  { name: 'Cap-Vert', dial: '+238' },
  { name: 'Chili', dial: '+56' },
  { name: 'Chine', dial: '+86' },
  { name: 'Chypre', dial: '+357' },
  { name: 'Colombie', dial: '+57' },
  { name: 'Comores', dial: '+269' },
  { name: 'Congo (Brazzaville)', dial: '+242' },
  { name: 'Congo (Kinshasa)', dial: '+243' },
  { name: 'CorÃ©e du Nord', dial: '+850' },
  { name: 'CorÃ©e du Sud', dial: '+82' },
  { name: 'Costa Rica', dial: '+506' },
  { name: "CÃ´te d'Ivoire", dial: '+225' },
  { name: 'Croatie', dial: '+385' },
  { name: 'Cuba', dial: '+53' },
  { name: 'Danemark', dial: '+45' },
  { name: 'Djibouti', dial: '+253' },
  { name: 'Ã‰gypte', dial: '+20' },
  { name: 'Ã‰mirats arabes unis', dial: '+971' },
  { name: 'Ã‰quateur', dial: '+593' },
  { name: 'Ã‰rythrÃ©e', dial: '+291' },
  { name: 'Espagne', dial: '+34' },
  { name: 'Estonie', dial: '+372' },
  { name: 'Ã‰thiopie', dial: '+251' },
  { name: 'Finlande', dial: '+358' },
  { name: 'France', dial: '+33' },
  { name: 'Gabon', dial: '+241' },
  { name: 'Gambie', dial: '+220' },
  { name: 'GÃ©orgie', dial: '+995' },
  { name: 'Ghana', dial: '+233' },
  { name: 'GrÃ¨ce', dial: '+30' },
  { name: 'Guatemala', dial: '+502' },
  { name: 'GuinÃ©e', dial: '+224' },
  { name: 'GuinÃ©e Ã©quatoriale', dial: '+240' },
  { name: 'GuinÃ©e-Bissau', dial: '+245' },
  { name: 'HaÃ¯ti', dial: '+509' },
  { name: 'Honduras', dial: '+504' },
  { name: 'Hongrie', dial: '+36' },
  { name: 'Inde', dial: '+91' },
  { name: 'IndonÃ©sie', dial: '+62' },
  { name: 'Irak', dial: '+964' },
  { name: 'Iran', dial: '+98' },
  { name: 'Irlande', dial: '+353' },
  { name: 'Islande', dial: '+354' },
  { name: 'IsraÃ«l', dial: '+972' },
  { name: 'Italie', dial: '+39' },
  { name: 'JamaÃ¯que', dial: '+1' },
  { name: 'Japon', dial: '+81' },
  { name: 'Jordanie', dial: '+962' },
  { name: 'Kazakhstan', dial: '+7' },
  { name: 'Kenya', dial: '+254' },
  { name: 'Kirghizistan', dial: '+996' },
  { name: 'KoweÃ¯t', dial: '+965' },
  { name: 'Laos', dial: '+856' },
  { name: 'Lesotho', dial: '+266' },
  { name: 'Lettonie', dial: '+371' },
  { name: 'Liban', dial: '+961' },
  { name: 'Liberia', dial: '+231' },
  { name: 'Libye', dial: '+218' },
  { name: 'Liechtenstein', dial: '+423' },
  { name: 'Lituanie', dial: '+370' },
  { name: 'Luxembourg', dial: '+352' },
  { name: 'Madagascar', dial: '+261' },
  { name: 'Malaisie', dial: '+60' },
  { name: 'Malawi', dial: '+265' },
  { name: 'Maldives', dial: '+960' },
  { name: 'Mali', dial: '+223' },
  { name: 'Malte', dial: '+356' },
  { name: 'Maroc', dial: '+212' },
  { name: 'Mauritanie', dial: '+222' },
  { name: 'Maurice', dial: '+230' },
  { name: 'Mexique', dial: '+52' },
  { name: 'Moldavie', dial: '+373' },
  { name: 'Monaco', dial: '+377' },
  { name: 'Mongolie', dial: '+976' },
  { name: 'MontÃ©nÃ©gro', dial: '+382' },
  { name: 'Mozambique', dial: '+258' },
  { name: 'Myanmar', dial: '+95' },
  { name: 'Namibie', dial: '+264' },
  { name: 'NÃ©pal', dial: '+977' },
  { name: 'Nicaragua', dial: '+505' },
  { name: 'Niger', dial: '+227' },
  { name: 'Nigeria', dial: '+234' },
  { name: 'NorvÃ¨ge', dial: '+47' },
  { name: 'Nouvelle-ZÃ©lande', dial: '+64' },
  { name: 'Oman', dial: '+968' },
  { name: 'Ouganda', dial: '+256' },
  { name: 'OuzbÃ©kistan', dial: '+998' },
  { name: 'Pakistan', dial: '+92' },
  { name: 'Palestine', dial: '+970' },
  { name: 'Panama', dial: '+507' },
  { name: 'Paraguay', dial: '+595' },
  { name: 'Pays-Bas', dial: '+31' },
  { name: 'PÃ©rou', dial: '+51' },
  { name: 'Philippines', dial: '+63' },
  { name: 'Pologne', dial: '+48' },
  { name: 'Portugal', dial: '+351' },
  { name: 'Qatar', dial: '+974' },
  { name: 'RÃ©publique centrafricaine', dial: '+236' },
  { name: 'RÃ©publique dominicaine', dial: '+1' },
  { name: 'RÃ©publique tchÃ¨que', dial: '+420' },
  { name: 'Roumanie', dial: '+40' },
  { name: 'Royaume-Uni', dial: '+44' },
  { name: 'Russie', dial: '+7' },
  { name: 'Rwanda', dial: '+250' },
  { name: 'Saint-Marin', dial: '+378' },
  { name: 'Salvador', dial: '+503' },
  { name: 'SÃ£o TomÃ©-et-PrÃ­ncipe', dial: '+239' },
  { name: 'SÃ©nÃ©gal', dial: '+221' },
  { name: 'Serbie', dial: '+381' },
  { name: 'Sierra Leone', dial: '+232' },
  { name: 'Singapour', dial: '+65' },
  { name: 'Slovaquie', dial: '+421' },
  { name: 'SlovÃ©nie', dial: '+386' },
  { name: 'Somalie', dial: '+252' },
  { name: 'Soudan', dial: '+249' },
  { name: 'Soudan du Sud', dial: '+211' },
  { name: 'Sri Lanka', dial: '+94' },
  { name: 'SuÃ¨de', dial: '+46' },
  { name: 'Suisse', dial: '+41' },
  { name: 'Suriname', dial: '+597' },
  { name: 'Swaziland', dial: '+268' },
  { name: 'Syrie', dial: '+963' },
  { name: 'TaÃ¯wan', dial: '+886' },
  { name: 'Tajikistan', dial: '+992' },
  { name: 'Tanzanie', dial: '+255' },
  { name: 'Tchad', dial: '+235' },
  { name: 'ThaÃ¯lande', dial: '+66' },
  { name: 'Timor oriental', dial: '+670' },
  { name: 'Togo', dial: '+228' },
  { name: 'TrinitÃ©-et-Tobago', dial: '+1' },
  { name: 'Tunisie', dial: '+216' },
  { name: 'TurkmÃ©nistan', dial: '+993' },
  { name: 'Turquie', dial: '+90' },
  { name: 'Ukraine', dial: '+380' },
  { name: 'Uruguay', dial: '+598' },
  { name: 'Venezuela', dial: '+58' },
  { name: 'Vietnam', dial: '+84' },
  { name: 'YÃ©men', dial: '+967' },
  { name: 'Zambie', dial: '+260' },
  { name: 'Zimbabwe', dial: '+263' },
];

const LANGUAGES: string[] = [
  'Afrikaans', 'Albanais', 'Allemand', 'Amharique', 'Anglais', 'Arabe', 'ArmÃ©nien',
  'AzerbaÃ¯djanais', 'Basque', 'Bengali', 'BiÃ©lorusse', 'Birman', 'Bosniaque', 'Bulgare',
  'Catalan', 'Chinois (Cantonais)', 'Chinois (Mandarin)', 'CorÃ©en', 'Croate',
  'Danois', 'Dzongkha', 'Espagnol', 'Estonien', 'Farsi (Persan)', 'Finnois', 'FranÃ§ais',
  'GaÃ©lique', 'GÃ©orgien', 'Grec', 'Gujarati', 'Haoussa', 'HÃ©breu', 'Hindi',
  'Hongrois', 'Igbo', 'IndonÃ©sien', 'Irlandais', 'Islandais', 'Italien',
  'Japonais', 'Javanais', 'Kannada', 'Kazakh', 'Khmer', 'Kirghiz', 'Kurde',
  'Lao', 'Letton', 'Lituanien', 'Luxembourgeois', 'MacÃ©donien', 'Malais',
  'Malayalam', 'Maltais', 'Marathi', 'Mongol', 'NÃ©erlandais', 'NÃ©palais',
  'NorvÃ©gien', 'Ourdou', 'Ouzbek', 'Pachto', 'Pendjabi', 'Polonais', 'Portugais',
  'Roumain', 'Russe', 'Serbe', 'Sinhalais', 'Slovaque', 'SlovÃ¨ne', 'Somali',
  'SuÃ©dois', 'Swahili', 'Tadjik', 'Tamil', 'TÃ©lougou', 'ThaÃ¯', 'TibÃ©tain',
  'Tigrigna', 'Turc', 'TurkmÃ¨ne', 'Ukrainien', 'Vietnamien', 'Wolof', 'Xhosa',
  'Yoruba', 'Zoulou',
];

interface CollabRoleDef {
  key: string;
  label: string;
  description: string;
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
  construction: [
    { key: 'employee',   label: 'Architecte',     description: 'Devis, contrats et matÃ©riaux',     access: ['Devis & Contrats', 'MatÃ©riaux'] },
    { key: 'hr',         label: 'Responsable RH', description: 'Gestion du personnel de chantier', access: ['Personnel'] },
    { key: 'accountant', label: 'Comptable',       description: 'ComptabilitÃ© et finances',         access: ['ComptabilitÃ©'] },
  ],
  education: [
    { key: 'hr',         label: 'SecrÃ©taire',            description: 'Notes, Ã©lÃ¨ves et absences',           access: ['Notes & Bulletins', 'Gestion des Ã©lÃ¨ves', 'Absences'] },
    { key: 'accountant', label: 'Comptable',              description: 'Paiements et inscriptions',           access: ['Paiements & Facturation'] },
    { key: 'employee',   label: 'Surveillant / Vigile',   description: 'Suivi des absences Ã©lÃ¨ves',           access: ['Absences'] },
  ],
  logistics: [
    { key: 'employee',   label: 'EmployÃ© Logistique', description: 'OpÃ©rations et suivi en temps rÃ©el', access: ['Commandes', 'Livraisons', 'VÃ©hicules', 'EntrepÃ´ts', 'Clients', 'Suivi GPS'] },
    { key: 'accountant', label: 'Comptable',          description: 'Facturation et impression',          access: ['Facturation'] },
    { key: 'hr',         label: 'Responsable RH',     description: 'Gestion des chauffeurs',             access: ['Chauffeurs'] },
  ],
  hospitality: [
    { key: 'receptionist', label: 'RÃ©ceptionniste', description: 'Accueil et rÃ©servations',      access: ['RÃ©servations', 'Check-in/out', 'Chambres'] },
    { key: 'hr',           label: 'Responsable RH', description: 'Gestion du personnel',         access: ['RH'] },
    { key: 'accountant',   label: 'Comptable',       description: 'Facturation et comptabilitÃ©', access: ['Facturation'] },
  ],
  restauration: [
    { key: 'employee',   label: 'Manager / GÃ©rant', description: 'Stock et gestion des employÃ©s',                      access: ['Stock', 'EmployÃ©s'] },
    { key: 'accountant', label: 'Caissier',          description: 'Commandes, rÃ©servations, menu et clients',           access: ['Commandes', 'RÃ©servations', 'Menu', 'Clients'] },
  ],
  commerce: [
    { key: 'employee',   label: 'Vendeur',        description: 'Ventes et gestion des produits', access: ['Ventes', 'Produits'] },
    { key: 'accountant', label: 'Comptable',       description: 'Facturation et finances',        access: ['Facturation'] },
    { key: 'hr',         label: 'Responsable RH', description: 'Gestion du personnel',            access: ['RH'] },
  ],
  ferme: [
    { key: 'employee',   label: 'Ouvrier agricole', description: 'Production et rÃ©coltes',   access: ['Production', 'RÃ©coltes'] },
    { key: 'accountant', label: 'Comptable',         description: 'Finances et inventaires', access: ['Finances', 'Inventaires'] },
    { key: 'hr',         label: 'Responsable RH',    description: 'Gestion des travailleurs', access: ['RH'] },
  ],
  sante: [
    { key: 'employee',   label: 'MÃ©decin / Infirmier',  description: 'Consultations et soins des patients', access: ['Consultations', 'Patients'] },
    { key: 'hr',         label: 'SecrÃ©taire mÃ©dicale',  description: 'Rendez-vous et dossiers mÃ©dicaux',    access: ['Rendez-vous', 'Dossiers'] },
    { key: 'accountant', label: 'Comptable',             description: 'Facturation mÃ©dicale',               access: ['Facturation'] },
    { key: 'pharmacien', label: 'Pharmacien',            description: 'Dispensation des mÃ©dicaments',       access: ['Pharmacie'] },
  ],
  transport: [
    { key: 'employee',   label: 'Chauffeur',   description: 'Livraisons et trajets',      access: ['Trajets', 'Livraisons'] },
    { key: 'hr',         label: 'Dispatcher',  description: 'Planification des trajets',  access: ['Planning', 'VÃ©hicules'] },
    { key: 'accountant', label: 'Comptable',   description: 'Finances et facturation',    access: ['Facturation'] },
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
  readonly countries = COUNTRIES;
  readonly languages = LANGUAGES;
  countryQuery = '';
  languageQuery = '';

  currentStep = 1;
  selectedMode: CompanyMode | null = null;
  selectedDomain: CompanyDomain | null = null;

  company: CompanyForm = { nom: '', adresse: '', telephone: '', email: '', adminPassword: '', langue: '', pays: '' };

  selectedCollabKeys = new Set<string>();
  collabEntries: CollabEntry[] = [];

  generatedLinks: GeneratedLink[] = [];
  linksGenerated = false;
  ownerLink = '';
  emailSendStatus = '';
  isSendingInvitations = false;

  private domainApiMap: Record<CompanyDomain, string> = {
    'education': 'http://localhost:8081',
    'construction': 'http://localhost:8085',
    'logistics': 'http://localhost:8088',
    'hospitality': 'http://localhost:8087',
    'restauration': 'http://localhost:8083',
    'commerce': 'http://localhost:8084',
    'ferme': 'http://localhost:8086',
    'sante': 'http://localhost:8082',
    'transport': 'http://localhost:8089',
  };

  constructor(
    private readonly router: Router,
    private readonly http: HttpClient,
    private readonly invitationService: InvitationService
  ) {}

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

  onCountryChange() {
    const found = this.countries.find(c => c.name === this.company.pays);
    if (found) this.company.telephone = found.dial + ' ';
  }

  onCountryInput() {
    const found = this.countries.find(c => c.name.toLowerCase() === this.company.pays.toLowerCase());
    if (found) this.company.telephone = found.dial + ' ';
  }

  onLanguageInput() {
    // Le champ reste libre, les suggestions aident seulement Ã  guider l'utilisateur.
  }

  filteredCountries(): CountryEntry[] {
    const q = this.company.pays.trim().toLowerCase();
    if (!q) return this.countries.slice(0, 8);
    return this.countries
      .filter(c => c.name.toLowerCase().includes(q))
      .slice(0, 8);
  }

  filteredLanguages(): string[] {
    const q = this.company.langue.trim().toLowerCase();
    if (!q) return this.languages.slice(0, 8);
    return this.languages
      .filter(lang => lang.toLowerCase().includes(q))
      .slice(0, 8);
  }

  chooseCountry(country: CountryEntry) {
    this.company.pays = country.name;
    this.company.telephone = country.dial + ' ';
  }

  chooseLanguage(language: string) {
    this.company.langue = language;
  }

  selectMode(mode: CompanyMode) { this.selectedMode = mode; }

  selectDomain(domain: CompanyDomain) {
    this.selectedDomain = domain;
    if (this.selectedMode === 'centralized') {
      this.redirectToDomainApp(domain, 'centralized');
    }
  }

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
      education:    'gestion-education',
      construction: 'gestion-construction',
      logistics:    'gestion-logistique',
      hospitality:  'gestion-hotellerie',
      restauration: 'gestion-restauration',
      commerce:     'gestion-commerce',
      ferme:        'gestion-de-ferme',
      sante:        'gestion-sante',
      transport:    'transport',
    };
    return {
      v: 1,
      domain: domainName[domain],
      issuedAt: new Date().toISOString(),
      inviteId: crypto.randomUUID(),
      mode,
      company: {
        name: this.company.nom, address: this.company.adresse,
        phone: this.company.telephone, email: this.company.email,
        adminPassword: this.company.adminPassword
      }
    };
  }

  generateAllLinks() {
    if (!this.selectedDomain || !this.selectedMode) return;
    const base = this.buildBasePayload(this.selectedDomain, 'collaborative');
    const hubBase = `${window.location.origin}/connexion`;

    const ownerPayload = {
      ...base,
      user: { role: 'owner', name: this.company.nom, email: this.company.email },
      password: this.company.adminPassword
    };
    this.ownerLink = `${hubBase}?invite=${this.encodeToken(ownerPayload)}`;

    this.generatedLinks = this.collabEntries.map(entry => {
      const payload = {
        ...base,
        user: { role: entry.roleDef.key, name: `${entry.prenom} ${entry.nom}`, email: entry.email },
        password: entry.password
      };
      return {
        name: `${entry.prenom} ${entry.nom}`,
        role: entry.roleDef.label,
        email: entry.email,
        url: `${hubBase}?invite=${this.encodeToken(payload)}`
      };
    });

    this.linksGenerated = true;
  }

  copyLink(url: string) {
    navigator.clipboard.writeText(url).then(() => {}).catch(() => {});
  }

  sendInviteEmails(): void {
    if (!this.linksGenerated || this.isSendingInvitations) return;
    this.isSendingInvitations = true;
    this.emailSendStatus = 'Envoi des invitations en cours...';

    const payload = {
      owner: { email: this.company.email, name: this.company.nom, url: this.ownerLink },
      invitations: this.generatedLinks.map((link, index) => ({
        role: link.role,
        name: link.name,
        email: link.email,
        url: link.url,
        password: this.collabEntries[index]?.password || ''
      }))
    };

    this.invitationService.send(payload).subscribe({
      next: () => {
        this.emailSendStatus = 'Envoi des invitations terminÃ©.';
        this.isSendingInvitations = false;
      },
      error: (error) => {
        console.error('Envoi email Ã©chouÃ©', error);
        this.emailSendStatus = 'Ã‰chec de l\'envoi des emails. VÃ©rifiez le backend d\'invitation.';
        this.isSendingInvitations = false;
      }
    });
  }

  goToDashboard() {
    window.location.href = this.ownerLink;
  }

  private redirectToDomainApp(domain: CompanyDomain, mode: CompanyMode) {
    // First, register the user and company in the backend
    this.registerUserAndCompany(domain, mode);
  }

  private registerUserAndCompany(domain: CompanyDomain, mode: CompanyMode) {
    // Step 1: Register user in Auth API
    const registerUserUrl = 'http://localhost:9090/api/auth/register';
    const registerUserPayload = {
      fullName: this.company.nom,
      email: this.company.email,
      password: this.company.adminPassword,
      domain: domain
    };

    this.http.post<any>(registerUserUrl, registerUserPayload).subscribe({
      next: (authResponse) => {
        const token = authResponse.token;
        // Step 2: Register company in domain API
        this.registerCompanyInDomain(domain, token, mode);
      },
      error: (error) => {
        console.error('User registration failed:', error);
        // Still proceed with local registration as fallback
        this.proceedToApp(domain, mode);
      }
    });
  }

  private registerCompanyInDomain(domain: CompanyDomain, token: string, mode: CompanyMode) {
    const apiUrl = this.domainApiMap[domain];
    const companyUrl = `${apiUrl}/api/companies`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const companyPayload = {
      name: this.company.nom,
      domain: domain,
      address: this.company.adresse,
      email: this.company.email,
      phone: this.company.telephone,
      managerName: this.company.nom
    };

    this.http.post<any>(companyUrl, companyPayload, { headers }).subscribe({
      next: (companyResponse) => {
        console.log('Company registered:', companyResponse);
        // Proceed to the app
        this.proceedToApp(domain, mode);
      },
      error: (error) => {
        console.error('Company registration failed:', error);
        // Still proceed with local registration as fallback
        this.proceedToApp(domain, mode);
      }
    });
  }

  private proceedToApp(domain: CompanyDomain, mode: CompanyMode) {
    const payload = {
      ...this.buildBasePayload(domain, mode),
      user: { role: 'owner', name: this.company.nom, email: this.company.email },
      password: this.company.adminPassword
    };
    const token = this.encodeToken(payload);
    window.location.href = `${window.location.origin}/connexion?invite=${token}`;
  }
}

