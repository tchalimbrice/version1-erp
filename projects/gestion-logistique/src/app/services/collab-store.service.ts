import { Injectable, signal } from '@angular/core';

export type Role = 'owner' | 'employee' | 'hr' | 'accountant';

export interface CompanyData {
  name: string; address: string; phone: string; email: string; adminPassword: string;
}

export interface Collaborator {
  id: string; firstName: string; lastName: string; email: string;
  role: Role; password: string; token: string;
}

export interface ActivityLog {
  id: string; actorRole: Role; actorName: string; action: string; at: string;
}

interface AppState {
  mode?: 'centralized' | 'collaborative';
  company?: CompanyData;
  currentUser?: { role: Role; name: string; email: string };
  collaborators?: Collaborator[];
  activities?: ActivityLog[];
}

const STORAGE_KEY = 'bizmaster_logistique_state';

@Injectable({ providedIn: 'root' })
export class CollabStoreService {
  private state: AppState = this.load();

  readonly mode         = signal<'centralized' | 'collaborative' | undefined>(this.state.mode);
  readonly company      = signal<CompanyData | undefined>(this.state.company);
  readonly currentUser  = signal<{ role: Role; name: string; email: string } | undefined>(this.state.currentUser);
  readonly collaborators = signal<Collaborator[]>(this.state.collaborators ?? []);
  readonly activities   = signal<ActivityLog[]>(this.state.activities ?? []);

  private load(): AppState {
    try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : {}; }
    catch { return {}; }
  }

  private save() {
    this.state = { mode: this.mode(), company: this.company(), currentUser: this.currentUser(), collaborators: this.collaborators(), activities: this.activities() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
  }

  hydrateFromInvite(invite: { company: CompanyData; mode: 'centralized' | 'collaborative'; user: { role: Role; name: string; email: string } }) {
    this.company.set(invite.company); this.mode.set(invite.mode); this.currentUser.set(invite.user); this.save();
  }

  logout() { this.currentUser.set(undefined); localStorage.removeItem(STORAGE_KEY); }

  logAction(actorRole: Role, actorName: string, action: string) {
    const log: ActivityLog = { id: Date.now().toString(), actorRole, actorName, action, at: new Date().toLocaleString('fr-FR') };
    this.activities.update(a => [log, ...a.slice(0, 49)]);
    this.save();
  }
}
