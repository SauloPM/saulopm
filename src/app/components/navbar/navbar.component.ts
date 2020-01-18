import { Router } from '@angular/router';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() onAbrirContacto    : EventEmitter<any>;
  @Output() onAbrirConocimiento: EventEmitter<any>;

  constructor( private router: Router ) {
    this.onAbrirContacto     = new EventEmitter();
    this.onAbrirConocimiento = new EventEmitter();
  }

  abrirContacto() {
    this.onAbrirContacto.emit();
  }

  abrirConocimiento() {
    this.onAbrirConocimiento.emit();
  }
}
