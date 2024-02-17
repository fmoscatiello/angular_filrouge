import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formation-personnalisee',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './formation-personnalisee.component.html',
  styleUrl: './formation-personnalisee.component.css'
})
export class FormationPersonnaliseeComponent implements OnInit {
  

  formationPersoForm = new FormGroup({
    domaine:  new FormControl ("", [Validators.required]),
    demande: new FormControl ("", [Validators.required])

  })

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.formationPersoForm.reset();
    }

}
