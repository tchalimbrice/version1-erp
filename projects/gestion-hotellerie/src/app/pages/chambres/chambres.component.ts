import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Statut = 'Libre' | 'Occupée' | 'Maintenance';

interface Chambre {
  id: string;
  numero: string;
  type: string;
  capacite: number;
  etage: number;
  statut: Statut;
  images: string[];
}

interface ChambreForm {
  numero: string;
  type: string;
  capacite: number;
  etage: number;
  images: string[];
}

@Component({
  selector: 'app-chambres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chambres.component.html',
  styleUrl: './chambres.component.scss',
})
export class ChambresComponent {
  viewMode = signal<'grid' | 'list'>('grid');
  filterEtage = signal('Tous les étages');
  filterStatut = signal('Tous les états');
  showForm = signal(false);

  readonly fallbackImages: Record<string, string> = {
    Libre: '/rooms/chambre-libre.svg',
    Occupée: '/rooms/chambre-occupee.svg',
    Maintenance: '/rooms/chambre-maintenance.svg',
  };

  form: ChambreForm = {
    numero: '',
    type: 'Standard',
    capacite: 2,
    etage: 1,
    images: [],
  };

  chambres: Chambre[] = [
    { id: '1', numero: '101', type: 'Standard', capacite: 2, etage: 1, statut: 'Libre', images: [] },
    { id: '2', numero: '102', type: 'Standard', capacite: 2, etage: 1, statut: 'Occupée', images: [] },
    { id: '3', numero: '103', type: 'Supérieur', capacite: 2, etage: 1, statut: 'Libre', images: [] },
    { id: '4', numero: '201', type: 'Standard', capacite: 2, etage: 2, statut: 'Libre', images: [] },
    { id: '5', numero: '202', type: 'Deluxe', capacite: 3, etage: 2, statut: 'Maintenance', images: [] },
    { id: '6', numero: '203', type: 'Standard', capacite: 2, etage: 2, statut: 'Occupée', images: [] },
    { id: '7', numero: '301', type: 'Suite', capacite: 4, etage: 3, statut: 'Libre', images: [] },
    { id: '8', numero: '302', type: 'Supérieur', capacite: 2, etage: 3, statut: 'Libre', images: [] },
  ];

  etages = ['Tous les étages', '1er étage', '2ème étage', '3ème étage'];
  etatsOptions = ['Tous les états', 'Libre', 'Occupée', 'Maintenance'];

  get filtered(): Chambre[] {
    return this.chambres.filter(c => {
      const okEtage = this.filterEtage() === 'Tous les étages' || c.etage === +this.filterEtage().charAt(0);
      const okStatut = this.filterStatut() === 'Tous les états' || c.statut === this.filterStatut();
      return okEtage && okStatut;
    });
  }

  getRoomImageUrl(room: Chambre): string {
    return room.images[0] ?? this.fallbackImages[room.statut];
  }

  async onImagesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []).filter(file => file.type.startsWith('image/'));

    if (!files.length) {
      return;
    }

    const images = await Promise.all(files.map(file => this.fileToDataUrl(file)));
    this.form.images = [...this.form.images, ...images.filter(Boolean)];
    input.value = '';
  }

  removeSelectedImage(index: number) {
    this.form.images = this.form.images.filter((_, i) => i !== index);
  }

  addChambre() {
    if (!this.form.numero) return;

    this.chambres.push({
      id: Date.now().toString(),
      numero: this.form.numero,
      type: this.form.type,
      capacite: this.form.capacite,
      etage: this.form.etage,
      statut: 'Libre',
      images: [...this.form.images],
    });

    this.resetForm();
    this.showForm.set(false);
  }

  private resetForm() {
    this.form = {
      numero: '',
      type: 'Standard',
      capacite: 2,
      etage: 1,
      images: [],
    };
  }

  private fileToDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }
}
