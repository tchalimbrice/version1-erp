import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-GCMEAXU6.js";
import {
  CollabStoreService
} from "./chunk-2Q2UPMO2.js";
import {
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
} from "./chunk-PVSPOVDN.js";

// projects/gestion-logistique/src/app/pages/facturation/facturation.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function FacturationComponent_For_62_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function FacturationComponent_For_62_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const f_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.marquerPaye(f_r2));
    });
    \u0275\u0275text(1, "Marquer pay\xE9e");
    \u0275\u0275elementEnd();
  }
}
function FacturationComponent_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 27);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275conditionalCreate(19, FacturationComponent_For_62_Conditional_19_Template, 2, 0, "button", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r2.numero);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r2.client);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r2.commande);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(f_r2.montantTTC));
    \u0275\u0275advance();
    \u0275\u0275classMap(f_r2.montantPaye >= f_r2.montantTTC ? "text-muted" : "fw-med");
    \u0275\u0275styleProp("color", f_r2.montantPaye >= f_r2.montantTTC ? "" : "#27ae60");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.fmt(f_r2.montantPaye));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", f_r2.montantTTC - f_r2.montantPaye > 0 ? "#e74c3c" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.fmt(f_r2.montantTTC - f_r2.montantPaye));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r2.dateEcheance);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.statutClass(f_r2.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r2.statut);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(f_r2.statut !== "Pay\xE9e" && f_r2.statut !== "Annul\xE9e" ? 19 : -1);
  }
}
function FacturationComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2, "Aucune facture.");
    \u0275\u0275elementEnd()();
  }
}
function FacturationComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function FacturationComponent_Conditional_64_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 32);
    \u0275\u0275listener("click", function FacturationComponent_Conditional_64_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 33)(3, "span", 34);
    \u0275\u0275text(4, "Nouvelle facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 35);
    \u0275\u0275listener("click", function FacturationComponent_Conditional_64_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36)(7, "div", 37)(8, "div", 38)(9, "label", 39);
    \u0275\u0275text(10, "Client *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function FacturationComponent_Conditional_64_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.client, $event) || (ctx_r2.form.client = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 38)(13, "label", 39);
    \u0275\u0275text(14, "N\xB0 Commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function FacturationComponent_Conditional_64_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.commande, $event) || (ctx_r2.form.commande = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 37)(17, "div", 38)(18, "label", 39);
    \u0275\u0275text(19, "Montant HT (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function FacturationComponent_Conditional_64_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.montantHT, $event) || (ctx_r2.form.montantHT = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 38)(22, "label", 39);
    \u0275\u0275text(23, "TVA (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function FacturationComponent_Conditional_64_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.tva, $event) || (ctx_r2.form.tva = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 37)(26, "div", 38)(27, "label", 39);
    \u0275\u0275text(28, "Date \xE9mission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function FacturationComponent_Conditional_64_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.dateEmission, $event) || (ctx_r2.form.dateEmission = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 38)(31, "label", 39);
    \u0275\u0275text(32, "Date \xE9ch\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function FacturationComponent_Conditional_64_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.dateEcheance, $event) || (ctx_r2.form.dateEcheance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 38)(35, "label", 39);
    \u0275\u0275text(36, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "textarea", 43);
    \u0275\u0275twoWayListener("ngModelChange", function FacturationComponent_Conditional_64_Template_textarea_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.notes, $event) || (ctx_r2.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 44)(39, "button", 45);
    \u0275\u0275listener("click", function FacturationComponent_Conditional_64_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm.set(false));
    });
    \u0275\u0275text(40, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 5);
    \u0275\u0275listener("click", function FacturationComponent_Conditional_64_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addFacture());
    });
    \u0275\u0275text(42, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.client);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.commande);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.montantHT);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.tva);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.dateEmission);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.dateEcheance);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.notes);
  }
}
var FacturationComponent = class _FacturationComponent {
  store;
  activeTab = signal("tout", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.empty();
  factures = [
    { id: "1", numero: "FAC-2024-001", client: "SuperMart SA", commande: "CMD-2024-001", dateEmission: "2024-04-01", dateEcheance: "2024-04-30", montantHT: 157627, tva: 18, montantTTC: 185e3, montantPaye: 185e3, statut: "Pay\xE9e", notes: "" },
    { id: "2", numero: "FAC-2024-002", client: "Pharmavie SARL", commande: "CMD-2024-002", dateEmission: "2024-04-05", dateEcheance: "2024-04-20", montantHT: 80508, tva: 18, montantTTC: 95e3, montantPaye: 95e3, statut: "Pay\xE9e", notes: "" },
    { id: "3", numero: "FAC-2024-003", client: "BTP Mat\xE9riaux", commande: "CMD-2024-003", dateEmission: "2024-04-10", dateEcheance: "2024-05-10", montantHT: 355932, tva: 18, montantTTC: 42e4, montantPaye: 2e5, statut: "Partiellement pay\xE9e", notes: "Acompte 50% re\xE7u" },
    { id: "4", numero: "FAC-2024-004", client: "AgriSud BF", commande: "CMD-2024-004", dateEmission: "2024-04-08", dateEcheance: "2024-04-23", montantHT: 178e3, tva: 18, montantTTC: 21e4, montantPaye: 0, statut: "En retard", notes: "Relance envoy\xE9e" },
    { id: "5", numero: "FAC-2024-005", client: "Importex SARL", commande: "CMD-2024-005", dateEmission: "2024-04-02", dateEcheance: "2024-04-17", montantHT: 237288, tva: 18, montantTTC: 28e4, montantPaye: 28e4, statut: "Pay\xE9e", notes: "" },
    { id: "6", numero: "FAC-2024-006", client: "Minoterie BF", commande: "CMD-2024-006", dateEmission: "2024-04-12", dateEcheance: "2024-05-12", montantHT: 165254, tva: 18, montantTTC: 195e3, montantPaye: 0, statut: "En attente", notes: "" },
    { id: "7", numero: "FAC-2024-007", client: "TotalEnergies BF", commande: "CMD-2024-007", dateEmission: "2024-04-08", dateEcheance: "2024-05-08", montantHT: 720339, tva: 18, montantTTC: 85e4, montantPaye: 425e3, statut: "Partiellement pay\xE9e", notes: "" },
    { id: "8", numero: "FAC-2024-008", client: "Boulangerie Moderne", commande: "CMD-2024-008", dateEmission: "2024-04-15", dateEcheance: "2024-04-22", montantHT: 35593, tva: 18, montantTTC: 42e3, montantPaye: 42e3, statut: "Pay\xE9e", notes: "" }
  ];
  get filtered() {
    const t = this.activeTab();
    if (t === "impayee")
      return this.factures.filter((f) => f.statut !== "Pay\xE9e" && f.statut !== "Annul\xE9e");
    if (t === "payee")
      return this.factures.filter((f) => f.statut === "Pay\xE9e");
    return this.factures;
  }
  get totalTTC() {
    return this.factures.reduce((s, f) => s + f.montantTTC, 0);
  }
  get totalPaye() {
    return this.factures.reduce((s, f) => s + f.montantPaye, 0);
  }
  get totalImpaye() {
    return this.totalTTC - this.totalPaye;
  }
  fmt(n) {
    return n >= 1e6 ? (n / 1e6).toFixed(1) + " M" : n >= 1e3 ? (n / 1e3).toFixed(0) + " K" : n.toString();
  }
  statutClass(s) {
    const m = {
      "Pay\xE9e": "badge badge--green",
      "En attente": "badge badge--yellow",
      "En retard": "badge badge--red",
      "Partiellement pay\xE9e": "badge badge--orange",
      "Annul\xE9e": "badge badge--gray"
    };
    return m[s];
  }
  marquerPaye(f) {
    f.montantPaye = f.montantTTC;
    f.statut = "Pay\xE9e";
  }
  addFacture() {
    if (!this.form.client)
      return;
    const num = this.factures.length + 1;
    const ttc = this.form.montantHT * (1 + this.form.tva / 100);
    this.factures.unshift(__spreadValues({ id: Date.now().toString(), numero: "FAC-2024-" + String(num).padStart(3, "0"), montantTTC: Math.round(ttc) }, this.form));
    this.form = this.empty();
    this.showForm.set(false);
  }
  empty() {
    return { client: "", commande: "", dateEmission: "", dateEcheance: "", montantHT: 0, tva: 18, montantPaye: 0, statut: "En attente", notes: "" };
  }
  statuts = ["En attente", "Partiellement pay\xE9e", "Pay\xE9e", "En retard", "Annul\xE9e"];
  constructor(store) {
    this.store = store;
  }
  static \u0275fac = function FacturationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FacturationComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacturationComponent, selectors: [["app-facturation"]], decls: 65, vars: 14, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "kpi-grid", 2, "grid-template-columns", "repeat(3,1fr)"], [1, "kpi-card", 2, "border-left-color", "#27ae60"], [1, "kpi-card__icon", 2, "background", "#d5f5e3"], [1, "kpi-card__body"], [1, "kpi-card__value", 2, "color", "#27ae60"], [1, "kpi-card__label"], [1, "kpi-card", 2, "border-left-color", "#e74c3c"], [1, "kpi-card__icon", 2, "background", "#fdecea"], [1, "kpi-card__value", 2, "color", "#e74c3c"], [1, "kpi-card", 2, "border-left-color", "#3498db"], [1, "kpi-card__icon", 2, "background", "#d6eaf8"], [1, "kpi-card__value", 2, "color", "#3498db"], [1, "tabs"], [1, "tab", 3, "click"], [1, "table-wrap"], [1, "table"], [1, "modal-overlay"], [1, "mono"], [1, "fw-med"], [1, "text-muted", "text-sm"], [1, "fw-bold"], [1, "text-muted"], [1, "btn", "btn--outline", 2, "padding", "5px 10px", "font-size", "12px"], [1, "btn", "btn--outline", 2, "padding", "5px 10px", "font-size", "12px", 3, "click"], ["colspan", "9", 2, "text-align", "center", "color", "#aaa", "padding", "32px", "font-style", "italic"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal--wide", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], [1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field__textarea", 3, "ngModelChange", "ngModel"], [1, "modal__foot"], [1, "btn", "btn--ghost", 3, "click"]], template: function FacturationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Facturation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function FacturationComponent_Template_button_click_8_listener() {
        return ctx.showForm.set(true);
      });
      \u0275\u0275text(9, "+ Nouvelle facture");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7);
      \u0275\u0275element(12, "div", 8);
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 11);
      \u0275\u0275text(17, "Encaiss\xE9 (FCFA)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 12);
      \u0275\u0275element(19, "div", 13);
      \u0275\u0275elementStart(20, "div", 9)(21, "div", 14);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 11);
      \u0275\u0275text(24, "Impay\xE9 (FCFA)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15);
      \u0275\u0275element(26, "div", 16);
      \u0275\u0275elementStart(27, "div", 9)(28, "div", 17);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 11);
      \u0275\u0275text(31, "CA factur\xE9 (FCFA)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 18)(33, "button", 19);
      \u0275\u0275listener("click", function FacturationComponent_Template_button_click_33_listener() {
        return ctx.activeTab.set("tout");
      });
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "button", 19);
      \u0275\u0275listener("click", function FacturationComponent_Template_button_click_35_listener() {
        return ctx.activeTab.set("impayee");
      });
      \u0275\u0275text(36, "Impay\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "button", 19);
      \u0275\u0275listener("click", function FacturationComponent_Template_button_click_37_listener() {
        return ctx.activeTab.set("payee");
      });
      \u0275\u0275text(38, "Pay\xE9es");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 20)(40, "table", 21)(41, "thead")(42, "tr")(43, "th");
      \u0275\u0275text(44, "N\xB0 Facture");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th");
      \u0275\u0275text(46, "Client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th");
      \u0275\u0275text(48, "Commande");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th");
      \u0275\u0275text(50, "Montant TTC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th");
      \u0275\u0275text(52, "Pay\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th");
      \u0275\u0275text(54, "Reste");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th");
      \u0275\u0275text(56, "\xC9ch\xE9ance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th");
      \u0275\u0275text(58, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "tbody");
      \u0275\u0275repeaterCreate(61, FacturationComponent_For_62_Template, 20, 17, "tr", null, _forTrack0);
      \u0275\u0275conditionalCreate(63, FacturationComponent_Conditional_63_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(64, FacturationComponent_Conditional_64_Template, 43, 7, "div", 22);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.fmt(ctx.totalPaye), " encaiss\xE9 \xB7 ", ctx.fmt(ctx.totalImpaye), " en attente");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.fmt(ctx.totalPaye));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.fmt(ctx.totalImpaye));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.fmt(ctx.totalTTC));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab() === "tout");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Toutes (", ctx.factures.length, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "impayee");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "payee");
      \u0275\u0275advance(24);
      \u0275\u0275repeater(ctx.filtered);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filtered.length === 0 ? 63 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm() ? 64 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0d2137;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #1a6fa8);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #3498db;\n  border: 1.5px solid #3498db;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #eaf4fd;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f0f4f8;\n  color: #555;\n  border: 1.5px solid #dde5ef;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #0d2137;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #3498db;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f7fafc;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f4f8;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafcff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0d2137;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0d2137;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #3498db;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #e8eef4;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #1a6fa8);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #dde5ef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #3498db;\n  color: #3498db;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #3498db;\n  border-color: #3498db;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f4f8;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0d2137;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f4f8;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=facturation.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacturationComponent, [{
    type: Component,
    args: [{ selector: "app-facturation", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page"> <header class="page__header"> <div> <h1 class="page__title">Facturation</h1> <p class="page__sub">{{ fmt(totalPaye) }} encaiss\xE9 \xB7 {{ fmt(totalImpaye) }} en attente</p> </div> <div class="page__actions"> <button class="btn btn--primary" (click)="showForm.set(true)">+ Nouvelle facture</button> </div> </header> <div class="kpi-grid" style="grid-template-columns:repeat(3,1fr);"> <div class="kpi-card" style="border-left-color:#27ae60;"> <div class="kpi-card__icon" style="background:#d5f5e3;"></div> <div class="kpi-card__body"> <div class="kpi-card__value" style="color:#27ae60;">{{ fmt(totalPaye) }}</div> <div class="kpi-card__label">Encaiss\xE9 (FCFA)</div> </div> </div> <div class="kpi-card" style="border-left-color:#e74c3c;"> <div class="kpi-card__icon" style="background:#fdecea;"></div> <div class="kpi-card__body"> <div class="kpi-card__value" style="color:#e74c3c;">{{ fmt(totalImpaye) }}</div> <div class="kpi-card__label">Impay\xE9 (FCFA)</div> </div> </div> <div class="kpi-card" style="border-left-color:#3498db;"> <div class="kpi-card__icon" style="background:#d6eaf8;"></div> <div class="kpi-card__body"> <div class="kpi-card__value" style="color:#3498db;">{{ fmt(totalTTC) }}</div> <div class="kpi-card__label">CA factur\xE9 (FCFA)</div> </div> </div> </div> <div class="tabs"> <button class="tab" [class.active]="activeTab()==='tout'"(click)="activeTab.set('tout')">Toutes ({{ factures.length }})</button> <button class="tab" [class.active]="activeTab()==='impayee'" (click)="activeTab.set('impayee')">Impay\xE9es</button> <button class="tab" [class.active]="activeTab()==='payee'"(click)="activeTab.set('payee')">Pay\xE9es</button> </div> <div class="table-wrap"> <table class="table"> <thead><tr><th>N\xB0 Facture</th><th>Client</th><th>Commande</th><th>Montant TTC</th><th>Pay\xE9</th><th>Reste</th><th>\xC9ch\xE9ance</th><th>Statut</th><th></th></tr></thead> <tbody> @for (f of filtered; track f.id) {
          <tr> <td class="mono">{{ f.numero }}</td> <td class="fw-med">{{ f.client }}</td> <td class="text-muted text-sm">{{ f.commande }}</td> <td class="fw-bold">{{ fmt(f.montantTTC) }}</td> <td [class]="f.montantPaye>=f.montantTTC ? 'text-muted' : 'fw-med'" [style.color]="f.montantPaye>=f.montantTTC ? '' : '#27ae60'">{{ fmt(f.montantPaye) }}</td> <td [style.color]="f.montantTTC-f.montantPaye>0?'#e74c3c':''">{{ fmt(f.montantTTC - f.montantPaye) }}</td> <td class="text-muted">{{ f.dateEcheance }}</td> <td><span [class]="statutClass(f.statut)">{{ f.statut }}</span></td> <td> @if (f.statut !== 'Pay\xE9e' && f.statut !== 'Annul\xE9e') {
                <button class="btn btn--outline" style="padding:5px 10px;font-size:12px;" (click)="marquerPaye(f)">Marquer pay\xE9e</button> }
            </td> </tr> }
        @if (filtered.length === 0) { <tr><td colspan="9" style="text-align:center;color:#aaa;padding:32px;font-style:italic;">Aucune facture.</td></tr> }
      </tbody> </table> </div>
</div> @if (showForm()) {
  <div class="modal-overlay" (click)="showForm.set(false)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"><span class="modal__title">Nouvelle facture</span><button class="modal__close" (click)="showForm.set(false)"></button></div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Client *</label><input [(ngModel)]="form.client" class="field__input" /></div> <div class="field"><label class="field__label">N\xB0 Commande</label><input [(ngModel)]="form.commande" class="field__input" /></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Montant HT (FCFA)</label><input [(ngModel)]="form.montantHT" type="number" class="field__input" /></div> <div class="field"><label class="field__label">TVA (%)</label><input [(ngModel)]="form.tva" type="number" class="field__input" /></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Date \xE9mission</label><input [(ngModel)]="form.dateEmission" type="date" class="field__input" /></div> <div class="field"><label class="field__label">Date \xE9ch\xE9ance</label><input [(ngModel)]="form.dateEcheance" type="date" class="field__input" /></div> </div> <div class="field"><label class="field__label">Notes</label><textarea [(ngModel)]="form.notes" class="field__textarea"></textarea></div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showForm.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addFacture()">Enregistrer</button> </div> </div> </div>
}
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-logistique/src/app/pages/facturation/facturation.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0d2137;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #1a6fa8);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #3498db;\n  border: 1.5px solid #3498db;\n}\n.btn--outline:hover {\n  background: #eaf4fd;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f0f4f8;\n  color: #555;\n  border: 1.5px solid #dde5ef;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.card__link {\n  font-size: 12px;\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #0d2137;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #3498db;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f7fafc;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f4f8;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafcff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #0d2137;\n}\n.fw-med {\n  font-weight: 600;\n  color: #0d2137;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #3498db;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #e8eef4;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #1a6fa8);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #dde5ef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #3498db;\n  color: #3498db;\n}\n.tab.active {\n  background: #3498db;\n  border-color: #3498db;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.search-input:focus {\n  border-color: #3498db;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f4f8;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0d2137;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f4f8;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #3498db;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=facturation.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacturationComponent, { className: "FacturationComponent", filePath: "app/pages/facturation/facturation.component.ts", lineNumber: 16 });
})();
export {
  FacturationComponent
};
//# sourceMappingURL=chunk-SNWC7HDJ.js.map
