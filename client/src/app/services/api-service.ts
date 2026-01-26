import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://46.202.167.63/api/message';
  constructor(private http: HttpClient) {}
  checkServer() {
    return this.http.get(this.apiUrl);
  }
}
