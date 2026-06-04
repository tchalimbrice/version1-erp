import {
  EducationBulletinsService
} from "./chunk-MZQUGGYU.js";
import "./chunk-7YWLATDR.js";
import {
  Router
} from "./chunk-HBXAJ3KH.js";
import "./chunk-4HHYUM7A.js";
import {
  CommonModule
} from "./chunk-A7PCKB3Z.js";
import {
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-WTFQPXVN.js";
import "./chunk-46DXP6YY.js";

// projects/gestion-education/src/app/pages/notes/notes.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function NotesComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275domProperty("value", c_r1.nom);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r1.nom, " (", c_r1.effectif, " \xE9l\xE8ves)");
  }
}
function NotesComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const period_r2 = ctx.$implicit;
    \u0275\u0275domProperty("value", period_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(period_r2);
  }
}
var NotesComponent = class _NotesComponent {
  bulletinStore;
  router;
  selectedClass = signal("", ...ngDevMode ? [{ debugName: "selectedClass" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedPeriod = signal("", ...ngDevMode ? [{ debugName: "selectedPeriod" }] : (
    /* istanbul ignore next */
    []
  ));
  secondaryClasses = computed(() => this.bulletinStore.getSecondaryClasses(), ...ngDevMode ? [{ debugName: "secondaryClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedClassData = computed(() => this.bulletinStore.getClassByName(this.selectedClass()), ...ngDevMode ? [{ debugName: "selectedClassData" }] : (
    /* istanbul ignore next */
    []
  ));
  availablePeriods = computed(() => {
    const level = this.selectedClassData()?.niveau;
    return level ? this.bulletinStore.getPeriods(level) : [];
  }, ...ngDevMode ? [{ debugName: "availablePeriods" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor(bulletinStore, router) {
    this.bulletinStore = bulletinStore;
    this.router = router;
  }
  selectClass(className) {
    this.selectedClass.set(className);
    this.selectedPeriod.set("");
    if (!className)
      return;
    const level = this.bulletinStore.getClassByName(className)?.niveau;
    if (level)
      this.selectedPeriod.set(this.bulletinStore.getPeriods(level)[0] ?? "");
  }
  openWorkspace() {
    if (!this.selectedClass() || !this.selectedPeriod())
      return;
    this.router.navigate(["/notes-bulletin"], {
      queryParams: {
        classe: this.selectedClass(),
        periode: this.selectedPeriod()
      }
    });
  }
  goToHistory() {
    this.router.navigate(["/bulletins-historique"]);
  }
  static \u0275fac = function NotesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotesComponent)(\u0275\u0275directiveInject(EducationBulletinsService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotesComponent, selectors: [["app-notes"]], decls: 38, vars: 6, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "page__actions"], ["type", "button", 1, "btn", "btn--outline", 3, "click"], [1, "card"], [1, "card__head"], [1, "card__title"], [1, "card__link"], [1, "fields-row"], [1, "field"], [1, "field__label"], [1, "field__select", 3, "change", "value"], ["value", ""], [3, "value"], [1, "field__select", 3, "change", "value", "disabled"], [2, "margin-top", "16px", "display", "flex", "gap", "10px", "flex-wrap", "wrap"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], [1, "text-muted", 2, "align-self", "center"]], template: function NotesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Notes & Bulletins");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, "Pr\xE9parez un bulletin avant d'ouvrir l'espace de saisie.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275domListener("click", function NotesComponent_Template_button_click_8_listener() {
        return ctx.goToHistory();
      });
      \u0275\u0275text(9, "Historique des bulletins");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(10, "div", 6)(11, "div", 7)(12, "span", 8);
      \u0275\u0275text(13, "Choix du bulletin");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "span", 9);
      \u0275\u0275text(15, "Classes de la 6\xE8me \xE0 la Terminale");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(16, "div", 10)(17, "div", 11)(18, "label", 12);
      \u0275\u0275text(19, "Classe");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "select", 13);
      \u0275\u0275domListener("change", function NotesComponent_Template_select_change_20_listener($event) {
        return ctx.selectClass($event.target.value);
      });
      \u0275\u0275domElementStart(21, "option", 14);
      \u0275\u0275text(22, "-- Choisir une classe --");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(23, NotesComponent_For_24_Template, 2, 3, "option", 15, _forTrack0);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(25, "div", 11)(26, "label", 12);
      \u0275\u0275text(27, "P\xE9riode");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "select", 16);
      \u0275\u0275domListener("change", function NotesComponent_Template_select_change_28_listener($event) {
        return ctx.selectedPeriod.set($event.target.value);
      });
      \u0275\u0275domElementStart(29, "option", 14);
      \u0275\u0275text(30, "-- Choisir une p\xE9riode --");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(31, NotesComponent_For_32_Template, 2, 2, "option", 15, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(33, "div", 17)(34, "button", 18);
      \u0275\u0275domListener("click", function NotesComponent_Template_button_click_34_listener() {
        return ctx.openWorkspace();
      });
      \u0275\u0275text(35, "Bulletin");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "span", 19);
      \u0275\u0275text(37, "Le bouton reste gris\xE9 tant qu'une classe et une p\xE9riode ne sont pas choisies.");
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275domProperty("value", ctx.selectedClass());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.secondaryClasses());
      \u0275\u0275advance(5);
      \u0275\u0275domProperty("value", ctx.selectedPeriod())("disabled", !ctx.availablePeriods().length);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.availablePeriods());
      \u0275\u0275advance(3);
      \u0275\u0275classProp("btn--disabled", !ctx.selectedClass() || !ctx.selectedPeriod());
      \u0275\u0275domProperty("disabled", !ctx.selectedClass() || !ctx.selectedPeriod());
    }
  }, dependencies: [CommonModule], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff8ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbff;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a9ab0;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal[_ngcontent-%COMP%] {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 660px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  color: #555;\n}\n.btn--disabled[_ngcontent-%COMP%], \n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.period-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.period-toggle__btn[_ngcontent-%COMP%] {\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  color: #6d7c92;\n  border-radius: 999px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.period-toggle__btn--active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  border-color: #e67e22;\n  color: #fff;\n}\n.student-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 12px;\n}\n.student-card[_ngcontent-%COMP%] {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 14px;\n  background: #fff;\n  padding: 14px;\n  text-align: left;\n  cursor: pointer;\n  min-height: 88px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.student-card--selected[_ngcontent-%COMP%] {\n  border-color: #1a3a5c;\n}\n.student-card--saved[_ngcontent-%COMP%] {\n  background: #fff3e5;\n  border-color: #f39c12;\n}\n.student-card__name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.student-card__meta[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 11px;\n  color: #8a9ab0;\n}\n.subject-table[_ngcontent-%COMP%] {\n  border: 1px solid #e3e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n}\n.subject-table__head[_ngcontent-%COMP%], \n.subject-table__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(120px, 1.3fr) repeat(4, minmax(72px, 0.8fr)) 70px 72px minmax(120px, 1fr);\n  gap: 8px;\n  align-items: center;\n  padding: 10px 12px;\n}\n.subject-table__head[_ngcontent-%COMP%] {\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.subject-table__row[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f2f7;\n  font-size: 12px;\n}\n.subject-table__row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a3a5c;\n}\n.field__input--compact[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 8px 10px;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n}\n.summary-box[_ngcontent-%COMP%] {\n  border: 1px solid #e3e8f0;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff,\n      #fafbff);\n  padding: 14px;\n}\n.summary-box__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 800;\n  color: #8a9ab0;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.summary-box__value[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  font-size: 18px;\n  font-weight: 900;\n  color: #1a3a5c;\n}\n/*# sourceMappingURL=notes.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotesComponent, [{
    type: Component,
    args: [{ selector: "app-notes", standalone: true, imports: [CommonModule], template: `<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title">Notes & Bulletins</h1>
      <p class="page__sub">Pr\xE9parez un bulletin avant d'ouvrir l'espace de saisie.</p>
    </div>
    <div class="page__actions">
      <button class="btn btn--outline" type="button" (click)="goToHistory()">Historique des bulletins</button>
    </div>
  </div>

  <div class="card">
    <div class="card__head">
      <span class="card__title">Choix du bulletin</span>
      <span class="card__link">Classes de la 6\xE8me \xE0 la Terminale</span>
    </div>

    <div class="fields-row">
      <div class="field">
        <label class="field__label">Classe</label>
        <select class="field__select" [value]="selectedClass()" (change)="selectClass($any($event.target).value)">
          <option value="">-- Choisir une classe --</option>
          @for (c of secondaryClasses(); track c.id) {
            <option [value]="c.nom">{{ c.nom }} ({{ c.effectif }} \xE9l\xE8ves)</option>
          }
        </select>
      </div>
      <div class="field">
        <label class="field__label">P\xE9riode</label>
        <select class="field__select" [value]="selectedPeriod()" (change)="selectedPeriod.set($any($event.target).value)" [disabled]="!availablePeriods().length">
          <option value="">-- Choisir une p\xE9riode --</option>
          @for (period of availablePeriods(); track period) {
            <option [value]="period">{{ period }}</option>
          }
        </select>
      </div>
    </div>

    <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;">
      <button class="btn btn--primary" type="button" [disabled]="!selectedClass() || !selectedPeriod()" [class.btn--disabled]="!selectedClass() || !selectedPeriod()" (click)="openWorkspace()">Bulletin</button>
      <span class="text-muted" style="align-self:center;">Le bouton reste gris\xE9 tant qu'une classe et une p\xE9riode ne sont pas choisies.</span>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-education/src/app/pages/notes/notes.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a3a5c;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a9ab0;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: filter 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff8ee;\n}\n.btn--danger {\n  background: #e74c3c;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f5f6fa;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.btn--green {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #1e8449);\n  color: #fff;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a3a5c;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a9ab0;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e3e8f0;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f7;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbff;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a3a5c;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a3a5c;\n}\n.text-muted {\n  color: #8a9ab0;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n  font-size: 12px;\n}\n.progress-bar {\n  background: #eef0f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.badge--teal {\n  background: #d1f2eb;\n  color: #148f77;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a9ab0;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 540px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 660px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.note {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.note--A {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.note--B {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.note--C {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.note--D {\n  background: #fdecea;\n  color: #c0392b;\n}\n.note--F {\n  background: #e8e8e8;\n  color: #555;\n}\n.btn--disabled,\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.period-toggle {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.period-toggle__btn {\n  border: 1.5px solid #e3e8f0;\n  background: #fff;\n  color: #6d7c92;\n  border-radius: 999px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.period-toggle__btn--active {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  border-color: #e67e22;\n  color: #fff;\n}\n.student-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 12px;\n}\n.student-card {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 14px;\n  background: #fff;\n  padding: 14px;\n  text-align: left;\n  cursor: pointer;\n  min-height: 88px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.student-card--selected {\n  border-color: #1a3a5c;\n}\n.student-card--saved {\n  background: #fff3e5;\n  border-color: #f39c12;\n}\n.student-card__name {\n  font-size: 14px;\n  font-weight: 800;\n  color: #1a3a5c;\n}\n.student-card__meta {\n  margin-top: 6px;\n  font-size: 11px;\n  color: #8a9ab0;\n}\n.subject-table {\n  border: 1px solid #e3e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n}\n.subject-table__head,\n.subject-table__row {\n  display: grid;\n  grid-template-columns: minmax(120px, 1.3fr) repeat(4, minmax(72px, 0.8fr)) 70px 72px minmax(120px, 1fr);\n  gap: 8px;\n  align-items: center;\n  padding: 10px 12px;\n}\n.subject-table__head {\n  background: #f8f9fb;\n  color: #8a9ab0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.subject-table__row {\n  border-top: 1px solid #f0f2f7;\n  font-size: 12px;\n}\n.subject-table__row strong {\n  color: #1a3a5c;\n}\n.field__input--compact {\n  min-width: 0;\n  padding: 8px 10px;\n}\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n}\n.summary-box {\n  border: 1px solid #e3e8f0;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff,\n      #fafbff);\n  padding: 14px;\n}\n.summary-box__label {\n  display: block;\n  font-size: 11px;\n  font-weight: 800;\n  color: #8a9ab0;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.summary-box__value {\n  display: block;\n  margin-top: 8px;\n  font-size: 18px;\n  font-weight: 900;\n  color: #1a3a5c;\n}\n/*# sourceMappingURL=notes.component.css.map */\n'] }]
  }], () => [{ type: EducationBulletinsService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotesComponent, { className: "NotesComponent", filePath: "app/pages/notes/notes.component.ts", lineNumber: 13 });
})();
export {
  NotesComponent
};
//# sourceMappingURL=chunk-JJAIYPZY.js.map
