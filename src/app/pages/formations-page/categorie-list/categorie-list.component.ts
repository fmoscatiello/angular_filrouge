import { Component, Input } from '@angular/core';
import { CategorieService } from '../../../services/categorie.service';
import { CategorieComponent } from "../categorie/categorie.component";

@Component({
    selector: 'app-categorie-list',
    standalone: true,
    templateUrl: './categorie-list.component.html',
    styleUrl: './categorie-list.component.css',
    providers: [CategorieService],
    imports: [CategorieComponent]
})
export class CategorieListComponent {

  @Input()
  categories: any[] = [];

}
