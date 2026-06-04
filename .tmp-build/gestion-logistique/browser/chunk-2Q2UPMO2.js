import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-PVSPOVDN.js";

// projects/gestion-logistique/src/app/services/collab-store.service.ts
var STORAGE_KEY = "bizmaster_logistique_state";
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
  activities = signal(this.state.activities ?? [], ...ngDevMode ? [{ debugName: "activities" }] : (
    /* istanbul ignore next */
    []
  ));
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }
  save() {
    this.state = { mode: this.mode(), company: this.company(), currentUser: this.currentUser(), collaborators: this.collaborators(), activities: this.activities() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
  }
  hydrateFromInvite(invite) {
    this.company.set(invite.company);
    this.mode.set(invite.mode);
    this.currentUser.set(invite.user);
    this.save();
  }
  logout() {
    this.currentUser.set(void 0);
    this.save();
  }
  logAction(actorRole, actorName, action) {
    const log = { id: Date.now().toString(), actorRole, actorName, action, at: (/* @__PURE__ */ new Date()).toLocaleString("fr-FR") };
    this.activities.update((a) => [log, ...a.slice(0, 49)]);
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
//# sourceMappingURL=chunk-2Q2UPMO2.js.map
