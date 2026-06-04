import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-HBXAJ3KH.js";
import {
  provideHttpClient
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
  provideBrowserGlobalErrorListeners,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-WTFQPXVN.js";
import "./chunk-46DXP6YY.js";

// projects/gestion-education/src/app/guards/role.guard.ts
var roleGuard = (route) => {
  const store = inject(CollabStoreService);
  const router = inject(Router);
  const user = store.currentUser();
  const mode = store.mode();
  if (!user) {
    router.navigate(["/connexion"]);
    return false;
  }
  if (user.role === "owner" && mode === "centralized")
    return true;
  const allowed = route.data?.["roles"] ?? [];
  if (allowed.length && !allowed.includes(user.role)) {
    router.navigate(["/dashboard"]);
    return false;
  }
  return true;
};

// projects/gestion-education/src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "/connexion", pathMatch: "full" },
  { path: "connexion", loadComponent: () => import("./chunk-FPLPFZM5.js").then((m) => m.ConnexionComponent) },
  { path: "dashboard", loadComponent: () => import("./chunk-YDQIHUNQ.js").then((m) => m.DashboardComponent), canActivate: [roleGuard], data: { roles: ["owner"] } },
  { path: "emploi-du-temps", loadComponent: () => import("./chunk-F5H4KFCM.js").then((m) => m.EmploiDuTempsComponent), canActivate: [roleGuard], data: { roles: ["owner"] } },
  { path: "enseignants", loadComponent: () => import("./chunk-RXJDXKW5.js").then((m) => m.EnseignantsComponent), canActivate: [roleGuard], data: { roles: ["owner"] } },
  { path: "classes", loadComponent: () => import("./chunk-PDO6CY5P.js").then((m) => m.ClassesComponent), canActivate: [roleGuard], data: { roles: ["owner"] } },
  { path: "parametres", loadComponent: () => import("./chunk-YPUY2IDW.js").then((m) => m.ParametresComponent), canActivate: [roleGuard], data: { roles: ["owner"] } },
  { path: "notes", loadComponent: () => import("./chunk-JJAIYPZY.js").then((m) => m.NotesComponent), canActivate: [roleGuard], data: { roles: ["hr"] } },
  { path: "notes-bulletin", loadComponent: () => import("./chunk-KMYH3B77.js").then((m) => m.NotesBulletinComponent), canActivate: [roleGuard], data: { roles: ["hr"] } },
  { path: "bulletins-historique", loadComponent: () => import("./chunk-KMZNOFUJ.js").then((m) => m.BulletinsHistoriqueComponent), canActivate: [roleGuard], data: { roles: ["hr"] } },
  { path: "eleves", loadComponent: () => import("./chunk-URHLHHXY.js").then((m) => m.ElevesComponent), canActivate: [roleGuard], data: { roles: ["hr"] } },
  { path: "absences", loadComponent: () => import("./chunk-OVYDDEVZ.js").then((m) => m.AbsencesComponent), canActivate: [roleGuard], data: { roles: ["hr", "employee"] } },
  { path: "paiements", loadComponent: () => import("./chunk-WZIY72OX.js").then((m) => m.PaiementsComponent), canActivate: [roleGuard], data: { roles: ["accountant"] } },
  { path: "presences", redirectTo: "/absences" },
  { path: "**", redirectTo: "/connexion" }
];

// projects/gestion-education/src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient()
  ]
};

