import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {
  constructor(private readonly store: CollabStoreService) {}

  routes = [
    { label: 'Lomé ? Kara', busPlate: 'TG-2345-LO', driverName: 'Komlan Adjo' },
    { label: 'Lomé ? Sokodé', busPlate: 'TG-7741-LO', driverName: 'Akouavi Mensah' },
    { label: 'Lomé ? Atakpamé', busPlate: 'TG-1122-LO', driverName: 'Yao Agboka' }
  ];

  selectedRoute = this.routes[0];

  get returnRoute(): string {
    return this.store.mode() === 'centralized' ? '/dashboard' : '/tickets';
  }

  generatePdf(
    prenom: string,
    nom: string,
    depart: string,
    arrivee: string,
    dateVoyage: string,
    passagers: string,
    total: string
  ): void {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [80, 180]
    });

    doc.setFillColor(245, 248, 252);
    doc.rect(0, 0, 80, 180, 'F');

    doc.setTextColor(30, 58, 92);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('TRANSPORT EXPRESS', 40, 14, { align: 'center' });

    doc.setDrawColor(220, 228, 238);
    doc.line(8, 20, 72, 20);

    doc.setFontSize(11);
    doc.text('Recu de Billet', 40, 28, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.text('N° de Reservation : 123456789', 40, 34, { align: 'center' });

    doc.line(8, 38, 72, 38);

    const yStart = 46;
    const lineGap = 8;

    doc.setFont('helvetica', 'bold');
    doc.text('Client :', 10, yStart);
    doc.setFont('helvetica', 'normal');
    doc.text(`${prenom} ${nom}`, 32, yStart);

    doc.setFont('helvetica', 'bold');
    doc.text('Trajet :', 10, yStart + lineGap);
    doc.setFont('helvetica', 'normal');
    doc.text(this.selectedRoute.label, 32, yStart + lineGap);

    doc.setFont('helvetica', 'bold');
    doc.text('Bus :', 10, yStart + lineGap * 2);
    doc.setFont('helvetica', 'normal');
    doc.text(this.selectedRoute.busPlate, 32, yStart + lineGap * 2);

    doc.setFont('helvetica', 'bold');
    doc.text('Chauffeur :', 10, yStart + lineGap * 3);
    doc.setFont('helvetica', 'normal');
    doc.text(this.selectedRoute.driverName, 32, yStart + lineGap * 3);

    doc.setFont('helvetica', 'bold');
    doc.text('Date de Voyage :', 10, yStart + lineGap * 4);
    doc.setFont('helvetica', 'normal');
    doc.text(this.formatDate(dateVoyage), 40, yStart + lineGap * 4);

    doc.setFont('helvetica', 'bold');
    doc.text('Passagers :', 10, yStart + lineGap * 5);
    doc.setFont('helvetica', 'normal');
    doc.text(passagers, 32, yStart + lineGap * 5);

    doc.line(8, yStart + lineGap * 5 + 6, 72, yStart + lineGap * 5 + 6);

    doc.setFont('helvetica', 'bold');
    doc.text('Total a Payer :', 10, yStart + lineGap * 6 + 4);
    doc.text(`${total} €`, 68, yStart + lineGap * 6 + 4, { align: 'right' });

    doc.setFont('helvetica', 'normal');
    doc.text('Mode de Paiement :', 10, yStart + lineGap * 7 + 4);
    doc.text('Carte Bancaire', 40, yStart + lineGap * 7 + 4);

    doc.setFont('helvetica', 'bold');
    doc.text('Montant Total :', 10, yStart + lineGap * 8 + 6);
    doc.text(`${total} €`, 68, yStart + lineGap * 8 + 6, { align: 'right' });

    doc.line(8, yStart + lineGap * 8 + 10, 72, yStart + lineGap * 8 + 10);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text('Merci d’avoir voyage avec nous !', 40, yStart + lineGap * 9 + 8, {
      align: 'center'});

    doc.setDrawColor(120, 140, 165);
    doc.rect(30, yStart + lineGap * 10 + 6, 20, 20);
    doc.text('QR', 40, yStart + lineGap * 10 + 18, { align: 'center' });

    doc.line(8, 160, 72, 160);
    doc.text('www.transportexpress.fr', 40, 168, { align: 'center' });

    doc.save(`ticket-${prenom}-${nom}.pdf`);
    const actor = this.store.currentUser()?.name ?? 'Comptable';
    const clientName = `${prenom} ${nom}`.trim();
    this.store.addTicketSale({
      id: crypto.randomUUID(),
      clientName,
      route: this.selectedRoute.label,
      date: this.formatDate(dateVoyage),
      passengers: passagers,
      total: `${total} €`,
      soldBy: actor,
      soldAt: new Date().toISOString(),
      busPlate: this.selectedRoute.busPlate,
      driverName: this.selectedRoute.driverName
    });
    this.store.logAction('accountant', actor, `Vente d'un ticket ${this.selectedRoute.label} (${total} €)`);
  }

  private formatDate(value: string): string {
    if (!value) return '—';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'});
  }
}

