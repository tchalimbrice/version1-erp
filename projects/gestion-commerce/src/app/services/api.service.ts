import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CollabStoreService } from './collab-store.service';

export interface DashboardMetric {
  code: string;
  label: string;
  value: number;
  color: string;
  updatedAt?: string;
}

export interface AuthResponse {
  token: string;
  type: string;
  name: string;
  email: string;
  roles: string[];
}

export interface ProductPayload {
  reference?: string;
  name: string;
  category: string;
  purchasePrice: number;
  salePrice: number;
  stock: number;
  minStock: number;
  supplier: string;
  unit: string;
}

export interface CompanyPayload {
  name: string;
  address?: string;
  email?: string;
  phone?: string;
  managerName?: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly baseUrl = 'http://localhost:8080/api';

  constructor(private readonly http: HttpClient, private readonly store: CollabStoreService) {}

  private get authHeaders() {
    const token = this.store.token();
    return token
      ? { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) }
      : {};
  }

  login(email: string, password: string) {
    return firstValueFrom(this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, { email, password }));
  }

  getDashboardSummary() {
    return firstValueFrom(this.http.get<{ service: string; metrics: DashboardMetric[] }>(`${this.baseUrl}/commerce/dashboard/summary`, this.authHeaders));
  }

  getProducts() {
    return firstValueFrom(this.http.get<ProductPayload[]>(`${this.baseUrl}/commerce/products`, this.authHeaders));
  }

  createProduct(payload: ProductPayload) {
    return firstValueFrom(this.http.post<ProductPayload>(`${this.baseUrl}/commerce/products`, payload, this.authHeaders));
  }

  getCompanies() {
    return firstValueFrom(this.http.get<CompanyPayload[]>(`${this.baseUrl}/commerce/companies`, this.authHeaders));
  }

  createCompany(payload: CompanyPayload) {
    return firstValueFrom(this.http.post<CompanyPayload>(`${this.baseUrl}/commerce/companies`, payload, this.authHeaders));
  }

  getAudits() {
    return firstValueFrom(this.http.get<any[]>(`${this.baseUrl}/commerce/audits`, this.authHeaders));
  }
}
