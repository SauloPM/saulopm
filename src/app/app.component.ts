import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'saulopm';

  mostrarContacto     = false;
  mostrarConocimiento = false;

  ngAfterViewInit() {
    $.getScript('../assets/js/functions.js');
  }

  abrirContacto( estado: boolean ) {
    this.mostrarContacto = estado;
  }

  abrirConocimiento( estado: boolean ) {
    this.mostrarConocimiento = estado;
  }

}
