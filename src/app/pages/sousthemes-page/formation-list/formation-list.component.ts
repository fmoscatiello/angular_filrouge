import { Component, Input } from '@angular/core';
import { FormationService } from '../../../services/formation.service';
import { HttpClientModule } from '@angular/common/http';
import { FormationComponent } from '../formation/formation.component';

@Component({
  selector: 'app-formation-list',
  standalone: true,
  imports: [HttpClientModule,FormationComponent],
  templateUrl: './formation-list.component.html',
  styleUrl: './formation-list.component.css'
})
export class FormationListComponent {

  formations : any[] = [];

  @Input()
  soustheme_id !: number;

  constructor(private formationService: FormationService){}

  ngOnInit(): void{
    this.formationService.getListFormationByIdSousTheme(this.soustheme_id).subscribe(formations => {this.formations = formations});
  }


}
