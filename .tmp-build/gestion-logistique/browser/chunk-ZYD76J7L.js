import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
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
} from "./chunk-PVSPOVDN.js";

// projects/gestion-logistique/src/app/pages/commandes/commandes.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CommandesComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 16);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 17);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 16);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.ref);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r1.client);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.telephone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r1.origine, " \u2192 ", c_r1.destination);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.typeClass(c_r1.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r1.poids, " kg");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(c_r1.montant));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.dateLivraison);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statutClass(c_r1.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.statut);
  }
}
function CommandesComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 18);
    \u0275\u0275text(2, "Aucune commande.");
    \u0275\u0275elementEnd()();
  }
}
function CommandesComponent_Conditional_45_For_31_Template(rf, ctx) {
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
function CommandesComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function CommandesComponent_Conditional_45_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275listener("click", function CommandesComponent_Conditional_45_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 21)(3, "span", 22);
    \u0275\u0275text(4, "Nouvelle commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function CommandesComponent_Conditional_45_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 24)(7, "div", 25)(8, "div", 26)(9, "label", 27);
    \u0275\u0275text(10, "Client *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function CommandesComponent_Conditional_45_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.client, $event) || (ctx_r1.form.client = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 26)(13, "label", 27);
    \u0275\u0275text(14, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function CommandesComponent_Conditional_45_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.telephone, $event) || (ctx_r1.form.telephone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 25)(17, "div", 26)(18, "label", 27);
    \u0275\u0275text(19, "Origine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function CommandesComponent_Conditional_45_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.origine, $event) || (ctx_r1.form.origine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 26)(22, "label", 27);
    \u0275\u0275text(23, "Destination *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function CommandesComponent_Conditional_45_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destination, $event) || (ctx_r1.form.destination = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 25)(26, "div", 26)(27, "label", 27);
    \u0275\u0275text(28, "Type de transport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function CommandesComponent_Conditional_45_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(30, CommandesComponent_Conditional_45_For_31_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 26)(33, "label", 27);
    \u0275\u0275text(34, "Montant (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function CommandesComponent_Conditional_45_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.montant, $event) || (ctx_r1.form.montant = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 25)(37, "div", 26)(38, "label", 27);
    \u0275\u0275text(39, "Poids (kg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function CommandesComponent_Conditional_45_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.poids, $event) || (ctx_r1.form.poids = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 26)(42, "label", 27);
    \u0275\u0275text(43, "Volume (m\xB3)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function CommandesComponent_Conditional_45_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.volume, $event) || (ctx_r1.form.volume = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 25)(46, "div", 26)(47, "label", 27);
    \u0275\u0275text(48, "Date commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CommandesComponent_Conditional_45_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateCommande, $event) || (ctx_r1.form.dateCommande = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 26)(51, "label", 27);
    \u0275\u0275text(52, "Date livraison pr\xE9vue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CommandesComponent_Conditional_45_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateLivraison, $event) || (ctx_r1.form.dateLivraison = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 26)(55, "label", 27);
    \u0275\u0275text(56, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "textarea", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CommandesComponent_Conditional_45_Template_textarea_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.notes, $event) || (ctx_r1.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 34)(59, "button", 35);
    \u0275\u0275listener("click", function CommandesComponent_Conditional_45_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275text(60, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 5);
    \u0275\u0275listener("click", function CommandesComponent_Conditional_45_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addCommande());
    });
    \u0275\u0275text(62, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.client);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.telephone);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.origine);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.destination);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.types);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.montant);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.poids);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.volume);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateCommande);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateLivraison);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.notes);
  }
}
var CommandesComponent = class _CommandesComponent {
  store;
  activeTab = signal("tout", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : (
    /* istanbul ignore next */
    []
  ));
  search = signal("", ...ngDevMode ? [{ debugName: "search" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.empty();
  commandes = [
    { id: "1", ref: "CMD-2024-001", client: "SuperMart SA", telephone: "70 11 22 33", origine: "Ouagadougou", destination: "Bobo-Dioulasso", type: "Standard J+3", poids: 2400, volume: 14.5, dateCommande: "2024-04-18", dateLivraison: "2024-04-21", montant: 185e3, statut: "En transit", notes: "Fragile" },
    { id: "2", ref: "CMD-2024-002", client: "Pharmavie SARL", telephone: "70 22 33 44", origine: "Ouagadougou", destination: "Ouahigouya", type: "Express J+1", poids: 420, volume: 2.1, dateCommande: "2024-04-19", dateLivraison: "2024-04-20", montant: 95e3, statut: "Livr\xE9", notes: "M\xE9dicaments" },
    { id: "3", ref: "CMD-2024-003", client: "BTP Mat\xE9riaux", telephone: "70 33 44 55", origine: "Koudougou", destination: "Ouagadougou", type: "Hors gabarit", poids: 8500, volume: 32, dateCommande: "2024-04-17", dateLivraison: "2024-04-22", montant: 42e4, statut: "En pr\xE9paration", notes: "Ciment + ferraille" },
    { id: "4", ref: "CMD-2024-004", client: "AgriSud BF", telephone: "70 44 55 66", origine: "Ouagadougou", destination: "Fada N'Gourma", type: "Frigorifique", poids: 1800, volume: 9.2, dateCommande: "2024-04-18", dateLivraison: "2024-04-20", montant: 21e4, statut: "Incident", notes: "Panne camion signal\xE9e" },
    { id: "5", ref: "CMD-2024-005", client: "Importex SARL", telephone: "70 55 66 77", origine: "Port Lom\xE9", destination: "Ouagadougou", type: "Groupage", poids: 3200, volume: 18, dateCommande: "2024-04-15", dateLivraison: "2024-04-20", montant: 28e4, statut: "Livr\xE9", notes: "" },
    { id: "6", ref: "CMD-2024-006", client: "Minoterie BF", telephone: "70 66 77 88", origine: "Ouagadougou", destination: "Koup\xE8la", type: "Standard J+3", poids: 5e3, volume: 20, dateCommande: "2024-04-19", dateLivraison: "2024-04-22", montant: 195e3, statut: "En attente", notes: "" },
    { id: "7", ref: "CMD-2024-007", client: "TotalEnergies BF", telephone: "70 77 88 99", origine: "Abidjan", destination: "Ouagadougou", type: "Hors gabarit", poids: 12e3, volume: 0, dateCommande: "2024-04-17", dateLivraison: "2024-04-23", montant: 85e4, statut: "En transit", notes: "Mat\xE9riel p\xE9trolier" },
    { id: "8", ref: "CMD-2024-008", client: "Boulangerie Moderne", telephone: "70 88 99 00", origine: "Ouagadougou", destination: "Ziniar\xE9", type: "Express J+1", poids: 280, volume: 1.5, dateCommande: "2024-04-20", dateLivraison: "2024-04-21", montant: 42e3, statut: "En attente", notes: "" }
  ];
  get filtered() {
    let list = this.commandes;
    const q = this.search().toLowerCase();
    if (q)
      list = list.filter((c) => `${c.ref} ${c.client} ${c.destination}`.toLowerCase().includes(q));
    const t = this.activeTab();
    if (t === "en-cours")
      list = list.filter((c) => c.statut === "En transit" || c.statut === "En pr\xE9paration" || c.statut === "En attente");
    if (t === "livre")
      list = list.filter((c) => c.statut === "Livr\xE9");
    if (t === "incident")
      list = list.filter((c) => c.statut === "Incident" || c.statut === "Annul\xE9");
    return list;
  }
  get enCours() {
    return this.commandes.filter((c) => c.statut === "En transit" || c.statut === "En pr\xE9paration").length;
  }
  get caTotal() {
    return this.commandes.reduce((s, c) => s + c.montant, 0);
  }
  fmt(n) {
    return n >= 1e6 ? (n / 1e6).toFixed(1) + " M" : n >= 1e3 ? (n / 1e3).toFixed(0) + " K" : n.toString();
  }
  statutClass(s) {
    const m = {
      "En attente": "badge badge--gray",
      "En pr\xE9paration": "badge badge--yellow",
      "En transit": "badge badge--blue",
      "Livr\xE9": "badge badge--green",
      "Annul\xE9": "badge badge--gray",
      "Incident": "badge badge--red"
    };
    return m[s];
  }
  typeClass(t) {
    const m = {
      "Express J+1": "badge badge--orange",
      "Standard J+3": "badge badge--blue",
      "Groupage": "badge badge--teal",
      "Frigorifique": "badge badge--purple",
      "Hors gabarit": "badge badge--red"
    };
    return m[t];
  }
  addCommande() {
    if (!this.form.client || !this.form.destination)
      return;
    const num = this.commandes.length + 1;
    this.commandes.unshift(__spreadValues({ id: Date.now().toString(), ref: "CMD-2024-" + String(num).padStart(3, "0") }, this.form));
    this.form = this.empty();
    this.showForm.set(false);
  }
  empty() {
    return { client: "", telephone: "", origine: "Ouagadougou", destination: "", type: "Standard J+3", poids: 0, volume: 0, dateCommande: "", dateLivraison: "", montant: 0, statut: "En attente", notes: "" };
  }
  types = ["Express J+1", "Standard J+3", "Groupage", "Frigorifique", "Hors gabarit"];
  statuts = ["En attente", "En pr\xE9paration", "En transit", "Livr\xE9", "Annul\xE9", "Incident"];
  constructor(store) {
    this.store = store;
  }
  static \u0275fac = function CommandesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommandesComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommandesComponent, selectors: [["app-commandes"]], decls: 46, vars: 14, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "filter-bar"], ["placeholder", "R\xE9f\xE9rence, client, destination\u2026", 1, "search-input", 3, "input", "value"], [1, "tabs"], [1, "tab", 3, "click"], [1, "table-wrap"], [1, "table"], [1, "modal-overlay"], [1, "mono"], [1, "fw-med"], [1, "text-muted", "text-sm"], [1, "text-muted"], [1, "fw-bold"], ["colspan", "8", 2, "text-align", "center", "color", "#aaa", "padding", "32px", "font-style", "italic"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal--wide", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], [1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field__select", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.1", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "Instructions particuli\xE8res\u2026", 1, "field__textarea", 3, "ngModelChange", "ngModel"], [1, "modal__foot"], [1, "btn", "btn--ghost", 3, "click"]], template: function CommandesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Commandes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function CommandesComponent_Template_button_click_8_listener() {
        return ctx.showForm.set(true);
      });
      \u0275\u0275text(9, "+ Nouvelle commande");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "input", 7);
      \u0275\u0275listener("input", function CommandesComponent_Template_input_input_11_listener($event) {
        return ctx.search.set($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
      \u0275\u0275listener("click", function CommandesComponent_Template_button_click_13_listener() {
        return ctx.activeTab.set("tout");
      });
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 9);
      \u0275\u0275listener("click", function CommandesComponent_Template_button_click_15_listener() {
        return ctx.activeTab.set("en-cours");
      });
      \u0275\u0275text(16, "En cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275listener("click", function CommandesComponent_Template_button_click_17_listener() {
        return ctx.activeTab.set("livre");
      });
      \u0275\u0275text(18, "Livr\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 9);
      \u0275\u0275listener("click", function CommandesComponent_Template_button_click_19_listener() {
        return ctx.activeTab.set("incident");
      });
      \u0275\u0275text(20, "Incidents");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 10)(22, "table", 11)(23, "thead")(24, "tr")(25, "th");
      \u0275\u0275text(26, "R\xE9f.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Origine \u2192 Dest.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Poids");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Montant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Livraison");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th");
      \u0275\u0275text(40, "Statut");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "tbody");
      \u0275\u0275repeaterCreate(42, CommandesComponent_For_43_Template, 22, 14, "tr", null, _forTrack0);
      \u0275\u0275conditionalCreate(44, CommandesComponent_Conditional_44_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(45, CommandesComponent_Conditional_45_Template, 63, 11, "div", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.enCours, " en transit \xB7 CA : ", ctx.fmt(ctx.caTotal), " FCFA");
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.search());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "tout");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Toutes (", ctx.commandes.length, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "en-cours");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "livre");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "incident");
      \u0275\u0275advance(23);
      \u0275\u0275repeater(ctx.filtered);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filtered.length === 0 ? 44 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm() ? 45 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0d2137;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #1a6fa8);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #3498db;\n  border: 1.5px solid #3498db;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #eaf4fd;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f0f4f8;\n  color: #555;\n  border: 1.5px solid #dde5ef;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #0d2137;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #3498db;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f7fafc;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f4f8;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafcff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0d2137;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0d2137;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #3498db;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #e8eef4;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #1a6fa8);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #dde5ef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #3498db;\n  color: #3498db;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #3498db;\n  border-color: #3498db;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f4f8;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0d2137;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f4f8;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=commandes.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommandesComponent, [{
    type: Component,
    args: [{ selector: "app-commandes", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page"> <header class="page__header"> <div> <h1 class="page__title">Commandes</h1> <p class="page__sub">{{ enCours }} en transit \xB7 CA : {{ fmt(caTotal) }} FCFA</p> </div> <div class="page__actions"> <button class="btn btn--primary" (click)="showForm.set(true)">+ Nouvelle commande</button> </div> </header> <div class="filter-bar"> <input class="search-input" [value]="search()" (input)="search.set($any($event.target).value)" placeholder="R\xE9f\xE9rence, client, destination\u2026" /> </div> <div class="tabs"> <button class="tab" [class.active]="activeTab()==='tout'"(click)="activeTab.set('tout')">Toutes ({{ commandes.length }})</button> <button class="tab" [class.active]="activeTab()==='en-cours'" (click)="activeTab.set('en-cours')">En cours</button> <button class="tab" [class.active]="activeTab()==='livre'"(click)="activeTab.set('livre')">Livr\xE9es</button> <button class="tab" [class.active]="activeTab()==='incident'" (click)="activeTab.set('incident')">Incidents</button> </div> <div class="table-wrap"> <table class="table"> <thead><tr><th>R\xE9f.</th><th>Client</th><th>Origine \u2192 Dest.</th><th>Type</th><th>Poids</th><th>Montant</th><th>Livraison</th><th>Statut</th></tr></thead> <tbody> @for (c of filtered; track c.id) {
          <tr> <td class="mono">{{ c.ref }}</td> <td> <div class="fw-med">{{ c.client }}</div> <div class="text-muted text-sm">{{ c.telephone }}</div> </td> <td class="text-muted">{{ c.origine }} \u2192 {{ c.destination }}</td> <td><span [class]="typeClass(c.type)">{{ c.type }}</span></td> <td class="text-muted">{{ c.poids }} kg</td> <td class="fw-bold">{{ fmt(c.montant) }}</td> <td class="text-muted">{{ c.dateLivraison }}</td> <td><span [class]="statutClass(c.statut)">{{ c.statut }}</span></td> </tr> }
        @if (filtered.length === 0) {
          <tr><td colspan="8" style="text-align:center;color:#aaa;padding:32px;font-style:italic;">Aucune commande.</td></tr> }
      </tbody> </table> </div>
</div> @if (showForm()) {
  <div class="modal-overlay" (click)="showForm.set(false)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Nouvelle commande</span> <button class="modal__close" (click)="showForm.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Client *</label><input [(ngModel)]="form.client" class="field__input" /></div> <div class="field"><label class="field__label">T\xE9l\xE9phone</label><input [(ngModel)]="form.telephone" class="field__input" /></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Origine</label><input [(ngModel)]="form.origine" class="field__input" /></div> <div class="field"><label class="field__label">Destination *</label><input [(ngModel)]="form.destination" class="field__input" /></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Type de transport</label><select [(ngModel)]="form.type" class="field__select">@for (t of types; track t){<option>{{ t }}</option>}</select></div> <div class="field"><label class="field__label">Montant (FCFA)</label><input [(ngModel)]="form.montant" type="number" class="field__input" /></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Poids (kg)</label><input [(ngModel)]="form.poids" type="number" class="field__input" /></div> <div class="field"><label class="field__label">Volume (m\xB3)</label><input [(ngModel)]="form.volume" type="number" step="0.1" class="field__input" /></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Date commande</label><input [(ngModel)]="form.dateCommande" type="date" class="field__input" /></div> <div class="field"><label class="field__label">Date livraison pr\xE9vue</label><input [(ngModel)]="form.dateLivraison" type="date" class="field__input" /></div> </div> <div class="field"><label class="field__label">Notes</label><textarea [(ngModel)]="form.notes" class="field__textarea" placeholder="Instructions particuli\xE8res\u2026"></textarea></div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showForm.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addCommande()">Enregistrer</button> </div> </div> </div>
}
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-logistique/src/app/pages/commandes/commandes.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0d2137;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #1a6fa8);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #3498db;\n  border: 1.5px solid #3498db;\n}\n.btn--outline:hover {\n  background: #eaf4fd;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f0f4f8;\n  color: #555;\n  border: 1.5px solid #dde5ef;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.card__link {\n  font-size: 12px;\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #0d2137;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #3498db;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f7fafc;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f4f8;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafcff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #0d2137;\n}\n.fw-med {\n  font-weight: 600;\n  color: #0d2137;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #3498db;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #e8eef4;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #1a6fa8);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #dde5ef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #3498db;\n  color: #3498db;\n}\n.tab.active {\n  background: #3498db;\n  border-color: #3498db;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.search-input:focus {\n  border-color: #3498db;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f4f8;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0d2137;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f4f8;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #3498db;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=commandes.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommandesComponent, { className: "CommandesComponent", filePath: "app/pages/commandes/commandes.component.ts", lineNumber: 18 });
})();
export {
  CommandesComponent
};
//# sourceMappingURL=chunk-ZYD76J7L.js.map
