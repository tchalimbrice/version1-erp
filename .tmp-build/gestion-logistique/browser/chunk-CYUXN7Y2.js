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
  ɵɵarrowFunction,
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
} from "./chunk-PVSPOVDN.js";

// projects/gestion-logistique/src/app/pages/entrepots/entrepots.component.ts
var arrowFn0 = (ctx, view) => (c) => c.statut === "Stock\xE9";
var _forTrack0 = ($index, $item) => $item.id;
function EntrepotsComponent_Conditional_15_For_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r1.notes);
  }
}
function EntrepotsComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17)(13, "div", 18)(14, "span", 19);
    \u0275\u0275text(15, "Occupation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 20);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 21);
    \u0275\u0275element(19, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 23);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, EntrepotsComponent_Conditional_15_For_2_Conditional_22_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r1.code);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.typeClass(e_r1.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.adresse);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", e_r1.responsable, " \xB7 ", e_r1.telephone);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", e_r1.stockActuel.toLocaleString(), " / ", e_r1.capaciteTotale.toLocaleString(), " m\xB3");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.tauxOccupation(e_r1), "%")("background", ctx_r1.tauxOccupation(e_r1) > 85 ? "#e74c3c" : ctx_r1.tauxOccupation(e_r1) > 60 ? "#e67e22" : "#3498db");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.tauxOccupation(e_r1), "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(e_r1.notes ? 22 : -1);
  }
}
function EntrepotsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, EntrepotsComponent_Conditional_15_For_2_Template, 23, 16, "div", 11, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.entrepots);
  }
}
function EntrepotsComponent_Conditional_16_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 27);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.client);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.entrepot);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r3.poids.toLocaleString(), " kg");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.arrivee);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.depart);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.colisStatutClass(c_r3.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.statut);
  }
}
function EntrepotsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 25)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "R\xE9f. colis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Entrep\xF4t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Poids");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Arriv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "D\xE9part pr\xE9vu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, EntrepotsComponent_Conditional_16_For_20_Template, 16, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.colis);
  }
}
function EntrepotsComponent_Conditional_17_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5);
  }
}
function EntrepotsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function EntrepotsComponent_Conditional_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275listener("click", function EntrepotsComponent_Conditional_17_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 30)(3, "span", 31);
    \u0275\u0275text(4, "Ajouter un entrep\xF4t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 32);
    \u0275\u0275listener("click", function EntrepotsComponent_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33)(7, "div", 34)(8, "div", 35)(9, "label", 36);
    \u0275\u0275text(10, "Nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepotsComponent_Conditional_17_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nom, $event) || (ctx_r1.form.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 35)(13, "label", 36);
    \u0275\u0275text(14, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepotsComponent_Conditional_17_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(16, EntrepotsComponent_Conditional_17_For_17_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 35)(19, "label", 36);
    \u0275\u0275text(20, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepotsComponent_Conditional_17_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.adresse, $event) || (ctx_r1.form.adresse = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 34)(23, "div", 35)(24, "label", 36);
    \u0275\u0275text(25, "Capacit\xE9 totale (m\xB3)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepotsComponent_Conditional_17_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.capaciteTotale, $event) || (ctx_r1.form.capaciteTotale = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 35)(28, "label", 36);
    \u0275\u0275text(29, "Stock actuel (m\xB3)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepotsComponent_Conditional_17_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.stockActuel, $event) || (ctx_r1.form.stockActuel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 34)(32, "div", 35)(33, "label", 36);
    \u0275\u0275text(34, "Responsable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepotsComponent_Conditional_17_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.responsable, $event) || (ctx_r1.form.responsable = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 35)(37, "label", 36);
    \u0275\u0275text(38, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepotsComponent_Conditional_17_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.telephone, $event) || (ctx_r1.form.telephone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 35)(41, "label", 36);
    \u0275\u0275text(42, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "textarea", 40);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepotsComponent_Conditional_17_Template_textarea_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.notes, $event) || (ctx_r1.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 41)(45, "button", 42);
    \u0275\u0275listener("click", function EntrepotsComponent_Conditional_17_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275text(46, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 5);
    \u0275\u0275listener("click", function EntrepotsComponent_Conditional_17_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addEntrepot());
    });
    \u0275\u0275text(48, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.types);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.adresse);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.capaciteTotale);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.stockActuel);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.responsable);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.telephone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.notes);
  }
}
var EntrepotsComponent = class _EntrepotsComponent {
  store;
  activeTab = signal("entrepots", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.empty();
  entrepots = [
    { id: "1", code: "ENT-OUA-01", nom: "D\xE9p\xF4t Central Ouagadougou", adresse: "Zone industrielle Gounghin", type: "Standard", capaciteTotale: 5e3, stockActuel: 3240, responsable: "Sawadogo Appolinaire", telephone: "70 11 22 33", notes: "Principal hub de distribution" },
    { id: "2", code: "ENT-OUA-02", nom: "Entrep\xF4t Frigorifique Nord", adresse: "Secteur 28, Ouagadougou", type: "Frigorifique", capaciteTotale: 800, stockActuel: 520, responsable: "Ou\xE9draogo Clarisse", telephone: "70 22 33 44", notes: "Temp\xE9rature +2\xB0C \xE0 +8\xB0C" },
    { id: "3", code: "ENT-BOB-01", nom: "Agence Bobo-Dioulasso", adresse: "Zone commercial Bobo", type: "Standard", capaciteTotale: 2500, stockActuel: 1180, responsable: "Coulibaly Mamadou", telephone: "70 33 44 55", notes: "" },
    { id: "4", code: "ENT-OUA-03", nom: "Zone Transit Douane", adresse: "Fronti\xE8re entr\xE9e nord", type: "Transit", capaciteTotale: 3e3, stockActuel: 2100, responsable: "Diallo Adama", telephone: "70 44 55 66", notes: "Marchandises en attente d\xE9douanement" },
    { id: "5", code: "ENT-KDP-01", nom: "D\xE9p\xF4t Koudougou", adresse: "RN1, Koudougou", type: "Vrac", capaciteTotale: 1500, stockActuel: 320, responsable: "Tapsoba Serge", telephone: "70 55 66 77", notes: "Agr\xE9gats et mat\xE9riaux de construction" }
  ];
  colis = [
    { id: "1", ref: "COL-00142", client: "SuperMart SA", entrepot: "ENT-OUA-01", poids: 245, arrivee: "2024-04-18", depart: "2024-04-21", statut: "Stock\xE9" },
    { id: "2", ref: "COL-00143", client: "Pharmavie SARL", entrepot: "ENT-OUA-02", poids: 42, arrivee: "2024-04-19", depart: "2024-04-20", statut: "Exp\xE9di\xE9" },
    { id: "3", ref: "COL-00144", client: "BTP Mat\xE9riaux", entrepot: "ENT-OUA-01", poids: 1800, arrivee: "2024-04-17", depart: "2024-04-22", statut: "Stock\xE9" },
    { id: "4", ref: "COL-00145", client: "AgriSud BF", entrepot: "ENT-BOB-01", poids: 380, arrivee: "2024-04-15", depart: "2024-04-20", statut: "En transit" },
    { id: "5", ref: "COL-00146", client: "Minoterie BF", entrepot: "ENT-OUA-01", poids: 5e3, arrivee: "2024-04-19", depart: "2024-04-22", statut: "Stock\xE9" },
    { id: "6", ref: "COL-00147", client: "TotalEnergies BF", entrepot: "ENT-OUA-03", poids: 8500, arrivee: "2024-04-17", depart: "2024-04-23", statut: "En transit" }
  ];
  tauxOccupation(e) {
    return Math.round(e.stockActuel / e.capaciteTotale * 100);
  }
  colisStatutClass(s) {
    if (s === "Exp\xE9di\xE9")
      return "badge badge--green";
    if (s === "En transit")
      return "badge badge--blue";
    return "badge badge--yellow";
  }
  typeClass(t) {
    const m = {
      "Standard": "badge badge--blue",
      "Frigorifique": "badge badge--purple",
      "S\xE9curis\xE9": "badge badge--red",
      "Vrac": "badge badge--orange",
      "Transit": "badge badge--teal"
    };
    return m[t];
  }
  addEntrepot() {
    if (!this.form.nom)
      return;
    const num = this.entrepots.length + 1;
    this.entrepots.unshift(__spreadValues({ id: Date.now().toString(), code: "ENT-OUA-0" + num }, this.form));
    this.form = this.empty();
    this.showForm.set(false);
  }
  empty() {
    return { nom: "", adresse: "", type: "Standard", capaciteTotale: 0, stockActuel: 0, responsable: "", telephone: "", notes: "" };
  }
  types = ["Standard", "Frigorifique", "S\xE9curis\xE9", "Vrac", "Transit"];
  constructor(store) {
    this.store = store;
  }
  static \u0275fac = function EntrepotsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EntrepotsComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrepotsComponent, selectors: [["app-entrepots"]], decls: 18, vars: 12, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "tabs"], [1, "tab", 3, "click"], [1, "entrepots-grid"], [1, "table-wrap"], [1, "modal-overlay"], [1, "entrepot-card"], [1, "entrepot-card__head"], [1, "mono"], [1, "entrepot-card__name"], [1, "text-muted", "text-sm"], [1, "entrepot-card__resp"], [1, "entrepot-card__occ"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "4px"], [1, "text-sm", "text-muted"], [1, "text-sm", "fw-bold"], [1, "progress-bar"], [1, "progress-bar__fill"], [1, "text-sm", "text-muted", 2, "margin-top", "3px", "text-align", "right"], [1, "text-muted", "text-sm", 2, "margin-top", "6px"], [1, "table"], [1, "fw-med"], [1, "text-muted"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal--wide", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], [1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field__select", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field__textarea", 3, "ngModelChange", "ngModel"], [1, "modal__foot"], [1, "btn", "btn--ghost", 3, "click"]], template: function EntrepotsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Entrep\xF4ts & Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function EntrepotsComponent_Template_button_click_8_listener() {
        return ctx.showForm.set(true);
      });
      \u0275\u0275text(9, "+ Ajouter entrep\xF4t");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
      \u0275\u0275listener("click", function EntrepotsComponent_Template_button_click_11_listener() {
        return ctx.activeTab.set("entrepots");
      });
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function EntrepotsComponent_Template_button_click_13_listener() {
        return ctx.activeTab.set("stock");
      });
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(15, EntrepotsComponent_Conditional_15_Template, 3, 0, "div", 8);
      \u0275\u0275conditionalCreate(16, EntrepotsComponent_Conditional_16_Template, 21, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, EntrepotsComponent_Conditional_17_Template, 49, 8, "div", 10);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.entrepots.length, " sites \xB7 ", ctx.colis.filter(\u0275\u0275arrowFunction(11, arrowFn0, ctx)).length, " colis en stock");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeTab() === "entrepots");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Entrep\xF4ts (", ctx.entrepots.length, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "stock");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Colis en stock (", ctx.colis.length, ")");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "entrepots" ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "stock" ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm() ? 17 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0d2137;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #1a6fa8);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #3498db;\n  border: 1.5px solid #3498db;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #eaf4fd;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f0f4f8;\n  color: #555;\n  border: 1.5px solid #dde5ef;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #0d2137;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #3498db;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f7fafc;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f4f8;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafcff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0d2137;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0d2137;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #3498db;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #e8eef4;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #1a6fa8);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #dde5ef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #3498db;\n  color: #3498db;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #3498db;\n  border-color: #3498db;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f4f8;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0d2137;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f4f8;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.entrepots-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 18px;\n}\n.entrepot-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 18px 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.entrepot-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.entrepot-card__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.entrepot-card__resp[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  margin-top: 2px;\n}\n.entrepot-card__occ[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n/*# sourceMappingURL=entrepots.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntrepotsComponent, [{
    type: Component,
    args: [{ selector: "app-entrepots", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page"> <header class="page__header"> <div> <h1 class="page__title">Entrep\xF4ts & Stock</h1> <p class="page__sub">{{ entrepots.length }} sites \xB7 {{ colis.filter(c=>c.statut==='Stock\xE9').length }} colis en stock</p> </div> <div class="page__actions"> <button class="btn btn--primary" (click)="showForm.set(true)">+ Ajouter entrep\xF4t</button> </div> </header> <div class="tabs"> <button class="tab" [class.active]="activeTab()==='entrepots'" (click)="activeTab.set('entrepots')">Entrep\xF4ts ({{ entrepots.length }})</button> <button class="tab" [class.active]="activeTab()==='stock'"(click)="activeTab.set('stock')">Colis en stock ({{ colis.length }})</button> </div> @if (activeTab() === 'entrepots') {
    <div class="entrepots-grid"> @for (e of entrepots; track e.id) {
        <div class="entrepot-card"> <div class="entrepot-card__head"> <span class="mono">{{ e.code }}</span> <span [class]="typeClass(e.type)">{{ e.type }}</span> </div> <div class="entrepot-card__name">{{ e.nom }}</div> <div class="text-muted text-sm">{{ e.adresse }}</div> <div class="entrepot-card__resp"> {{ e.responsable }} \xB7 {{ e.telephone }}</div> <div class="entrepot-card__occ"> <div style="display:flex;justify-content:space-between;margin-bottom:4px;"> <span class="text-sm text-muted">Occupation</span> <span class="text-sm fw-bold">{{ e.stockActuel.toLocaleString() }} / {{ e.capaciteTotale.toLocaleString() }} m\xB3</span> </div> <div class="progress-bar"> <div class="progress-bar__fill" [style.width.%]="tauxOccupation(e)" [style.background]="tauxOccupation(e)>85?'#e74c3c':tauxOccupation(e)>60?'#e67e22':'#3498db'"></div> </div> <div class="text-sm text-muted" style="margin-top:3px;text-align:right;">{{ tauxOccupation(e) }}%</div> </div> @if (e.notes) { <div class="text-muted text-sm" style="margin-top:6px;">{{ e.notes }}</div> }
        </div> }
    </div> }

  @if (activeTab() === 'stock') {
    <div class="table-wrap"> <table class="table"> <thead><tr><th>R\xE9f. colis</th><th>Client</th><th>Entrep\xF4t</th><th>Poids</th><th>Arriv\xE9e</th><th>D\xE9part pr\xE9vu</th><th>Statut</th></tr></thead> <tbody> @for (c of colis; track c.id) {
            <tr> <td class="mono">{{ c.ref }}</td> <td class="fw-med">{{ c.client }}</td> <td class="text-muted">{{ c.entrepot }}</td> <td class="text-muted">{{ c.poids.toLocaleString() }} kg</td> <td class="text-muted">{{ c.arrivee }}</td> <td class="text-muted">{{ c.depart }}</td> <td><span [class]="colisStatutClass(c.statut)">{{ c.statut }}</span></td> </tr> }
        </tbody> </table> </div> }
</div> @if (showForm()) {
  <div class="modal-overlay" (click)="showForm.set(false)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"><span class="modal__title">Ajouter un entrep\xF4t</span><button class="modal__close" (click)="showForm.set(false)"></button></div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Nom *</label><input [(ngModel)]="form.nom" class="field__input" /></div> <div class="field"><label class="field__label">Type</label><select [(ngModel)]="form.type" class="field__select">@for (t of types; track t){<option>{{ t }}</option>}</select></div> </div> <div class="field"><label class="field__label">Adresse</label><input [(ngModel)]="form.adresse" class="field__input" /></div> <div class="fields-row"> <div class="field"><label class="field__label">Capacit\xE9 totale (m\xB3)</label><input [(ngModel)]="form.capaciteTotale" type="number" class="field__input" /></div> <div class="field"><label class="field__label">Stock actuel (m\xB3)</label><input [(ngModel)]="form.stockActuel" type="number" class="field__input" /></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Responsable</label><input [(ngModel)]="form.responsable" class="field__input" /></div> <div class="field"><label class="field__label">T\xE9l\xE9phone</label><input [(ngModel)]="form.telephone" class="field__input" /></div> </div> <div class="field"><label class="field__label">Notes</label><textarea [(ngModel)]="form.notes" class="field__textarea"></textarea></div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showForm.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addEntrepot()">Enregistrer</button> </div> </div> </div>
}
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-logistique/src/app/pages/entrepots/entrepots.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0d2137;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #1a6fa8);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #3498db;\n  border: 1.5px solid #3498db;\n}\n.btn--outline:hover {\n  background: #eaf4fd;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f0f4f8;\n  color: #555;\n  border: 1.5px solid #dde5ef;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.card__link {\n  font-size: 12px;\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #0d2137;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #3498db;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f7fafc;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f4f8;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafcff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #0d2137;\n}\n.fw-med {\n  font-weight: 600;\n  color: #0d2137;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #3498db;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #e8eef4;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #1a6fa8);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #dde5ef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #3498db;\n  color: #3498db;\n}\n.tab.active {\n  background: #3498db;\n  border-color: #3498db;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.search-input:focus {\n  border-color: #3498db;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f4f8;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0d2137;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f4f8;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #3498db;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.entrepots-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 18px;\n}\n.entrepot-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 18px 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.entrepot-card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.entrepot-card__name {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.entrepot-card__resp {\n  font-size: 12px;\n  color: #8a9ab0;\n  margin-top: 2px;\n}\n.entrepot-card__occ {\n  margin-top: 4px;\n}\n/*# sourceMappingURL=entrepots.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrepotsComponent, { className: "EntrepotsComponent", filePath: "app/pages/entrepots/entrepots.component.ts", lineNumber: 17 });
})();
export {
  EntrepotsComponent
};
//# sourceMappingURL=chunk-CYUXN7Y2.js.map
