import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) {}

  public saveSettings(user: User): Observable<any> {
    const url = '/api/settings/current';
    return this.http.put<any>(url, user);
  }
}
