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
} from "./chunk-4UYYR4F3.js";

// projects/gestion-construction/src/app/pages/materiaux/materiaux.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MateriauxComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 15);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.designation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.categorie);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.alerteClass(m_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", m_r1.stock, " ", m_r1.unite);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r1.stockMin, " ", m_r1.unite);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatMoney(m_r1.prixUnitaire));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.chantier || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.fournisseur);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.alerteClass(m_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.alerteLabel(m_r1));
  }
}
function MateriauxComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 17);
    \u0275\u0275text(2, "Aucun mat\xE9riau.");
    \u0275\u0275elementEnd()();
  }
}
function MateriauxComponent_Conditional_45_For_17_Template(rf, ctx) {
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
function MateriauxComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function MateriauxComponent_Conditional_45_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275listener("click", function MateriauxComponent_Conditional_45_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 20)(3, "span", 21);
    \u0275\u0275text(4, "Ajouter un mat\xE9riau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function MateriauxComponent_Conditional_45_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "div", 24)(8, "div", 25)(9, "label", 26);
    \u0275\u0275text(10, "D\xE9signation *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function MateriauxComponent_Conditional_45_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.designation, $event) || (ctx_r1.form.designation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 25)(13, "label", 26);
    \u0275\u0275text(14, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function MateriauxComponent_Conditional_45_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.categorie, $event) || (ctx_r1.form.categorie = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(16, MateriauxComponent_Conditional_45_For_17_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 24)(19, "div", 25)(20, "label", 26);
    \u0275\u0275text(21, "Unit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function MateriauxComponent_Conditional_45_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.unite, $event) || (ctx_r1.form.unite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 25)(24, "label", 26);
    \u0275\u0275text(25, "Prix unitaire (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function MateriauxComponent_Conditional_45_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.prixUnitaire, $event) || (ctx_r1.form.prixUnitaire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 24)(28, "div", 25)(29, "label", 26);
    \u0275\u0275text(30, "Stock actuel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function MateriauxComponent_Conditional_45_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.stock, $event) || (ctx_r1.form.stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 25)(33, "label", 26);
    \u0275\u0275text(34, "Stock minimum d'alerte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function MateriauxComponent_Conditional_45_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.stockMin, $event) || (ctx_r1.form.stockMin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 24)(37, "div", 25)(38, "label", 26);
    \u0275\u0275text(39, "Chantier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function MateriauxComponent_Conditional_45_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.chantier, $event) || (ctx_r1.form.chantier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 25)(42, "label", 26);
    \u0275\u0275text(43, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function MateriauxComponent_Conditional_45_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.fournisseur, $event) || (ctx_r1.form.fournisseur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 33)(46, "button", 34);
    \u0275\u0275listener("click", function MateriauxComponent_Conditional_45_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275text(47, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 5);
    \u0275\u0275listener("click", function MateriauxComponent_Conditional_45_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addMateriau());
    });
    \u0275\u0275text(49, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.designation);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.categorie);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.unite);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.prixUnitaire);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.stock);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.stockMin);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.chantier);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.fournisseur);
  }
}
var MateriauxComponent = class _MateriauxComponent {
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
  form = this.emptyForm();
  materiaux = [
    { id: "1", reference: "MAT-001", designation: "Ciment CPA 42.5", categorie: "Ciment & B\xE9ton", unite: "sac 50kg", stock: 850, stockMin: 200, prixUnitaire: 7500, chantier: "CH-001", fournisseur: "CIMFASO" },
    { id: "2", reference: "MAT-002", designation: "Sable de rivi\xE8re", categorie: "Agr\xE9gats", unite: "m\xB3", stock: 45, stockMin: 20, prixUnitaire: 25e3, chantier: "CH-001", fournisseur: "Carri\xE8re Ouaga" },
    { id: "3", reference: "MAT-003", designation: "Gravier 20/40", categorie: "Agr\xE9gats", unite: "m\xB3", stock: 12, stockMin: 15, prixUnitaire: 35e3, chantier: "CH-002", fournisseur: "Carri\xE8re Ouaga" },
    { id: "4", reference: "MAT-004", designation: "Fer \xE0 b\xE9ton HA 10mm", categorie: "Acier & Ferraille", unite: "barre 6m", stock: 320, stockMin: 100, prixUnitaire: 4200, chantier: "CH-001", fournisseur: "ACOFASO" },
    { id: "5", reference: "MAT-005", designation: "Fer \xE0 b\xE9ton HA 12mm", categorie: "Acier & Ferraille", unite: "barre 6m", stock: 180, stockMin: 80, prixUnitaire: 5800, chantier: "CH-002", fournisseur: "ACOFASO" },
    { id: "6", reference: "MAT-006", designation: "Planches coffrages 27mm", categorie: "Bois & Coffrage", unite: "pi\xE8ce", stock: 95, stockMin: 50, prixUnitaire: 3500, chantier: "CH-002", fournisseur: "Menuiserie Ziniar\xE9" },
    { id: "7", reference: "MAT-007", designation: "Carrelage 60x60 gris", categorie: "Carrelage & Rev\xEAtement", unite: "m\xB2", stock: 420, stockMin: 100, prixUnitaire: 8500, chantier: "CH-001", fournisseur: "CERAMICA" },
    { id: "8", reference: "MAT-008", designation: "Tube PVC 110", categorie: "Plomberie", unite: "barre 3m", stock: 28, stockMin: 30, prixUnitaire: 4800, chantier: "CH-005", fournisseur: "Hydraulique Plus" },
    { id: "9", reference: "MAT-009", designation: "C\xE2ble \xE9lectrique 2.5mm\xB2", categorie: "\xC9lectricit\xE9", unite: "m", stock: 650, stockMin: 200, prixUnitaire: 850, chantier: "CH-005", fournisseur: "ELECSA" },
    { id: "10", reference: "MAT-010", designation: "Peinture acrylique blanche", categorie: "Peinture", unite: "bidon 20L", stock: 22, stockMin: 10, prixUnitaire: 22e3, chantier: "CH-001", fournisseur: "SOTOCO" },
    { id: "11", reference: "MAT-011", designation: "Hourdis 16x20x50", categorie: "Ciment & B\xE9ton", unite: "pi\xE8ce", stock: 1800, stockMin: 500, prixUnitaire: 450, chantier: "CH-002", fournisseur: "Pr\xE9fabrique BF" },
    { id: "12", reference: "MAT-012", designation: "Parpaings 15x20x40", categorie: "Ciment & B\xE9ton", unite: "pi\xE8ce", stock: 320, stockMin: 500, prixUnitaire: 320, chantier: "CH-004", fournisseur: "Pr\xE9fabrique BF" }
  ];
  get filtered() {
    let list = this.materiaux;
    const q = this.search().toLowerCase();
    if (q)
      list = list.filter((m) => m.designation.toLowerCase().includes(q) || m.reference.toLowerCase().includes(q) || m.categorie.toLowerCase().includes(q));
    const t = this.activeTab();
    if (t === "alerte")
      list = list.filter((m) => m.stock <= m.stockMin);
    if (t === "ok")
      list = list.filter((m) => m.stock > m.stockMin);
    return list;
  }
  get enAlerte() {
    return this.materiaux.filter((m) => m.stock <= m.stockMin).length;
  }
  get valeurStock() {
    return this.materiaux.reduce((s, m) => s + m.stock * m.prixUnitaire, 0);
  }
  formatMoney(n) {
    if (n >= 1e6)
      return (n / 1e6).toFixed(1) + " M";
    if (n >= 1e3)
      return (n / 1e3).toFixed(0) + " K";
    return n.toString();
  }
  alerteClass(m) {
    if (m.stock === 0)
      return "badge badge--red";
    if (m.stock <= m.stockMin)
      return "badge badge--yellow";
    return "badge badge--green";
  }
  alerteLabel(m) {
    if (m.stock === 0)
      return "Rupture";
    if (m.stock <= m.stockMin)
      return "Alerte";
    return "OK";
  }
  addMateriau() {
    if (!this.form.designation)
      return;
    const num = this.materiaux.length + 1;
    const reference = "MAT-" + String(num).padStart(3, "0");
    this.materiaux.unshift(__spreadValues({ id: Date.now().toString(), reference }, this.form));
    this.form = this.emptyForm();
    this.showForm.set(false);
  }
  emptyForm() {
    return { designation: "", categorie: "Ciment & B\xE9ton", unite: "pi\xE8ce", stock: 0, stockMin: 0, prixUnitaire: 0, chantier: "", fournisseur: "" };
  }
  categories = ["Ciment & B\xE9ton", "Acier & Ferraille", "Bois & Coffrage", "Carrelage & Rev\xEAtement", "Plomberie", "\xC9lectricit\xE9", "Peinture", "Agr\xE9gats", "Divers"];
  constructor(store) {
    this.store = store;
  }
  static \u0275fac = function MateriauxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MateriauxComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MateriauxComponent, selectors: [["app-materiaux"]], decls: 46, vars: 13, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "filter-bar"], ["placeholder", "Rechercher par d\xE9signation, r\xE9f\xE9rence, cat\xE9gorie\u2026", 1, "search-input", 3, "input", "value"], [1, "tabs"], [1, "tab", 3, "click"], [1, "table-wrap"], [1, "table"], [1, "modal-overlay"], [1, "mono"], [1, "fw-med"], [1, "text-muted"], [2, "font-size", "13px", "font-weight", "700"], ["colspan", "9", 2, "text-align", "center", "color", "#aaa", "padding", "32px", "font-style", "italic"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal--wide", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], ["placeholder", "ex: Ciment CPA 42.5", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field__select", 3, "ngModelChange", "ngModel"], ["placeholder", "m\xB3, sac, pi\xE8ce\u2026", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "0", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "ex: CH-001", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "Nom du fournisseur", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "modal__foot"], [1, "btn", "btn--ghost", 3, "click"]], template: function MateriauxComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Mat\xE9riaux & Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function MateriauxComponent_Template_button_click_8_listener() {
        return ctx.showForm.set(true);
      });
      \u0275\u0275text(9, "+ Ajouter mat\xE9riau");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "input", 7);
      \u0275\u0275listener("input", function MateriauxComponent_Template_input_input_11_listener($event) {
        return ctx.search.set($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
      \u0275\u0275listener("click", function MateriauxComponent_Template_button_click_13_listener() {
        return ctx.activeTab.set("tout");
      });
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 9);
      \u0275\u0275listener("click", function MateriauxComponent_Template_button_click_15_listener() {
        return ctx.activeTab.set("alerte");
      });
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275listener("click", function MateriauxComponent_Template_button_click_17_listener() {
        return ctx.activeTab.set("ok");
      });
      \u0275\u0275text(18, "Stock OK");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 10)(20, "table", 11)(21, "thead")(22, "tr")(23, "th");
      \u0275\u0275text(24, "R\xE9f.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "D\xE9signation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Cat\xE9gorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Stock actuel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Stock min.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Prix unit.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Chantier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Fournisseur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th");
      \u0275\u0275text(40, "\xC9tat");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "tbody");
      \u0275\u0275repeaterCreate(42, MateriauxComponent_For_43_Template, 21, 15, "tr", null, _forTrack0);
      \u0275\u0275conditionalCreate(44, MateriauxComponent_Conditional_44_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(45, MateriauxComponent_Conditional_45_Template, 50, 8, "div", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.enAlerte, " article(s) en alerte \xB7 Valeur stock : ", ctx.formatMoney(ctx.valeurStock), " FCFA");
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.search());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "tout");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Tout (", ctx.materiaux.length, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "alerte");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" En alerte (", ctx.enAlerte, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "ok");
      \u0275\u0275advance(25);
      \u0275\u0275repeater(ctx.filtered);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filtered.length === 0 ? 44 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm() ? 45 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff5ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbfc;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a8fa8;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 680px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=materiaux.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MateriauxComponent, [{
    type: Component,
    args: [{ selector: "app-materiaux", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page"> <header class="page__header"> <div> <h1 class="page__title">Mat\xE9riaux & Stock</h1> <p class="page__sub">{{ enAlerte }} article(s) en alerte \xB7 Valeur stock : {{ formatMoney(valeurStock) }} FCFA</p> </div> <div class="page__actions"> <button class="btn btn--primary" (click)="showForm.set(true)">+ Ajouter mat\xE9riau</button> </div> </header> <div class="filter-bar"> <input class="search-input" [value]="search()" (input)="search.set($any($event.target).value)" placeholder="Rechercher par d\xE9signation, r\xE9f\xE9rence, cat\xE9gorie\u2026" /> </div> <div class="tabs"> <button class="tab" [class.active]="activeTab()==='tout'"(click)="activeTab.set('tout')">Tout ({{ materiaux.length }})</button> <button class="tab" [class.active]="activeTab()==='alerte'" (click)="activeTab.set('alerte')"> En alerte ({{ enAlerte }})</button> <button class="tab" [class.active]="activeTab()==='ok'"(click)="activeTab.set('ok')">Stock OK</button> </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>R\xE9f.</th> <th>D\xE9signation</th> <th>Cat\xE9gorie</th> <th>Stock actuel</th> <th>Stock min.</th> <th>Prix unit.</th> <th>Chantier</th> <th>Fournisseur</th> <th>\xC9tat</th> </tr> </thead> <tbody> @for (m of filtered; track m.id) {
          <tr> <td class="mono">{{ m.reference }}</td> <td class="fw-med">{{ m.designation }}</td> <td class="text-muted">{{ m.categorie }}</td> <td> <span [class]="alerteClass(m)" style="font-size:13px;font-weight:700;">{{ m.stock }} {{ m.unite }}</span> </td> <td class="text-muted">{{ m.stockMin }} {{ m.unite }}</td> <td class="text-muted">{{ formatMoney(m.prixUnitaire) }}</td> <td class="text-muted">{{ m.chantier || '\u2014' }}</td> <td class="text-muted">{{ m.fournisseur }}</td> <td><span [class]="alerteClass(m)">{{ alerteLabel(m) }}</span></td> </tr> }
        @if (filtered.length === 0) {
          <tr><td colspan="9" style="text-align:center;color:#aaa;padding:32px;font-style:italic;">Aucun mat\xE9riau.</td></tr> }
      </tbody> </table> </div>
</div> @if (showForm()) {
  <div class="modal-overlay" (click)="showForm.set(false)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Ajouter un mat\xE9riau</span> <button class="modal__close" (click)="showForm.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"> <label class="field__label">D\xE9signation *</label> <input [(ngModel)]="form.designation" class="field__input" placeholder="ex: Ciment CPA 42.5" /> </div> <div class="field"> <label class="field__label">Cat\xE9gorie</label> <select [(ngModel)]="form.categorie" class="field__select"> @for (c of categories; track c) { <option>{{ c }}</option> }
            </select> </div> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Unit\xE9</label> <input [(ngModel)]="form.unite" class="field__input" placeholder="m\xB3, sac, pi\xE8ce\u2026" /> </div> <div class="field"> <label class="field__label">Prix unitaire (FCFA)</label> <input [(ngModel)]="form.prixUnitaire" type="number" class="field__input" placeholder="0" /> </div> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Stock actuel</label> <input [(ngModel)]="form.stock" type="number" class="field__input" placeholder="0" /> </div> <div class="field"> <label class="field__label">Stock minimum d'alerte</label> <input [(ngModel)]="form.stockMin" type="number" class="field__input" placeholder="0" /> </div> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Chantier</label> <input [(ngModel)]="form.chantier" class="field__input" placeholder="ex: CH-001" /> </div> <div class="field"> <label class="field__label">Fournisseur</label> <input [(ngModel)]="form.fournisseur" class="field__input" placeholder="Nom du fournisseur" /> </div> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showForm.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addMateriau()">Enregistrer</button> </div> </div> </div>
}
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-construction/src/app/pages/materiaux/materiaux.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff5ee;\n}\n.btn--danger {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbfc;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted {\n  color: #8a8fa8;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 680px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=materiaux.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MateriauxComponent, { className: "MateriauxComponent", filePath: "app/pages/materiaux/materiaux.component.ts", lineNumber: 28 });
})();
export {
  MateriauxComponent
};
//# sourceMappingURL=chunk-3MIFB7OO.js.map
