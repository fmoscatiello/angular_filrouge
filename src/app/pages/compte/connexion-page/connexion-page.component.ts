import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../Auth/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-connexion-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './connexion-page.component.html',
  styleUrl: './connexion-page.component.css'
})
export class ConnexionPageComponent {
  constructor(private auth: AuthService) { }



  connexionForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })


  onSubmit() {
    console.log(this.connexionForm.value);
    this.auth.connecter(this.connexionForm.value).subscribe({
      next: (response) => {
        localStorage.setItem("jwt", response.jwt);
        localStorage.setItem("role", response.role);
        this.auth.getUserProfile().subscribe();
        this.auth.getUserRole().subscribe();
        console.log("sign up success", response)
        this.auth.redirectToHome();
      }
    })
    
  }
}
