import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/utilisateurs'

  constructor(public http: HttpClient) { }

  enregistrer(user:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/save`, user)
  }


}
