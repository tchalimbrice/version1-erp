import {
  HttpClient
} from "./chunk-4HHYUM7A.js";
import {
  CommonModule
} from "./chunk-A7PCKB3Z.js";
import {
  CollabStoreService
} from "./chunk-ZHJMMKYO.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-WTFQPXVN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-46DXP6YY.js";

// projects/gestion-education/src/app/pages/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.nom;
var _forTrack1 = ($index, $item) => $item.msg;
function DashboardComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 24)(1, "div", 32);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 33)(4, "div", 34);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 36);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 37);
    \u0275\u0275domElement(11, "div", 38);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const lvl_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", lvl_r1.bg);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lvl_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", lvl_r1.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lvl_r1.total);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lvl_r1.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", lvl_r1.classes, " classes \xB7 ", lvl_r1.filles, "F / ", lvl_r1.garcons, "G");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", lvl_r1.color)("width", lvl_r1.total / ctx_r1.totalEleves * 100 + "%");
  }
}
function DashboardComponent_For_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div")(4, "div", 41);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 42);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275styleProp("background", a_r3.bg);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", a_r3.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r3.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.msg);
  }
}
var DashboardComponent = class _DashboardComponent {
  store;
  http = inject(HttpClient);
  apiUrl = "http://localhost:8080/api/education/dashboard/summary";
  companyName = computed(() => this.store.company()?.name ?? "EduManager", ...ngDevMode ? [{ debugName: "companyName" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor(store) {
    this.store = store;
  }
  niveaux = [
    { nom: "Primaire (CP\u2013CM2)", total: 312, classes: 12, filles: 158, garcons: 154, icon: "", color: "#1a3a5c", bg: "#d6eaf8" },
    { nom: "Coll\xE8ge (6e\u20133e)", total: 248, classes: 10, filles: 122, garcons: 126, icon: "", color: "#27ae60", bg: "#d5f5e3" },
    { nom: "Lyc\xE9e (2de\u2013Tle)", total: 186, classes: 8, filles: 89, garcons: 97, icon: "", color: "#8e44ad", bg: "#f4ecf7" }
  ];
  totalEleves = this.niveaux.reduce((s, n) => s + n.total, 0);
  totalEnseignants = 42;
  totalClasses = this.niveaux.reduce((s, n) => s + n.classes, 0);
  tauxPaiement = 78;
  alertes = [
    { titre: "Scolarit\xE9s impay\xE9es", msg: "48 \xE9l\xE8ves avec arri\xE9r\xE9s > 2 mois", icon: "", color: "#b7950b", bg: "#fef9e7" },
    { titre: "Bulletins en attente", msg: "Notes non saisies \u2014 3 classes 3e trimestre", icon: "", color: "#1a5276", bg: "#eaf3fd" },
    { titre: "Absence enseignant", msg: "M. YAO absent \u2014 Fran\xE7ais 4e B", icon: "", color: "#c0392b", bg: "#fdecea" },
    { titre: "R\xE9inscriptions", msg: "23 \xE9l\xE8ves non r\xE9inscrits pour 2026-2027", icon: "", color: "#8e44ad", bg: "#f4ecf7" }
  ];
  ngOnInit() {
    this.http.get(this.apiUrl).subscribe({
      next: (summary) => this.applySummary(summary),
      error: () => void 0
    });
  }
  applySummary(summary) {
    const metrics = new Map(summary.metrics.map((metric) => [metric.code, metric.value]));
    const students = metrics.get("students");
    const classes = metrics.get("classes");
    const bulletins = metrics.get("bulletins");
    if (students !== void 0) {
      this.totalEleves = students;
      const baseTotal = 746;
      const ratio = students / baseTotal;
      this.niveaux = [
        __spreadProps(__spreadValues({}, this.niveaux[0]), { total: Math.max(1, Math.round(312 * ratio)), filles: Math.max(1, Math.round(158 * ratio)), garcons: Math.max(1, Math.round(154 * ratio)) }),
        __spreadProps(__spreadValues({}, this.niveaux[1]), { total: Math.max(1, Math.round(248 * ratio)), filles: Math.max(1, Math.round(122 * ratio)), garcons: Math.max(1, Math.round(126 * ratio)) }),
        __spreadProps(__spreadValues({}, this.niveaux[2]), { total: Math.max(1, Math.round(186 * ratio)), filles: Math.max(1, Math.round(89 * ratio)), garcons: Math.max(1, Math.round(97 * ratio)) })
      ];
    }
    if (classes !== void 0) {
      this.totalClasses = classes;
      const primary = Math.max(1, Math.round(classes * 0.43));
      const college = Math.max(1, Math.round(classes * 0.34));
      const lycee = Math.max(1, classes - primary - college);
      this.niveaux = [
        __spreadProps(__spreadValues({}, this.niveaux[0]), { classes: primary }),
        __spreadProps(__spreadValues({}, this.niveaux[1]), { classes: college }),
        __spreadProps(__spreadValues({}, this.niveaux[2]), { classes: lycee })
      ];
    }
    if (bulletins !== void 0) {
      this.tauxPaiement = Math.min(99, Math.max(60, Math.round(bulletins / Math.max(1, this.totalEleves) * 100)));
    }
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 95, vars: 5, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "kpi-grid", 2, "margin-bottom", "24px"], [1, "kpi-card", 2, "border-left-color", "#1a3a5c"], [1, "kpi-card__icon", 2, "background", "#d6eaf8"], [1, "kpi-card__body"], [1, "kpi-card__value", 2, "color", "#1a3a5c"], [1, "kpi-card__label"], [1, "kpi-card__sub"], [1, "kpi-card", 2, "border-left-color", "#27ae60"], [1, "kpi-card__icon", 2, "background", "#d5f5e3"], [1, "kpi-card__value", 2, "color", "#27ae60"], [1, "kpi-card", 2, "border-left-color", "#f39c12"], [1, "kpi-card__icon", 2, "background", "#fef9e7"], [1, "kpi-card__value", 2, "color", "#f39c12"], [1, "kpi-card", 2, "border-left-color", "#8e44ad"], [1, "kpi-card__icon", 2, "background", "#f4ecf7"], [1, "kpi-card__value", 2, "color", "#8e44ad"], [1, "card", 2, "margin-bottom", "20px"], [1, "card__head"], [1, "card__title"], [1, "levels-grid"], [1, "level-card"], [2, "display", "grid", "grid-template-columns", "1fr 300px", "gap", "20px"], [1, "card"], [1, "table"], [1, "fw-med"], [1, "text-muted"], [2, "display", "flex", "flex-direction", "column", "gap", "10px"], [2, "display", "flex", "align-items", "flex-start", "gap", "10px", "padding", "10px 12px", "border-radius", "10px", 3, "background"], [1, "level-icon"], [2, "flex", "1"], [1, "level-val"], [1, "level-lbl"], [1, "level-sub"], [1, "bar"], [1, "bar__fill"], [2, "display", "flex", "align-items", "flex-start", "gap", "10px", "padding", "10px 12px", "border-radius", "10px"], [2, "font-size", "18px"], [2, "font-size", "13px", "font-weight", "700"], [2, "font-size", "12px", "color", "#555", "margin-top", "2px"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, " Tableau de bord");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(7, "div", 4)(8, "div", 5);
      \u0275\u0275domElement(9, "div", 6);
      \u0275\u0275domElementStart(10, "div", 7)(11, "div", 8);
      \u0275\u0275text(12);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "div", 9);
      \u0275\u0275text(14, "Total \xE9l\xE8ves");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "div", 10);
      \u0275\u0275text(16, "Tous niveaux confondus");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(17, "div", 11);
      \u0275\u0275domElement(18, "div", 12);
      \u0275\u0275domElementStart(19, "div", 7)(20, "div", 13);
      \u0275\u0275text(21);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "div", 9);
      \u0275\u0275text(23, "Enseignants actifs");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(24, "div", 14);
      \u0275\u0275domElement(25, "div", 15);
      \u0275\u0275domElementStart(26, "div", 7)(27, "div", 16);
      \u0275\u0275text(28);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "div", 9);
      \u0275\u0275text(30, "Classes");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(31, "div", 17);
      \u0275\u0275domElement(32, "div", 18);
      \u0275\u0275domElementStart(33, "div", 7)(34, "div", 19);
      \u0275\u0275text(35);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "div", 9);
      \u0275\u0275text(37, "Taux de paiement");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(38, "div", 20)(39, "div", 21)(40, "span", 22);
      \u0275\u0275text(41, "Effectifs par niveau");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(42, "div", 23);
      \u0275\u0275repeaterCreate(43, DashboardComponent_For_44_Template, 12, 14, "div", 24, _forTrack0);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(45, "div", 25)(46, "div", 26)(47, "div", 21)(48, "span", 22);
      \u0275\u0275text(49, "Activit\xE9 r\xE9cente");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(50, "table", 27)(51, "thead")(52, "tr")(53, "th");
      \u0275\u0275text(54, "\xC9v\xE8nement");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(55, "th");
      \u0275\u0275text(56, "D\xE9tail");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "th");
      \u0275\u0275text(58, "Date");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(59, "tbody")(60, "tr")(61, "td", 28);
      \u0275\u0275text(62, "Inscription");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(63, "td");
      \u0275\u0275text(64, "15 nouveaux \xE9l\xE8ves enregistr\xE9s");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(65, "td", 29);
      \u0275\u0275text(66, "Aujourd'hui");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(67, "tr")(68, "td", 28);
      \u0275\u0275text(69, "Bulletin");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(70, "td");
      \u0275\u0275text(71, "Bulletins 2e trimestre \u2014 3\xE8me disponibles");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(72, "td", 29);
      \u0275\u0275text(73, "Hier");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(74, "tr")(75, "td", 28);
      \u0275\u0275text(76, "Paiement");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(77, "td");
      \u0275\u0275text(78, "32 scolarit\xE9s r\xE9gl\xE9es ce mois");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(79, "td", 29);
      \u0275\u0275text(80, "Cette semaine");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(81, "tr")(82, "td", 28);
      \u0275\u0275text(83, "Absence");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(84, "td");
      \u0275\u0275text(85, "8 absences non justifi\xE9es signal\xE9es");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(86, "td", 29);
      \u0275\u0275text(87, "Aujourd'hui");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(88, "div", 26)(89, "div", 21)(90, "span", 22);
      \u0275\u0275text(91, "Alertes");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(92, "div", 30);
      \u0275\u0275repeaterCreate(93, DashboardComponent_For_94_Template, 8, 7, "div", 31, _forTrack1);
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Vue d'ensemble de l'\xE9tablissement \u2014 ", ctx.companyName());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totalEleves);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.totalEnseignants);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.totalClasses);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.tauxPaiement, "%");
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.niveaux);
      \u0275\u0275advance(50);
      \u0275\u0275repeater(ctx.alertes);
    }
  }, dependencies: [CommonModule], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff8ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  color: #555;\n}\n.level-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde3ea;\n  padding: 22px 24px;\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.level-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-size: 26px;\n  flex-shrink: 0;\n}\n.level-val[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 900;\n  line-height: 1;\n}\n.level-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #7f8c8d;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 4px;\n}\n.level-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  margin-top: 2px;\n}\n.levels-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.bar[_ngcontent-%COMP%] {\n  height: 10px;\n  border-radius: 5px;\n  background: #f0f4f8;\n  overflow: hidden;\n  margin-top: 8px;\n}\n.bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule], template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title"> Tableau de bord</h1>
      <p class="page__sub">Vue d'ensemble de l'\xE9tablissement \u2014 {{ companyName() }}</p>
    </div>
  </div>

  <div class="kpi-grid" style="margin-bottom:24px">
    <div class="kpi-card" style="border-left-color:#1a3a5c">
      <div class="kpi-card__icon" style="background:#d6eaf8"></div>
      <div class="kpi-card__body">
        <div class="kpi-card__value" style="color:#1a3a5c">{{ totalEleves }}</div>
        <div class="kpi-card__label">Total \xE9l\xE8ves</div>
        <div class="kpi-card__sub">Tous niveaux confondus</div>
      </div>
    </div>
    <div class="kpi-card" style="border-left-color:#27ae60">
      <div class="kpi-card__icon" style="background:#d5f5e3"></div>
      <div class="kpi-card__body">
        <div class="kpi-card__value" style="color:#27ae60">{{ totalEnseignants }}</div>
        <div class="kpi-card__label">Enseignants actifs</div>
      </div>
    </div>
    <div class="kpi-card" style="border-left-color:#f39c12">
      <div class="kpi-card__icon" style="background:#fef9e7"></div>
      <div class="kpi-card__body">
        <div class="kpi-card__value" style="color:#f39c12">{{ totalClasses }}</div>
        <div class="kpi-card__label">Classes</div>
      </div>
    </div>
    <div class="kpi-card" style="border-left-color:#8e44ad">
      <div class="kpi-card__icon" style="background:#f4ecf7"></div>
      <div class="kpi-card__body">
        <div class="kpi-card__value" style="color:#8e44ad">{{ tauxPaiement }}%</div>
        <div class="kpi-card__label">Taux de paiement</div>
      </div>
    </div>
  </div>

  <div class="card" style="margin-bottom:20px">
    <div class="card__head"><span class="card__title">Effectifs par niveau</span></div>
    <div class="levels-grid">
      @for (lvl of niveaux; track lvl.nom) {
        <div class="level-card">
          <div class="level-icon" [style.background]="lvl.bg">{{ lvl.icon }}</div>
          <div style="flex:1">
            <div class="level-val" [style.color]="lvl.color">{{ lvl.total }}</div>
            <div class="level-lbl">{{ lvl.nom }}</div>
            <div class="level-sub">{{ lvl.classes }} classes \xB7 {{ lvl.filles }}F / {{ lvl.garcons }}G</div>
            <div class="bar"><div class="bar__fill" [style.background]="lvl.color" [style.width]="(lvl.total/totalEleves*100)+'%'"></div></div>
          </div>
        </div>
      }
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 300px;gap:20px">
    <div class="card">
      <div class="card__head"><span class="card__title">Activit\xE9 r\xE9cente</span></div>
      <table class="table">
        <thead><tr><th>\xC9v\xE8nement</th><th>D\xE9tail</th><th>Date</th></tr></thead>
        <tbody>
          <tr><td class="fw-med">Inscription</td><td>15 nouveaux \xE9l\xE8ves enregistr\xE9s</td><td class="text-muted">Aujourd'hui</td></tr>
          <tr><td class="fw-med">Bulletin</td><td>Bulletins 2e trimestre \u2014 3\xE8me disponibles</td><td class="text-muted">Hier</td></tr>
          <tr><td class="fw-med">Paiement</td><td>32 scolarit\xE9s r\xE9gl\xE9es ce mois</td><td class="text-muted">Cette semaine</td></tr>
          <tr><td class="fw-med">Absence</td><td>8 absences non justifi\xE9es signal\xE9es</td><td class="text-muted">Aujourd'hui</td></tr>
        </tbody>
      </table>
    </div>
    <div class="card">
      <div class="card__head"><span class="card__title">Alertes</span></div>
      <div style="display:flex;flex-direction:column;gap:10px">
        @for (a of alertes; track a.msg) {
          <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:10px;" [style.background]="a.bg">
            <span style="font-size:18px">{{ a.icon }}</span>
            <div>
              <div style="font-size:13px;font-weight:700;" [style.color]="a.color">{{ a.titre }}</div>
              <div style="font-size:12px;color:#555;margin-top:2px">{{ a.msg }}</div>
            </div>
          </div>
        }
      </div>
    </div>
  </div>
</div>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;baabb236dcc8aa24bfaa41d6af6581154f52eef1523df89778665d671f5e945c;D:/MON BUREAU/PPE302/PPE-302/ppe-302-2/TEST/mon-workspace/projects/gestion-education/src/app/pages/dashboard/dashboard.component.ts */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff8ee;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F {\n  background: #e8e8e8;\n  color: #555;\n}\n.level-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde3ea;\n  padding: 22px 24px;\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.level-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-size: 26px;\n  flex-shrink: 0;\n}\n.level-val {\n  font-size: 32px;\n  font-weight: 900;\n  line-height: 1;\n}\n.level-lbl {\n  font-size: 12px;\n  color: #7f8c8d;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 4px;\n}\n.level-sub {\n  font-size: 11px;\n  color: #aaa;\n  margin-top: 2px;\n}\n.levels-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.bar {\n  height: 10px;\n  border-radius: 5px;\n  background: #f0f4f8;\n  overflow: hidden;\n  margin-top: 8px;\n}\n.bar__fill {\n  height: 100%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app/pages/dashboard/dashboard.component.ts", lineNumber: 122 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-YDQIHUNQ.js.map
