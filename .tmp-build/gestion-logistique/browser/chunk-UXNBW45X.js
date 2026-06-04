import {
  FormsModule
} from "./chunk-GCMEAXU6.js";
import {
  CommonModule,
  Component,
  ViewChild,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-PVSPOVDN.js";

// projects/gestion-logistique/src/app/pages/suivi-temps-reel/suivi-temps-reel.component.ts
var _c0 = ["mapEl"];
var _forTrack0 = ($index, $item) => $item.id;
function SuiviTempsReelComponent_For_36_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const v_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", v_r2.vitesse, " km/h");
  }
}
function SuiviTempsReelComponent_For_36_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const v_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CB} ", v_r2.commande);
  }
}
function SuiviTempsReelComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 26);
    \u0275\u0275domListener("click", function SuiviTempsReelComponent_For_36_Template_div_click_0_listener() {
      const v_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectVehicle(v_r2));
    });
    \u0275\u0275domElementStart(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 28);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 30)(8, "span", 31);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(10, SuiviTempsReelComponent_For_36_Conditional_10_Template, 2, 1, "span", 32);
    \u0275\u0275domElementStart(11, "span", 33);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(13, SuiviTempsReelComponent_For_36_Conditional_13_Template, 2, 1, "div", 34);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const v_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selectedId() === v_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F69B} ", v_r2.immatriculation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r2.chauffeur);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2192 ", v_r2.destination);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge--green", v_r2.statut === "en route")("badge--yellow", v_r2.statut === "arr\xEAt\xE9")("badge--gray", v_r2.statut === "hors ligne");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", v_r2.statut, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r2.statut === "en route" ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r2.derniereMAJ);
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r2.commande ? 13 : -1);
  }
}
function SuiviTempsReelComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.selected().immatriculation, " s\xE9lectionn\xE9");
  }
}
var SuiviTempsReelComponent = class _SuiviTempsReelComponent {
  mapEl;
  map = null;
  markers = [];
  L = null;
  timer = null;
  vehicules = signal([
    { id: "1", immatriculation: "AB 1234 CI", chauffeur: "KOFFI Armand", statut: "en route", lat: 5.36, lng: -4.0083, vitesse: 65, destination: "Yopougon March\xE9", commande: "CMD-0041", derniereMAJ: "Il y a 1 min" },
    { id: "2", immatriculation: "CD 5678 CI", chauffeur: "BAMBA Seydou", statut: "arr\xEAt\xE9", lat: 5.345, lng: -3.99, vitesse: 0, destination: "Port Abidjan", commande: "CMD-0039", derniereMAJ: "Il y a 3 min" },
    { id: "3", immatriculation: "EF 9012 CI", chauffeur: "COULIBALY Issa", statut: "en route", lat: 5.37, lng: -4.02, vitesse: 48, destination: "Cocody Riviera", commande: "CMD-0042", derniereMAJ: "Il y a 2 min" },
    { id: "4", immatriculation: "GH 3456 CI", chauffeur: "DIALLO Moussa", statut: "hors ligne", lat: 5.33, lng: -4.01, vitesse: 0, destination: "\u2013", commande: "", derniereMAJ: "Il y a 2 h" },
    { id: "5", immatriculation: "IJ 7890 CI", chauffeur: "OUATTARA Brahima", statut: "en route", lat: 5.355, lng: -3.975, vitesse: 72, destination: "Abobo Terminal", commande: "CMD-0040", derniereMAJ: "Il y a 30 s" }
  ], ...ngDevMode ? [{ debugName: "vehicules" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedId = signal(null, ...ngDevMode ? [{ debugName: "selectedId" }] : (
    /* istanbul ignore next */
    []
  ));
  selected = signal(null, ...ngDevMode ? [{ debugName: "selected" }] : (
    /* istanbul ignore next */
    []
  ));
  enRoute = () => this.vehicules().filter((v) => v.statut === "en route").length;
  arretes = () => this.vehicules().filter((v) => v.statut === "arr\xEAt\xE9").length;
  horsLigne = () => this.vehicules().filter((v) => v.statut === "hors ligne").length;
  selectVehicle(v) {
    this.selectedId.set(v.id);
    this.selected.set(v);
    if (this.map)
      this.map.setView([v.lat, v.lng], 14);
  }
  async ngAfterViewInit() {
    await this.loadLeaflet();
    this.initMap();
    this.timer = setInterval(() => this.simulateMovement(), 5e3);
  }
  ngOnDestroy() {
    if (this.timer)
      clearInterval(this.timer);
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }
  async loadLeaflet() {
    if (typeof window === "undefined")
      return;
    if (window.L) {
      this.L = window.L;
      return;
    }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);
    await new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = () => {
        this.L = window.L;
        resolve();
      };
      document.head.appendChild(script);
    });
  }
  initMap() {
    if (!this.L || !this.mapEl?.nativeElement)
      return;
    this.map = this.L.map(this.mapEl.nativeElement, { zoomControl: true }).setView([5.355, -4], 12);
    this.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "\xA9 OpenStreetMap contributors"
    }).addTo(this.map);
    this.renderMarkers();
  }
  renderMarkers() {
    if (!this.L || !this.map)
      return;
    this.markers.forEach((m) => m.remove());
    this.markers = [];
    this.vehicules().forEach((v) => {
      const color = v.statut === "en route" ? "#27ae60" : v.statut === "arr\xEAt\xE9" ? "#f39c12" : "#95a5a6";
      const icon = this.L.divIcon({
        className: "",
        html: `<div style="background:${color};width:14px;height:14px;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4)"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });
      const marker = this.L.marker([v.lat, v.lng], { icon }).addTo(this.map).bindPopup(`
          <b>${v.immatriculation}</b><br>
          ${v.chauffeur}<br>
          Statut : <b>${v.statut}</b><br>
          ${v.vitesse > 0 ? `Vitesse : ${v.vitesse} km/h<br>` : ""}
          Destination : ${v.destination}
        `);
      this.markers.push(marker);
    });
  }
  simulateMovement() {
    this.vehicules.update((list) => list.map((v) => {
      if (v.statut !== "en route")
        return v;
      return __spreadProps(__spreadValues({}, v), {
        lat: v.lat + (Math.random() - 0.5) * 3e-3,
        lng: v.lng + (Math.random() - 0.5) * 3e-3,
        vitesse: Math.max(20, Math.min(90, v.vitesse + (Math.random() - 0.5) * 10)),
        derniereMAJ: "\xC0 l'instant"
      });
    }));
    this.renderMarkers();
  }
  static \u0275fac = function SuiviTempsReelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuiviTempsReelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuiviTempsReelComponent, selectors: [["app-suivi-temps-reel"]], viewQuery: function SuiviTempsReelComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapEl = _t.first);
    }
  }, decls: 55, vars: 6, consts: [["mapEl", ""], [1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "pulse"], [1, "kpi-row"], [1, "kpi"], [1, "kpi__val", 2, "color", "#27ae60"], [1, "kpi__lbl"], [1, "kpi__val", 2, "color", "#f39c12"], [1, "kpi__val", 2, "color", "#7f8c8d"], [1, "kpi__val", 2, "color", "#1a5276"], [1, "layout"], [1, "panel"], [1, "panel__head"], [1, "panel__body"], [1, "vehicle-item", 3, "selected"], [2, "font-size", "12px", "color", "#1a5276", "font-weight", "600"], [1, "map-container"], ["id", "logi-map"], [1, "map-legend"], [1, "legend-row"], [1, "dot", 2, "background", "#27ae60"], [1, "dot", 2, "background", "#f39c12"], [1, "dot", 2, "background", "#95a5a6"], [1, "vehicle-item", 3, "click"], [1, "v-name"], [1, "v-driver"], [1, "v-dest"], [1, "v-meta"], [1, "badge"], [2, "color", "#555"], [2, "color", "#bbb", "margin-left", "auto"], [2, "font-size", "11px", "color", "#1a5276", "margin-top", "4px"]], template: function SuiviTempsReelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
      \u0275\u0275text(4, "\u{1F4CD} Suivi en temps r\xE9el");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 4);
      \u0275\u0275text(6, "Position et statut des v\xE9hicules \u2014 actualis\xE9 toutes les 30 s ");
      \u0275\u0275domElement(7, "span", 5);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
      \u0275\u0275text(11);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "div", 9);
      \u0275\u0275text(13, "En route");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(14, "div", 7)(15, "div", 10);
      \u0275\u0275text(16);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "div", 9);
      \u0275\u0275text(18, "Arr\xEAt\xE9s");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(19, "div", 7)(20, "div", 11);
      \u0275\u0275text(21);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "div", 9);
      \u0275\u0275text(23, "Hors ligne");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(24, "div", 7)(25, "div", 12);
      \u0275\u0275text(26);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "div", 9);
      \u0275\u0275text(28, "Total v\xE9hicules");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(29, "div", 13)(30, "div", 14)(31, "div", 15)(32, "span");
      \u0275\u0275text(33);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(34, "div", 16);
      \u0275\u0275repeaterCreate(35, SuiviTempsReelComponent_For_36_Template, 14, 15, "div", 17, _forTrack0);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(37, "div", 14)(38, "div", 15)(39, "span");
      \u0275\u0275text(40, "Carte de suivi \u2014 Abidjan");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(41, SuiviTempsReelComponent_Conditional_41_Template, 2, 1, "span", 18);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "div", 19);
      \u0275\u0275domElement(43, "div", 20, 0);
      \u0275\u0275domElementStart(45, "div", 21)(46, "div", 22);
      \u0275\u0275domElement(47, "div", 23);
      \u0275\u0275text(48, " En route");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(49, "div", 22);
      \u0275\u0275domElement(50, "div", 24);
      \u0275\u0275text(51, " Arr\xEAt\xE9");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(52, "div", 22);
      \u0275\u0275domElement(53, "div", 25);
      \u0275\u0275text(54, " Hors ligne");
      \u0275\u0275domElementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.enRoute());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.arretes());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.horsLigne());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.vehicules().length);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("V\xE9hicules (", ctx.vehicules().length, ")");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.vehicules());
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.selected() ? 41 : -1);
    }
  }, dependencies: [CommonModule, FormsModule], styles: ["\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f2942;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #7f8c8d;\n  margin: 4px 0 0;\n}\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 20px;\n  height: calc(100vh - 180px);\n}\n.panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde3ea;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.panel__head[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  border-bottom: 1px solid #f0f4f8;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f2942;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.panel__body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.vehicle-item[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  border-bottom: 1px solid #f7f9fb;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.vehicle-item[_ngcontent-%COMP%]:hover {\n  background: #f7faff;\n}\n.vehicle-item.selected[_ngcontent-%COMP%] {\n  background: #eaf3fd;\n  border-left: 3px solid #1a5276;\n}\n.v-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 13px;\n  color: #0f2942;\n}\n.v-driver[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #7f8c8d;\n  margin: 2px 0;\n}\n.v-dest[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #1a5276;\n}\n.v-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 6px;\n  font-size: 11px;\n  align-items: center;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 11px;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.map-container[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n#logi-map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 0 0 14px 14px;\n}\n.map-legend[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n}\n.legend-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #dde3ea;\n  padding: 14px 18px;\n  flex: 1;\n  min-width: 130px;\n}\n.kpi__val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n}\n.kpi__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #7f8c8d;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 2px;\n}\n.pulse[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #27ae60;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n/*# sourceMappingURL=suivi-temps-reel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuiviTempsReelComponent, [{
    type: Component,
    args: [{ selector: "app-suivi-temps-reel", standalone: true, imports: [CommonModule, FormsModule], template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title">\u{1F4CD} Suivi en temps r\xE9el</h1>
      <p class="page__sub">Position et statut des v\xE9hicules \u2014 actualis\xE9 toutes les 30 s <span class="pulse"></span></p>
    </div>
  </div>

  <div class="kpi-row">
    <div class="kpi">
      <div class="kpi__val" style="color:#27ae60">{{ enRoute() }}</div>
      <div class="kpi__lbl">En route</div>
    </div>
    <div class="kpi">
      <div class="kpi__val" style="color:#f39c12">{{ arretes() }}</div>
      <div class="kpi__lbl">Arr\xEAt\xE9s</div>
    </div>
    <div class="kpi">
      <div class="kpi__val" style="color:#7f8c8d">{{ horsLigne() }}</div>
      <div class="kpi__lbl">Hors ligne</div>
    </div>
    <div class="kpi">
      <div class="kpi__val" style="color:#1a5276">{{ vehicules().length }}</div>
      <div class="kpi__lbl">Total v\xE9hicules</div>
    </div>
  </div>

  <div class="layout">
    <!-- Liste v\xE9hicules -->
    <div class="panel">
      <div class="panel__head">
        <span>V\xE9hicules ({{ vehicules().length }})</span>
      </div>
      <div class="panel__body">
        @for (v of vehicules(); track v.id) {
          <div class="vehicle-item" [class.selected]="selectedId() === v.id" (click)="selectVehicle(v)">
            <div class="v-name">\u{1F69B} {{ v.immatriculation }}</div>
            <div class="v-driver">{{ v.chauffeur }}</div>
            <div class="v-dest">\u2192 {{ v.destination }}</div>
            <div class="v-meta">
              <span class="badge"
                [class.badge--green]="v.statut==='en route'"
                [class.badge--yellow]="v.statut==='arr\xEAt\xE9'"
                [class.badge--gray]="v.statut==='hors ligne'">
                {{ v.statut }}
              </span>
              @if (v.statut === 'en route') {
                <span style="color:#555;">{{ v.vitesse }} km/h</span>
              }
              <span style="color:#bbb;margin-left:auto;">{{ v.derniereMAJ }}</span>
            </div>
            @if (v.commande) {
              <div style="font-size:11px;color:#1a5276;margin-top:4px;">\u{1F4CB} {{ v.commande }}</div>
            }
          </div>
        }
      </div>
    </div>

    <!-- Carte -->
    <div class="panel">
      <div class="panel__head">
        <span>Carte de suivi \u2014 Abidjan</span>
        @if (selected()) {
          <span style="font-size:12px;color:#1a5276;font-weight:600;">{{ selected()!.immatriculation }} s\xE9lectionn\xE9</span>
        }
      </div>
      <div class="map-container">
        <div id="logi-map" #mapEl></div>
        <div class="map-legend">
          <div class="legend-row"><div class="dot" style="background:#27ae60"></div> En route</div>
          <div class="legend-row"><div class="dot" style="background:#f39c12"></div> Arr\xEAt\xE9</div>
          <div class="legend-row"><div class="dot" style="background:#95a5a6"></div> Hors ligne</div>
        </div>
      </div>
    </div>
  </div>
</div>
  `, styles: ["/* angular:styles/component:scss;b234eb02c1c87338b0ce011df37afca3a0f73d4219c7e77260f4231a782b80cf;D:/MON BUREAU/PPE302/PPE-302/ppe-302-2/TEST/mon-workspace/projects/gestion-logistique/src/app/pages/suivi-temps-reel/suivi-temps-reel.component.ts */\n.page {\n  padding: 28px 32px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f2942;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #7f8c8d;\n  margin: 4px 0 0;\n}\n.layout {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 20px;\n  height: calc(100vh - 180px);\n}\n.panel {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #dde3ea;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.panel__head {\n  padding: 14px 18px;\n  border-bottom: 1px solid #f0f4f8;\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f2942;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.panel__body {\n  flex: 1;\n  overflow-y: auto;\n}\n.vehicle-item {\n  padding: 14px 18px;\n  border-bottom: 1px solid #f7f9fb;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.vehicle-item:hover {\n  background: #f7faff;\n}\n.vehicle-item.selected {\n  background: #eaf3fd;\n  border-left: 3px solid #1a5276;\n}\n.v-name {\n  font-weight: 700;\n  font-size: 13px;\n  color: #0f2942;\n}\n.v-driver {\n  font-size: 12px;\n  color: #7f8c8d;\n  margin: 2px 0;\n}\n.v-dest {\n  font-size: 11px;\n  color: #1a5276;\n}\n.v-meta {\n  display: flex;\n  gap: 10px;\n  margin-top: 6px;\n  font-size: 11px;\n  align-items: center;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 11px;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.map-container {\n  flex: 1;\n  position: relative;\n}\n#logi-map {\n  width: 100%;\n  height: 100%;\n  border-radius: 0 0 14px 14px;\n}\n.map-legend {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n}\n.legend-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.kpi-row {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.kpi {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #dde3ea;\n  padding: 14px 18px;\n  flex: 1;\n  min-width: 130px;\n}\n.kpi__val {\n  font-size: 22px;\n  font-weight: 900;\n}\n.kpi__lbl {\n  font-size: 11px;\n  color: #7f8c8d;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 2px;\n}\n.pulse {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #27ae60;\n  animation: pulse 1.5s infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n/*# sourceMappingURL=suivi-temps-reel.component.css.map */\n"] }]
  }], null, { mapEl: [{
    type: ViewChild,
    args: ["mapEl"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuiviTempsReelComponent, { className: "SuiviTempsReelComponent", filePath: "app/pages/suivi-temps-reel/suivi-temps-reel.component.ts", lineNumber: 135 });
})();
export {
  SuiviTempsReelComponent
};
//# sourceMappingURL=chunk-UXNBW45X.js.map
