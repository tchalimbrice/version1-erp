import {
  HttpClient,
  RouterLink
} from "./chunk-5B3WZUDV.js";
import {
  CollabStoreService,
  CommonModule,
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4UYYR4F3.js";

// projects/gestion-construction/src/app/pages/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.ref;
function DashboardComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "div", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const k_r1 = ctx.$implicit;
    \u0275\u0275styleProp("border-left-color", k_r1.color);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", k_r1.bg);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", k_r1.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r1.sub);
  }
}
function DashboardComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 28);
    \u0275\u0275elementStart(4, "div", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r2.value);
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", d_r2.value / ctx_r2.maxBar * 90, "px")("background", "linear-gradient(180deg,#e67e22,#d35400)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r2.label);
  }
}
function DashboardComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "span", 30);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", s_r4.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", s_r4.label, " (", s_r4.value, "%)");
  }
}
function DashboardComponent_For_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 34)(9, "div", 35);
    \u0275\u0275element(10, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td", 33);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.client);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", c_r5.avancement, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r5.avancement, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.budget);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.statutClass(c_r5.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.statut);
  }
}
var DashboardComponent = class _DashboardComponent {
  store;
  http = inject(HttpClient);
  apiUrl = "http://localhost:8080/api/construction/dashboard/summary";
  companyName = computed(() => this.store.company()?.name ?? "BTP Manager", ...ngDevMode ? [{ debugName: "companyName" }] : (
    /* istanbul ignore next */
    []
  ));
  kpis = [
    { label: "Chantiers actifs", value: "7", sub: "2 en retard", icon: "", color: "#e67e22", bg: "#fef0e7" },
    { label: "CA en cours (FCFA)", value: "142 M", sub: "\xE2\u2020\u2018 18% ce mois", icon: "", color: "#27ae60", bg: "#d5f5e3" },
    { label: "Devis en attente", value: "5", sub: "3 \xC3\xA0 relancer", icon: "", color: "#2980b9", bg: "#d6eaf8" },
    { label: "Ouvriers mobilis\xC3\xA9s", value: "48", sub: "6 absents", icon: "", color: "#8e44ad", bg: "#f4ecf7" },
    { label: "Engins op\xC3\xA9rationnels", value: "12 / 15", sub: "3 en entretien", icon: "", color: "#e74c3c", bg: "#fdecea" },
    { label: "Factures impay\xC3\xA9es", value: "3", sub: "28 M FCFA", icon: "", color: "#d35400", bg: "#fef5e7" }
  ];
  chantiers = [
    { ref: "CH-001", nom: "R\xC3\xA9sidence Les Palmiers", client: "SCI Palmiers", avancement: 72, statut: "En cours", budget: "85 M" },
    { ref: "CH-002", nom: "Immeuble Bureau Centre", client: "SARL Immobuild", avancement: 45, statut: "En cours", budget: "120 M" },
    { ref: "CH-003", nom: "Route Nationale RN4", client: "Minist\xC3\xA8re Travaux", avancement: 91, statut: "Finition", budget: "200 M" },
    { ref: "CH-004", nom: "Entrep\xC3\xB4t Logistique Port", client: "TransAfric SARL", avancement: 18, statut: "En retard", budget: "55 M" },
    { ref: "CH-005", nom: "\xC3\u2030cole Primaire Kossodo", client: "Mairie Kossodo", avancement: 63, statut: "En cours", budget: "32 M" }
  ];
  barData = [
    { label: "Jan", value: 95 },
    { label: "F\xC3\xA9v", value: 112 },
    { label: "Mar", value: 88 },
    { label: "Avr", value: 142 },
    { label: "Mai", value: 76 },
    { label: "Juin", value: 130 }
  ];
  pieSegments = [
    { label: "Gros \xC5\u201Cuvre", value: 38, color: "#e67e22" },
    { label: "Second \xC5\u201Cuvre", value: 27, color: "#2980b9" },
    { label: "VRD", value: 20, color: "#27ae60" },
    { label: "Finitions", value: 15, color: "#8e44ad" }
  ];
  constructor(store) {
    this.store = store;
  }
  ngOnInit() {
    this.http.get(this.apiUrl).subscribe({
      next: (summary) => this.applySummary(summary),
      error: () => void 0
    });
  }
  applySummary(summary) {
    const metrics = new Map(summary.metrics.map((metric) => [metric.code, metric.value]));
    const projects = metrics.get("projects");
    const materials = metrics.get("materials");
    const workers = metrics.get("workers");
    if (projects !== void 0)
      this.kpis[0].value = String(projects);
    if (materials !== void 0)
      this.kpis[2].value = String(materials);
    if (workers !== void 0)
      this.kpis[3].value = String(workers);
    this.chantiers = [...this.chantiers];
  }
  get maxBar() {
    return Math.max(...this.barData.map((d) => d.value), 1);
  }
  get pieChart() {
    const cx = 65, cy = 65, r = 55;
    let startAngle = -Math.PI / 2;
    const total = this.pieSegments.reduce((s, p) => s + p.value, 0);
    return this.pieSegments.map((seg) => {
      const angle = seg.value / total * 2 * Math.PI;
      const x1 = cx + r * Math.cos(startAngle);
      const y1 = cy + r * Math.sin(startAngle);
      startAngle += angle;
      const x2 = cx + r * Math.cos(startAngle);
      const y2 = cy + r * Math.sin(startAngle);
      const large = angle > Math.PI ? 1 : 0;
      return `<path d="M${cx},${cy} L${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 ${large},1 ${x2.toFixed(1)},${y2.toFixed(1)} Z" fill="${seg.color}" />`;
    }).join("");
  }
  statutClass(s) {
    if (s === "En cours")
      return "badge badge--blue";
    if (s === "Finition")
      return "badge badge--green";
    if (s === "En retard")
      return "badge badge--red";
    if (s === "Termin\xC3\xA9")
      return "badge badge--gray";
    return "badge badge--gray";
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 55, vars: 2, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], ["routerLink", "/chantiers", 1, "btn", "btn--primary"], [1, "kpi-grid"], [1, "kpi-card", 3, "border-left-color"], [1, "charts-row"], [1, "card"], [1, "card__head"], [1, "card__title"], [1, "bar-chart"], [1, "bar-chart__col"], [1, "pie-wrap"], ["viewBox", "0 0 130 130", 1, "pie-svg", 3, "innerHTML"], [1, "pie-legend"], [1, "pie-legend__item"], ["routerLink", "/chantiers", 1, "card__link"], [1, "table-wrap", 2, "margin", "-1px", "border", "none", "box-shadow", "none"], [1, "table"], [1, "kpi-card"], [1, "kpi-card__icon"], [1, "kpi-card__body"], [1, "kpi-card__value"], [1, "kpi-card__label"], [1, "kpi-card__sub"], [1, "bar-chart__val"], [1, "bar-chart__bar"], [1, "bar-chart__lbl"], [1, "pie-legend__dot"], [1, "mono"], [1, "fw-med"], [1, "text-muted"], [2, "display", "flex", "align-items", "center", "gap", "8px"], [1, "progress-bar", 2, "flex", "1"], [1, "progress-bar__fill"], [1, "text-sm", "text-muted"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Tableau de bord");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "a", 5);
      \u0275\u0275text(9, "+ Nouveau chantier");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275repeaterCreate(11, DashboardComponent_For_12_Template, 10, 10, "div", 7, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "span", 11);
      \u0275\u0275text(17, "CA mensuel (millions FCFA)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 12);
      \u0275\u0275repeaterCreate(19, DashboardComponent_For_20_Template, 6, 6, "div", 13, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 9)(22, "div", 10)(23, "span", 11);
      \u0275\u0275text(24, "R\xE9partition travaux");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(26, "svg", 15);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "div", 16);
      \u0275\u0275repeaterCreate(28, DashboardComponent_For_29_Template, 4, 4, "div", 17, _forTrack0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "div", 9)(31, "div", 10)(32, "span", 11);
      \u0275\u0275text(33, "Chantiers actifs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "a", 18);
      \u0275\u0275text(35, "Voir tous \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 19)(37, "table", 20)(38, "thead")(39, "tr")(40, "th");
      \u0275\u0275text(41, "R\xE9f.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th");
      \u0275\u0275text(43, "Chantier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th");
      \u0275\u0275text(45, "Client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th");
      \u0275\u0275text(47, "Avancement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "th");
      \u0275\u0275text(49, "Budget");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th");
      \u0275\u0275text(51, "Statut");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "tbody");
      \u0275\u0275repeaterCreate(53, DashboardComponent_For_54_Template, 18, 10, "tr", null, _forTrack1);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Vue d'ensemble \u2014 ", ctx.companyName());
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.kpis);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.barData);
      \u0275\u0275advance(7);
      \u0275\u0275property("innerHTML", ctx.pieChart, \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.pieSegments);
      \u0275\u0275advance(25);
      \u0275\u0275repeater(ctx.chantiers);
    }
  }, dependencies: [CommonModule, RouterLink], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff5ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbfc;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a8fa8;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 680px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="page"> <header class="page__header"> <div> <h1 class="page__title">Tableau de bord</h1> <p class="page__sub">Vue d'ensemble \u2014 {{ companyName() }}</p> </div> <div class="page__actions"> <a routerLink="/chantiers" class="btn btn--primary">+ Nouveau chantier</a> </div> </header> <!-- KPIs --> <div class="kpi-grid"> @for (k of kpis; track k.label) {
      <div class="kpi-card" [style.border-left-color]="k.color"> <div class="kpi-card__icon" [style.background]="k.bg">{{ k.icon }}</div> <div class="kpi-card__body"> <div class="kpi-card__value" [style.color]="k.color">{{ k.value }}</div> <div class="kpi-card__label">{{ k.label }}</div> <div class="kpi-card__sub">{{ k.sub }}</div> </div> </div> }
  </div> <!-- Charts --> <div class="charts-row"> <div class="card"> <div class="card__head"> <span class="card__title">CA mensuel (millions FCFA)</span> </div> <div class="bar-chart"> @for (d of barData; track d.label) {
          <div class="bar-chart__col"> <div class="bar-chart__val">{{ d.value }}</div> <div class="bar-chart__bar" [style.height.px]="(d.value / maxBar) * 90" [style.background]="'linear-gradient(180deg,#e67e22,#d35400)'"></div> <div class="bar-chart__lbl">{{ d.label }}</div> </div> }
      </div> </div> <div class="card"> <div class="card__head"> <span class="card__title">R\xE9partition travaux</span> </div> <div class="pie-wrap"> <svg class="pie-svg" viewBox="0 0 130 130" [innerHTML]="pieChart"></svg> <div class="pie-legend"> @for (s of pieSegments; track s.label) {
            <div class="pie-legend__item"> <span class="pie-legend__dot" [style.background]="s.color"></span> <span>{{ s.label }} ({{ s.value }}%)</span> </div> }
        </div> </div> </div> </div> <!-- Chantiers actifs --> <div class="card"> <div class="card__head"> <span class="card__title">Chantiers actifs</span> <a routerLink="/chantiers" class="card__link">Voir tous \u2192</a> </div> <div class="table-wrap" style="margin:-1px;border:none;box-shadow:none;"> <table class="table"> <thead> <tr> <th>R\xE9f.</th> <th>Chantier</th> <th>Client</th> <th>Avancement</th> <th>Budget</th> <th>Statut</th> </tr> </thead> <tbody> @for (c of chantiers; track c.ref) {
            <tr> <td class="mono">{{ c.ref }}</td> <td class="fw-med">{{ c.nom }}</td> <td class="text-muted">{{ c.client }}</td> <td> <div style="display:flex;align-items:center;gap:8px;"> <div class="progress-bar" style="flex:1;"> <div class="progress-bar__fill" [style.width.%]="c.avancement"></div> </div> <span class="text-sm text-muted">{{ c.avancement }}%</span> </div> </td> <td class="text-muted">{{ c.budget }}</td> <td><span [class]="statutClass(c.statut)">{{ c.statut }}</span></td> </tr> }
        </tbody> </table> </div> </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-construction/src/app/pages/dashboard/dashboard.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff5ee;\n}\n.btn--danger {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbfc;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted {\n  color: #8a8fa8;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 680px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app/pages/dashboard/dashboard.component.ts", lineNumber: 16 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-CMDZNWBS.js.map
