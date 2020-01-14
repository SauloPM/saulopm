import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  @Output() dispararAperturaContacto: EventEmitter<boolean>;

  constructor() {
    this.dispararAperturaContacto = new EventEmitter();
  }

  cerrarContacto() {
    this.dispararAperturaContacto.emit( false );
  }

}
