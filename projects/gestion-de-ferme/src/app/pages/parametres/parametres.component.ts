import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface SettingCard {
  title: string;
  description: string;
  tone: 'blue' | 'green' | 'orange' | 'teal' | 'purple';
  icon: string;
  link: string;
}

@Component({
  selector: 'app-parametres',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './parametres.component.html',
  styleUrl: './parametres.component.scss'
})
export class ParametresComponent {
  readonly links = [
    { label: 'Tableau de bord', path: '/tableau-de-bord' },
    { label: 'Animaux', path: '/animaux' },
    { label: 'Aliments', path: '/aliments' },
    { label: 'Activités', path: '/activites' },
    { label: 'Reproduction', path: '/reproduction' },
    { label: 'Santé', path: '/sante' },
    { label: 'Finance', path: '/finances' },
    { label: 'Paramètres', path: '/parametres' }
  ];

  readonly cards: SettingCard[] = [
    {
      title: 'Informations de la ferme',
      description: 'Gerez le nom, la localisation et les informations generales.',
      tone: 'blue',
      icon: 'i',
      link: '#'
    },
    {
      title: 'Utilisateurs',
      description: 'Gerez les utilisateurs de votre ferme.',
      tone: 'green',
      icon: 'u',
      link: '#'
    },
    {
      title: 'Unites',
      description: 'Configurez les unites utilisees dans l application.',
      tone: 'orange',
      icon: 'u',
      link: '#'
    },
    {
      title: 'Categories aliments',
      description: 'Organisez les categories d aliments.',
      tone: 'teal',
      icon: 'c',
      link: '#'
    },
    {
      title: 'Taxes',
      description: 'Gerez les taux de taxes et impots appliques.',
      tone: 'green',
      icon: 't',
      link: '#'
    },
    {
      title: 'Notifications',
      description: 'Configurez les alertes et notifications.',
      tone: 'blue',
      icon: 'n',
      link: '#'
    },
    {
      title: 'Sauvegardes',
      description: 'Sauvegardez vos donnees regulierement.',
      tone: 'purple',
      icon: 's',
      link: '#'
    },
    {
      title: 'Preferences',
      description: 'Personnalisez votre application.',
      tone: 'teal',
      icon: 'p',
      link: '#'
    }
  ];
}
