import { Injectable, signal } from '@angular/core';
import { jsPDF } from 'jspdf';

export type EducationLevel = 'Collège' | 'Lycée' | 'Primaire';
export type BulletinPeriod = '1er trimestre' | '2e trimestre' | '3e trimestre' | '1er semestre' | '2e semestre';

export interface SchoolClass {
  id: number;
  nom: string;
  niveau: EducationLevel;
  effectif: number;
  enseignantPrincipal: string;
  salle: string;
  moyenneClasse: number;
}

export interface Student {
  id: string;
  matricule: string;
  nom: string;
  prenom: string;
  classe: string;
  niveau: EducationLevel;
  dateNaissance: string;
}

export interface BulletinSubject {
  matiere: string;
  devoir1: number;
  devoir2: number;
  controle: number;
  examen: number;
  coefficient: number;
  appreciation: string;
}

export interface BulletinRecord {
  id: string;
  studentId: string;
  matricule: string;
  studentNom: string;
  studentPrenom: string;
  classe: string;
  niveau: EducationLevel;
  periode: BulletinPeriod;
  schoolYear: string;
  dateCreation: string;
  subjects: BulletinSubject[];
  moyenneGenerale: number;
  rang: string;
  mention: string;
}

const STORAGE_KEY = 'gestion-education_bulletins_state';

const SUBJECTS_COLLEGE = ['Mathématiques', 'Français', 'Histoire-Géo', 'SVT', 'Physique-Chimie', 'Anglais', 'EPS'];
const SUBJECTS_LYCEE = ['Mathématiques', 'Français', 'Histoire-Géo', 'SVT', 'Physique-Chimie', 'Anglais', 'Philosophie', 'EPS'];

const FIRST_NAMES = [
  'Aminata', 'Bamba', 'Cheick', 'Fatou', 'Kouamé', 'Moussa', 'Awa', 'Idrissa',
  'Mariam', 'Issa', 'Yao', 'Adama', 'Kadidia', 'Bertrand', 'Ines', 'Justin',
  'Gnénéba', 'Hamidou', 'Ange', 'Estelle', 'Drissa', 'Léonce', 'Yasmine', 'Ousmane',
  'Sita', 'Mariam', 'Sékou', 'Yacouba', 'Fatimata', 'Hervé', 'Aïcha', 'Mariamou',
];

const LAST_NAMES = [
  'Traoré', 'Kouamé', 'Bamba', 'Diallo', 'Coulibaly', 'Koné', 'Ouédraogo', 'Sawadogo',
  'Sanogo', 'N\'Goran', 'Béhi', 'Yeo', 'Bazin', 'Yao', 'Tano', 'Béatrice',
  'Koffi', 'Fofana', 'Béré', 'Diarra', 'Toure', 'Zoungrana', 'Compaoré', 'Konaté',
];

const COUNTRY_SCHOOL_YEAR = new Date().getFullYear();

function normalizeKey(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '').toLowerCase();
}

function subjectSet(level: EducationLevel): string[] {
  return level === 'Lycée' ? SUBJECTS_LYCEE : SUBJECTS_COLLEGE;
}

@Injectable({ providedIn: 'root' })
export class EducationBulletinsService {
  readonly classes = signal<SchoolClass[]>([
    { id: 1, nom: 'CP A', niveau: 'Primaire', effectif: 28, enseignantPrincipal: 'Mme Kouassi', salle: 'S-01', moyenneClasse: 14.2 },
    { id: 2, nom: 'CE1 A', niveau: 'Primaire', effectif: 32, enseignantPrincipal: 'M. Diallo', salle: 'S-02', moyenneClasse: 13.8 },
    { id: 3, nom: 'CE2 A', niveau: 'Primaire', effectif: 30, enseignantPrincipal: 'Mme Traoré', salle: 'S-03', moyenneClasse: 12.5 },
    { id: 4, nom: 'CM1 A', niveau: 'Primaire', effectif: 34, enseignantPrincipal: 'M. Bamba', salle: 'S-04', moyenneClasse: 13.1 },
    { id: 5, nom: 'CM2 A', niveau: 'Primaire', effectif: 29, enseignantPrincipal: 'Mme Sanogo', salle: 'S-05', moyenneClasse: 14.7 },
    { id: 6, nom: '6ème A', niveau: 'Collège', effectif: 38, enseignantPrincipal: 'M. Coulibaly', salle: 'S-06', moyenneClasse: 11.9 },
    { id: 7, nom: '6ème B', niveau: 'Collège', effectif: 36, enseignantPrincipal: 'Mme Diabaté', salle: 'S-07', moyenneClasse: 12.4 },
    { id: 8, nom: '5ème A', niveau: 'Collège', effectif: 40, enseignantPrincipal: 'M. Yao', salle: 'S-08', moyenneClasse: 13.6 },
    { id: 9, nom: '4ème A', niveau: 'Collège', effectif: 35, enseignantPrincipal: 'Mme N\'Goran', salle: 'S-09', moyenneClasse: 12.1 },
    { id: 10, nom: '3ème A', niveau: 'Collège', effectif: 33, enseignantPrincipal: 'M. Koné', salle: 'S-10', moyenneClasse: 13.0 },
    { id: 11, nom: '2nde A', niveau: 'Lycée', effectif: 42, enseignantPrincipal: 'Mme Ouédraogo', salle: 'S-11', moyenneClasse: 11.5 },
    { id: 12, nom: '1ère A', niveau: 'Lycée', effectif: 38, enseignantPrincipal: 'M. Sawadogo', salle: 'S-12', moyenneClasse: 12.8 },
    { id: 13, nom: 'Tle A', niveau: 'Lycée', effectif: 35, enseignantPrincipal: 'Mme Koffi', salle: 'S-13', moyenneClasse: 13.4 },
    { id: 14, nom: 'Tle B', niveau: 'Lycée', effectif: 32, enseignantPrincipal: 'M. Fofana', salle: 'S-14', moyenneClasse: 11.8 },
  ]);

