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

// projects/gestion-education/src/app/pages/eleves/eleves.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ElevesComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const n_r1 = ctx.$implicit;
    \u0275\u0275domProperty("value", n_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r1);
  }
}
function ElevesComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 19);
    \u0275\u0275domListener("click", function ElevesComponent_For_49_Template_tr_click_0_listener() {
      const e_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selected.set(e_r3));
    });
    \u0275\u0275domElementStart(1, "td")(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "td")(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td")(11, "span", 22);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "td")(14, "span", 23);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "td")(17, "div", 24);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "div", 25);
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(21, "td")(22, "span", 26);
    \u0275\u0275text(23);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(24, "td")(25, "button", 27);
    \u0275\u0275domListener("click", function ElevesComponent_For_49_Template_button_click_25_listener($event) {
      const e_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r3.selected.set(e_r3));
    });
    \u0275\u0275text(26, "D\xE9tails");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r3.matricule);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r3.nom);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r3.prenom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r3.classe);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r3.niveau);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.noteClass(e_r3.moyenneGen));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", e_r3.moyenneGen, "/20");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r3.parentNom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r3.parentTel);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.statutCls(e_r3.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r3.statut);
  }
}
function ElevesComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 28);
    \u0275\u0275domListener("click", function ElevesComponent_Conditional_50_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selected.set(null));
    });
    \u0275\u0275domElementStart(1, "div", 29);
    \u0275\u0275domListener("click", function ElevesComponent_Conditional_50_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "div", 30)(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 32);
    \u0275\u0275domListener("click", function ElevesComponent_Conditional_50_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selected.set(null));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 33)(7, "div", 34)(8, "div", 35)(9, "label", 36);
    \u0275\u0275text(10, "Matricule");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(11, "input", 37);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 35)(13, "label", 36);
    \u0275\u0275text(14, "Classe");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(15, "input", 37);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 34)(17, "div", 35)(18, "label", 36);
    \u0275\u0275text(19, "Nom");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(20, "input", 37);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "div", 35)(22, "label", 36);
    \u0275\u0275text(23, "Pr\xE9nom");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(24, "input", 37);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(25, "div", 34)(26, "div", 35)(27, "label", 36);
    \u0275\u0275text(28, "Date de naissance");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(29, "input", 37);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "div", 35)(31, "label", 36);
    \u0275\u0275text(32, "Moyenne g\xE9n\xE9rale");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(33, "div", 38)(34, "span", 23);
    \u0275\u0275text(35);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(36, "div", 34)(37, "div", 35)(38, "label", 36);
    \u0275\u0275text(39, "Nom du parent");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(40, "input", 37);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(41, "div", 35)(42, "label", 36);
    \u0275\u0275text(43, "T\xE9l\xE9phone parent");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(44, "input", 37);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(45, "div", 35)(46, "label", 36);
    \u0275\u0275text(47, "Statut");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(48, "div", 38)(49, "span", 26);
    \u0275\u0275text(50);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(51, "div", 39)(52, "button", 40);
    \u0275\u0275domListener("click", function ElevesComponent_Conditional_50_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selected.set(null));
    });
    \u0275\u0275text(53, "Fermer");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Fiche \u2014 ", ctx_r3.selected().nom, " ", ctx_r3.selected().prenom);
    \u0275\u0275advance(7);
    \u0275\u0275domProperty("value", ctx_r3.selected().matricule);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r3.selected().classe);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r3.selected().nom);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r3.selected().prenom);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r3.selected().dateNaissance);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r3.noteClass(ctx_r3.selected().moyenneGen));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r3.selected().moyenneGen, "/20");
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r3.selected().parentNom);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r3.selected().parentTel);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r3.statutCls(ctx_r3.selected().statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.selected().statut);
  }
}
function ElevesComponent_Conditional_51_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275domProperty("value", c_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7);
  }
}
function ElevesComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 28);
    \u0275\u0275domListener("click", function ElevesComponent_Conditional_51_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showModal.set(false));
    });
    \u0275\u0275domElementStart(1, "div", 29);
    \u0275\u0275domListener("click", function ElevesComponent_Conditional_51_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "div", 30)(3, "span", 31);
    \u0275\u0275text(4, "Inscrire un nouvel \xE9l\xE8ve");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 32);
    \u0275\u0275domListener("click", function ElevesComponent_Conditional_51_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showModal.set(false));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 33)(7, "div", 34)(8, "div", 35)(9, "label", 36);
    \u0275\u0275text(10, "Matricule");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(11, "input", 37);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 35)(13, "label", 36);
    \u0275\u0275text(14, "Nom");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "input", 41);
    \u0275\u0275domListener("input", function ElevesComponent_Conditional_51_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.form.nom = $event.target.value);
    });
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(16, "div", 34)(17, "div", 35)(18, "label", 36);
    \u0275\u0275text(19, "Pr\xE9nom");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "input", 42);
    \u0275\u0275domListener("input", function ElevesComponent_Conditional_51_Template_input_input_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.form.prenom = $event.target.value);
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(21, "div", 35)(22, "label", 36);
    \u0275\u0275text(23, "Date de naissance");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "input", 43);
    \u0275\u0275domListener("input", function ElevesComponent_Conditional_51_Template_input_input_24_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.form.dateNaissance = $event.target.value);
    });
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(25, "div", 34)(26, "div", 35)(27, "label", 36);
    \u0275\u0275text(28, "Classe");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(29, "select", 44);
    \u0275\u0275domListener("change", function ElevesComponent_Conditional_51_Template_select_change_29_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.form.classe = $event.target.value);
    });
    \u0275\u0275repeaterCreate(30, ElevesComponent_Conditional_51_For_31_Template, 2, 2, "option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(32, "div", 34)(33, "div", 35)(34, "label", 36);
    \u0275\u0275text(35, "Nom du parent");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(36, "input", 45);
    \u0275\u0275domListener("input", function ElevesComponent_Conditional_51_Template_input_input_36_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.form.parentNom = $event.target.value);
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(37, "div", 35)(38, "label", 36);
    \u0275\u0275text(39, "T\xE9l\xE9phone parent");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(40, "input", 46);
    \u0275\u0275domListener("input", function ElevesComponent_Conditional_51_Template_input_input_40_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.form.parentTel = $event.target.value);
    });
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(41, "div", 39)(42, "button", 40);
    \u0275\u0275domListener("click", function ElevesComponent_Conditional_51_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showModal.set(false));
    });
    \u0275\u0275text(43, "Annuler");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(44, "button", 5);
    \u0275\u0275domListener("click", function ElevesComponent_Conditional_51_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addEleve());
    });
    \u0275\u0275text(45, "Inscrire");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275domProperty("value", ctx_r3.form.matricule);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r3.form.nom);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r3.form.prenom);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r3.form.dateNaissance);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r3.form.classe);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.classes);
    \u0275\u0275advance(6);
    \u0275\u0275domProperty("value", ctx_r3.form.parentNom);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r3.form.parentTel);
  }
}
var ElevesComponent = class _ElevesComponent {
  search = signal("", ...ngDevMode ? [{ debugName: "search" }] : (
    /* istanbul ignore next */
    []
  ));
  filterNiveau = signal("", ...ngDevMode ? [{ debugName: "filterNiveau" }] : (
    /* istanbul ignore next */
    []
  ));
  filterStatut = signal("", ...ngDevMode ? [{ debugName: "filterStatut" }] : (
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
  niveaux = ["Primaire", "Coll\xE8ge", "Lyc\xE9e"];
  classes = ["CP", "CE1", "CE2", "CM1", "CM2", "6\xE8me", "5\xE8me", "4\xE8me", "3\xE8me", "2nde", "1\xE8re", "Terminale"];
  form = { matricule: "", nom: "", prenom: "", dateNaissance: "", classe: "CP", parentNom: "", parentTel: "" };
  eleves = signal([
    { id: 1, matricule: "EDU-2024-001", nom: "Kouam\xE9", prenom: "Ange", dateNaissance: "2015-03-12", classe: "CM1", niveau: "Primaire", parentNom: "Kouam\xE9 Pierre", parentTel: "+225 07 11 22 33", moyenneGen: 17.5, statut: "Actif" },
    { id: 2, matricule: "EDU-2024-002", nom: "Yao", prenom: "Bertrand", dateNaissance: "2014-07-20", classe: "CM2", niveau: "Primaire", parentNom: "Yao Alphonse", parentTel: "+225 05 44 55 66", moyenneGen: 13.2, statut: "Actif" },
    { id: 3, matricule: "EDU-2024-003", nom: "Bamba", prenom: "Cheick", dateNaissance: "2013-11-05", classe: "6\xE8me", niveau: "Coll\xE8ge", parentNom: "Bamba Mamadou", parentTel: "+225 01 77 88 99", moyenneGen: 10.8, statut: "Actif" },
    { id: 4, matricule: "EDU-2024-004", nom: "Traor\xE9", prenom: "Drissa", dateNaissance: "2013-09-18", classe: "6\xE8me", niveau: "Coll\xE8ge", parentNom: "Traor\xE9 Ibrahim", parentTel: "+225 07 22 33 44", moyenneGen: 7.4, statut: "Redoublant" },
    { id: 5, matricule: "EDU-2024-005", nom: "N'Goran", prenom: "Estelle", dateNaissance: "2012-04-30", classe: "5\xE8me", niveau: "Coll\xE8ge", parentNom: "N'Goran Jacques", parentTel: "+225 05 55 66 77", moyenneGen: 19.1, statut: "Actif" },
    { id: 6, matricule: "EDU-2024-006", nom: "Diallo", prenom: "Fatou", dateNaissance: "2016-01-15", classe: "CE2", niveau: "Primaire", parentNom: "Diallo Seydou", parentTel: "+225 01 88 99 00", moyenneGen: 15, statut: "Actif" },
    { id: 7, matricule: "EDU-2024-007", nom: "Coulibaly", prenom: "Gn\xE9n\xE9ba", dateNaissance: "2011-08-22", classe: "4\xE8me", niveau: "Coll\xE8ge", parentNom: "Coulibaly Lamine", parentTel: "+225 07 33 44 55", moyenneGen: 12.7, statut: "Actif" },
    { id: 8, matricule: "EDU-2024-008", nom: "Kon\xE9", prenom: "Hamidou", dateNaissance: "2010-06-10", classe: "3\xE8me", niveau: "Coll\xE8ge", parentNom: "Kon\xE9 Ousmane", parentTel: "+225 05 66 77 88", moyenneGen: 9.5, statut: "Actif" },
    { id: 9, matricule: "EDU-2024-009", nom: "Sanogo", prenom: "Ines", dateNaissance: "2015-12-03", classe: "CP", niveau: "Primaire", parentNom: "Sanogo Adama", parentTel: "+225 01 99 00 11", moyenneGen: 16.3, statut: "Actif" },
    { id: 10, matricule: "EDU-2024-010", nom: "Diabat\xE9", prenom: "Justin", dateNaissance: "2014-05-28", classe: "CE1", niveau: "Primaire", parentNom: "Diabat\xE9 Souleyman", parentTel: "+225 07 44 55 66", moyenneGen: 11.5, statut: "Actif" },
    { id: 11, matricule: "EDU-2024-011", nom: "Ou\xE9draogo", prenom: "Kadidia", dateNaissance: "2009-03-17", classe: "2nde", niveau: "Lyc\xE9e", parentNom: "Ou\xE9draogo Ren\xE9", parentTel: "+225 05 77 88 99", moyenneGen: 14.8, statut: "Actif" },
    { id: 12, matricule: "EDU-2024-012", nom: "Sawadogo", prenom: "L\xE9once", dateNaissance: "2008-10-04", classe: "1\xE8re", niveau: "Lyc\xE9e", parentNom: "Sawadogo Andr\xE9", parentTel: "+225 01 00 11 22", moyenneGen: 6, statut: "Redoublant" }
  ], ...ngDevMode ? [{ debugName: "eleves" }] : (
    /* istanbul ignore next */
    []
  ));
  filtered = computed(() => {
    const q = this.search().toLowerCase();
    const nv = this.filterNiveau();
    const st = this.filterStatut();
    return this.eleves().filter((e) => (!q || e.nom.toLowerCase().includes(q) || e.prenom.toLowerCase().includes(q) || e.matricule.toLowerCase().includes(q) || e.classe.toLowerCase().includes(q)) && (!nv || e.niveau === nv) && (!st || e.statut === st));
  }, ...ngDevMode ? [{ debugName: "filtered" }] : (
    /* istanbul ignore next */
    []
  ));
  noteClass(n) {
    if (n >= 16)
      return "note note--A";
    if (n >= 12)
      return "note note--B";
    if (n >= 10)
      return "note note--C";
    if (n >= 7)
      return "note note--D";
    return "note note--F";
  }
  statutCls(s) {
    const m = { Actif: "badge badge--green", Redoublant: "badge badge--yellow", Transf\u00E9r\u00E9: "badge badge--blue", Exclu: "badge badge--red" };
    return m[s];
  }
  openAddForm() {
    this.form.matricule = this.nextMatricule();
    this.showModal.set(true);
  }
  nextMatricule() {
    const nextId = this.eleves().length ? Math.max(...this.eleves().map((e) => e.id)) + 1 : 1;
    return `EDU-2024-${String(nextId).padStart(3, "0")}`;
  }
  addEleve() {
    const f = this.form;
    if (!f.nom || !f.prenom)
      return;
    const ids = this.eleves().map((e) => e.id);
    const id = ids.length ? Math.max(...ids) + 1 : 1;
    const niveauMap = { CP: "Primaire", CE1: "Primaire", CE2: "Primaire", CM1: "Primaire", CM2: "Primaire", "6\xE8me": "Coll\xE8ge", "5\xE8me": "Coll\xE8ge", "4\xE8me": "Coll\xE8ge", "3\xE8me": "Coll\xE8ge", "2nde": "Lyc\xE9e", "1\xE8re": "Lyc\xE9e", Terminale: "Lyc\xE9e" };
    this.eleves.update((list) => [...list, {
      id,
      matricule: f.matricule || `EDU-2024-${String(id).padStart(3, "0")}`,
      nom: f.nom,
      prenom: f.prenom,
      dateNaissance: f.dateNaissance,
      classe: f.classe,
      niveau: niveauMap[f.classe] ?? "Primaire",
      parentNom: f.parentNom,
      parentTel: f.parentTel,
      moyenneGen: 0,
      statut: "Actif"
    }]);
    this.form = { matricule: "", nom: "", prenom: "", dateNaissance: "", classe: "CP", parentNom: "", parentTel: "" };
    this.showModal.set(false);
  }
  static \u0275fac = function ElevesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ElevesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ElevesComponent, selectors: [["app-eleves"]], decls: 52, vars: 6, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "filter-bar"], ["placeholder", "Rechercher (nom, matricule, classe\u2026)", 1, "search-input", 3, "input", "value"], [1, "btn", "btn--ghost", 2, "cursor", "pointer", 3, "change", "value"], ["value", ""], [3, "value"], ["value", "Actif"], ["value", "Redoublant"], ["value", "Transf\xE9r\xE9"], ["value", "Exclu"], [1, "table-wrap"], [1, "table"], [2, "cursor", "pointer"], [1, "modal-overlay"], [2, "cursor", "pointer", 3, "click"], [1, "mono"], [1, "fw-bold"], [1, "badge", "badge--blue"], [1, "note"], [1, "fw-med"], [1, "text-muted", "text-sm"], [1, "badge"], [1, "btn", "btn--ghost", 2, "padding", "4px 10px", "font-size", "11px", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], ["readonly", "", 1, "field__input", 3, "value"], [2, "margin-top", "4px"], [1, "modal__foot"], [1, "btn", "btn--ghost", 3, "click"], ["placeholder", "Nom de famille", 1, "field__input", 3, "input", "value"], ["placeholder", "Pr\xE9nom", 1, "field__input", 3, "input", "value"], ["type", "date", 1, "field__input", 3, "input", "value"], [1, "field__select", 3, "change", "value"], ["placeholder", "Nom complet", 1, "field__input", 3, "input", "value"], ["placeholder", "+225 07...", 1, "field__input", 3, "input", "value"]], template: function ElevesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "\xC9l\xE8ves");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275domListener("click", function ElevesComponent_Template_button_click_8_listener() {
        return ctx.openAddForm();
      });
      \u0275\u0275text(9, "+ Inscrire un \xE9l\xE8ve");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(10, "div", 6)(11, "input", 7);
      \u0275\u0275domListener("input", function ElevesComponent_Template_input_input_11_listener($event) {
        return ctx.search.set($event.target.value);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "select", 8);
      \u0275\u0275domListener("change", function ElevesComponent_Template_select_change_12_listener($event) {
        return ctx.filterNiveau.set($event.target.value);
      });
      \u0275\u0275domElementStart(13, "option", 9);
      \u0275\u0275text(14, "Tous niveaux");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(15, ElevesComponent_For_16_Template, 2, 2, "option", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "select", 8);
      \u0275\u0275domListener("change", function ElevesComponent_Template_select_change_17_listener($event) {
        return ctx.filterStatut.set($event.target.value);
      });
      \u0275\u0275domElementStart(18, "option", 9);
      \u0275\u0275text(19, "Tous statuts");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "option", 11);
      \u0275\u0275text(21, "Actif");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "option", 12);
      \u0275\u0275text(23, "Redoublant");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "option", 13);
      \u0275\u0275text(25, "Transf\xE9r\xE9");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "option", 14);
      \u0275\u0275text(27, "Exclu");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(28, "div", 15)(29, "table", 16)(30, "thead")(31, "tr")(32, "th");
      \u0275\u0275text(33, "Matricule");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "th");
      \u0275\u0275text(35, "Nom & Pr\xE9nom");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "th");
      \u0275\u0275text(37, "Classe");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "th");
      \u0275\u0275text(39, "Niveau");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(40, "th");
      \u0275\u0275text(41, "Moy. G\xE9n.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "th");
      \u0275\u0275text(43, "Parent / Contact");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "th");
      \u0275\u0275text(45, "Statut");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(46, "th");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(47, "tbody");
      \u0275\u0275repeaterCreate(48, ElevesComponent_For_49_Template, 27, 13, "tr", 17, _forTrack0);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(50, ElevesComponent_Conditional_50_Template, 54, 15, "div", 18);
      \u0275\u0275conditionalCreate(51, ElevesComponent_Conditional_51_Template, 46, 7, "div", 18);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.filtered().length, " \xE9l\xE8ve(s) trouv\xE9(s)");
      \u0275\u0275advance(5);
      \u0275\u0275domProperty("value", ctx.search());
      \u0275\u0275advance();
      \u0275\u0275domProperty("value", ctx.filterNiveau());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.niveaux);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("value", ctx.filterStatut());
      \u0275\u0275advance(31);
      \u0275\u0275repeater(ctx.filtered());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.selected() ? 50 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showModal() ? 51 : -1);
    }
  }, styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff8ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  color: #555;\n}\n/*# sourceMappingURL=shared-page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ElevesComponent, [{
    type: Component,
    args: [{ selector: "app-eleves", imports: [], template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">\xC9l\xE8ves</h1><p class="page__sub">{{ filtered().length }} \xE9l\xE8ve(s) trouv\xE9(s)</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="openAddForm()">+ Inscrire un \xE9l\xE8ve</button> </div> </div> <div class="filter-bar"> <input class="search-input" placeholder="Rechercher (nom, matricule, classe\u2026)" [value]="search()" (input)="search.set($any($event.target).value)"/> <select class="btn btn--ghost" [value]="filterNiveau()" (change)="filterNiveau.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Tous niveaux</option> @for (n of niveaux; track n) { <option [value]="n">{{ n }}</option> }
    </select> <select class="btn btn--ghost" [value]="filterStatut()" (change)="filterStatut.set($any($event.target).value)" style="cursor:pointer;"> <option value="">Tous statuts</option> <option value="Actif">Actif</option><option value="Redoublant">Redoublant</option> <option value="Transf\xE9r\xE9">Transf\xE9r\xE9</option><option value="Exclu">Exclu</option> </select> </div> <div class="table-wrap"> <table class="table"> <thead><tr> <th>Matricule</th><th>Nom & Pr\xE9nom</th><th>Classe</th><th>Niveau</th> <th>Moy. G\xE9n.</th><th>Parent / Contact</th><th>Statut</th><th></th> </tr></thead> <tbody> @for (e of filtered(); track e.id) {
          <tr style="cursor:pointer;" (click)="selected.set(e)"> <td><span class="mono">{{ e.matricule }}</span></td> <td><span class="fw-bold">{{ e.nom }}</span> {{ e.prenom }}</td> <td>{{ e.classe }}</td> <td><span class="badge badge--blue">{{ e.niveau }}</span></td> <td><span class="note" [class]="noteClass(e.moyenneGen)">{{ e.moyenneGen }}/20</span></td> <td><div class="fw-med">{{ e.parentNom }}</div><div class="text-muted text-sm">{{ e.parentTel }}</div></td> <td><span class="badge" [class]="statutCls(e.statut)">{{ e.statut }}</span></td> <td><button class="btn btn--ghost" style="padding:4px 10px;font-size:11px;" (click)="$event.stopPropagation();selected.set(e)">D\xE9tails</button></td> </tr> }
      </tbody> </table> </div> @if (selected()) {
    <div class="modal-overlay" (click)="selected.set(null)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Fiche \u2014 {{ selected()!.nom }} {{ selected()!.prenom }}</span> <button class="modal__close" (click)="selected.set(null)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Matricule</label><input class="field__input" [value]="selected()!.matricule" readonly/></div> <div class="field"><label class="field__label">Classe</label><input class="field__input" [value]="selected()!.classe" readonly/></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Nom</label><input class="field__input" [value]="selected()!.nom" readonly/></div> <div class="field"><label class="field__label">Pr\xE9nom</label><input class="field__input" [value]="selected()!.prenom" readonly/></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Date de naissance</label><input class="field__input" [value]="selected()!.dateNaissance" readonly/></div> <div class="field"><label class="field__label">Moyenne g\xE9n\xE9rale</label> <div style="margin-top:4px;"><span class="note" [class]="noteClass(selected()!.moyenneGen)">{{ selected()!.moyenneGen }}/20</span></div> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Nom du parent</label><input class="field__input" [value]="selected()!.parentNom" readonly/></div> <div class="field"><label class="field__label">T\xE9l\xE9phone parent</label><input class="field__input" [value]="selected()!.parentTel" readonly/></div> </div> <div class="field"><label class="field__label">Statut</label> <div style="margin-top:4px;"><span class="badge" [class]="statutCls(selected()!.statut)">{{ selected()!.statut }}</span></div> </div> </div> <div class="modal__foot"><button class="btn btn--ghost" (click)="selected.set(null)">Fermer</button></div> </div> </div> }

  @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Inscrire un nouvel \xE9l\xE8ve</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Matricule</label> <input class="field__input" [value]="form.matricule" readonly/></div> <div class="field"><label class="field__label">Nom</label> <input class="field__input" [value]="form.nom" (input)="form.nom=$any($event.target).value" placeholder="Nom de famille"/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Pr\xE9nom</label> <input class="field__input" [value]="form.prenom" (input)="form.prenom=$any($event.target).value" placeholder="Pr\xE9nom"/> </div> <div class="field"><label class="field__label">Date de naissance</label> <input class="field__input" type="date" [value]="form.dateNaissance" (input)="form.dateNaissance=$any($event.target).value"/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Classe</label> <select class="field__select" [value]="form.classe" (change)="form.classe=$any($event.target).value"> @for (c of classes; track c) { <option [value]="c">{{ c }}</option> }
              </select> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Nom du parent</label> <input class="field__input" [value]="form.parentNom" (input)="form.parentNom=$any($event.target).value" placeholder="Nom complet"/> </div> <div class="field"><label class="field__label">T\xE9l\xE9phone parent</label> <input class="field__input" [value]="form.parentTel" (input)="form.parentTel=$any($event.target).value" placeholder="+225 07..."/> </div> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addEleve()">Inscrire</button> </div> </div> </div> }
</div> `, styles: ['@charset "UTF-8";\n\n/* projects/gestion-education/src/app/shared-page.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff8ee;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F {\n  background: #e8e8e8;\n  color: #555;\n}\n/*# sourceMappingURL=shared-page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ElevesComponent, { className: "ElevesComponent", filePath: "app/pages/eleves/eleves.component.ts", lineNumber: 28 });
})();
export {
  ElevesComponent
};
//# sourceMappingURL=chunk-URHLHHXY.js.map
