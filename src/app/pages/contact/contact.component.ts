import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  userMessage = new FormGroup({
    nom: new FormControl ("", [Validators.required]),
    email: new FormControl ("", [Validators.required]),
    message: new FormControl ("", [Validators.required]),

  })

  
  
  
  

  onSubmit() {
    this.userMessage.reset();
    }

};

