import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';
import { BulletinRecord, EducationBulletinsService } from '../../services/education-bulletins.service';

@Component({
  selector: 'app-bulletins-historique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bulletins-historique.component.html',
  styleUrl: './bulletins-historique.component.scss',
})
export class BulletinsHistoriqueComponent {
  readonly query = signal('');

  readonly bulletins = computed(() => this.bulletinStore.searchBulletins(this.query()));
  readonly stats = computed(() => {
    const bulletins = this.bulletinStore.bulletins();
    const classes = new Set(bulletins.map(item => item.classe)).size;
    return [
      { label: 'Bulletins', value: bulletins.length },
      { label: 'Classes concernées', value: classes },
      { label: 'Dernier bulletin', value: bulletins[0]?.periode ?? '—' },
    ];
  });

  constructor(
    public readonly bulletinStore: EducationBulletinsService,
    public readonly collabStore: CollabStoreService,
    private readonly router: Router,
  ) {}

  get schoolName(): string {
    return this.collabStore.company()?.name ?? 'Établissement scolaire';
  }

  editBulletin(record: BulletinRecord): void {
    this.router.navigate(['/notes'], {
      queryParams: {
        classe: record.classe,
        periode: record.periode,
        eleve: record.studentId,
      },
    });
  }
}
