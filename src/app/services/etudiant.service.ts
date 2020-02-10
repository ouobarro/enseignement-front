import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Etudiant} from '../model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private baseUrl = 'http://localhost:8080/api/etudiants';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Cache-Control': 'no-cache'
    })
  };

  constructor(private http: HttpClient) { }

  getEtudiant(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEtudiant(etudiant: Etudiant): Observable<object> {
    return this.http.post(`${this.baseUrl}`, etudiant);
  }

  updateEtudiant(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEtudiant(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  getEtudiantsList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

}
