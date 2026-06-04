import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { switchMap, catchError, tap, map } from 'rxjs/operators';

export interface RegisterUserRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface RegisterCompanyRequest {
  name: string;
  domain: string;
  address: string;
  email: string;
  phone: string;
  managerName?: string;
}

export interface AuthResponse {
  token: string;
  tokenType: string;
  fullName: string;
  email: string;
  roles: string[];
}

@Injectable({ providedIn: 'root' })
export class CompanyRegistrationService {
  private readonly http = inject(HttpClient);

  private readonly domainApiMap: Record<string, string> = {
    'education': 'http://localhost:8081',
    'sante': 'http://localhost:8082',
    'restauration': 'http://localhost:8083',
    'commerce': 'http://localhost:8084',
    'construction': 'http://localhost:8085',
    'ferme': 'http://localhost:8086',
    'hotellerie': 'http://localhost:8087',
    'hospitality': 'http://localhost:8087',
    'logistique': 'http://localhost:8088',
    'logistics': 'http://localhost:8088',
    'transport': 'http://localhost:8089',
  };

  /**
   * Register a new user account (owner) via Auth API
   */
  registerUser(userData: RegisterUserRequest): Observable<AuthResponse> {
    const url = 'http://localhost:9090/api/auth/register';
    return this.http.post<AuthResponse>(url, userData);
  }

  /**
   * Register a company in the specific domain API
   */
  registerCompany(
    domain: string,
    companyData: RegisterCompanyRequest,
    token: string
  ): Observable<any> {
    const apiBaseUrl = this.getDomainApiUrl(domain);
    if (!apiBaseUrl) {
      throw new Error(`Unknown domain: ${domain}`);
    }

    const url = `${apiBaseUrl}/api/companies`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(url, companyData, { headers });
  }

  /**
   * Full registration flow: register user, then register company
   */
  completeRegistration(
    domain: string,
    userData: RegisterUserRequest,
    companyData: RegisterCompanyRequest
  ): Observable<{ auth: AuthResponse; company: any }> {
    return this.registerUser(userData).pipe(
      tap(auth => {
        // Store the token for company registration
        localStorage.setItem('temp_auth_token', auth.token);
      }),
      switchMap(auth =>
        this.registerCompany(domain, companyData, auth.token).pipe(
          map(company => ({ auth, company })),
          tap(() => {
            localStorage.removeItem('temp_auth_token');
          }),
          catchError(error => {
            localStorage.removeItem('temp_auth_token');
            return throwError(() => error);
          })
        )
      ),
      catchError(error => {
        localStorage.removeItem('temp_auth_token');
        return throwError(() => error);
      })
    );
  }

  /**
   * Get the API URL for a given domain
   */
  getDomainApiUrl(domain: string): string {
    return this.domainApiMap[domain] || '';
  }
}
