import { Injectable, signal } from '@angular/core';

export type Role = 'owner' | 'employee' | 'hr' | 'accountant';

export interface CompanyData {
  name: string; address: string; phone: string; email: string; adminPassword: string;
}

export interface User {
  id: string; username: string; password: string;
  name: string; email: string; role: Role;
}

interface AppState {
  mode?: 'centralized' | 'collaborative';
  company?: CompanyData;
  currentUser?: { role: Role; name: string; email: string };
}

const STORAGE_KEY = 'bizmaster_commerce_state';

@Injectable({ providedIn: 'root' })
export class CollabStoreService {
  private state: AppState = this.load();

  readonly mode        = signal<'centralized' | 'collaborative' | undefined>(this.state.mode);
  readonly company     = signal<CompanyData | undefined>(this.state.company);
  readonly currentUser = signal<{ role: Role; name: string; email: string } | undefined>(this.state.currentUser);

  readonly users = signal<User[]>([
    { id:'1', username:'gerant',     password:'admin123', name:'M. Konan Didier',     email:'gerant@commerce.ci',   role:'owner'},
    { id:'2', username:'vendeur',    password:'vend123',  name:'Mme Yao Aminata',     email:'vente@commerce.ci',    role:'employee'},
    { id:'3', username:'rh',         password:'rh123',    name:'M. Bamba Seydou',     email:'rh@commerce.ci',       role:'hr'},
    { id:'4', username:'comptable',  password:'cpt123',   name:'Mme Traoré Fatouma',  email:'cpt@commerce.ci',      role:'accountant' },
  ]);

  private load(): AppState {
    try { const r = localStorage.getItem(STORAGE_KEY); return r ? JSON.parse(r) : {}; }
    catch { return {}; }
  }

  private save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ mode: this.mode(), company: this.company(), currentUser: this.currentUser() }));
  }

  hydrateFromInvite(invite: { company: CompanyData; mode: 'centralized' | 'collaborative'; user: { role: Role; name: string; email: string } }) {
    this.company.set(invite.company); this.mode.set(invite.mode); this.currentUser.set(invite.user); this.save();
  }

  setCurrentUser(user: User) {
    this.currentUser.set({ role: user.role, name: user.name, email: user.email });
    this.save();
  }

  updateCompanyName(name: string) {
    const c = this.company();
    if (c) { this.company.set({ ...c, name }); this.save(); }
  }

  reset() { localStorage.removeItem(STORAGE_KEY); this.currentUser.set(undefined); }
  logout() { this.currentUser.set(undefined); localStorage.removeItem(STORAGE_KEY); }
}
