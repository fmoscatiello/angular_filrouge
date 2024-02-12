import { Component, Input } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { ThemeComponent } from '../theme/theme.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-theme-list',
  standalone: true,
  templateUrl: './theme-list.component.html',
  styleUrl: './theme-list.component.css',
  providers: [ThemeService],
  imports: [ThemeComponent, HttpClientModule],
})
export class ThemeListComponent {

  @Input()
  themes: any[] = [];

  @Input()
  categorie_id !: number;

  constructor(private themeService: ThemeService){}

  ngOnInit(): void{
    this.themeService.getListThemeByIdCategorie(this.categorie_id).subscribe(themes => {this.themes = themes});
  }

}
