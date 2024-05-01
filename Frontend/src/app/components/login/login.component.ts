import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  users: any[] = [];

  form = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });


  constructor(private router: Router) {
    this.users = [
      {name: 'superusuario', password: 'subgrupo15' }
    ];

  }

  goRegister() {
    this.router.navigate(['register/']);
  }

  getInto() {
    let elements = this.form.value;
    var usr = this.users.filter(name => name.name === elements.user);
    var pass = this.users.filter(name => name.password === elements.password);

    if(usr.length > 0 && pass.length > 0) {
      this.router.navigate(['administration/']);
    } else {
      swal.fire('Hubo un error', `El usuario o clave son incorrectos`, 'error');
    }

  }

}
