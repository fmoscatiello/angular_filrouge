import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../Auth/auth.service';

@Component({
  selector: 'app-ajouter-utilisateur',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrl: './ajouter-utilisateur.component.css'
})
export class AjouterUtilisateurComponent {

  constructor(private authService: AuthService){}
  
  registerForm = new FormGroup({
    civilite: new FormControl("", [Validators.required]),
    prenom: new FormControl("", [Validators.required]),
    nom: new FormControl("", [Validators.required]),    
    email: new FormControl("", [Validators.required, Validators.email]),
    telephone: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    role: new FormControl("FORMATEUR", [Validators.required])
  })

  onSubmit() {
    console.log("Enregistrement", this.registerForm.value);
    this.authService.enregistrerUtilisateur(this.registerForm.value).subscribe({
      next:(response) => {
        console.log("sign up success", response)
      }
    })
    this.registerForm.reset();
    
  }
}
