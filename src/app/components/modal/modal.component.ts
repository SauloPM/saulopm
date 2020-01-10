import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Interfaces
// import { Proyecto } from '';

// Assets
import * as data from '../../../assets/data/informacion-proyectos.json';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() proyectoID: string;
  @Output() parametroSalida: EventEmitter<string>;

  proyecto: any = {};

  constructor() {
    this.parametroSalida = new EventEmitter();
  }

  ngOnInit() {
    this.proyecto = ( data as any ).default[ this.proyectoID ];
  }

  cerrarModal() {
    this.parametroSalida.emit( this.proyectoID );
  }

}
