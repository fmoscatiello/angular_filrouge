import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Utilisateur from '../models/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  getUtilisateurs(): Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(`${this.apiUrl}/auth/utilisateurs`);
  }

  deleteUtilisateur(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/auth/utilisateurs/${id}`);
  }
}
