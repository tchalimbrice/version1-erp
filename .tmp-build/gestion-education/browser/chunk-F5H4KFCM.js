import {
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-WTFQPXVN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-46DXP6YY.js";

// projects/gestion-education/src/app/pages/emploi-du-temps/emploi-du-temps.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function EmploiDuTempsComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275domProperty("value", c_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1);
  }
}
function EmploiDuTempsComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const e_r2 = ctx.$implicit;
    \u0275\u0275domProperty("value", e_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r2);
  }
}
function EmploiDuTempsComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const j_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(j_r3);
  }
}
function EmploiDuTempsComponent_For_27_For_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 17);
    \u0275\u0275domListener("click", function EmploiDuTempsComponent_For_27_For_3_For_2_Template_div_click_0_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.selected.set(c_r5));
    });
    \u0275\u0275domElementStart(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275styleProp("background", c_r5.couleur + "22")("border-left", "3px solid " + c_r5.couleur);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", c_r5.couleur);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.matiere);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.classe);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.enseignant);
  }
}
function EmploiDuTempsComponent_For_27_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, EmploiDuTempsComponent_For_27_For_3_For_2_Template, 7, 9, "div", 16, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const j_r7 = ctx.$implicit;
    const h_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.getSlot(j_r7, h_r8));
  }
}
function EmploiDuTempsComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(2, EmploiDuTempsComponent_For_27_For_3_Template, 3, 0, "div", 15, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const h_r8 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r8);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.jours);
  }
}
function EmploiDuTempsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 21);
    \u0275\u0275domListener("click", function EmploiDuTempsComponent_Conditional_28_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.selected.set(null));
    });
    \u0275\u0275domElementStart(1, "div", 22);
    \u0275\u0275domListener("click", function EmploiDuTempsComponent_Conditional_28_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "div", 23)(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 25);
    \u0275\u0275domListener("click", function EmploiDuTempsComponent_Conditional_28_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.selected.set(null));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 26)(7, "div", 27)(8, "div", 28)(9, "label", 29);
    \u0275\u0275text(10, "Jour");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(11, "input", 30);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 28)(13, "label", 29);
    \u0275\u0275text(14, "Horaire");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(15, "input", 30);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 27)(17, "div", 28)(18, "label", 29);
    \u0275\u0275text(19, "Enseignant");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(20, "input", 30);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "div", 28)(22, "label", 29);
    \u0275\u0275text(23, "Salle");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(24, "input", 30);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(25, "div", 31)(26, "button", 32);
    \u0275\u0275domListener("click", function EmploiDuTempsComponent_Conditional_28_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      ctx_r5.deleteCours(ctx_r5.selected().id);
      return \u0275\u0275resetView(ctx_r5.selected.set(null));
    });
    \u0275\u0275text(27, "Supprimer");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(28, "button", 33);
    \u0275\u0275domListener("click", function EmploiDuTempsComponent_Conditional_28_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.selected.set(null));
    });
    \u0275\u0275text(29, "Fermer");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r5.selected().matiere, " \u2014 ", ctx_r5.selected().classe);
    \u0275\u0275advance(7);
    \u0275\u0275domProperty("value", ctx_r5.selected().jour);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r5.selected().heureDebut + " \u2013 " + ctx_r5.selected().heureFin);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r5.selected().enseignant);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r5.selected().salle);
  }
}
function EmploiDuTempsComponent_Conditional_29_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const e_r11 = ctx.$implicit;
    \u0275\u0275domProperty("value", e_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r11);
  }
}
function EmploiDuTempsComponent_Conditional_29_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    \u0275\u0275domProperty("value", c_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r12);
  }
}
function EmploiDuTempsComponent_Conditional_29_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const j_r13 = ctx.$implicit;
    \u0275\u0275domProperty("value", j_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(j_r13);
  }
}
function EmploiDuTempsComponent_Conditional_29_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const h_r14 = ctx.$implicit;
    \u0275\u0275domProperty("value", h_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r14);
  }
}
function EmploiDuTempsComponent_Conditional_29_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const h_r15 = ctx.$implicit;
    \u0275\u0275domProperty("value", h_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r15);
  }
}
function EmploiDuTempsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 21);
    \u0275\u0275domListener("click", function EmploiDuTempsComponent_Conditional_29_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.showModal.set(false));
    });
    \u0275\u0275domElementStart(1, "div", 22);
    \u0275\u0275domListener("click", function EmploiDuTempsComponent_Conditional_29_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "div", 23)(3, "span", 24);
    \u0275\u0275text(4, "Ajouter un cours");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 25);
    \u0275\u0275domListener("click", function EmploiDuTempsComponent_Conditional_29_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.showModal.set(false));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 26)(7, "div", 27)(8, "div", 28)(9, "label", 29);
    \u0275\u0275text(10, "Mati\xE8re");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "input", 34);
    \u0275\u0275domListener("input", function EmploiDuTempsComponent_Conditional_29_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.form.matiere = $event.target.value);
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 28)(13, "label", 29);
    \u0275\u0275text(14, "Enseignant");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "select", 35);
    \u0275\u0275domListener("change", function EmploiDuTempsComponent_Conditional_29_Template_select_change_15_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.form.enseignant = $event.target.value);
    });
    \u0275\u0275repeaterCreate(16, EmploiDuTempsComponent_Conditional_29_For_17_Template, 2, 2, "option", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(18, "div", 27)(19, "div", 28)(20, "label", 29);
    \u0275\u0275text(21, "Classe");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "select", 35);
    \u0275\u0275domListener("change", function EmploiDuTempsComponent_Conditional_29_Template_select_change_22_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.form.classe = $event.target.value);
    });
    \u0275\u0275repeaterCreate(23, EmploiDuTempsComponent_Conditional_29_For_24_Template, 2, 2, "option", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(25, "div", 28)(26, "label", 29);
    \u0275\u0275text(27, "Salle");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(28, "input", 36);
    \u0275\u0275domListener("input", function EmploiDuTempsComponent_Conditional_29_Template_input_input_28_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.form.salle = $event.target.value);
    });
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(29, "div", 37)(30, "div", 28)(31, "label", 29);
    \u0275\u0275text(32, "Jour");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(33, "select", 35);
    \u0275\u0275domListener("change", function EmploiDuTempsComponent_Conditional_29_Template_select_change_33_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.form.jour = $event.target.value);
    });
    \u0275\u0275repeaterCreate(34, EmploiDuTempsComponent_Conditional_29_For_35_Template, 2, 2, "option", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(36, "div", 28)(37, "label", 29);
    \u0275\u0275text(38, "D\xE9but");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "select", 35);
    \u0275\u0275domListener("change", function EmploiDuTempsComponent_Conditional_29_Template_select_change_39_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.form.heureDebut = $event.target.value);
    });
    \u0275\u0275repeaterCreate(40, EmploiDuTempsComponent_Conditional_29_For_41_Template, 2, 2, "option", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(42, "div", 28)(43, "label", 29);
    \u0275\u0275text(44, "Fin");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(45, "select", 35);
    \u0275\u0275domListener("change", function EmploiDuTempsComponent_Conditional_29_Template_select_change_45_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.form.heureFin = $event.target.value);
    });
    \u0275\u0275repeaterCreate(46, EmploiDuTempsComponent_Conditional_29_For_47_Template, 2, 2, "option", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(48, "div", 31)(49, "button", 33);
    \u0275\u0275domListener("click", function EmploiDuTempsComponent_Conditional_29_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.showModal.set(false));
    });
    \u0275\u0275text(50, "Annuler");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(51, "button", 5);
    \u0275\u0275domListener("click", function EmploiDuTempsComponent_Conditional_29_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.addCours());
    });
    \u0275\u0275text(52, "Ajouter");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275domProperty("value", ctx_r5.form.matiere);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r5.form.enseignant);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.enseignants);
    \u0275\u0275advance(6);
    \u0275\u0275domProperty("value", ctx_r5.form.classe);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.classes);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r5.form.salle);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r5.form.jour);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.jours);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r5.form.heureDebut);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.heures);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r5.form.heureFin);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.heures);
  }
}
var EmploiDuTempsComponent = class _EmploiDuTempsComponent {
  filterClasse = signal("", ...ngDevMode ? [{ debugName: "filterClasse" }] : (
    /* istanbul ignore next */
    []
  ));
  filterEnseignant = signal("", ...ngDevMode ? [{ debugName: "filterEnseignant" }] : (
    /* istanbul ignore next */
    []
  ));
  showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : (
    /* istanbul ignore next */
    []
  ));
  selected = signal(null, ...ngDevMode ? [{ debugName: "selected" }] : (
    /* istanbul ignore next */
    []
  ));
  jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
  heures = ["07h30", "08h30", "09h30", "10h30", "11h30", "13h30", "14h30", "15h30", "16h30"];
  classes = ["CP A", "CE1 A", "CE2 A", "CM1 A", "CM2 A", "6\xE8me A", "6\xE8me B", "5\xE8me A", "4\xE8me A", "3\xE8me A", "2nde A", "1\xE8re A", "Tle A"];
  enseignants = ["M. Martin", "Mme Kouassi", "M. Diallo", "Mme Bamba", "M. N'Goran", "Mme Traor\xE9", "M. Coulibaly"];
  couleurs = ["#3498db", "#27ae60", "#e67e22", "#9b59b6", "#e74c3c", "#1abc9c", "#f39c12"];
  form = { matiere: "", enseignant: "M. Martin", classe: "6\xE8me A", salle: "S-06", jour: "Lundi", heureDebut: "07h30", heureFin: "08h30" };
  cours = signal([
    { id: 1, matiere: "Math\xE9matiques", enseignant: "M. Martin", classe: "6\xE8me A", salle: "S-06", jour: "Lundi", heureDebut: "07h30", heureFin: "08h30", couleur: "#3498db" },
    { id: 2, matiere: "Fran\xE7ais", enseignant: "Mme Kouassi", classe: "CM1 A", salle: "S-04", jour: "Lundi", heureDebut: "07h30", heureFin: "08h30", couleur: "#27ae60" },
    { id: 3, matiere: "Histoire-G\xE9o", enseignant: "M. Diallo", classe: "5\xE8me A", salle: "S-08", jour: "Lundi", heureDebut: "08h30", heureFin: "09h30", couleur: "#e67e22" },
    { id: 4, matiere: "Anglais", enseignant: "M. N'Goran", classe: "4\xE8me A", salle: "S-09", jour: "Lundi", heureDebut: "09h30", heureFin: "10h30", couleur: "#9b59b6" },
    { id: 5, matiere: "Sciences", enseignant: "Mme Bamba", classe: "3\xE8me A", salle: "S-10", jour: "Mardi", heureDebut: "07h30", heureFin: "08h30", couleur: "#1abc9c" },
    { id: 6, matiere: "Math\xE9matiques", enseignant: "M. Martin", classe: "5\xE8me A", salle: "S-08", jour: "Mardi", heureDebut: "08h30", heureFin: "09h30", couleur: "#3498db" },
    { id: 7, matiere: "EPS", enseignant: "Mme Traor\xE9", classe: "CM2 A", salle: "Terrain", jour: "Mercredi", heureDebut: "07h30", heureFin: "09h30", couleur: "#e74c3c" },
    { id: 8, matiere: "Fran\xE7ais", enseignant: "Mme Kouassi", classe: "6\xE8me A", salle: "S-06", jour: "Mercredi", heureDebut: "09h30", heureFin: "10h30", couleur: "#27ae60" },
    { id: 9, matiere: "Informatique", enseignant: "M. Coulibaly", classe: "2nde A", salle: "Labo", jour: "Jeudi", heureDebut: "13h30", heureFin: "15h30", couleur: "#f39c12" },
    { id: 10, matiere: "Anglais", enseignant: "M. N'Goran", classe: "2nde A", salle: "S-11", jour: "Vendredi", heureDebut: "07h30", heureFin: "08h30", couleur: "#9b59b6" }
  ], ...ngDevMode ? [{ debugName: "cours" }] : (
    /* istanbul ignore next */
    []
  ));
  filtered = computed(() => {
    const fc = this.filterClasse();
    const fe = this.filterEnseignant();
    return this.cours().filter((c) => (!fc || c.classe === fc) && (!fe || c.enseignant === fe));
  }, ...ngDevMode ? [{ debugName: "filtered" }] : (
    /* istanbul ignore next */
    []
  ));
  getSlot(jour, heure) {
    return this.filtered().filter((c) => c.jour === jour && c.heureDebut === heure);
  }
  deleteCours(id) {
    this.cours.update((list) => list.filter((c) => c.id !== id));
  }
  addCours() {
    const f = this.form;
    if (!f.matiere)
      return;
    const ids = this.cours().map((c) => c.id);
    const id = ids.length ? Math.max(...ids) + 1 : 1;
    const couleur = this.couleurs[id % this.couleurs.length];
    this.cours.update((list) => [...list, __spreadProps(__spreadValues({ id }, f), { couleur })]);
    this.form = { matiere: "", enseignant: "M. Martin", classe: "6\xE8me A", salle: "S-06", jour: "Lundi", heureDebut: "07h30", heureFin: "08h30" };
    this.showModal.set(false);
  }
  static \u0275fac = function EmploiDuTempsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmploiDuTempsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmploiDuTempsComponent, selectors: [["app-emploi-du-temps"]], decls: 30, vars: 4, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "filter-bar"], [1, "btn", "btn--ghost", 2, "cursor", "pointer", 3, "change", "value"], ["value", ""], [3, "value"], [2, "overflow-x", "auto"], [2, "display", "grid", "grid-template-columns", "80px repeat(5,1fr)", "gap", "2px", "min-width", "700px"], [2, "background", "#1a3a5c", "color", "#fff", "padding", "10px", "text-align", "center", "border-radius", "8px", "font-size", "13px", "font-weight", "700"], [1, "modal-overlay"], [2, "background", "#f8f9fb", "padding", "8px 6px", "text-align", "center", "border-radius", "6px", "font-size", "11px", "font-weight", "700", "color", "#8a9ab0", "align-self", "center"], [2, "background", "#fff", "border", "1px solid #e3e8f0", "border-radius", "8px", "min-height", "60px", "padding", "4px", "position", "relative"], [2, "border-radius", "6px", "padding", "5px 7px", "margin", "2px 0", "font-size", "11px", "cursor", "pointer", 3, "background", "border-left"], [2, "border-radius", "6px", "padding", "5px 7px", "margin", "2px 0", "font-size", "11px", "cursor", "pointer", 3, "click"], [2, "font-weight", "700"], [2, "color", "#555"], [2, "color", "#aaa"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], ["readonly", "", 1, "field__input", 3, "value"], [1, "modal__foot"], [1, "btn", "btn--danger", 3, "click"], [1, "btn", "btn--ghost", 3, "click"], ["placeholder", "Math\xE9matiques", 1, "field__input", 3, "input", "value"], [1, "field__select", 3, "change", "value"], ["placeholder", "S-01", 1, "field__input", 3, "input", "value"], [1, "fields-row--3"]], template: function EmploiDuTempsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Emploi du temps");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, "Semaine du 14 au 18 avril 2025");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275domListener("click", function EmploiDuTempsComponent_Template_button_click_8_listener() {
        return ctx.showModal.set(true);
      });
      \u0275\u0275text(9, "+ Ajouter un cours");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(10, "div", 6)(11, "select", 7);
      \u0275\u0275domListener("change", function EmploiDuTempsComponent_Template_select_change_11_listener($event) {
        return ctx.filterClasse.set($event.target.value);
      });
      \u0275\u0275domElementStart(12, "option", 8);
      \u0275\u0275text(13, "Toutes les classes");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(14, EmploiDuTempsComponent_For_15_Template, 2, 2, "option", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "select", 7);
      \u0275\u0275domListener("change", function EmploiDuTempsComponent_Template_select_change_16_listener($event) {
        return ctx.filterEnseignant.set($event.target.value);
      });
      \u0275\u0275domElementStart(17, "option", 8);
      \u0275\u0275text(18, "Tous les enseignants");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(19, EmploiDuTempsComponent_For_20_Template, 2, 2, "option", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "div", 10)(22, "div", 11);
      \u0275\u0275domElement(23, "div");
      \u0275\u0275repeaterCreate(24, EmploiDuTempsComponent_For_25_Template, 2, 1, "div", 12, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275repeaterCreate(26, EmploiDuTempsComponent_For_27_Template, 4, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(28, EmploiDuTempsComponent_Conditional_28_Template, 30, 6, "div", 13);
      \u0275\u0275conditionalCreate(29, EmploiDuTempsComponent_Conditional_29_Template, 53, 7, "div", 13);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275domProperty("value", ctx.filterClasse());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.classes);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("value", ctx.filterEnseignant());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.enseignants);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.jours);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.heures);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.selected() ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showModal() ? 29 : -1);
    }
  }, styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff8ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  color: #555;\n}\n/*# sourceMappingURL=shared-page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmploiDuTempsComponent, [{
    type: Component,
    args: [{ selector: "app-emploi-du-temps", imports: [], template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Emploi du temps</h1><p class="page__sub">Semaine du 14 au 18 avril 2025</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="showModal.set(true)">+ Ajouter un cours</button> </div> </div> <div class="filter-bar"> <select class="btn btn--ghost" [value]="filterClasse()" (change)="filterClasse.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Toutes les classes</option> @for (c of classes; track c) { <option [value]="c">{{ c }}</option> }
    </select> <select class="btn btn--ghost" [value]="filterEnseignant()" (change)="filterEnseignant.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Tous les enseignants</option> @for (e of enseignants; track e) { <option [value]="e">{{ e }}</option> }
    </select> </div> <div style="overflow-x:auto;"> <div style="display:grid;grid-template-columns:80px repeat(5,1fr);gap:2px;min-width:700px;"> <div></div> @for (j of jours; track j) {
        <div style="background:#1a3a5c;color:#fff;padding:10px;text-align:center;border-radius:8px;font-size:13px;font-weight:700;">{{ j }}</div> }
      @for (h of heures; track h) {
        <div style="background:#f8f9fb;padding:8px 6px;text-align:center;border-radius:6px;font-size:11px;font-weight:700;color:#8a9ab0;align-self:center;">{{ h }}</div> @for (j of jours; track j) {
          <div style="background:#fff;border:1px solid #e3e8f0;border-radius:8px;min-height:60px;padding:4px;position:relative;"> @for (c of getSlot(j, h); track c.id) {
              <div style="border-radius:6px;padding:5px 7px;margin:2px 0;font-size:11px;cursor:pointer;"[style.background]="c.couleur+'22'" [style.border-left]="'3px solid '+c.couleur"(click)="selected.set(c)"> <div style="font-weight:700;" [style.color]="c.couleur">{{ c.matiere }}</div> <div style="color:#555;">{{ c.classe }}</div> <div style="color:#aaa;">{{ c.enseignant }}</div> </div> }
          </div> }
      }
    </div> </div> @if (selected()) {
    <div class="modal-overlay" (click)="selected.set(null)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">{{ selected()!.matiere }} \u2014 {{ selected()!.classe }}</span> <button class="modal__close" (click)="selected.set(null)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Jour</label><input class="field__input" [value]="selected()!.jour" readonly/></div> <div class="field"><label class="field__label">Horaire</label><input class="field__input" [value]="selected()!.heureDebut+' \u2013 '+selected()!.heureFin" readonly/></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Enseignant</label><input class="field__input" [value]="selected()!.enseignant" readonly/></div> <div class="field"><label class="field__label">Salle</label><input class="field__input" [value]="selected()!.salle" readonly/></div> </div> </div> <div class="modal__foot"> <button class="btn btn--danger" (click)="deleteCours(selected()!.id);selected.set(null)">Supprimer</button> <button class="btn btn--ghost" (click)="selected.set(null)">Fermer</button> </div> </div> </div> }

  @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Ajouter un cours</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Mati\xE8re</label> <input class="field__input" [value]="form.matiere" (input)="form.matiere=$any($event.target).value" placeholder="Math\xE9matiques"/> </div> <div class="field"><label class="field__label">Enseignant</label> <select class="field__select" [value]="form.enseignant" (change)="form.enseignant=$any($event.target).value"> @for (e of enseignants; track e) { <option [value]="e">{{ e }}</option> }
              </select> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Classe</label> <select class="field__select" [value]="form.classe" (change)="form.classe=$any($event.target).value"> @for (c of classes; track c) { <option [value]="c">{{ c }}</option> }
              </select> </div> <div class="field"><label class="field__label">Salle</label> <input class="field__input" [value]="form.salle" (input)="form.salle=$any($event.target).value" placeholder="S-01"/> </div> </div> <div class="fields-row--3"> <div class="field"><label class="field__label">Jour</label> <select class="field__select" [value]="form.jour" (change)="form.jour=$any($event.target).value"> @for (j of jours; track j) { <option [value]="j">{{ j }}</option> }
              </select> </div> <div class="field"><label class="field__label">D\xE9but</label> <select class="field__select" [value]="form.heureDebut" (change)="form.heureDebut=$any($event.target).value"> @for (h of heures; track h) { <option [value]="h">{{ h }}</option> }
              </select> </div> <div class="field"><label class="field__label">Fin</label> <select class="field__select" [value]="form.heureFin" (change)="form.heureFin=$any($event.target).value"> @for (h of heures; track h) { <option [value]="h">{{ h }}</option> }
              </select> </div> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addCours()">Ajouter</button> </div> </div> </div> }
</div> `, styles: ['@charset "UTF-8";\n\n/* projects/gestion-education/src/app/shared-page.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff8ee;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F {\n  background: #e8e8e8;\n  color: #555;\n}\n/*# sourceMappingURL=shared-page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmploiDuTempsComponent, { className: "EmploiDuTempsComponent", filePath: "app/pages/emploi-du-temps/emploi-du-temps.component.ts", lineNumber: 36 });
})();
export {
  EmploiDuTempsComponent
};
//# sourceMappingURL=chunk-F5H4KFCM.js.map
