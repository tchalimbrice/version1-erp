import { Injectable, signal } from '@angular/core';

export type Role = 'owner' | 'employee' | 'hr' | 'accountant';
export type InviteDomain =
  | 'transport'
  | 'gestion-commerce'
  | 'gestion-sante'
  | 'gestion-education'
  | 'gestion-construction'
  | 'gestion-logistique';

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

export interface TicketSale {
  id: string;
  clientName: string;
  route: string;
  date: string;
  passengers: string;
  total: string;
  soldBy: string;
  soldAt: string;
  busPlate: string;
  driverName: string;
}

const STORAGE_KEY = 'transport_collab_state_v1';

interface StoredState {
  company?: CompanyData;
  collaborators: Collaborator[];
  currentUser?: { role: Role; name: string; email: string };
  activities: ActivityLog[];
  mode?: 'centralized' | 'collaborative';
  domain?: InviteDomain;
  ticketSales: TicketSale[];
}

@Injectable({ providedIn: 'root' })
export class CollabStoreService {
  private state: StoredState = this.loadState();

  readonly company = signal<CompanyData | undefined>(this.state.company);
  readonly collaborators = signal<Collaborator[]>(this.state.collaborators);
  readonly currentUser = signal<StoredState['currentUser']>(this.state.currentUser);
  readonly activities = signal<ActivityLog[]>(this.state.activities);
  readonly ticketSales = signal<TicketSale[]>(this.state.ticketSales);
  readonly mode = signal<'centralized' | 'collaborative' | undefined>(this.state.mode);
  readonly domain = signal<InviteDomain | undefined>(this.state.domain);

  setMode(mode: 'centralized' | 'collaborative') {
    this.state.mode = mode;
    this.mode.set(mode);
    this.persist();
  }

  setDomain(domain: InviteDomain) {
    this.state.domain = domain;
    this.domain.set(domain);
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

  loginOwner(email: string, password: string): boolean {
    const company = this.state.company;
    if (!company) return false;
    if (company.email === email && company.adminPassword === password) {
      this.setCurrentUser({ role: 'owner', name: company.name, email });
      return true;
    }
    return false;
  }

  loginWithToken(token: string, email: string, password: string): boolean {
    const user = this.state.collaborators.find(c => c.token === token && c.email === email);
    if (!user) return false;
    if (user.password !== password) return false;
    this.setCurrentUser({
      role: user.role,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email
    });
    return true;
  }

  logout() {
    this.state.currentUser = undefined;
    this.currentUser.set(undefined);
    this.persist();
  }

  hydrateFromInvite(invite: {
    company: CompanyData;
    mode: 'centralized' | 'collaborative';
    domain?: InviteDomain;
    user: { role: Role; name: string; email: string };
    collaborators?: Collaborator[];
  }) {
    this.state.company = invite.company;
    this.company.set(invite.company);
    this.state.mode = invite.mode;
    this.mode.set(invite.mode);
    if (invite.domain) {
      this.state.domain = invite.domain;
      this.domain.set(invite.domain);
    }
    if (invite.collaborators) {
      this.state.collaborators = invite.collaborators;
      this.collaborators.set(invite.collaborators);
    }
    this.state.currentUser = invite.user;
    this.currentUser.set(invite.user);
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

  addTicketSale(sale: TicketSale) {
    this.state.ticketSales = [sale, ...this.state.ticketSales];
    this.ticketSales.set(this.state.ticketSales);
    this.persist();
  }

  generateToken() {
    return crypto.randomUUID();
  }

  private loadState(): StoredState {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { collaborators: [], activities: [], ticketSales: [] };
    }
    try {
      const parsed = JSON.parse(raw) as StoredState;
      return {
        collaborators: parsed.collaborators ?? [],
        activities: parsed.activities ?? [],
        company: parsed.company,
        currentUser: parsed.currentUser,
        mode: parsed.mode,
        domain: parsed.domain,
        ticketSales: parsed.ticketSales ?? []
      };
    } catch {
      return { collaborators: [], activities: [], ticketSales: [] };
    }
  }

  private persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
  }
}
