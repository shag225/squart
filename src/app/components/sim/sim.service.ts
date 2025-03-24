import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from './session.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SIMService {
  private http: HttpClient = inject(HttpClient);

  getSessionList(tableName: string): Observable<Session[]> {
    const url: string = `${environment.apiUrl}/users/scanTable/${tableName}`;
    return this.http.get<Session[]>(url);
  }

  createSession(action: string): Observable<any> {
    const url: string = `${environment.apiUrl}/users/create`;
    let body = { datetime: Date.now(), action: action };
    return this.http.post<Session>(url, body);
  }

  getSessionsByYear(tableName: string, year: number): Observable<Session[]> {
    let body = {
        tableName: tableName,
        year: year,
    }
    const url: string = `${environment.apiUrl}/users/scanTableByYear`;
    return this.http.post<Session[]>(url, body);
  }
}