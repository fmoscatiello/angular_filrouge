import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { SousthemeComponent } from "./soustheme/soustheme.component";
import { FormationListComponent } from "./formation-list/formation-list.component";
import { SousThemeService } from '../../services/soustheme.service';

@Component({
    selector: 'app-sousthemes-page',
    standalone: true,
    templateUrl: './sousthemes-page.component.html',
    styleUrl: './sousthemes-page.component.css',
    imports: [HttpClientModule, SousthemeComponent, FormationListComponent]
})
export class SousthemesPageComponent {
  
  sousthemes : any[] = [];
  formations : any[] = [];

  theme_id !: number;

  constructor(private sousThemeService: SousThemeService){}

  ngOnInit(): void{
    this.sousThemeService.getListSousThemeByIdTheme(1).subscribe(sousthemes => {this.sousthemes = sousthemes});
  }

}
