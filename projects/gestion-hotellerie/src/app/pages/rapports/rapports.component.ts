import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rapports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rapports.component.html',
  styleUrl: './rapports.component.scss'
})
export class RapportsComponent {
  dateRange = signal('01/04/2024 - 30/04/2024');

  // Bar chart data (CA en K€ par semaine)
  readonly barData = [
    { label: '31/03', value: 18 },
    { label: '07/04', value: 22 },
    { label: '14/04', value: 16 },
    { label: '21/04', value: 28 },
    { label: '28/04', value: 24 },
    { label: '05/05', value: 30 },
    { label: '12/05', value: 26 },
  ];

  readonly maxBar = Math.max(...this.barData.map(d => d.value));

  barHeight(v: number): number {
    return Math.round((v / this.maxBar) * 80);
  }

  // Pie chart (SVG): Libre 29%, Occupée 59%, Maintenance 12%
  readonly pieSegments = this.buildPie([
    { label: 'Libre',        pct: 29, color: '#6366f1' },
    { label: 'Occupée',      pct: 59, color: '#f59e0b' },
    { label: 'Maintenance',  pct: 12, color: '#10b981' },
  ]);

  private buildPie(data: { label: string; pct: number; color: string }[]) {
    const r = 40; const cx = 50; const cy = 50;
    let startAngle = -90;
    return data.map(d => {
      const angle = (d.pct / 100) * 360;
      const start = this.polar(cx, cy, r, startAngle);
      startAngle += angle;
      const end = this.polar(cx, cy, r, startAngle);
      const large = angle > 180 ? 1 : 0;
      const path = `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${large} 1 ${end.x} ${end.y} Z`;
      return { ...d, path };
    });
  }

  private polar(cx: number, cy: number, r: number, deg: number) {
    const rad = (deg * Math.PI) / 180;
    return { x: +(cx + r * Math.cos(rad)).toFixed(2), y: +(cy + r * Math.sin(rad)).toFixed(2) };
  }
}
