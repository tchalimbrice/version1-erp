import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { jsPDF } from 'jspdf';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-rapports',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rapports.component.html',
  styleUrl: './rapports.component.scss'
})
export class RapportsComponent {
  constructor(private readonly store: CollabStoreService) {}

  generateProductionReport() {
    const doc = new jsPDF();
    let y = 16;
    y = this.title(doc, 'Rapport de Production', y);
    y = this.section(doc, 'Résumé', [
      'Période: Ce mois',
      'Cultures principales: Maïs, Tomates, Laitue, Carottes',
      'Surface exploitée: 8.5 ha',
      'Rendement moyen: 3.2 t/ha'], y);
    y = this.section(doc, 'Détails des cultures', [
      'Maïs: 2.5 ha - 8.1 t',
      'Tomates: 1.2 ha - 3.6 t',
      'Laitue: 0.8 ha - 1.4 t',
      'Carottes: 1.5 ha - 4.2 t'], y);
    y = this.section(doc, 'Observations', [
      'Irrigation efficace sur 75% des parcelles.',
      'Besoin d’engrais organique pour la prochaine saison.'], y);
    this.save(doc, 'rapport-production.pdf');
  }

  generateFinanceReport() {
    const doc = new jsPDF();
    const sales = this.store.sales();
    const total = sales.reduce((sum, s) => sum + s.total, 0);
    const expenses = 8200;
    const balance = total - expenses;
    let y = 16;
    y = this.title(doc, 'Rapport Financier', y);
    y = this.section(doc, 'Synthèse', [
      `Revenus: ${this.money(total)} Fcfa`,
      `Dépenses: ${this.money(expenses)} Fcfa`,
      `Solde: ${this.money(balance)} Fcfa`
    ], y);
    y = this.section(doc, 'Dernières ventes',
      sales.slice(0, 5).map(s => `${s.product} - ${s.quantity} ${s.unit} - ${this.money(s.total)} Fcfa`),
      y
    );
    y = this.section(doc, 'Remarques', [
      'Les ventes agricoles représentent la majorité des revenus.',
      'Prévoir un budget supplémentaire pour les semences.'], y);
    this.save(doc, 'rapport-financier.pdf');
  }

  generateInventoryReport() {
    const doc = new jsPDF();
    let y = 16;
    y = this.title(doc, 'Rapport d\'Inventaire', y);
    y = this.section(doc, 'Stocks critiques', [
      'Engrais organique: 200 kg (seuil 50 kg)',
      'Aliment poulet: 500 kg (seuil 100 kg)',
      'Pompe d\'irrigation: 5 unités (seuil 2)'], y);
    y = this.section(doc, 'Actions recommandées', [
      'Planifier un réassort d\'engrais dans 2 semaines.',
      'Vérifier l\'état des équipements avant la saison des pluies.'], y);
    this.save(doc, 'rapport-inventaire.pdf');
  }

  generateTasksReport() {
    const doc = new jsPDF();
    let y = 16;
    y = this.title(doc, 'Rapport des Tâches', y);
    y = this.section(doc, 'Tâches réalisées', [
      'Irrigation - Parcelle A',
      'Récolte des tomates',
      'Nettoyage du dépôt'], y);
    y = this.section(doc, 'Tâches à venir', [
      'Traitement phytosanitaire - Parcelle B',
      'Nourrir les poulets',
      'Révision du matériel'], y);
    y = this.section(doc, 'Taux d\'avancement', [
      'Tâches complétées: 68%',
      'Tâches en retard: 2'], y);
    this.save(doc, 'rapport-taches.pdf');
  }

  private title(doc: jsPDF, text: string, y: number): number {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text(text, 14, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(`Généré le ${new Date().toLocaleDateString('fr-FR')}`, 14, y + 6);
    return y + 16;
  }

  private section(doc: jsPDF, title: string, lines: string[], y: number): number {
    doc.setFont('helvetica', 'bold');
    doc.text(title, 14, y);
    doc.setFont('helvetica', 'normal');
    y += 6;
    lines.forEach(line => {
      doc.text(`• ${line}`, 16, y);
      y += 6;
    });
    return y + 4;
  }

  private money(value: number): string {
    return new Intl.NumberFormat('fr-FR').format(value);
  }

  private save(doc: jsPDF, filename: string) {
    doc.save(filename);
  }
}
