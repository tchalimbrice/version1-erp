import { Injectable, signal } from '@angular/core';

export type Role = 'owner' | 'employee' | 'hr' | 'accountant' | 'receptionist';

export interface CompanyData {
  name: string;
  address: string;
  phone: string;
  email: string;
  adminPassword: string;
}

export interface Collaborator {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  password: string;
  token: string;
}

export interface ActivityLog {
  id: string;
  actorRole: Role;
  actorName: string;
  action: string;
  at: string;
}

const STORAGE_KEY = 'hotel_collab_state_v1';

interface StoredState {
  company?: CompanyData;
  collaborators: Collaborator[];
  currentUser?: { role: Role; name: string; email: string };
  activities: ActivityLog[];
  mode?: 'centralized' | 'collaborative';
}

@Injectable({ providedIn: 'root' })
export class CollabStoreService {
  private state: StoredState = this.loadState();

  readonly company = signal<CompanyData | undefined>(this.state.company);
  readonly collaborators = signal<Collaborator[]>(this.state.collaborators);
  readonly currentUser = signal<StoredState['currentUser']>(this.state.currentUser);
  readonly activities = signal<ActivityLog[]>(this.state.activities);
  readonly mode = signal<'centralized' | 'collaborative' | undefined>(this.state.mode);

  setMode(mode: 'centralized' | 'collaborative') {
    this.state.mode = mode;
    this.mode.set(mode);
    this.persist();
  }

  setCompany(data: CompanyData) {
    this.state.company = data;
    this.company.set(data);
    this.persist();
  }

  setCollaborators(list: Collaborator[]) {
    this.state.collaborators = list;
    this.collaborators.set(list);
    this.persist();
  }

  setCurrentUser(user: StoredState['currentUser']) {
    this.state.currentUser = user;
    this.currentUser.set(user);
    this.persist();
  }

  logout() {
    this.state.currentUser = undefined;
    this.currentUser.set(undefined);
    this.persist();
  }

  logAction(role: Role, actorName: string, action: string) {
    const entry: ActivityLog = {
      id: crypto.randomUUID(),
      actorRole: role,
      actorName,
      action,
      at: new Date().toISOString()
    };
    this.state.activities = [entry, ...this.state.activities].slice(0, 50);
    this.activities.set(this.state.activities);
    this.persist();
  }

  generateToken() {
    return crypto.randomUUID();
  }

  hydrateFromInvite(invite: {
    company: CompanyData;
    mode: 'centralized' | 'collaborative';
    user: { role: Role; name: string; email: string };
  }) {
    this.state.company = invite.company;
    this.company.set(invite.company);
    this.state.mode = invite.mode;
    this.mode.set(invite.mode);
    this.state.currentUser = invite.user;
    this.currentUser.set(invite.user);
    this.persist();
  }

  private loadState(): StoredState {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { collaborators: [], activities: [] };
    }
    try {
      const parsed = JSON.parse(raw) as StoredState;
      return {
        collaborators: parsed.collaborators ?? [],
        activities: parsed.activities ?? [],
        company: parsed.company,
        currentUser: parsed.currentUser,
        mode: parsed.mode
      };
    } catch {
      return { collaborators: [], activities: [] };
    }
  }

  private persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
  }
}

