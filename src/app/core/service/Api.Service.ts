import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = API;

  constructor(private http: HttpClient) { }

  get(path: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${path}`);
  }

  getById(path: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${path}`);
  }

  post(path: string, post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${path}`, post);
  }

  put(path: string, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${path}`, post);
  }

  delete(path: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${path}`);
  }
}