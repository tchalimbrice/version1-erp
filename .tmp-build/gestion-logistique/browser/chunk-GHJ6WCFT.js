import {
  HttpClient,
  RouterLink
} from "./chunk-JSTXLMZR.js";
import {
  CollabStoreService
} from "./chunk-2Q2UPMO2.js";
import {
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
} from "./chunk-PVSPOVDN.js";

// projects/gestion-logistique/src/app/pages/dashboard/dashboard.component.ts
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
    \u0275\u0275styleProp("height", d_r2.value / ctx_r2.maxBar * 90, "px");
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
    \u0275\u0275elementStart(7, "td", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r5.ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r5.client);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r5.dest);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r5.chauffeur);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r5.heure);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.statutClass(l_r5.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r5.statut);
  }
}
var DashboardComponent = class _DashboardComponent {
  store;
  http = inject(HttpClient);
  apiUrl = "http://localhost:8080/api/logistique/dashboard/summary";
  companyName = computed(() => this.store.company()?.name ?? "LogiManager", ...ngDevMode ? [{ debugName: "companyName" }] : (
    /* istanbul ignore next */
    []
  ));
  kpis = [
    { label: "Livraisons du jour", value: "23", sub: "18 termin\xC3\xA9es", icon: "", color: "#3498db", bg: "#d6eaf8" },
    { label: "Commandes en cours", value: "47", sub: "5 urgentes", icon: "", color: "#e67e22", bg: "#fef0e7" },
    { label: "V\xC3\xA9hicules actifs", value: "14/18", sub: "4 en entretien", icon: "", color: "#27ae60", bg: "#d5f5e3" },
    { label: "CA mensuel (FCFA)", value: "38.4 M", sub: "\xE2\u2020\u2018 12% vs mois pr\xC3\xA9c.", icon: "", color: "#8e44ad", bg: "#f4ecf7" },
    { label: "Km parcourus (mois)", value: "42 180", sub: "\xE2\u2020\u2018 8%", icon: "", color: "#1abc9c", bg: "#d1f2eb" },
    { label: "Incidents signal\xC3\xA9s", value: "2", sub: "Ce mois", icon: "", color: "#e74c3c", bg: "#fdecea" }
  ];
  barData = [
    { label: "Lun", value: 18 },
    { label: "Mar", value: 24 },
    { label: "Mer", value: 21 },
    { label: "Jeu", value: 29 },
    { label: "Ven", value: 23 },
    { label: "Sam", value: 14 },
    { label: "Dim", value: 8 }
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
    const deliveries = metrics.get("deliveries");
    const vehicles = metrics.get("vehicles");
    const packages = metrics.get("packages");
    if (deliveries !== void 0)
      this.kpis[0].value = String(deliveries);
    if (deliveries !== void 0)
      this.kpis[1].value = String(deliveries * 2);
    if (vehicles !== void 0)
      this.kpis[2].value = `${vehicles}/18`;
    if (packages !== void 0)
      this.kpis[3].value = `${(packages * 2e4).toLocaleString("fr-FR")} FCFA`;
    this.livraisons = [...this.livraisons];
  }
  get maxBar() {
    return Math.max(...this.barData.map((d) => d.value), 1);
  }
  pieSegments = [
    { label: "Express J+1", value: 35, color: "#3498db" },
    { label: "Standard J+3", value: 42, color: "#27ae60" },
    { label: "Groupage", value: 15, color: "#e67e22" },
    { label: "Frigorifique", value: 8, color: "#8e44ad" }
  ];
  get pieChart() {
    const cx = 65, cy = 65, r = 55;
    let a = -Math.PI / 2;
    const tot = this.pieSegments.reduce((s, p) => s + p.value, 0);
    return this.pieSegments.map((seg) => {
      const da = seg.value / tot * 2 * Math.PI;
      const x1 = cx + r * Math.cos(a);
      const y1 = cy + r * Math.sin(a);
      a += da;
      const x2 = cx + r * Math.cos(a);
      const y2 = cy + r * Math.sin(a);
      const lg = da > Math.PI ? 1 : 0;
      return `<path d="M${cx},${cy} L${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 ${lg},1 ${x2.toFixed(1)},${y2.toFixed(1)} Z" fill="${seg.color}"/>`;
    }).join("");
  }
  livraisons = [
    { ref: "LIV-0420-001", client: "SuperMart SA", dest: "Bobo-Dioulasso", chauffeur: "Kon\xC3\xA9 Seydou", statut: "En route", heure: "08:30" },
    { ref: "LIV-0420-002", client: "Pharmavie SARL", dest: "Ouahigouya", chauffeur: "Niki\xC3\xA9ma Lassina", statut: "Livr\xC3\xA9", heure: "07:15" },
    { ref: "LIV-0420-003", client: "BTP Mat\xC3\xA9riaux", dest: "Koudougou", chauffeur: "Zongo Firmin", statut: "En route", heure: "09:00" },
    { ref: "LIV-0420-004", client: "AgriSud BF", dest: "Fada N'Gourma", chauffeur: "Traor\xC3\xA9 Karim", statut: "Retard", heure: "06:00" },
    { ref: "LIV-0420-005", client: "Importex SARL", dest: "Ouagadougou", chauffeur: "Barry Moussa", statut: "Termin\xC3\xA9", heure: "10:30" }
  ];
  statutClass(s) {
    if (s === "Livr\xC3\xA9" || s === "Termin\xC3\xA9")
      return "badge badge--green";
    if (s === "En route")
      return "badge badge--blue";
    if (s === "Retard")
      return "badge badge--red";
    if (s === "Planifi\xC3\xA9")
      return "badge badge--gray";
    return "badge badge--yellow";
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 55, vars: 2, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], ["routerLink", "/commandes", 1, "btn", "btn--primary"], [1, "kpi-grid"], [1, "kpi-card", 3, "border-left-color"], [1, "charts-row"], [1, "card"], [1, "card__head"], [1, "card__title"], [1, "bar-chart"], [1, "bar-chart__col"], [1, "pie-wrap"], ["viewBox", "0 0 130 130", 1, "pie-svg", 3, "innerHTML"], [1, "pie-legend"], [1, "pie-legend__item"], ["routerLink", "/livraisons", 1, "card__link"], [1, "table-wrap", 2, "margin", "-1px", "border", "none", "box-shadow", "none"], [1, "table"], [1, "kpi-card"], [1, "kpi-card__icon"], [1, "kpi-card__body"], [1, "kpi-card__value"], [1, "kpi-card__label"], [1, "kpi-card__sub"], [1, "bar-chart__val"], [1, "bar-chart__bar", 2, "background", "linear-gradient(180deg,#3498db,#1a6fa8)"], [1, "bar-chart__lbl"], [1, "pie-legend__dot"], [1, "mono"], [1, "fw-med"], [1, "text-muted"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Tableau de bord");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "a", 5);
      \u0275\u0275text(9, "+ Nouvelle commande");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275repeaterCreate(11, DashboardComponent_For_12_Template, 10, 10, "div", 7, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "span", 11);
      \u0275\u0275text(17, "Livraisons / jour (semaine)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 12);
      \u0275\u0275repeaterCreate(19, DashboardComponent_For_20_Template, 6, 4, "div", 13, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 9)(22, "div", 10)(23, "span", 11);
      \u0275\u0275text(24, "Types de transport");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(26, "svg", 15);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "div", 16);
      \u0275\u0275repeaterCreate(28, DashboardComponent_For_29_Template, 4, 4, "div", 17, _forTrack0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "div", 9)(31, "div", 10)(32, "span", 11);
      \u0275\u0275text(33, "Livraisons du jour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "a", 18);
      \u0275\u0275text(35, "Voir toutes \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 19)(37, "table", 20)(38, "thead")(39, "tr")(40, "th");
      \u0275\u0275text(41, "R\xE9f.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th");
      \u0275\u0275text(43, "Client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th");
      \u0275\u0275text(45, "Destination");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th");
      \u0275\u0275text(47, "Chauffeur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "th");
      \u0275\u0275text(49, "D\xE9part");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th");
      \u0275\u0275text(51, "Statut");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "tbody");
      \u0275\u0275repeaterCreate(53, DashboardComponent_For_54_Template, 14, 8, "tr", null, _forTrack1);
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
      \u0275\u0275repeater(ctx.livraisons);
    }
  }, dependencies: [CommonModule, RouterLink], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0d2137;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #1a6fa8);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #3498db;\n  border: 1.5px solid #3498db;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #eaf4fd;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f0f4f8;\n  color: #555;\n  border: 1.5px solid #dde5ef;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #0d2137;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #3498db;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f7fafc;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f4f8;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafcff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0d2137;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0d2137;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #3498db;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #e8eef4;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #1a6fa8);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #dde5ef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #3498db;\n  color: #3498db;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #3498db;\n  border-color: #3498db;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f4f8;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0d2137;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f4f8;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="page"> <header class="page__header"> <div> <h1 class="page__title">Tableau de bord</h1> <p class="page__sub">Vue d'ensemble \u2014 {{ companyName() }}</p> </div> <div class="page__actions"> <a routerLink="/commandes" class="btn btn--primary">+ Nouvelle commande</a> </div> </header> <div class="kpi-grid"> @for (k of kpis; track k.label) {
      <div class="kpi-card" [style.border-left-color]="k.color"> <div class="kpi-card__icon" [style.background]="k.bg">{{ k.icon }}</div> <div class="kpi-card__body"> <div class="kpi-card__value" [style.color]="k.color">{{ k.value }}</div> <div class="kpi-card__label">{{ k.label }}</div> <div class="kpi-card__sub">{{ k.sub }}</div> </div> </div> }
  </div> <div class="charts-row"> <div class="card"> <div class="card__head"><span class="card__title">Livraisons / jour (semaine)</span></div> <div class="bar-chart"> @for (d of barData; track d.label) {
          <div class="bar-chart__col"> <div class="bar-chart__val">{{ d.value }}</div> <div class="bar-chart__bar" [style.height.px]="(d.value/maxBar)*90" style="background:linear-gradient(180deg,#3498db,#1a6fa8)"></div> <div class="bar-chart__lbl">{{ d.label }}</div> </div> }
      </div> </div> <div class="card"> <div class="card__head"><span class="card__title">Types de transport</span></div> <div class="pie-wrap"> <svg class="pie-svg" viewBox="0 0 130 130" [innerHTML]="pieChart"></svg> <div class="pie-legend"> @for (s of pieSegments; track s.label) {
            <div class="pie-legend__item"> <span class="pie-legend__dot" [style.background]="s.color"></span> <span>{{ s.label }} ({{ s.value }}%)</span> </div> }
        </div> </div> </div> </div> <div class="card"> <div class="card__head"> <span class="card__title">Livraisons du jour</span> <a routerLink="/livraisons" class="card__link">Voir toutes \u2192</a> </div> <div class="table-wrap" style="margin:-1px;border:none;box-shadow:none;"> <table class="table"> <thead><tr><th>R\xE9f.</th><th>Client</th><th>Destination</th><th>Chauffeur</th><th>D\xE9part</th><th>Statut</th></tr></thead> <tbody> @for (l of livraisons; track l.ref) {
            <tr> <td class="mono">{{ l.ref }}</td> <td class="fw-med">{{ l.client }}</td> <td class="text-muted">{{ l.dest }}</td> <td class="text-muted">{{ l.chauffeur }}</td> <td class="text-muted">{{ l.heure }}</td> <td><span [class]="statutClass(l.statut)">{{ l.statut }}</span></td> </tr> }
        </tbody> </table> </div> </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-logistique/src/app/pages/dashboard/dashboard.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0d2137;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #1a6fa8);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #3498db;\n  border: 1.5px solid #3498db;\n}\n.btn--outline:hover {\n  background: #eaf4fd;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f0f4f8;\n  color: #555;\n  border: 1.5px solid #dde5ef;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0d2137;\n}\n.card__link {\n  font-size: 12px;\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #0d2137;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #3498db;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde5ef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f7fafc;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f4f8;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafcff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #0d2137;\n}\n.fw-med {\n  font-weight: 600;\n  color: #0d2137;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #3498db;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #e8eef4;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #1a6fa8);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #dde5ef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #3498db;\n  color: #3498db;\n}\n.tab.active {\n  background: #3498db;\n  border-color: #3498db;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.search-input:focus {\n  border-color: #3498db;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f4f8;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0d2137;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f4f8;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #dde5ef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #3498db;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app/pages/dashboard/dashboard.component.ts", lineNumber: 9 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-GHJ6WCFT.js.map
