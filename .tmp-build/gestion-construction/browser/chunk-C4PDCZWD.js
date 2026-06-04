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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4UYYR4F3.js";

// projects/gestion-construction/src/app/pages/sous-traitants/sous-traitants.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SousTraitantsComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 15);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 14);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 12);
    \u0275\u0275text(20);
    \u0275\u0275element(21, "br");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r1.entreprise);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.telephone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r1.specialite);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.chantier);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.contact);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatMoney(s_r1.montantContrat));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatMoney(s_r1.montantPaye));
    \u0275\u0275advance();
    \u0275\u0275classMap(s_r1.montantContrat - s_r1.montantPaye > 0 ? "fw-med" : "text-muted");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatMoney(s_r1.montantContrat - s_r1.montantPaye), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.dateDebut);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.dateFin);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statutClass(s_r1.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1.statut);
  }
}
function SousTraitantsComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16);
    \u0275\u0275text(2, "Aucun sous-traitant.");
    \u0275\u0275elementEnd()();
  }
}
function SousTraitantsComponent_Conditional_43_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sp_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sp_r4);
  }
}
function SousTraitantsComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function SousTraitantsComponent_Conditional_43_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275listener("click", function SousTraitantsComponent_Conditional_43_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 19)(3, "span", 20);
    \u0275\u0275text(4, "Nouveau sous-traitant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function SousTraitantsComponent_Conditional_43_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "div", 23)(8, "div", 24)(9, "label", 25);
    \u0275\u0275text(10, "Entreprise *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function SousTraitantsComponent_Conditional_43_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.entreprise, $event) || (ctx_r1.form.entreprise = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 24)(13, "label", 25);
    \u0275\u0275text(14, "Sp\xE9cialit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function SousTraitantsComponent_Conditional_43_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.specialite, $event) || (ctx_r1.form.specialite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(16, SousTraitantsComponent_Conditional_43_For_17_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 23)(19, "div", 24)(20, "label", 25);
    \u0275\u0275text(21, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function SousTraitantsComponent_Conditional_43_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.contact, $event) || (ctx_r1.form.contact = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 24)(24, "label", 25);
    \u0275\u0275text(25, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function SousTraitantsComponent_Conditional_43_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.telephone, $event) || (ctx_r1.form.telephone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 23)(28, "div", 24)(29, "label", 25);
    \u0275\u0275text(30, "Chantier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function SousTraitantsComponent_Conditional_43_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.chantier, $event) || (ctx_r1.form.chantier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 24)(33, "label", 25);
    \u0275\u0275text(34, "Montant contrat (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function SousTraitantsComponent_Conditional_43_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.montantContrat, $event) || (ctx_r1.form.montantContrat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 23)(37, "div", 24)(38, "label", 25);
    \u0275\u0275text(39, "Date d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function SousTraitantsComponent_Conditional_43_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateDebut, $event) || (ctx_r1.form.dateDebut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 24)(42, "label", 25);
    \u0275\u0275text(43, "Date fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function SousTraitantsComponent_Conditional_43_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateFin, $event) || (ctx_r1.form.dateFin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 24)(46, "label", 25);
    \u0275\u0275text(47, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "textarea", 33);
    \u0275\u0275twoWayListener("ngModelChange", function SousTraitantsComponent_Conditional_43_Template_textarea_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.notes, $event) || (ctx_r1.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 34)(50, "button", 35);
    \u0275\u0275listener("click", function SousTraitantsComponent_Conditional_43_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275text(51, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 5);
    \u0275\u0275listener("click", function SousTraitantsComponent_Conditional_43_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSousTraitant());
    });
    \u0275\u0275text(53, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.entreprise);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.specialite);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.specialites);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.contact);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.telephone);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.chantier);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.montantContrat);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateDebut);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateFin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.notes);
  }
}
var SousTraitantsComponent = class _SousTraitantsComponent {
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
  sousTraitants = [
    { id: "1", entreprise: "\xC9lectro BF SARL", contact: "Kabor\xE9 Mamadou", telephone: "70 11 22 33", specialite: "\xC9lectricit\xE9", chantier: "CH-001", montantContrat: 85e5, montantPaye: 51e5, dateDebut: "2024-02-01", dateFin: "2024-08-31", statut: "En cours", notes: "" },
    { id: "2", entreprise: "Plomb & Sanitaire Co.", contact: "Diallo S\xE9kou", telephone: "70 22 33 44", specialite: "Plomberie", chantier: "CH-001", montantContrat: 42e5, montantPaye: 42e5, dateDebut: "2024-01-15", dateFin: "2024-06-30", statut: "Termin\xE9", notes: "" },
    { id: "3", entreprise: "Menuiserie Moderne", contact: "Traor\xE9 Adama", telephone: "70 33 44 55", specialite: "Menuiserie", chantier: "CH-002", montantContrat: 12e6, montantPaye: 6e6, dateDebut: "2024-03-01", dateFin: "2024-10-31", statut: "En cours", notes: "Portes et fen\xEAtres aluminium" },
    { id: "4", entreprise: "ColorPro BF", contact: "Sawadogo Jean", telephone: "70 44 55 66", specialite: "Peinture", chantier: "CH-001", montantContrat: 38e5, montantPaye: 0, dateDebut: "2024-06-01", dateFin: "2024-08-31", statut: "En attente", notes: "" },
    { id: "5", entreprise: "Carrelage Expert", contact: "Ou\xE9draogo B.", telephone: "70 55 66 77", specialite: "Carrelage", chantier: "CH-005", montantContrat: 55e5, montantPaye: 275e4, dateDebut: "2024-02-15", dateFin: "2024-07-15", statut: "En cours", notes: "" },
    { id: "6", entreprise: "\xC9tanche Plus SARL", contact: "Compaor\xE9 A.", telephone: "70 66 77 88", specialite: "\xC9tanch\xE9it\xE9", chantier: "CH-002", montantContrat: 72e5, montantPaye: 72e5, dateDebut: "2024-02-01", dateFin: "2024-03-31", statut: "Termin\xE9", notes: "Toiture terrasse" },
    { id: "7", entreprise: "AirConfort BF", contact: "Niki\xE9ma S.", telephone: "70 77 88 99", specialite: "Climatisation", chantier: "CH-002", montantContrat: 15e6, montantPaye: 5e6, dateDebut: "2024-04-01", dateFin: "2024-11-30", statut: "En cours", notes: "36 splits + centrale" },
    { id: "8", entreprise: "Terrassement Express", contact: "Zongo Pierre", telephone: "70 88 99 00", specialite: "Terrassement", chantier: "CH-004", montantContrat: 6e6, montantPaye: 6e6, dateDebut: "2024-03-01", dateFin: "2024-03-31", statut: "Termin\xE9", notes: "" }
  ];
  get filtered() {
    const t = this.activeTab();
    if (t === "en-cours")
      return this.sousTraitants.filter((s) => s.statut === "En cours" || s.statut === "En attente");
    if (t === "termine")
      return this.sousTraitants.filter((s) => s.statut === "Termin\xE9" || s.statut === "R\xE9sili\xE9");
    return this.sousTraitants;
  }
  get totalContrats() {
    return this.sousTraitants.reduce((s, t) => s + t.montantContrat, 0);
  }
  get totalPaye() {
    return this.sousTraitants.reduce((s, t) => s + t.montantPaye, 0);
  }
  get enCours() {
    return this.sousTraitants.filter((s) => s.statut === "En cours").length;
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
      "En cours": "badge badge--blue",
      "Termin\xE9": "badge badge--green",
      "En attente": "badge badge--yellow",
      "R\xE9sili\xE9": "badge badge--red"
    };
    return m[s];
  }
  addSousTraitant() {
    if (!this.form.entreprise)
      return;
    this.sousTraitants.unshift(__spreadValues({ id: Date.now().toString() }, this.form));
    this.form = this.emptyForm();
    this.showForm.set(false);
  }
  emptyForm() {
    return { entreprise: "", contact: "", telephone: "", specialite: "\xC9lectricit\xE9", chantier: "", montantContrat: 0, montantPaye: 0, dateDebut: "", dateFin: "", statut: "En attente", notes: "" };
  }
  specialites = ["\xC9lectricit\xE9", "Plomberie", "Menuiserie", "Peinture", "Carrelage", "\xC9tanch\xE9it\xE9", "Climatisation", "Terrassement", "Soudure", "Autre"];
  statuts = ["En attente", "En cours", "Termin\xE9", "R\xE9sili\xE9"];
  constructor(store) {
    this.store = store;
  }
  static \u0275fac = function SousTraitantsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SousTraitantsComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SousTraitantsComponent, selectors: [["app-sous-traitants"]], decls: 44, vars: 12, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "tabs"], [1, "tab", 3, "click"], [1, "table-wrap"], [1, "table"], [1, "modal-overlay"], [1, "fw-med"], [1, "text-muted", "text-sm"], [1, "badge", "badge--orange"], [1, "text-muted"], [1, "fw-bold"], ["colspan", "9", 2, "text-align", "center", "color", "#aaa", "padding", "32px", "font-style", "italic"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal--wide", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], ["placeholder", "Nom de l'entreprise", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field__select", 3, "ngModelChange", "ngModel"], ["placeholder", "Nom du responsable", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "70 00 00 00", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "ex: CH-001", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "0", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "D\xE9tails des prestations\u2026", 1, "field__textarea", 3, "ngModelChange", "ngModel"], [1, "modal__foot"], [1, "btn", "btn--ghost", 3, "click"]], template: function SousTraitantsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Sous-traitants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function SousTraitantsComponent_Template_button_click_8_listener() {
        return ctx.showForm.set(true);
      });
      \u0275\u0275text(9, "+ Nouveau sous-traitant");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
      \u0275\u0275listener("click", function SousTraitantsComponent_Template_button_click_11_listener() {
        return ctx.activeTab.set("tout");
      });
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function SousTraitantsComponent_Template_button_click_13_listener() {
        return ctx.activeTab.set("en-cours");
      });
      \u0275\u0275text(14, "En cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 7);
      \u0275\u0275listener("click", function SousTraitantsComponent_Template_button_click_15_listener() {
        return ctx.activeTab.set("termine");
      });
      \u0275\u0275text(16, "Termin\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 8)(18, "table", 9)(19, "thead")(20, "tr")(21, "th");
      \u0275\u0275text(22, "Entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "Sp\xE9cialit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Chantier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Montant contrat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Pay\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Reste \xE0 payer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "P\xE9riode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Statut");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "tbody");
      \u0275\u0275repeaterCreate(40, SousTraitantsComponent_For_41_Template, 26, 15, "tr", null, _forTrack0);
      \u0275\u0275conditionalCreate(42, SousTraitantsComponent_Conditional_42_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(43, SousTraitantsComponent_Conditional_43_Template, 54, 9, "div", 10);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate3("", ctx.enCours, " contrats actifs \xB7 ", ctx.formatMoney(ctx.totalPaye), " / ", ctx.formatMoney(ctx.totalContrats), " FCFA pay\xE9s");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeTab() === "tout");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Tous (", ctx.sousTraitants.length, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "en-cours");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "termine");
      \u0275\u0275advance(25);
      \u0275\u0275repeater(ctx.filtered);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filtered.length === 0 ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm() ? 43 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff5ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbfc;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a8fa8;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 680px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=sous-traitants.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SousTraitantsComponent, [{
    type: Component,
    args: [{ selector: "app-sous-traitants", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page"> <header class="page__header"> <div> <h1 class="page__title">Sous-traitants</h1> <p class="page__sub">{{ enCours }} contrats actifs \xB7 {{ formatMoney(totalPaye) }} / {{ formatMoney(totalContrats) }} FCFA pay\xE9s</p> </div> <div class="page__actions"> <button class="btn btn--primary" (click)="showForm.set(true)">+ Nouveau sous-traitant</button> </div> </header> <div class="tabs"> <button class="tab" [class.active]="activeTab()==='tout'"(click)="activeTab.set('tout')">Tous ({{ sousTraitants.length }})</button> <button class="tab" [class.active]="activeTab()==='en-cours'" (click)="activeTab.set('en-cours')">En cours</button> <button class="tab" [class.active]="activeTab()==='termine'"(click)="activeTab.set('termine')">Termin\xE9s</button> </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Entreprise</th> <th>Sp\xE9cialit\xE9</th> <th>Chantier</th> <th>Contact</th> <th>Montant contrat</th> <th>Pay\xE9</th> <th>Reste \xE0 payer</th> <th>P\xE9riode</th> <th>Statut</th> </tr> </thead> <tbody> @for (s of filtered; track s.id) {
          <tr> <td> <div class="fw-med">{{ s.entreprise }}</div> <div class="text-muted text-sm">{{ s.telephone }}</div> </td> <td><span class="badge badge--orange">{{ s.specialite }}</span></td> <td class="text-muted">{{ s.chantier }}</td> <td class="text-muted">{{ s.contact }}</td> <td class="fw-bold">{{ formatMoney(s.montantContrat) }}</td> <td class="text-muted">{{ formatMoney(s.montantPaye) }}</td> <td [class]="s.montantContrat - s.montantPaye > 0 ? 'fw-med' : 'text-muted'"> {{ formatMoney(s.montantContrat - s.montantPaye) }}
            </td> <td class="text-muted text-sm">{{ s.dateDebut }}<br/>{{ s.dateFin }}</td> <td><span [class]="statutClass(s.statut)">{{ s.statut }}</span></td> </tr> }
        @if (filtered.length === 0) {
          <tr><td colspan="9" style="text-align:center;color:#aaa;padding:32px;font-style:italic;">Aucun sous-traitant.</td></tr> }
      </tbody> </table> </div>
</div> @if (showForm()) {
  <div class="modal-overlay" (click)="showForm.set(false)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Nouveau sous-traitant</span> <button class="modal__close" (click)="showForm.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"> <label class="field__label">Entreprise *</label> <input [(ngModel)]="form.entreprise" class="field__input" placeholder="Nom de l'entreprise" /> </div> <div class="field"> <label class="field__label">Sp\xE9cialit\xE9</label> <select [(ngModel)]="form.specialite" class="field__select"> @for (sp of specialites; track sp) { <option>{{ sp }}</option> }
            </select> </div> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Contact</label> <input [(ngModel)]="form.contact" class="field__input" placeholder="Nom du responsable" /> </div> <div class="field"> <label class="field__label">T\xE9l\xE9phone</label> <input [(ngModel)]="form.telephone" class="field__input" placeholder="70 00 00 00" /> </div> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Chantier</label> <input [(ngModel)]="form.chantier" class="field__input" placeholder="ex: CH-001" /> </div> <div class="field"> <label class="field__label">Montant contrat (FCFA)</label> <input [(ngModel)]="form.montantContrat" type="number" class="field__input" placeholder="0" /> </div> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Date d\xE9but</label> <input [(ngModel)]="form.dateDebut" type="date" class="field__input" /> </div> <div class="field"> <label class="field__label">Date fin</label> <input [(ngModel)]="form.dateFin" type="date" class="field__input" /> </div> </div> <div class="field"> <label class="field__label">Notes</label> <textarea [(ngModel)]="form.notes" class="field__textarea" placeholder="D\xE9tails des prestations\u2026"></textarea> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showForm.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addSousTraitant()">Enregistrer</button> </div> </div> </div>
}
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-construction/src/app/pages/sous-traitants/sous-traitants.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff5ee;\n}\n.btn--danger {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbfc;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted {\n  color: #8a8fa8;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 680px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=sous-traitants.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SousTraitantsComponent, { className: "SousTraitantsComponent", filePath: "app/pages/sous-traitants/sous-traitants.component.ts", lineNumber: 31 });
})();
export {
  SousTraitantsComponent
};
//# sourceMappingURL=chunk-C4PDCZWD.js.map
