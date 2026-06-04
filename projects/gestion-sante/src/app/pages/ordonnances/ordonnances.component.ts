import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';

interface Ordonnance {
  id: string; patient: string; medecin: string; date: string;
  medicaments: string; posologie: string; duree: string; renouvellable: boolean;
}

@Component({
  selector: 'app-ordonnances',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ordonnances.component.html',
  styleUrl: './ordonnances.component.scss'
})
export class OrdonnancesComponent {
  showForm = signal(false);
  form = { patient: '', medecin: '', date: '', medicaments: '', posologie: '', duree: '7 jours', renouvellable: false };

  ordonnances: Ordonnance[] = [
    { id: '1', patient: 'Koné Aminata',     medecin: 'Dr. Diallo', date: '20/04/2024', medicaments: 'Amlodipine 5mg',     posologie: '1 cp/jour le matin',      duree: '30 jours',  renouvellable: true  },
    { id: '2', patient: 'Traoré Boubacar',  medecin: 'Dr. Touré',  date: '20/04/2024', medicaments: 'Fer + Vitamine C',   posologie: '1 cp/jour pendant repas', duree: '30 jours',  renouvellable: false },
    { id: '3', patient: 'Bamba Fatoumata',  medecin: 'Dr. Kaboré', date: '19/04/2024', medicaments: 'Oméprazole 20mg',    posologie: '1 gélule avant repas',    duree: '14 jours',  renouvellable: false },
    { id: '4', patient: 'Coulibaly Issouf', medecin: 'Dr. Diallo', date: '18/04/2024', medicaments: 'Amoxicilline 500mg', posologie: '1 cp x3/jour',            duree: '7 jours',   renouvellable: false },
    { id: '5', patient: 'Ouattara Hawa',    medecin: 'Dr. Touré',  date: '17/04/2024', medicaments: 'Paracétamol 500mg',  posologie: '2 cp si douleur (max 4/j)',duree: '5 jours',   renouvellable: false },
  ];

  addOrdonnance() {
    if (!this.form.patient || !this.form.medicaments) return;
    this.ordonnances.unshift({ id: Date.now().toString(), ...this.form });
    this.form = { patient: '', medecin: '', date: '', medicaments: '', posologie: '', duree: '7 jours', renouvellable: false };
    this.showForm.set(false);
  }

  telechargerPDF(o: Ordonnance) {
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
    doc.text('ORDONNANCE', pageWidth / 2, margin + 25, { align: 'center' });

    // Informations de l'ordonnance
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    let y = margin + 40;

    doc.text(`Patient: ${o.patient}`, margin, y);
    y += 8;
    doc.text(`Médecin: ${o.medecin}`, margin, y);
    y += 8;
    doc.text(`Date: ${o.date}`, margin, y);
    y += 8;
    doc.text(`Heure: ${new Date().toLocaleTimeString('fr-FR')}`, margin, y);
    y += 12;

    // Médicaments prescrits
    doc.setFont('helvetica', 'bold');
    doc.text('Médicaments prescrits:', margin, y);
    y += 8;
    doc.setFont('helvetica', 'normal');
    const medLines = doc.splitTextToSize(o.medicaments, contentWidth);
    doc.text(medLines, margin, y);
    y += medLines.length * 5 + 8;

    // Posologie
    doc.setFont('helvetica', 'bold');
    doc.text('Posologie:', margin, y);
    y += 8;
    doc.setFont('helvetica', 'normal');
    const posoLines = doc.splitTextToSize(o.posologie, contentWidth);
    doc.text(posoLines, margin, y);
    y += posoLines.length * 5 + 8;

    // Durée
    doc.text(`Durée du traitement: ${o.duree}`, margin, y);
    y += 8;
    doc.text(`Renouvellable: ${o.renouvellable ? 'Oui' : 'Non'}`, margin, y);
    y += 20;

    // Zone de signature
    doc.setFont('helvetica', 'normal');
    doc.text('Signature du médecin:', margin, pageHeight - margin - 20);
    doc.line(margin, pageHeight - margin - 15, pageWidth - margin, pageHeight - margin - 15);

    // Téléchargement
    doc.save(`ordonnance_${o.patient.replace(/\s+/g, '_')}_${o.date.replace(/\//g, '-')}.pdf`);
  }
}
