import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { FormationService } from '../../../services/formation.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-card-list',
    standalone: true,
    imports: [CardComponent,HttpClientModule],
    templateUrl: './card-list.component.html',
    styleUrl: './card-list.component.css',
    
})
export class CardListComponent {

    bestformations : any[] = [];

    @Input()
    sectionId: string = '';
    @Input()
    sectionClass: string = '';
    @Input()
    sectionTitle: string = 'Default title';

    constructor(private formationService: FormationService){}

    ngOnInit(): void{
        this.formationService.getBestFormations().subscribe(bestformations => {this.bestformations = bestformations});
    }


}
