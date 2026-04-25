import { Injectable, signal } from '@angular/core';

export type Role = 'owner' | 'employee' | 'hr' | 'accountant';

export interface CompanyData {
  name: string; address: string; phone: string; email: string; adminPassword: string;
}

interface AppState {
  mode?: 'centralized' | 'collaborative';
  company?: CompanyData;
  currentUser?: { role: Role; name: string; email: string };
}

const STORAGE_KEY = 'bizmaster_education_state';

@Injectable({ providedIn: 'root' })
export class CollabStoreService {
  private state: AppState = this.load();

  readonly mode        = signal<'centralized' | 'collaborative' | undefined>(this.state.mode);
  readonly company     = signal<CompanyData | undefined>(this.state.company);
  readonly currentUser = signal<{ role: Role; name: string; email: string } | undefined>(this.state.currentUser);

  private load(): AppState {
    try { const r = localStorage.getItem(STORAGE_KEY); return r ? JSON.parse(r) : {}; }
    catch { return {}; }
  }

  private save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ mode: this.mode(), company: this.company(), currentUser: this.currentUser() }));
  }

  hydrateFromInvite(invite: { company: CompanyData; mode: 'centralized' | 'collaborative'; user: { role: Role; name: string; email: string }; password?: string }) {
    this.company.set(invite.company);
    this.mode.set(invite.mode);
    this.currentUser.set(invite.user);
    this.save();
  }

  logout() { this.currentUser.set(undefined); localStorage.removeItem(STORAGE_KEY); }
}
