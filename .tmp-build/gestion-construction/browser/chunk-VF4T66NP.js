import {
  buildInviteLink,
  encodeInvite
} from "./chunk-Z44K7LWM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-URIWTRFV.js";
import {
  CollabStoreService,
  CommonModule,
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4UYYR4F3.js";

// projects/gestion-construction/src/app/pages/parametres/parametres.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function ParametresComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.feedback());
  }
}
function ParametresComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "\u2713 Modifications enregistr\xE9es");
    \u0275\u0275elementEnd();
  }
}
function ParametresComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", role_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r2.label);
  }
}
function ParametresComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Aucun lien g\xE9n\xE9r\xE9 pour le moment.");
    \u0275\u0275elementEnd();
  }
}
function ParametresComponent_Conditional_86_For_16_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Chef d'entreprise ");
  }
}
function ParametresComponent_Conditional_86_For_16_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Comptable ");
  }
}
function ParametresComponent_Conditional_86_For_16_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " RH ");
  }
}
function ParametresComponent_Conditional_86_For_16_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Architecte / Technicien ");
  }
}
function ParametresComponent_Conditional_86_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 32);
    \u0275\u0275conditionalCreate(4, ParametresComponent_Conditional_86_For_16_Case_4_Template, 1, 0)(5, ParametresComponent_Conditional_86_For_16_Case_5_Template, 1, 0)(6, ParametresComponent_Conditional_86_For_16_Case_6_Template, 1, 0)(7, ParametresComponent_Conditional_86_For_16_Case_7_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "div", 34)(14, "button", 35);
    \u0275\u0275listener("click", function ParametresComponent_Conditional_86_For_16_Template_button_click_14_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyLink(ctx_r0.getInviteLink(item_r4)));
    });
    \u0275\u0275text(15, "Copier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 36);
    \u0275\u0275listener("click", function ParametresComponent_Conditional_86_For_16_Template_button_click_16_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeCollaborator(item_r4.id));
    });
    \u0275\u0275text(17, "Retirer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const item_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r4.firstName, " ", item_r4.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_12_0 = item_r4.role) === "owner" ? 4 : tmp_12_0 === "accountant" ? 5 : tmp_12_0 === "hr" ? 6 : tmp_12_0 === "employee" ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getInviteLink(item_r4));
  }
}
function ParametresComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "table", 30)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Collaborateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Lien d'acc\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, ParametresComponent_Conditional_86_For_16_Template, 18, 5, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r0.collaborators());
  }
}
var ParametresComponent = class _ParametresComponent {
  store;
  saved = signal(false, ...ngDevMode ? [{ debugName: "saved" }] : (
    /* istanbul ignore next */
    []
  ));
  feedback = signal("", ...ngDevMode ? [{ debugName: "feedback" }] : (
    /* istanbul ignore next */
    []
  ));
  inviteBaseUrl = typeof window !== "undefined" ? window.location.origin : "http://localhost:4300";
  collaborators = computed(() => this.store.collaborators(), ...ngDevMode ? [{ debugName: "collaborators" }] : (
    /* istanbul ignore next */
    []
  ));
  form;
  collaboratorForm = {
    firstName: "",
    lastName: "",
    email: "",
    role: "employee",
    password: ""
  };
  roleOptions = [
    { value: "owner", label: "Chef d'entreprise", description: "Dashboard, chantiers, sous-traitants, engins, parametres" },
    { value: "accountant", label: "Comptable", description: "Comptabilite" },
    { value: "hr", label: "Ressources humaines", description: "Personnel" },
    { value: "employee", label: "Architecte / Technicien", description: "Devis, contrats et materiaux" }
  ];
  constructor(store) {
    this.store = store;
    const company = store.company();
    this.form = {
      name: company?.name ?? "",
      address: company?.address ?? "",
      phone: company?.phone ?? "",
      email: company?.email ?? "",
      adminPassword: company?.adminPassword ?? "",
      mode: store.mode() ?? "centralized"
    };
  }
  save() {
    this.store.setCompany({
      name: this.form.name,
      address: this.form.address,
      phone: this.form.phone,
      email: this.form.email,
      adminPassword: this.form.adminPassword
    });
    this.store.setMode(this.form.mode);
    this.saved.set(true);
    this.feedback.set("Informations de l'entreprise enregistrees.");
    setTimeout(() => {
      this.saved.set(false);
      this.feedback.set("");
    }, 2500);
  }
  addCollaborator() {
    if (!this.form.name || !this.form.email) {
      this.feedback.set("Enregistrez d'abord les informations de l'entreprise.");
      return;
    }
    if (!this.collaboratorForm.firstName || !this.collaboratorForm.lastName || !this.collaboratorForm.email || !this.collaboratorForm.password) {
      this.feedback.set("Remplissez le prenom, le nom, l'email et le mot de passe du collaborateur.");
      return;
    }
    const company = {
      name: this.form.name,
      address: this.form.address,
      phone: this.form.phone,
      email: this.form.email,
      adminPassword: this.form.adminPassword
    };
    const collaboratorName = `${this.collaboratorForm.firstName} ${this.collaboratorForm.lastName}`.trim();
    const token = encodeInvite({
      v: 1,
      domain: "gestion-construction",
      issuedAt: (/* @__PURE__ */ new Date()).toISOString(),
      mode: "collaborative",
      company,
      user: {
        role: this.collaboratorForm.role,
        name: collaboratorName,
        email: this.collaboratorForm.email
      },
      password: this.collaboratorForm.password
    });
    const collaborator = {
      id: Date.now().toString(),
      firstName: this.collaboratorForm.firstName,
      lastName: this.collaboratorForm.lastName,
      email: this.collaboratorForm.email,
      role: this.collaboratorForm.role,
      password: this.collaboratorForm.password,
      token
    };
    this.store.setCollaborators([collaborator, ...this.collaborators()]);
    this.store.setMode("collaborative");
    this.form.mode = "collaborative";
    this.feedback.set(`Lien genere pour ${collaboratorName}.`);
    void this.copyLink(this.getInviteLink(collaborator));
    this.collaboratorForm = {
      firstName: "",
      lastName: "",
      email: "",
      role: "employee",
      password: ""
    };
  }
  getInviteLink(collaborator) {
    return buildInviteLink(collaborator.token, this.inviteBaseUrl);
  }
  async copyLink(link) {
    try {
      await navigator.clipboard.writeText(link);
      this.feedback.set("Lien copie dans le presse-papiers.");
    } catch {
      this.feedback.set("Lien genere, mais la copie automatique a echoue.");
    }
  }
  removeCollaborator(id) {
    this.store.setCollaborators(this.collaborators().filter((c) => c.id !== id));
    this.feedback.set("Collaborateur retire.");
  }
  static \u0275fac = function ParametresComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParametresComponent)(\u0275\u0275directiveInject(CollabStoreService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParametresComponent, selectors: [["app-parametres"]], decls: 87, vars: 15, consts: [[1, "page"], [1, "page__header"], [1, "page__title"], [1, "page__sub"], [1, "card", 2, "margin-bottom", "18px", "border-left", "4px solid #e67e22"], [1, "card"], [1, "card__head"], [1, "card__title"], [1, "fields-row", "fields-row--3"], [1, "field"], [1, "field__label"], [1, "field__select", 3, "ngModelChange", "ngModel"], ["value", "centralized"], ["value", "collaborative"], [1, "field__input", 3, "ngModelChange", "ngModel"], [1, "fields-row"], ["type", "email", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field", 2, "margin-top", "14px"], ["type", "password", 1, "field__input", 3, "ngModelChange", "ngModel"], [2, "margin-top", "20px", "display", "flex", "align-items", "center", "gap", "16px"], [1, "btn", "btn--primary", 3, "click"], [2, "color", "#27ae60", "font-size", "13px", "font-weight", "700"], [1, "card__link"], ["placeholder", "Ex: Jean", 1, "field__input", 3, "ngModelChange", "ngModel"], ["placeholder", "Ex: Kouam\xE9", 1, "field__input", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "email", "placeholder", "collab@entreprise.com", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Mot de passe provisoire", 1, "field__input", 3, "ngModelChange", "ngModel"], [2, "margin-top", "18px"], [1, "table-wrap"], [1, "table"], [1, "fw-med"], [1, "text-muted"], [1, "mono"], [2, "display", "flex", "gap", "8px", "flex-wrap", "wrap"], [1, "btn", "btn--outline", 3, "click"], [1, "btn", "btn--ghost", 3, "click"]], template: function ParametresComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Param\xE8tres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Informations de l'entreprise et gestion collaborative");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(7, ParametresComponent_Conditional_7_Template, 3, 1, "div", 4);
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "span", 7);
      \u0275\u0275text(11, "Entreprise BTP");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "label", 9)(14, "span", 10);
      \u0275\u0275text(15, "Mode d'acc\xE8s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresComponent_Template_select_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.mode, $event) || (ctx.form.mode = $event);
        return $event;
      });
      \u0275\u0275elementStart(17, "option", 12);
      \u0275\u0275text(18, "Centralis\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 13);
      \u0275\u0275text(20, "Collaboratif");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "label", 9)(22, "span", 10);
      \u0275\u0275text(23, "Nom de l'entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.name, $event) || (ctx.form.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "label", 9)(26, "span", 10);
      \u0275\u0275text(27, "Adresse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.address, $event) || (ctx.form.address = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 15)(30, "label", 9)(31, "span", 10);
      \u0275\u0275text(32, "T\xE9l\xE9phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.phone, $event) || (ctx.form.phone = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "label", 9)(35, "span", 10);
      \u0275\u0275text(36, "E-mail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 17)(39, "span", 10);
      \u0275\u0275text(40, "Mot de passe administrateur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresComponent_Template_input_ngModelChange_41_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.adminPassword, $event) || (ctx.form.adminPassword = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 19)(43, "button", 20);
      \u0275\u0275listener("click", function ParametresComponent_Template_button_click_43_listener() {
        return ctx.save();
      });
      \u0275\u0275text(44, "Enregistrer");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(45, ParametresComponent_Conditional_45_Template, 2, 0, "span", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 5)(47, "div", 6)(48, "span", 7);
      \u0275\u0275text(49, "Gestion collaborative");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 22);
      \u0275\u0275text(51, "Les liens renvoient d'abord vers la connexion");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 8)(53, "label", 9)(54, "span", 10);
      \u0275\u0275text(55, "Pr\xE9nom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresComponent_Template_input_ngModelChange_56_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.collaboratorForm.firstName, $event) || (ctx.collaboratorForm.firstName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "label", 9)(58, "span", 10);
      \u0275\u0275text(59, "Nom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresComponent_Template_input_ngModelChange_60_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.collaboratorForm.lastName, $event) || (ctx.collaboratorForm.lastName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "label", 9)(62, "span", 10);
      \u0275\u0275text(63, "R\xF4le");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresComponent_Template_select_ngModelChange_64_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.collaboratorForm.role, $event) || (ctx.collaboratorForm.role = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(65, ParametresComponent_For_66_Template, 2, 2, "option", 25, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 15)(68, "label", 9)(69, "span", 10);
      \u0275\u0275text(70, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresComponent_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.collaboratorForm.email, $event) || (ctx.collaboratorForm.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "label", 9)(73, "span", 10);
      \u0275\u0275text(74, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "input", 27);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresComponent_Template_input_ngModelChange_75_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.collaboratorForm.password, $event) || (ctx.collaboratorForm.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 28)(77, "button", 20);
      \u0275\u0275listener("click", function ParametresComponent_Template_button_click_77_listener() {
        return ctx.addCollaborator();
      });
      \u0275\u0275text(78, "G\xE9n\xE9rer le lien");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "div", 5)(80, "div", 6)(81, "span", 7);
      \u0275\u0275text(82, "Liens g\xE9n\xE9r\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span", 22);
      \u0275\u0275text(84);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(85, ParametresComponent_Conditional_85_Template, 2, 0, "p", 3)(86, ParametresComponent_Conditional_86_Template, 17, 0, "div", 29);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.feedback() ? 7 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.mode);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.address);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.phone);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.adminPassword);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.saved() ? 45 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.collaboratorForm.firstName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.collaboratorForm.lastName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.collaboratorForm.role);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.roleOptions);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.collaboratorForm.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.collaboratorForm.password);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.collaborators().length, " collaborateur(s)");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.collaborators().length === 0 ? 85 : 86);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline[_ngcontent-%COMP%]:hover {\n  background: #fff5ee;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbfc;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #8a8fa8;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green[_ngcontent-%COMP%] {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue[_ngcontent-%COMP%] {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow[_ngcontent-%COMP%] {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red[_ngcontent-%COMP%] {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange[_ngcontent-%COMP%] {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray[_ngcontent-%COMP%] {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple[_ngcontent-%COMP%] {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide[_ngcontent-%COMP%] {\n  width: 680px;\n}\n.modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal__body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input[_ngcontent-%COMP%], \n.field__select[_ngcontent-%COMP%], \n.field__textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus, \n.field__select[_ngcontent-%COMP%]:focus, \n.field__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #e67e22;\n}\n.field__textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=parametres.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParametresComponent, [{
    type: Component,
    args: [{ selector: "app-parametres", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page">
  <header class="page__header">
    <div>
      <h1 class="page__title">Param\xE8tres</h1>
      <p class="page__sub">Informations de l'entreprise et gestion collaborative</p>
    </div>
  </header>

  @if (feedback()) {
    <div class="card" style="margin-bottom:18px;border-left:4px solid #e67e22;">
      <strong>{{ feedback() }}</strong>
    </div>
  }

  <div class="card">
    <div class="card__head">
      <span class="card__title">Entreprise BTP</span>
    </div>

    <div class="fields-row fields-row--3">
      <label class="field">
        <span class="field__label">Mode d'acc\xE8s</span>
        <select [(ngModel)]="form.mode" class="field__select">
          <option value="centralized">Centralis\xE9</option>
          <option value="collaborative">Collaboratif</option>
        </select>
      </label>
      <label class="field">
        <span class="field__label">Nom de l'entreprise</span>
        <input [(ngModel)]="form.name" class="field__input" />
      </label>
      <label class="field">
        <span class="field__label">Adresse</span>
        <input [(ngModel)]="form.address" class="field__input" />
      </label>
    </div>

    <div class="fields-row">
      <label class="field">
        <span class="field__label">T\xE9l\xE9phone</span>
        <input [(ngModel)]="form.phone" class="field__input" />
      </label>
      <label class="field">
        <span class="field__label">E-mail</span>
        <input [(ngModel)]="form.email" type="email" class="field__input" />
      </label>
    </div>

    <div class="field" style="margin-top:14px;">
      <span class="field__label">Mot de passe administrateur</span>
      <input [(ngModel)]="form.adminPassword" type="password" class="field__input" />
    </div>

    <div style="margin-top:20px;display:flex;align-items:center;gap:16px;">
      <button class="btn btn--primary" (click)="save()">Enregistrer</button>
      @if (saved()) {
        <span style="color:#27ae60;font-size:13px;font-weight:700;">\u2713 Modifications enregistr\xE9es</span>
      }
    </div>
  </div>

  <div class="card">
    <div class="card__head">
      <span class="card__title">Gestion collaborative</span>
      <span class="card__link">Les liens renvoient d'abord vers la connexion</span>
    </div>

    <div class="fields-row fields-row--3">
      <label class="field">
        <span class="field__label">Pr\xE9nom</span>
        <input [(ngModel)]="collaboratorForm.firstName" class="field__input" placeholder="Ex: Jean" />
      </label>
      <label class="field">
        <span class="field__label">Nom</span>
        <input [(ngModel)]="collaboratorForm.lastName" class="field__input" placeholder="Ex: Kouam\xE9" />
      </label>
      <label class="field">
        <span class="field__label">R\xF4le</span>
        <select [(ngModel)]="collaboratorForm.role" class="field__select">
          @for (role of roleOptions; track role.value) {
            <option [ngValue]="role.value">{{ role.label }}</option>
          }
        </select>
      </label>
    </div>

    <div class="fields-row">
      <label class="field">
        <span class="field__label">Email</span>
        <input [(ngModel)]="collaboratorForm.email" type="email" class="field__input" placeholder="collab@entreprise.com" />
      </label>
      <label class="field">
        <span class="field__label">Mot de passe</span>
        <input [(ngModel)]="collaboratorForm.password" type="text" class="field__input" placeholder="Mot de passe provisoire" />
      </label>
    </div>

    <div style="margin-top:18px;">
      <button class="btn btn--primary" (click)="addCollaborator()">G\xE9n\xE9rer le lien</button>
    </div>
  </div>

  <div class="card">
    <div class="card__head">
      <span class="card__title">Liens g\xE9n\xE9r\xE9s</span>
      <span class="card__link">{{ collaborators().length }} collaborateur(s)</span>
    </div>

    @if (collaborators().length === 0) {
      <p class="page__sub">Aucun lien g\xE9n\xE9r\xE9 pour le moment.</p>
    } @else {
      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th>Collaborateur</th>
              <th>R\xF4le</th>
              <th>Email</th>
              <th>Lien d'acc\xE8s</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            @for (item of collaborators(); track item.id) {
              <tr>
                <td class="fw-med">{{ item.firstName }} {{ item.lastName }}</td>
                <td class="text-muted">
                  @switch (item.role) {
                    @case ('owner') { Chef d'entreprise }
                    @case ('accountant') { Comptable }
                    @case ('hr') { RH }
                    @case ('employee') { Architecte / Technicien }
                  }
                </td>
                <td class="text-muted">{{ item.email }}</td>
                <td class="mono">{{ getInviteLink(item) }}</td>
                <td>
                  <div style="display:flex;gap:8px;flex-wrap:wrap;">
                    <button class="btn btn--outline" (click)="copyLink(getInviteLink(item))">Copier</button>
                    <button class="btn btn--ghost" (click)="removeCollaborator(item.id)">Retirer</button>
                  </div>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* projects/gestion-construction/src/app/pages/parametres/parametres.component.scss */\n.page {\n  padding: 28px 32px;\n  max-width: 1280px;\n}\n.page__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin: 0;\n}\n.page__sub {\n  font-size: 13px;\n  color: #8a8fa8;\n  margin: 4px 0 0;\n}\n.page__actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  border: none;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #e67e22,\n      #d35400);\n  color: #fff;\n}\n.btn--primary:hover {\n  filter: brightness(1.08);\n}\n.btn--outline {\n  background: #fff;\n  color: #e67e22;\n  border: 1.5px solid #e67e22;\n}\n.btn--outline:hover {\n  background: #fff5ee;\n}\n.btn--danger {\n  background: #c0392b;\n  color: #fff;\n}\n.btn--ghost {\n  background: #f4f5f7;\n  color: #555;\n  border: 1.5px solid #dde3ea;\n}\n.card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.card__link {\n  font-size: 12px;\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: 600;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi-card {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  border-left-width: 4px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__body {\n  flex: 1;\n}\n.kpi-card__value {\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1;\n  color: #1a1a2e;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #8a8fa8;\n  font-weight: 600;\n  margin: 4px 0 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.kpi-card__sub {\n  font-size: 11px;\n  color: #aaa;\n}\n.charts-row {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.bar-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 110px;\n}\n.bar-chart__col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 4px;\n}\n.bar-chart__bar {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  transition: height 0.3s;\n}\n.bar-chart__val {\n  font-size: 11px;\n  font-weight: 700;\n  color: #e67e22;\n}\n.bar-chart__lbl {\n  font-size: 11px;\n  color: #aaa;\n  font-weight: 600;\n}\n.pie-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.pie-svg {\n  width: 130px;\n  height: 130px;\n  flex-shrink: 0;\n}\n.pie-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.pie-legend__item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pie-legend__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e8eaef;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.table th {\n  text-align: left;\n  padding: 10px 14px;\n  background: #f8f9fb;\n  color: #8a8fa8;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  padding: 11px 14px;\n  border-top: 1px solid #f0f2f5;\n  color: #333;\n  vertical-align: middle;\n}\n.table tr:hover td {\n  background: #fafbfc;\n}\n.fw-bold {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.fw-med {\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.text-muted {\n  color: #8a8fa8;\n}\n.text-sm {\n  font-size: 12px;\n}\n.mono {\n  font-family: monospace;\n  font-weight: 700;\n  color: #e67e22;\n}\n.progress-bar {\n  background: #f0f2f5;\n  border-radius: 6px;\n  height: 7px;\n  overflow: hidden;\n}\n.progress-bar__fill {\n  height: 100%;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e67e22,\n      #d35400);\n  transition: width 0.4s;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--green {\n  background: #d5f5e3;\n  color: #1e8449;\n}\n.badge--blue {\n  background: #d6eaf8;\n  color: #1a5276;\n}\n.badge--yellow {\n  background: #fef9e7;\n  color: #b7950b;\n}\n.badge--red {\n  background: #fdecea;\n  color: #c0392b;\n}\n.badge--orange {\n  background: #fef0e7;\n  color: #d35400;\n}\n.badge--gray {\n  background: #f0f3f4;\n  color: #7f8c8d;\n}\n.badge--purple {\n  background: #f4ecf7;\n  color: #7d3c98;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tab {\n  padding: 7px 16px;\n  border-radius: 8px;\n  border: 1.5px solid #e8eaef;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #8a8fa8;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.tab:hover {\n  border-color: #e67e22;\n  color: #e67e22;\n}\n.tab.active {\n  background: #e67e22;\n  border-color: #e67e22;\n  color: #fff;\n}\n.filter-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 8px 13px;\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #e67e22;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: #fff;\n  border-radius: 18px;\n  width: 560px;\n  max-width: 96vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal--wide {\n  width: 680px;\n}\n.modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f5;\n}\n.modal__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.modal__close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #aaa;\n}\n.modal__close:hover {\n  color: #333;\n}\n.modal__body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 65vh;\n  overflow-y: auto;\n}\n.modal__foot {\n  padding: 16px 24px;\n  border-top: 1px solid #f0f2f5;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.field__input,\n.field__select,\n.field__textarea {\n  border: 1.5px solid #e8eaef;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n  font-family: inherit;\n}\n.field__input:focus,\n.field__select:focus,\n.field__textarea:focus {\n  border-color: #e67e22;\n}\n.field__textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.fields-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.fields-row--3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=parametres.component.css.map */\n'] }]
  }], () => [{ type: CollabStoreService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParametresComponent, { className: "ParametresComponent", filePath: "app/pages/parametres/parametres.component.ts", lineNumber: 33 });
})();
export {
  ParametresComponent
};
//# sourceMappingURL=chunk-VF4T66NP.js.map
