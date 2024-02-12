import { Component, Input } from '@angular/core';
import Categorie from '../../../models/categorie.model';


@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css',
})
export class CategorieComponent {

  @Input()
  categorie!: Categorie;

}
