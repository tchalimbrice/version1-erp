import {
  ActivatedRoute,
  Router
} from "./chunk-5B3WZUDV.js";
import {
  decodeInvite
} from "./chunk-Z44K7LWM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-URIWTRFV.js";
import {
  CollabStoreService,
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4UYYR4F3.js";

// projects/gestion-construction/src/app/pages/connexion/connexion.component.ts
function ConnexionComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.collaboratorName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.collaboratorRole);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.companyName);
  }
}
function ConnexionComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.companyName);
  }
}
function ConnexionComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var ConnexionComponent = class _ConnexionComponent {
  store = inject(CollabStoreService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  email = "";
  password = "";
  error = "";
  companyName = this.store.company()?.name ?? "";
  collaboratorName = "";
  collaboratorRole = "";
  hasInvite = false;
  pendingPayload;
  constructor() {
    const token = this.route.snapshot.queryParamMap.get("invite");
    const authVerified = this.route.snapshot.queryParamMap.get("auth") === "1";
    if (token && authVerified) {
      const payload = decodeInvite(token);
      if (payload) {
        this.store.hydrateFromInvite(payload);
        this.redirectByRole(payload.user.role);
        return;
      }
    }
    if (token) {
      this.processInvite(token);
      return;
    }
    const existing = this.store.currentUser();
    if (existing) {
      this.redirectByRole(existing.role);
    }
  }
  login() {
    this.error = "";
    if (!this.email) {
      this.error = "Veuillez saisir votre email.";
      return;
    }
    if (!this.password) {
      this.error = "Veuillez saisir votre mot de passe.";
      return;
    }
    if (this.pendingPayload) {
      this.loginWithPendingPayload();
      return;
    }
    const company = this.store.company();
    if (!company) {
      this.error = "Aucune entreprise configur\xE9e. Utilisez votre lien d'invitation pour la premi\xE8re connexion.";
      return;
    }
    if (this.email !== company.email) {
      this.error = "Email incorrect.";
      return;
    }
    if (this.password !== company.adminPassword) {
      this.error = "Mot de passe incorrect.";
      return;
    }
    this.store.hydrateFromInvite({
      company,
      mode: this.store.mode() ?? "centralized",
      user: { role: "owner", name: company.name, email: company.email }
    });
    this.redirectByRole("owner");
  }
  processInvite(token) {
    const payload = decodeInvite(token);
    if (!payload) {
      this.error = "Lien d'invitation invalide ou corrompu.";
      return;
    }
    this.pendingPayload = payload;
    this.email = payload.user.email;
    this.companyName = payload.company.name;
    this.collaboratorName = payload.user.name;
    this.collaboratorRole = this.roleFr(payload.user.role);
    this.hasInvite = true;
  }
  loginWithPendingPayload() {
    if (!this.pendingPayload) {
      this.error = "Aucune invitation charg\xE9e.";
      return;
    }
    if (this.email !== this.pendingPayload.user.email) {
      this.error = "Email incorrect.";
      return;
    }
    if (this.password !== this.pendingPayload.password) {
      this.error = "Mot de passe incorrect.";
      return;
    }
    this.store.hydrateFromInvite(this.pendingPayload);
    this.redirectByRole(this.pendingPayload.user.role);
  }
  roleFr(role) {
    const map = {
      owner: "Directeur / Propri\xE9taire",
      employee: "Architecte",
      hr: "Responsable RH",
      accountant: "Comptable"
    };
    return map[role] ?? role;
  }
  redirectByRole(role) {
    const dest = {
      owner: "/dashboard",
      employee: "/devis",
      hr: "/personnel",
      accountant: "/comptabilite"
    };
    this.router.navigate([dest[role] ?? "/dashboard"]);
  }
  static \u0275fac = function ConnexionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConnexionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConnexionComponent, selectors: [["app-connexion"]], decls: 25, vars: 7, consts: [[1, "login-page"], [1, "bg-img"], [1, "login-card"], [1, "login-card__badge"], [1, "login-card__title"], [1, "login-card__sub"], [1, "login-welcome"], [1, "login-company"], [1, "login-fields"], [1, "login-field"], ["type", "email", "placeholder", "votre@email.ci", 1, "login-field__input", 3, "ngModelChange", "keyup.enter", "ngModel", "readOnly"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "login-field__input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "login-error"], [1, "login-btn", 3, "click"], ["href", "http://localhost:4200", 1, "login-back"], [1, "login-welcome__name"], [1, "login-welcome__role"], [1, "login-welcome__company"]], template: function ConnexionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "BTP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6, "BTP Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "Gestion d'entreprise de construction");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, ConnexionComponent_Conditional_9_Template, 7, 3, "div", 6)(10, ConnexionComponent_Conditional_10_Template, 2, 1, "div", 7);
      \u0275\u0275elementStart(11, "div", 8)(12, "label", 9)(13, "span");
      \u0275\u0275text(14, "Adresse email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ConnexionComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function ConnexionComponent_Template_input_keyup_enter_15_listener() {
        return ctx.login();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "label", 9)(17, "span");
      \u0275\u0275text(18, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ConnexionComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function ConnexionComponent_Template_input_keyup_enter_19_listener() {
        return ctx.login();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(20, ConnexionComponent_Conditional_20_Template, 2, 1, "div", 12);
      \u0275\u0275elementStart(21, "button", 13);
      \u0275\u0275listener("click", function ConnexionComponent_Template_button_click_21_listener() {
        return ctx.login();
      });
      \u0275\u0275text(22, "Se connecter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 14);
      \u0275\u0275text(24, "\u2190 Retour \xE0 BIZMASTER");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.hasInvite ? 9 : ctx.companyName ? 10 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("login-field__input--readonly", ctx.hasInvite);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275property("readOnly", ctx.hasInvite);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error ? 20 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f4f5f7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  position: relative;\n  overflow: hidden;\n}\n.bg-img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&auto=format&fit=crop) center/cover no-repeat;\n  opacity: 0.15;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 40px 36px;\n  width: 420px;\n  max-width: 100%;\n  box-shadow: 0 8px 48px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  position: relative;\n  z-index: 1;\n}\n.login-card__badge[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-size: 16px;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: 1px;\n}\n.login-card__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: #1a1a2e;\n  margin: 0;\n}\n.login-card__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 0;\n  text-align: center;\n}\n.login-welcome[_ngcontent-%COMP%] {\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #fff5ee,\n      #fdebd0);\n  border: 1px solid #f5d0b5;\n  border-radius: 12px;\n  padding: 14px 16px;\n  text-align: center;\n}\n.login-welcome__name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.login-welcome__role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #e67e22;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 2px;\n}\n.login-welcome__company[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a8fa8;\n  margin-top: 4px;\n}\n.login-company[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff5ee;\n  color: #8c4b14;\n  border: 1px solid #f5d0b5;\n  border-radius: 8px;\n  padding: 9px 14px;\n  font-size: 13px;\n  font-weight: 700;\n  text-align: center;\n}\n.login-fields[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.login-field[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.login-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.login-field__input[_ngcontent-%COMP%] {\n  border: 1.5px solid #e8eaef;\n  border-radius: 10px;\n  padding: 11px 13px;\n  font-size: 14px;\n  color: #333;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n}\n.login-field__input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.login-field__input--readonly[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n.login-error[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fdecea;\n  color: #c0392b;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  border-radius: 12px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n  font-size: 15px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: filter 0.15s;\n  margin-top: 4px;\n}\n.login-btn[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.login-back[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #aaa;\n  text-decoration: none;\n  margin-top: 4px;\n}\n.login-back[_ngcontent-%COMP%]:hover {\n  color: #e67e22;\n}\n/*# sourceMappingURL=connexion.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnexionComponent, [{
    type: Component,
    args: [{ selector: "app-connexion", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="login-page">
  <div class="bg-img"></div>

  <div class="login-card">
    <div class="login-card__badge">BTP</div>
    <h1 class="login-card__title">BTP Manager</h1>
    <p class="login-card__sub">Gestion d'entreprise de construction</p>

    @if (hasInvite) {
      <div class="login-welcome">
        <div class="login-welcome__name">{{ collaboratorName }}</div>
        <div class="login-welcome__role">{{ collaboratorRole }}</div>
        <div class="login-welcome__company">{{ companyName }}</div>
      </div>
    } @else if (companyName) {
      <div class="login-company">{{ companyName }}</div>
    }

    <div class="login-fields">
      <label class="login-field">
        <span>Adresse email</span>
        <input
          [(ngModel)]="email"
          type="email"
          class="login-field__input"
          [readOnly]="hasInvite"
          [class.login-field__input--readonly]="hasInvite"
          placeholder="votre@email.ci"
          (keyup.enter)="login()"
        />
      </label>

      <label class="login-field">
        <span>Mot de passe</span>
        <input
          [(ngModel)]="password"
          type="password"
          class="login-field__input"
          placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
          (keyup.enter)="login()"
        />
      </label>
    </div>

    @if (error) {
      <div class="login-error">{{ error }}</div>
    }

    <button class="login-btn" (click)="login()">Se connecter</button>

    <a href="http://localhost:4200" class="login-back">\u2190 Retour \xE0 BIZMASTER</a>
  </div>
</div>
`, styles: ["/* projects/gestion-construction/src/app/pages/connexion/connexion.component.scss */\n.login-page {\n  min-height: 100vh;\n  background: #f4f5f7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  position: relative;\n  overflow: hidden;\n}\n.bg-img {\n  position: absolute;\n  inset: 0;\n  background: url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&auto=format&fit=crop) center/cover no-repeat;\n  opacity: 0.15;\n}\n.login-card {\n  background: #fff;\n  border-radius: 20px;\n  padding: 40px 36px;\n  width: 420px;\n  max-width: 100%;\n  box-shadow: 0 8px 48px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  position: relative;\n  z-index: 1;\n}\n.login-card__badge {\n  width: 52px;\n  height: 52px;\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-size: 16px;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: 1px;\n}\n.login-card__title {\n  font-size: 22px;\n  font-weight: 900;\n  color: #1a1a2e;\n  margin: 0;\n}\n.login-card__sub {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 0;\n  text-align: center;\n}\n.login-welcome {\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #fff5ee,\n      #fdebd0);\n  border: 1px solid #f5d0b5;\n  border-radius: 12px;\n  padding: 14px 16px;\n  text-align: center;\n}\n.login-welcome__name {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.login-welcome__role {\n  font-size: 12px;\n  font-weight: 700;\n  color: #e67e22;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 2px;\n}\n.login-welcome__company {\n  font-size: 12px;\n  color: #8a8fa8;\n  margin-top: 4px;\n}\n.login-company {\n  width: 100%;\n  background: #fff5ee;\n  color: #8c4b14;\n  border: 1px solid #f5d0b5;\n  border-radius: 8px;\n  padding: 9px 14px;\n  font-size: 13px;\n  font-weight: 700;\n  text-align: center;\n}\n.login-fields {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.login-field {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.login-field span {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.login-field__input {\n  border: 1.5px solid #e8eaef;\n  border-radius: 10px;\n  padding: 11px 13px;\n  font-size: 14px;\n  color: #333;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n}\n.login-field__input:focus {\n  border-color: #e67e22;\n}\n.login-field__input--readonly {\n  background: #f8f9fa;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n.login-error {\n  width: 100%;\n  background: #fdecea;\n  color: #c0392b;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.login-btn {\n  width: 100%;\n  padding: 13px;\n  border-radius: 12px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n  font-size: 15px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: filter 0.15s;\n  margin-top: 4px;\n}\n.login-btn:hover {\n  filter: brightness(1.08);\n}\n.login-back {\n  font-size: 12px;\n  color: #aaa;\n  text-decoration: none;\n  margin-top: 4px;\n}\n.login-back:hover {\n  color: #e67e22;\n}\n/*# sourceMappingURL=connexion.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConnexionComponent, { className: "ConnexionComponent", filePath: "app/pages/connexion/connexion.component.ts", lineNumber: 15 });
})();
export {
  ConnexionComponent
};
//# sourceMappingURL=chunk-YXQNAK42.js.map
