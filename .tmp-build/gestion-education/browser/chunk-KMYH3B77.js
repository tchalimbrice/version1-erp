import {
  EducationBulletinsService
} from "./chunk-MZQUGGYU.js";
import "./chunk-7YWLATDR.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-HBXAJ3KH.js";
import "./chunk-4HHYUM7A.js";
import {
  CommonModule,
  DecimalPipe
} from "./chunk-A7PCKB3Z.js";
import {
  CollabStoreService
} from "./chunk-ZHJMMKYO.js";
import {
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-WTFQPXVN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-46DXP6YY.js";

// projects/gestion-education/src/app/pages/notes/notes-bulletin.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.matiere;
function NotesBulletinComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 18);
    \u0275\u0275domListener("click", function NotesBulletinComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275text(1, "Suivant");
    \u0275\u0275domElementEnd();
  }
}
function NotesBulletinComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 19);
    \u0275\u0275domListener("click", function NotesBulletinComponent_For_34_Template_button_click_0_listener() {
      const student_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectStudent(student_r4));
    });
    \u0275\u0275domElementStart(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 21);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const student_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("student-card--saved", ctx_r1.studentSaved(student_r4.id))("student-card--selected", ctx_r1.selectedStudentId() === student_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", student_r4.nom, " ", student_r4.prenom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(student_r4.matricule);
  }
}
function NotesBulletinComponent_Conditional_35_For_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 31)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "input", 34);
    \u0275\u0275domListener("input", function NotesBulletinComponent_Conditional_35_For_54_Template_input_input_3_listener($event) {
      const \u0275$index_160_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateSubject(\u0275$index_160_r7, "devoir1", $event.target.value));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "input", 34);
    \u0275\u0275domListener("input", function NotesBulletinComponent_Conditional_35_For_54_Template_input_input_4_listener($event) {
      const \u0275$index_160_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateSubject(\u0275$index_160_r7, "devoir2", $event.target.value));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "input", 34);
    \u0275\u0275domListener("input", function NotesBulletinComponent_Conditional_35_For_54_Template_input_input_5_listener($event) {
      const \u0275$index_160_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateSubject(\u0275$index_160_r7, "controle", $event.target.value));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "input", 34);
    \u0275\u0275domListener("input", function NotesBulletinComponent_Conditional_35_For_54_Template_input_input_6_listener($event) {
      const \u0275$index_160_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateSubject(\u0275$index_160_r7, "examen", $event.target.value));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "input", 35);
    \u0275\u0275domListener("input", function NotesBulletinComponent_Conditional_35_For_54_Template_input_input_7_listener($event) {
      const \u0275$index_160_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateSubject(\u0275$index_160_r7, "coefficient", $event.target.value));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 36);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "span", 37);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const subject_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subject_r8.matiere);
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", subject_r8.devoir1);
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", subject_r8.devoir2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", subject_r8.controle);
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", subject_r8.examen);
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", subject_r8.coefficient);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.displaySubjectAverage(subject_r8) >= 16 ? "note note--A" : ctx_r1.displaySubjectAverage(subject_r8) >= 12 ? "note note--B" : ctx_r1.displaySubjectAverage(subject_r8) >= 10 ? "note note--C" : "note note--F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 10, ctx_r1.displaySubjectAverage(subject_r8), "1.1-1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(subject_r8.appreciation || "\u2014");
  }
}
function NotesBulletinComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 22);
    \u0275\u0275domListener("click", function NotesBulletinComponent_Conditional_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275domElementStart(1, "div", 23);
    \u0275\u0275domListener("click", function NotesBulletinComponent_Conditional_35_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "div", 24)(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 26);
    \u0275\u0275domListener("click", function NotesBulletinComponent_Conditional_35_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 27)(8, "div", 11)(9, "div", 12)(10, "label", 13);
    \u0275\u0275text(11, "Matricule");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(12, "input", 14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "div", 12)(14, "label", 13);
    \u0275\u0275text(15, "Moyenne de l'\xE9l\xE8ve");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "input", 28);
    \u0275\u0275domListener("input", function NotesBulletinComponent_Conditional_35_Template_input_input_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setAverage($event.target.value));
    });
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(17, "div", 11)(18, "div", 12)(19, "label", 13);
    \u0275\u0275text(20, "Nom");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(21, "input", 14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "div", 12)(23, "label", 13);
    \u0275\u0275text(24, "Pr\xE9nom");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(25, "input", 14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(26, "div", 11)(27, "div", 12)(28, "label", 13);
    \u0275\u0275text(29, "Classe");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(30, "input", 14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(31, "div", 12)(32, "label", 13);
    \u0275\u0275text(33, "Ann\xE9e scolaire");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(34, "input", 14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(35, "div", 29)(36, "div", 30)(37, "span");
    \u0275\u0275text(38, "Mati\xE8re");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "span");
    \u0275\u0275text(40, "Devoir 1");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(41, "span");
    \u0275\u0275text(42, "Devoir 2");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(43, "span");
    \u0275\u0275text(44, "Contr\xF4le");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(45, "span");
    \u0275\u0275text(46, "Examen");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "span");
    \u0275\u0275text(48, "Coef.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(49, "span");
    \u0275\u0275text(50, "Moy.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(51, "span");
    \u0275\u0275text(52, "Appr\xE9ciation");
    \u0275\u0275domElementEnd()();
    \u0275\u0275repeaterCreate(53, NotesBulletinComponent_Conditional_35_For_54_Template, 13, 13, "div", 31, _forTrack1);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(55, "div", 32)(56, "button", 5);
    \u0275\u0275domListener("click", function NotesBulletinComponent_Conditional_35_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275text(57, "Fermer");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(58, "button", 33);
    \u0275\u0275domListener("click", function NotesBulletinComponent_Conditional_35_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPdf());
    });
    \u0275\u0275text(59, "PDF");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(60, "button", 18);
    \u0275\u0275domListener("click", function NotesBulletinComponent_Conditional_35_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.saveBulletin();
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275text(61, "Enregistrer");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.bulletinStore.getBulletin(ctx_r1.draft().studentId, ctx_r1.draft().periode) ? "Modifier le bulletin" : "Nouveau bulletin");
    \u0275\u0275advance(8);
    \u0275\u0275domProperty("value", ctx_r1.draft().matricule);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r1.draft().moyenneGenerale);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r1.draft().studentNom);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r1.draft().studentPrenom);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r1.draft().classe);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r1.draft().schoolYear);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.draft().subjects);
  }
}
var NotesBulletinComponent = class _NotesBulletinComponent {
  bulletinStore;
  collabStore;
  route;
  router;
  selectedClass = signal("", ...ngDevMode ? [{ debugName: "selectedClass" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedPeriod = signal("", ...ngDevMode ? [{ debugName: "selectedPeriod" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedStudentId = signal("", ...ngDevMode ? [{ debugName: "selectedStudentId" }] : (
    /* istanbul ignore next */
    []
  ));
  draft = signal(null, ...ngDevMode ? [{ debugName: "draft" }] : (
    /* istanbul ignore next */
    []
  ));
  showDrawer = signal(false, ...ngDevMode ? [{ debugName: "showDrawer" }] : (
    /* istanbul ignore next */
    []
  ));
  secondaryClasses = computed(() => this.bulletinStore.getSecondaryClasses(), ...ngDevMode ? [{ debugName: "secondaryClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  classData = computed(() => this.bulletinStore.getClassByName(this.selectedClass()), ...ngDevMode ? [{ debugName: "classData" }] : (
    /* istanbul ignore next */
    []
  ));
  students = computed(() => this.selectedClass() ? this.bulletinStore.getStudentsForClass(this.selectedClass()) : [], ...ngDevMode ? [{ debugName: "students" }] : (
    /* istanbul ignore next */
    []
  ));
  allSaved = computed(() => {
    const period = this.activePeriod();
    const list = this.students();
    return list.length > 0 && list.every((student) => !!this.bulletinStore.getBulletin(student.id, period));
  }, ...ngDevMode ? [{ debugName: "allSaved" }] : (
    /* istanbul ignore next */
    []
  ));
  canProceed = computed(() => this.allSaved(), ...ngDevMode ? [{ debugName: "canProceed" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor(bulletinStore, collabStore, route, router) {
    this.bulletinStore = bulletinStore;
    this.collabStore = collabStore;
    this.route = route;
    this.router = router;
    const className = this.route.snapshot.queryParamMap.get("classe");
    const period = this.route.snapshot.queryParamMap.get("periode");
    if (className)
      this.selectedClass.set(className);
    if (period)
      this.selectedPeriod.set(period);
    this.syncPeriod();
  }
  get schoolName() {
    return this.collabStore.company()?.name ?? "\xC9tablissement scolaire";
  }
  activePeriod() {
    const periods = this.classData()?.niveau ? this.bulletinStore.getPeriods(this.classData().niveau) : [];
    const current = this.selectedPeriod();
    if (current && periods.includes(current))
      return current;
    return periods[0] ?? "1er trimestre";
  }
  selectStudent(student) {
    this.selectedStudentId.set(student.id);
    const period = this.activePeriod();
    const existing = this.bulletinStore.getBulletin(student.id, period);
    this.draft.set(existing ? this.clone(existing) : this.bulletinStore.createEmptyBulletin(student, period));
    this.showDrawer.set(true);
  }
  saveBulletin() {
    const current = this.draft();
    if (!current)
      return;
    const evaluated = this.bulletinStore.evaluateBulletin(current);
    this.bulletinStore.saveBulletin(evaluated);
    this.draft.set(this.clone(evaluated));
  }
  closeDrawer() {
    this.showDrawer.set(false);
    this.draft.set(null);
  }
  exportPdf() {
    const current = this.draft();
    if (!current)
      return;
    this.bulletinStore.exportBulletinPdf(this.bulletinStore.evaluateBulletin(current), this.schoolName);
  }
  studentSaved(studentId) {
    return !!this.bulletinStore.getBulletin(studentId, this.activePeriod());
  }
  next() {
    this.router.navigate(["/notes"]);
  }
  goBack() {
    this.router.navigate(["/notes"]);
  }
  updateSubject(index, key, value) {
    const current = this.draft();
    if (!current)
      return;
    const subject = current.subjects[index];
    if (key === "matiere" || key === "appreciation") {
      subject[key] = value;
    } else {
      subject[key] = Number(value) || 0;
    }
    current.subjects[index] = __spreadProps(__spreadValues({}, subject), { appreciation: this.subjectAppreciation(subject) });
    this.draft.set(__spreadValues({}, current));
  }
  subjectAverage(subject) {
    return (Number(subject.devoir1) + Number(subject.devoir2) + Number(subject.controle) + Number(subject.examen) * 2) / 5;
  }
  subjectAppreciation(subject) {
    const average = this.subjectAverage(subject);
    if (average >= 16)
      return "Excellent";
    if (average >= 14)
      return "Tr\xE8s bien";
    if (average >= 12)
      return "Bien";
    if (average >= 10)
      return "Passable";
    return "Insuffisant";
  }
  displaySubjectAverage(subject) {
    return this.subjectAverage(subject);
  }
  setAverage(value) {
    const current = this.draft();
    if (!current)
      return;
    current.moyenneGenerale = Number(value) || 0;
    this.draft.set(__spreadValues({}, current));
  }
  syncPeriod() {
    const periods = this.classData()?.niveau ? this.bulletinStore.getPeriods(this.classData().niveau) : [];
    if (!this.selectedPeriod() && periods.length)
      this.selectedPeriod.set(periods[0]);
  }
  clone(record) {
    return JSON.parse(JSON.stringify(record));
  }
  static \u0275fac = function NotesBulletinComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotesBulletinComponent)(\u0275\u0275directiveInject(EducationBulletinsService), \u0275\u0275directiveInject(CollabStoreService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotesBulletinComponent, selectors: [["app-notes-bulletin"]], decls: 36, vars: 8, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--primary"], [1, "card"], [1, "card__head"], [1, "card__title"], [1, "card__link"], [1, "fields-row"], [1, "field"], [1, "field__label"], ["readonly", "", 1, "field__input", 3, "value"], [1, "student-grid"], ["type", "button", 1, "student-card", 3, "student-card--saved", "student-card--selected"], [1, "modal-overlay"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["type", "button", 1, "student-card", 3, "click"], [1, "student-card__name"], [1, "student-card__meta"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal--wide", 3, "click"], [1, "modal__head"], [1, "modal__title"], ["type", "button", 1, "modal__close", 3, "click"], [1, "modal__body"], ["type", "number", "min", "0", "max", "20", "step", "0.01", 1, "field__input", 3, "input", "value"], [1, "subject-table", "subject-table--scroll"], [1, "subject-table__head"], [1, "subject-table__row"], [1, "modal__foot"], ["type", "button", 1, "btn", "btn--outline", 3, "click"], ["type", "number", "min", "0", "max", "20", 1, "field__input", "field__input--compact", 3, "input", "value"], ["type", "number", "min", "1", 1, "field__input", "field__input--compact", 3, "input", "value"], [1, "note"], [1, "text-muted"]], template: function NotesBulletinComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Bulletin");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275domListener("click", function NotesBulletinComponent_Template_button_click_8_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(9, "Retour");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(10, NotesBulletinComponent_Conditional_10_Template, 2, 0, "button", 6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 7)(12, "div", 8)(13, "span", 9);
      \u0275\u0275text(14, "Classe et p\xE9riode");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "span", 10);
      \u0275\u0275text(16);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(17, "div", 11)(18, "div", 12)(19, "label", 13);
      \u0275\u0275text(20, "Classe");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(21, "input", 14);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "div", 12)(23, "label", 13);
      \u0275\u0275text(24, "P\xE9riode");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(25, "input", 14);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(26, "div", 7)(27, "div", 8)(28, "span", 9);
      \u0275\u0275text(29, "\xC9l\xE8ves");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "span", 10);
      \u0275\u0275text(31);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(32, "div", 15);
      \u0275\u0275repeaterCreate(33, NotesBulletinComponent_For_34_Template, 5, 7, "button", 16, _forTrack0);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(35, NotesBulletinComponent_Conditional_35_Template, 62, 7, "div", 17);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.students().length, " \xE9l\xE8ve(s) dans ", ctx.selectedClass() || "la classe choisie");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.canProceed() ? 10 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.activePeriod());
      \u0275\u0275advance(5);
      \u0275\u0275domProperty("value", ctx.selectedClass());
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("value", ctx.activePeriod());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.students().length, " carte(s)");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.students());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.draft() ? 35 : -1);
    }
  }, dependencies: [CommonModule, DecimalPipe], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff8ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  color: #555;\n}\n.student-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 12px;\n}\n.student-card[_ngcontent-%COMP%] {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 14px;\n  background: #fff;\n  padding: 14px;\n  text-align: left;\n  cursor: pointer;\n  min-height: 88px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.student-card--saved[_ngcontent-%COMP%] {\n  background: #fff3e5;\n  border-color: #f39c12;\n}\n.student-card--selected[_ngcontent-%COMP%] {\n  border-color: #1a3a5c;\n}\n.student-card__name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.student-card__meta[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 11px;\n  color: #8a9ab0;\n}\n.subject-table[_ngcontent-%COMP%] {\n  border: 1px solid #e3e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n}\n.subject-table--scroll[_ngcontent-%COMP%] {\n  max-height: 420px;\n  overflow-y: auto;\n}\n.subject-table__head[_ngcontent-%COMP%], \n.subject-table__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(120px, 1.3fr) repeat(4, minmax(72px, 0.8fr)) 70px 72px minmax(120px, 1fr);\n  gap: 8px;\n  align-items: center;\n  padding: 10px 12px;\n}\n.subject-table__head[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: #f8f9fb;\n  z-index: 1;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.subject-table__row[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f2f7;\n  font-size: 12px;\n  background: #fff;\n}\n.subject-table__row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a3a5c;\n}\n.field__input--compact[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 8px 10px;\n}\n/*# sourceMappingURL=notes-bulletin.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotesBulletinComponent, [{
    type: Component,
    args: [{ selector: "app-notes-bulletin", standalone: true, imports: [CommonModule], template: `<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title">Bulletin</h1>
      <p class="page__sub">{{ students().length }} \xE9l\xE8ve(s) dans {{ selectedClass() || 'la classe choisie' }}</p>
    </div>
    <div class="page__actions">
      <button class="btn btn--ghost" type="button" (click)="goBack()">Retour</button>
      @if (canProceed()) {
        <button class="btn btn--primary" type="button" (click)="next()">Suivant</button>
      }
    </div>
  </div>

  <div class="card">
    <div class="card__head">
      <span class="card__title">Classe et p\xE9riode</span>
      <span class="card__link">{{ activePeriod() }}</span>
    </div>
    <div class="fields-row">
      <div class="field">
        <label class="field__label">Classe</label>
        <input class="field__input" [value]="selectedClass()" readonly />
      </div>
      <div class="field">
        <label class="field__label">P\xE9riode</label>
        <input class="field__input" [value]="activePeriod()" readonly />
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card__head">
      <span class="card__title">\xC9l\xE8ves</span>
      <span class="card__link">{{ students().length }} carte(s)</span>
    </div>
    <div class="student-grid">
      @for (student of students(); track student.id) {
        <button
          type="button"
          class="student-card"
          [class.student-card--saved]="studentSaved(student.id)"
          [class.student-card--selected]="selectedStudentId() === student.id"
          (click)="selectStudent(student)">
          <div class="student-card__name">{{ student.nom }} {{ student.prenom }}</div>
          <div class="student-card__meta">{{ student.matricule }}</div>
        </button>
      }
    </div>
  </div>

  @if (draft()) {
    <div class="modal-overlay" (click)="closeDrawer()">
      <div class="modal modal--wide" (click)="$event.stopPropagation()">
        <div class="modal__head">
          <span class="modal__title">{{ bulletinStore.getBulletin(draft()!.studentId, draft()!.periode) ? 'Modifier le bulletin' : 'Nouveau bulletin' }}</span>
          <button class="modal__close" type="button" (click)="closeDrawer()">\xD7</button>
        </div>

        <div class="modal__body">
          <div class="fields-row">
            <div class="field">
              <label class="field__label">Matricule</label>
              <input class="field__input" [value]="draft()!.matricule" readonly />
            </div>
            <div class="field">
              <label class="field__label">Moyenne de l'\xE9l\xE8ve</label>
              <input class="field__input" type="number" min="0" max="20" step="0.01" [value]="draft()!.moyenneGenerale" (input)="setAverage($any($event.target).value)" />
            </div>
          </div>

          <div class="fields-row">
            <div class="field">
              <label class="field__label">Nom</label>
              <input class="field__input" [value]="draft()!.studentNom" readonly />
            </div>
            <div class="field">
              <label class="field__label">Pr\xE9nom</label>
              <input class="field__input" [value]="draft()!.studentPrenom" readonly />
            </div>
          </div>

          <div class="fields-row">
            <div class="field">
              <label class="field__label">Classe</label>
              <input class="field__input" [value]="draft()!.classe" readonly />
            </div>
            <div class="field">
              <label class="field__label">Ann\xE9e scolaire</label>
              <input class="field__input" [value]="draft()!.schoolYear" readonly />
            </div>
          </div>

          <div class="subject-table subject-table--scroll">
            <div class="subject-table__head">
              <span>Mati\xE8re</span>
              <span>Devoir 1</span>
              <span>Devoir 2</span>
              <span>Contr\xF4le</span>
              <span>Examen</span>
              <span>Coef.</span>
              <span>Moy.</span>
              <span>Appr\xE9ciation</span>
            </div>
            @for (subject of draft()!.subjects; let i = $index; track subject.matiere) {
              <div class="subject-table__row">
                <strong>{{ subject.matiere }}</strong>
                <input class="field__input field__input--compact" type="number" min="0" max="20" [value]="subject.devoir1" (input)="updateSubject(i, 'devoir1', $any($event.target).value)" />
                <input class="field__input field__input--compact" type="number" min="0" max="20" [value]="subject.devoir2" (input)="updateSubject(i, 'devoir2', $any($event.target).value)" />
                <input class="field__input field__input--compact" type="number" min="0" max="20" [value]="subject.controle" (input)="updateSubject(i, 'controle', $any($event.target).value)" />
                <input class="field__input field__input--compact" type="number" min="0" max="20" [value]="subject.examen" (input)="updateSubject(i, 'examen', $any($event.target).value)" />
                <input class="field__input field__input--compact" type="number" min="1" [value]="subject.coefficient" (input)="updateSubject(i, 'coefficient', $any($event.target).value)" />
                <span class="note" [class]="displaySubjectAverage(subject) >= 16 ? 'note note--A' : displaySubjectAverage(subject) >= 12 ? 'note note--B' : displaySubjectAverage(subject) >= 10 ? 'note note--C' : 'note note--F'">{{ displaySubjectAverage(subject) | number:'1.1-1' }}</span>
                <span class="text-muted">{{ subject.appreciation || '\u2014' }}</span>
              </div>
            }
          </div>
        </div>

        <div class="modal__foot">
          <button class="btn btn--ghost" type="button" (click)="closeDrawer()">Fermer</button>
          <button class="btn btn--outline" type="button" (click)="exportPdf()">PDF</button>
          <button class="btn btn--primary" type="button" (click)="saveBulletin(); closeDrawer()">Enregistrer</button>
        </div>
      </div>
    </div>
  }
</div>
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-education/src/app/pages/notes/notes-bulletin.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff8ee;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F {\n  background: #e8e8e8;\n  color: #555;\n}\n.student-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 12px;\n}\n.student-card {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 14px;\n  background: #fff;\n  padding: 14px;\n  text-align: left;\n  cursor: pointer;\n  min-height: 88px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.student-card--saved {\n  background: #fff3e5;\n  border-color: #f39c12;\n}\n.student-card--selected {\n  border-color: #1a3a5c;\n}\n.student-card__name {\n  font-size: 14px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.student-card__meta {\n  margin-top: 6px;\n  font-size: 11px;\n  color: #8a9ab0;\n}\n.subject-table {\n  border: 1px solid #e3e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n}\n.subject-table--scroll {\n  max-height: 420px;\n  overflow-y: auto;\n}\n.subject-table__head,\n.subject-table__row {\n  display: grid;\n  grid-template-columns: minmax(120px, 1.3fr) repeat(4, minmax(72px, 0.8fr)) 70px 72px minmax(120px, 1fr);\n  gap: 8px;\n  align-items: center;\n  padding: 10px 12px;\n}\n.subject-table__head {\n  position: sticky;\n  top: 0;\n  background: #f8f9fb;\n  z-index: 1;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.subject-table__row {\n  border-top: 1px solid #f0f2f7;\n  font-size: 12px;\n  background: #fff;\n}\n.subject-table__row strong {\n  color: #1a3a5c;\n}\n.field__input--compact {\n  min-width: 0;\n  padding: 8px 10px;\n}\n/*# sourceMappingURL=notes-bulletin.component.css.map */\n'] }]
  }], () => [{ type: EducationBulletinsService }, { type: CollabStoreService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotesBulletinComponent, { className: "NotesBulletinComponent", filePath: "app/pages/notes/notes-bulletin.component.ts", lineNumber: 20 });
})();
export {
  NotesBulletinComponent
};
//# sourceMappingURL=chunk-KMYH3B77.js.map
