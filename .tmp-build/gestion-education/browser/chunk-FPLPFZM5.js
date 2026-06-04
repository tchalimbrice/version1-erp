import {
  FormsModule
} from "./chunk-ZNMYQNDK.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-HBXAJ3KH.js";
import "./chunk-4HHYUM7A.js";
import {
  CommonModule
} from "./chunk-A7PCKB3Z.js";
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WTFQPXVN.js";
import "./chunk-46DXP6YY.js";

// projects/gestion-education/src/app/utils/invite.ts
function b64d(i) {
  const b = i.replace(/-/g, "+").replace(/_/g, "/"), p = b + "===".slice((b.length + 3) % 4), s = atob(p);
  const a = new Uint8Array(s.length);
  for (let i2 = 0; i2 < s.length; i2++)
    a[i2] = s.charCodeAt(i2);
  return a;
}
function decodeInvite(raw) {
  try {
    const p = JSON.parse(new TextDecoder().decode(b64d(raw.trim())));
    if (!p || p.v !== 1 || !p.company || !p.user)
      return void 0;
    return p;
  } catch {
    return void 0;
  }
}

// projects/gestion-education/src/app/pages/connexion/connexion.component.ts
function ConnexionComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.companyName());
  }
}
function ConnexionComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 16);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Bienvenue, ", ctx_r0.collaboratorName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.collaboratorRole());
  }
}
function ConnexionComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var ConnexionComponent = class _ConnexionComponent {
  store = inject(CollabStoreService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  email = signal("", ...ngDevMode ? [{ debugName: "email" }] : (
    /* istanbul ignore next */
    []
  ));
  password = signal("", ...ngDevMode ? [{ debugName: "password" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  companyName = signal(this.store.company()?.name ?? "", ...ngDevMode ? [{ debugName: "companyName" }] : (
    /* istanbul ignore next */
    []
  ));
  collaboratorName = signal("", ...ngDevMode ? [{ debugName: "collaboratorName" }] : (
    /* istanbul ignore next */
    []
  ));
  collaboratorRole = signal("", ...ngDevMode ? [{ debugName: "collaboratorRole" }] : (
    /* istanbul ignore next */
    []
  ));
  hasInvite = signal(false, ...ngDevMode ? [{ debugName: "hasInvite" }] : (
    /* istanbul ignore next */
    []
  ));
  pendingPayload = void 0;
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
  processInvite(token) {
    const payload = decodeInvite(token);
    if (!payload) {
      this.error.set("Lien d'invitation invalide ou expir\xE9.");
      return;
    }
    this.pendingPayload = payload;
    this.email.set(payload.user.email);
    this.companyName.set(payload.company.name);
    this.collaboratorName.set(payload.user.name);
    this.collaboratorRole.set(this.roleFr(payload.user.role));
    this.hasInvite.set(true);
  }
  login() {
    this.error.set("");
    if (!this.email()) {
      this.error.set("Veuillez saisir votre email.");
      return;
    }
    if (!this.password()) {
      this.error.set("Veuillez saisir votre mot de passe.");
      return;
    }
    if (this.pendingPayload) {
      if (this.email() !== this.pendingPayload.user.email) {
        this.error.set("Email incorrect.");
        return;
      }
      if (this.password() !== this.pendingPayload.password) {
        this.error.set("Mot de passe incorrect.");
        return;
      }
      this.store.hydrateFromInvite(this.pendingPayload);
      this.redirectByRole(this.pendingPayload.user.role);
      return;
    }
    const company = this.store.company();
    if (!company) {
      this.error.set("Aucune entreprise configur\xE9e. Utilisez votre lien d'invitation pour la premi\xE8re connexion.");
      return;
    }
    if (this.email() !== company.email) {
      this.error.set("Email incorrect.");
      return;
    }
    if (this.password() !== company.adminPassword) {
      this.error.set("Mot de passe incorrect.");
      return;
    }
    this.store.hydrateFromInvite({
      company,
      mode: this.store.mode() ?? "centralized",
      user: { role: "owner", name: company.name, email: company.email }
    });
    this.redirectByRole("owner");
  }
  roleFr(role) {
    const map = {
      owner: "Directeur",
      hr: "Secr\xE9taire",
      accountant: "Comptable",
      employee: "Surveillant"
    };
    return map[role] ?? role;
  }
  redirectByRole(role) {
    const dest = {
      owner: "/dashboard",
      hr: "/notes",
      accountant: "/paiements",
      employee: "/absences"
    };
    this.router.navigate([dest[role] ?? "/dashboard"]);
  }
  static \u0275fac = function ConnexionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConnexionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConnexionComponent, selectors: [["app-connexion"]], decls: 24, vars: 6, consts: [[1, "wrap"], [1, "bg-img"], [1, "card"], [1, "card__header"], [1, "card__sub"], [1, "card__name"], [1, "card__company"], [1, "card__body"], [1, "error"], [1, "field"], [1, "label"], ["type", "email", "placeholder", "votre@email.ci", 1, "input", 3, "input", "value", "readonly"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "input", 3, "input", "keydown.enter", "value"], [1, "btn-main", 3, "click"], ["href", "http://localhost:4200", 1, "link-back"], [1, "card__welcome"], [1, "card__role"]], template: function ConnexionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "div", 1);
      \u0275\u0275domElementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "BIZMASTER ERP");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 5);
      \u0275\u0275text(7, "Gestion \xC9ducation");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(8, ConnexionComponent_Conditional_8_Template, 2, 1, "div", 6);
      \u0275\u0275conditionalCreate(9, ConnexionComponent_Conditional_9_Template, 4, 2);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "div", 7);
      \u0275\u0275conditionalCreate(11, ConnexionComponent_Conditional_11_Template, 2, 1, "div", 8);
      \u0275\u0275domElementStart(12, "div", 9)(13, "label", 10);
      \u0275\u0275text(14, "Email");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "input", 11);
      \u0275\u0275domListener("input", function ConnexionComponent_Template_input_input_15_listener($event) {
        return ctx.email.set($event.target.value);
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(16, "div", 9)(17, "label", 10);
      \u0275\u0275text(18, "Mot de passe");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "input", 12);
      \u0275\u0275domListener("input", function ConnexionComponent_Template_input_input_19_listener($event) {
        return ctx.password.set($event.target.value);
      })("keydown.enter", function ConnexionComponent_Template_input_keydown_enter_19_listener() {
        return ctx.login();
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(20, "button", 13);
      \u0275\u0275domListener("click", function ConnexionComponent_Template_button_click_20_listener() {
        return ctx.login();
      });
      \u0275\u0275text(21, "Se connecter");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "a", 14);
      \u0275\u0275text(23, "\u2190 Retour \xE0 BIZMASTER");
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.companyName() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.collaboratorName() ? 9 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.error() ? 11 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("value", ctx.email())("readOnly", ctx.hasInvite());
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("value", ctx.password());
    }
  }, dependencies: [CommonModule, FormsModule], styles: ["\n.wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #1a3a5c 0%,\n      #0d2137 100%);\n}\n.bg-img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&auto=format&fit=crop) center/cover no-repeat;\n  opacity: 0.18;\n}\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  background: #fff;\n  border-radius: 20px;\n  width: 460px;\n  max-width: 100%;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n}\n.card__header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1a3a5c,\n      #0d2137);\n  padding: 32px;\n  text-align: center;\n}\n.card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.45);\n  letter-spacing: 2px;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.card__name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #fff;\n}\n.card__company[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.card__welcome[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 600;\n}\n.card__role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.55);\n  margin-top: 4px;\n}\n.card__body[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n}\n.error[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n.label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.input[_ngcontent-%COMP%] {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 10px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.input[_ngcontent-%COMP%]:focus {\n  border-color: #1a3a5c;\n}\n.input[readonly][_ngcontent-%COMP%] {\n  background: #f7f9fc;\n  color: #666;\n}\n.btn-main[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  padding: 12px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.link-back[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 16px;\n  text-align: center;\n  color: #8a9ab0;\n  font-size: 13px;\n  text-decoration: none;\n}\n.link-back[_ngcontent-%COMP%]:hover {\n  color: #1a3a5c;\n}\n/*# sourceMappingURL=connexion.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnexionComponent, [{
    type: Component,
    args: [{ selector: "app-connexion", standalone: true, imports: [CommonModule, FormsModule], template: `
<div class="wrap">
  <div class="bg-img"></div>
  <div class="card">
    <div class="card__header">
      <div class="card__sub">BIZMASTER ERP</div>
      <div class="card__name">Gestion \xC9ducation</div>
      @if (companyName()) { <div class="card__company">{{ companyName() }}</div> }
      @if (collaboratorName()) {
        <div class="card__welcome">Bienvenue, {{ collaboratorName() }}</div>
        <div class="card__role">{{ collaboratorRole() }}</div>
      }
    </div>
    <div class="card__body">
      @if (error()) { <div class="error">{{ error() }}</div> }

      <div class="field">
        <label class="label">Email</label>
        <input class="input" type="email" [value]="email()" (input)="email.set($any($event.target).value)"
          [readonly]="hasInvite()" placeholder="votre@email.ci" />
      </div>
      <div class="field">
        <label class="label">Mot de passe</label>
        <input class="input" type="password" [value]="password()" (input)="password.set($any($event.target).value)"
          (keydown.enter)="login()" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />
      </div>
      <button class="btn-main" (click)="login()">Se connecter</button>

      <a href="http://localhost:4200" class="link-back">\u2190 Retour \xE0 BIZMASTER</a>
    </div>
  </div>
</div>
  `, styles: ["/* angular:styles/component:scss;6620bf933f7d2ee5d6d6b2a6a6f7d5a27f41de17dfabc7b4e54be3789e75f169;D:/MON BUREAU/PPE302/PPE-302/ppe-302-2/TEST/mon-workspace/projects/gestion-education/src/app/pages/connexion/connexion.component.ts */\n.wrap {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #1a3a5c 0%,\n      #0d2137 100%);\n}\n.bg-img {\n  position: absolute;\n  inset: 0;\n  background: url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&auto=format&fit=crop) center/cover no-repeat;\n  opacity: 0.18;\n}\n.card {\n  position: relative;\n  z-index: 1;\n  background: #fff;\n  border-radius: 20px;\n  width: 460px;\n  max-width: 100%;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n}\n.card__header {\n  background:\n    linear-gradient(\n      135deg,\n      #1a3a5c,\n      #0d2137);\n  padding: 32px;\n  text-align: center;\n}\n.card__sub {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.45);\n  letter-spacing: 2px;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.card__name {\n  font-size: 20px;\n  font-weight: 800;\n  color: #fff;\n}\n.card__company {\n  margin-top: 8px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.card__welcome {\n  margin-top: 10px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 600;\n}\n.card__role {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.55);\n  margin-top: 4px;\n}\n.card__body {\n  padding: 28px 32px;\n}\n.error {\n  background: #fdecea;\n  color: #c0392b;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n.label {\n  font-size: 11px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.input {\n  border: 1.5px solid #e3e8f0;\n  border-radius: 9px;\n  padding: 10px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.input:focus {\n  border-color: #1a3a5c;\n}\n.input[readonly] {\n  background: #f7f9fc;\n  color: #666;\n}\n.btn-main {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  padding: 12px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.link-back {\n  display: block;\n  margin-top: 16px;\n  text-align: center;\n  color: #8a9ab0;\n  font-size: 13px;\n  text-decoration: none;\n}\n.link-back:hover {\n  color: #1a3a5c;\n}\n/*# sourceMappingURL=connexion.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConnexionComponent, { className: "ConnexionComponent", filePath: "app/pages/connexion/connexion.component.ts", lineNumber: 67 });
})();
export {
  ConnexionComponent
};
//# sourceMappingURL=chunk-FPLPFZM5.js.map
