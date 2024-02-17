import { Component } from '@angular/core';


import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../Auth/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-creation-compte',
  standalone: true,


  imports: [FormsModule, ReactiveFormsModule, RouterLink],

  templateUrl: './creation-compte.component.html',
  styleUrl: './creation-compte.component.css'
})
export class CreationCompteComponent {

  constructor(private authService: AuthService){}
  
  registerForm = new FormGroup({
    civilite: new FormControl("", [Validators.required]),
    prenom: new FormControl("", [Validators.required]),
    nom: new FormControl("", [Validators.required]),    
    email: new FormControl("", [Validators.required, Validators.email]),
    telephone: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
  })

  onSubmit() {
    console.log("Enregistrement", this.registerForm.value);
    this.authService.enregistrer(this.registerForm.value).subscribe({
      next:(response) => {
        console.log("sign up success", response)
      }
    })
    this.registerForm.reset();
    
  }  
}
