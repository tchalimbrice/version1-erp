import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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
  ɵɵelement,
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4UYYR4F3.js";

// projects/gestion-construction/src/app/pages/comptabilite/comptabilite.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ComptabiliteComponent_For_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const op_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(op_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.typeClass(op_r1.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(op_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(op_r1.categorie);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(op_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(op_r1.chantier);
    \u0275\u0275advance();
    \u0275\u0275classMap(op_r1.type === "Recette" ? "fw-bold" : "fw-med");
    \u0275\u0275styleProp("color", op_r1.type === "Recette" ? "#27ae60" : "#e74c3c");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", op_r1.type === "Recette" ? "+" : "-", " ", ctx_r1.formatMoney(op_r1.montant), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statutClass(op_r1.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(op_r1.statut);
  }
}
function ComptabiliteComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2, "Aucune op\xE9ration.");
    \u0275\u0275elementEnd()();
  }
}
function ComptabiliteComponent_Conditional_70_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4);
  }
}
function ComptabiliteComponent_Conditional_70_For_45_Template(rf, ctx) {
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
function ComptabiliteComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function ComptabiliteComponent_Conditional_70_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275listener("click", function ComptabiliteComponent_Conditional_70_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 31)(3, "span", 32);
    \u0275\u0275text(4, "Nouvelle op\xE9ration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 33);
    \u0275\u0275listener("click", function ComptabiliteComponent_Conditional_70_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34)(7, "div", 35)(8, "div", 36)(9, "label", 37);
    \u0275\u0275text(10, "Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ComptabiliteComponent_Conditional_70_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option");
    \u0275\u0275text(13, "Recette");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option");
    \u0275\u0275text(15, "D\xE9pense");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 36)(17, "label", 37);
    \u0275\u0275text(18, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ComptabiliteComponent_Conditional_70_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.categorie, $event) || (ctx_r1.form.categorie = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(20, ComptabiliteComponent_Conditional_70_For_21_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 36)(23, "label", 37);
    \u0275\u0275text(24, "Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ComptabiliteComponent_Conditional_70_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 35)(27, "div", 36)(28, "label", 37);
    \u0275\u0275text(29, "Montant (FCFA) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ComptabiliteComponent_Conditional_70_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.montant, $event) || (ctx_r1.form.montant = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 36)(32, "label", 37);
    \u0275\u0275text(33, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ComptabiliteComponent_Conditional_70_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.date, $event) || (ctx_r1.form.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 35)(36, "div", 36)(37, "label", 37);
    \u0275\u0275text(38, "Chantier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ComptabiliteComponent_Conditional_70_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.chantier, $event) || (ctx_r1.form.chantier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 36)(41, "label", 37);
    \u0275\u0275text(42, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ComptabiliteComponent_Conditional_70_Template_select_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.statut, $event) || (ctx_r1.form.statut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(44, ComptabiliteComponent_Conditional_70_For_45_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 43)(47, "button", 44);
    \u0275\u0275listener("click", function ComptabiliteComponent_Conditional_70_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275text(48, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 5);
    \u0275\u0275listener("click", function ComptabiliteComponent_Conditional_70_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addOperation());
    });
    \u0275\u0275text(50, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.type);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.categorie);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.montant);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.date);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.chantier);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.statut);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statuts);
  }
}
var ComptabiliteComponent = class _ComptabiliteComponent {
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
  operations = [
    { id: "1", date: "2024-04-15", type: "Recette", categorie: "Acompte client", description: "Acompte 30% \u2014 SCI Palmiers CH-001", chantier: "CH-001", montant: 255e5, statut: "Pay\xE9e" },
    { id: "2", date: "2024-04-10", type: "Recette", categorie: "Solde facture", description: "Situation travaux N\xB03 \u2014 Minist\xE8re RN4", chantier: "CH-003", montant: 4e7, statut: "Pay\xE9e" },
    { id: "3", date: "2024-04-08", type: "D\xE9pense", categorie: "Achat mat\xE9riaux", description: "Commande ciment 500 sacs \u2014 CIMFASO", chantier: "CH-001", montant: 375e4, statut: "Pay\xE9e" },
    { id: "4", date: "2024-04-05", type: "D\xE9pense", categorie: "Salaires", description: "Salaires avril 2024", chantier: "\u2014", montant: 825e4, statut: "Pay\xE9e" },
    { id: "5", date: "2024-04-01", type: "Recette", categorie: "Acompte client", description: "D\xE9marrage CH-002 \u2014 SARL Immobuild", chantier: "CH-002", montant: 36e6, statut: "Pay\xE9e" },
    { id: "6", date: "2024-03-28", type: "D\xE9pense", categorie: "Location engin", description: "Location pelleteuse CAT 320 \u2014 15 jours", chantier: "CH-004", montant: 225e4, statut: "Pay\xE9e" },
    { id: "7", date: "2024-03-25", type: "D\xE9pense", categorie: "Sous-traitance", description: "Acompte \xC9lectro BF SARL", chantier: "CH-001", montant: 255e4, statut: "Pay\xE9e" },
    { id: "8", date: "2024-03-20", type: "Recette", categorie: "Solde facture", description: "Situation travaux N\xB05 \u2014 Mairie Kossodo", chantier: "CH-005", montant: 96e5, statut: "En attente" },
    { id: "9", date: "2024-03-15", type: "D\xE9pense", categorie: "Achat mat\xE9riaux", description: "Ferraille HA10 & HA12 \u2014 ACOFASO", chantier: "CH-002", montant: 56e5, statut: "Pay\xE9e" },
    { id: "10", date: "2024-03-10", type: "Recette", categorie: "Solde facture", description: "Situation travaux N\xB08 \u2014 SCI Palmiers", chantier: "CH-001", montant: 17e6, statut: "En retard" },
    { id: "11", date: "2024-03-05", type: "D\xE9pense", categorie: "Frais g\xE9n\xE9raux", description: "Carburant parc engins \u2014 mars", chantier: "\u2014", montant: 185e4, statut: "Pay\xE9e" },
    { id: "12", date: "2024-02-28", type: "D\xE9pense", categorie: "Taxes & imp\xF4ts", description: "Patente + TVA Q1 2024", chantier: "\u2014", montant: 42e5, statut: "Pay\xE9e" }
  ];
  get filtered() {
    const t = this.activeTab();
    if (t === "recettes")
      return this.operations.filter((o) => o.type === "Recette");
    if (t === "depenses")
      return this.operations.filter((o) => o.type === "D\xE9pense");
    if (t === "impayees")
      return this.operations.filter((o) => o.statut === "En attente" || o.statut === "En retard" || o.statut === "Partiellement pay\xE9e");
    return this.operations;
  }
  get totalRecettes() {
    return this.operations.filter((o) => o.type === "Recette").reduce((s, o) => s + o.montant, 0);
  }
  get totalDepenses() {
    return this.operations.filter((o) => o.type === "D\xE9pense").reduce((s, o) => s + o.montant, 0);
  }
  get solde() {
    return this.totalRecettes - this.totalDepenses;
  }
  get totalImpaye() {
    return this.operations.filter((o) => o.statut === "En attente" || o.statut === "En retard").reduce((s, o) => s + o.montant, 0);
  }
  formatMoney(n) {
    if (n >= 1e6)
      return (n / 1e6).toFixed(1) + " M";
    if (n >= 1e3)
      return (n / 1e3).toFixed(0) + " K";
    return n.toString();
  }
  typeClass(t) {
    return t === "Recette" ? "badge badge--green" : "badge badge--red";
  }
  statutClass(s) {
    const m = {
      "Pay\xE9e": "badge badge--green",
      "En attente": "badge badge--yellow",
      "En retard": "badge badge--red",
      "Partiellement pay\xE9e": "badge badge--orange"
    };
    return m[s];
  }
  addOperation() {
    if (!this.form.description || !this.form.montant)
      return;
    this.operations.unshift(__spreadValues({ id: Date.now().toString() }, this.form));
    this.form = this.emptyForm();
    this.showForm.set(false);
  }
  emptyForm() {
    return { date: "", type: "Recette", categorie: "Acompte client", description: "", chantier: "", montant: 0, statut: "En attente" };
  }
  categories = ["Acompte client", "Solde facture", "Achat mat\xE9riaux", "Salaires", "Location engin", "Sous-traitance", "Frais g\xE9n\xE9raux", "Taxes & imp\xF4ts", "Autre"];
  statuts = ["Pay\xE9e", "En attente", "En retard", "Partiellement pay\xE9e"];
  constructor(store) {
    this.store = store;
  }
  static \u0275fac = function ComptabiliteComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComptabiliteComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComptabiliteComponent, selectors: [["app-comptabilite"]], decls: 71, vars: 21, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "kpi-grid", 2, "grid-template-columns", "repeat(4,1fr)"], [1, "kpi-card", 2, "border-left-color", "#27ae60"], [1, "kpi-card__icon", 2, "background", "#d5f5e3"], [1, "kpi-card__body"], [1, "kpi-card__value", 2, "color", "#27ae60"], [1, "kpi-card__label"], [1, "kpi-card", 2, "border-left-color", "#e74c3c"], [1, "kpi-card__icon", 2, "background", "#fdecea"], [1, "kpi-card__value", 2, "color", "#e74c3c"], [1, "kpi-card"], [1, "kpi-card__icon", 2, "background", "#fef0e7"], [1, "kpi-card__value"], [1, "kpi-card", 2, "border-left-color", "#d35400"], [1, "kpi-card__icon", 2, "background", "#fef5e7"], [1, "kpi-card__value", 2, "color", "#d35400"], [1, "tabs"], [1, "tab", 3, "click"], [1, "table-wrap"], [1, "table"], [1, "modal-overlay"], [1, "text-muted"], [1, "fw-med"], ["colspan", "7", 2, "text-align", "center", "color", "#aaa", "padding", "32px", "font-style", "italic"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal--wide", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], [1, "field__select", 3, "ngModelChange", "ngModel"], ["placeholder", "Description de l'op\xE9ration", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "0", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "ex: CH-001", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "modal__foot"], [1, "btn", "btn--ghost", 3, "click"]], template: function ComptabiliteComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Comptabilit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function ComptabiliteComponent_Template_button_click_8_listener() {
        return ctx.showForm.set(true);
      });
      \u0275\u0275text(9, "+ Nouvelle op\xE9ration");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7);
      \u0275\u0275element(12, "div", 8);
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 11);
      \u0275\u0275text(17, "Recettes (FCFA)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 12);
      \u0275\u0275element(19, "div", 13);
      \u0275\u0275elementStart(20, "div", 9)(21, "div", 14);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 11);
      \u0275\u0275text(24, "D\xE9penses (FCFA)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15);
      \u0275\u0275element(26, "div", 16);
      \u0275\u0275elementStart(27, "div", 9)(28, "div", 17);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 11);
      \u0275\u0275text(31, "Solde");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 18);
      \u0275\u0275element(33, "div", 19);
      \u0275\u0275elementStart(34, "div", 9)(35, "div", 20);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 11);
      \u0275\u0275text(38, "Impay\xE9s");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 21)(40, "button", 22);
      \u0275\u0275listener("click", function ComptabiliteComponent_Template_button_click_40_listener() {
        return ctx.activeTab.set("tout");
      });
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 22);
      \u0275\u0275listener("click", function ComptabiliteComponent_Template_button_click_42_listener() {
        return ctx.activeTab.set("recettes");
      });
      \u0275\u0275text(43, "Recettes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 22);
      \u0275\u0275listener("click", function ComptabiliteComponent_Template_button_click_44_listener() {
        return ctx.activeTab.set("depenses");
      });
      \u0275\u0275text(45, "D\xE9penses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 22);
      \u0275\u0275listener("click", function ComptabiliteComponent_Template_button_click_46_listener() {
        return ctx.activeTab.set("impayees");
      });
      \u0275\u0275text(47, "Impay\xE9es / En retard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 23)(49, "table", 24)(50, "thead")(51, "tr")(52, "th");
      \u0275\u0275text(53, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "th");
      \u0275\u0275text(55, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th");
      \u0275\u0275text(57, "Cat\xE9gorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th");
      \u0275\u0275text(59, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th");
      \u0275\u0275text(61, "Chantier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th");
      \u0275\u0275text(63, "Montant (FCFA)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th");
      \u0275\u0275text(65, "Statut");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "tbody");
      \u0275\u0275repeaterCreate(67, ComptabiliteComponent_For_68_Template, 17, 16, "tr", null, _forTrack0);
      \u0275\u0275conditionalCreate(69, ComptabiliteComponent_Conditional_69_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(70, ComptabiliteComponent_Conditional_70_Template, 51, 7, "div", 25);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("Solde : ", ctx.formatMoney(ctx.solde), " FCFA \xB7 ", ctx.formatMoney(ctx.totalImpaye), " \xE0 encaisser");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.formatMoney(ctx.totalRecettes));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.formatMoney(ctx.totalDepenses));
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("border-left-color", ctx.solde >= 0 ? "#27ae60" : "#e74c3c");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("color", ctx.solde >= 0 ? "#27ae60" : "#e74c3c");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.formatMoney(ctx.solde));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.formatMoney(ctx.totalImpaye));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab() === "tout");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Tout (", ctx.operations.length, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "recettes");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "depenses");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "impayees");
      \u0275\u0275advance(21);
      \u0275\u0275repeater(ctx.filtered);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filtered.length === 0 ? 69 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm() ? 70 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff5ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbfc;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a8fa8;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 680px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=comptabilite.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComptabiliteComponent, [{
    type: Component,
    args: [{ selector: "app-comptabilite", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page"> <header class="page__header"> <div> <h1 class="page__title">Comptabilit\xE9</h1> <p class="page__sub">Solde : {{ formatMoney(solde) }} FCFA \xB7 {{ formatMoney(totalImpaye) }} \xE0 encaisser</p> </div> <div class="page__actions"> <button class="btn btn--primary" (click)="showForm.set(true)">+ Nouvelle op\xE9ration</button> </div> </header> <!-- KPIs --> <div class="kpi-grid" style="grid-template-columns:repeat(4,1fr);"> <div class="kpi-card" style="border-left-color:#27ae60;"> <div class="kpi-card__icon" style="background:#d5f5e3;"></div> <div class="kpi-card__body"> <div class="kpi-card__value" style="color:#27ae60;">{{ formatMoney(totalRecettes) }}</div> <div class="kpi-card__label">Recettes (FCFA)</div> </div> </div> <div class="kpi-card" style="border-left-color:#e74c3c;"> <div class="kpi-card__icon" style="background:#fdecea;"></div> <div class="kpi-card__body"> <div class="kpi-card__value" style="color:#e74c3c;">{{ formatMoney(totalDepenses) }}</div> <div class="kpi-card__label">D\xE9penses (FCFA)</div> </div> </div> <div class="kpi-card" [style.border-left-color]="solde >= 0 ? '#27ae60' : '#e74c3c'"> <div class="kpi-card__icon" style="background:#fef0e7;"></div> <div class="kpi-card__body"> <div class="kpi-card__value" [style.color]="solde >= 0 ? '#27ae60' : '#e74c3c'">{{ formatMoney(solde) }}</div> <div class="kpi-card__label">Solde</div> </div> </div> <div class="kpi-card" style="border-left-color:#d35400;"> <div class="kpi-card__icon" style="background:#fef5e7;"></div> <div class="kpi-card__body"> <div class="kpi-card__value" style="color:#d35400;">{{ formatMoney(totalImpaye) }}</div> <div class="kpi-card__label">Impay\xE9s</div> </div> </div> </div> <!-- Tabs --> <div class="tabs"> <button class="tab" [class.active]="activeTab()==='tout'"(click)="activeTab.set('tout')">Tout ({{ operations.length }})</button> <button class="tab" [class.active]="activeTab()==='recettes'" (click)="activeTab.set('recettes')">Recettes</button> <button class="tab" [class.active]="activeTab()==='depenses'" (click)="activeTab.set('depenses')">D\xE9penses</button> <button class="tab" [class.active]="activeTab()==='impayees'" (click)="activeTab.set('impayees')">Impay\xE9es / En retard</button> </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Date</th> <th>Type</th> <th>Cat\xE9gorie</th> <th>Description</th> <th>Chantier</th> <th>Montant (FCFA)</th> <th>Statut</th> </tr> </thead> <tbody> @for (op of filtered; track op.id) {
          <tr> <td class="text-muted">{{ op.date }}</td> <td><span [class]="typeClass(op.type)">{{ op.type }}</span></td> <td class="text-muted">{{ op.categorie }}</td> <td class="fw-med">{{ op.description }}</td> <td class="text-muted">{{ op.chantier }}</td> <td [class]="op.type === 'Recette' ? 'fw-bold' : 'fw-med'" [style.color]="op.type === 'Recette' ? '#27ae60' : '#e74c3c'"> {{ op.type === 'Recette' ? '+' : '-' }} {{ formatMoney(op.montant) }}
            </td> <td><span [class]="statutClass(op.statut)">{{ op.statut }}</span></td> </tr> }
        @if (filtered.length === 0) {
          <tr><td colspan="7" style="text-align:center;color:#aaa;padding:32px;font-style:italic;">Aucune op\xE9ration.</td></tr> }
      </tbody> </table> </div>
</div> @if (showForm()) {
  <div class="modal-overlay" (click)="showForm.set(false)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Nouvelle op\xE9ration</span> <button class="modal__close" (click)="showForm.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"> <label class="field__label">Type *</label> <select [(ngModel)]="form.type" class="field__select"> <option>Recette</option> <option>D\xE9pense</option> </select> </div> <div class="field"> <label class="field__label">Cat\xE9gorie</label> <select [(ngModel)]="form.categorie" class="field__select"> @for (c of categories; track c) { <option>{{ c }}</option> }
            </select> </div> </div> <div class="field"> <label class="field__label">Description *</label> <input [(ngModel)]="form.description" class="field__input" placeholder="Description de l'op\xE9ration" /> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Montant (FCFA) *</label> <input [(ngModel)]="form.montant" type="number" class="field__input" placeholder="0" /> </div> <div class="field"> <label class="field__label">Date</label> <input [(ngModel)]="form.date" type="date" class="field__input" /> </div> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Chantier</label> <input [(ngModel)]="form.chantier" class="field__input" placeholder="ex: CH-001" /> </div> <div class="field"> <label class="field__label">Statut</label> <select [(ngModel)]="form.statut" class="field__select"> @for (s of statuts; track s) { <option>{{ s }}</option> }
            </select> </div> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showForm.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addOperation()">Enregistrer</button> </div> </div> </div>
}
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-construction/src/app/pages/comptabilite/comptabilite.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff5ee;\n}\n.btn--danger {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbfc;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted {\n  color: #8a8fa8;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 680px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=comptabilite.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComptabiliteComponent, { className: "ComptabiliteComponent", filePath: "app/pages/comptabilite/comptabilite.component.ts", lineNumber: 28 });
})();
export {
  ComptabiliteComponent
};
//# sourceMappingURL=chunk-QLCE7QXZ.js.map
