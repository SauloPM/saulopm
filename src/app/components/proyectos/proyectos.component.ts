import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {

  @Output() onAbrirModal: EventEmitter<string>

  constructor() {
    this.onAbrirModal = new EventEmitter();
  }

  abrirModal( id: string ) {
    this.onAbrirModal.emit( id );
  }
}
