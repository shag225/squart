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

  getSessionList(): Observable<Session[]> {
    const url: string = `${environment.apiUrl}/users/scanTable/sim_session_data`;
    return this.http.get<Session[]>(url);
  }
}