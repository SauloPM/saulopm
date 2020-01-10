import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Interfaces
// import { Proyecto } from '';

// Assets
import * as proyectos from '../../../assets/data/informacion-proyectos.json';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() proyectoID: string;
  @Output() dispararCierreModal: EventEmitter<string>;

  proyecto: any = {};

  constructor() {
    this.dispararCierreModal = new EventEmitter();
  }

  ngOnInit() {
    this.proyecto = ( proyectos as any ).default[ this.proyectoID ];
  }

  cerrarModal() {
    this.dispararCierreModal.emit( this.proyectoID );
  }

}