  readonly bulletins = signal<BulletinRecord[]>(this.loadState().bulletins ?? []);

  private studentsCache = new Map<string, Student[]>();

  getSecondaryClasses(): SchoolClass[] {
    return this.classes().filter(c => c.niveau !== 'Primaire');
  }

  getClassByName(name: string): SchoolClass | undefined {
    return this.classes().find(c => c.nom === name);
  }

  getStudentsForClass(className: string): Student[] {
    const cached = this.studentsCache.get(className);
    if (cached) return cached;
    const schoolClass = this.getClassByName(className);
    if (!schoolClass) return [];
    const generated = Array.from({ length: schoolClass.effectif }, (_, index) => this.makeStudent(schoolClass, index, schoolClass.niveau));
    this.studentsCache.set(className, generated);
    return generated;
  }

  getStudentById(studentId: string): Student | undefined {
    for (const schoolClass of this.getSecondaryClasses()) {
      const student = this.getStudentsForClass(schoolClass.nom).find(item => item.id === studentId);
      if (student) return student;
    }
    return undefined;
  }

  getPeriods(level: EducationLevel): BulletinPeriod[] {
    return level === 'Lycée'
      ? ['1er semestre', '2e semestre']
      : ['1er trimestre', '2e trimestre', '3e trimestre'];
  }

  getBulletin(studentId: string, periode: BulletinPeriod): BulletinRecord | undefined {
    return this.bulletins().find(item => item.studentId === studentId && item.periode === periode);
  }

  getBulletinsByClass(className: string): BulletinRecord[] {
    return this.bulletins().filter(item => item.classe === className);
  }

  searchBulletins(query: string): BulletinRecord[] {
    const q = query.trim().toLowerCase();
    return this.bulletins().filter(item => !q || `${item.studentNom} ${item.studentPrenom} ${item.classe} ${item.periode} ${item.matricule}`.toLowerCase().includes(q));
  }

  saveBulletin(record: BulletinRecord): void {
    const list = this.bulletins();
    const next = list.some(item => item.id === record.id)
      ? list.map(item => item.id === record.id ? record : item)
      : [record, ...list];
    this.bulletins.set(this.recomputeRanks(next));
    this.persist();
  }

  deleteBulletin(id: string): void {
    this.bulletins.update(list => this.recomputeRanks(list.filter(item => item.id !== id)));
    this.persist();
  }

