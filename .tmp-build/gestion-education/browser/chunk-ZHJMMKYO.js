import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-WTFQPXVN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-46DXP6YY.js";

// projects/gestion-education/src/app/services/collab-store.service.ts
var STORAGE_KEY = "bizmaster_education_state";
var CollabStoreService = class _CollabStoreService {
  state = this.load();
  mode = signal(this.state.mode, ...ngDevMode ? [{ debugName: "mode" }] : (
    /* istanbul ignore next */
    []
  ));
  company = signal(this.state.company, ...ngDevMode ? [{ debugName: "company" }] : (
    /* istanbul ignore next */
    []
  ));
  currentUser = signal(this.state.currentUser, ...ngDevMode ? [{ debugName: "currentUser" }] : (
    /* istanbul ignore next */
    []
  ));
  collaborators = signal(this.state.collaborators ?? [], ...ngDevMode ? [{ debugName: "collaborators" }] : (
    /* istanbul ignore next */
    []
  ));
  users = computed(() => {
    const u = this.currentUser();
    const collabs = this.collaborators();
    if (!u)
      return collabs;
    const self = { id: "self", name: u.name, username: u.email, role: u.role };
    const others = collabs.filter((c) => c.username !== u.email);
    return [self, ...others];
  }, ...ngDevMode ? [{ debugName: "users" }] : (
    /* istanbul ignore next */
    []
  ));
  load() {
    try {
      const r = localStorage.getItem(STORAGE_KEY);
      return r ? JSON.parse(r) : {};
    } catch {
      return {};
    }
  }
  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      mode: this.mode(),
      company: this.company(),
      currentUser: this.currentUser(),
      collaborators: this.collaborators()
    }));
  }
  hydrateFromInvite(invite) {
    this.company.set(invite.company);
    this.mode.set(invite.mode);
    this.currentUser.set(invite.user);
    this.save();
  }
  updateCompanyName(name) {
    const c = this.company();
    if (c) {
      this.company.set(__spreadProps(__spreadValues({}, c), { name }));
      this.save();
    }
  }
  reset() {
    localStorage.removeItem(STORAGE_KEY);
    this.company.set(void 0);
    this.currentUser.set(void 0);
    this.collaborators.set([]);
  }
  logout() {
    this.currentUser.set(void 0);
    this.save();
  }
  static \u0275fac = function CollabStoreService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CollabStoreService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CollabStoreService, factory: _CollabStoreService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollabStoreService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CollabStoreService
};
//# sourceMappingURL=chunk-ZHJMMKYO.js.map
