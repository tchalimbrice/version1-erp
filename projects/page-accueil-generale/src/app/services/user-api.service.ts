import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE } from '../app.settings';

export interface RegisterRequest { username: string; email: string; firstName: string; lastName: string; password: string; domain: string; }
export interface LoginRequest { username: string; password: string; }
export interface LoginResponse { token: string; refreshToken?: string; userId: number; username: string; email: string; role: string; domain: string; }

@Injectable({ providedIn: 'root' })
export class UserApiService {
  private base = `${API_BASE}/users`;
  constructor(private http: HttpClient) {}

  register(payload: RegisterRequest): Observable<any> {
    return this.http.post(`${this.base}/register`, payload);
  }

  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.base}/login`, payload);
  }

  getUser(id: number) {
    return this.http.get(`${this.base}/${id}`);
  }

  searchByEmail(email: string) {
    return this.http.get(`${this.base}/search?email=${encodeURIComponent(email)}`);
  }

  updateUser(id: number, body: any) {
    return this.http.put(`${this.base}/${id}`, body);
  }

  changePassword(id: number, payload: { oldPassword: string; newPassword: string; confirmPassword: string; }) {
    return this.http.put(`${this.base}/${id}/password`, payload);
  }
}
