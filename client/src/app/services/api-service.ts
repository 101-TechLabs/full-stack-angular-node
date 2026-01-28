import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = `${environment.apiBaseUrl}/api/message`;
  constructor(private http: HttpClient) {}
  checkServer() {
    return this.http.get(this.apiUrl);
    // http://46.202.167.63:4000
  }
}
