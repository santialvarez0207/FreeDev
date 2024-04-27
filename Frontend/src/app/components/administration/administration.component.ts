import { Component } from '@angular/core';
declare var $: any; //  jQuery para  uso en TypeScript

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css'],
})
export class AdministrationComponent {
  user: any = {}; // Datos del usuario para el formulario

  users: any[] = [];

  constructor() {
    // se inicializa la lista de usuarios 
    this.users = [
      { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
      { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
      // Otros usuarios
    ];
  }

  onSubmit() {
    // Lógica para guardar el usuario
    console.log('Usuario guardado:', this.user);
    $('#userModal').modal('hide'); // Cerrar el modal después de guardar
  }
}
