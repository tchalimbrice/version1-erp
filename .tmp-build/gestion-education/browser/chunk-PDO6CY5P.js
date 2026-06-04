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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-WTFQPXVN.js";
import "./chunk-46DXP6YY.js";

// projects/gestion-education/src/app/pages/classes/classes.component.ts
var _forTrack0 = ($index, $item) => $item.val;
var _forTrack1 = ($index, $item) => $item.id;
function ClassesComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 11);
    \u0275\u0275domListener("click", function ClassesComponent_For_12_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab.set(t_r2.val));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === t_r2.val);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2.lbl);
  }
}
function ClassesComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 12);
    \u0275\u0275domListener("click", function ClassesComponent_For_15_Template_div_click_0_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(c_r5));
    });
    \u0275\u0275domElementStart(1, "div", 13)(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 16)(7, "div", 17)(8, "span", 18);
    \u0275\u0275text(9, "Effectif");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 19);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 20);
    \u0275\u0275domElement(13, "div", 21);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "div", 17)(15, "span", 18);
    \u0275\u0275text(16, "Prof principal");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "span", 22);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(19, "div", 17)(20, "span", 18);
    \u0275\u0275text(21, "Salle");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "span", 23);
    \u0275\u0275text(23);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(24, "div", 17)(25, "span", 18);
    \u0275\u0275text(26, "Moyenne classe");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "span", 24);
    \u0275\u0275text(28);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r5.nom);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.niveauCls(c_r5.niveau));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.niveau);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", c_r5.effectif, " / ", c_r5.capacite, " \xE9l\xE8ves");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", c_r5.effectif / c_r5.capacite * 100 + "%")("background", c_r5.effectif / c_r5.capacite > 0.9 ? "#e74c3c" : c_r5.effectif / c_r5.capacite > 0.75 ? "#f39c12" : "#27ae60");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r5.enseignantPrincipal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r5.salle);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r2.noteClass(c_r5.moyenneClasse));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", c_r5.moyenneClasse, "/20");
  }
}
function ClassesComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 25);
    \u0275\u0275domListener("click", function ClassesComponent_Conditional_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275domElementStart(1, "div", 26);
    \u0275\u0275domListener("click", function ClassesComponent_Conditional_16_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "div", 27)(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 29);
    \u0275\u0275domListener("click", function ClassesComponent_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 30)(7, "div", 31)(8, "div", 32)(9, "label", 33);
    \u0275\u0275text(10, "Nom de la classe");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(11, "input", 34);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 32)(13, "label", 33);
    \u0275\u0275text(14, "Niveau");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(15, "input", 34);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 31)(17, "div", 32)(18, "label", 33);
    \u0275\u0275text(19, "Enseignant principal");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(20, "input", 34);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "div", 32)(22, "label", 33);
    \u0275\u0275text(23, "Salle");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(24, "input", 34);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(25, "div", 31)(26, "div", 32)(27, "label", 33);
    \u0275\u0275text(28, "Effectif actuel");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(29, "input", 34);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "div", 32)(31, "label", 33);
    \u0275\u0275text(32, "Capacit\xE9 max");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(33, "input", 34);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(34, "div", 32)(35, "label", 33);
    \u0275\u0275text(36, "Moyenne de classe");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(37, "div", 35)(38, "span", 24);
    \u0275\u0275text(39);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(40, "div", 36)(41, "button", 37);
    \u0275\u0275domListener("click", function ClassesComponent_Conditional_16_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275text(42, "Fermer");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Classe ", ctx_r2.selected().nom);
    \u0275\u0275advance(7);
    \u0275\u0275domProperty("value", ctx_r2.selected().nom);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r2.selected().niveau);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r2.selected().enseignantPrincipal);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r2.selected().salle);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r2.selected().effectif);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r2.selected().capacite);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r2.noteClass(ctx_r2.selected().moyenneClasse));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.selected().moyenneClasse, "/20");
  }
}
function ClassesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 25);
    \u0275\u0275domListener("click", function ClassesComponent_Conditional_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showModal.set(false));
    });
    \u0275\u0275domElementStart(1, "div", 26);
    \u0275\u0275domListener("click", function ClassesComponent_Conditional_17_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "div", 27)(3, "span", 28);
    \u0275\u0275text(4, "Nouvelle classe");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 29);
    \u0275\u0275domListener("click", function ClassesComponent_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showModal.set(false));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 30)(7, "div", 31)(8, "div", 32)(9, "label", 33);
    \u0275\u0275text(10, "Nom (ex: 6\xE8me A)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "input", 38);
    \u0275\u0275domListener("input", function ClassesComponent_Conditional_17_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.nom = $event.target.value);
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 32)(13, "label", 33);
    \u0275\u0275text(14, "Niveau");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "select", 39);
    \u0275\u0275domListener("change", function ClassesComponent_Conditional_17_Template_select_change_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.niveau = $event.target.value);
    });
    \u0275\u0275domElementStart(16, "option", 40);
    \u0275\u0275text(17, "Primaire");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "option", 41);
    \u0275\u0275text(19, "Coll\xE8ge");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "option", 42);
    \u0275\u0275text(21, "Lyc\xE9e");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(22, "div", 31)(23, "div", 32)(24, "label", 33);
    \u0275\u0275text(25, "Enseignant principal");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "input", 43);
    \u0275\u0275domListener("input", function ClassesComponent_Conditional_17_Template_input_input_26_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.enseignantPrincipal = $event.target.value);
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(27, "div", 32)(28, "label", 33);
    \u0275\u0275text(29, "Salle");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "input", 44);
    \u0275\u0275domListener("input", function ClassesComponent_Conditional_17_Template_input_input_30_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.salle = $event.target.value);
    });
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(31, "div", 32)(32, "label", 33);
    \u0275\u0275text(33, "Capacit\xE9 maximale");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(34, "input", 45);
    \u0275\u0275domListener("input", function ClassesComponent_Conditional_17_Template_input_input_34_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.capacite = +$event.target.value);
    });
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(35, "div", 36)(36, "button", 37);
    \u0275\u0275domListener("click", function ClassesComponent_Conditional_17_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showModal.set(false));
    });
    \u0275\u0275text(37, "Annuler");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(38, "button", 5);
    \u0275\u0275domListener("click", function ClassesComponent_Conditional_17_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addClass());
    });
    \u0275\u0275text(39, "Cr\xE9er la classe");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275domProperty("value", ctx_r2.form.nom);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r2.form.niveau);
    \u0275\u0275advance(11);
    \u0275\u0275domProperty("value", ctx_r2.form.enseignantPrincipal);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r2.form.salle);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", ctx_r2.form.capacite);
  }
}
var ClassesComponent = class _ClassesComponent {
  activeTab = signal("all", ...ngDevMode ? [{ debugName: "activeTab" }] : (
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
  tabs = [
    { val: "all", lbl: "Toutes" },
    { val: "Primaire", lbl: "Primaire" },
    { val: "Coll\xE8ge", lbl: "Coll\xE8ge" },
    { val: "Lyc\xE9e", lbl: "Lyc\xE9e" }
  ];
  form = { nom: "", niveau: "Primaire", enseignantPrincipal: "", salle: "", capacite: 40 };
  classes = signal([
    { id: 1, nom: "CP A", niveau: "Primaire", enseignantPrincipal: "Mme Kouassi", effectif: 28, capacite: 35, salle: "S-01", moyenneClasse: 14.2 },
    { id: 2, nom: "CE1 A", niveau: "Primaire", enseignantPrincipal: "M. Diallo", effectif: 32, capacite: 35, salle: "S-02", moyenneClasse: 13.8 },
    { id: 3, nom: "CE2 A", niveau: "Primaire", enseignantPrincipal: "Mme Traor\xE9", effectif: 30, capacite: 35, salle: "S-03", moyenneClasse: 12.5 },
    { id: 4, nom: "CM1 A", niveau: "Primaire", enseignantPrincipal: "M. Bamba", effectif: 34, capacite: 40, salle: "S-04", moyenneClasse: 13.1 },
    { id: 5, nom: "CM2 A", niveau: "Primaire", enseignantPrincipal: "Mme Sanogo", effectif: 29, capacite: 40, salle: "S-05", moyenneClasse: 14.7 },
    { id: 6, nom: "6\xE8me A", niveau: "Coll\xE8ge", enseignantPrincipal: "M. Coulibaly", effectif: 38, capacite: 45, salle: "S-06", moyenneClasse: 11.9 },
    { id: 7, nom: "6\xE8me B", niveau: "Coll\xE8ge", enseignantPrincipal: "Mme Diabat\xE9", effectif: 36, capacite: 45, salle: "S-07", moyenneClasse: 12.4 },
    { id: 8, nom: "5\xE8me A", niveau: "Coll\xE8ge", enseignantPrincipal: "M. Yao", effectif: 40, capacite: 45, salle: "S-08", moyenneClasse: 13.6 },
    { id: 9, nom: "4\xE8me A", niveau: "Coll\xE8ge", enseignantPrincipal: "Mme N'Goran", effectif: 35, capacite: 45, salle: "S-09", moyenneClasse: 12.1 },
    { id: 10, nom: "3\xE8me A", niveau: "Coll\xE8ge", enseignantPrincipal: "M. Kon\xE9", effectif: 33, capacite: 45, salle: "S-10", moyenneClasse: 13 },
    { id: 11, nom: "2nde A", niveau: "Lyc\xE9e", enseignantPrincipal: "Mme Ou\xE9draogo", effectif: 42, capacite: 50, salle: "S-11", moyenneClasse: 11.5 },
    { id: 12, nom: "1\xE8re A", niveau: "Lyc\xE9e", enseignantPrincipal: "M. Sawadogo", effectif: 38, capacite: 50, salle: "S-12", moyenneClasse: 12.8 },
    { id: 13, nom: "Tle A", niveau: "Lyc\xE9e", enseignantPrincipal: "Mme Koffi", effectif: 35, capacite: 50, salle: "S-13", moyenneClasse: 13.4 },
    { id: 14, nom: "Tle B", niveau: "Lyc\xE9e", enseignantPrincipal: "M. Fofana", effectif: 32, capacite: 50, salle: "S-14", moyenneClasse: 11.8 }
  ], ...ngDevMode ? [{ debugName: "classes" }] : (
    /* istanbul ignore next */
    []
  ));
  filtered = computed(() => {
    const t = this.activeTab();
    return t === "all" ? this.classes() : this.classes().filter((c) => c.niveau === t);
  }, ...ngDevMode ? [{ debugName: "filtered" }] : (
    /* istanbul ignore next */
    []
  ));
  totalEleves = computed(() => this.classes().reduce((s, c) => s + c.effectif, 0), ...ngDevMode ? [{ debugName: "totalEleves" }] : (
    /* istanbul ignore next */
    []
  ));
  niveauCls(n) {
    const m = { Primaire: "badge badge--green", Coll\u00E8ge: "badge badge--blue", Lyc\u00E9e: "badge badge--purple" };
    return m[n] ?? "badge badge--gray";
  }
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
  addClass() {
    const f = this.form;
    if (!f.nom)
      return;
    const ids = this.classes().map((c) => c.id);
    const id = ids.length ? Math.max(...ids) + 1 : 1;
    this.classes.update((list) => [...list, { id, nom: f.nom, niveau: f.niveau, enseignantPrincipal: f.enseignantPrincipal, effectif: 0, capacite: f.capacite, salle: f.salle, moyenneClasse: 0 }]);
    this.form = { nom: "", niveau: "Primaire", enseignantPrincipal: "", salle: "", capacite: 40 };
    this.showModal.set(false);
  }
  static \u0275fac = function ClassesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassesComponent, selectors: [["app-classes"]], decls: 18, vars: 4, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "tabs"], [1, "tab", 3, "active"], [2, "display", "grid", "grid-template-columns", "repeat(auto-fill,minmax(280px,1fr))", "gap", "16px"], [1, "card", 2, "cursor", "pointer", "margin-bottom", "0"], [1, "modal-overlay"], [1, "tab", 3, "click"], [1, "card", 2, "cursor", "pointer", "margin-bottom", "0", 3, "click"], [1, "card__head"], [1, "card__title"], [1, "badge"], [2, "display", "flex", "flex-direction", "column", "gap", "8px", "font-size", "13px"], [2, "display", "flex", "justify-content", "space-between"], [1, "text-muted"], [1, "fw-bold"], [1, "progress-bar"], [1, "progress-bar__fill"], [1, "fw-med"], [1, "mono"], [1, "note"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], ["readonly", "", 1, "field__input", 3, "value"], [2, "margin-top", "4px"], [1, "modal__foot"], [1, "btn", "btn--ghost", 3, "click"], ["placeholder", "6\xE8me A", 1, "field__input", 3, "input", "value"], [1, "field__select", 3, "change", "value"], ["value", "Primaire"], ["value", "Coll\xE8ge"], ["value", "Lyc\xE9e"], ["placeholder", "Nom de l'enseignant", 1, "field__input", 3, "input", "value"], ["placeholder", "Salle A1", 1, "field__input", 3, "input", "value"], ["type", "number", "placeholder", "40", 1, "field__input", 3, "input", "value"]], template: function ClassesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Classes");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275domListener("click", function ClassesComponent_Template_button_click_8_listener() {
        return ctx.showModal.set(true);
      });
      \u0275\u0275text(9, "+ Nouvelle classe");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(10, "div", 6);
      \u0275\u0275repeaterCreate(11, ClassesComponent_For_12_Template, 2, 3, "button", 7, _forTrack0);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "div", 8);
      \u0275\u0275repeaterCreate(14, ClassesComponent_For_15_Template, 29, 15, "div", 9, _forTrack1);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(16, ClassesComponent_Conditional_16_Template, 43, 10, "div", 10);
      \u0275\u0275conditionalCreate(17, ClassesComponent_Conditional_17_Template, 40, 5, "div", 10);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.classes().length, " classe(s) \u2014 ", ctx.totalEleves(), " \xE9l\xE8ves au total");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.filtered());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.selected() ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showModal() ? 17 : -1);
    }
  }, styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff8ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  color: #555;\n}\n/*# sourceMappingURL=shared-page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassesComponent, [{
    type: Component,
    args: [{ selector: "app-classes", imports: [], template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Classes</h1><p class="page__sub">{{ classes().length }} classe(s) \u2014 {{ totalEleves() }} \xE9l\xE8ves au total</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="showModal.set(true)">+ Nouvelle classe</button> </div> </div> <div class="tabs"> @for (t of tabs; track t.val) {
      <button class="tab" [class.active]="activeTab()===t.val" (click)="activeTab.set(t.val)">{{ t.lbl }}</button> }
  </div> <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;"> @for (c of filtered(); track c.id) {
      <div class="card" style="cursor:pointer;margin-bottom:0;" (click)="selected.set(c)"> <div class="card__head"> <span class="card__title">{{ c.nom }}</span> <span class="badge" [class]="niveauCls(c.niveau)">{{ c.niveau }}</span> </div> <div style="display:flex;flex-direction:column;gap:8px;font-size:13px;"> <div style="display:flex;justify-content:space-between;"> <span class="text-muted">Effectif</span> <span class="fw-bold">{{ c.effectif }} / {{ c.capacite }} \xE9l\xE8ves</span> </div> <div class="progress-bar"> <div class="progress-bar__fill" [style.width]="(c.effectif/c.capacite*100)+'%'"[style.background]="c.effectif/c.capacite > .9 ? '#e74c3c' : c.effectif/c.capacite > .75 ? '#f39c12' : '#27ae60'"></div> </div> <div style="display:flex;justify-content:space-between;"> <span class="text-muted">Prof principal</span> <span class="fw-med">{{ c.enseignantPrincipal }}</span> </div> <div style="display:flex;justify-content:space-between;"> <span class="text-muted">Salle</span> <span class="mono">{{ c.salle }}</span> </div> <div style="display:flex;justify-content:space-between;"> <span class="text-muted">Moyenne classe</span> <span class="note" [class]="noteClass(c.moyenneClasse)">{{ c.moyenneClasse }}/20</span> </div> </div> </div> }
  </div> @if (selected()) {
    <div class="modal-overlay" (click)="selected.set(null)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Classe {{ selected()!.nom }}</span> <button class="modal__close" (click)="selected.set(null)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Nom de la classe</label><input class="field__input" [value]="selected()!.nom" readonly/></div> <div class="field"><label class="field__label">Niveau</label><input class="field__input" [value]="selected()!.niveau" readonly/></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Enseignant principal</label><input class="field__input" [value]="selected()!.enseignantPrincipal" readonly/></div> <div class="field"><label class="field__label">Salle</label><input class="field__input" [value]="selected()!.salle" readonly/></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Effectif actuel</label><input class="field__input" [value]="selected()!.effectif" readonly/></div> <div class="field"><label class="field__label">Capacit\xE9 max</label><input class="field__input" [value]="selected()!.capacite" readonly/></div> </div> <div class="field"><label class="field__label">Moyenne de classe</label> <div style="margin-top:4px;"><span class="note" [class]="noteClass(selected()!.moyenneClasse)">{{ selected()!.moyenneClasse }}/20</span></div> </div> </div> <div class="modal__foot"><button class="btn btn--ghost" (click)="selected.set(null)">Fermer</button></div> </div> </div> }

  @if (showModal()) {
    <div class="modal-overlay" (click)="showModal.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Nouvelle classe</span> <button class="modal__close" (click)="showModal.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Nom (ex: 6\xE8me A)</label> <input class="field__input" [value]="form.nom" (input)="form.nom=$any($event.target).value" placeholder="6\xE8me A"/> </div> <div class="field"><label class="field__label">Niveau</label> <select class="field__select" [value]="form.niveau" (change)="form.niveau=$any($event.target).value"> <option value="Primaire">Primaire</option> <option value="Coll\xE8ge">Coll\xE8ge</option> <option value="Lyc\xE9e">Lyc\xE9e</option> </select> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Enseignant principal</label> <input class="field__input" [value]="form.enseignantPrincipal" (input)="form.enseignantPrincipal=$any($event.target).value" placeholder="Nom de l'enseignant"/> </div> <div class="field"><label class="field__label">Salle</label> <input class="field__input" [value]="form.salle" (input)="form.salle=$any($event.target).value" placeholder="Salle A1"/> </div> </div> <div class="field"><label class="field__label">Capacit\xE9 maximale</label> <input class="field__input" type="number" [value]="form.capacite" (input)="form.capacite=+$any($event.target).value" placeholder="40"/> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showModal.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addClass()">Cr\xE9er la classe</button> </div> </div> </div> }
</div> `, styles: ['@charset "UTF-8";\n\n/* projects/gestion-education/src/app/shared-page.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff8ee;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F {\n  background: #e8e8e8;\n  color: #555;\n}\n/*# sourceMappingURL=shared-page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassesComponent, { className: "ClassesComponent", filePath: "app/pages/classes/classes.component.ts", lineNumber: 25 });
})();
export {
  ClassesComponent
};
//# sourceMappingURL=chunk-PDO6CY5P.js.map
