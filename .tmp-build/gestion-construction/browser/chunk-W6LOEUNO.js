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

// projects/gestion-construction/src/app/pages/devis/devis.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DevisComponent_For_41_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td")(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 13);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 13);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r1.numero);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r1.client);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r1.chantier);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatMoney(d_r1.montant));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r1.dateEmission);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r1.dateValidite);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statutClass(d_r1.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1.statut);
  }
}
function DevisComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16);
    \u0275\u0275text(2, "Aucun document.");
    \u0275\u0275elementEnd()();
  }
}
function DevisComponent_Conditional_43_For_22_Template(rf, ctx) {
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
function DevisComponent_Conditional_43_For_41_Template(rf, ctx) {
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
function DevisComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function DevisComponent_Conditional_43_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275listener("click", function DevisComponent_Conditional_43_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 19)(3, "span", 20);
    \u0275\u0275text(4, "Nouveau devis / contrat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function DevisComponent_Conditional_43_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "div", 23)(8, "div", 24)(9, "label", 25);
    \u0275\u0275text(10, "Client *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function DevisComponent_Conditional_43_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.client, $event) || (ctx_r1.form.client = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 24)(13, "label", 25);
    \u0275\u0275text(14, "Chantier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function DevisComponent_Conditional_43_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.chantier, $event) || (ctx_r1.form.chantier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 23)(17, "div", 24)(18, "label", 25);
    \u0275\u0275text(19, "Type de document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function DevisComponent_Conditional_43_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(21, DevisComponent_Conditional_43_For_22_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 24)(24, "label", 25);
    \u0275\u0275text(25, "Montant (FCFA) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function DevisComponent_Conditional_43_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.montant, $event) || (ctx_r1.form.montant = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 23)(28, "div", 24)(29, "label", 25);
    \u0275\u0275text(30, "Date d'\xE9mission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function DevisComponent_Conditional_43_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateEmission, $event) || (ctx_r1.form.dateEmission = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 24)(33, "label", 25);
    \u0275\u0275text(34, "Date de validit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function DevisComponent_Conditional_43_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateValidite, $event) || (ctx_r1.form.dateValidite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 24)(37, "label", 25);
    \u0275\u0275text(38, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function DevisComponent_Conditional_43_Template_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.statut, $event) || (ctx_r1.form.statut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(40, DevisComponent_Conditional_43_For_41_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 24)(43, "label", 25);
    \u0275\u0275text(44, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "textarea", 31);
    \u0275\u0275twoWayListener("ngModelChange", function DevisComponent_Conditional_43_Template_textarea_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.notes, $event) || (ctx_r1.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 32)(47, "button", 33);
    \u0275\u0275listener("click", function DevisComponent_Conditional_43_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275text(48, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 5);
    \u0275\u0275listener("click", function DevisComponent_Conditional_43_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addDevis());
    });
    \u0275\u0275text(50, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.client);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.chantier);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.types);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.montant);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateEmission);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateValidite);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.statut);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statuts);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.notes);
  }
}
var DevisComponent = class _DevisComponent {
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
  devis = [
    { id: "1", numero: "DV-2024-001", client: "SCI Palmiers", chantier: "R\xE9sidence Les Palmiers", type: "Contrat forfait", montant: 85e6, dateEmission: "2023-12-10", dateValidite: "2024-01-10", statut: "Accept\xE9", notes: "" },
    { id: "2", numero: "DV-2024-002", client: "SARL Immobuild", chantier: "Immeuble Bureau Centre", type: "Contrat s\xE9rie de prix", montant: 12e7, dateEmission: "2024-01-15", dateValidite: "2024-02-15", statut: "Accept\xE9", notes: "" },
    { id: "3", numero: "DV-2024-003", client: "Minist\xE8re Travaux", chantier: "Route Nationale RN4", type: "Contrat forfait", montant: 2e8, dateEmission: "2023-09-01", dateValidite: "2023-10-01", statut: "Accept\xE9", notes: "March\xE9 public" },
    { id: "4", numero: "DV-2024-004", client: "TransAfric SARL", chantier: "Entrep\xF4t Logistique", type: "Contrat forfait", montant: 55e6, dateEmission: "2024-02-20", dateValidite: "2024-03-20", statut: "Accept\xE9", notes: "" },
    { id: "5", numero: "DV-2024-005", client: "Groupe H\xF4telier ABC", chantier: "H\xF4tel 4 \xE9toiles Ouaga", type: "Devis", montant: 34e7, dateEmission: "2024-03-01", dateValidite: "2024-04-01", statut: "Envoy\xE9", notes: "En attente d\xE9cision CA" },
    { id: "6", numero: "DV-2024-006", client: "BTP R\xE9sidences SA", chantier: "Cit\xE9 50 Logements", type: "Devis", montant: 185e6, dateEmission: "2024-03-15", dateValidite: "2024-04-15", statut: "Envoy\xE9", notes: "" },
    { id: "7", numero: "DV-2024-007", client: "Clinique Sainte-Anne", chantier: "R\xE9habilitation clinique", type: "Devis", montant: 28e6, dateEmission: "2024-04-01", dateValidite: "2024-04-30", statut: "Brouillon", notes: "En cours de chiffrage" },
    { id: "8", numero: "AV-2024-001", client: "SCI Palmiers", chantier: "R\xE9sidence Les Palmiers", type: "Avenant", montant: 45e5, dateEmission: "2024-02-10", dateValidite: "2024-02-28", statut: "Accept\xE9", notes: "Travaux suppl\xE9mentaires sous-sol" },
    { id: "9", numero: "DV-2024-008", client: "Mairie Bobo", chantier: "March\xE9 municipal", type: "Devis", montant: 92e6, dateEmission: "2024-01-20", dateValidite: "2024-02-20", statut: "Refus\xE9", notes: "Prix trop \xE9lev\xE9 selon client" }
  ];
  get filtered() {
    let list = this.devis;
    const t = this.activeTab();
    if (t === "en-attente")
      list = list.filter((d) => d.statut === "Envoy\xE9" || d.statut === "Brouillon");
    if (t === "accepte")
      list = list.filter((d) => d.statut === "Accept\xE9");
    if (t === "refuse")
      list = list.filter((d) => d.statut === "Refus\xE9" || d.statut === "Expir\xE9");
    return list;
  }
  get totalAccepte() {
    return this.devis.filter((d) => d.statut === "Accept\xE9").reduce((s, d) => s + d.montant, 0);
  }
  get totalEnAttente() {
    return this.devis.filter((d) => d.statut === "Envoy\xE9").reduce((s, d) => s + d.montant, 0);
  }
  formatMoney(n) {
    if (n >= 1e6)
      return (n / 1e6).toFixed(1) + " M";
    if (n >= 1e3)
      return (n / 1e3).toFixed(0) + " K";
    return n.toString();
  }
  statutClass(s) {
    const m = {
      "Brouillon": "badge badge--gray",
      "Envoy\xE9": "badge badge--blue",
      "Accept\xE9": "badge badge--green",
      "Refus\xE9": "badge badge--red",
      "Expir\xE9": "badge badge--yellow"
    };
    return m[s];
  }
  addDevis() {
    if (!this.form.client || !this.form.montant)
      return;
    const num = this.devis.length + 1;
    const numero = "DV-2024-" + String(num).padStart(3, "0");
    this.devis.unshift(__spreadValues({ id: Date.now().toString(), numero }, this.form));
    this.form = this.emptyForm();
    this.showForm.set(false);
  }
  emptyForm() {
    return { client: "", chantier: "", type: "Devis", montant: 0, dateEmission: "", dateValidite: "", statut: "Brouillon", notes: "" };
  }
  types = ["Devis", "Contrat forfait", "Contrat s\xE9rie de prix", "Avenant"];
  statuts = ["Brouillon", "Envoy\xE9", "Accept\xE9", "Refus\xE9", "Expir\xE9"];
  constructor(store) {
    this.store = store;
  }
  static \u0275fac = function DevisComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DevisComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DevisComponent, selectors: [["app-devis"]], decls: 44, vars: 13, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "tabs"], [1, "tab", 3, "click"], [1, "table-wrap"], [1, "table"], [1, "modal-overlay"], [1, "mono"], [1, "fw-med"], [1, "text-muted"], [1, "badge", "badge--orange"], [1, "fw-bold"], ["colspan", "8", 2, "text-align", "center", "color", "#aaa", "padding", "32px", "font-style", "italic"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], ["placeholder", "Nom du client", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "Nom du chantier", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field__select", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "0", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "Remarques, conditions particuli\xE8res\u2026", 1, "field__textarea", 3, "ngModelChange", "ngModel"], [1, "modal__foot"], [1, "btn", "btn--ghost", 3, "click"]], template: function DevisComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Devis & Contrats");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function DevisComponent_Template_button_click_8_listener() {
        return ctx.showForm.set(true);
      });
      \u0275\u0275text(9, "+ Nouveau devis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
      \u0275\u0275listener("click", function DevisComponent_Template_button_click_11_listener() {
        return ctx.activeTab.set("tout");
      });
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function DevisComponent_Template_button_click_13_listener() {
        return ctx.activeTab.set("en-attente");
      });
      \u0275\u0275text(14, "En attente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 7);
      \u0275\u0275listener("click", function DevisComponent_Template_button_click_15_listener() {
        return ctx.activeTab.set("accepte");
      });
      \u0275\u0275text(16, "Accept\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 7);
      \u0275\u0275listener("click", function DevisComponent_Template_button_click_17_listener() {
        return ctx.activeTab.set("refuse");
      });
      \u0275\u0275text(18, "Refus\xE9s / Expir\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 8)(20, "table", 9)(21, "thead")(22, "tr")(23, "th");
      \u0275\u0275text(24, "N\xB0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Chantier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Montant (FCFA)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "\xC9mission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Validit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Statut");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "tbody");
      \u0275\u0275repeaterCreate(40, DevisComponent_For_41_Template, 19, 10, "tr", null, _forTrack0);
      \u0275\u0275conditionalCreate(42, DevisComponent_Conditional_42_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(43, DevisComponent_Conditional_43_Template, 51, 8, "div", 10);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.formatMoney(ctx.totalAccepte), " FCFA sign\xE9s \xB7 ", ctx.formatMoney(ctx.totalEnAttente), " en attente");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeTab() === "tout");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Tous (", ctx.devis.length, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "en-attente");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "accepte");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "refuse");
      \u0275\u0275advance(23);
      \u0275\u0275repeater(ctx.filtered);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filtered.length === 0 ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm() ? 43 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff5ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbfc;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a8fa8;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 680px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=devis.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevisComponent, [{
    type: Component,
    args: [{ selector: "app-devis", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page"> <header class="page__header"> <div> <h1 class="page__title">Devis & Contrats</h1> <p class="page__sub">{{ formatMoney(totalAccepte) }} FCFA sign\xE9s \xB7 {{ formatMoney(totalEnAttente) }} en attente</p> </div> <div class="page__actions"> <button class="btn btn--primary" (click)="showForm.set(true)">+ Nouveau devis</button> </div> </header> <div class="tabs"> <button class="tab" [class.active]="activeTab()==='tout'"(click)="activeTab.set('tout')">Tous ({{ devis.length }})</button> <button class="tab" [class.active]="activeTab()==='en-attente'" (click)="activeTab.set('en-attente')">En attente</button> <button class="tab" [class.active]="activeTab()==='accepte'"(click)="activeTab.set('accepte')">Accept\xE9s</button> <button class="tab" [class.active]="activeTab()==='refuse'"(click)="activeTab.set('refuse')">Refus\xE9s / Expir\xE9s</button> </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>N\xB0</th> <th>Client</th> <th>Chantier</th> <th>Type</th> <th>Montant (FCFA)</th> <th>\xC9mission</th> <th>Validit\xE9</th> <th>Statut</th> </tr> </thead> <tbody> @for (d of filtered; track d.id) {
          <tr> <td class="mono">{{ d.numero }}</td> <td class="fw-med">{{ d.client }}</td> <td class="text-muted">{{ d.chantier }}</td> <td><span class="badge badge--orange">{{ d.type }}</span></td> <td class="fw-bold">{{ formatMoney(d.montant) }}</td> <td class="text-muted">{{ d.dateEmission }}</td> <td class="text-muted">{{ d.dateValidite }}</td> <td><span [class]="statutClass(d.statut)">{{ d.statut }}</span></td> </tr> }
        @if (filtered.length === 0) {
          <tr><td colspan="8" style="text-align:center;color:#aaa;padding:32px;font-style:italic;">Aucun document.</td></tr> }
      </tbody> </table> </div>
</div> @if (showForm()) {
  <div class="modal-overlay" (click)="showForm.set(false)"> <div class="modal" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Nouveau devis / contrat</span> <button class="modal__close" (click)="showForm.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"> <label class="field__label">Client *</label> <input [(ngModel)]="form.client" class="field__input" placeholder="Nom du client" /> </div> <div class="field"> <label class="field__label">Chantier</label> <input [(ngModel)]="form.chantier" class="field__input" placeholder="Nom du chantier" /> </div> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Type de document</label> <select [(ngModel)]="form.type" class="field__select"> @for (t of types; track t) { <option>{{ t }}</option> }
            </select> </div> <div class="field"> <label class="field__label">Montant (FCFA) *</label> <input [(ngModel)]="form.montant" type="number" class="field__input" placeholder="0" /> </div> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Date d'\xE9mission</label> <input [(ngModel)]="form.dateEmission" type="date" class="field__input" /> </div> <div class="field"> <label class="field__label">Date de validit\xE9</label> <input [(ngModel)]="form.dateValidite" type="date" class="field__input" /> </div> </div> <div class="field"> <label class="field__label">Statut</label> <select [(ngModel)]="form.statut" class="field__select"> @for (s of statuts; track s) { <option>{{ s }}</option> }
          </select> </div> <div class="field"> <label class="field__label">Notes</label> <textarea [(ngModel)]="form.notes" class="field__textarea" placeholder="Remarques, conditions particuli\xE8res\u2026"></textarea> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showForm.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addDevis()">Enregistrer</button> </div> </div> </div>
}
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-construction/src/app/pages/devis/devis.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff5ee;\n}\n.btn--danger {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbfc;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted {\n  color: #8a8fa8;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 680px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=devis.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DevisComponent, { className: "DevisComponent", filePath: "app/pages/devis/devis.component.ts", lineNumber: 29 });
})();
export {
  DevisComponent
};
//# sourceMappingURL=chunk-W6LOEUNO.js.map
