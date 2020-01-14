import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conocimiento',
  templateUrl: './conocimiento.component.html',
  styleUrls: ['./conocimiento.component.scss']
})
export class ConocimientoComponent {

  @Output() dispararAperturaConocimiento: EventEmitter<boolean>;

  constructor() {
    this.dispararAperturaConocimiento = new EventEmitter();
  }

  cerrarConocimiento() {
    this.dispararAperturaConocimiento.emit( false );
  }

}
