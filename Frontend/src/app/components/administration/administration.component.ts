import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css'],
})
export class AdministrationComponent {
  user: any = {};
  users: any[] = [];
  service: any = {};
  services: any[] = [];
  rol: any = {};
  roles: any[] = [];
  editedService: any = {}; // Almacena los datos del servicio que se está editando
  editedUser: any= {};

  constructor() {
    this.users = [
      { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
      { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
    ];

    this.roles = [
      { id: 1, name: 'Admin', descri: 'rol encargado de administar' },
      { id: 2, name: 'Visualizador', descri: 'rol de consulta' },
    ];

    const storedUsers = localStorage.getItem('users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];

    const storedServices = localStorage.getItem('services');
    this.services = storedServices ? JSON.parse(storedServices) : [];
  }

  onSubmit() {
    console.log('Usuario guardado:', this.user);
    this.addUser(); // Llamada a la función para agregar el servicio
    $('#userModal').modal('hide');
  }

  onSubmitService() {
    console.log('Servicio guardado:', this.service);
    this.addService(); // Llamada a la función para agregar el servicio
    $('#serviceModal').modal('hide');
  }

  onEditService() {
    // Buscar el servicio editado en la lista de servicios y actualizarlo
    const index = this.services.findIndex(s => s.id === this.editedService.id);
    if (index !== -1) {
      this.services[index] = { ...this.editedService };
      localStorage.setItem('services', JSON.stringify(this.services));
    }
    $('#editServiceModal').modal('hide');
  }

  addUser() {
    this.users.push({ ...this.user });
    localStorage.setItem('users', JSON.stringify(this.users));
    this.user = {};
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  onEditUser() {
    // Buscar el usuario editado en la lista de usruarios y actualizarlo
    const index = this.users.findIndex(s => s.id === this.editedUser.id);
    if (index !== -1) {
      this.users[index] = { ...this.editedUser };
      localStorage.setItem('users', JSON.stringify(this.users));
    }
    $('#editUserModal').modal('hide'); 
  }

  addService() {
    this.services.push({ ...this.service });
    localStorage.setItem('services', JSON.stringify(this.services));
    this.service = {};
  }

  deleteService(index: number) {
    this.services.splice(index, 1);
    localStorage.setItem('services', JSON.stringify(this.services));
  }

  openEditModal(service: any) {
    this.editedService = { ...service };
    $('#editServiceModal').modal('show');
  }

  openEditUserModal(user: any) {
    this.editedUser = { ...user };
    $('#editUserModal').modal('show'); 
  }
}