import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import Formation from '../../../models/formation.model';
import { FormationService } from '../../../services/formation.service';

@Component({
  selector: 'app-formation-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './formation-details.component.html',
  styleUrl: './formation-details.component.css'
})
export class FormationDetailsComponent {

  formation!: Formation;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly formationService: FormationService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const numericId = +id;
      if (!isNaN(numericId)) {
      this.formationService.getFormation( Number.parseInt(id)).subscribe(formation => {
        this.formation = formation;
      });
    }
    }
  }

}
