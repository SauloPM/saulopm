import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() dispararAperturaContacto    : EventEmitter<boolean>;
  @Output() dispararAperturaConocimiento: EventEmitter<boolean>;

  constructor() {
    this.dispararAperturaContacto     = new EventEmitter();
    this.dispararAperturaConocimiento = new EventEmitter();
  }

  abrirContacto() {
    this.dispararAperturaContacto.emit( true );
  }

  abrirConocimiento() {
    this.dispararAperturaConocimiento.emit( true );
  }
}