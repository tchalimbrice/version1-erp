import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE } from '../app.settings';

export interface CollaboratorDto { id?: number; companyId: number; userId: number; position: string; status?: string; dataAccess?: boolean; reportAccess?: boolean; settingsAccess?: boolean; notes?: string; }

@Injectable({ providedIn: 'root' })
export class CollaboratorService {
  private base = `${API_BASE}/collaborators`;
  constructor(private http: HttpClient) {}

  add(collab: CollaboratorDto) { return this.http.post(this.base, collab); }
  update(id: number, collab: CollaboratorDto) { return this.http.put(`${this.base}/${id}`, collab); }
  remove(id: number) { return this.http.delete(`${this.base}/${id}`); }
  listByCompany(companyId: number): Observable<CollaboratorDto[]> { return this.http.get<CollaboratorDto[]>(`${this.base}?companyId=${companyId}`); }
  suspend(id: number) { return this.http.post(`${this.base}/${id}/suspend`, {}); }
  activate(id: number) { return this.http.post(`${this.base}/${id}/activate`, {}); }
}
