import { Component } from '@angular/core';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CategorieService } from '../../services/categorie.service';
import { ThemeListComponent } from "./theme-list/theme-list.component";
import { CategorieComponent } from "./categorie/categorie.component";


@Component({
    selector: 'app-formations-page',
    standalone: true,
    templateUrl: './formations-page.component.html',
    styleUrl: './formations-page.component.css',
    providers: [CategorieService],
    imports: [HttpClientModule, CategorieListComponent, ThemeListComponent, CategorieComponent]
})
export class FormationsPageComponent {

    categories: any[] = [];
    themes: any[] = [];

    constructor(private categorieService: CategorieService){}


  /**
   * A l'ouverture de la page "formations, on charge les methodes ci-dessous.
   * l'objectif étant de retourner le nom des catégories et de trier les catégrories par themes"
   */
  ngOnInit(): void{
    this.categorieService.getCategories().subscribe(categories => {this.categories = categories});
  }

}
