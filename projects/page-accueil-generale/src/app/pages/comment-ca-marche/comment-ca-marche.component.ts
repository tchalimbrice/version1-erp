import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Step {
  number: number;
  title: string;
  description: string;
  details: string[];
}

interface Feature {
  title: string;
  description: string;
  badge: string;
}

@Component({
  selector: 'app-comment-ca-marche',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-ca-marche.component.html',
})
export class CommentCaMarcheComponent {
  constructor(private readonly router: Router) {}

  goBack() { this.router.navigate(['/']); }
  goStart() { this.router.navigate(['/erp-company-setup']); }

  readonly steps: Step[] = [
    {
      number: 1,
      title: 'CrÃ©ez votre compte entreprise',
      description: 'Renseignez les informations de base de votre entreprise : nom, adresse, email et mot de passe administrateur.',
      details: [
        'Nom de l\'entreprise et coordonnÃ©es',
        'Adresse email pour la connexion administrateur',
        'Mot de passe sÃ©curisÃ© pour protÃ©ger votre espace',
        'Toutes les donnÃ©es restent privÃ©es et sÃ©curisÃ©es',
      ]
    },
    {
      number: 2,
      title: 'Choisissez votre mode de gestion',
      description: 'DÃ©cidez comment vous souhaitez organiser votre entreprise : en solo ou en Ã©quipe.',
      details: [
        'Gestion centralisÃ©e : vous gÃ©rez seul toutes les fonctionnalitÃ©s',
        'Gestion collaborative : chaque membre de l\'Ã©quipe a son propre espace',
        'Vous pouvez changer de mode Ã  tout moment depuis les paramÃ¨tres',
        'Les deux modes donnent accÃ¨s Ã  des rapports et Ã  un tableau de bord',
      ]
    },
    {
      number: 3,
      title: 'SÃ©lectionnez votre domaine d\'activitÃ©',
      description: 'Choisissez le secteur qui correspond Ã  votre entreprise. Chaque domaine dispose d\'une interface et de fonctionnalitÃ©s adaptÃ©es.',
      details: [
        'Construction : chantiers, matÃ©riaux, devis et comptabilitÃ©',
        'Ã‰ducation : classes, Ã©lÃ¨ves, notes et paiements',
        'Logistique : livraisons, vÃ©hicules, entrepÃ´ts et clients',
        'HÃ´tellerie : chambres, rÃ©servations et rÃ©ception',
        'Restauration : commandes, menu, stock et rÃ©servations',
        'Commerce, SantÃ©, Ferme, Transport Ã©galement disponibles',
      ]
    },
    {
      number: 4,
      title: 'Invitez vos collaborateurs (mode collaboratif)',
      description: 'En mode collaboratif, sÃ©lectionnez les rÃ´les de votre Ã©quipe et renseignez leurs informations.',
      details: [
        'SÃ©lectionnez les rÃ´les adaptÃ©s Ã  votre secteur (RH, Comptable, EmployÃ©, etc.)',
        'Renseignez le nom, prÃ©nom, email et mot de passe de chaque collaborateur',
        'Des liens d\'accÃ¨s uniques sont gÃ©nÃ©rÃ©s automatiquement',
        'Chaque collaborateur reÃ§oit un lien sÃ©curisÃ© pour se connecter',
      ]
    },
    {
      number: 5,
      title: 'AccÃ©dez Ã  votre tableau de bord',
      description: 'Une fois connectÃ©, vous avez accÃ¨s Ã  toutes les fonctionnalitÃ©s de votre espace selon votre rÃ´le.',
      details: [
        'Tableau de bord avec indicateurs clÃ©s en temps rÃ©el',
        'Gestion complÃ¨te des donnÃ©es de votre domaine',
        'Statistiques exportables',
        'SynthÃ¨ses automatiques de vos activitÃ©s principales',
      ]
    },
    {
      number: 6,
      title: 'Suivez vos indicateurs clÃ©s',
      description: 'Consultez le tableau de bord pour suivre votre activitÃ© et prendre des dÃ©cisions rapides.',
      details: [
        'Indicateurs de performance mis Ã  jour en temps rÃ©el',
        'TÃ©lÃ©chargement de statistiques et bilans simples',
        'AperÃ§u clair de vos ventes, dÃ©penses et stocks',
        'AccÃ¨s rapide aux donnÃ©es par pÃ©riode',
      ]
    },
  ];

  readonly features: Feature[] = [
    { title: 'Multi-domaines',       description: 'AdaptÃ© Ã  9 secteurs d\'activitÃ© diffÃ©rents : construction, Ã©ducation, logistique, hÃ´tellerie, restauration, commerce, santÃ©, ferme et transport.', badge: '9 domaines' },
    { title: 'Gestion collaborative', description: 'Invitez votre Ã©quipe avec des liens uniques. Chaque collaborateur accÃ¨de uniquement aux fonctionnalitÃ©s de son rÃ´le.', badge: 'Multi-utilisateurs' },
    { title: 'SÃ©curitÃ©',              description: 'Chaque entreprise dispose de son propre espace isolÃ©. Les donnÃ©es ne sont jamais partagÃ©es entre entreprises.', badge: 'DonnÃ©es sÃ©curisÃ©es' },
    { title: 'Interface intuitive',   description: 'Navigation simple avec un menu latÃ©ral adaptÃ© au rÃ´le de chaque utilisateur. Aucune formation requise.', badge: 'Facile Ã  utiliser' },
    { title: 'Statistiques dÃ©taillÃ©es',    description: 'Statistiques disponibles pour chaque domaine : ventes, effectifs, stocks, rÃ©servations, etc.', badge: 'Statistiques' },
  ];

  readonly faqs = [
    { q: 'Puis-je utiliser BizMaster gratuitement ?', a: 'Oui, l\'accÃ¨s de base est gratuit. Des fonctionnalitÃ©s avancÃ©es comme les exports illimitÃ©s sont disponibles dans les offres premium.' },
    { q: 'Comment mes collaborateurs accÃ¨dent-ils Ã  leur espace ?', a: 'Lors de la crÃ©ation de votre espace collaboratif, vous gÃ©nÃ©rez des liens uniques pour chaque collaborateur. Ils cliquent sur leur lien et se connectent avec l\'email et le mot de passe que vous avez dÃ©finis.' },
    { q: 'Mes donnÃ©es sont-elles sÃ©curisÃ©es ?', a: 'Oui. Chaque entreprise dispose de son propre espace isolÃ© en base de donnÃ©es. Vos donnÃ©es ne sont jamais visibles ou partagÃ©es avec d\'autres entreprises.' },
    { q: 'Puis-je changer de domaine d\'activitÃ© ?', a: 'Actuellement, le domaine est choisi Ã  la crÃ©ation. Pour changer de domaine, vous devrez crÃ©er un nouvel espace d\'entreprise. Un changement de domaine sans perte de donnÃ©es sera disponible dans une prochaine version.' },
    { q: 'Les rapports sont-ils gÃ©nÃ©rÃ©s automatiquement ?', a: 'Les rapports sont construits Ã  partir des donnÃ©es de votre entreprise. Pour utiliser des donnÃ©es rÃ©elles, connectez BizMaster Ã  votre backend via l\'API fournie.' },
    { q: 'Combien de collaborateurs puis-je inviter ?', a: 'Il n\'y a pas de limite dans la version actuelle. Vous pouvez inviter autant de membres que nÃ©cessaire pour chaque rÃ´le disponible dans votre domaine.' },
  ];
}

