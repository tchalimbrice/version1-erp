import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ZNMYQNDK.js";
import {
  CommonModule
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WTFQPXVN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-46DXP6YY.js";

// projects/gestion-education/src/app/pages/absences/absences.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AbsencesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function AbsencesComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddAbsence.set(true));
    });
    \u0275\u0275text(1, "+ Signaler une absence");
    \u0275\u0275elementEnd();
  }
}
function AbsencesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function AbsencesComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddEtat.set(true));
    });
    \u0275\u0275text(1, "+ Saisir l'\xE9tat du jour");
    \u0275\u0275elementEnd();
  }
}
function AbsencesComponent_Conditional_15_For_47_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function AbsencesComponent_Conditional_15_For_47_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const a_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.justifier(a_r6));
    });
    \u0275\u0275text(1, "Justifier");
    \u0275\u0275elementEnd();
  }
}
function AbsencesComponent_Conditional_15_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275conditionalCreate(15, AbsencesComponent_Conditional_15_For_47_Conditional_15_Template, 2, 0, "button", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.eleve);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.classe);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge--red", a_r6.statut === "absent")("badge--yellow", a_r6.statut === "en retard")("badge--green", a_r6.statut === "justifi\xE9");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r6.statut, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.motif || "\u2013");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.justification || "\u2013");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r6.statut === "absent" ? 15 : -1);
  }
}
function AbsencesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275element(2, "div", 12);
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275text(7, "Absents aujourd'hui");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275element(9, "div", 17);
    \u0275\u0275elementStart(10, "div", 13)(11, "div", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15);
    \u0275\u0275text(14, "En retard");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 18);
    \u0275\u0275element(16, "div", 19);
    \u0275\u0275elementStart(17, "div", 13)(18, "div", 14);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 15);
    \u0275\u0275text(21, "Absences justifi\xE9es");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 20)(23, "div", 21)(24, "span", 22);
    \u0275\u0275text(25, "Registre des absences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 23)(27, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function AbsencesComponent_Conditional_15_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterDate, $event) || (ctx_r1.filterDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AbsencesComponent_Conditional_15_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterClasse, $event) || (ctx_r1.filterClasse = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "table", 26)(30, "thead")(31, "tr")(32, "th");
    \u0275\u0275text(33, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "\xC9l\xE8ve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Classe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "Motif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43, "Justification");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "tbody");
    \u0275\u0275repeaterCreate(46, AbsencesComponent_Conditional_15_For_47_Template, 16, 13, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.absentsJour());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.retardsJour());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.justifiesJour());
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterDate);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterClasse);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.filteredAbsences());
  }
}
function AbsencesComponent_Conditional_16_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.matiere);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.date);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge--green", p_r7.statut === "pr\xE9sent")("badge--red", p_r7.statut === "absent")("badge--yellow", p_r7.statut === "en permission");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r7.statut, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.motif || "\u2013");
  }
}
function AbsencesComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 18);
    \u0275\u0275element(2, "div", 19);
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275text(7, "Pr\xE9sents");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 11);
    \u0275\u0275element(9, "div", 12);
    \u0275\u0275elementStart(10, "div", 13)(11, "div", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15);
    \u0275\u0275text(14, "Absents");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 16);
    \u0275\u0275element(16, "div", 17);
    \u0275\u0275elementStart(17, "div", 13)(18, "div", 14);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 15);
    \u0275\u0275text(21, "En permission");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 20)(23, "div", 21)(24, "span", 22);
    \u0275\u0275text(25, "\xC9tat de pr\xE9sence \u2014 Enseignants");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "table", 26)(27, "thead")(28, "tr")(29, "th");
    \u0275\u0275text(30, "Enseignant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Mati\xE8re");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Motif / Remarque");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "tbody");
    \u0275\u0275repeaterCreate(40, AbsencesComponent_Conditional_16_For_41_Template, 12, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profsPresents());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.profsAbsents());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.profsPermission());
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.etatsProfs());
  }
}
function AbsencesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function AbsencesComponent_Conditional_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddAbsence.set(false));
    });
    \u0275\u0275elementStart(1, "div", 33);
    \u0275\u0275listener("click", function AbsencesComponent_Conditional_17_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 34)(3, "span", 35);
    \u0275\u0275text(4, "Signaler une absence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 36);
    \u0275\u0275listener("click", function AbsencesComponent_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddAbsence.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 37)(8, "div", 38)(9, "div", 39)(10, "label", 40);
    \u0275\u0275text(11, "Nom de l'\xE9l\xE8ve *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function AbsencesComponent_Conditional_17_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAbs.eleve, $event) || (ctx_r1.newAbs.eleve = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 39)(14, "label", 40);
    \u0275\u0275text(15, "Classe *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function AbsencesComponent_Conditional_17_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAbs.classe, $event) || (ctx_r1.newAbs.classe = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 38)(18, "div", 39)(19, "label", 40);
    \u0275\u0275text(20, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 43);
    \u0275\u0275twoWayListener("ngModelChange", function AbsencesComponent_Conditional_17_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAbs.statut, $event) || (ctx_r1.newAbs.statut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(22, "option", 44);
    \u0275\u0275text(23, "Absent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 45);
    \u0275\u0275text(25, "En retard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 46);
    \u0275\u0275text(27, "Justifi\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 39)(29, "label", 40);
    \u0275\u0275text(30, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function AbsencesComponent_Conditional_17_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAbs.date, $event) || (ctx_r1.newAbs.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 39)(33, "label", 40);
    \u0275\u0275text(34, "Motif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function AbsencesComponent_Conditional_17_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAbs.motif, $event) || (ctx_r1.newAbs.motif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 39)(37, "label", 40);
    \u0275\u0275text(38, "Justification (si applicable)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function AbsencesComponent_Conditional_17_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAbs.justification, $event) || (ctx_r1.newAbs.justification = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 50)(41, "button", 51);
    \u0275\u0275listener("click", function AbsencesComponent_Conditional_17_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddAbsence.set(false));
    });
    \u0275\u0275text(42, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 9);
    \u0275\u0275listener("click", function AbsencesComponent_Conditional_17_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveAbsence());
    });
    \u0275\u0275text(44, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAbs.eleve);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAbs.classe);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAbs.statut);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAbs.date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAbs.motif);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAbs.justification);
  }
}
function AbsencesComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function AbsencesComponent_Conditional_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddEtat.set(false));
    });
    \u0275\u0275elementStart(1, "div", 33);
    \u0275\u0275listener("click", function AbsencesComponent_Conditional_18_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 34)(3, "span", 35);
    \u0275\u0275text(4, "Saisir l'\xE9tat d'un enseignant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 36);
    \u0275\u0275listener("click", function AbsencesComponent_Conditional_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddEtat.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 37)(8, "div", 38)(9, "div", 39)(10, "label", 40);
    \u0275\u0275text(11, "Nom de l'enseignant *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function AbsencesComponent_Conditional_18_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newEtat.nom, $event) || (ctx_r1.newEtat.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 39)(14, "label", 40);
    \u0275\u0275text(15, "Mati\xE8re");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function AbsencesComponent_Conditional_18_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newEtat.matiere, $event) || (ctx_r1.newEtat.matiere = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 38)(18, "div", 39)(19, "label", 40);
    \u0275\u0275text(20, "Statut *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 43);
    \u0275\u0275twoWayListener("ngModelChange", function AbsencesComponent_Conditional_18_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newEtat.statut, $event) || (ctx_r1.newEtat.statut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(22, "option", 53);
    \u0275\u0275text(23, "Pr\xE9sent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 44);
    \u0275\u0275text(25, "Absent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 54);
    \u0275\u0275text(27, "En permission");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 39)(29, "label", 40);
    \u0275\u0275text(30, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function AbsencesComponent_Conditional_18_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newEtat.date, $event) || (ctx_r1.newEtat.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 39)(33, "label", 40);
    \u0275\u0275text(34, "Motif / Remarque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function AbsencesComponent_Conditional_18_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newEtat.motif, $event) || (ctx_r1.newEtat.motif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 50)(37, "button", 51);
    \u0275\u0275listener("click", function AbsencesComponent_Conditional_18_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddEtat.set(false));
    });
    \u0275\u0275text(38, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 9);
    \u0275\u0275listener("click", function AbsencesComponent_Conditional_18_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveEtat());
    });
    \u0275\u0275text(40, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newEtat.nom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newEtat.matiere);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newEtat.statut);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newEtat.date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newEtat.motif);
  }
}
var AbsencesComponent = class _AbsencesComponent {
  store;
  constructor(store) {
    this.store = store;
  }
  tab = signal("eleves", ...ngDevMode ? [{ debugName: "tab" }] : (
    /* istanbul ignore next */
    []
  ));
  showAddAbsence = signal(false, ...ngDevMode ? [{ debugName: "showAddAbsence" }] : (
    /* istanbul ignore next */
    []
  ));
  showAddEtat = signal(false, ...ngDevMode ? [{ debugName: "showAddEtat" }] : (
    /* istanbul ignore next */
    []
  ));
  filterDate = "";
  filterClasse = "";
  absences = signal([
    { id: "1", date: "23/04/2026", eleve: "KONAN Marie", classe: "3\xE8me A", statut: "absent", motif: "Maladie", justification: "" },
    { id: "2", date: "23/04/2026", eleve: "KOFFI Jean-Paul", classe: "5\xE8me B", statut: "en retard", motif: "Transport", justification: "" },
    { id: "3", date: "22/04/2026", eleve: "BAMBA Fatoumata", classe: "Tle D", statut: "justifi\xE9", motif: "Deuil", justification: "Acte de d\xE9c\xE8s fourni" },
    { id: "4", date: "23/04/2026", eleve: "DIALLO Ibrahima", classe: "4\xE8me C", statut: "absent", motif: "", justification: "" }
  ], ...ngDevMode ? [{ debugName: "absences" }] : (
    /* istanbul ignore next */
    []
  ));
  etatsProfs = signal([
    { id: "1", nom: "M. KOUASSI Roger", matiere: "Math\xE9matiques", statut: "pr\xE9sent", motif: "", date: "23/04/2026" },
    { id: "2", nom: "Mme YAO Christine", matiere: "Fran\xE7ais", statut: "absent", motif: "Maladie", date: "23/04/2026" },
    { id: "3", nom: "M. TOURE Seydou", matiere: "Histoire-G\xE9o", statut: "en permission", motif: "Conf\xE9rence p\xE9dagogique", date: "23/04/2026" },
    { id: "4", nom: "M. COULIBALY Pierre", matiere: "Sciences Nat.", statut: "pr\xE9sent", motif: "", date: "23/04/2026" }
  ], ...ngDevMode ? [{ debugName: "etatsProfs" }] : (
    /* istanbul ignore next */
    []
  ));
  newAbs = { date: (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR"), statut: "absent", eleve: "", classe: "", motif: "", justification: "" };
  newEtat = { date: (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR"), statut: "pr\xE9sent", nom: "", matiere: "", motif: "" };
  filteredAbsences = computed(() => {
    return this.absences().filter((a) => {
      if (this.filterClasse && !a.classe.toLowerCase().includes(this.filterClasse.toLowerCase()))
        return false;
      return true;
    });
  }, ...ngDevMode ? [{ debugName: "filteredAbsences" }] : (
    /* istanbul ignore next */
    []
  ));
  absentsJour = computed(() => this.absences().filter((a) => a.statut === "absent").length, ...ngDevMode ? [{ debugName: "absentsJour" }] : (
    /* istanbul ignore next */
    []
  ));
  retardsJour = computed(() => this.absences().filter((a) => a.statut === "en retard").length, ...ngDevMode ? [{ debugName: "retardsJour" }] : (
    /* istanbul ignore next */
    []
  ));
  justifiesJour = computed(() => this.absences().filter((a) => a.statut === "justifi\xE9").length, ...ngDevMode ? [{ debugName: "justifiesJour" }] : (
    /* istanbul ignore next */
    []
  ));
  profsPresents = computed(() => this.etatsProfs().filter((p) => p.statut === "pr\xE9sent").length, ...ngDevMode ? [{ debugName: "profsPresents" }] : (
    /* istanbul ignore next */
    []
  ));
  profsAbsents = computed(() => this.etatsProfs().filter((p) => p.statut === "absent").length, ...ngDevMode ? [{ debugName: "profsAbsents" }] : (
    /* istanbul ignore next */
    []
  ));
  profsPermission = computed(() => this.etatsProfs().filter((p) => p.statut === "en permission").length, ...ngDevMode ? [{ debugName: "profsPermission" }] : (
    /* istanbul ignore next */
    []
  ));
  justifier(a) {
    this.absences.update((list) => list.map((x) => x.id === a.id ? __spreadProps(__spreadValues({}, x), { statut: "justifi\xE9" }) : x));
  }
  saveAbsence() {
    if (!this.newAbs.eleve || !this.newAbs.classe)
      return;
    this.absences.update((list) => [__spreadProps(__spreadValues({}, this.newAbs), { id: Date.now().toString() }), ...list]);
    this.newAbs = { date: (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR"), statut: "absent", eleve: "", classe: "", motif: "", justification: "" };
    this.showAddAbsence.set(false);
  }
  saveEtat() {
    if (!this.newEtat.nom)
      return;
    this.etatsProfs.update((list) => [__spreadProps(__spreadValues({}, this.newEtat), { id: Date.now().toString() }), ...list]);
    this.newEtat = { date: (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR"), statut: "pr\xE9sent", nom: "", matiere: "", motif: "" };
    this.showAddEtat.set(false);
  }
  static \u0275fac = function AbsencesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbsencesComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AbsencesComponent, selectors: [["app-absences"]], decls: 19, vars: 10, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary"], [1, "tabs"], [1, "tab", 3, "click"], [1, "modal-overlay"], [1, "btn", "btn--primary", 3, "click"], [1, "kpi-grid"], [1, "kpi-card", 2, "border-left-color", "#c0392b"], [1, "kpi-card__icon", 2, "background", "#fdecea"], [1, "kpi-card__body"], [1, "kpi-card__value"], [1, "kpi-card__label"], [1, "kpi-card", 2, "border-left-color", "#f39c12"], [1, "kpi-card__icon", 2, "background", "#fef9e7"], [1, "kpi-card", 2, "border-left-color", "#27ae60"], [1, "kpi-card__icon", 2, "background", "#d5f5e3"], [1, "card"], [1, "card__head"], [1, "card__title"], [2, "display", "flex", "gap", "10px", "align-items", "center"], ["type", "date", 1, "field__input", 2, "padding", "6px 10px", "font-size", "13px", 3, "ngModelChange", "ngModel"], ["placeholder", "Classe\u2026", 1, "field__input", 2, "padding", "6px 10px", "font-size", "13px", "width", "120px", 3, "ngModelChange", "ngModel"], [1, "table"], [1, "text-muted"], [1, "fw-med"], [1, "badge"], [1, "btn", "btn--outline", 2, "padding", "3px 8px", "font-size", "11px"], [1, "btn", "btn--outline", 2, "padding", "3px 8px", "font-size", "11px", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], ["placeholder", "Nom Pr\xE9nom", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "Ex: 3\xE8me A", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field__select", 3, "ngModelChange", "ngModel"], ["value", "absent"], ["value", "en retard"], ["value", "justifi\xE9"], ["type", "date", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "Ex: Maladie, Voyage\u2026", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "Ex: Certificat m\xE9dical fourni", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "modal__foot"], [1, "btn", "btn--outline", 3, "click"], ["placeholder", "Ex: Math\xE9matiques", 1, "field__input", 3, "ngModelChange", "ngModel"], ["value", "pr\xE9sent"], ["value", "en permission"], ["placeholder", "Pr\xE9cisez si absent ou en permission\u2026", 1, "field__input", 3, "ngModelChange", "ngModel"]], template: function AbsencesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, " Absences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Gestion des absences \xE9l\xE8ves et \xE9tat de pr\xE9sence du corps enseignant");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275conditionalCreate(8, AbsencesComponent_Conditional_8_Template, 2, 0, "button", 5);
      \u0275\u0275conditionalCreate(9, AbsencesComponent_Conditional_9_Template, 2, 0, "button", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
      \u0275\u0275listener("click", function AbsencesComponent_Template_button_click_11_listener() {
        return ctx.tab.set("eleves");
      });
      \u0275\u0275text(12, " \xC9l\xE8ves");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function AbsencesComponent_Template_button_click_13_listener() {
        return ctx.tab.set("profs");
      });
      \u0275\u0275text(14, " Enseignants");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(15, AbsencesComponent_Conditional_15_Template, 48, 5);
      \u0275\u0275conditionalCreate(16, AbsencesComponent_Conditional_16_Template, 42, 3);
      \u0275\u0275conditionalCreate(17, AbsencesComponent_Conditional_17_Template, 45, 6, "div", 8);
      \u0275\u0275conditionalCreate(18, AbsencesComponent_Conditional_18_Template, 41, 5, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.tab() === "eleves" ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tab() === "profs" ? 9 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.tab() === "eleves");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.tab() === "profs");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tab() === "eleves" ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tab() === "profs" ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAddAbsence() ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAddEtat() ? 18 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff8ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  color: #555;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  background: #f0f4f8;\n  border-radius: 12px;\n  padding: 4px;\n  margin-bottom: 24px;\n  width: fit-content;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border: none;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  background: transparent;\n  color: #7f8c8d;\n  transition: all 0.15s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1a3a5c;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n/*# sourceMappingURL=absences.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbsencesComponent, [{
    type: Component,
    args: [{ selector: "app-absences", standalone: true, imports: [CommonModule, FormsModule], template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title"> Absences</h1>
      <p class="page__sub">Gestion des absences \xE9l\xE8ves et \xE9tat de pr\xE9sence du corps enseignant</p>
    </div>
    <div class="page__actions">
      @if (tab() === 'eleves') {
        <button class="btn btn--primary" (click)="showAddAbsence.set(true)">+ Signaler une absence</button>
      }
      @if (tab() === 'profs') {
        <button class="btn btn--primary" (click)="showAddEtat.set(true)">+ Saisir l'\xE9tat du jour</button>
      }
    </div>
  </div>

  <div class="tabs">
    <button class="tab" [class.active]="tab()==='eleves'" (click)="tab.set('eleves')"> \xC9l\xE8ves</button>
    <button class="tab" [class.active]="tab()==='profs'"  (click)="tab.set('profs')"> Enseignants</button>
  </div>

  <!-- \u2500\u2500 Absences \xE9l\xE8ves \u2500\u2500 -->
  @if (tab() === 'eleves') {
    <div class="kpi-grid">
      <div class="kpi-card" style="border-left-color:#c0392b">
        <div class="kpi-card__icon" style="background:#fdecea"></div>
        <div class="kpi-card__body">
          <div class="kpi-card__value">{{ absentsJour() }}</div>
          <div class="kpi-card__label">Absents aujourd'hui</div>
        </div>
      </div>
      <div class="kpi-card" style="border-left-color:#f39c12">
        <div class="kpi-card__icon" style="background:#fef9e7"></div>
        <div class="kpi-card__body">
          <div class="kpi-card__value">{{ retardsJour() }}</div>
          <div class="kpi-card__label">En retard</div>
        </div>
      </div>
      <div class="kpi-card" style="border-left-color:#27ae60">
        <div class="kpi-card__icon" style="background:#d5f5e3"></div>
        <div class="kpi-card__body">
          <div class="kpi-card__value">{{ justifiesJour() }}</div>
          <div class="kpi-card__label">Absences justifi\xE9es</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card__head">
        <span class="card__title">Registre des absences</span>
        <div style="display:flex;gap:10px;align-items:center;">
          <input type="date" [(ngModel)]="filterDate" class="field__input" style="padding:6px 10px;font-size:13px;" />
          <input [(ngModel)]="filterClasse" placeholder="Classe\u2026" class="field__input" style="padding:6px 10px;font-size:13px;width:120px;" />
        </div>
      </div>
      <table class="table">
        <thead><tr><th>Date</th><th>\xC9l\xE8ve</th><th>Classe</th><th>Statut</th><th>Motif</th><th>Justification</th><th></th></tr></thead>
        <tbody>
          @for (a of filteredAbsences(); track a.id) {
            <tr>
              <td class="text-muted">{{ a.date }}</td>
              <td class="fw-med">{{ a.eleve }}</td>
              <td>{{ a.classe }}</td>
              <td>
                <span class="badge"
                  [class.badge--red]="a.statut==='absent'"
                  [class.badge--yellow]="a.statut==='en retard'"
                  [class.badge--green]="a.statut==='justifi\xE9'">
                  {{ a.statut }}
                </span>
              </td>
              <td>{{ a.motif || '\u2013' }}</td>
              <td>{{ a.justification || '\u2013' }}</td>
              <td>
                @if (a.statut === 'absent') {
                  <button class="btn btn--outline" style="padding:3px 8px;font-size:11px;" (click)="justifier(a)">Justifier</button>
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  <!-- \u2500\u2500 \xC9tat enseignants \u2500\u2500 -->
  @if (tab() === 'profs') {
    <div class="kpi-grid">
      <div class="kpi-card" style="border-left-color:#27ae60">
        <div class="kpi-card__icon" style="background:#d5f5e3"></div>
        <div class="kpi-card__body">
          <div class="kpi-card__value">{{ profsPresents() }}</div>
          <div class="kpi-card__label">Pr\xE9sents</div>
        </div>
      </div>
      <div class="kpi-card" style="border-left-color:#c0392b">
        <div class="kpi-card__icon" style="background:#fdecea"></div>
        <div class="kpi-card__body">
          <div class="kpi-card__value">{{ profsAbsents() }}</div>
          <div class="kpi-card__label">Absents</div>
        </div>
      </div>
      <div class="kpi-card" style="border-left-color:#f39c12">
        <div class="kpi-card__icon" style="background:#fef9e7"></div>
        <div class="kpi-card__body">
          <div class="kpi-card__value">{{ profsPermission() }}</div>
          <div class="kpi-card__label">En permission</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card__head"><span class="card__title">\xC9tat de pr\xE9sence \u2014 Enseignants</span></div>
      <table class="table">
        <thead><tr><th>Enseignant</th><th>Mati\xE8re</th><th>Date</th><th>Statut</th><th>Motif / Remarque</th></tr></thead>
        <tbody>
          @for (p of etatsProfs(); track p.id) {
            <tr>
              <td class="fw-med">{{ p.nom }}</td>
              <td>{{ p.matiere }}</td>
              <td class="text-muted">{{ p.date }}</td>
              <td>
                <span class="badge"
                  [class.badge--green]="p.statut==='pr\xE9sent'"
                  [class.badge--red]="p.statut==='absent'"
                  [class.badge--yellow]="p.statut==='en permission'">
                  {{ p.statut }}
                </span>
              </td>
              <td>{{ p.motif || '\u2013' }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  <!-- Modal : Absence \xE9l\xE8ve -->
  @if (showAddAbsence()) {
    <div class="modal-overlay" (click)="showAddAbsence.set(false)">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal__head">
          <span class="modal__title">Signaler une absence</span>
          <button class="modal__close" (click)="showAddAbsence.set(false)">\u2715</button>
        </div>
        <div class="modal__body">
          <div class="fields-row">
            <div class="field"><label class="field__label">Nom de l'\xE9l\xE8ve *</label><input class="field__input" [(ngModel)]="newAbs.eleve" placeholder="Nom Pr\xE9nom" /></div>
            <div class="field"><label class="field__label">Classe *</label><input class="field__input" [(ngModel)]="newAbs.classe" placeholder="Ex: 3\xE8me A" /></div>
          </div>
          <div class="fields-row">
            <div class="field">
              <label class="field__label">Statut</label>
              <select class="field__select" [(ngModel)]="newAbs.statut">
                <option value="absent">Absent</option>
                <option value="en retard">En retard</option>
                <option value="justifi\xE9">Justifi\xE9</option>
              </select>
            </div>
            <div class="field"><label class="field__label">Date</label><input class="field__input" type="date" [(ngModel)]="newAbs.date" /></div>
          </div>
          <div class="field"><label class="field__label">Motif</label><input class="field__input" [(ngModel)]="newAbs.motif" placeholder="Ex: Maladie, Voyage\u2026" /></div>
          <div class="field"><label class="field__label">Justification (si applicable)</label><input class="field__input" [(ngModel)]="newAbs.justification" placeholder="Ex: Certificat m\xE9dical fourni" /></div>
        </div>
        <div class="modal__foot">
          <button class="btn btn--outline" (click)="showAddAbsence.set(false)">Annuler</button>
          <button class="btn btn--primary" (click)="saveAbsence()">Enregistrer</button>
        </div>
      </div>
    </div>
  }

  <!-- Modal : \xC9tat enseignant -->
  @if (showAddEtat()) {
    <div class="modal-overlay" (click)="showAddEtat.set(false)">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal__head">
          <span class="modal__title">Saisir l'\xE9tat d'un enseignant</span>
          <button class="modal__close" (click)="showAddEtat.set(false)">\u2715</button>
        </div>
        <div class="modal__body">
          <div class="fields-row">
            <div class="field"><label class="field__label">Nom de l'enseignant *</label><input class="field__input" [(ngModel)]="newEtat.nom" placeholder="Nom Pr\xE9nom" /></div>
            <div class="field"><label class="field__label">Mati\xE8re</label><input class="field__input" [(ngModel)]="newEtat.matiere" placeholder="Ex: Math\xE9matiques" /></div>
          </div>
          <div class="fields-row">
            <div class="field">
              <label class="field__label">Statut *</label>
              <select class="field__select" [(ngModel)]="newEtat.statut">
                <option value="pr\xE9sent">Pr\xE9sent</option>
                <option value="absent">Absent</option>
                <option value="en permission">En permission</option>
              </select>
            </div>
            <div class="field"><label class="field__label">Date</label><input class="field__input" type="date" [(ngModel)]="newEtat.date" /></div>
          </div>
          <div class="field"><label class="field__label">Motif / Remarque</label><input class="field__input" [(ngModel)]="newEtat.motif" placeholder="Pr\xE9cisez si absent ou en permission\u2026" /></div>
        </div>
        <div class="modal__foot">
          <button class="btn btn--outline" (click)="showAddEtat.set(false)">Annuler</button>
          <button class="btn btn--primary" (click)="saveEtat()">Enregistrer</button>
        </div>
      </div>
    </div>
  }
</div>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;d5310c9d2666fdc329244d178bb98ab521e075e2484d76e5358857a29d25021c;D:/MON BUREAU/PPE302/PPE-302/ppe-302-2/TEST/mon-workspace/projects/gestion-education/src/app/pages/absences/absences.component.ts */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff8ee;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F {\n  background: #e8e8e8;\n  color: #555;\n}\n.tabs {\n  display: flex;\n  gap: 4px;\n  background: #f0f4f8;\n  border-radius: 12px;\n  padding: 4px;\n  margin-bottom: 24px;\n  width: fit-content;\n}\n.tab {\n  padding: 9px 20px;\n  border: none;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  background: transparent;\n  color: #7f8c8d;\n  transition: all 0.15s;\n}\n.tab.active {\n  background: #fff;\n  color: #1a3a5c;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n/*# sourceMappingURL=absences.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AbsencesComponent, { className: "AbsencesComponent", filePath: "app/pages/absences/absences.component.ts", lineNumber: 235 });
})();
export {
  AbsencesComponent
};
//# sourceMappingURL=chunk-OVYDDEVZ.js.map
