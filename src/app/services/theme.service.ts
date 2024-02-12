import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Theme from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  //ceci est l'url de notre back 
  private apiUrl = "http://localhost:8080/themes";

  //on indique au constructeur qu'il prend en parametre un httpclient
//car c'est lui qui permet de faire les requetes http post/put/get/delete
constructor(private httpClient : HttpClient) { }


  // methode findAll()
getThemes(): Observable<Theme[]>{
return this.httpClient.get<Theme[]>(`${this.apiUrl}/all`);
}


  // methode findById()
  getTheme(id: number): Observable<Theme>{
    return this.httpClient.get<Theme>(`${this.apiUrl}/find/${id}`);
  }

// methode save()
createFilm(theme: Theme): Observable<Theme>{
return this.httpClient.post<Theme>(`${this.apiUrl}/save`,theme);
}

//methode merge()
updateFilm(theme: Theme): Observable<Theme>{
return this.httpClient.put<Theme>(`${this.apiUrl}/update/${theme.id}`,theme);
}

//methode deleteById()
deleteFilm(id: number): Observable<Theme>{
return this.httpClient.delete<Theme>(`${this.apiUrl}/delete/${id}`);
}

getListThemeByIdCategorie(id: number): Observable<Theme[]>{
  return this.httpClient.get<Theme[]>(`${this.apiUrl}/findbycategorie/${id}`);
}

}
