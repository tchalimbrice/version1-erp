import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE } from '../app.settings';

export interface InviteCollaboratorRequest { invitedEmail: string; firstName: string; lastName: string; position: string; dataAccess?: boolean; reportAccess?: boolean; settingsAccess?: boolean; }
export interface AcceptInvitationRequest { invitationToken: string; password: string; confirmPassword: string; }
export interface SendInvitationOwner { email: string; name: string; url: string; }
export interface SendInvitationItem { role: string; name: string; email: string; url: string; password?: string; }
export interface SendInvitationsRequest { owner: SendInvitationOwner; invitations: SendInvitationItem[]; }

@Injectable({ providedIn: 'root' })
export class InvitationService {
  private base = `${API_BASE}/invitations`;
  constructor(private http: HttpClient) {}

  invite(companyId: number, createdByUserId: number, payload: InviteCollaboratorRequest): Observable<any> {
    return this.http.post(`${this.base}?companyId=${companyId}&createdByUserId=${createdByUserId}`, payload);
  }

  getByToken(token: string) {
    return this.http.get(`${this.base}/token/${token}`);
  }

  send(payload: SendInvitationsRequest): Observable<any> {
    return this.http.post(`${this.base}/send`, payload);
  }

  accept(token: string, password: string, confirm: string, userId?: number) {
    const payload: AcceptInvitationRequest = { invitationToken: token, password, confirmPassword: confirm };
    const url = userId ? `${this.base}/accept?userId=${userId}` : `${this.base}/accept`;
    return this.http.post(url, payload);
  }
}
