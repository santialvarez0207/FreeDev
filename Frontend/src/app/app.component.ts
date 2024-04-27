import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';

  constructor(private router: Router) { }

  goTo(parametro: string) {
    this.router.navigate(['login/']);
  }

  goToReg(parametro: string) {
    this.router.navigate(['register/']);
  }




  isInAdministrationPage(): boolean {
    // Obtiene la URL actual del router
    const currentUrl = this.router.url;

    // Comprueba si la URL actual corresponde a la página de administración
    return currentUrl === '/administration';
  }
}
