import {
  CollabStoreService
} from "./chunk-ZHJMMKYO.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-WTFQPXVN.js";
import "./chunk-46DXP6YY.js";

// projects/gestion-education/src/app/pages/parametres/parametres.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.niveau;
function ParametresComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275text(1, " \u2713 Modifications enregistr\xE9es avec succ\xE8s. ");
    \u0275\u0275domElementEnd();
  }
}
function ParametresComponent_For_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td")(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "td")(7, "span", 36);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "td")(10, "span", 37);
    \u0275\u0275text(11, "Actif");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const u_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r1.username);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.roleCls(u_r1.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.roleFr(u_r1.role));
  }
}
function ParametresComponent_For_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 29)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 39)(4, "input", 40);
    \u0275\u0275domListener("input", function ParametresComponent_For_85_Template_input_input_4_listener($event) {
      const f_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(f_r4.montant = +$event.target.value);
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 41);
    \u0275\u0275text(6, "FCFA / an");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r4.niveau);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("value", f_r4.montant);
  }
}
var ParametresComponent = class _ParametresComponent {
  store = inject(CollabStoreService);
  saved = signal(false, ...ngDevMode ? [{ debugName: "saved" }] : (
    /* istanbul ignore next */
    []
  ));
  form;
  fraisNiveaux = [
    { niveau: "Maternelle", montant: 8e4 },
    { niveau: "Primaire", montant: 1e5 },
    { niveau: "Coll\xE8ge", montant: 15e4 },
    { niveau: "Lyc\xE9e", montant: 18e4 }
  ];
  constructor() {
    const c = this.store.company();
    this.form = {
      name: c?.name ?? "",
      directeur: "M. Kouassi Ange",
      adresse: "Abidjan, Cocody",
      tel: "+225 27 22 44 55 66",
      email: "contact@ecole.ci",
      anneeScolaire: "2024-2025",
      niveaux: "Primaire, Coll\xE8ge, Lyc\xE9e",
      devise: "FCFA"
    };
  }
  save() {
    this.store.updateCompanyName(this.form.name);
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 3e3);
  }
  resetConfirm() {
    if (confirm("Confirmer la r\xE9initialisation ? Cette action est irr\xE9versible.")) {
      this.store.reset();
    }
  }
  roleFr(role) {
    const m = { owner: "Directeur", employee: "Enseignant", hr: "Secr\xE9taire", accountant: "Comptable" };
    return m[role] ?? role;
  }
  roleCls(role) {
    const m = { owner: "badge badge--purple", employee: "badge badge--blue", hr: "badge badge--teal", accountant: "badge badge--orange" };
    return m[role] ?? "badge badge--gray";
  }
  static \u0275fac = function ParametresComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParametresComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParametresComponent, selectors: [["app-parametres"]], decls: 99, vars: 9, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], [1, "btn", "btn--primary", 3, "click"], [2, "background", "#d5f5e3", "color", "#1e8449", "border-radius", "10px", "padding", "12px 16px", "font-size", "13px", "font-weight", "600", "margin-bottom", "16px"], [1, "card"], [1, "card__head"], [1, "card__title"], [2, "display", "flex", "flex-direction", "column", "gap", "14px"], [1, "fields-row"], [1, "field"], [1, "field__label"], ["placeholder", "\xC9cole Primaire Excellence", 1, "field__input", 3, "input", "value"], ["placeholder", "M. Kouassi Ange", 1, "field__input", 3, "input", "value"], ["placeholder", "Abidjan, Cocody", 1, "field__input", 3, "input", "value"], ["placeholder", "+225 27 22 ...", 1, "field__input", 3, "input", "value"], ["type", "email", "placeholder", "contact@ecole.ci", 1, "field__input", 3, "input", "value"], ["placeholder", "2024-2025", 1, "field__input", 3, "input", "value"], ["placeholder", "Primaire, Coll\xE8ge, Lyc\xE9e", 1, "field__input", 3, "input", "value"], [1, "field__select", 3, "change", "value"], ["value", "FCFA"], ["value", "EUR"], ["value", "USD"], ["value", "XOF"], [1, "table-wrap", 2, "box-shadow", "none", "border", "none"], [1, "table"], [2, "display", "flex", "flex-direction", "column", "gap", "12px"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "padding", "12px 16px", "background", "#f8f9fb", "border-radius", "10px"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "padding", "14px 16px", "background", "#fdecea", "border-radius", "10px"], [2, "font-weight", "700", "color", "#c0392b"], [2, "font-size", "12px", "color", "#e74c3c", "margin-top", "2px"], [1, "btn", "btn--danger", 3, "click"], [1, "fw-bold"], [1, "mono"], [1, "badge"], [1, "badge", "badge--green"], [1, "fw-med"], [2, "display", "flex", "align-items", "center", "gap", "10px"], ["type", "number", 1, "field__input", 2, "width", "140px", "margin", "0", 3, "input", "value"], [1, "text-muted", "text-sm"]], template: function ParametresComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Param\xE8tres");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, "Configuration de l'\xE9tablissement");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275domListener("click", function ParametresComponent_Template_button_click_8_listener() {
        return ctx.save();
      });
      \u0275\u0275text(9, "Enregistrer");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(10, ParametresComponent_Conditional_10_Template, 2, 0, "div", 6);
      \u0275\u0275domElementStart(11, "div", 7)(12, "div", 8)(13, "span", 9);
      \u0275\u0275text(14, "Informations de l'\xE9tablissement");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "label", 13);
      \u0275\u0275text(19, "Nom de l'\xE9tablissement");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "input", 14);
      \u0275\u0275domListener("input", function ParametresComponent_Template_input_input_20_listener($event) {
        return ctx.form.name = $event.target.value;
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "div", 12)(22, "label", 13);
      \u0275\u0275text(23, "Directeur / Principal");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "input", 15);
      \u0275\u0275domListener("input", function ParametresComponent_Template_input_input_24_listener($event) {
        return ctx.form.directeur = $event.target.value;
      });
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(25, "div", 11)(26, "div", 12)(27, "label", 13);
      \u0275\u0275text(28, "Adresse");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "input", 16);
      \u0275\u0275domListener("input", function ParametresComponent_Template_input_input_29_listener($event) {
        return ctx.form.adresse = $event.target.value;
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(30, "div", 12)(31, "label", 13);
      \u0275\u0275text(32, "T\xE9l\xE9phone");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "input", 17);
      \u0275\u0275domListener("input", function ParametresComponent_Template_input_input_33_listener($event) {
        return ctx.form.tel = $event.target.value;
      });
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(34, "div", 11)(35, "div", 12)(36, "label", 13);
      \u0275\u0275text(37, "Email");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "input", 18);
      \u0275\u0275domListener("input", function ParametresComponent_Template_input_input_38_listener($event) {
        return ctx.form.email = $event.target.value;
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(39, "div", 12)(40, "label", 13);
      \u0275\u0275text(41, "Ann\xE9e scolaire");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "input", 19);
      \u0275\u0275domListener("input", function ParametresComponent_Template_input_input_42_listener($event) {
        return ctx.form.anneeScolaire = $event.target.value;
      });
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(43, "div", 11)(44, "div", 12)(45, "label", 13);
      \u0275\u0275text(46, "Niveaux enseign\xE9s");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(47, "input", 20);
      \u0275\u0275domListener("input", function ParametresComponent_Template_input_input_47_listener($event) {
        return ctx.form.niveaux = $event.target.value;
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(48, "div", 12)(49, "label", 13);
      \u0275\u0275text(50, "Devise (monnaie)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "select", 21);
      \u0275\u0275domListener("change", function ParametresComponent_Template_select_change_51_listener($event) {
        return ctx.form.devise = $event.target.value;
      });
      \u0275\u0275domElementStart(52, "option", 22);
      \u0275\u0275text(53, "FCFA");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(54, "option", 23);
      \u0275\u0275text(55, "EUR");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(56, "option", 24);
      \u0275\u0275text(57, "USD");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(58, "option", 25);
      \u0275\u0275text(59, "XOF");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(60, "div", 7)(61, "div", 8)(62, "span", 9);
      \u0275\u0275text(63, "Utilisateurs & R\xF4les");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(64, "div", 26)(65, "table", 27)(66, "thead")(67, "tr")(68, "th");
      \u0275\u0275text(69, "Nom");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(70, "th");
      \u0275\u0275text(71, "Identifiant");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(72, "th");
      \u0275\u0275text(73, "R\xF4le");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(74, "th");
      \u0275\u0275text(75, "Statut");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(76, "tbody");
      \u0275\u0275repeaterCreate(77, ParametresComponent_For_78_Template, 12, 5, "tr", null, _forTrack0);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(79, "div", 7)(80, "div", 8)(81, "span", 9);
      \u0275\u0275text(82, "Frais de scolarit\xE9 par niveau");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(83, "div", 28);
      \u0275\u0275repeaterCreate(84, ParametresComponent_For_85_Template, 7, 2, "div", 29, _forTrack1);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(86, "div", 7)(87, "div", 8)(88, "span", 9);
      \u0275\u0275text(89, "Zone de danger");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(90, "div", 28)(91, "div", 30)(92, "div")(93, "div", 31);
      \u0275\u0275text(94, "R\xE9initialiser toutes les donn\xE9es");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(95, "div", 32);
      \u0275\u0275text(96, "Efface \xE9l\xE8ves, notes, pr\xE9sences et paiements");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(97, "button", 33);
      \u0275\u0275domListener("click", function ParametresComponent_Template_button_click_97_listener() {
        return ctx.resetConfirm();
      });
      \u0275\u0275text(98, "R\xE9initialiser");
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.saved() ? 10 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275domProperty("value", ctx.form.name);
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("value", ctx.form.directeur);
      \u0275\u0275advance(5);
      \u0275\u0275domProperty("value", ctx.form.adresse);
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("value", ctx.form.tel);
      \u0275\u0275advance(5);
      \u0275\u0275domProperty("value", ctx.form.email);
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("value", ctx.form.anneeScolaire);
      \u0275\u0275advance(5);
      \u0275\u0275domProperty("value", ctx.form.niveaux);
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("value", ctx.form.devise);
      \u0275\u0275advance(26);
      \u0275\u0275repeater(ctx.store.users());
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.fraisNiveaux);
    }
  }, styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff8ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  color: #555;\n}\n/*# sourceMappingURL=shared-page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParametresComponent, [{
    type: Component,
    args: [{ selector: "app-parametres", imports: [], template: `
<div class="page"> <div class="page__header"> <div><h1 class="page__title">Param\xE8tres</h1><p class="page__sub">Configuration de l'\xE9tablissement</p></div> <div class="page__actions"> <button class="btn btn--primary" (click)="save()">Enregistrer</button> </div> </div> @if (saved()) {
    <div style="background:#d5f5e3;color:#1e8449;border-radius:10px;padding:12px 16px;font-size:13px;font-weight:600;margin-bottom:16px;"> \u2713 Modifications enregistr\xE9es avec succ\xE8s.
    </div> }

  <div class="card"> <div class="card__head"><span class="card__title">Informations de l'\xE9tablissement</span></div> <div style="display:flex;flex-direction:column;gap:14px;"> <div class="fields-row"> <div class="field"><label class="field__label">Nom de l'\xE9tablissement</label> <input class="field__input" [value]="form.name" (input)="form.name=$any($event.target).value" placeholder="\xC9cole Primaire Excellence"/> </div> <div class="field"><label class="field__label">Directeur / Principal</label> <input class="field__input" [value]="form.directeur" (input)="form.directeur=$any($event.target).value" placeholder="M. Kouassi Ange"/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Adresse</label> <input class="field__input" [value]="form.adresse" (input)="form.adresse=$any($event.target).value" placeholder="Abidjan, Cocody"/> </div> <div class="field"><label class="field__label">T\xE9l\xE9phone</label> <input class="field__input" [value]="form.tel" (input)="form.tel=$any($event.target).value" placeholder="+225 27 22 ..."/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Email</label> <input class="field__input" type="email" [value]="form.email" (input)="form.email=$any($event.target).value" placeholder="contact@ecole.ci"/> </div> <div class="field"><label class="field__label">Ann\xE9e scolaire</label> <input class="field__input" [value]="form.anneeScolaire" (input)="form.anneeScolaire=$any($event.target).value" placeholder="2024-2025"/> </div> </div> <div class="fields-row"> <div class="field"><label class="field__label">Niveaux enseign\xE9s</label> <input class="field__input" [value]="form.niveaux" (input)="form.niveaux=$any($event.target).value" placeholder="Primaire, Coll\xE8ge, Lyc\xE9e"/> </div> <div class="field"><label class="field__label">Devise (monnaie)</label> <select class="field__select" [value]="form.devise" (change)="form.devise=$any($event.target).value"> <option value="FCFA">FCFA</option> <option value="EUR">EUR</option> <option value="USD">USD</option> <option value="XOF">XOF</option> </select> </div> </div> </div> </div> <div class="card"> <div class="card__head"><span class="card__title">Utilisateurs & R\xF4les</span></div> <div class="table-wrap" style="box-shadow:none;border:none;"> <table class="table"> <thead><tr><th>Nom</th><th>Identifiant</th><th>R\xF4le</th><th>Statut</th></tr></thead> <tbody> @for (u of store.users(); track u.id) {
            <tr> <td class="fw-bold">{{ u.name }}</td> <td><span class="mono">{{ u.username }}</span></td> <td><span class="badge" [class]="roleCls(u.role)">{{ roleFr(u.role) }}</span></td> <td><span class="badge badge--green">Actif</span></td> </tr> }
        </tbody> </table> </div> </div> <div class="card"> <div class="card__head"><span class="card__title">Frais de scolarit\xE9 par niveau</span></div> <div style="display:flex;flex-direction:column;gap:12px;"> @for (f of fraisNiveaux; track f.niveau) {
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#f8f9fb;border-radius:10px;"> <span class="fw-med">{{ f.niveau }}</span> <div style="display:flex;align-items:center;gap:10px;"> <input class="field__input" type="number" [value]="f.montant" (input)="f.montant=+$any($event.target).value" style="width:140px;margin:0;"/> <span class="text-muted text-sm">FCFA / an</span> </div> </div> }
    </div> </div> <div class="card"> <div class="card__head"><span class="card__title">Zone de danger</span></div> <div style="display:flex;flex-direction:column;gap:12px;"> <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:#fdecea;border-radius:10px;"> <div> <div style="font-weight:700;color:#c0392b;">R\xE9initialiser toutes les donn\xE9es</div> <div style="font-size:12px;color:#e74c3c;margin-top:2px;">Efface \xE9l\xE8ves, notes, pr\xE9sences et paiements</div> </div> <button class="btn btn--danger" (click)="resetConfirm()">R\xE9initialiser</button> </div> </div> </div>
</div> `, styles: ['@charset "UTF-8";\n\n/* projects/gestion-education/src/app/shared-page.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff8ee;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F {\n  background: #e8e8e8;\n  color: #555;\n}\n/*# sourceMappingURL=shared-page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParametresComponent, { className: "ParametresComponent", filePath: "app/pages/parametres/parametres.component.ts", lineNumber: 20 });
})();
export {
  ParametresComponent
};
//# sourceMappingURL=chunk-YPUY2IDW.js.map
