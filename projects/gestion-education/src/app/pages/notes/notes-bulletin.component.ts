import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollabStoreService } from '../../services/collab-store.service';
import {
  BulletinPeriod,
  BulletinRecord,
  BulletinSubject,
  EducationBulletinsService,
  Student,
} from '../../services/education-bulletins.service';

@Component({
  selector: 'app-notes-bulletin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes-bulletin.component.html',
  styleUrl: './notes-bulletin.component.scss',
})
export class NotesBulletinComponent {
  readonly selectedClass = signal('');
  readonly selectedPeriod = signal<BulletinPeriod | ''>('');
  readonly selectedStudentId = signal('');
  readonly draft = signal<BulletinRecord | null>(null);
  readonly showDrawer = signal(false);

  readonly secondaryClasses = computed(() => this.bulletinStore.getSecondaryClasses());
  readonly classData = computed(() => this.bulletinStore.getClassByName(this.selectedClass()));
  readonly students = computed(() => this.selectedClass() ? this.bulletinStore.getStudentsForClass(this.selectedClass()) : []);
  readonly allSaved = computed(() => {
    const period = this.activePeriod();
    const list = this.students();
    return list.length > 0 && list.every(student => !!this.bulletinStore.getBulletin(student.id, period));
  });
  readonly canProceed = computed(() => this.allSaved());

  constructor(
    public readonly bulletinStore: EducationBulletinsService,
    public readonly collabStore: CollabStoreService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    const className = this.route.snapshot.queryParamMap.get('classe');
    const period = this.route.snapshot.queryParamMap.get('periode') as BulletinPeriod | null;
    if (className) this.selectedClass.set(className);
    if (period) this.selectedPeriod.set(period);
    this.syncPeriod();
  }

  get schoolName(): string {
    return this.collabStore.company()?.name ?? 'Établissement scolaire';
  }

  activePeriod(): BulletinPeriod {
    const periods = this.classData()?.niveau ? this.bulletinStore.getPeriods(this.classData()!.niveau) : [];
    const current = this.selectedPeriod();
    if (current && periods.includes(current)) return current;
    return periods[0] ?? '1er trimestre';
  }

  selectStudent(student: Student): void {
    this.selectedStudentId.set(student.id);
    const period = this.activePeriod();
    const existing = this.bulletinStore.getBulletin(student.id, period);
    this.draft.set(existing ? this.clone(existing) : this.bulletinStore.createEmptyBulletin(student, period));
    this.showDrawer.set(true);
  }

  saveBulletin(): void {
    const current = this.draft();
    if (!current) return;
    const evaluated = this.bulletinStore.evaluateBulletin(current);
    this.bulletinStore.saveBulletin(evaluated);
    this.draft.set(this.clone(evaluated));
  }

  closeDrawer(): void {
    this.showDrawer.set(false);
    this.draft.set(null);
  }

  exportPdf(): void {
    const current = this.draft();
    if (!current) return;
    this.bulletinStore.exportBulletinPdf(this.bulletinStore.evaluateBulletin(current), this.schoolName);
  }

  studentSaved(studentId: string): boolean {
    return !!this.bulletinStore.getBulletin(studentId, this.activePeriod());
  }

  next(): void {
    this.router.navigate(['/notes']);
  }

  goBack(): void {
    this.router.navigate(['/notes']);
  }

  updateSubject(index: number, key: keyof BulletinSubject, value: string): void {
    const current = this.draft();
    if (!current) return;
    const subject = current.subjects[index];
    if (key === 'matiere' || key === 'appreciation') {
      (subject[key] as string) = value;
    } else {
      (subject[key] as number) = Number(value) || 0;
    }
    current.subjects[index] = { ...subject, appreciation: this.subjectAppreciation(subject) };
    this.draft.set({ ...current });
  }

  private subjectAverage(subject: BulletinSubject): number {
    return (Number(subject.devoir1) + Number(subject.devoir2) + Number(subject.controle) + Number(subject.examen) * 2) / 5;
  }

  subjectAppreciation(subject: BulletinSubject): string {
    const average = this.subjectAverage(subject);
    if (average >= 16) return 'Excellent';
    if (average >= 14) return 'Très bien';
    if (average >= 12) return 'Bien';
    if (average >= 10) return 'Passable';
    return 'Insuffisant';
  }

  displaySubjectAverage(subject: BulletinSubject): number {
    return this.subjectAverage(subject);
  }

  setAverage(value: string): void {
    const current = this.draft();
    if (!current) return;
    current.moyenneGenerale = Number(value) || 0;
    this.draft.set({ ...current });
  }

  private syncPeriod(): void {
    const periods = this.classData()?.niveau ? this.bulletinStore.getPeriods(this.classData()!.niveau) : [];
    if (!this.selectedPeriod() && periods.length) this.selectedPeriod.set(periods[0]);
  }

  private clone(record: BulletinRecord): BulletinRecord {
    return JSON.parse(JSON.stringify(record)) as BulletinRecord;
  }
}
