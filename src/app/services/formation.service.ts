import { Injectable } from '@angular/core';
import Formation from '../models/formation.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

      //ceci est l'url de notre back 
      private apiUrl = "http://localhost:8080/formations";

      //on indique au constructeur qu'il prend en parametre un httpclient
  //car c'est lui qui permet de faire les requetes http post/put/get/delete
  constructor(private httpClient : HttpClient) { }


      // methode findAll()
  getFormations(): Observable<Formation[]>{
    return this.httpClient.get<Formation[]>(`${this.apiUrl}/all`);
  }


      // methode findById()
      getFormation(id: number): Observable<Formation>{
        return this.httpClient.get<Formation>(`${this.apiUrl}/find/${id}`);
      }
  
  // methode save()
  createFilm(formation: Formation): Observable<Formation>{
    return this.httpClient.post<Formation>(`${this.apiUrl}/save`,formation);
  }

  //methode merge()
  updateFilm(formation: Formation): Observable<Formation>{
    return this.httpClient.put<Formation>(`${this.apiUrl}/update/${formation.id}`,formation);
  }

  //methode deleteById()
  deleteFilm(id: number): Observable<Formation>{
    return this.httpClient.delete<Formation>(`${this.apiUrl}/delete/${id}`);
  }

  getListFormationByIdSousTheme(id: number): Observable<Formation[]>{
    return this.httpClient.get<Formation[]>(`${this.apiUrl}/findbysoustheme/${id}`);
  }

  getBestFormations(): Observable<Formation[]>{
    return this.httpClient.get<Formation[]>(`${this.apiUrl}/findbestformations`);
  }
}
