import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { CardListComponent } from "./card-list/card-list.component";
import { FormationPersonnaliseeComponent } from "../../commons/formation-personnalisee/formation-personnalisee.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [HttpClientModule, BannerComponent, CardListComponent, FormationPersonnaliseeComponent]
})
export class HomePageComponent {


}