  exportBulletinPdf(record: BulletinRecord, schoolName: string): void {
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10;
    const contentWidth = pageWidth - margin * 2;

    doc.setDrawColor(70, 70, 70);
    doc.setLineWidth(0.4);

    doc.setFillColor(245, 245, 245);
    doc.rect(margin, margin, 56, 24, 'F');
    doc.setFillColor(255, 255, 255);
    doc.rect(margin + 2, margin + 2, 10, 20, 'F');
    doc.setTextColor(25, 25, 25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(schoolName, margin + 14, margin + 7);
    doc.setFontSize(8);
    doc.text('Enseignement secondaire', margin + 14, margin + 12);
    doc.text('Direction des études', margin + 14, margin + 16);

    const rightX = margin + 58;
    const rightW = contentWidth - 58;
    doc.setFillColor(238, 238, 238);
    doc.rect(rightX, margin, rightW, 24, 'F');
    doc.setFontSize(9);
    doc.text('République / Ministère de l’éducation', rightX + rightW / 2, margin + 7, { align: 'center' });
    doc.setFontSize(10);
    doc.text('BULLETIN DE NOTES DU TROISIÈME TRIMESTRE', rightX + rightW / 2, margin + 14, { align: 'center' });
    doc.setFontSize(8);
    doc.text(`Année scolaire : ${record.schoolYear}`, rightX + rightW / 2, margin + 19, { align: 'center' });

    let y = 39;
    const details = [
      [`Matricule de l'élève`, record.matricule],
      [`Nom et prénom de l'élève`, `${record.studentNom} ${record.studentPrenom}`],
      [`Date et lieu de naissance`, '—'],
      [`Classe/effectif`, record.classe],
      [`Classe doublée`, '—'],
      [`Adresse`, '—'],
    ];
    doc.setFontSize(8.5);
    details.forEach((item, index) => {
      const rowY = y + index * 5.2;
      doc.setFont('helvetica', 'bold');
      doc.text(`${item[0]} :`, margin, rowY);
      doc.setFont('helvetica', 'normal');
      doc.text(item[1], margin + 44, rowY);
    });

    y += 33;
    const cols = [
      { label: 'Matières', width: 34 },
      { label: 'C.td', width: 13 },
      { label: 'Devoir 1', width: 14 },
      { label: 'Devoir 2', width: 14 },
      { label: 'Contrôle', width: 15 },
      { label: 'Examen', width: 15 },
      { label: 'Moy.', width: 11 },
      { label: 'Coef', width: 10 },
      { label: 'Total', width: 14 },
      { label: 'RG', width: 9 },
      { label: 'Observations', width: 25 },
    ];
    const rowHeight = 6.8;
    let x = margin;
    doc.setFillColor(217, 217, 217);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.2);
    cols.forEach(col => {
      doc.rect(x, y, col.width, rowHeight, 'F');
      doc.text(col.label, x + 1, y + 4.3);
      x += col.width;
    });

    y += rowHeight;
    doc.setFont('helvetica', 'normal');
    record.subjects.forEach(subject => {
      x = margin;
      const continuous = (subject.devoir1 + subject.devoir2 + subject.controle) / 3;
      const moyenne = this.subjectAverage(subject);
      const values = [
        subject.matiere,
        continuous.toFixed(2),
        subject.devoir1.toFixed(2),
        subject.devoir2.toFixed(2),
        subject.controle.toFixed(2),
        subject.examen.toFixed(2),
        moyenne.toFixed(2),
        String(subject.coefficient),
        (moyenne * subject.coefficient).toFixed(2),
        '-',
        subject.appreciation || this.appreciationFor(subject.devoir1, subject.devoir2, subject.controle, subject.examen),
      ];
      values.forEach((value, index) => {
        const width = cols[index].width;
        doc.rect(x, y, width, rowHeight);
        if (index === 0 || index === 10) {
          doc.text(value, x + 1, y + 4.3, { maxWidth: width - 2 });
        } else {
          doc.text(value, x + width / 2, y + 4.3, { align: 'center' });
        }
        x += width;
      });
      y += rowHeight;
    });

    y += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text(`Moyenne générale : ${record.moyenneGenerale.toFixed(2)}/20`, margin, y);
    doc.text(`Rang : ${record.rang}`, margin + 72, y);
    doc.text(`Mention : ${record.mention}`, margin + 112, y);

    y += 10;
    doc.setFontSize(7.5);
    doc.rect(margin, y, 88, 25);
    doc.text('Décisions du conseil de classe', margin + 2, y + 4);
    doc.text('Absences : ............................', margin + 2, y + 9);
    doc.text('Retards : ..............................', margin + 2, y + 14);
    doc.text('Avertissements : .......................', margin + 2, y + 19);

    doc.rect(margin + 92, y, contentWidth - 92, 25);
    doc.text('Visa du Principal', margin + 94, y + 5);
    doc.text(schoolName, margin + 94, y + 11);
    doc.text(`A ${new Date().toLocaleDateString('fr-FR')}`, margin + 94, y + 18);

    doc.save(`${record.studentNom}_${record.studentPrenom}_${record.periode}.pdf`.replace(/\s+/g, '_'));
  }

