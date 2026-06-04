import {
  ActivatedRoute,
  Router
} from "./chunk-JSTXLMZR.js";
import {
  CollabStoreService
} from "./chunk-2Q2UPMO2.js";
import {
  CommonModule,
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
  ɵɵtextInterpolate
} from "./chunk-PVSPOVDN.js";

// projects/gestion-logistique/src/app/utils/invite.ts
function b64UrlDecode(input) {
  const b64 = input.replace(/-/g, "+").replace(/_/g, "/");
  const pad = b64 + "===".slice((b64.length + 3) % 4);
  const bin = atob(pad);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++)
    bytes[i] = bin.charCodeAt(i);
  return bytes;
}
function decodeInvite(raw) {
  try {
    const parsed = JSON.parse(new TextDecoder().decode(b64UrlDecode(raw.trim())));
    if (!parsed || parsed.v !== 1 || parsed.domain !== "gestion-logistique")
      return void 0;
    if (!parsed.company || !parsed.user || !parsed.mode)
      return void 0;
    return parsed;
  } catch {
    return void 0;
  }
}

// projects/gestion-logistique/src/app/pages/connexion/connexion.component.ts
function ConnexionComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.companyName());
  }
}
function ConnexionComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "span");
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
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
      this.error.set("Aucune entreprise configur\xE9e. Acc\xE9dez via BIZMASTER pour votre premi\xE8re connexion.");
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
  redirectByRole(role) {
    const dest = {
      owner: "/dashboard",
      employee: "/livraisons",
      hr: "/chauffeurs",
      accountant: "/facturation"
    };
    this.router.navigate([dest[role] ?? "/dashboard"]);
  }
  static \u0275fac = function ConnexionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConnexionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConnexionComponent, selectors: [["app-connexion"]], decls: 26, vars: 4, consts: [[2, "min-height", "100vh", "background", "linear-gradient(135deg,#1a3a5c 0%,#0d2137 100%)", "display", "flex", "align-items", "center", "justify-content", "center", "padding", "20px", "position", "relative", "overflow", "hidden"], [2, "position", "absolute", "inset", "0", "background", "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&auto=format&fit=crop') center/cover no-repeat", "opacity", ".15", "pointer-events", "none"], [2, "background", "#fff", "border-radius", "22px", "width", "420px", "max-width", "100%", "box-shadow", "0 24px 64px rgba(0,0,0,.4)", "overflow", "hidden", "position", "relative", "z-index", "1"], [2, "background", "linear-gradient(135deg,#1a3a5c,#0d2137)", "padding", "34px", "text-align", "center"], [2, "width", "68px", "height", "68px", "background", "linear-gradient(135deg,#3498db,#2980b9)", "border-radius", "18px", "display", "grid", "place-items", "center", "font-size", "32px", "margin", "0 auto 16px", "box-shadow", "0 4px 16px rgba(0,0,0,.25)"], [2, "font-size", "10px", "color", "rgba(255,255,255,.5)", "letter-spacing", "2.5px", "font-weight", "800", "text-transform", "uppercase", "margin-bottom", "6px"], [2, "font-size", "22px", "font-weight", "900", "color", "#fff", "letter-spacing", ".5px"], [2, "margin-top", "10px", "font-size", "13px", "color", "rgba(255,255,255,.65)", "font-weight", "500"], [2, "padding", "30px 34px"], [2, "background", "#fdecea", "color", "#c0392b", "border", "1px solid #f5c6cb", "border-radius", "10px", "padding", "11px 15px", "font-size", "13px", "margin-bottom", "18px", "display", "flex", "align-items", "center", "gap", "8px"], [2, "display", "flex", "flex-direction", "column", "gap", "15px"], [2, "display", "flex", "flex-direction", "column", "gap", "5px"], [2, "font-size", "11px", "font-weight", "700", "color", "#666", "text-transform", "uppercase", "letter-spacing", ".5px"], ["type", "email", "placeholder", "votre@email.ci", 2, "border", "1.5px solid #e3e8f0", "border-radius", "10px", "padding", "11px 14px", "font-size", "13px", "outline", "none", "transition", "border-color .15s", 3, "input", "value"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 2, "border", "1.5px solid #e3e8f0", "border-radius", "10px", "padding", "11px 14px", "font-size", "13px", "outline", "none", 3, "input", "keydown.enter", "value"], [2, "background", "linear-gradient(135deg,#3498db,#2980b9)", "color", "#fff", "border", "none", "border-radius", "11px", "padding", "13px", "font-size", "14px", "font-weight", "700", "cursor", "pointer", "box-shadow", "0 4px 12px rgba(52,152,219,.35)", 3, "click"], ["href", "http://localhost:4200", 2, "display", "block", "margin-top", "22px", "text-align", "center", "color", "#9aa5b4", "font-size", "12px", "text-decoration", "none"]], template: function ConnexionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "div", 1);
      \u0275\u0275domElementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "\u{1F4E6}");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 5);
      \u0275\u0275text(7, "BIZMASTER ERP");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 6);
      \u0275\u0275text(9, "Gestion Logistique");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(10, ConnexionComponent_Conditional_10_Template, 2, 1, "div", 7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "div", 8);
      \u0275\u0275conditionalCreate(12, ConnexionComponent_Conditional_12_Template, 5, 1, "div", 9);
      \u0275\u0275domElementStart(13, "div", 10)(14, "div", 11)(15, "label", 12);
      \u0275\u0275text(16, "Adresse email");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "input", 13);
      \u0275\u0275domListener("input", function ConnexionComponent_Template_input_input_17_listener($event) {
        return ctx.email.set($event.target.value);
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(18, "div", 11)(19, "label", 12);
      \u0275\u0275text(20, "Mot de passe");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "input", 14);
      \u0275\u0275domListener("input", function ConnexionComponent_Template_input_input_21_listener($event) {
        return ctx.password.set($event.target.value);
      })("keydown.enter", function ConnexionComponent_Template_input_keydown_enter_21_listener() {
        return ctx.login();
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "button", 15);
      \u0275\u0275domListener("click", function ConnexionComponent_Template_button_click_22_listener() {
        return ctx.login();
      });
      \u0275\u0275text(23, " Se connecter \u2192 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(24, "a", 16);
      \u0275\u0275text(25, "\u2190 Retour \xE0 BIZMASTER");
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.companyName() ? 10 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.error() ? 12 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275domProperty("value", ctx.email());
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("value", ctx.password());
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnexionComponent, [{
    type: Component,
    args: [{
      selector: "app-connexion",
      standalone: true,
      imports: [CommonModule],
      template: `
<div style="min-height:100vh;background:linear-gradient(135deg,#1a3a5c 0%,#0d2137 100%);display:flex;align-items:center;justify-content:center;padding:20px;position:relative;overflow:hidden;">
  <div style="position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&auto=format&fit=crop') center/cover no-repeat;opacity:.15;pointer-events:none;"></div>
  <div style="background:#fff;border-radius:22px;width:420px;max-width:100%;box-shadow:0 24px 64px rgba(0,0,0,.4);overflow:hidden;position:relative;z-index:1;">

    <div style="background:linear-gradient(135deg,#1a3a5c,#0d2137);padding:34px;text-align:center;">
      <div style="width:68px;height:68px;background:linear-gradient(135deg,#3498db,#2980b9);border-radius:18px;display:grid;place-items:center;font-size:32px;margin:0 auto 16px;box-shadow:0 4px 16px rgba(0,0,0,.25);">\u{1F4E6}</div>
      <div style="font-size:10px;color:rgba(255,255,255,.5);letter-spacing:2.5px;font-weight:800;text-transform:uppercase;margin-bottom:6px;">BIZMASTER ERP</div>
      <div style="font-size:22px;font-weight:900;color:#fff;letter-spacing:.5px;">Gestion Logistique</div>
      @if (companyName()) {
        <div style="margin-top:10px;font-size:13px;color:rgba(255,255,255,.65);font-weight:500;">{{ companyName() }}</div>
      }
    </div>

    <div style="padding:30px 34px;">
      @if (error()) {
        <div style="background:#fdecea;color:#c0392b;border:1px solid #f5c6cb;border-radius:10px;padding:11px 15px;font-size:13px;margin-bottom:18px;display:flex;align-items:center;gap:8px;">
          <span>\u26A0\uFE0F</span><span>{{ error() }}</span>
        </div>
      }

      <div style="display:flex;flex-direction:column;gap:15px;">
        <div style="display:flex;flex-direction:column;gap:5px;">
          <label style="font-size:11px;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:.5px;">Adresse email</label>
          <input type="email" [value]="email()" (input)="email.set($any($event.target).value)"
            placeholder="votre@email.ci"
            style="border:1.5px solid #e3e8f0;border-radius:10px;padding:11px 14px;font-size:13px;outline:none;transition:border-color .15s;" />
        </div>
        <div style="display:flex;flex-direction:column;gap:5px;">
          <label style="font-size:11px;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:.5px;">Mot de passe</label>
          <input type="password" [value]="password()" (input)="password.set($any($event.target).value)" (keydown.enter)="login()"
            placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
            style="border:1.5px solid #e3e8f0;border-radius:10px;padding:11px 14px;font-size:13px;outline:none;" />
        </div>
        <button (click)="login()"
          style="background:linear-gradient(135deg,#3498db,#2980b9);color:#fff;border:none;border-radius:11px;padding:13px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 4px 12px rgba(52,152,219,.35);">
          Se connecter \u2192
        </button>
      </div>

      <a href="http://localhost:4200" style="display:block;margin-top:22px;text-align:center;color:#9aa5b4;font-size:12px;text-decoration:none;">\u2190 Retour \xE0 BIZMASTER</a>
    </div>
  </div>
</div>
  `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConnexionComponent, { className: "ConnexionComponent", filePath: "app/pages/connexion/connexion.component.ts", lineNumber: 57 });
})();
export {
  ConnexionComponent
};
//# sourceMappingURL=chunk-P4YSDMTT.js.map
