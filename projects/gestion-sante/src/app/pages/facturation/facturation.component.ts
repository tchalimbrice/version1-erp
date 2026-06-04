import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';

type StatutF = 'Payé' | 'En attente' | 'Annulé';

interface Facture {
  id: string; numero: string; patient: string; date: string;
  actes: string; montant: number; statut: StatutF;
}

@Component({
  selector: 'app-facturation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './facturation.component.html',
  styleUrl: './facturation.component.scss'
})
export class FacturationComponent {
  showForm = signal(false);
  form = { patient: '', date: '', actes: '', montant: 0 };

  factures: Facture[] = [
    { id: '1', numero: 'FAC-2024-001', patient: 'Koné Aminata',     date: '20/04/2024', actes: 'Consultation + Bilan', montant: 25000,  statut: 'Payé'},
    { id: '2', numero: 'FAC-2024-002', patient: 'Traoré Boubacar',  date: '20/04/2024', actes: 'Consultation générale',montant: 15000,  statut: 'Payé'},
    { id: '3', numero: 'FAC-2024-003', patient: 'Bamba Fatoumata',  date: '19/04/2024', actes: 'Échographie + Consult',montant: 45000,  statut: 'En attente'},
    { id: '4', numero: 'FAC-2024-004', patient: 'Coulibaly Issouf', date: '18/04/2024', actes: 'Radiologie + Consult', montant: 55000,  statut: 'Payé'},
    { id: '5', numero: 'FAC-2024-005', patient: 'Ouattara Hawa',    date: '17/04/2024', actes: 'Bilan sanguin complet', montant: 30000,  statut: 'En attente'},
    { id: '6', numero: 'FAC-2024-006', patient: 'Diallo Moussa',    date: '15/04/2024', actes: 'ECG + Consultation',   montant: 35000,  statut: 'Annulé'},
  ];

  get totalPaye():    number { return this.factures.filter(f => f.statut === 'Payé').reduce((s, f) => s + f.montant, 0); }
  get totalAttente(): number { return this.factures.filter(f => f.statut === 'En attente').reduce((s, f) => s + f.montant, 0); }

  formatMoney(n: number): string { return new Intl.NumberFormat('fr-FR').format(n); }

  nextNum(): string {
    const n = this.factures.length + 1;
    return `FAC-2024-${String(n).padStart(3, '0')}`;
  }

  addFacture() {
    if (!this.form.patient || !this.form.montant) return;
    this.factures.unshift({
      id: Date.now().toString(),
      numero: this.nextNum(),
      ...this.form,
      statut: 'En attente'});
    this.form = { patient: '', date: '', actes: '', montant: 0 };
    this.showForm.set(false);
  }

  statutClass(s: StatutF): string {
    return s === 'Payé' ? 'badge badge--green' :
           s === 'En attente' ? 'badge badge--yellow' : 'badge badge--red';
  }

  telechargerPDF(f: Facture) {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [148.5, 210] // Demi A4
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 10;
    const contentWidth = pageWidth - 2 * margin;

    // Nom de l'hôpital
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Hôpital Central de Bamako', pageWidth / 2, margin + 10, { align: 'center' });

    // Titre
    doc.setFontSize(14);
    doc.text('FACTURE', pageWidth / 2, margin + 25, { align: 'center' });

    // Informations de la facture
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    let y = margin + 40;

    doc.text(`Numéro de facture: ${f.numero}`, margin, y);
    y += 8;
    doc.text(`Patient: ${f.patient}`, margin, y);
    y += 8;
    doc.text(`Date: ${f.date}`, margin, y);
    y += 8;
    doc.text(`Heure: ${new Date().toLocaleTimeString('fr-FR')}`, margin, y);
    y += 8;
    doc.text(`Médecin: Dr. [Nom du médecin]`, margin, y); // À adapter selon les données disponibles
    y += 12;

    // Actes/Médicaments
    doc.setFont('helvetica', 'bold');
    doc.text('Actes/Médicaments prescrits:', margin, y);
    y += 8;
    doc.setFont('helvetica', 'normal');
    const actesLines = doc.splitTextToSize(f.actes, contentWidth);
    doc.text(actesLines, margin, y);
    y += actesLines.length * 5 + 8;

    // Montant
    doc.setFont('helvetica', 'bold');
    doc.text(`Montant total: ${this.formatMoney(f.montant)} Fcfa`, margin, y);
    y += 8;
    doc.text(`Statut: ${f.statut}`, margin, y);
    y += 20;

    // Zone de signature
    doc.setFont('helvetica', 'normal');
    doc.text('Signature du patient:', margin, pageHeight - margin - 20);
    doc.line(margin, pageHeight - margin - 15, pageWidth - margin, pageHeight - margin - 15);

    // Téléchargement
    doc.save(`facture_${f.numero}.pdf`);
  }

  marquerPaye(f: Facture) {
    if (f.statut === 'En attente') {
      f.statut = 'Payé';
    }
  }
}