  createEmptyBulletin(student: Student, periode: BulletinPeriod): BulletinRecord {
    return {
      id: `${student.id}-${normalizeKey(periode)}`,
      studentId: student.id,
      matricule: student.matricule,
      studentNom: student.nom,
      studentPrenom: student.prenom,
      classe: student.classe,
      niveau: student.niveau,
      periode,
      schoolYear: `${COUNTRY_SCHOOL_YEAR}-${COUNTRY_SCHOOL_YEAR + 1}`,
      dateCreation: new Date().toLocaleDateString('fr-FR'),
      subjects: this.defaultSubjects(student.niveau),
      moyenneGenerale: 0,
      rang: '-',
      mention: 'En attente',
    };
  }

  evaluateBulletin(record: BulletinRecord): BulletinRecord {
    const subjects = record.subjects.map(subject => ({
      ...subject,
      appreciation: subject.appreciation || this.appreciationFor(subject.devoir1, subject.devoir2, subject.controle, subject.examen),
    }));
    const totalWeighted = subjects.reduce((sum, subject) => sum + this.subjectAverage(subject) * subject.coefficient, 0);
    const totalCoef = subjects.reduce((sum, subject) => sum + Math.max(1, subject.coefficient), 0) || 1;
    const computedAverage = totalWeighted / totalCoef;
    const moyenneGenerale = record.moyenneGenerale > 0 ? record.moyenneGenerale : computedAverage;
    return {
      ...record,
      subjects,
      moyenneGenerale,
      mention: this.mentionFor(moyenneGenerale),
    };
  }

  private makeStudent(schoolClass: SchoolClass, index: number, level: EducationLevel): Student {
    const prenom = FIRST_NAMES[(index + schoolClass.id) % FIRST_NAMES.length];
    const nom = LAST_NAMES[(index * 3 + schoolClass.id) % LAST_NAMES.length];
    const code = normalizeKey(schoolClass.nom).replace(/-/g, '').slice(0, 6).toUpperCase() || 'CLS';
    const matricule = `EDU-${COUNTRY_SCHOOL_YEAR}-${code}-${String(index + 1).padStart(3, '0')}`;
    const year = level === 'Lycée'
      ? 2004 + ((index + schoolClass.id) % 5)
      : level === 'Collège'
        ? 2008 + ((index + schoolClass.id) % 5)
        : 2013 + ((index + schoolClass.id) % 7);
    const month = String(((index + 1) % 12) + 1).padStart(2, '0');
    const day = String(((index + 3) % 27) + 1).padStart(2, '0');
    return {
      id: `${normalizeKey(schoolClass.nom)}-${index + 1}`,
      matricule,
      nom,
      prenom,
      classe: schoolClass.nom,
      niveau: level,
      dateNaissance: `${year}-${month}-${day}`,
    };
  }

  defaultSubjects(level: EducationLevel): BulletinSubject[] {
    return subjectSet(level).map((matiere, index) => ({
      matiere,
      devoir1: 0,
      devoir2: 0,
      controle: 0,
      examen: 0,
      coefficient: index === 0 ? 4 : index === 1 ? 3 : 2,
      appreciation: '',
    }));
  }

  private subjectAverage(subject: BulletinSubject): number {
    return (subject.devoir1 + subject.devoir2 + subject.controle + (subject.examen * 2)) / 5;
  }

  private appreciationFor(d1: number, d2: number, controle: number, examen: number): string {
    const avg = (d1 + d2 + controle + (examen * 2)) / 5;
    return avg >= 16 ? 'Excellent' : avg >= 14 ? 'Très bien' : avg >= 12 ? 'Bien' : avg >= 10 ? 'Passable' : 'Insuffisant';
  }

  private mentionFor(moyenne: number): string {
    if (moyenne >= 16) return 'Félicitations';
    if (moyenne >= 14) return 'Très bien';
    if (moyenne >= 12) return 'Bien';
    if (moyenne >= 10) return 'Passable';
    return 'Doit progresser';
  }

  private recomputeRanks(list: BulletinRecord[]): BulletinRecord[] {
    const grouped = new Map<string, BulletinRecord[]>();
    for (const item of list) {
      const key = `${item.classe}__${item.periode}`;
      grouped.set(key, [...(grouped.get(key) ?? []), item]);
    }

    const output: BulletinRecord[] = [];
    for (const items of grouped.values()) {
      const ordered = [...items].sort((a, b) => b.moyenneGenerale - a.moyenneGenerale);
      const total = ordered.length;
      ordered.forEach((item, index) => output.push({ ...item, rang: `${index + 1}/${total}` }));
    }
    return output;
  }

  private loadState(): { bulletins?: BulletinRecord[] } {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  private persist(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ bulletins: this.bulletins() }));
  }
}
