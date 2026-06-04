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
} from "./chunk-PVSPOVDN.js";

// projects/gestion-logistique/src/app/pages/vehicules/vehicules.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function VehiculesComponent_For_43_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r1.notes);
  }
}
function VehiculesComponent_For_43_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 12);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, VehiculesComponent_For_43_Conditional_20_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.immatriculation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.marque);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", v_r1.capacite.toLocaleString(), " kg");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.chauffeur || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", v_r1.kmTotal.toLocaleString(), " km");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.prochainEntretien);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.assuranceExpiration);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statutClass(v_r1.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r1.statut);
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r1.notes ? 20 : -1);
  }
}
function VehiculesComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 15);
    \u0275\u0275text(2, "Aucun v\xE9hicule.");
    \u0275\u0275elementEnd()();
  }
}
function VehiculesComponent_Conditional_45_For_17_Template(rf, ctx) {
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
function VehiculesComponent_Conditional_45_For_37_Template(rf, ctx) {
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
function VehiculesComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function VehiculesComponent_Conditional_45_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275listener("click", function VehiculesComponent_Conditional_45_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 18)(3, "span", 19);
    \u0275\u0275text(4, "Ajouter un v\xE9hicule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function VehiculesComponent_Conditional_45_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "div", 22)(8, "div", 23)(9, "label", 24);
    \u0275\u0275text(10, "Immatriculation *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function VehiculesComponent_Conditional_45_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.immatriculation, $event) || (ctx_r1.form.immatriculation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 23)(13, "label", 24);
    \u0275\u0275text(14, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function VehiculesComponent_Conditional_45_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(16, VehiculesComponent_Conditional_45_For_17_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 22)(19, "div", 23)(20, "label", 24);
    \u0275\u0275text(21, "Marque / Mod\xE8le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function VehiculesComponent_Conditional_45_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.marque, $event) || (ctx_r1.form.marque = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 23)(24, "label", 24);
    \u0275\u0275text(25, "Capacit\xE9 (kg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function VehiculesComponent_Conditional_45_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.capacite, $event) || (ctx_r1.form.capacite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 22)(28, "div", 23)(29, "label", 24);
    \u0275\u0275text(30, "Chauffeur assign\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function VehiculesComponent_Conditional_45_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.chauffeur, $event) || (ctx_r1.form.chauffeur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 23)(33, "label", 24);
    \u0275\u0275text(34, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function VehiculesComponent_Conditional_45_Template_select_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.statut, $event) || (ctx_r1.form.statut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(36, VehiculesComponent_Conditional_45_For_37_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 22)(39, "div", 23)(40, "label", 24);
    \u0275\u0275text(41, "Dernier entretien");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function VehiculesComponent_Conditional_45_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateEntretien, $event) || (ctx_r1.form.dateEntretien = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 23)(44, "label", 24);
    \u0275\u0275text(45, "Prochain entretien");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function VehiculesComponent_Conditional_45_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.prochainEntretien, $event) || (ctx_r1.form.prochainEntretien = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 22)(48, "div", 23)(49, "label", 24);
    \u0275\u0275text(50, "Expiration assurance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function VehiculesComponent_Conditional_45_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.assuranceExpiration, $event) || (ctx_r1.form.assuranceExpiration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 23)(53, "label", 24);
    \u0275\u0275text(54, "Km total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function VehiculesComponent_Conditional_45_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.kmTotal, $event) || (ctx_r1.form.kmTotal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 23)(57, "label", 24);
    \u0275\u0275text(58, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function VehiculesComponent_Conditional_45_Template_textarea_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.notes, $event) || (ctx_r1.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 31)(61, "button", 32);
    \u0275\u0275listener("click", function VehiculesComponent_Conditional_45_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275text(62, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 5);
    \u0275\u0275listener("click", function VehiculesComponent_Conditional_45_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addVehicule());
    });
    \u0275\u0275text(64, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.immatriculation);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.types);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.marque);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.capacite);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.chauffeur);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.statut);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statuts);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateEntretien);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.prochainEntretien);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.assuranceExpiration);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.kmTotal);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.notes);
  }
}
var VehiculesComponent = class _VehiculesComponent {
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
  vehicules = [
    { id: "1", immatriculation: "11 BF 2201", type: "Camion porteur", marque: "MAN TGS 26.480", capacite: 15e3, chauffeur: "Kon\xE9 Seydou", statut: "En mission", kmTotal: 182400, dateEntretien: "2024-03-01", prochainEntretien: "2024-06-01", assuranceExpiration: "2025-01-15", notes: "" },
    { id: "2", immatriculation: "11 BF 2202", type: "Camion porteur", marque: "MAN TGS 26.480", capacite: 15e3, chauffeur: "Niki\xE9ma Lassina", statut: "Disponible", kmTotal: 145200, dateEntretien: "2024-03-15", prochainEntretien: "2024-06-15", assuranceExpiration: "2025-02-20", notes: "" },
    { id: "3", immatriculation: "11 BF 2203", type: "Camion porteur", marque: "Mercedes Actros", capacite: 18e3, chauffeur: "Traor\xE9 Karim", statut: "En mission", kmTotal: 220100, dateEntretien: "2024-02-20", prochainEntretien: "2024-05-20", assuranceExpiration: "2024-12-31", notes: "Vidange \xE0 faire" },
    { id: "4", immatriculation: "11 BF 2204", type: "Semi-remorque", marque: "Volvo FH 500", capacite: 28e3, chauffeur: "Barry Moussa", statut: "Disponible", kmTotal: 310500, dateEntretien: "2024-04-01", prochainEntretien: "2024-07-01", assuranceExpiration: "2025-03-10", notes: "" },
    { id: "5", immatriculation: "11 BF 2205", type: "Camion porteur", marque: "MAN TGX 18.460", capacite: 12e3, chauffeur: "Zongo Firmin", statut: "En mission", kmTotal: 98700, dateEntretien: "2024-02-10", prochainEntretien: "2024-05-10", assuranceExpiration: "2024-11-30", notes: "" },
    { id: "6", immatriculation: "11 BF 2206", type: "Camion porteur", marque: "Renault T 480", capacite: 14e3, chauffeur: "Ou\xE9draogo Marc", statut: "Disponible", kmTotal: 167800, dateEntretien: "2024-03-25", prochainEntretien: "2024-06-25", assuranceExpiration: "2025-04-05", notes: "" },
    { id: "7", immatriculation: "11 BF 2207", type: "Fourgon", marque: "Mercedes Sprinter", capacite: 1500, chauffeur: "Compaor\xE9 Yvan", statut: "Disponible", kmTotal: 54300, dateEntretien: "2024-04-10", prochainEntretien: "2024-10-10", assuranceExpiration: "2025-01-20", notes: "" },
    { id: "8", immatriculation: "11 BF 2208", type: "Semi-remorque", marque: "DAF XF 530", capacite: 28e3, chauffeur: "Diallo Ibou", statut: "En mission", kmTotal: 425e3, dateEntretien: "2024-03-10", prochainEntretien: "2024-06-10", assuranceExpiration: "2025-05-12", notes: "" },
    { id: "9", immatriculation: "11 BF 2209", type: "Frigorifique", marque: "Iveco Daily +7\xB0", capacite: 5e3, chauffeur: "\u2014", statut: "En entretien", kmTotal: 88400, dateEntretien: "2024-04-18", prochainEntretien: "2024-07-18", assuranceExpiration: "2025-02-14", notes: "R\xE9vision compresseur froid" },
    { id: "10", immatriculation: "11 BF 2210", type: "Camionnette", marque: "Toyota Hilux", capacite: 1e3, chauffeur: "Kabor\xE9 Rasman\xE9", statut: "Disponible", kmTotal: 72100, dateEntretien: "2024-02-28", prochainEntretien: "2024-05-28", assuranceExpiration: "2024-10-15", notes: "Assurance \xE0 renouveler" },
    { id: "11", immatriculation: "11 BF 2211", type: "Camion porteur", marque: "Scania R 450", capacite: 16e3, chauffeur: "\u2014", statut: "En panne", kmTotal: 198300, dateEntretien: "2024-01-15", prochainEntretien: "2024-04-15", assuranceExpiration: "2025-01-08", notes: "Bo\xEEte de vitesse HS" },
    { id: "12", immatriculation: "11 BF 2212", type: "Tracteur", marque: "MAN TGX 18.460", capacite: 25e3, chauffeur: "Sawadogo Sylvain", statut: "Disponible", kmTotal: 251e3, dateEntretien: "2024-04-05", prochainEntretien: "2024-07-05", assuranceExpiration: "2025-06-30", notes: "" }
  ];
  get filtered() {
    const t = this.activeTab();
    if (t === "dispo")
      return this.vehicules.filter((v) => v.statut === "Disponible");
    if (t === "mission")
      return this.vehicules.filter((v) => v.statut === "En mission");
    if (t === "maintenance")
      return this.vehicules.filter((v) => v.statut === "En entretien" || v.statut === "En panne" || v.statut === "Hors service");
    return this.vehicules;
  }
  get disponibles() {
    return this.vehicules.filter((v) => v.statut === "Disponible").length;
  }
  get enMission() {
    return this.vehicules.filter((v) => v.statut === "En mission").length;
  }
  get enMaintenance() {
    return this.vehicules.filter((v) => v.statut === "En entretien" || v.statut === "En panne").length;
  }
  statutClass(s) {
    const m = {
      "Disponible": "badge badge--green",
      "En mission": "badge badge--blue",
      "En entretien": "badge badge--yellow",
      "En panne": "badge badge--red",
      "Hors service": "badge badge--gray"
    };
    return m[s];
  }
  addVehicule() {
    if (!this.form.immatriculation)
      return;
    this.vehicules.unshift(__spreadValues({ id: Date.now().toString() }, this.form));
    this.form = this.empty();
    this.showForm.set(false);
  }
  empty() {
    return { immatriculation: "", type: "Camion porteur", marque: "", capacite: 0, chauffeur: "", statut: "Disponible", kmTotal: 0, dateEntretien: "", prochainEntretien: "", assuranceExpiration: "", notes: "" };
  }
  types = ["Camion porteur", "Semi-remorque", "Frigorifique", "Camionnette", "Fourgon", "Tracteur"];
  statuts = ["Disponible", "En mission", "En entretien", "En panne", "Hors service"];
  constructor(store) {
    this.store = store;
  }
  static \u0275fac = function VehiculesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VehiculesComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VehiculesComponent, selectors: [["app-vehicules"]], decls: 46, vars: 17, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "tabs"], [1, "tab", 3, "click"], [1, "table-wrap"], [1, "table"], [1, "modal-overlay"], [1, "mono"], [1, "text-muted"], [1, "fw-med"], [1, "text-muted", "text-sm", 2, "margin-top", "2px"], ["colspan", "9", 2, "text-align", "center", "color", "#aaa", "padding", "32px", "font-style", "italic"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal--wide", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], ["placeholder", "11 BF 0000", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field__select", 3, "ngModelChange", "ngModel"], [1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field__textarea", 3, "ngModelChange", "ngModel"], [1, "modal__foot"], [1, "btn", "btn--ghost", 3, "click"]], template: function VehiculesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Flotte de v\xE9hicules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function VehiculesComponent_Template_button_click_8_listener() {
        return ctx.showForm.set(true);
      });
      \u0275\u0275text(9, "+ Ajouter v\xE9hicule");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
      \u0275\u0275listener("click", function VehiculesComponent_Template_button_click_11_listener() {
        return ctx.activeTab.set("tout");
      });
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function VehiculesComponent_Template_button_click_13_listener() {
        return ctx.activeTab.set("dispo");
      });
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 7);
      \u0275\u0275listener("click", function VehiculesComponent_Template_button_click_15_listener() {
        return ctx.activeTab.set("mission");
      });
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 7);
      \u0275\u0275listener("click", function VehiculesComponent_Template_button_click_17_listener() {
        return ctx.activeTab.set("maintenance");
      });
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 8)(20, "table", 9)(21, "thead")(22, "tr")(23, "th");
      \u0275\u0275text(24, "Immatriculation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Marque / Mod\xE8le");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Capacit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Chauffeur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Km total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Prochain entretien");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Assurance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th");
      \u0275\u0275text(40, "Statut");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "tbody");
      \u0275\u0275repeaterCreate(42, VehiculesComponent_For_43_Template, 21, 12, "tr", null, _forTrack0);
      \u0275\u0275conditionalCreate(44, VehiculesComponent_Conditional_44_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(45, VehiculesComponent_Conditional_45_Template, 65, 11, "div", 10);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate3("", ctx.disponibles, " disponibles \xB7 ", ctx.enMission, " en mission \xB7 ", ctx.enMaintenance, " en maintenance");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeTab() === "tout");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Tous (", ctx.vehicules.length, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "dispo");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Disponibles (", ctx.disponibles, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "mission");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("En mission (", ctx.enMission, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "maintenance");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Maintenance (", ctx.enMaintenance, ")");
      \u0275\u0275advance(24);
      \u0275\u0275repeater(ctx.filtered);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filtered.length === 0 ? 44 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm() ? 45 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0d2137;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #1a6fa8);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #3498db;\n  border: 1.5px solid #3498db;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #eaf4fd;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f0f4f8;\n  color: #555;\n  border: 1.5px solid #dde5ef;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #0d2137;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #3498db;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f7fafc;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f4f8;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafcff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0d2137;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0d2137;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #3498db;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #e8eef4;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #1a6fa8);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #dde5ef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #3498db;\n  color: #3498db;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #3498db;\n  border-color: #3498db;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f4f8;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0d2137;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f4f8;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=vehicules.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VehiculesComponent, [{
    type: Component,
    args: [{ selector: "app-vehicules", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page"> <header class="page__header"> <div> <h1 class="page__title">Flotte de v\xE9hicules</h1> <p class="page__sub">{{ disponibles }} disponibles \xB7 {{ enMission }} en mission \xB7 {{ enMaintenance }} en maintenance</p> </div> <div class="page__actions"> <button class="btn btn--primary" (click)="showForm.set(true)">+ Ajouter v\xE9hicule</button> </div> </header> <div class="tabs"> <button class="tab" [class.active]="activeTab()==='tout'"(click)="activeTab.set('tout')">Tous ({{ vehicules.length }})</button> <button class="tab" [class.active]="activeTab()==='dispo'"(click)="activeTab.set('dispo')">Disponibles ({{ disponibles }})</button> <button class="tab" [class.active]="activeTab()==='mission'"(click)="activeTab.set('mission')">En mission ({{ enMission }})</button> <button class="tab" [class.active]="activeTab()==='maintenance'" (click)="activeTab.set('maintenance')">Maintenance ({{ enMaintenance }})</button> </div> <div class="table-wrap"> <table class="table"> <thead><tr><th>Immatriculation</th><th>Type</th><th>Marque / Mod\xE8le</th><th>Capacit\xE9</th><th>Chauffeur</th><th>Km total</th><th>Prochain entretien</th><th>Assurance</th><th>Statut</th></tr></thead> <tbody> @for (v of filtered; track v.id) {
          <tr> <td class="mono">{{ v.immatriculation }}</td> <td class="text-muted">{{ v.type }}</td> <td class="fw-med">{{ v.marque }}</td> <td class="text-muted">{{ v.capacite.toLocaleString() }} kg</td> <td class="text-muted">{{ v.chauffeur || '\u2014' }}</td> <td class="text-muted">{{ v.kmTotal.toLocaleString() }} km</td> <td class="text-muted">{{ v.prochainEntretien }}</td> <td class="text-muted">{{ v.assuranceExpiration }}</td> <td> <span [class]="statutClass(v.statut)">{{ v.statut }}</span> @if (v.notes) { <div class="text-muted text-sm" style="margin-top:2px;">{{ v.notes }}</div> }
            </td> </tr> }
        @if (filtered.length === 0) { <tr><td colspan="9" style="text-align:center;color:#aaa;padding:32px;font-style:italic;">Aucun v\xE9hicule.</td></tr> }
      </tbody> </table> </div>
</div> @if (showForm()) {
  <div class="modal-overlay" (click)="showForm.set(false)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"><span class="modal__title">Ajouter un v\xE9hicule</span><button class="modal__close" (click)="showForm.set(false)"></button></div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">Immatriculation *</label><input [(ngModel)]="form.immatriculation" class="field__input" placeholder="11 BF 0000" /></div> <div class="field"><label class="field__label">Type</label><select [(ngModel)]="form.type" class="field__select">@for (t of types; track t){<option>{{ t }}</option>}</select></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Marque / Mod\xE8le</label><input [(ngModel)]="form.marque" class="field__input" /></div> <div class="field"><label class="field__label">Capacit\xE9 (kg)</label><input [(ngModel)]="form.capacite" type="number" class="field__input" /></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Chauffeur assign\xE9</label><input [(ngModel)]="form.chauffeur" class="field__input" /></div> <div class="field"><label class="field__label">Statut</label><select [(ngModel)]="form.statut" class="field__select">@for (s of statuts; track s){<option>{{ s }}</option>}</select></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Dernier entretien</label><input [(ngModel)]="form.dateEntretien" type="date" class="field__input" /></div> <div class="field"><label class="field__label">Prochain entretien</label><input [(ngModel)]="form.prochainEntretien" type="date" class="field__input" /></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Expiration assurance</label><input [(ngModel)]="form.assuranceExpiration" type="date" class="field__input" /></div> <div class="field"><label class="field__label">Km total</label><input [(ngModel)]="form.kmTotal" type="number" class="field__input" /></div> </div> <div class="field"><label class="field__label">Notes</label><textarea [(ngModel)]="form.notes" class="field__textarea"></textarea></div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showForm.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addVehicule()">Enregistrer</button> </div> </div> </div>
}
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-logistique/src/app/pages/vehicules/vehicules.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0d2137;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #1a6fa8);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #3498db;\n  border: 1.5px solid #3498db;\n}\n.btn--outline:hover {\n  background: #eaf4fd;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f0f4f8;\n  color: #555;\n  border: 1.5px solid #dde5ef;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.card__link {\n  font-size: 12px;\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #0d2137;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #3498db;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f7fafc;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f4f8;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafcff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #0d2137;\n}\n.fw-med {\n  font-weight: 600;\n  color: #0d2137;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #3498db;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #e8eef4;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #1a6fa8);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #dde5ef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #3498db;\n  color: #3498db;\n}\n.tab.active {\n  background: #3498db;\n  border-color: #3498db;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.search-input:focus {\n  border-color: #3498db;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f4f8;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0d2137;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f4f8;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #3498db;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=vehicules.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VehiculesComponent, { className: "VehiculesComponent", filePath: "app/pages/vehicules/vehicules.component.ts", lineNumber: 18 });
})();
export {
  VehiculesComponent
};
//# sourceMappingURL=chunk-5U7MKYGM.js.map
