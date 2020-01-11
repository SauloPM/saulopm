import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  textoBoton = 'Visitar';

  constructor() {
    this.dispararCierreModal = new EventEmitter();
  }

  ngOnInit() {
    this.proyecto = ( proyectos as any ).default[ this.proyectoID ];
    this.textoBoton = this.proyecto.tipo === 'web' ? 'Visitar web' : 'Descargar APK';
  }

  cerrarModal() {
    this.dispararCierreModal.emit( this.proyectoID );
  }

}
