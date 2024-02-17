import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AuthService } from '../../Auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private auth: AuthService) { }

  user:any = null;

  connexionForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  ngOnInit(){
    this.auth.authSubject.subscribe(
      (auth) => {
        this.user = auth.user;
      }
    )
  }

  isLoggedIn(): boolean {
    return  !!localStorage.getItem('jwt');
  }
  
  logout() {
    this.auth.logOut();
  }
}
