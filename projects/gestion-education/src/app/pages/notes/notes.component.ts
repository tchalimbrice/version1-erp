import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { EducationBulletinsService, BulletinPeriod } from '../../services/education-bulletins.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {
  readonly selectedClass = signal('');
  readonly selectedPeriod = signal<BulletinPeriod | ''>('');

  readonly secondaryClasses = computed(() => this.bulletinStore.getSecondaryClasses());
  readonly selectedClassData = computed(() => this.bulletinStore.getClassByName(this.selectedClass()));
  readonly availablePeriods = computed(() => {
    const level = this.selectedClassData()?.niveau;
    return level ? this.bulletinStore.getPeriods(level) : [];
  });

  constructor(
    public readonly bulletinStore: EducationBulletinsService,
    private readonly router: Router,
  ) {}

  selectClass(className: string): void {
    this.selectedClass.set(className);
    this.selectedPeriod.set('');
    if (!className) return;
    const level = this.bulletinStore.getClassByName(className)?.niveau;
    if (level) this.selectedPeriod.set(this.bulletinStore.getPeriods(level)[0] ?? '');
  }

  openWorkspace(): void {
    if (!this.selectedClass() || !this.selectedPeriod()) return;
    this.router.navigate(['/notes-bulletin'], {
      queryParams: {
        classe: this.selectedClass(),
        periode: this.selectedPeriod(),
      },
    });
  }

  goToHistory(): void {
    this.router.navigate(['/bulletins-historique']);
  }
}
