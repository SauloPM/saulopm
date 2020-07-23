import { Component, Output, EventEmitter, OnInit } from '@angular/core';

declare var VanillaTilt: any;

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  @Output() onAbrirModal: EventEmitter<string>

  constructor() {
    this.onAbrirModal = new EventEmitter();
  }

  ngOnInit() {

    VanillaTilt.init( document.querySelectorAll( '.proyecto'), { max: 8, speed: 1000 });
    
  }

  abrirModal( id: string ) {
    this.onAbrirModal.emit( id );
  }
}
