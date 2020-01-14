import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {

  proyectoID: string;
  mostrarModal = false;

  constructor() { }

  abrirModal( id: string ) {
    this.mostrarModal = true;
    this.proyectoID = id;
  }

  cerrarModal( estado: boolean ) {
    this.mostrarModal = false;
  }

}
