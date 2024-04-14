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
    this.router.navigate(['/' + parametro]);
  }
}
