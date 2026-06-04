import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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

// projects/gestion-logistique/src/app/pages/clients/clients.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ClientsComponent_For_32_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", c_r1.enCours, " en cours");
  }
}
function ClientsComponent_For_32_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "div", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 13);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 12);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 16);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275conditionalCreate(21, ClientsComponent_For_32_Conditional_21_Template, 2, 1, "span", 17)(22, ClientsComponent_For_32_Conditional_22_Template, 2, 0, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r1.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.adresse);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r1.secteur);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r1.contact);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.telephone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.commandes);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(c_r1.caTotal));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r1.enCours > 0 ? 21 : 22);
  }
}
function ClientsComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 18);
    \u0275\u0275text(2, "Aucun client.");
    \u0275\u0275elementEnd()();
  }
}
function ClientsComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function ClientsComponent_Conditional_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275listener("click", function ClientsComponent_Conditional_34_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 21)(3, "span", 22);
    \u0275\u0275text(4, "Ajouter un client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function ClientsComponent_Conditional_34_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 24)(7, "div", 25)(8, "div", 26)(9, "label", 27);
    \u0275\u0275text(10, "Nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsComponent_Conditional_34_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nom, $event) || (ctx_r1.form.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 26)(13, "label", 27);
    \u0275\u0275text(14, "Secteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsComponent_Conditional_34_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.secteur, $event) || (ctx_r1.form.secteur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 25)(17, "div", 26)(18, "label", 27);
    \u0275\u0275text(19, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsComponent_Conditional_34_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.contact, $event) || (ctx_r1.form.contact = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 26)(22, "label", 27);
    \u0275\u0275text(23, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsComponent_Conditional_34_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.telephone, $event) || (ctx_r1.form.telephone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 25)(26, "div", 26)(27, "label", 27);
    \u0275\u0275text(28, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsComponent_Conditional_34_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 26)(31, "label", 27);
    \u0275\u0275text(32, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsComponent_Conditional_34_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.adresse, $event) || (ctx_r1.form.adresse = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 26)(35, "label", 27);
    \u0275\u0275text(36, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "textarea", 31);
    \u0275\u0275twoWayListener("ngModelChange", function ClientsComponent_Conditional_34_Template_textarea_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.notes, $event) || (ctx_r1.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 32)(39, "button", 33);
    \u0275\u0275listener("click", function ClientsComponent_Conditional_34_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275text(40, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 5);
    \u0275\u0275listener("click", function ClientsComponent_Conditional_34_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addClient());
    });
    \u0275\u0275text(42, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.secteur);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.contact);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.telephone);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.adresse);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.notes);
  }
}
var ClientsComponent = class _ClientsComponent {
  store;
  showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : (
    /* istanbul ignore next */
    []
  ));
  search = signal("", ...ngDevMode ? [{ debugName: "search" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.empty();
  clients = [
    { id: "1", code: "CLT-001", nom: "SuperMart SA", secteur: "Distribution", contact: "Kon\xE9 Paul", telephone: "70 11 22 33", email: "kone@supermart.bf", adresse: "Secteur 15, Ouaga", commandes: 48, caTotal: 92e5, enCours: 2, notes: "Client prioritaire" },
    { id: "2", code: "CLT-002", nom: "Pharmavie SARL", secteur: "Pharmacie", contact: "Diallo Fatouma", telephone: "70 22 33 44", email: "info@pharmavie.bf", adresse: "Zogona, Ouaga", commandes: 32, caTotal: 48e5, enCours: 1, notes: "Livraisons urgentes fr\xE9quentes" },
    { id: "3", code: "CLT-003", nom: "BTP Mat\xE9riaux", secteur: "Construction", contact: "Traor\xE9 Mamadou", telephone: "70 33 44 55", email: "btpmat@gmail.com", adresse: "Koudougou", commandes: 15, caTotal: 85e5, enCours: 1, notes: "" },
    { id: "4", code: "CLT-004", nom: "AgriSud BF", secteur: "Agriculture", contact: "Sawadogo Luc", telephone: "70 44 55 66", email: "agrisud@agri.bf", adresse: "Fada N'Gourma", commandes: 28, caTotal: 56e5, enCours: 1, notes: "Produits p\xE9rissables" },
    { id: "5", code: "CLT-005", nom: "Importex SARL", secteur: "Import/Export", contact: "Barry Ibrahim", telephone: "70 55 66 77", email: "importex@sarl.bf", adresse: "Ouagadougou", commandes: 62, caTotal: 22e6, enCours: 0, notes: "International \u2014 Corridor Abidjan" },
    { id: "6", code: "CLT-006", nom: "Minoterie BF", secteur: "Agro-industrie", contact: "Ou\xE9draogo Elie", telephone: "70 66 77 88", email: "minoterie@bf.com", adresse: "Zone industrielle", commandes: 21, caTotal: 41e5, enCours: 1, notes: "" },
    { id: "7", code: "CLT-007", nom: "TotalEnergies BF", secteur: "\xC9nergie", contact: "Compaor\xE9 Alain", telephone: "70 77 88 99", email: "total.bf@total.com", adresse: "Ouagadougou", commandes: 8, caTotal: 15e6, enCours: 1, notes: "Produits dangereux \u2014 habilitation requise" },
    { id: "8", code: "CLT-008", nom: "Boulangerie Moderne", secteur: "Agroalimentaire", contact: "Niki\xE9ma Arielle", telephone: "71 11 22 33", email: "boulan.mod@gmail.com", adresse: "Ouagadougou", commandes: 85, caTotal: 18e5, enCours: 1, notes: "Livraisons quotidiennes t\xF4t matin" }
  ];
  get filtered() {
    const q = this.search().toLowerCase();
    if (!q)
      return this.clients;
    return this.clients.filter((c) => `${c.nom} ${c.code} ${c.secteur} ${c.contact}`.toLowerCase().includes(q));
  }
  get totalCA() {
    return this.clients.reduce((s, c) => s + c.caTotal, 0);
  }
  fmt(n) {
    return n >= 1e6 ? (n / 1e6).toFixed(1) + " M" : n >= 1e3 ? (n / 1e3).toFixed(0) + " K" : n.toString();
  }
  addClient() {
    if (!this.form.nom)
      return;
    const num = this.clients.length + 1;
    this.clients.unshift(__spreadValues({ id: Date.now().toString(), code: "CLT-" + String(num).padStart(3, "0"), commandes: 0, caTotal: 0, enCours: 0 }, this.form));
    this.form = this.empty();
    this.showForm.set(false);
  }
  empty() {
    return { nom: "", secteur: "", contact: "", telephone: "", email: "", adresse: "", notes: "" };
  }
  constructor(store) {
    this.store = store;
  }
  static \u0275fac = function ClientsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientsComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientsComponent, selectors: [["app-clients"]], decls: 35, vars: 5, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "filter-bar"], ["placeholder", "Nom, code, secteur\u2026", 1, "search-input", 3, "input", "value"], [1, "table-wrap"], [1, "table"], [1, "modal-overlay"], [1, "mono"], [1, "fw-med"], [1, "text-muted", "text-sm"], [1, "badge", "badge--blue"], [1, "text-muted"], [1, "fw-bold"], [1, "badge", "badge--orange"], ["colspan", "7", 2, "text-align", "center", "color", "#aaa", "padding", "32px", "font-style", "italic"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal--wide", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], [1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "Distribution, Pharma\u2026", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field__textarea", 3, "ngModelChange", "ngModel"], [1, "modal__foot"], [1, "btn", "btn--ghost", 3, "click"]], template: function ClientsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Clients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function ClientsComponent_Template_button_click_8_listener() {
        return ctx.showForm.set(true);
      });
      \u0275\u0275text(9, "+ Ajouter client");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "input", 7);
      \u0275\u0275listener("input", function ClientsComponent_Template_input_input_11_listener($event) {
        return ctx.search.set($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "table", 9)(14, "thead")(15, "tr")(16, "th");
      \u0275\u0275text(17, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Secteur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Commandes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "CA total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "En cours");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "tbody");
      \u0275\u0275repeaterCreate(31, ClientsComponent_For_32_Template, 23, 9, "tr", null, _forTrack0);
      \u0275\u0275conditionalCreate(33, ClientsComponent_Conditional_33_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(34, ClientsComponent_Conditional_34_Template, 43, 7, "div", 10);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.clients.length, " clients \xB7 CA total : ", ctx.fmt(ctx.totalCA), " FCFA");
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.search());
      \u0275\u0275advance(20);
      \u0275\u0275repeater(ctx.filtered);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filtered.length === 0 ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm() ? 34 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0d2137;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #1a6fa8);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #3498db;\n  border: 1.5px solid #3498db;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #eaf4fd;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f0f4f8;\n  color: #555;\n  border: 1.5px solid #dde5ef;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #0d2137;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #3498db;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f7fafc;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f4f8;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafcff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0d2137;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0d2137;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #3498db;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #e8eef4;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #1a6fa8);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #dde5ef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #3498db;\n  color: #3498db;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #3498db;\n  border-color: #3498db;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f4f8;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0d2137;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f4f8;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=clients.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientsComponent, [{
    type: Component,
    args: [{ selector: "app-clients", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="page"> <header class="page__header"> <div> <h1 class="page__title">Clients</h1> <p class="page__sub">{{ clients.length }} clients \xB7 CA total : {{ fmt(totalCA) }} FCFA</p> </div> <div class="page__actions"> <button class="btn btn--primary" (click)="showForm.set(true)">+ Ajouter client</button> </div> </header> <div class="filter-bar"> <input class="search-input" [value]="search()" (input)="search.set($any($event.target).value)" placeholder="Nom, code, secteur\u2026" /> </div> <div class="table-wrap"> <table class="table"> <thead><tr><th>Code</th><th>Client</th><th>Secteur</th><th>Contact</th><th>Commandes</th><th>CA total</th><th>En cours</th></tr></thead> <tbody> @for (c of filtered; track c.id) {\n          <tr> <td class="mono">{{ c.code }}</td> <td> <div class="fw-med">{{ c.nom }}</div> <div class="text-muted text-sm">{{ c.adresse }}</div> </td> <td><span class="badge badge--blue">{{ c.secteur }}</span></td> <td> <div class="text-muted">{{ c.contact }}</div> <div class="text-muted text-sm">{{ c.telephone }}</div> </td> <td class="fw-med">{{ c.commandes }}</td> <td class="fw-bold">{{ fmt(c.caTotal) }}</td> <td> @if (c.enCours > 0) { <span class="badge badge--orange">{{ c.enCours }} en cours</span> }\n              @else { <span class="text-muted">\u2014</span> }\n            </td> </tr> }\n        @if (filtered.length === 0) { <tr><td colspan="7" style="text-align:center;color:#aaa;padding:32px;font-style:italic;">Aucun client.</td></tr> }\n      </tbody> </table> </div>\n</div> @if (showForm()) {\n  <div class="modal-overlay" (click)="showForm.set(false)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"><span class="modal__title">Ajouter un client</span><button class="modal__close" (click)="showForm.set(false)"></button></div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Nom *</label><input [(ngModel)]="form.nom" class="field__input" /></div> <div class="field"><label class="field__label">Secteur</label><input [(ngModel)]="form.secteur" class="field__input" placeholder="Distribution, Pharma\u2026" /></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Contact</label><input [(ngModel)]="form.contact" class="field__input" /></div> <div class="field"><label class="field__label">T\xE9l\xE9phone</label><input [(ngModel)]="form.telephone" class="field__input" /></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">E-mail</label><input [(ngModel)]="form.email" type="email" class="field__input" /></div> <div class="field"><label class="field__label">Adresse</label><input [(ngModel)]="form.adresse" class="field__input" /></div> </div> <div class="field"><label class="field__label">Notes</label><textarea [(ngModel)]="form.notes" class="field__textarea"></textarea></div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showForm.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addClient()">Enregistrer</button> </div> </div> </div>\n}\n', styles: ['@charset "UTF-8";\n\n/* projects/gestion-logistique/src/app/pages/clients/clients.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0d2137;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #1a6fa8);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #3498db;\n  border: 1.5px solid #3498db;\n}\n.btn--outline:hover {\n  background: #eaf4fd;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f0f4f8;\n  color: #555;\n  border: 1.5px solid #dde5ef;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.card__link {\n  font-size: 12px;\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #0d2137;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #3498db;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f7fafc;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f4f8;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafcff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #0d2137;\n}\n.fw-med {\n  font-weight: 600;\n  color: #0d2137;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #3498db;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #e8eef4;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #1a6fa8);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #dde5ef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #3498db;\n  color: #3498db;\n}\n.tab.active {\n  background: #3498db;\n  border-color: #3498db;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.search-input:focus {\n  border-color: #3498db;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f4f8;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0d2137;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f4f8;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #3498db;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=clients.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientsComponent, { className: "ClientsComponent", filePath: "app/pages/clients/clients.component.ts", lineNumber: 14 });
})();
export {
  ClientsComponent
};
//# sourceMappingURL=chunk-3LA3NUY4.js.map
