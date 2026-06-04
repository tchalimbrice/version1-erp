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

// projects/gestion-logistique/src/app/pages/livraisons/livraisons.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LivraisonsComponent_For_41_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r1.notes);
  }
}
function LivraisonsComponent_For_41_Template(rf, ctx) {
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
    \u0275\u0275elementStart(8, "td", 13);
    \u0275\u0275text(9);
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 11);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 15)(19, "div", 16)(20, "div", 17);
    \u0275\u0275element(21, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 19);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "td")(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, LivraisonsComponent_For_41_Conditional_27_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r1.ref);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r1.client);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r1.commande);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r1.origine);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2192 ", l_r1.destination);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", l_r1.distance, " km");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r1.chauffeur);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r1.vehicule);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r1.progression(l_r1), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.progression(l_r1), "%");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statutClass(l_r1.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r1.statut);
    \u0275\u0275advance();
    \u0275\u0275conditional(l_r1.notes ? 27 : -1);
  }
}
function LivraisonsComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2, "Aucune livraison.");
    \u0275\u0275elementEnd()();
  }
}
function LivraisonsComponent_Conditional_43_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4);
  }
}
function LivraisonsComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function LivraisonsComponent_Conditional_43_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275listener("click", function LivraisonsComponent_Conditional_43_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 24)(3, "span", 25);
    \u0275\u0275text(4, "Programmer une livraison");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275listener("click", function LivraisonsComponent_Conditional_43_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 27)(7, "div", 28)(8, "div", 29)(9, "label", 30);
    \u0275\u0275text(10, "N\xB0 Commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonsComponent_Conditional_43_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.commande, $event) || (ctx_r1.form.commande = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 29)(13, "label", 30);
    \u0275\u0275text(14, "Client *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonsComponent_Conditional_43_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.client, $event) || (ctx_r1.form.client = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 28)(17, "div", 29)(18, "label", 30);
    \u0275\u0275text(19, "Origine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonsComponent_Conditional_43_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.origine, $event) || (ctx_r1.form.origine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 29)(22, "label", 30);
    \u0275\u0275text(23, "Destination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonsComponent_Conditional_43_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destination, $event) || (ctx_r1.form.destination = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 28)(26, "div", 29)(27, "label", 30);
    \u0275\u0275text(28, "Chauffeur *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonsComponent_Conditional_43_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.chauffeur, $event) || (ctx_r1.form.chauffeur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 29)(31, "label", 30);
    \u0275\u0275text(32, "V\xE9hicule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonsComponent_Conditional_43_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.vehicule, $event) || (ctx_r1.form.vehicule = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 28)(35, "div", 29)(36, "label", 30);
    \u0275\u0275text(37, "Date d\xE9part");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonsComponent_Conditional_43_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateDepart, $event) || (ctx_r1.form.dateDepart = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 29)(40, "label", 30);
    \u0275\u0275text(41, "Heure d\xE9part");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonsComponent_Conditional_43_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.heureDepart, $event) || (ctx_r1.form.heureDepart = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 28)(44, "div", 29)(45, "label", 30);
    \u0275\u0275text(46, "Distance (km)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonsComponent_Conditional_43_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.distance, $event) || (ctx_r1.form.distance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 29)(49, "label", 30);
    \u0275\u0275text(50, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonsComponent_Conditional_43_Template_select_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.statut, $event) || (ctx_r1.form.statut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(52, LivraisonsComponent_Conditional_43_For_53_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 29)(55, "label", 30);
    \u0275\u0275text(56, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "textarea", 38);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonsComponent_Conditional_43_Template_textarea_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.notes, $event) || (ctx_r1.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 39)(59, "button", 40);
    \u0275\u0275listener("click", function LivraisonsComponent_Conditional_43_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm.set(false));
    });
    \u0275\u0275text(60, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 5);
    \u0275\u0275listener("click", function LivraisonsComponent_Conditional_43_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addLivraison());
    });
    \u0275\u0275text(62, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.commande);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.client);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.origine);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.destination);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.chauffeur);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.vehicule);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateDepart);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.heureDepart);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.distance);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.statut);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statuts);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.notes);
  }
}
var LivraisonsComponent = class _LivraisonsComponent {
  store;
  activeTab = signal("aujourd-hui", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.empty();
  livraisons = [
    { id: "1", ref: "LIV-0420-001", commande: "CMD-2024-001", client: "SuperMart SA", origine: "Ouagadougou", destination: "Bobo-Dioulasso", distance: 360, chauffeur: "Kon\xE9 Seydou", vehicule: "11 BF 2201", dateDepart: "2024-04-20", heureDepart: "08:30", statut: "En route", kmParcourus: 210, notes: "" },
    { id: "2", ref: "LIV-0420-002", commande: "CMD-2024-002", client: "Pharmavie SARL", origine: "Ouagadougou", destination: "Ouahigouya", distance: 190, chauffeur: "Niki\xE9ma Lassina", vehicule: "11 BF 2202", dateDepart: "2024-04-20", heureDepart: "07:15", statut: "Livr\xE9", kmParcourus: 190, notes: "" },
    { id: "3", ref: "LIV-0420-003", commande: "CMD-2024-003", client: "BTP Mat\xE9riaux", origine: "Koudougou", destination: "Ouagadougou", distance: 100, chauffeur: "Zongo Firmin", vehicule: "11 BF 2205", dateDepart: "2024-04-20", heureDepart: "09:00", statut: "En route", kmParcourus: 45, notes: "Chargement lourd" },
    { id: "4", ref: "LIV-0420-004", commande: "CMD-2024-004", client: "AgriSud BF", origine: "Ouagadougou", destination: "Fada N'Gourma", distance: 220, chauffeur: "Traor\xE9 Karim", vehicule: "11 BF 2203", dateDepart: "2024-04-20", heureDepart: "06:00", statut: "Retard", kmParcourus: 80, notes: "Panne signal\xE9e km 80" },
    { id: "5", ref: "LIV-0420-005", commande: "CMD-2024-005", client: "Importex SARL", origine: "Port Lom\xE9", destination: "Ouagadougou", distance: 1100, chauffeur: "Barry Moussa", vehicule: "11 BF 2204", dateDepart: "2024-04-19", heureDepart: "18:00", statut: "Livr\xE9", kmParcourus: 1100, notes: "" },
    { id: "6", ref: "LIV-0419-001", commande: "CMD-2024-006", client: "Minoterie BF", origine: "Ouagadougou", destination: "Koup\xE8la", distance: 142, chauffeur: "Ou\xE9draogo Marc", vehicule: "11 BF 2206", dateDepart: "2024-04-19", heureDepart: "14:00", statut: "Livr\xE9", kmParcourus: 142, notes: "" },
    { id: "7", ref: "LIV-0420-006", commande: "CMD-2024-007", client: "TotalEnergies BF", origine: "Abidjan", destination: "Ouagadougou", distance: 1200, chauffeur: "Diallo Ibou", vehicule: "11 BF 2208", dateDepart: "2024-04-19", heureDepart: "22:00", statut: "En route", kmParcourus: 850, notes: "Mat\xE9riel sensible" },
    { id: "8", ref: "LIV-0420-007", commande: "CMD-2024-008", client: "Boulangerie Moderne", origine: "Ouagadougou", destination: "Ziniar\xE9", distance: 35, chauffeur: "Compaor\xE9 Yvan", vehicule: "11 BF 2207", dateDepart: "2024-04-20", heureDepart: "06:30", statut: "Livr\xE9", kmParcourus: 35, notes: "" }
  ];
  get filtered() {
    const t = this.activeTab();
    if (t === "aujourd-hui")
      return this.livraisons.filter((l) => l.dateDepart === "2024-04-20");
    if (t === "en-route")
      return this.livraisons.filter((l) => l.statut === "En route" || l.statut === "En chargement");
    if (t === "livre")
      return this.livraisons.filter((l) => l.statut === "Livr\xE9");
    return this.livraisons;
  }
  get enRoute() {
    return this.livraisons.filter((l) => l.statut === "En route").length;
  }
  get incidents() {
    return this.livraisons.filter((l) => l.statut === "Retard" || l.statut === "Incident").length;
  }
  statutClass(s) {
    const m = {
      "Planifi\xE9": "badge badge--gray",
      "En chargement": "badge badge--yellow",
      "En route": "badge badge--blue",
      "Livr\xE9": "badge badge--green",
      "Retard": "badge badge--red",
      "Incident": "badge badge--red",
      "Retour": "badge badge--orange"
    };
    return m[s];
  }
  progression(l) {
    if (l.statut === "Livr\xE9")
      return 100;
    if (!l.distance)
      return 0;
    return Math.min(100, Math.round(l.kmParcourus / l.distance * 100));
  }
  addLivraison() {
    if (!this.form.client || !this.form.chauffeur)
      return;
    const num = this.livraisons.length + 1;
    this.livraisons.unshift(__spreadValues({ id: Date.now().toString(), ref: "LIV-0420-" + String(num).padStart(3, "0") }, this.form));
    this.form = this.empty();
    this.showForm.set(false);
  }
  empty() {
    return { commande: "", client: "", origine: "Ouagadougou", destination: "", distance: 0, chauffeur: "", vehicule: "", dateDepart: "", heureDepart: "", statut: "Planifi\xE9", kmParcourus: 0, notes: "" };
  }
  statuts = ["Planifi\xE9", "En chargement", "En route", "Livr\xE9", "Retard", "Incident", "Retour"];
  constructor(store) {
    this.store = store;
  }
  static \u0275fac = function LivraisonsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LivraisonsComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LivraisonsComponent, selectors: [["app-livraisons"]], decls: 44, vars: 13, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [1, "tabs"], [1, "tab", 3, "click"], [1, "table-wrap"], [1, "table"], [1, "modal-overlay"], [1, "mono"], [1, "fw-med"], [1, "text-muted", "text-sm"], [1, "text-muted"], [2, "min-width", "130px"], [2, "display", "flex", "align-items", "center", "gap", "8px"], [1, "progress-bar", 2, "flex", "1"], [1, "progress-bar__fill"], [1, "text-sm", "text-muted"], [1, "text-muted", "text-sm", 2, "margin-top", "2px"], ["colspan", "8", 2, "text-align", "center", "color", "#aaa", "padding", "32px", "font-style", "italic"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal--wide", 3, "click"], [1, "modal__head"], [1, "modal__title"], [1, "modal__close", 3, "click"], [1, "modal__body"], [1, "fields-row"], [1, "field"], [1, "field__label"], ["placeholder", "CMD-2024-XXX", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "11 BF 0000", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "time", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field__select", 3, "ngModelChange", "ngModel"], [1, "field__textarea", 3, "ngModelChange", "ngModel"], [1, "modal__foot"], [1, "btn", "btn--ghost", 3, "click"]], template: function LivraisonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Livraisons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function LivraisonsComponent_Template_button_click_8_listener() {
        return ctx.showForm.set(true);
      });
      \u0275\u0275text(9, "+ Programmer livraison");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
      \u0275\u0275listener("click", function LivraisonsComponent_Template_button_click_11_listener() {
        return ctx.activeTab.set("aujourd-hui");
      });
      \u0275\u0275text(12, "Aujourd'hui");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function LivraisonsComponent_Template_button_click_13_listener() {
        return ctx.activeTab.set("en-route");
      });
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 7);
      \u0275\u0275listener("click", function LivraisonsComponent_Template_button_click_15_listener() {
        return ctx.activeTab.set("livre");
      });
      \u0275\u0275text(16, "Livr\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 7);
      \u0275\u0275listener("click", function LivraisonsComponent_Template_button_click_17_listener() {
        return ctx.activeTab.set("tout");
      });
      \u0275\u0275text(18, "Toutes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 8)(20, "table", 9)(21, "thead")(22, "tr")(23, "th");
      \u0275\u0275text(24, "R\xE9f.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Client / Commande");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Trajet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Distance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Chauffeur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "V\xE9hicule");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Progression");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Statut");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "tbody");
      \u0275\u0275repeaterCreate(40, LivraisonsComponent_For_41_Template, 28, 15, "tr", null, _forTrack0);
      \u0275\u0275conditionalCreate(42, LivraisonsComponent_Conditional_42_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(43, LivraisonsComponent_Conditional_43_Template, 63, 11, "div", 10);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.enRoute, " en route \xB7 ", ctx.incidents, " incident(s) actif(s)");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeTab() === "aujourd-hui");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "en-route");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("En route (", ctx.enRoute, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "livre");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "tout");
      \u0275\u0275advance(23);
      \u0275\u0275repeater(ctx.filtered);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filtered.length === 0 ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm() ? 43 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0d2137;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #1a6fa8);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #3498db;\n  border: 1.5px solid #3498db;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #eaf4fd;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f0f4f8;\n  color: #555;\n  border: 1.5px solid #dde5ef;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #0d2137;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #3498db;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f7fafc;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f4f8;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafcff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0d2137;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0d2137;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #3498db;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #e8eef4;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #1a6fa8);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #dde5ef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #3498db;\n  color: #3498db;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #3498db;\n  border-color: #3498db;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f4f8;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0d2137;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f4f8;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=livraisons.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LivraisonsComponent, [{
    type: Component,
    args: [{ selector: "app-livraisons", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page"> <header class="page__header"> <div> <h1 class="page__title">Livraisons</h1> <p class="page__sub">{{ enRoute }} en route \xB7 {{ incidents }} incident(s) actif(s)</p> </div> <div class="page__actions"> <button class="btn btn--primary" (click)="showForm.set(true)">+ Programmer livraison</button> </div> </header> <div class="tabs"> <button class="tab" [class.active]="activeTab()==='aujourd-hui'" (click)="activeTab.set('aujourd-hui')">Aujourd'hui</button> <button class="tab" [class.active]="activeTab()==='en-route'"(click)="activeTab.set('en-route')">En route ({{ enRoute }})</button> <button class="tab" [class.active]="activeTab()==='livre'"(click)="activeTab.set('livre')">Livr\xE9es</button> <button class="tab" [class.active]="activeTab()==='tout'"(click)="activeTab.set('tout')">Toutes</button> </div> <div class="table-wrap"> <table class="table"> <thead><tr><th>R\xE9f.</th><th>Client / Commande</th><th>Trajet</th><th>Distance</th><th>Chauffeur</th><th>V\xE9hicule</th><th>Progression</th><th>Statut</th></tr></thead> <tbody> @for (l of filtered; track l.id) {
          <tr> <td class="mono">{{ l.ref }}</td> <td> <div class="fw-med">{{ l.client }}</div> <div class="text-muted text-sm">{{ l.commande }}</div> </td> <td class="text-muted text-sm">{{ l.origine }}<br/>\u2192 {{ l.destination }}</td> <td class="text-muted">{{ l.distance }} km</td> <td class="fw-med">{{ l.chauffeur }}</td> <td class="mono">{{ l.vehicule }}</td> <td style="min-width:130px;"> <div style="display:flex;align-items:center;gap:8px;"> <div class="progress-bar" style="flex:1;"><div class="progress-bar__fill" [style.width.%]="progression(l)"></div></div> <span class="text-sm text-muted">{{ progression(l) }}%</span> </div> </td> <td> <span [class]="statutClass(l.statut)">{{ l.statut }}</span> @if (l.notes) { <div class="text-muted text-sm" style="margin-top:2px;">{{ l.notes }}</div> }
            </td> </tr> }
        @if (filtered.length === 0) {
          <tr><td colspan="8" style="text-align:center;color:#aaa;padding:32px;font-style:italic;">Aucune livraison.</td></tr> }
      </tbody> </table> </div>
</div> @if (showForm()) {
  <div class="modal-overlay" (click)="showForm.set(false)"> <div class="modal modal--wide" (click)="$event.stopPropagation()"> <div class="modal__head"> <span class="modal__title">Programmer une livraison</span> <button class="modal__close" (click)="showForm.set(false)"></button> </div> <div class="modal__body"> <div class="fields-row"> <div class="field"><label class="field__label">N\xB0 Commande</label><input [(ngModel)]="form.commande" class="field__input" placeholder="CMD-2024-XXX" /></div> <div class="field"><label class="field__label">Client *</label><input [(ngModel)]="form.client" class="field__input" /></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Origine</label><input [(ngModel)]="form.origine" class="field__input" /></div> <div class="field"><label class="field__label">Destination</label><input [(ngModel)]="form.destination" class="field__input" /></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Chauffeur *</label><input [(ngModel)]="form.chauffeur" class="field__input" /></div> <div class="field"><label class="field__label">V\xE9hicule</label><input [(ngModel)]="form.vehicule" class="field__input" placeholder="11 BF 0000" /></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Date d\xE9part</label><input [(ngModel)]="form.dateDepart" type="date" class="field__input" /></div> <div class="field"><label class="field__label">Heure d\xE9part</label><input [(ngModel)]="form.heureDepart" type="time" class="field__input" /></div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Distance (km)</label><input [(ngModel)]="form.distance" type="number" class="field__input" /></div> <div class="field"><label class="field__label">Statut</label><select [(ngModel)]="form.statut" class="field__select">@for (s of statuts; track s){<option>{{ s }}</option>}</select></div> </div> <div class="field"><label class="field__label">Notes</label><textarea [(ngModel)]="form.notes" class="field__textarea"></textarea></div> </div> <div class="modal__foot"> <button class="btn btn--ghost" (click)="showForm.set(false)">Annuler</button> <button class="btn btn--primary" (click)="addLivraison()">Enregistrer</button> </div> </div> </div>
}
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-logistique/src/app/pages/livraisons/livraisons.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0d2137;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #1a6fa8);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #3498db;\n  border: 1.5px solid #3498db;\n}\n.btn--outline:hover {\n  background: #eaf4fd;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f0f4f8;\n  color: #555;\n  border: 1.5px solid #dde5ef;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.card__link {\n  font-size: 12px;\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #0d2137;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #3498db;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f7fafc;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f4f8;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafcff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #0d2137;\n}\n.fw-med {\n  font-weight: 600;\n  color: #0d2137;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #3498db;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #e8eef4;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #1a6fa8);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #dde5ef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #3498db;\n  color: #3498db;\n}\n.tab.active {\n  background: #3498db;\n  border-color: #3498db;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.search-input:focus {\n  border-color: #3498db;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f4f8;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0d2137;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f4f8;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #3498db;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=livraisons.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LivraisonsComponent, { className: "LivraisonsComponent", filePath: "app/pages/livraisons/livraisons.component.ts", lineNumber: 17 });
})();
export {
  LivraisonsComponent
};
//# sourceMappingURL=chunk-FHD246NU.js.map
