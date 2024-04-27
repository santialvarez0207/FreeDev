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
  editedService: any = {}; // Almacena los datos del servicio que se está editando

  constructor() {
    this.users = [
      { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
      { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
    ];

    const storedServices = localStorage.getItem('services');
    this.services = storedServices ? JSON.parse(storedServices) : [];
  }

  onSubmit() {
    console.log('Usuario guardado:', this.user);
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
    this.user = {};
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
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
}
