import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CollabStoreService, SaleEntry } from '../../services/collab-store.service';
import { encodeInvite, InvitePayloadV1 } from '../../utils/invite';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly sales = computed(() => this.store.sales());
  readonly totalSales = computed(() => this.sales().reduce((sum, s) => sum + s.total, 0));
  readonly expenses = computed(() => 8200);
  readonly balance = computed(() => this.totalSales() - this.expenses());
  readonly ownerInviteUrl = computed(() => {
    const company = this.store.company();
    const user = this.store.currentUser();
    const mode = this.store.mode() ?? 'centralized';
    if (!company || !user || user.role !== 'owner') return '';
    const payload: InvitePayloadV1 = {
      v: 1,
      domain: 'gestion-de-ferme',
      issuedAt: new Date().toISOString(),
      mode,
      company,
      user: { role: 'owner', name: company.name, email: company.email },
      collaborators: this.store.collaborators()
    };
    return `${window.location.origin}/invite?invite=${encodeInvite(payload)}`;
  });

  constructor(private readonly store: CollabStoreService) {}

  formatMoney(amount: number): string {
    return new Intl.NumberFormat('fr-FR').format(amount);
  }

  chartPath(values: number[]): string {
    if (!values.length) return '';
    const width = 320;
    const height = 120;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const stepX = width / (values.length - 1 || 1);
    const points = values.map((v, i) => {
      const x = i * stepX;
      const y = height - ((v - min) / range) * height;
      return `${x},${y}`;
    });
    return `M ${points.join(' L ')}`;
  }

  chartFill(values: number[]): string {
    if (!values.length) return '';
    const width = 320;
    const height = 120;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const stepX = width / (values.length - 1 || 1);
    const points = values.map((v, i) => {
      const x = i * stepX;
      const y = height - ((v - min) / range) * height;
      return `${x},${y}`;
    });
    return `M 0,${height} L ${points.join(' L ')} L ${width},${height} Z`;
  }

  lastSales(count: number): SaleEntry[] {
    return this.sales().slice(0, count).reverse();
  }
}