// projects/gestion-education/src/app/app.ts
var _forTrack0 = ($index, $item) => $item.path;
function App_Conditional_0_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", l_r2.path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r2.label);
  }
}
function App_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275text(4, "\u25A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "span", 5);
    \u0275\u0275text(7, "\xC9DUCATION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "nav", 7);
    \u0275\u0275repeaterCreate(11, App_Conditional_0_For_12_Template, 2, 2, "a", 8, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 9);
    \u0275\u0275text(14, "\u2302 BIZMASTER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 10)(16, "div", 11);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 12)(19, "span", 13);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 14);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 15);
    \u0275\u0275listener("click", function App_Conditional_0_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.store.logout());
    });
    \u0275\u0275text(24, "\u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "main", 16);
    \u0275\u0275element(26, "router-outlet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.companyName());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.linksForRole(r_r4));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.userInitials());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.userName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.roleFr(r_r4));
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/connexion");
  }
}
function App_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var App = class _App {
  store;
  role = computed(() => this.store.currentUser()?.role, ...ngDevMode ? [{ debugName: "role" }] : (
    /* istanbul ignore next */
    []
  ));
  companyName = computed(() => this.store.company()?.name ?? "EduManager", ...ngDevMode ? [{ debugName: "companyName" }] : (
    /* istanbul ignore next */
    []
  ));
  userName = computed(() => this.store.currentUser()?.name ?? "", ...ngDevMode ? [{ debugName: "userName" }] : (
    /* istanbul ignore next */
    []
  ));
  userInitials = computed(() => {
    const n = this.userName();
    return n.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase() || "?";
  }, ...ngDevMode ? [{ debugName: "userInitials" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor(store) {
    this.store = store;
  }
  roleFr(role) {
    const map = {
      owner: "Directeur",
      employee: "Surveillant / Vigile",
      hr: "Secr\xE9taire",
      accountant: "Comptable"
    };
    return map[role] ?? role;
  }
  linksForRole(role) {
    if (role === "owner" && this.store.mode() === "centralized")
      return [
        { label: "Tableau de bord", path: "/dashboard" },
        { label: "Classes", path: "/classes" },
        { label: "Emploi du temps", path: "/emploi-du-temps" },
        { label: "Enseignants", path: "/enseignants" },
        { label: "Notes & Bulletins", path: "/notes" },
        { label: "Gestion des \xE9l\xE8ves", path: "/eleves" },
        { label: "Absences", path: "/absences" },
        { label: "Paiements", path: "/paiements" },
        { label: "Param\xE8tres", path: "/parametres" }
      ];
    if (role === "owner")
      return [
        { label: "Tableau de bord", path: "/dashboard" },
        { label: "Emploi du temps", path: "/emploi-du-temps" },
        { label: "Param\xE8tres", path: "/parametres" }
      ];
    if (role === "hr")
      return [
        { label: "Notes & Bulletins", path: "/notes" },
        { label: "Gestion des \xE9l\xE8ves", path: "/eleves" },
        { label: "Absences", path: "/absences" }
      ];
    if (role === "accountant")
      return [
        { label: "Paiements & Facturation", path: "/paiements" }
      ];
    return [
      { label: "Absences", path: "/absences" }
    ];
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[1, "layout"], [1, "sidebar"], [1, "sidebar__brand"], [1, "sidebar__brand-icon"], [1, "sidebar__brand-text"], [1, "sidebar__brand-sub"], [1, "sidebar__brand-name"], [1, "sidebar__nav"], ["routerLinkActive", "sidebar__link--active", 1, "sidebar__link", 3, "routerLink"], ["href", "http://localhost:4200", 1, "sidebar__home-link"], [1, "sidebar__footer"], [1, "sidebar__avatar"], [1, "sidebar__user-info"], [1, "sidebar__user-name"], [1, "sidebar__user-role"], ["title", "D\xE9connexion", 1, "sidebar__logout-btn", 3, "click", "routerLink"], [1, "main-content"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, App_Conditional_0_Template, 27, 5, "div", 0)(1, App_Conditional_1_Template, 1, 0, "router-outlet");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.role()) ? 0 : 1, tmp_0_0);
    }
  }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n.layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 228px;\n  min-width: 228px;\n  background:\n    linear-gradient(\n      180deg,\n      #1a3a5c 0%,\n      #0d2137 100%);\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n.sidebar__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 22px 16px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n}\n.sidebar__brand-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 18px;\n}\n.sidebar__brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar__brand-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.38);\n  letter-spacing: 1.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.sidebar__brand-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 154px;\n}\n.sidebar__nav[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 14px 10px;\n}\n.sidebar__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: 10px;\n  color: rgba(255, 255, 255, 0.48);\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  white-space: nowrap;\n}\n.sidebar__link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgba(255, 255, 255, 0.88);\n}\n.sidebar__link--active[_ngcontent-%COMP%] {\n  background: rgba(243, 156, 18, 0.2);\n  color: #f5c842;\n  font-weight: 700;\n}\n.sidebar__link-ic[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 20px;\n  text-align: center;\n  opacity: 0.8;\n}\n.sidebar__home-link[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 10px 8px;\n  padding: 7px 12px;\n  border-radius: 8px;\n  color: rgba(255, 255, 255, 0.25);\n  text-decoration: none;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  text-align: center;\n  transition: color 0.15s, background 0.15s;\n}\n.sidebar__home-link[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.6);\n  background: rgba(255, 255, 255, 0.05);\n}\n.sidebar__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 12px;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n}\n.sidebar__avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(243, 156, 18, 0.25);\n  color: #f5c842;\n  display: grid;\n  place-items: center;\n  font-weight: 800;\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.sidebar__user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar__user-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.88);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar__user-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.38);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar__logout-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.32);\n  cursor: pointer;\n  font-size: 16px;\n  padding: 4px;\n  border-radius: 6px;\n  transition: color 0.15s;\n  flex-shrink: 0;\n}\n.sidebar__logout-btn[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.85);\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  background: #f5f6fa;\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], template: `@if (role(); as r) {
  <div class="layout">
    <aside class="sidebar">
      <div class="sidebar__brand">
        <div class="sidebar__brand-icon">&#9632;</div>
        <div class="sidebar__brand-text">
          <span class="sidebar__brand-sub">\xC9DUCATION</span>
          <span class="sidebar__brand-name">{{ companyName() }}</span>
        </div>
      </div>
      <nav class="sidebar__nav">
        @for (l of linksForRole(r); track l.path) {
          <a [routerLink]="l.path" routerLinkActive="sidebar__link--active" class="sidebar__link">{{ l.label }}</a>
        }
      </nav>
      <a href="http://localhost:4200" class="sidebar__home-link">&#8962; BIZMASTER</a>
      <div class="sidebar__footer">
        <div class="sidebar__avatar">{{ userInitials() }}</div>
        <div class="sidebar__user-info">
          <span class="sidebar__user-name">{{ userName() }}</span>
          <span class="sidebar__user-role">{{ roleFr(r) }}</span>
        </div>
        <button class="sidebar__logout-btn" (click)="store.logout()" [routerLink]="'/connexion'" title="D\xE9connexion">&#8594;</button>
      </div>
    </aside>
    <main class="main-content"><router-outlet /></main>
  </div>
} @else {
  <router-outlet />
}
`, styles: ["/* projects/gestion-education/src/app/app.scss */\n.layout {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n.sidebar {\n  width: 228px;\n  min-width: 228px;\n  background:\n    linear-gradient(\n      180deg,\n      #1a3a5c 0%,\n      #0d2137 100%);\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n.sidebar__brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 22px 16px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n}\n.sidebar__brand-icon {\n  width: 38px;\n  height: 38px;\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 18px;\n}\n.sidebar__brand-text {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar__brand-sub {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.38);\n  letter-spacing: 1.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.sidebar__brand-name {\n  font-size: 13px;\n  font-weight: 800;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 154px;\n}\n.sidebar__nav {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 14px 10px;\n}\n.sidebar__link {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: 10px;\n  color: rgba(255, 255, 255, 0.48);\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  white-space: nowrap;\n}\n.sidebar__link:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgba(255, 255, 255, 0.88);\n}\n.sidebar__link--active {\n  background: rgba(243, 156, 18, 0.2);\n  color: #f5c842;\n  font-weight: 700;\n}\n.sidebar__link-ic {\n  font-size: 14px;\n  width: 20px;\n  text-align: center;\n  opacity: 0.8;\n}\n.sidebar__home-link {\n  display: block;\n  margin: 0 10px 8px;\n  padding: 7px 12px;\n  border-radius: 8px;\n  color: rgba(255, 255, 255, 0.25);\n  text-decoration: none;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  text-align: center;\n  transition: color 0.15s, background 0.15s;\n}\n.sidebar__home-link:hover {\n  color: rgba(255, 255, 255, 0.6);\n  background: rgba(255, 255, 255, 0.05);\n}\n.sidebar__footer {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 12px;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n}\n.sidebar__avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(243, 156, 18, 0.25);\n  color: #f5c842;\n  display: grid;\n  place-items: center;\n  font-weight: 800;\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.sidebar__user-info {\n  flex: 1;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar__user-name {\n  font-size: 12px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.88);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar__user-role {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.38);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar__logout-btn {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.32);\n  cursor: pointer;\n  font-size: 16px;\n  padding: 4px;\n  border-radius: 6px;\n  transition: color 0.15s;\n  flex-shrink: 0;\n}\n.sidebar__logout-btn:hover {\n  color: rgba(255, 255, 255, 0.85);\n}\n.main-content {\n  flex: 1;\n  overflow-y: auto;\n  background: #f5f6fa;\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "app/app.ts", lineNumber: 14 });
})();

// projects/gestion-education/src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
