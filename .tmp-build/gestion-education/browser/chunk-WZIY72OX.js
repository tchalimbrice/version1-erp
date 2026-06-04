import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ZNMYQNDK.js";
import {
  CommonModule,
  DecimalPipe
} from "./chunk-A7PCKB3Z.js";
import {
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WTFQPXVN.js";
import "./chunk-46DXP6YY.js";

// projects/gestion-education/src/app/pages/paiements/paiements.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.mois;
function PaiementsComponent_Conditional_21_For_45_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\u2713 Pay\xE9e");
    \u0275\u0275elementEnd();
  }
}
function PaiementsComponent_Conditional_21_For_45_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Non pay\xE9e");
    \u0275\u0275elementEnd();
  }
}
function PaiementsComponent_Conditional_21_For_45_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Retard");
    \u0275\u0275elementEnd();
  }
}
function PaiementsComponent_Conditional_21_For_45_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\xC0 jour");
    \u0275\u0275elementEnd();
  }
}
function PaiementsComponent_Conditional_21_For_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275conditionalCreate(9, PaiementsComponent_Conditional_21_For_45_Conditional_9_Template, 2, 0, "span", 28)(10, PaiementsComponent_Conditional_21_For_45_Conditional_10_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275conditionalCreate(15, PaiementsComponent_Conditional_21_For_45_Conditional_15_Template, 2, 0, "span", 29)(16, PaiementsComponent_Conditional_21_For_45_Conditional_16_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 30)(18, "button", 31);
    \u0275\u0275listener("click", function PaiementsComponent_Conditional_21_For_45_Template_button_click_18_listener() {
      const e_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.voirDetail(e_r4));
    });
    \u0275\u0275text(19, "D\xE9tail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 32);
    \u0275\u0275listener("click", function PaiementsComponent_Conditional_21_For_45_Template_button_click_20_listener() {
      const e_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.imprimerRecuInscription(e_r4));
    });
    \u0275\u0275text(21, "\u{1F5A8}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const e_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", e_r4.nom, " ", e_r4.prenom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r4.classe);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge--blue", e_r4.mode === "tranches")("badge--green", e_r4.mode === "complet");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r4.mode);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(e_r4.inscriptionPayee ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 11, e_r4.montantTotal, "1.0-0"), " FCFA");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.hasRetard(e_r4) ? 15 : 16);
  }
}
function PaiementsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275element(2, "div", 14);
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7, "\xC0 jour");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275element(9, "div", 19);
    \u0275\u0275elementStart(10, "div", 15)(11, "div", 16);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17);
    \u0275\u0275text(14, "En retard");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 20);
    \u0275\u0275element(16, "div", 21);
    \u0275\u0275elementStart(17, "div", 15)(18, "div", 16);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 17);
    \u0275\u0275text(21, "Total inscrits");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 11)(23, "div", 22)(24, "span", 23);
    \u0275\u0275text(25, "\xC9l\xE8ves inscrits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_21_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.search, $event) || (ctx_r1.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "table", 25)(28, "thead")(29, "tr")(30, "th");
    \u0275\u0275text(31, "Nom & Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Classe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Inscription");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Scolarit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "tbody");
    \u0275\u0275repeaterCreate(44, PaiementsComponent_Conditional_21_For_45_Template, 22, 14, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.aJour());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.enRetard());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.eleves().length);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.search);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.filteredEleves());
  }
}
function PaiementsComponent_Conditional_22_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r6 = ctx.$implicit;
    \u0275\u0275property("value", e_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", e_r6.nom, " ", e_r6.prenom, " \u2014 ", e_r6.classe);
  }
}
function PaiementsComponent_Conditional_22_Conditional_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function PaiementsComponent_Conditional_22_Conditional_13_For_5_Template_div_click_0_listener() {
      const ec_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.payerMois(ec_r8));
    });
    \u0275\u0275elementStart(1, "div", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ec_r8 = ctx.$implicit;
    \u0275\u0275classProp("pay\xE9", ec_r8.statut === "pay\xE9")("en-retard", ec_r8.statut === "en retard")("en-attente", ec_r8.statut === "en attente");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ec_r8.mois);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 11, ec_r8.montant, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ec_r8.statut === "pay\xE9" ? "#27ae60" : ec_r8.statut === "en retard" ? "#c0392b" : "#999");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ec_r8.statut === "pay\xE9" ? "\u2713 Pay\xE9" : ec_r8.statut === "en retard" ? "\u26A0 Retard" : "En attente", " ");
  }
}
function PaiementsComponent_Conditional_22_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48);
    \u0275\u0275repeaterCreate(4, PaiementsComponent_Conditional_22_Conditional_13_For_5_Template, 8, 14, "div", 49, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\xC9ch\xE9ancier \u2014 ", ctx_r1.selectedEleve().nom, " ", ctx_r1.selectedEleve().prenom);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.selectedEleve().echeances);
  }
}
function PaiementsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3, "Enregistrer un paiement");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 33)(5, "div", 34)(6, "label", 35);
    \u0275\u0275text(7, "S\xE9lectionner un \xE9l\xE8ve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_22_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pEleve, $event) || (ctx_r1.pEleve = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 37);
    \u0275\u0275text(10, "-- Choisir un \xE9l\xE8ve --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(11, PaiementsComponent_Conditional_22_For_12_Template, 2, 4, "option", 38, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, PaiementsComponent_Conditional_22_Conditional_13_Template, 6, 2, "div", 39);
    \u0275\u0275elementStart(14, "div", 40)(15, "div", 41)(16, "label", 35);
    \u0275\u0275text(17, "Type de paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_22_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.typePaiement, $event) || (ctx_r1.typePaiement = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 42);
    \u0275\u0275text(20, "Mensualit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 43);
    \u0275\u0275text(22, "Paiement complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 44);
    \u0275\u0275text(24, "Frais d'inscription");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 41)(26, "label", 35);
    \u0275\u0275text(27, "Montant (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_22_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.montantPaye, $event) || (ctx_r1.montantPaye = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 46);
    \u0275\u0275listener("click", function PaiementsComponent_Conditional_22_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enregistrerPaiement());
    });
    \u0275\u0275text(30, "Enregistrer et g\xE9n\xE9rer le re\xE7u");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pEleve);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.eleves());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectedEleve() ? 13 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.typePaiement);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.montantPaye);
  }
}
function PaiementsComponent_Conditional_23_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275property("value", c_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r10);
  }
}
function PaiementsComponent_Conditional_23_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "label", 35);
    \u0275\u0275text(2, "S\xE9rie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_23_Conditional_44_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.nInsc.serie, $event) || (ctx_r1.nInsc.serie = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "optgroup", 64)(5, "option", 65);
    \u0275\u0275text(6, "A4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 66);
    \u0275\u0275text(8, "D");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "optgroup", 67)(10, "option", 68);
    \u0275\u0275text(11, "F1 (\xC9lectronique)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 69);
    \u0275\u0275text(13, "F2 (G\xE9nie Civil)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 70);
    \u0275\u0275text(15, "G1 (Gestion)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 71);
    \u0275\u0275text(17, "G2 (Secr\xE9tariat)");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nInsc.serie);
  }
}
function PaiementsComponent_Conditional_23_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "label", 35);
    \u0275\u0275text(2, "Montant mensuel (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_23_Conditional_54_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.nInsc.montantMensuel, $event) || (ctx_r1.nInsc.montantMensuel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nInsc.montantMensuel);
  }
}
function PaiementsComponent_Conditional_23_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "label", 35);
    \u0275\u0275text(3, "Date limite de paiement (jour du mois)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_23_Conditional_55_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.nInsc.jourLimite, $event) || (ctx_r1.nInsc.jourLimite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 73);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nInsc.jourLimite);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u2139\uFE0F Une notification sera envoy\xE9e au comptable le ", ctx_r1.nInsc.jourLimite - 5 > 0 ? ctx_r1.nInsc.jourLimite - 5 : 1, " de chaque mois. ");
  }
}
function PaiementsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3, "Nouvelle inscription");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 54)(5, "div", 40)(6, "div", 41)(7, "label", 35);
    \u0275\u0275text(8, "Nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_23_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nInsc.nom, $event) || (ctx_r1.nInsc.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 41)(11, "label", 35);
    \u0275\u0275text(12, "Pr\xE9nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_23_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nInsc.prenom, $event) || (ctx_r1.nInsc.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 40)(15, "div", 41)(16, "label", 35);
    \u0275\u0275text(17, "Date de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_23_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nInsc.dateNaissance, $event) || (ctx_r1.nInsc.dateNaissance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 41)(20, "label", 35);
    \u0275\u0275text(21, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_23_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nInsc.nouveau, $event) || (ctx_r1.nInsc.nouveau = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 58);
    \u0275\u0275text(24, "Nouvel \xE9l\xE8ve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 58);
    \u0275\u0275text(26, "Ancien \xE9l\xE8ve");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 40)(28, "div", 41)(29, "label", 35);
    \u0275\u0275text(30, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_23_Template_select_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nInsc.niveau, $event) || (ctx_r1.nInsc.niveau = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(32, "option", 59);
    \u0275\u0275text(33, "Primaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 60);
    \u0275\u0275text(35, "Coll\xE8ge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 61);
    \u0275\u0275text(37, "Lyc\xE9e");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 41)(39, "label", 35);
    \u0275\u0275text(40, "Classe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_23_Template_select_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nInsc.classe, $event) || (ctx_r1.nInsc.classe = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(42, PaiementsComponent_Conditional_23_For_43_Template, 2, 2, "option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(44, PaiementsComponent_Conditional_23_Conditional_44_Template, 18, 1, "div", 41);
    \u0275\u0275elementStart(45, "div", 40)(46, "div", 41)(47, "label", 35);
    \u0275\u0275text(48, "Mode de paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_23_Template_select_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nInsc.mode, $event) || (ctx_r1.nInsc.mode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(50, "option", 62);
    \u0275\u0275text(51, "Paiement en tranches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 43);
    \u0275\u0275text(53, "Paiement complet");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(54, PaiementsComponent_Conditional_23_Conditional_54_Template, 4, 1, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(55, PaiementsComponent_Conditional_23_Conditional_55_Template, 7, 2);
    \u0275\u0275elementStart(56, "div", 40)(57, "div", 41)(58, "label", 35);
    \u0275\u0275text(59, "Frais d'inscription (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_23_Template_input_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nInsc.montantInscription, $event) || (ctx_r1.nInsc.montantInscription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 41)(62, "label", 35);
    \u0275\u0275text(63, "Montant total scolarit\xE9 (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function PaiementsComponent_Conditional_23_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nInsc.montantTotal, $event) || (ctx_r1.nInsc.montantTotal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "button", 63);
    \u0275\u0275listener("click", function PaiementsComponent_Conditional_23_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.inscrire());
    });
    \u0275\u0275text(66, "Inscrire et g\xE9n\xE9rer le re\xE7u d'inscription");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nInsc.nom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nInsc.prenom);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nInsc.dateNaissance);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nInsc.nouveau);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nInsc.niveau);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nInsc.classe);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.classesForNiveau(ctx_r1.nInsc.niveau));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.nInsc.niveau === "lycee" ? 44 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nInsc.mode);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.nInsc.mode === "tranches" ? 54 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nInsc.mode === "tranches" ? 55 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nInsc.montantInscription);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nInsc.montantTotal);
  }
}
function PaiementsComponent_Conditional_24_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 75);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "button", 31);
    \u0275\u0275listener("click", function PaiementsComponent_Conditional_24_For_23_Template_button_click_16_listener() {
      const r_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.imprimerRecu(r_r15));
    });
    \u0275\u0275text(17, "\u{1F5A8}\uFE0F Imprimer");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r15.numero);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r15.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r15.eleve);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r15.classe);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r15.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 6, r_r15.montant, "1.0-0"), " FCFA");
  }
}
function PaiementsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3, "Historique des re\xE7us");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "table", 25)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "N\xB0 Re\xE7u");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\xC9l\xE8ve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Classe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Montant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, PaiementsComponent_Conditional_24_For_23_Template, 18, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r1.recus());
  }
}
var PaiementsComponent = class _PaiementsComponent {
  tab = signal("liste", ...ngDevMode ? [{ debugName: "tab" }] : (
    /* istanbul ignore next */
    []
  ));
  search = "";
  pEleve = "";
  typePaiement = "mensuel";
  montantPaye = 0;
  nInsc = {
    nom: "",
    prenom: "",
    dateNaissance: "",
    nouveau: true,
    niveau: "college",
    classe: "6\xE8me A",
    serie: "D",
    mode: "tranches",
    montantMensuel: 15e3,
    montantInscription: 25e3,
    montantTotal: 135e3,
    jourLimite: 10
  };
  MOIS_SCOLAIRES = ["Septembre", "Octobre", "Novembre", "D\xE9cembre", "Janvier", "F\xE9vrier", "Mars", "Avril", "Mai", "Juin"];
  eleves = signal([
    {
      id: "1",
      nom: "KONAN",
      prenom: "Marie",
      classe: "3\xE8me A",
      niveau: "college",
      nouveau: false,
      anneeScolaire: "2025-2026",
      mode: "tranches",
      montantTotal: 18e4,
      montantInscription: 25e3,
      inscriptionPayee: true,
      dateNaissance: "2010-03-15",
      age: 16,
      echeances: this.MOIS_SCOLAIRES.map((m, i) => ({ mois: m, montant: 18e3, statut: i < 5 ? "pay\xE9" : "en attente" }))
    },
    {
      id: "2",
      nom: "KOFFI",
      prenom: "Jean",
      classe: "Tle D",
      niveau: "lycee",
      serie: "D",
      nouveau: false,
      anneeScolaire: "2025-2026",
      mode: "complet",
      montantTotal: 22e4,
      montantInscription: 3e4,
      inscriptionPayee: true,
      dateNaissance: "2007-08-20",
      age: 18,
      echeances: this.MOIS_SCOLAIRES.map((m) => ({ mois: m, montant: 22e3, statut: "pay\xE9" }))
    },
    {
      id: "3",
      nom: "BAMBA",
      prenom: "Fatou",
      classe: "6\xE8me B",
      niveau: "college",
      nouveau: true,
      anneeScolaire: "2025-2026",
      mode: "tranches",
      montantTotal: 12e4,
      montantInscription: 25e3,
      inscriptionPayee: true,
      dateNaissance: "2013-01-05",
      age: 13,
      echeances: this.MOIS_SCOLAIRES.map((m, i) => ({ mois: m, montant: 12e3, statut: i < 3 ? "pay\xE9" : i === 3 ? "en retard" : "en attente" }))
    }
  ], ...ngDevMode ? [{ debugName: "eleves" }] : (
    /* istanbul ignore next */
    []
  ));
  recus = signal([
    { id: "1", numero: "REC-2026-001", date: "23/04/2026", eleve: "KONAN Marie", classe: "3\xE8me A", type: "Mensualit\xE9 Avril", montant: 18e3 },
    { id: "2", numero: "REC-2026-002", date: "01/03/2026", eleve: "BAMBA Fatou", classe: "6\xE8me B", type: "Inscription", montant: 25e3 },
    { id: "3", numero: "REC-2026-003", date: "15/02/2026", eleve: "KOFFI Jean", classe: "Tle D", type: "Scolarit\xE9 compl\xE8te", montant: 22e4 }
  ], ...ngDevMode ? [{ debugName: "recus" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedEleve = computed(() => this.eleves().find((e) => e.id === this.pEleve) ?? null, ...ngDevMode ? [{ debugName: "selectedEleve" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredEleves = computed(() => !this.search ? this.eleves() : this.eleves().filter((e) => `${e.nom} ${e.prenom} ${e.classe}`.toLowerCase().includes(this.search.toLowerCase())), ...ngDevMode ? [{ debugName: "filteredEleves" }] : (
    /* istanbul ignore next */
    []
  ));
  aJour = computed(() => this.eleves().filter((e) => !this.hasRetard(e)).length, ...ngDevMode ? [{ debugName: "aJour" }] : (
    /* istanbul ignore next */
    []
  ));
  enRetard = computed(() => this.eleves().filter((e) => this.hasRetard(e)).length, ...ngDevMode ? [{ debugName: "enRetard" }] : (
    /* istanbul ignore next */
    []
  ));
  hasRetard(e) {
    return e.echeances.some((ec) => ec.statut === "en retard");
  }
  classesForNiveau(n) {
    if (n === "primaire")
      return ["CP A", "CP B", "CE1 A", "CE1 B", "CE2 A", "CE2 B", "CM1 A", "CM1 B", "CM2 A", "CM2 B"];
    if (n === "college")
      return ["6\xE8me A", "6\xE8me B", "5\xE8me A", "5\xE8me B", "4\xE8me A", "4\xE8me B", "3\xE8me A", "3\xE8me B"];
    return ["2nde A4", "2nde D", "2nde F", "1\xE8re A4", "1\xE8re D", "1\xE8re F1", "1\xE8re F2", "Tle A4", "Tle D", "Tle G1", "Tle G2"];
  }
  payerMois(ec) {
    if (ec.statut === "pay\xE9")
      return;
    ec.statut = "pay\xE9";
    ec.datePaiement = (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR");
    const e = this.selectedEleve();
    const num = `REC-${(/* @__PURE__ */ new Date()).getFullYear()}-${String(this.recus().length + 1).padStart(3, "0")}`;
    this.recus.update((r) => [{ id: Date.now().toString(), numero: num, date: ec.datePaiement, eleve: `${e.nom} ${e.prenom}`, classe: e.classe, type: `Mensualit\xE9 ${ec.mois}`, montant: ec.montant }, ...r]);
    this.imprimerRecuMois(e, ec, num);
  }
  enregistrerPaiement() {
    const e = this.selectedEleve();
    if (!e)
      return;
    const num = `REC-${(/* @__PURE__ */ new Date()).getFullYear()}-${String(this.recus().length + 1).padStart(3, "0")}`;
    this.recus.update((r) => [{ id: Date.now().toString(), numero: num, date: (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR"), eleve: `${e.nom} ${e.prenom}`, classe: e.classe, type: this.typePaiement, montant: this.montantPaye }, ...r]);
    alert(`Re\xE7u ${num} g\xE9n\xE9r\xE9 !`);
  }
  inscrire() {
    if (!this.nInsc.nom || !this.nInsc.prenom)
      return;
    const echeances = this.MOIS_SCOLAIRES.map((m) => ({ mois: m, montant: this.nInsc.montantMensuel, statut: "en attente" }));
    const nouvel = {
      id: Date.now().toString(),
      nom: this.nInsc.nom,
      prenom: this.nInsc.prenom,
      classe: this.nInsc.classe,
      niveau: this.nInsc.niveau,
      serie: this.nInsc.serie,
      nouveau: this.nInsc.nouveau,
      anneeScolaire: "2025-2026",
      mode: this.nInsc.mode,
      montantTotal: this.nInsc.montantTotal,
      montantInscription: this.nInsc.montantInscription,
      inscriptionPayee: false,
      dateNaissance: this.nInsc.dateNaissance,
      age: 0,
      echeances
    };
    this.eleves.update((l) => [nouvel, ...l]);
    this.imprimerRecuInscription(nouvel);
    this.tab.set("liste");
  }
  voirDetail(e) {
    this.pEleve = e.id;
    this.tab.set("paiement");
  }
  imprimerRecuInscription(e) {
    const w = window.open("", "_blank");
    w.document.write(`<html><body style="font-family:Arial;padding:30px;max-width:600px;margin:auto">
      <h2 style="text-align:center">RE\xC7U D'INSCRIPTION</h2>
      <p style="text-align:center;color:#555">${(/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR")}</p><hr/>
      <p><b>\xC9l\xE8ve :</b> ${e.nom} ${e.prenom}</p>
      <p><b>Classe :</b> ${e.classe}</p>
      <p><b>Statut :</b> ${e.nouveau ? "Nouvel \xE9l\xE8ve" : "Ancien \xE9l\xE8ve"}</p>
      <p><b>Ann\xE9e scolaire :</b> ${e.anneeScolaire}</p><hr/>
      <p><b>Frais d'inscription :</b> ${e.montantInscription.toLocaleString("fr-FR")} FCFA</p>
      <p><b>Scolarit\xE9 totale :</b> ${e.montantTotal.toLocaleString("fr-FR")} FCFA</p>
      <p><b>Mode de paiement :</b> ${e.mode}</p><hr/>
      <p style="text-align:right;margin-top:20px">Signature du comptable : _______________</p>
    </body></html>`);
    w.print();
  }
  imprimerRecuMois(e, ec, num) {
    const w = window.open("", "_blank");
    w.document.write(`<html><body style="font-family:Arial;padding:30px;max-width:600px;margin:auto">
      <h2 style="text-align:center">RE\xC7U DE PAIEMENT</h2>
      <p style="text-align:center;color:#555">N\xB0 ${num} \u2014 ${ec.datePaiement}</p><hr/>
      <p><b>\xC9l\xE8ve :</b> ${e.nom} ${e.prenom}</p>
      <p><b>Classe :</b> ${e.classe}</p>
      <p><b>Mensualit\xE9 :</b> ${ec.mois}</p>
      <p><b>Montant pay\xE9 :</b> ${ec.montant.toLocaleString("fr-FR")} FCFA</p>
      <hr/>
      <p style="text-align:right;margin-top:20px">Signature du comptable : _______________</p>
    </body></html>`);
    w.print();
  }
  imprimerRecu(r) {
    const w = window.open("", "_blank");
    w.document.write(`<html><body style="font-family:Arial;padding:30px;max-width:600px;margin:auto">
      <h2 style="text-align:center">RE\xC7U DE PAIEMENT \u2014 ${r.numero}</h2>
      <p style="text-align:center;color:#555">${r.date}</p><hr/>
      <p><b>\xC9l\xE8ve :</b> ${r.eleve}</p>
      <p><b>Classe :</b> ${r.classe}</p>
      <p><b>Type :</b> ${r.type}</p>
      <p><b>Montant :</b> ${r.montant.toLocaleString("fr-FR")} FCFA</p>
      <hr/><p style="text-align:right;margin-top:20px">Signature : _______________</p>
    </body></html>`);
    w.print();
  }
  static \u0275fac = function PaiementsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaiementsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaiementsComponent, selectors: [["app-paiements"]], decls: 25, vars: 12, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--outline", 3, "click"], [1, "btn", "btn--primary", 3, "click"], [1, "tabs"], [1, "tab", 3, "click"], [1, "card", 2, "max-width", "680px"], [1, "card", 2, "max-width", "700px"], [1, "card"], [1, "kpi-grid"], [1, "kpi-card", 2, "border-left-color", "#27ae60"], [1, "kpi-card__icon", 2, "background", "#d5f5e3"], [1, "kpi-card__body"], [1, "kpi-card__value"], [1, "kpi-card__label"], [1, "kpi-card", 2, "border-left-color", "#c0392b"], [1, "kpi-card__icon", 2, "background", "#fdecea"], [1, "kpi-card", 2, "border-left-color", "#1a3a5c"], [1, "kpi-card__icon", 2, "background", "#d6eaf8"], [1, "card__head"], [1, "card__title"], ["placeholder", "Rechercher\u2026", 2, "border", "1px solid #dde3ea", "border-radius", "8px", "padding", "6px 12px", "font-size", "13px", "outline", "none", 3, "ngModelChange", "ngModel"], [1, "table"], [1, "fw-med"], [1, "badge"], [1, "badge", "badge--green"], [1, "badge", "badge--red"], [2, "display", "flex", "gap", "6px"], [1, "btn", "btn--outline", 2, "padding", "3px 8px", "font-size", "11px", 3, "click"], [1, "btn", "btn--primary", 2, "padding", "3px 8px", "font-size", "11px", 3, "click"], [1, "modal__body", 2, "padding", "0"], [1, "field", 2, "margin-bottom", "14px"], [1, "field__label"], [1, "field__select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [2, "background", "#f7f9fb", "border-radius", "12px", "padding", "16px", "margin-bottom", "16px"], [1, "fields-row"], [1, "field"], ["value", "mensuel"], ["value", "complet"], ["value", "inscription"], ["type", "number", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "btn", "btn--primary", 2, "margin-top", "8px", 3, "click"], [2, "font-weight", "700", "font-size", "14px", "margin-bottom", "12px"], [1, "echeances-grid"], [1, "mois-card", 3, "pay\xE9", "en-retard", "en-attente"], [1, "mois-card", 3, "click"], [1, "mois-nom"], [1, "mois-val"], [1, "mois-statut"], [2, "display", "flex", "flex-direction", "column", "gap", "12px"], ["placeholder", "Nom de famille", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "Pr\xE9nom", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "field__input", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["value", "primaire"], ["value", "college"], ["value", "lycee"], ["value", "tranches"], [1, "btn", "btn--primary", 2, "margin-top", "4px", 3, "click"], ["label", "S\xE9rie Moderne"], ["value", "A4"], ["value", "D"], ["label", "S\xE9rie Technique"], ["value", "F1"], ["value", "F2"], ["value", "G1"], ["value", "G2"], ["type", "number", "min", "1", "max", "28", "placeholder", "Ex: 10", 1, "field__input", 3, "ngModelChange", "ngModel"], [2, "background", "#eaf3fd", "border-radius", "10px", "padding", "12px", "font-size", "13px", "color", "#1a5276"], [1, "text-muted"], [1, "badge", "badge--blue"]], template: function PaiementsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, " Paiements & Facturation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Inscription, scolarit\xE9s, paiements en tranches et re\xE7us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function PaiementsComponent_Template_button_click_8_listener() {
        return ctx.tab.set("inscription");
      });
      \u0275\u0275text(9, " Nouvelle inscription");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 6);
      \u0275\u0275listener("click", function PaiementsComponent_Template_button_click_10_listener() {
        return ctx.tab.set("paiement");
      });
      \u0275\u0275text(11, "+ Enregistrer paiement");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 7)(13, "button", 8);
      \u0275\u0275listener("click", function PaiementsComponent_Template_button_click_13_listener() {
        return ctx.tab.set("liste");
      });
      \u0275\u0275text(14, " Liste \xE9l\xE8ves");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 8);
      \u0275\u0275listener("click", function PaiementsComponent_Template_button_click_15_listener() {
        return ctx.tab.set("paiement");
      });
      \u0275\u0275text(16, " Paiement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 8);
      \u0275\u0275listener("click", function PaiementsComponent_Template_button_click_17_listener() {
        return ctx.tab.set("inscription");
      });
      \u0275\u0275text(18, " Inscription");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 8);
      \u0275\u0275listener("click", function PaiementsComponent_Template_button_click_19_listener() {
        return ctx.tab.set("historique");
      });
      \u0275\u0275text(20, " Historique");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(21, PaiementsComponent_Conditional_21_Template, 46, 4);
      \u0275\u0275conditionalCreate(22, PaiementsComponent_Conditional_22_Template, 31, 4, "div", 9);
      \u0275\u0275conditionalCreate(23, PaiementsComponent_Conditional_23_Template, 67, 14, "div", 10);
      \u0275\u0275conditionalCreate(24, PaiementsComponent_Conditional_24_Template, 24, 0, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.tab() === "liste");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.tab() === "paiement");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.tab() === "inscription");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.tab() === "historique");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tab() === "liste" ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tab() === "paiement" ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tab() === "inscription" ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tab() === "historique" ? 24 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, DecimalPipe], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff8ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  color: #555;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  background: #f0f4f8;\n  border-radius: 12px;\n  padding: 4px;\n  margin-bottom: 24px;\n  width: fit-content;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border: none;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  background: transparent;\n  color: #7f8c8d;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1a3a5c;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.echeances-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n  gap: 8px;\n  margin-top: 12px;\n}\n.mois-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 10px 12px;\n  border: 1.5px solid #e0e0e0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.mois-card.pay\\e9[_ngcontent-%COMP%]  {\n  border-color: #27ae60;\n  background: #d5f5e3;\n}\n.mois-card.en-retard[_ngcontent-%COMP%] {\n  border-color: #c0392b;\n  background: #fdecea;\n}\n.mois-card.en-attente[_ngcontent-%COMP%] {\n  border-color: #dde3ea;\n  background: #f8fafc;\n}\n.mois-nom[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  margin-bottom: 4px;\n}\n.mois-val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: #0f2942;\n}\n.mois-statut[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 3px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=paiements.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaiementsComponent, [{
    type: Component,
    args: [{ selector: "app-paiements", standalone: true, imports: [CommonModule, FormsModule], template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title"> Paiements & Facturation</h1>
      <p class="page__sub">Inscription, scolarit\xE9s, paiements en tranches et re\xE7us</p>
    </div>
    <div class="page__actions">
      <button class="btn btn--outline" (click)="tab.set('inscription')"> Nouvelle inscription</button>
      <button class="btn btn--primary" (click)="tab.set('paiement')">+ Enregistrer paiement</button>
    </div>
  </div>

  <div class="tabs">
    <button class="tab" [class.active]="tab()==='liste'"       (click)="tab.set('liste')"> Liste \xE9l\xE8ves</button>
    <button class="tab" [class.active]="tab()==='paiement'"    (click)="tab.set('paiement')"> Paiement</button>
    <button class="tab" [class.active]="tab()==='inscription'" (click)="tab.set('inscription')"> Inscription</button>
    <button class="tab" [class.active]="tab()==='historique'"  (click)="tab.set('historique')"> Historique</button>
  </div>

  <!-- \u2500\u2500 Liste des \xE9l\xE8ves \u2500\u2500 -->
  @if (tab() === 'liste') {
    <div class="kpi-grid">
      <div class="kpi-card" style="border-left-color:#27ae60">
        <div class="kpi-card__icon" style="background:#d5f5e3"></div>
        <div class="kpi-card__body"><div class="kpi-card__value">{{ aJour() }}</div><div class="kpi-card__label">\xC0 jour</div></div>
      </div>
      <div class="kpi-card" style="border-left-color:#c0392b">
        <div class="kpi-card__icon" style="background:#fdecea"></div>
        <div class="kpi-card__body"><div class="kpi-card__value">{{ enRetard() }}</div><div class="kpi-card__label">En retard</div></div>
      </div>
      <div class="kpi-card" style="border-left-color:#1a3a5c">
        <div class="kpi-card__icon" style="background:#d6eaf8"></div>
        <div class="kpi-card__body"><div class="kpi-card__value">{{ eleves().length }}</div><div class="kpi-card__label">Total inscrits</div></div>
      </div>
    </div>
    <div class="card">
      <div class="card__head">
        <span class="card__title">\xC9l\xE8ves inscrits</span>
        <input [(ngModel)]="search" placeholder="Rechercher\u2026" style="border:1px solid #dde3ea;border-radius:8px;padding:6px 12px;font-size:13px;outline:none"/>
      </div>
      <table class="table">
        <thead><tr><th>Nom & Pr\xE9nom</th><th>Classe</th><th>Mode</th><th>Inscription</th><th>Scolarit\xE9</th><th>Statut</th><th></th></tr></thead>
        <tbody>
          @for (e of filteredEleves(); track e.id) {
            <tr>
              <td class="fw-med">{{ e.nom }} {{ e.prenom }}</td>
              <td>{{ e.classe }}</td>
              <td><span class="badge" [class.badge--blue]="e.mode==='tranches'" [class.badge--green]="e.mode==='complet'">{{ e.mode }}</span></td>
              <td>
                @if (e.inscriptionPayee) { <span class="badge badge--green">\u2713 Pay\xE9e</span> }
                @else { <span class="badge badge--red">Non pay\xE9e</span> }
              </td>
              <td>{{ e.montantTotal | number:'1.0-0' }} FCFA</td>
              <td>
                @if (hasRetard(e)) { <span class="badge badge--red">Retard</span> }
                @else { <span class="badge badge--green">\xC0 jour</span> }
              </td>
              <td style="display:flex;gap:6px">
                <button class="btn btn--outline" style="padding:3px 8px;font-size:11px;" (click)="voirDetail(e)">D\xE9tail</button>
                <button class="btn btn--primary" style="padding:3px 8px;font-size:11px;" (click)="imprimerRecuInscription(e)">\u{1F5A8}\uFE0F</button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  <!-- \u2500\u2500 Enregistrer paiement \u2500\u2500 -->
  @if (tab() === 'paiement') {
    <div class="card" style="max-width:680px">
      <div class="card__head"><span class="card__title">Enregistrer un paiement</span></div>
      <div class="modal__body" style="padding:0">
        <div class="field" style="margin-bottom:14px">
          <label class="field__label">S\xE9lectionner un \xE9l\xE8ve</label>
          <select class="field__select" [(ngModel)]="pEleve">
            <option value="">-- Choisir un \xE9l\xE8ve --</option>
            @for (e of eleves(); track e.id) {
              <option [value]="e.id">{{ e.nom }} {{ e.prenom }} \u2014 {{ e.classe }}</option>
            }
          </select>
        </div>
        @if (selectedEleve()) {
          <div style="background:#f7f9fb;border-radius:12px;padding:16px;margin-bottom:16px">
            <div style="font-weight:700;font-size:14px;margin-bottom:12px">\xC9ch\xE9ancier \u2014 {{ selectedEleve()!.nom }} {{ selectedEleve()!.prenom }}</div>
            <div class="echeances-grid">
              @for (ec of selectedEleve()!.echeances; track ec.mois) {
                <div class="mois-card" [class.pay\xE9]="ec.statut==='pay\xE9'" [class.en-retard]="ec.statut==='en retard'" [class.en-attente]="ec.statut==='en attente'"
                  (click)="payerMois(ec)">
                  <div class="mois-nom">{{ ec.mois }}</div>
                  <div class="mois-val">{{ ec.montant | number:'1.0-0' }}</div>
                  <div class="mois-statut" [style.color]="ec.statut==='pay\xE9'?'#27ae60':ec.statut==='en retard'?'#c0392b':'#999'">
                    {{ ec.statut === 'pay\xE9' ? '\u2713 Pay\xE9' : ec.statut === 'en retard' ? '\u26A0 Retard' : 'En attente' }}
                  </div>
                </div>
              }
            </div>
          </div>
        }
        <div class="fields-row">
          <div class="field">
            <label class="field__label">Type de paiement</label>
            <select class="field__select" [(ngModel)]="typePaiement">
              <option value="mensuel">Mensualit\xE9</option>
              <option value="complet">Paiement complet</option>
              <option value="inscription">Frais d'inscription</option>
            </select>
          </div>
          <div class="field">
            <label class="field__label">Montant (FCFA)</label>
            <input class="field__input" type="number" [(ngModel)]="montantPaye" />
          </div>
        </div>
        <button class="btn btn--primary" (click)="enregistrerPaiement()" style="margin-top:8px">Enregistrer et g\xE9n\xE9rer le re\xE7u</button>
      </div>
    </div>
  }

  <!-- \u2500\u2500 Nouvelle inscription \u2500\u2500 -->
  @if (tab() === 'inscription') {
    <div class="card" style="max-width:700px">
      <div class="card__head"><span class="card__title">Nouvelle inscription</span></div>
      <div style="display:flex;flex-direction:column;gap:12px">
        <div class="fields-row">
          <div class="field"><label class="field__label">Nom *</label><input class="field__input" [(ngModel)]="nInsc.nom" placeholder="Nom de famille"/></div>
          <div class="field"><label class="field__label">Pr\xE9nom *</label><input class="field__input" [(ngModel)]="nInsc.prenom" placeholder="Pr\xE9nom"/></div>
        </div>
        <div class="fields-row">
          <div class="field"><label class="field__label">Date de naissance</label><input class="field__input" type="date" [(ngModel)]="nInsc.dateNaissance"/></div>
          <div class="field">
            <label class="field__label">Statut</label>
            <select class="field__select" [(ngModel)]="nInsc.nouveau">
              <option [ngValue]="true">Nouvel \xE9l\xE8ve</option>
              <option [ngValue]="false">Ancien \xE9l\xE8ve</option>
            </select>
          </div>
        </div>
        <div class="fields-row">
          <div class="field">
            <label class="field__label">Niveau</label>
            <select class="field__select" [(ngModel)]="nInsc.niveau">
              <option value="primaire">Primaire</option>
              <option value="college">Coll\xE8ge</option>
              <option value="lycee">Lyc\xE9e</option>
            </select>
          </div>
          <div class="field">
            <label class="field__label">Classe</label>
            <select class="field__select" [(ngModel)]="nInsc.classe">
              @for (c of classesForNiveau(nInsc.niveau); track c) { <option [value]="c">{{ c }}</option> }
            </select>
          </div>
        </div>
        @if (nInsc.niveau === 'lycee') {
          <div class="field">
            <label class="field__label">S\xE9rie</label>
            <select class="field__select" [(ngModel)]="nInsc.serie">
              <optgroup label="S\xE9rie Moderne"><option value="A4">A4</option><option value="D">D</option></optgroup>
              <optgroup label="S\xE9rie Technique"><option value="F1">F1 (\xC9lectronique)</option><option value="F2">F2 (G\xE9nie Civil)</option><option value="G1">G1 (Gestion)</option><option value="G2">G2 (Secr\xE9tariat)</option></optgroup>
            </select>
          </div>
        }
        <div class="fields-row">
          <div class="field">
            <label class="field__label">Mode de paiement</label>
            <select class="field__select" [(ngModel)]="nInsc.mode">
              <option value="tranches">Paiement en tranches</option>
              <option value="complet">Paiement complet</option>
            </select>
          </div>
          @if (nInsc.mode === 'tranches') {
            <div class="field">
              <label class="field__label">Montant mensuel (FCFA)</label>
              <input class="field__input" type="number" [(ngModel)]="nInsc.montantMensuel" />
            </div>
          }
        </div>
        @if (nInsc.mode === 'tranches') {
          <div class="fields-row">
            <div class="field">
              <label class="field__label">Date limite de paiement (jour du mois)</label>
              <input class="field__input" type="number" min="1" max="28" [(ngModel)]="nInsc.jourLimite" placeholder="Ex: 10" />
            </div>
          </div>
          <div style="background:#eaf3fd;border-radius:10px;padding:12px;font-size:13px;color:#1a5276">
            \u2139\uFE0F Une notification sera envoy\xE9e au comptable le {{ nInsc.jourLimite - 5 > 0 ? nInsc.jourLimite - 5 : 1 }} de chaque mois.
          </div>
        }
        <div class="fields-row">
          <div class="field"><label class="field__label">Frais d'inscription (FCFA)</label><input class="field__input" type="number" [(ngModel)]="nInsc.montantInscription"/></div>
          <div class="field"><label class="field__label">Montant total scolarit\xE9 (FCFA)</label><input class="field__input" type="number" [(ngModel)]="nInsc.montantTotal"/></div>
        </div>
        <button class="btn btn--primary" (click)="inscrire()" style="margin-top:4px">Inscrire et g\xE9n\xE9rer le re\xE7u d'inscription</button>
      </div>
    </div>
  }

  <!-- \u2500\u2500 Historique des re\xE7us \u2500\u2500 -->
  @if (tab() === 'historique') {
    <div class="card">
      <div class="card__head"><span class="card__title">Historique des re\xE7us</span></div>
      <table class="table">
        <thead><tr><th>N\xB0 Re\xE7u</th><th>Date</th><th>\xC9l\xE8ve</th><th>Classe</th><th>Type</th><th>Montant</th><th>Action</th></tr></thead>
        <tbody>
          @for (r of recus(); track r.id) {
            <tr>
              <td class="fw-med">{{ r.numero }}</td>
              <td class="text-muted">{{ r.date }}</td>
              <td>{{ r.eleve }}</td>
              <td>{{ r.classe }}</td>
              <td><span class="badge badge--blue">{{ r.type }}</span></td>
              <td>{{ r.montant | number:'1.0-0' }} FCFA</td>
              <td><button class="btn btn--outline" style="padding:3px 8px;font-size:11px;" (click)="imprimerRecu(r)">\u{1F5A8}\uFE0F Imprimer</button></td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }
</div>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;2596d377e662b62c9da37cd95aa71e5a3f91c27538e008d643cba8c4643f0fc6;D:/MON BUREAU/PPE302/PPE-302/ppe-302-2/TEST/mon-workspace/projects/gestion-education/src/app/pages/paiements/paiements.component.ts */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff8ee;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F {\n  background: #e8e8e8;\n  color: #555;\n}\n.tabs {\n  display: flex;\n  gap: 4px;\n  background: #f0f4f8;\n  border-radius: 12px;\n  padding: 4px;\n  margin-bottom: 24px;\n  width: fit-content;\n}\n.tab {\n  padding: 9px 20px;\n  border: none;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  background: transparent;\n  color: #7f8c8d;\n}\n.tab.active {\n  background: #fff;\n  color: #1a3a5c;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.echeances-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n  gap: 8px;\n  margin-top: 12px;\n}\n.mois-card {\n  border-radius: 10px;\n  padding: 10px 12px;\n  border: 1.5px solid #e0e0e0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.mois-card.pay\\e9  {\n  border-color: #27ae60;\n  background: #d5f5e3;\n}\n.mois-card.en-retard {\n  border-color: #c0392b;\n  background: #fdecea;\n}\n.mois-card.en-attente {\n  border-color: #dde3ea;\n  background: #f8fafc;\n}\n.mois-nom {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  margin-bottom: 4px;\n}\n.mois-val {\n  font-size: 13px;\n  font-weight: 800;\n  color: #0f2942;\n}\n.mois-statut {\n  font-size: 10px;\n  margin-top: 3px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=paiements.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaiementsComponent, { className: "PaiementsComponent", filePath: "app/pages/paiements/paiements.component.ts", lineNumber: 261 });
})();
export {
  PaiementsComponent
};
//# sourceMappingURL=chunk-WZIY72OX.js.map
