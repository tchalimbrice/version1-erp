import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-URIWTRFV.js";
import {
  CollabStoreService,
  CommonModule,
  Component,
  __spreadValues,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4UYYR4F3.js";

// projects/gestion-construction/src/app/pages/engins/engins.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function EnginsComponent_For_39_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r1.notes);
  }
}
function EnginsComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 13);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "div")(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, EnginsComponent_For_39_Conditional_19_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.marque);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.immatriculation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.chantier || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.chauffeur || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.prochainEntretien);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.statutClass(e_r1.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r1.statut);
    \u0275\u0275advance();
    \u0275\u0275conditional(e_r1.notes ? 19 : -1);
  }
}
function EnginsComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 15);
    \u0275\u0275text(2, "Aucun engin.");
    \u0275\u0275elementEnd()();
  }
}
function EnginsComponent_Conditional_41_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4);
  }
}
function EnginsComponent_Conditional_41_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r5);
  }
}
function EnginsComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function EnginsComponent_Conditional_41_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275listener("click", function EnginsComponent_Conditional_41_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 18)(3, "span", 19);
    \u0275\u0275text(4, "Ajouter un engin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function EnginsComponent_Conditional_41_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "div", 22)(8, "div", 23)(9, "label", 24);
    \u0275\u0275text(10, "Type d'engin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function EnginsComponent_Conditional_41_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(12, EnginsComponent_Conditional_41_For_13_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 23)(15, "label", 24);
    \u0275\u0275text(16, "Marque / Mod\xE8le *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function EnginsComponent_Conditional_41_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.marque, $event) || (ctx_r1.form.marque = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 22)(19, "div", 23)(20, "label", 24);
    \u0275\u0275text(21, "Immatriculation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function EnginsComponent_Conditional_41_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.immatriculation, $event) || (ctx_r1.form.immatriculation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 23)(24, "label", 24);
    \u0275\u0275text(25, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function EnginsComponent_Conditional_41_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.statut, $event) || (ctx_r1.form.statut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(27, EnginsComponent_Conditional_41_For_28_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 22)(30, "div", 23)(31, "label", 24);
    \u0275\u0275text(32, "Chantier affect\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function EnginsComponent_Conditional_41_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.chantier, $event) || (ctx_r1.form.chantier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 23)(35, "label", 24);
    \u0275\u0275text(36, "Chauffeur / Op\xE9rateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function EnginsComponent_Conditional_41_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.chauffeur, $event) || (ctx_r1.form.chauffeur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 22)(39, "div", 23)(40, "label", 24);
    \u0275\u0275text(41, "Dernier entretien");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function EnginsComponent_Conditional_41_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateEntretien, $event) || (ctx_r1.form.dateEntretien = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 23)(44, "label", 24);
    \u0275\u0275text(45, "Prochain entretien");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function EnginsComponent_Conditional_41_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.prochainEntretien, $event) || (ctx_r1.form.prochainEntretien = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 23)(48, "label", 24);
    \u0275\u0275text(49, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "textarea", 31);
    \u0275\u0275twoWayListener("ngModelChange", function EnginsComponent_Conditional_41_Template_textarea_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.notes, $event) || (ctx_r1.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 32)(52, "button", 33);
    \u0275\u0275listener("click", function EnginsComponent_Conditional_41_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275text(53, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 5);
    \u0275\u0275listener("click", function EnginsComponent_Conditional_41_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addEngin());
    });
    \u0275\u0275text(55, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.types);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.marque);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.immatriculation);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.statut);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statuts);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.chantier);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.chauffeur);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateEntretien);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.prochainEntretien);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.notes);
  }
}
var EnginsComponent = class _EnginsComponent {
  store;
  activeTab = signal("tout", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.emptyForm();
  engins = [
    { id: "1", reference: "ENG-001", type: "Pelleteuse", marque: "Caterpillar 320", immatriculation: "11 BF 4521", chantier: "CH-004", chauffeur: "Niki\xE9ma Th\xE9odore", statut: "En chantier", dateEntretien: "2024-02-15", prochainEntretien: "2024-05-15", notes: "" },
    { id: "2", reference: "ENG-002", type: "Camion benne", marque: "MAN TGS 6x4", immatriculation: "11 BF 4522", chantier: "CH-001", chauffeur: "Ou\xE9draogo Sami", statut: "En chantier", dateEntretien: "2024-03-01", prochainEntretien: "2024-06-01", notes: "" },
    { id: "3", reference: "ENG-003", type: "Camion benne", marque: "MAN TGS 6x4", immatriculation: "11 BF 4523", chantier: "CH-003", chauffeur: "Barry Abou", statut: "En chantier", dateEntretien: "2024-03-01", prochainEntretien: "2024-06-01", notes: "" },
    { id: "4", reference: "ENG-004", type: "Grue", marque: "Liebherr LTM 100", immatriculation: "11 BF 4524", chantier: "CH-002", chauffeur: "Compaor\xE9 Lamine", statut: "En chantier", dateEntretien: "2024-01-20", prochainEntretien: "2024-04-20", notes: "V\xE9rification c\xE2bles pr\xE9vue" },
    { id: "5", reference: "ENG-005", type: "B\xE9toni\xE8re", marque: "Altrad 350L", immatriculation: "\u2014", chantier: "CH-001", chauffeur: "\u2014", statut: "En chantier", dateEntretien: "2024-02-01", prochainEntretien: "2024-05-01", notes: "" },
    { id: "6", reference: "ENG-006", type: "B\xE9toni\xE8re", marque: "Altrad 350L", immatriculation: "\u2014", chantier: "CH-005", chauffeur: "\u2014", statut: "En chantier", dateEntretien: "2024-02-01", prochainEntretien: "2024-05-01", notes: "" },
    { id: "7", reference: "ENG-007", type: "Compacteur", marque: "Bomag BW 213", immatriculation: "11 BF 4525", chantier: "CH-003", chauffeur: "Tapsoba Michel", statut: "En chantier", dateEntretien: "2024-01-10", prochainEntretien: "2024-04-10", notes: "" },
    { id: "8", reference: "ENG-008", type: "Chargeuse", marque: "Komatsu WA380", immatriculation: "11 BF 4526", chantier: "\u2014", chauffeur: "\u2014", statut: "En entretien", dateEntretien: "2024-03-20", prochainEntretien: "2024-06-20", notes: "Remplacement filtre hydraulique" },
    { id: "9", reference: "ENG-009", type: "Bulldozer", marque: "Caterpillar D6T", immatriculation: "11 BF 4527", chantier: "\u2014", chauffeur: "\u2014", statut: "En panne", dateEntretien: "2024-01-05", prochainEntretien: "2024-04-05", notes: "Bo\xEEte de vitesse d\xE9faillante" },
    { id: "10", reference: "ENG-010", type: "Nacelle", marque: "Haulotte HA18", immatriculation: "\u2014", chantier: "CH-002", chauffeur: "\u2014", statut: "Op\xE9rationnel", dateEntretien: "2024-03-10", prochainEntretien: "2024-09-10", notes: "" },
    { id: "11", reference: "ENG-011", type: "Niveleuse", marque: "Caterpillar 140K", immatriculation: "11 BF 4528", chantier: "CH-003", chauffeur: "Ou\xE9draogo Flavien", statut: "En chantier", dateEntretien: "2024-02-20", prochainEntretien: "2024-05-20", notes: "" },
    { id: "12", reference: "ENG-012", type: "Camion malaxeur", marque: "Mercedes Axor", immatriculation: "11 BF 4529", chantier: "\u2014", chauffeur: "\u2014", statut: "En entretien", dateEntretien: "2024-04-01", prochainEntretien: "2024-07-01", notes: "Vidange g\xE9n\xE9rale" }
  ];
  get filtered() {
    const t = this.activeTab();
    if (t === "operationnel")
      return this.engins.filter((e) => e.statut === "Op\xE9rationnel" || e.statut === "En chantier");
    if (t === "maintenance")
      return this.engins.filter((e) => e.statut === "En entretien" || e.statut === "En panne" || e.statut === "Hors service");
    return this.engins;
  }
  get operationnels() {
    return this.engins.filter((e) => e.statut === "Op\xE9rationnel" || e.statut === "En chantier").length;
  }
  get enMaintenance() {
    return this.engins.filter((e) => e.statut === "En entretien" || e.statut === "En panne").length;
  }
  statutClass(s) {
    const m = {
      "Op\xE9rationnel": "badge badge--green",
      "En chantier": "badge badge--blue",
      "En entretien": "badge badge--yellow",
      "En panne": "badge badge--red",
      "Lou\xE9": "badge badge--purple",
      "Hors service": "badge badge--gray"
    };
    return m[s];
  }
  addEngin() {
    if (!this.form.type || !this.form.marque)
      return;
    const num = this.engins.length + 1;
    const reference = "ENG-" + String(num).padStart(3, "0");
    this.engins.unshift(__spreadValues({ id: Date.now().toString(), reference }, this.form));
    this.form = this.emptyForm();
    this.showForm.set(false);
  }
  emptyForm() {
    return { type: "Pelleteuse", marque: "", immatriculation: "", chantier: "", chauffeur: "", statut: "Op\xE9rationnel", dateEntretien: "", prochainEntretien: "", notes: "" };
  }
  types = ["Pelleteuse", "Bulldozer", "Grue", "Camion benne", "B\xE9toni\xE8re", "Compacteur", "Nacelle", "Chargeuse", "Niveleuse", "Camion malaxeur"];
  statuts = ["Op\xE9rationnel", "En chantier", "En entretien", "En panne", "Lou\xE9", "Hors service"];
  constructor(store) {
    this.store = store;
  }
  static \u0275fac = function EnginsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EnginsComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnginsComponent, selectors: [["app-engins"]], decls: 42, vars: 13, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "tabs"], [1, "tab", 3, "click"], [1, "table-wrap"], [1, "table"], [1, "modal-overlay"], [1, "mono"], [1, "fw-med"], [1, "text-muted"], [1, "text-muted", "text-sm", 2, "margin-top", "3px"], ["colspan", "8", 2, "text-align", "center", "color", "#aaa", "padding", "32px", "font-style", "italic"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal--wide", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], [1, "field__select", 3, "ngModelChange", "ngModel"], ["placeholder", "ex: Caterpillar 320", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "11 BF 0000", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "ex: CH-001", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "Nom du chauffeur", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "Observations, pannes en cours\u2026", 1, "field__textarea", 3, "ngModelChange", "ngModel"], [1, "modal__foot"], [1, "btn", "btn--ghost", 3, "click"]], template: function EnginsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Engins & \xC9quipements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function EnginsComponent_Template_button_click_8_listener() {
        return ctx.showForm.set(true);
      });
      \u0275\u0275text(9, "+ Ajouter engin");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
      \u0275\u0275listener("click", function EnginsComponent_Template_button_click_11_listener() {
        return ctx.activeTab.set("tout");
      });
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function EnginsComponent_Template_button_click_13_listener() {
        return ctx.activeTab.set("operationnel");
      });
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 7);
      \u0275\u0275listener("click", function EnginsComponent_Template_button_click_15_listener() {
        return ctx.activeTab.set("maintenance");
      });
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 8)(18, "table", 9)(19, "thead")(20, "tr")(21, "th");
      \u0275\u0275text(22, "R\xE9f.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Marque / Mod\xE8le");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Immatriculation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Chantier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Chauffeur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Prochain entretien");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Statut");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "tbody");
      \u0275\u0275repeaterCreate(38, EnginsComponent_For_39_Template, 20, 11, "tr", null, _forTrack0);
      \u0275\u0275conditionalCreate(40, EnginsComponent_Conditional_40_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(41, EnginsComponent_Conditional_41_Template, 56, 9, "div", 10);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.operationnels, " op\xE9rationnels \xB7 ", ctx.enMaintenance, " en maintenance");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeTab() === "tout");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Tous (", ctx.engins.length, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "operationnel");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Op\xE9rationnels (", ctx.operationnels, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "maintenance");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Maintenance / Panne (", ctx.enMaintenance, ")");
      \u0275\u0275advance(22);
      \u0275\u0275repeater(ctx.filtered);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filtered.length === 0 ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm() ? 41 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff5ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbfc;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a8fa8;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 680px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=engins.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnginsComponent, [{
    type: Component,
    args: [{ selector: "app-engins", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page"> <header class="page__header"> <div> <h1 class="page__title">Engins & \xC9quipements</h1> <p class="page__sub">{{ operationnels }} op\xE9rationnels \xB7 {{ enMaintenance }} en maintenance</p> </div> <div class="page__actions"> <button class="btn btn--primary" (click)="showForm.set(true)">+ Ajouter engin</button> </div> </header> <div class="tabs"> <button class="tab" [class.active]="activeTab()==='tout'"(click)="activeTab.set('tout')">Tous ({{ engins.length }})</button> <button class="tab" [class.active]="activeTab()==='operationnel'"(click)="activeTab.set('operationnel')">Op\xE9rationnels ({{ operationnels }})</button> <button class="tab" [class.active]="activeTab()==='maintenance'"(click)="activeTab.set('maintenance')">Maintenance / Panne ({{ enMaintenance }})</button> </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>R\xE9f.</th> <th>Type</th> <th>Marque / Mod\xE8le</th> <th>Immatriculation</th> <th>Chantier</th> <th>Chauffeur</th> <th>Prochain entretien</th> <th>Statut</th> </tr> </thead> <tbody> @for (e of filtered; track e.id) {
          <tr> <td class="mono">{{ e.reference }}</td> <td class="fw-med">{{ e.type }}</td> <td class="text-muted">{{ e.marque }}</td> <td class="text-muted">{{ e.immatriculation }}</td> <td class="text-muted">{{ e.chantier || '\u2014' }}</td> <td class="text-muted">{{ e.chauffeur || '\u2014' }}</td> <td class="text-muted">{{ e.prochainEntretien }}</td> <td> <div><span [class]="statutClass(e.statut)">{{ e.statut }}</span></div> @if (e.notes) { <div class="text-muted text-sm" style="margin-top:3px;">{{ e.notes }}</div> }
            </td> </tr> }
        @if (filtered.length === 0) {
          <tr><td colspan="8" style="text-align:center;color:#aaa;padding:32px;font-style:italic;">Aucun engin.</td></tr> }
      </tbody> </table> </div>
</div> @if (showForm()) {
  <div class="modal-overlay" (click)="showForm.set(false)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Ajouter un engin</span> <button class="modal__close" (click)="showForm.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"> <label class="field__label">Type d'engin</label> <select [(ngModel)]="form.type" class="field__select"> @for (t of types; track t) { <option>{{ t }}</option> }
            </select> </div> <div class="field"> <label class="field__label">Marque / Mod\xE8le *</label> <input [(ngModel)]="form.marque" class="field__input" placeholder="ex: Caterpillar 320" /> </div> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Immatriculation</label> <input [(ngModel)]="form.immatriculation" class="field__input" placeholder="11 BF 0000" /> </div> <div class="field"> <label class="field__label">Statut</label> <select [(ngModel)]="form.statut" class="field__select"> @for (s of statuts; track s) { <option>{{ s }}</option> }
            </select> </div> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Chantier affect\xE9</label> <input [(ngModel)]="form.chantier" class="field__input" placeholder="ex: CH-001" /> </div> <div class="field"> <label class="field__label">Chauffeur / Op\xE9rateur</label> <input [(ngModel)]="form.chauffeur" class="field__input" placeholder="Nom du chauffeur" /> </div> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Dernier entretien</label> <input [(ngModel)]="form.dateEntretien" type="date" class="field__input" /> </div> <div class="field"> <label class="field__label">Prochain entretien</label> <input [(ngModel)]="form.prochainEntretien" type="date" class="field__input" /> </div> </div> <div class="field"> <label class="field__label">Notes</label> <textarea [(ngModel)]="form.notes" class="field__textarea" placeholder="Observations, pannes en cours\u2026"></textarea> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showForm.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addEngin()">Enregistrer</button> </div> </div> </div>
}
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-construction/src/app/pages/engins/engins.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff5ee;\n}\n.btn--danger {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbfc;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted {\n  color: #8a8fa8;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 680px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=engins.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnginsComponent, { className: "EnginsComponent", filePath: "app/pages/engins/engins.component.ts", lineNumber: 30 });
})();
export {
  EnginsComponent
};
//# sourceMappingURL=chunk-UTUQ5UWK.js.map
