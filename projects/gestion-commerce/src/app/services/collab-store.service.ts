import { Injectable, signal } from '@angular/core';

export type Role = 'owner' | 'employee' | 'hr' | 'accountant';

export interface CompanyData {
  name: string; address: string; phone: string; email: string; adminPassword: string;
}

export interface User {
  name: string; email: string; role: Role;
}

interface AppState {
  mode?: 'centralized' | 'collaborative';
  company?: CompanyData;
  currentUser?: User;
  token?: string;
}

const STORAGE_KEY = 'bizmaster_commerce_state';

@Injectable({ providedIn: 'root' })
export class CollabStoreService {
  private state: AppState = this.load();

  readonly mode        = signal<'centralized' | 'collaborative' | undefined>(this.state.mode);
  readonly company     = signal<CompanyData | undefined>(this.state.company);
  readonly currentUser = signal<User | undefined>(this.state.currentUser);
  readonly token       = signal<string | undefined>(this.state.token);

  readonly users = signal<User[]>([
    { name:'M. Konan Didier',     email:'gerant@commerce.ci',   role:'owner' },
    { name:'Mme Yao Aminata',     email:'vente@commerce.ci',    role:'employee' },
    { name:'M. Bamba Seydou',     email:'rh@commerce.ci',       role:'hr' },
    { name:'Mme Traoré Fatouma',  email:'cpt@commerce.ci',      role:'accountant' },
  ]);

  private load(): AppState {
    try { const r = localStorage.getItem(STORAGE_KEY); return r ? JSON.parse(r) : {}; }
    catch { return {}; }
  }

  private save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ mode: this.mode(), company: this.company(), currentUser: this.currentUser(), token: this.token() }));
  }

  hydrateFromInvite(invite: { company: CompanyData; mode: 'centralized' | 'collaborative'; user: { role: Role; name: string; email: string } }) {
    this.company.set(invite.company);
    this.mode.set(invite.mode);
    this.currentUser.set(invite.user);
    this.save();
  }

  setCurrentUser(user: User) {
    this.currentUser.set(user);
    this.save();
  }

  setToken(token: string) {
    this.token.set(token);
    this.save();
  }

  updateCompanyName(name: string) {
    const c = this.company();
    if (c) { this.company.set({ ...c, name }); this.save(); }
  }

  reset() {
    localStorage.removeItem(STORAGE_KEY);
    this.currentUser.set(undefined);
    this.token.set(undefined);
  }

  logout() {
    this.currentUser.set(undefined);
    this.token.set(undefined);
    localStorage.removeItem(STORAGE_KEY);
  }
}
