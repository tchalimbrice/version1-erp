import { Injectable } from '@angular/core';
import { ApiService, AuthResponse } from './api.service';
import { CollabStoreService, Role } from './collab-store.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private readonly api: ApiService, private readonly store: CollabStoreService) {}

  private mapRole(roles: string[]): Role {
    if (roles.includes('OWNER')) return 'owner';
    if (roles.includes('ACCOUNTANT')) return 'accountant';
    if (roles.includes('SECRETARY')) return 'hr';
    return 'employee';
  }

  async login(email: string, password: string) {
    const response = await this.api.login(email, password);
    this.store.setToken(response.token);
    this.store.setCurrentUser({
      role: this.mapRole(response.roles),
      name: response.name,
      email: response.email,
    });
    return response;
  }

  logout() {
    this.store.logout();
  }
}
