import { Component } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    subject: new FormControl("",[Validators.required]),
    message: new FormControl("",[Validators.required]),
  });

  Send(){ 
  }
}
