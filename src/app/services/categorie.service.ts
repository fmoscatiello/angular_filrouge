import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Categorie from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

    //ceci est l'url de notre back 
    private apiUrl = "http://localhost:8080/categories";

      //on indique au constructeur qu'il prend en parametre un httpclient
  //car c'est lui qui permet de faire les requetes http post/put/get/delete
  constructor(private httpClient : HttpClient) { }


      // methode findAll()
  getCategories(): Observable<Categorie[]>{
    return this.httpClient.get<Categorie[]>(`${this.apiUrl}/all`);
  }


      // methode findById()
      getCategorie(id: number): Observable<Categorie>{
        return this.httpClient.get<Categorie>(`${this.apiUrl}/find/${id}`);
      }
  
  // methode save()
  createFilm(categorie: Categorie): Observable<Categorie>{
    return this.httpClient.post<Categorie>(`${this.apiUrl}/save`,categorie);
  }

  //methode merge()
  updateFilm(categorie: Categorie): Observable<Categorie>{
    return this.httpClient.put<Categorie>(`${this.apiUrl}/update/${categorie.id}`,categorie);
  }

  //methode deleteById()
  deleteFilm(id: number): Observable<Categorie>{
    return this.httpClient.delete<Categorie>(`${this.apiUrl}/delete/${id}`);
  }


}
