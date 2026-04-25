import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import jsPDF from 'jspdf';
import { CollabStoreService, TicketSale } from '../../services/collab-store.service';

@Component({
  selector: 'app-passagers',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './passagers.component.html',
  styleUrl: './passagers.component.scss'
})
export class PassagersComponent {
  routeFilter = '';

  constructor(public readonly store: CollabStoreService) {}

  get routes() {
    const routes = new Set(this.store.ticketSales().map(s => s.route));
    return Array.from(routes);
  }

  get filteredSales(): TicketSale[] {
    if (!this.routeFilter) return this.store.ticketSales();
    return this.store.ticketSales().filter(s => s.route === this.routeFilter);
  }

  exportPdf() {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text('Liste des passagers', 10, 12);
    const routeTitle = this.routeFilter || 'Tous les trajets';
    doc.setFontSize(10);
    doc.text(`Trajet: ${routeTitle}`, 10, 20);

    let y = 28;
    this.filteredSales.forEach((s) => {
      doc.text(`${s.clientName} | ${s.route} | ${s.busPlate} | ${s.driverName}`, 10, y);
      y += 6;
      if (y > 280) {
        doc.addPage();
        y = 12;
      }
    });

    doc.save('liste-passagers.pdf');
  }

  get returnRoute(): string {
    return this.store.mode() === 'centralized' ? '/dashboard' : '/trajets';
  }
}

