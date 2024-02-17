import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';

@Component({
  selector: 'app-evaluation-formation',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule],
  templateUrl: './evaluation-formation.component.html',
  styleUrl: './evaluation-formation.component.css'
})
export class EvaluationFormationComponent {

  faStar = faStar;

  @Input() rating: number = 0;

  setRating(value: number) {
    this.rating = value;
    console.log(this.rating);
    return value;
    
    const ratingValue = this.rating;
  }
  evalForm = new FormGroup({
    commentaire: new FormControl("", [Validators.required]),
    note: new FormControl(),  
  })


  onSubmit() {
    if (this.evalForm.valid) {
      const data = this.evalForm.value;
      console.log( data);
    }
    this.evalForm.reset();
  }
  resetNote() {
    this.rating = 0;
  }
}
