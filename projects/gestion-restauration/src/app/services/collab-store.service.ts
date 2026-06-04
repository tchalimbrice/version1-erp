import { Injectable, signal, computed } from '@angular/core';

export type Role = 'owner' | 'employee' | 'hr' | 'accountant';

export interface CompanyData {
  name: string; address: string; phone: string; email: string; adminPassword: string;
}

export interface AppUser {
  id: string; name: string; username: string; role: Role;
}

interface AppState {
  mode?: 'centralized' | 'collaborative';
  company?: CompanyData;
  currentUser?: { role: Role; name: string; email: string };
  collaborators?: AppUser[];
}

const STORAGE_KEY = 'bizmaster_restauration_state';

@Injectable({ providedIn: 'root' })
export class CollabStoreService {
  private state: AppState = this.load();

  readonly mode          = signal<'centralized' | 'collaborative' | undefined>(this.state.mode);
  readonly company       = signal<CompanyData | undefined>(this.state.company);
  readonly currentUser   = signal<{ role: Role; name: string; email: string } | undefined>(this.state.currentUser);
  readonly collaborators = signal<AppUser[]>(this.state.collaborators ?? []);

  readonly users = computed<AppUser[]>(() => {
    const u = this.currentUser();
    const collabs = this.collaborators();
    if (!u) return collabs;
    const self: AppUser = { id: 'self', name: u.name, username: u.email, role: u.role };
    return [self, ...collabs.filter(c => c.username !== u.email)];
  });

  private load(): AppState {
    try { const r = localStorage.getItem(STORAGE_KEY); return r ? JSON.parse(r) : {}; }
    catch { return {}; }
  }

  private save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      mode: this.mode(), company: this.company(),
      currentUser: this.currentUser(), collaborators: this.collaborators()
    }));
  }

  hydrateFromInvite(invite: { company: CompanyData; mode: 'centralized' | 'collaborative'; user: { role: Role; name: string; email: string }; password?: string }) {
    this.company.set(invite.company);
    this.mode.set(invite.mode);
    this.currentUser.set(invite.user);
    this.save();
  }

  updateCompanyName(name: string) {
    const c = this.company();
    if (c) { this.company.set({ ...c, name }); this.save(); }
  }

  reset() {
    localStorage.removeItem(STORAGE_KEY);
    this.company.set(undefined);
    this.currentUser.set(undefined);
    this.collaborators.set([]);
  }

  logout() { this.currentUser.set(undefined); this.save(); }
}
