import {
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-WTFQPXVN.js";
import "./chunk-46DXP6YY.js";

// projects/gestion-education/src/app/pages/enseignants/enseignants.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function EnseignantsComponent_For_44_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4);
  }
}
function EnseignantsComponent_For_44_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const e_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", e_r2.classes.length - 3);
  }
}
function EnseignantsComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 18);
    \u0275\u0275domListener("click", function EnseignantsComponent_For_44_Template_tr_click_0_listener() {
      const e_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(e_r2));
    });
    \u0275\u0275domElementStart(1, "td")(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "td")(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td");
    \u0275\u0275repeaterCreate(11, EnseignantsComponent_For_44_For_12_Template, 2, 1, "span", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(13, EnseignantsComponent_For_44_Conditional_13_Template, 2, 1, "span", 22);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "td")(15, "span", 23);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(17, "td", 24);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "td", 25);
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "td")(22, "button", 26);
    \u0275\u0275domListener("click", function EnseignantsComponent_For_44_Template_button_click_22_listener($event) {
      const e_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.selected.set(e_r2));
    });
    \u0275\u0275text(23, "Profil");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const e_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r2.matricule);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r2.nom);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r2.prenom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r2.matierePrincipale);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(e_r2.classes.slice(0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(e_r2.classes.length > 3 ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.contratCls(e_r2.contrat));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r2.contrat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", e_r2.heuresHebdo, "h");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", e_r2.experience, " ans");
  }
}
function EnseignantsComponent_Conditional_45_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const m_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r6);
  }
}
function EnseignantsComponent_Conditional_45_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7);
  }
}
function EnseignantsComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 27);
    \u0275\u0275domListener("click", function EnseignantsComponent_Conditional_45_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275domElementStart(1, "div", 28);
    \u0275\u0275domListener("click", function EnseignantsComponent_Conditional_45_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "div", 29)(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 31);
    \u0275\u0275domListener("click", function EnseignantsComponent_Conditional_45_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 32)(7, "div", 33)(8, "div", 34)(9, "label", 35);
    \u0275\u0275text(10, "Matricule");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(11, "input", 36);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 34)(13, "label", 35);
    \u0275\u0275text(14, "Contrat");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "div", 37)(16, "span", 23);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(18, "div", 33)(19, "div", 34)(20, "label", 35);
    \u0275\u0275text(21, "T\xE9l\xE9phone");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(22, "input", 36);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "div", 34)(24, "label", 35);
    \u0275\u0275text(25, "Email");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(26, "input", 36);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(27, "div", 34)(28, "label", 35);
    \u0275\u0275text(29, "Mati\xE8res enseign\xE9es");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "div", 38);
    \u0275\u0275repeaterCreate(31, EnseignantsComponent_Conditional_45_For_32_Template, 2, 1, "span", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(33, "div", 34)(34, "label", 35);
    \u0275\u0275text(35, "Classes assign\xE9es");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(36, "div", 38);
    \u0275\u0275repeaterCreate(37, EnseignantsComponent_Conditional_45_For_38_Template, 2, 1, "span", 40, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(39, "div", 33)(40, "div", 34)(41, "label", 35);
    \u0275\u0275text(42, "Heures / semaine");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(43, "input", 36);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(44, "div", 34)(45, "label", 35);
    \u0275\u0275text(46, "Exp\xE9rience");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(47, "input", 36);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(48, "div", 41)(49, "button", 42);
    \u0275\u0275domListener("click", function EnseignantsComponent_Conditional_45_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275text(50, "Fermer");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r2.selected().nom, " ", ctx_r2.selected().prenom);
    \u0275\u0275advance(7);
    \u0275\u0275domProperty("value", ctx_r2.selected().matricule);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r2.contratCls(ctx_r2.selected().contrat));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selected().contrat);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r2.selected().tel);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r2.selected().email);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.selected().matieres);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.selected().classes);
    \u0275\u0275advance(6);
    \u0275\u0275domProperty("value", ctx_r2.selected().heuresHebdo + "h");
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r2.selected().experience + " ans");
  }
}
function EnseignantsComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 27);
    \u0275\u0275domListener("click", function EnseignantsComponent_Conditional_46_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showModal.set(false));
    });
    \u0275\u0275domElementStart(1, "div", 43);
    \u0275\u0275domListener("click", function EnseignantsComponent_Conditional_46_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "div", 29)(3, "span", 30);
    \u0275\u0275text(4, "Ajouter un enseignant");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 31);
    \u0275\u0275domListener("click", function EnseignantsComponent_Conditional_46_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showModal.set(false));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 32)(7, "div", 33)(8, "div", 34)(9, "label", 35);
    \u0275\u0275text(10, "Nom");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "input", 44);
    \u0275\u0275domListener("input", function EnseignantsComponent_Conditional_46_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.nom = $event.target.value);
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 34)(13, "label", 35);
    \u0275\u0275text(14, "Pr\xE9nom");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "input", 45);
    \u0275\u0275domListener("input", function EnseignantsComponent_Conditional_46_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.prenom = $event.target.value);
    });
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(16, "div", 33)(17, "div", 34)(18, "label", 35);
    \u0275\u0275text(19, "Mati\xE8re principale");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "input", 46);
    \u0275\u0275domListener("input", function EnseignantsComponent_Conditional_46_Template_input_input_20_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.matiere = $event.target.value);
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(21, "div", 34)(22, "label", 35);
    \u0275\u0275text(23, "Type de contrat");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "select", 47);
    \u0275\u0275domListener("change", function EnseignantsComponent_Conditional_46_Template_select_change_24_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.contrat = $event.target.value);
    });
    \u0275\u0275domElementStart(25, "option", 10);
    \u0275\u0275text(26, "CDI");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "option", 11);
    \u0275\u0275text(28, "CDD");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(29, "option", 12);
    \u0275\u0275text(30, "Vacataire");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(31, "option", 13);
    \u0275\u0275text(32, "Stagiaire");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(33, "div", 33)(34, "div", 34)(35, "label", 35);
    \u0275\u0275text(36, "T\xE9l\xE9phone");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(37, "input", 48);
    \u0275\u0275domListener("input", function EnseignantsComponent_Conditional_46_Template_input_input_37_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.tel = $event.target.value);
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(38, "div", 34)(39, "label", 35);
    \u0275\u0275text(40, "Heures / sem.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(41, "input", 49);
    \u0275\u0275domListener("input", function EnseignantsComponent_Conditional_46_Template_input_input_41_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.heures = +$event.target.value);
    });
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(42, "div", 41)(43, "button", 42);
    \u0275\u0275domListener("click", function EnseignantsComponent_Conditional_46_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showModal.set(false));
    });
    \u0275\u0275text(44, "Annuler");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(45, "button", 5);
    \u0275\u0275domListener("click", function EnseignantsComponent_Conditional_46_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addEnseignant());
    });
    \u0275\u0275text(46, "Ajouter");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275domProperty("value", ctx_r2.form.nom);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r2.form.prenom);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r2.form.matiere);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r2.form.contrat);
    \u0275\u0275advance(13);
    \u0275\u0275domProperty("value", ctx_r2.form.tel);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r2.form.heures);
  }
}
var EnseignantsComponent = class _EnseignantsComponent {
  search = signal("", ...ngDevMode ? [{ debugName: "search" }] : (
    /* istanbul ignore next */
    []
  ));
  filterContrat = signal("", ...ngDevMode ? [{ debugName: "filterContrat" }] : (
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
  form = { nom: "", prenom: "", matiere: "", contrat: "CDI", tel: "", heures: 18 };
  enseignants = signal([
    { id: 1, matricule: "ENS-001", nom: "Martin", prenom: "Jean-Paul", matierePrincipale: "Math\xE9matiques", matieres: ["Math\xE9matiques", "Physique"], classes: ["6\xE8me A", "6\xE8me B", "5\xE8me A"], contrat: "CDI", tel: "+225 07 11 22 33", email: "j.martin@ecole.ci", heuresHebdo: 18, experience: 12 },
    { id: 2, matricule: "ENS-002", nom: "Kouassi", prenom: "Marie", matierePrincipale: "Fran\xE7ais", matieres: ["Fran\xE7ais", "Litt\xE9rature"], classes: ["CM1 A", "CM2 A", "6\xE8me A"], contrat: "CDI", tel: "+225 05 44 55 66", email: "m.kouassi@ecole.ci", heuresHebdo: 20, experience: 8 },
    { id: 3, matricule: "ENS-003", nom: "Diallo", prenom: "Abdou", matierePrincipale: "Histoire-G\xE9o", matieres: ["Histoire-G\xE9o", "EMC"], classes: ["5\xE8me A", "4\xE8me A", "3\xE8me A"], contrat: "CDI", tel: "+225 01 77 88 99", email: "a.diallo@ecole.ci", heuresHebdo: 16, experience: 15 },
    { id: 4, matricule: "ENS-004", nom: "Bamba", prenom: "Salimata", matierePrincipale: "Sciences", matieres: ["SVT", "Sciences"], classes: ["4\xE8me A", "3\xE8me A"], contrat: "CDD", tel: "+225 07 22 33 44", email: "s.bamba@ecole.ci", heuresHebdo: 14, experience: 4 },
    { id: 5, matricule: "ENS-005", nom: "N'Goran", prenom: "\xC9ric", matierePrincipale: "Anglais", matieres: ["Anglais"], classes: ["5\xE8me A", "4\xE8me A", "3\xE8me A", "2nde A"], contrat: "CDI", tel: "+225 05 55 66 77", email: "e.ngoran@ecole.ci", heuresHebdo: 22, experience: 9 },
    { id: 6, matricule: "ENS-006", nom: "Traor\xE9", prenom: "Fanta", matierePrincipale: "EPS", matieres: ["EPS"], classes: ["CP A", "CE1 A", "CE2 A", "CM1 A", "CM2 A"], contrat: "CDI", tel: "+225 01 88 99 00", email: "f.traore@ecole.ci", heuresHebdo: 24, experience: 6 },
    { id: 7, matricule: "ENS-007", nom: "Coulibaly", prenom: "Tidiane", matierePrincipale: "Informatique", matieres: ["Informatique", "Math\xE9matiques"], classes: ["2nde A", "1\xE8re A", "Tle A"], contrat: "Vacataire", tel: "+225 07 33 44 55", email: "t.coulibaly@ecole.ci", heuresHebdo: 12, experience: 3 },
    { id: 8, matricule: "ENS-008", nom: "Koffi", prenom: "Adjoua", matierePrincipale: "Arts plastiques", matieres: ["Arts plastiques", "Musique"], classes: ["CE1 A", "CE2 A", "CM1 A"], contrat: "CDD", tel: "+225 05 66 77 88", email: "a.koffi@ecole.ci", heuresHebdo: 10, experience: 5 }
  ], ...ngDevMode ? [{ debugName: "enseignants" }] : (
    /* istanbul ignore next */
    []
  ));
  filtered = computed(() => {
    const q = this.search().toLowerCase();
    const c = this.filterContrat();
    return this.enseignants().filter((e) => (!q || e.nom.toLowerCase().includes(q) || e.prenom.toLowerCase().includes(q) || e.matierePrincipale.toLowerCase().includes(q)) && (!c || e.contrat === c));
  }, ...ngDevMode ? [{ debugName: "filtered" }] : (
    /* istanbul ignore next */
    []
  ));
  contratCls(c) {
    const m = { CDI: "badge badge--green", CDD: "badge badge--blue", Vacataire: "badge badge--yellow", Stagiaire: "badge badge--gray" };
    return m[c];
  }
  addEnseignant() {
    const f = this.form;
    if (!f.nom || !f.prenom)
      return;
    const ids = this.enseignants().map((e) => e.id);
    const id = ids.length ? Math.max(...ids) + 1 : 1;
    this.enseignants.update((list) => [...list, {
      id,
      matricule: `ENS-${String(id).padStart(3, "0")}`,
      nom: f.nom,
      prenom: f.prenom,
      matierePrincipale: f.matiere,
      matieres: [f.matiere],
      classes: [],
      contrat: f.contrat,
      tel: f.tel,
      email: "",
      heuresHebdo: f.heures,
      experience: 0
    }]);
    this.form = { nom: "", prenom: "", matiere: "", contrat: "CDI", tel: "", heures: 18 };
    this.showModal.set(false);
  }
  static \u0275fac = function EnseignantsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EnseignantsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnseignantsComponent, selectors: [["app-enseignants"]], decls: 47, vars: 5, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "filter-bar"], ["placeholder", "Rechercher (nom, mati\xE8re\u2026)", 1, "search-input", 3, "input", "value"], [1, "btn", "btn--ghost", 2, "cursor", "pointer", 3, "change", "value"], ["value", ""], ["value", "CDI"], ["value", "CDD"], ["value", "Vacataire"], ["value", "Stagiaire"], [1, "table-wrap"], [1, "table"], [2, "cursor", "pointer"], [1, "modal-overlay"], [2, "cursor", "pointer", 3, "click"], [1, "mono"], [1, "fw-bold"], [1, "badge", "badge--blue", 2, "margin", "1px"], [1, "text-muted", "text-sm"], [1, "badge"], [1, "fw-med"], [1, "text-muted"], [1, "btn", "btn--ghost", 2, "padding", "4px 10px", "font-size", "11px", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal--wide", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], ["readonly", "", 1, "field__input", 3, "value"], [2, "margin-top", "4px"], [2, "display", "flex", "flex-wrap", "wrap", "gap", "6px", "margin-top", "4px"], [1, "badge", "badge--teal"], [1, "badge", "badge--blue"], [1, "modal__foot"], [1, "btn", "btn--ghost", 3, "click"], [1, "modal", 3, "click"], ["placeholder", "Nom", 1, "field__input", 3, "input", "value"], ["placeholder", "Pr\xE9nom", 1, "field__input", 3, "input", "value"], ["placeholder", "Math\xE9matiques", 1, "field__input", 3, "input", "value"], [1, "field__select", 3, "change", "value"], ["placeholder", "+225 07...", 1, "field__input", 3, "input", "value"], ["type", "number", "placeholder", "18", 1, "field__input", 3, "input", "value"]], template: function EnseignantsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Enseignants");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275domListener("click", function EnseignantsComponent_Template_button_click_8_listener() {
        return ctx.showModal.set(true);
      });
      \u0275\u0275text(9, "+ Ajouter un enseignant");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(10, "div", 6)(11, "input", 7);
      \u0275\u0275domListener("input", function EnseignantsComponent_Template_input_input_11_listener($event) {
        return ctx.search.set($event.target.value);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "select", 8);
      \u0275\u0275domListener("change", function EnseignantsComponent_Template_select_change_12_listener($event) {
        return ctx.filterContrat.set($event.target.value);
      });
      \u0275\u0275domElementStart(13, "option", 9);
      \u0275\u0275text(14, "Tous contrats");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "option", 10);
      \u0275\u0275text(16, "CDI");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "option", 11);
      \u0275\u0275text(18, "CDD");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "option", 12);
      \u0275\u0275text(20, "Vacataire");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "option", 13);
      \u0275\u0275text(22, "Stagiaire");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(23, "div", 14)(24, "table", 15)(25, "thead")(26, "tr")(27, "th");
      \u0275\u0275text(28, "Matricule");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "th");
      \u0275\u0275text(30, "Nom & Pr\xE9nom");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "th");
      \u0275\u0275text(32, "Mati\xE8re principale");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "th");
      \u0275\u0275text(34, "Classes");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(35, "th");
      \u0275\u0275text(36, "Contrat");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "th");
      \u0275\u0275text(38, "Heures/sem.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "th");
      \u0275\u0275text(40, "Exp\xE9rience");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(41, "th");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(42, "tbody");
      \u0275\u0275repeaterCreate(43, EnseignantsComponent_For_44_Template, 24, 10, "tr", 16, _forTrack0);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(45, EnseignantsComponent_Conditional_45_Template, 51, 10, "div", 17);
      \u0275\u0275conditionalCreate(46, EnseignantsComponent_Conditional_46_Template, 47, 6, "div", 17);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.filtered().length, " enseignant(s)");
      \u0275\u0275advance(5);
      \u0275\u0275domProperty("value", ctx.search());
      \u0275\u0275advance();
      \u0275\u0275domProperty("value", ctx.filterContrat());
      \u0275\u0275advance(31);
      \u0275\u0275repeater(ctx.filtered());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.selected() ? 45 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showModal() ? 46 : -1);
    }
  }, styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff8ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  color: #555;\n}\n/*# sourceMappingURL=shared-page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnseignantsComponent, [{
    type: Component,
    args: [{ selector: "app-enseignants", imports: [], template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Enseignants</h1><p class="page__sub">{{ filtered().length }} enseignant(s)</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="showModal.set(true)">+ Ajouter un enseignant</button> </div> </div> <div class="filter-bar"> <input class="search-input" placeholder="Rechercher (nom, mati\xE8re\u2026)" [value]="search()" (input)="search.set($any($event.target).value)"/> <select class="btn btn--ghost" [value]="filterContrat()" (change)="filterContrat.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Tous contrats</option> <option value="CDI">CDI</option><option value="CDD">CDD</option> <option value="Vacataire">Vacataire</option><option value="Stagiaire">Stagiaire</option> </select> </div> <div class="table-wrap"> <table class="table"> <thead><tr> <th>Matricule</th><th>Nom & Pr\xE9nom</th><th>Mati\xE8re principale</th> <th>Classes</th><th>Contrat</th><th>Heures/sem.</th><th>Exp\xE9rience</th><th></th> </tr></thead> <tbody> @for (e of filtered(); track e.id) {
          <tr style="cursor:pointer;" (click)="selected.set(e)"> <td><span class="mono">{{ e.matricule }}</span></td> <td><span class="fw-bold">{{ e.nom }}</span> {{ e.prenom }}</td> <td>{{ e.matierePrincipale }}</td> <td> @for (c of e.classes.slice(0,3); track c) {
                <span class="badge badge--blue" style="margin:1px;">{{ c }}</span> }
              @if (e.classes.length > 3) { <span class="text-muted text-sm">+{{ e.classes.length-3 }}</span> }
            </td> <td><span class="badge" [class]="contratCls(e.contrat)">{{ e.contrat }}</span></td> <td class="fw-med">{{ e.heuresHebdo }}h</td> <td class="text-muted">{{ e.experience }} ans</td> <td><button class="btn btn--ghost" style="padding:4px 10px;font-size:11px;" (click)="$event.stopPropagation();selected.set(e)">Profil</button></td> </tr> }
      </tbody> </table> </div> @if (selected()) {
    <div class="modal-overlay" (click)="selected.set(null)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">{{ selected()!.nom }} {{ selected()!.prenom }}</span> <button class="modal__close" (click)="selected.set(null)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Matricule</label><input class="field__input" [value]="selected()!.matricule" readonly/></div> <div class="field"><label class="field__label">Contrat</label> <div style="margin-top:4px;"><span class="badge" [class]="contratCls(selected()!.contrat)">{{ selected()!.contrat }}</span></div> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">T\xE9l\xE9phone</label><input class="field__input" [value]="selected()!.tel" readonly/></div> <div class="field"><label class="field__label">Email</label><input class="field__input" [value]="selected()!.email" readonly/></div> </div> <div class="field"><label class="field__label">Mati\xE8res enseign\xE9es</label> <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px;"> @for (m of selected()!.matieres; track m) {
                <span class="badge badge--teal">{{ m }}</span> }
            </div> </div> <div class="field"><label class="field__label">Classes assign\xE9es</label> <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px;"> @for (c of selected()!.classes; track c) {
                <span class="badge badge--blue">{{ c }}</span> }
            </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Heures / semaine</label><input class="field__input" [value]="selected()!.heuresHebdo+'h'" readonly/></div> <div class="field"><label class="field__label">Exp\xE9rience</label><input class="field__input" [value]="selected()!.experience+' ans'" readonly/></div> </div> </div> <div class="modal__foot"><button class="btn btn--ghost" (click)="selected.set(null)">Fermer</button></div> </div> </div> }

  @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Ajouter un enseignant</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Nom</label> <input class="field__input" [value]="form.nom" (input)="form.nom=$any($event.target).value" placeholder="Nom"/> </div> <div class="field"><label class="field__label">Pr\xE9nom</label> <input class="field__input" [value]="form.prenom" (input)="form.prenom=$any($event.target).value" placeholder="Pr\xE9nom"/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Mati\xE8re principale</label> <input class="field__input" [value]="form.matiere" (input)="form.matiere=$any($event.target).value" placeholder="Math\xE9matiques"/> </div> <div class="field"><label class="field__label">Type de contrat</label> <select class="field__select" [value]="form.contrat" (change)="form.contrat=$any($event.target).value"> <option value="CDI">CDI</option><option value="CDD">CDD</option> <option value="Vacataire">Vacataire</option><option value="Stagiaire">Stagiaire</option> </select> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">T\xE9l\xE9phone</label> <input class="field__input" [value]="form.tel" (input)="form.tel=$any($event.target).value" placeholder="+225 07..."/> </div> <div class="field"><label class="field__label">Heures / sem.</label> <input class="field__input" type="number" [value]="form.heures" (input)="form.heures=+$any($event.target).value" placeholder="18"/> </div> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addEnseignant()">Ajouter</button> </div> </div> </div> }
</div> `, styles: ['@charset "UTF-8";\n\n/* projects/gestion-education/src/app/shared-page.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff8ee;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F {\n  background: #e8e8e8;\n  color: #555;\n}\n/*# sourceMappingURL=shared-page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnseignantsComponent, { className: "EnseignantsComponent", filePath: "app/pages/enseignants/enseignants.component.ts", lineNumber: 34 });
})();
export {
  EnseignantsComponent
};
//# sourceMappingURL=chunk-RXJDXKW5.js.map
