import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import SousTheme from '../models/sousTheme.model';

@Injectable({
  providedIn: 'root'
})
export class SousThemeService {

    //ceci est l'url de notre back 
    private apiUrl = "http://localhost:8080/sousthemes";

      //on indique au constructeur qu'il prend en parametre un httpclient
  //car c'est lui qui permet de faire les requetes http post/put/get/delete
  constructor(private httpClient : HttpClient) { }


      // methode findAll()
  getSousThemes(): Observable<SousTheme[]>{
    return this.httpClient.get<SousTheme[]>(`${this.apiUrl}/all`);
  }


      // methode findById()
      getSousTheme(id: number): Observable<SousTheme>{
        return this.httpClient.get<SousTheme>(`${this.apiUrl}/find/${id}`);
      }
  
  // methode save()
  createFilm(soustheme: SousTheme): Observable<SousTheme>{
    return this.httpClient.post<SousTheme>(`${this.apiUrl}/save`,soustheme);
  }

  //methode merge()
  updateFilm(soustheme: SousTheme): Observable<SousTheme>{
    return this.httpClient.put<SousTheme>(`${this.apiUrl}/update/${soustheme.id}`,soustheme);
  }

  //methode deleteById()
  deleteFilm(id: number): Observable<SousTheme>{
    return this.httpClient.delete<SousTheme>(`${this.apiUrl}/delete/${id}`);
  }

  getListSousThemeByIdTheme(id: number): Observable<SousTheme[]>{
    return this.httpClient.get<SousTheme[]>(`${this.apiUrl}/findbytheme/${id}`);
  }

}
