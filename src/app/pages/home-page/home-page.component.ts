import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { CardListComponent } from "./card-list/card-list.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [BannerComponent, CardListComponent]
})
export class HomePageComponent {

}
