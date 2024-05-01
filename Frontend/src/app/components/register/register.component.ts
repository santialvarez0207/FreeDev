import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  documentType: any[] = [];
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    identType: new FormControl('', Validators.required),
    identNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    polity: new FormControl('', Validators.required),
    capcha: new FormControl('', Validators.required)
  });


  constructor(private router: Router) {
    this.documentType = [
      {id: 1, type: 'C.C.', description: 'Cedula Ciudadania' },
      {id: 2, type: 'T.I.', description: 'Tarjeta Identidad' },
      {id: 3, type: 'C.E.', description: 'Cedula Extranjeria' },
      {id: 4, type: 'P', description: 'Pasaporte' }
    ];
   }

  back() {
    this.router.navigate(['home/']);
  }

  registerUser() {
    let elements = this.form.value;
    if (elements.name === "" || elements.lastName === "" || elements.identType === "" || elements.user === "" || elements.identNumber === ""
      || elements.email === "" || elements.contact === "" || elements.address === "" || elements.password === "") {
      swal.fire('Hubo un error', `Debe ingresar toda la información`, 'error');
    } else {
      if (elements.polity === "") {
        swal.fire('Hubo un error', `Debe aceptar la politica de tratamiento de datos personales`, 'error');
      }

      if (elements.capcha === "") {
        swal.fire('Hubo un error', `El captcha es requerido`, 'error');
      }
    }
  }


}
