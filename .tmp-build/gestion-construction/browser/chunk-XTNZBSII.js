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
  ɵɵproperty,
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

// projects/gestion-construction/src/app/pages/chantiers/chantiers.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var arrowFn0 = (ctx, view) => (c) => c.statut === "En retard";
function ChantiersComponent_For_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 29);
    \u0275\u0275listener("click", function ChantiersComponent_For_72_Template_tr_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(c_r2));
    });
    \u0275\u0275elementStart(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 34);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 33);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 35)(16, "div", 36)(17, "div", 37);
    \u0275\u0275element(18, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 39);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td")(22, "div", 31);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 32);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td")(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.ref);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r2.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.adresse);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.client);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.chefChantier);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", c_r2.avancement, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r2.avancement, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatMoney(c_r2.budget));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.formatMoney(c_r2.depenses), " d\xE9pens\xE9");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.statutClass(c_r2.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.statut);
  }
}
function ChantiersComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2, "Aucun chantier trouv\xE9.");
    \u0275\u0275elementEnd()();
  }
}
function ChantiersComponent_Conditional_74_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 49);
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selected().notes);
  }
}
function ChantiersComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function ChantiersComponent_Conditional_74_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275listener("click", function ChantiersComponent_Conditional_74_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 43)(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function ChantiersComponent_Conditional_74_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 46)(7, "div", 47)(8, "div", 48)(9, "span", 49);
    \u0275\u0275text(10, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 50);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 48)(14, "span", 49);
    \u0275\u0275text(15, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 50);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 47)(19, "div", 48)(20, "span", 49);
    \u0275\u0275text(21, "Type de travaux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 50);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 48)(25, "span", 49);
    \u0275\u0275text(26, "Chef de chantier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 50);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 47)(30, "div", 48)(31, "span", 49);
    \u0275\u0275text(32, "Date d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 50);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 48)(36, "span", 49);
    \u0275\u0275text(37, "Date fin pr\xE9vue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 50);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 47)(41, "div", 48)(42, "span", 49);
    \u0275\u0275text(43, "Budget (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 50);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 48)(47, "span", 49);
    \u0275\u0275text(48, "D\xE9penses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 50);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 48)(52, "span", 49);
    \u0275\u0275text(53, "Avancement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 51)(55, "div", 52);
    \u0275\u0275element(56, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 53);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(59, ChantiersComponent_Conditional_74_Conditional_59_Template, 5, 1, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 54)(61, "button", 55);
    \u0275\u0275listener("click", function ChantiersComponent_Conditional_74_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275text(62, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r2.selected().ref, " \u2014 ", ctx_r2.selected().nom);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.selected().client);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selected().adresse);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selected().type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selected().chefChantier);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selected().dateDebut);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selected().dateFin);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatMoney(ctx_r2.selected().budget));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatMoney(ctx_r2.selected().depenses));
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", ctx_r2.selected().avancement, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.selected().avancement, "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selected().notes ? 59 : -1);
  }
}
function ChantiersComponent_Conditional_75_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r6);
  }
}
function ChantiersComponent_Conditional_75_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7);
  }
}
function ChantiersComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function ChantiersComponent_Conditional_75_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275listener("click", function ChantiersComponent_Conditional_75_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 43)(3, "span", 44);
    \u0275\u0275text(4, "Nouveau chantier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function ChantiersComponent_Conditional_75_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 46)(7, "div", 47)(8, "div", 48)(9, "label", 49);
    \u0275\u0275text(10, "Nom du chantier *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ChantiersComponent_Conditional_75_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.nom, $event) || (ctx_r2.form.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 48)(13, "label", 49);
    \u0275\u0275text(14, "Client *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ChantiersComponent_Conditional_75_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.client, $event) || (ctx_r2.form.client = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 48)(17, "label", 49);
    \u0275\u0275text(18, "Adresse / Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ChantiersComponent_Conditional_75_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.adresse, $event) || (ctx_r2.form.adresse = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 47)(21, "div", 48)(22, "label", 49);
    \u0275\u0275text(23, "Type de travaux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ChantiersComponent_Conditional_75_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.type, $event) || (ctx_r2.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(25, ChantiersComponent_Conditional_75_For_26_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 48)(28, "label", 49);
    \u0275\u0275text(29, "Chef de chantier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ChantiersComponent_Conditional_75_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.chefChantier, $event) || (ctx_r2.form.chefChantier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 47)(32, "div", 48)(33, "label", 49);
    \u0275\u0275text(34, "Date de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ChantiersComponent_Conditional_75_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.dateDebut, $event) || (ctx_r2.form.dateDebut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 48)(37, "label", 49);
    \u0275\u0275text(38, "Date de fin pr\xE9vue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ChantiersComponent_Conditional_75_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.dateFin, $event) || (ctx_r2.form.dateFin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 47)(41, "div", 48)(42, "label", 49);
    \u0275\u0275text(43, "Budget (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function ChantiersComponent_Conditional_75_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.budget, $event) || (ctx_r2.form.budget = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 48)(46, "label", 49);
    \u0275\u0275text(47, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ChantiersComponent_Conditional_75_Template_select_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.statut, $event) || (ctx_r2.form.statut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(49, ChantiersComponent_Conditional_75_For_50_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 48)(52, "label", 49);
    \u0275\u0275text(53, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "textarea", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ChantiersComponent_Conditional_75_Template_textarea_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.notes, $event) || (ctx_r2.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 54)(56, "button", 55);
    \u0275\u0275listener("click", function ChantiersComponent_Conditional_75_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm.set(false));
    });
    \u0275\u0275text(57, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 5);
    \u0275\u0275listener("click", function ChantiersComponent_Conditional_75_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addChantier());
    });
    \u0275\u0275text(59, "Cr\xE9er le chantier");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.nom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.client);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.adresse);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.types);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.chefChantier);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.dateDebut);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.dateFin);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.budget);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.statut);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.statuts);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.notes);
  }
}
var ChantiersComponent = class _ChantiersComponent {
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
  selected = signal(null, ...ngDevMode ? [{ debugName: "selected" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.emptyForm();
  chantiers = [
    { id: "1", ref: "CH-001", nom: "R\xE9sidence Les Palmiers", client: "SCI Palmiers", adresse: "Ouagadougou, Secteur 15", type: "Gros \u0153uvre", dateDebut: "2024-01-15", dateFin: "2024-09-30", budget: 85e6, depenses: 612e5, avancement: 72, statut: "En cours", chefChantier: "Kouam\xE9 Jean", notes: "" },
    { id: "2", ref: "CH-002", nom: "Immeuble Bureau Centre", client: "SARL Immobuild", adresse: "Ouagadougou, Zogona", type: "Gros \u0153uvre", dateDebut: "2024-02-01", dateFin: "2024-12-31", budget: 12e7, depenses: 54e6, avancement: 45, statut: "En cours", chefChantier: "Traor\xE9 Ibrahim", notes: "Fondations sp\xE9ciales" },
    { id: "3", ref: "CH-003", nom: "Route Nationale RN4", client: "Minist\xE8re Travaux", adresse: "RN4 km 12-28", type: "VRD", dateDebut: "2023-10-01", dateFin: "2024-05-31", budget: 2e8, depenses: 182e6, avancement: 91, statut: "Finition", chefChantier: "Sawadogo Paul", notes: "" },
    { id: "4", ref: "CH-004", nom: "Entrep\xF4t Logistique Port", client: "TransAfric SARL", adresse: "Zone industrielle", type: "G\xE9nie civil", dateDebut: "2024-03-01", dateFin: "2024-08-31", budget: 55e6, depenses: 99e5, avancement: 18, statut: "En retard", chefChantier: "Diallo Moussa", notes: "Retard approvisionnement" },
    { id: "5", ref: "CH-005", nom: "\xC9cole Primaire Kossodo", client: "Mairie Kossodo", adresse: "Kossodo", type: "Second \u0153uvre", dateDebut: "2024-01-20", dateFin: "2024-07-15", budget: 32e6, depenses: 2016e4, avancement: 63, statut: "En cours", chefChantier: "Ou\xE9draogo Serge", notes: "" },
    { id: "6", ref: "CH-006", nom: "Villa Luxe Ouaga 2000", client: "M. Compaor\xE9 A.", adresse: "Ouaga 2000, lot 45", type: "Second \u0153uvre", dateDebut: "2024-04-01", dateFin: "2024-10-31", budget: 48e6, depenses: 0, avancement: 0, statut: "Planifi\xE9", chefChantier: "Traor\xE9 Ibrahim", notes: "" },
    { id: "7", ref: "CH-007", nom: "R\xE9habilitation Stade", client: "Minist\xE8re Sports", adresse: "Ouagadougou, Secteur 4", type: "R\xE9habilitation", dateDebut: "2023-06-01", dateFin: "2024-03-31", budget: 75e6, depenses: 75e6, avancement: 100, statut: "Termin\xE9", chefChantier: "Sawadogo Paul", notes: "Livr\xE9 avec 2 sem avance" }
  ];
  get filtered() {
    let list = this.chantiers;
    const q = this.search().toLowerCase();
    if (q)
      list = list.filter((c) => c.nom.toLowerCase().includes(q) || c.client.toLowerCase().includes(q) || c.ref.toLowerCase().includes(q));
    const t = this.activeTab();
    if (t === "en-cours")
      list = list.filter((c) => c.statut === "En cours" || c.statut === "Finition" || c.statut === "Planifi\xE9");
    if (t === "retard")
      list = list.filter((c) => c.statut === "En retard" || c.statut === "Suspendu");
    if (t === "termine")
      list = list.filter((c) => c.statut === "Termin\xE9");
    return list;
  }
  get totalBudget() {
    return this.chantiers.filter((c) => c.statut !== "Termin\xE9").reduce((s, c) => s + c.budget, 0);
  }
  get totalDepenses() {
    return this.chantiers.reduce((s, c) => s + c.depenses, 0);
  }
  get actifs() {
    return this.chantiers.filter((c) => c.statut === "En cours" || c.statut === "Finition").length;
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
      "Finition": "badge badge--green",
      "En retard": "badge badge--red",
      "Termin\xE9": "badge badge--gray",
      "Suspendu": "badge badge--yellow",
      "Planifi\xE9": "badge badge--purple"
    };
    return m[s];
  }
  addChantier() {
    if (!this.form.nom || !this.form.client)
      return;
    const num = this.chantiers.length + 1;
    const ref = "CH-" + String(num).padStart(3, "0");
    this.chantiers.unshift(__spreadValues({ id: Date.now().toString(), ref }, this.form));
    this.form = this.emptyForm();
    this.showForm.set(false);
  }
  emptyForm() {
    return { nom: "", client: "", adresse: "", type: "Gros \u0153uvre", dateDebut: "", dateFin: "", budget: 0, depenses: 0, avancement: 0, statut: "Planifi\xE9", chefChantier: "", notes: "" };
  }
  types = ["Gros \u0153uvre", "Second \u0153uvre", "VRD", "G\xE9nie civil", "R\xE9habilitation", "Autre"];
  statuts = ["Planifi\xE9", "En cours", "Finition", "En retard", "Suspendu", "Termin\xE9"];
  constructor(store) {
    this.store = store;
  }
  static \u0275fac = function ChantiersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChantiersComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChantiersComponent, selectors: [["app-chantiers"]], decls: 76, vars: 20, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "kpi-grid", 2, "grid-template-columns", "repeat(4,1fr)"], [1, "kpi-card", 2, "border-left-color", "#e67e22"], [1, "kpi-card__icon", 2, "background", "#fef0e7"], [1, "kpi-card__body"], [1, "kpi-card__value", 2, "color", "#e67e22"], [1, "kpi-card__label"], [1, "kpi-card", 2, "border-left-color", "#2980b9"], [1, "kpi-card__icon", 2, "background", "#d6eaf8"], [1, "kpi-card__value", 2, "color", "#2980b9"], [1, "kpi-card", 2, "border-left-color", "#e74c3c"], [1, "kpi-card__icon", 2, "background", "#fdecea"], [1, "kpi-card__value", 2, "color", "#e74c3c"], [1, "kpi-card", 2, "border-left-color", "#27ae60"], [1, "kpi-card__icon", 2, "background", "#d5f5e3"], [1, "kpi-card__value", 2, "color", "#27ae60"], [1, "filter-bar"], ["placeholder", "Rechercher un chantier, client\u2026", 1, "search-input", 3, "input", "value"], [1, "tabs"], [1, "tab", 3, "click"], [1, "table-wrap"], [1, "table"], [2, "cursor", "pointer"], [1, "modal-overlay"], [2, "cursor", "pointer", 3, "click"], [1, "mono"], [1, "fw-med"], [1, "text-muted", "text-sm"], [1, "text-muted"], [1, "badge", "badge--orange"], [2, "min-width", "130px"], [2, "display", "flex", "align-items", "center", "gap", "8px"], [1, "progress-bar", 2, "flex", "1"], [1, "progress-bar__fill"], [1, "text-sm", "text-muted"], ["colspan", "8", 2, "text-align", "center", "color", "#aaa", "padding", "32px", "font-style", "italic"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal--wide", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], [1, "detail-val"], [2, "display", "flex", "align-items", "center", "gap", "10px", "margin-top", "4px"], [1, "progress-bar", 2, "flex", "1", "height", "10px"], [1, "fw-bold"], [1, "modal__foot"], [1, "btn", "btn--ghost", 3, "click"], ["placeholder", "R\xE9sidence, Route, B\xE2timent\u2026", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "Nom du ma\xEEtre d'ouvrage", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "Quartier, ville\u2026", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field__select", 3, "ngModelChange", "ngModel"], ["placeholder", "Nom du responsable", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "0", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "Observations particuli\xE8res\u2026", 1, "field__textarea", 3, "ngModelChange", "ngModel"]], template: function ChantiersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Chantiers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function ChantiersComponent_Template_button_click_8_listener() {
        return ctx.showForm.set(true);
      });
      \u0275\u0275text(9, "+ Nouveau chantier");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7);
      \u0275\u0275element(12, "div", 8);
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 11);
      \u0275\u0275text(17, "Total chantiers");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 12);
      \u0275\u0275element(19, "div", 13);
      \u0275\u0275elementStart(20, "div", 9)(21, "div", 14);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 11);
      \u0275\u0275text(24, "En cours");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15);
      \u0275\u0275element(26, "div", 16);
      \u0275\u0275elementStart(27, "div", 9)(28, "div", 17);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 11);
      \u0275\u0275text(31, "En retard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 18);
      \u0275\u0275element(33, "div", 19);
      \u0275\u0275elementStart(34, "div", 9)(35, "div", 20);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 11);
      \u0275\u0275text(38, "Budget total");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 21)(40, "input", 22);
      \u0275\u0275listener("input", function ChantiersComponent_Template_input_input_40_listener($event) {
        return ctx.search.set($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 23)(42, "button", 24);
      \u0275\u0275listener("click", function ChantiersComponent_Template_button_click_42_listener() {
        return ctx.activeTab.set("tout");
      });
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 24);
      \u0275\u0275listener("click", function ChantiersComponent_Template_button_click_44_listener() {
        return ctx.activeTab.set("en-cours");
      });
      \u0275\u0275text(45, "En cours / Planifi\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 24);
      \u0275\u0275listener("click", function ChantiersComponent_Template_button_click_46_listener() {
        return ctx.activeTab.set("retard");
      });
      \u0275\u0275text(47, "En retard / Suspendu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "button", 24);
      \u0275\u0275listener("click", function ChantiersComponent_Template_button_click_48_listener() {
        return ctx.activeTab.set("termine");
      });
      \u0275\u0275text(49, "Termin\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 25)(51, "table", 26)(52, "thead")(53, "tr")(54, "th");
      \u0275\u0275text(55, "R\xE9f.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th");
      \u0275\u0275text(57, "Chantier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th");
      \u0275\u0275text(59, "Client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th");
      \u0275\u0275text(61, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th");
      \u0275\u0275text(63, "Chef de chantier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th");
      \u0275\u0275text(65, "Avancement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th");
      \u0275\u0275text(67, "Budget / D\xE9penses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th");
      \u0275\u0275text(69, "Statut");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "tbody");
      \u0275\u0275repeaterCreate(71, ChantiersComponent_For_72_Template, 29, 14, "tr", 27, _forTrack0);
      \u0275\u0275conditionalCreate(73, ChantiersComponent_Conditional_73_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(74, ChantiersComponent_Conditional_74_Template, 63, 14, "div", 28);
      \u0275\u0275conditionalCreate(75, ChantiersComponent_Conditional_75_Template, 60, 10, "div", 28);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.actifs, " actifs \xB7 Budget total : ", ctx.formatMoney(ctx.totalBudget), " FCFA");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.chantiers.length);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.actifs);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.chantiers.filter(\u0275\u0275arrowFunction(19, arrowFn0, ctx)).length);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.formatMoney(ctx.totalBudget));
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.search());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "tout");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Tous (", ctx.chantiers.length, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "en-cours");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "retard");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "termine");
      \u0275\u0275advance(23);
      \u0275\u0275repeater(ctx.filtered);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filtered.length === 0 ? 73 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selected() ? 74 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm() ? 75 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff5ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbfc;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a8fa8;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 680px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.detail-val[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333;\n  font-weight: 600;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=chantiers.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChantiersComponent, [{
    type: Component,
    args: [{ selector: "app-chantiers", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page"> <header class="page__header"> <div> <h1 class="page__title">Chantiers</h1> <p class="page__sub">{{ actifs }} actifs \xB7 Budget total : {{ formatMoney(totalBudget) }} FCFA</p> </div> <div class="page__actions"> <button class="btn btn--primary" (click)="showForm.set(true)">+ Nouveau chantier</button> </div> </header> <!-- Stats --> <div class="kpi-grid" style="grid-template-columns:repeat(4,1fr);"> <div class="kpi-card" style="border-left-color:#e67e22;"> <div class="kpi-card__icon" style="background:#fef0e7;"></div> <div class="kpi-card__body"> <div class="kpi-card__value" style="color:#e67e22;">{{ chantiers.length }}</div> <div class="kpi-card__label">Total chantiers</div> </div> </div> <div class="kpi-card" style="border-left-color:#2980b9;"> <div class="kpi-card__icon" style="background:#d6eaf8;"></div> <div class="kpi-card__body"> <div class="kpi-card__value" style="color:#2980b9;">{{ actifs }}</div> <div class="kpi-card__label">En cours</div> </div> </div> <div class="kpi-card" style="border-left-color:#e74c3c;"> <div class="kpi-card__icon" style="background:#fdecea;"></div> <div class="kpi-card__body"> <div class="kpi-card__value" style="color:#e74c3c;">{{ chantiers.filter(c => c.statut === 'En retard').length }}</div> <div class="kpi-card__label">En retard</div> </div> </div> <div class="kpi-card" style="border-left-color:#27ae60;"> <div class="kpi-card__icon" style="background:#d5f5e3;"></div> <div class="kpi-card__body"> <div class="kpi-card__value" style="color:#27ae60;">{{ formatMoney(totalBudget) }}</div> <div class="kpi-card__label">Budget total</div> </div> </div> </div> <!-- Tabs + search --> <div class="filter-bar"> <input class="search-input" [value]="search()" (input)="search.set($any($event.target).value)" placeholder="Rechercher un chantier, client\u2026" /> </div> <div class="tabs"> <button class="tab" [class.active]="activeTab()==='tout'"(click)="activeTab.set('tout')">Tous ({{ chantiers.length }})</button> <button class="tab" [class.active]="activeTab()==='en-cours'" (click)="activeTab.set('en-cours')">En cours / Planifi\xE9</button> <button class="tab" [class.active]="activeTab()==='retard'"(click)="activeTab.set('retard')">En retard / Suspendu</button> <button class="tab" [class.active]="activeTab()==='termine'"(click)="activeTab.set('termine')">Termin\xE9s</button> </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>R\xE9f.</th> <th>Chantier</th> <th>Client</th> <th>Type</th> <th>Chef de chantier</th> <th>Avancement</th> <th>Budget / D\xE9penses</th> <th>Statut</th> </tr> </thead> <tbody> @for (c of filtered; track c.id) {
          <tr (click)="selected.set(c)" style="cursor:pointer;"> <td class="mono">{{ c.ref }}</td> <td> <div class="fw-med">{{ c.nom }}</div> <div class="text-muted text-sm">{{ c.adresse }}</div> </td> <td class="text-muted">{{ c.client }}</td> <td><span class="badge badge--orange">{{ c.type }}</span></td> <td class="text-muted">{{ c.chefChantier }}</td> <td style="min-width:130px;"> <div style="display:flex;align-items:center;gap:8px;"> <div class="progress-bar" style="flex:1;"> <div class="progress-bar__fill" [style.width.%]="c.avancement"></div> </div> <span class="text-sm text-muted">{{ c.avancement }}%</span> </div> </td> <td> <div class="fw-med">{{ formatMoney(c.budget) }}</div> <div class="text-muted text-sm">{{ formatMoney(c.depenses) }} d\xE9pens\xE9</div> </td> <td><span [class]="statutClass(c.statut)">{{ c.statut }}</span></td> </tr> }
        @if (filtered.length === 0) {
          <tr><td colspan="8" style="text-align:center;color:#aaa;padding:32px;font-style:italic;">Aucun chantier trouv\xE9.</td></tr> }
      </tbody> </table> </div>
</div> <!-- Detail panel -->
@if (selected()) {
  <div class="modal-overlay" (click)="selected.set(null)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">{{ selected()!.ref }} \u2014 {{ selected()!.nom }}</span> <button class="modal__close" (click)="selected.set(null)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><span class="field__label">Client</span><div class="detail-val">{{ selected()!.client }}</div></div> <div class="field"><span class="field__label">Adresse</span><div class="detail-val">{{ selected()!.adresse }}</div></div> </div> <div class="fields-row"> <div class="field"><span class="field__label">Type de travaux</span><div class="detail-val">{{ selected()!.type }}</div></div> <div class="field"><span class="field__label">Chef de chantier</span><div class="detail-val">{{ selected()!.chefChantier }}</div></div> </div> <div class="fields-row"> <div class="field"><span class="field__label">Date d\xE9but</span><div class="detail-val">{{ selected()!.dateDebut }}</div></div> <div class="field"><span class="field__label">Date fin pr\xE9vue</span><div class="detail-val">{{ selected()!.dateFin }}</div></div> </div> <div class="fields-row"> <div class="field"><span class="field__label">Budget (FCFA)</span><div class="detail-val">{{ formatMoney(selected()!.budget) }}</div></div> <div class="field"><span class="field__label">D\xE9penses</span><div class="detail-val">{{ formatMoney(selected()!.depenses) }}</div></div> </div> <div class="field"> <span class="field__label">Avancement</span> <div style="display:flex;align-items:center;gap:10px;margin-top:4px;"> <div class="progress-bar" style="flex:1;height:10px;"><div class="progress-bar__fill" [style.width.%]="selected()!.avancement"></div></div> <span class="fw-bold">{{ selected()!.avancement }}%</span> </div> </div> @if (selected()!.notes) {
          <div class="field"><span class="field__label">Notes</span><div class="detail-val">{{ selected()!.notes }}</div></div> }
      </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="selected.set(null)">Fermer</button> </div> </div> </div>
}

<!-- Add form -->
@if (showForm()) {
  <div class="modal-overlay" (click)="showForm.set(false)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Nouveau chantier</span> <button class="modal__close" (click)="showForm.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"> <label class="field__label">Nom du chantier *</label> <input [(ngModel)]="form.nom" class="field__input" placeholder="R\xE9sidence, Route, B\xE2timent\u2026" /> </div> <div class="field"> <label class="field__label">Client *</label> <input [(ngModel)]="form.client" class="field__input" placeholder="Nom du ma\xEEtre d'ouvrage" /> </div> </div> <div class="field"> <label class="field__label">Adresse / Localisation</label> <input [(ngModel)]="form.adresse" class="field__input" placeholder="Quartier, ville\u2026" /> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Type de travaux</label> <select [(ngModel)]="form.type" class="field__select"> @for (t of types; track t) { <option>{{ t }}</option> }
            </select> </div> <div class="field"> <label class="field__label">Chef de chantier</label> <input [(ngModel)]="form.chefChantier" class="field__input" placeholder="Nom du responsable" /> </div> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Date de d\xE9but</label> <input [(ngModel)]="form.dateDebut" type="date" class="field__input" /> </div> <div class="field"> <label class="field__label">Date de fin pr\xE9vue</label> <input [(ngModel)]="form.dateFin" type="date" class="field__input" /> </div> </div> <div class="fields-row"> <div class="field"> <label class="field__label">Budget (FCFA)</label> <input [(ngModel)]="form.budget" type="number" class="field__input" placeholder="0" /> </div> <div class="field"> <label class="field__label">Statut</label> <select [(ngModel)]="form.statut" class="field__select"> @for (s of statuts; track s) { <option>{{ s }}</option> }
            </select> </div> </div> <div class="field"> <label class="field__label">Notes</label> <textarea [(ngModel)]="form.notes" class="field__textarea" placeholder="Observations particuli\xE8res\u2026"></textarea> </div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showForm.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addChantier()">Cr\xE9er le chantier</button> </div> </div> </div>
}
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-construction/src/app/pages/chantiers/chantiers.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff5ee;\n}\n.btn--danger {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbfc;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted {\n  color: #8a8fa8;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 680px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.detail-val {\n  font-size: 14px;\n  color: #333;\n  font-weight: 600;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=chantiers.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChantiersComponent, { className: "ChantiersComponent", filePath: "app/pages/chantiers/chantiers.component.ts", lineNumber: 33 });
})();
export {
  ChantiersComponent
};
//# sourceMappingURL=chunk-XTNZBSII.js.map
