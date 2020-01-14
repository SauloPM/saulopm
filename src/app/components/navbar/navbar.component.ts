import { Router    } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor( private router: Router ) { }

  abrirContacto() {
    this.router.navigate( ['contacto'] );
  }

  abrirConocimiento() {
    this.router.navigate( ['conocimiento'] );
  }
}
