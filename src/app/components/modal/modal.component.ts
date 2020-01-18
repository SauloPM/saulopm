import { Component, OnInit } from '@angular/core';

// Clases
import { Proyecto } from 'src/app/clases/proyecto.js';

// Assets
import * as proyectos from '../../../assets/data/informacion-proyectos.json';

// jQuery
declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  proyecto: Proyecto;
  textoBoton = 'Visitar';

  constructor() { }

  ngOnInit() {
    this.proyecto = new Proyecto();
  }

  abrirModal( proyectoID: string ) {

    // Recopilamos la información del proyecto seleccionado
    this.proyecto = ( proyectos as any ).default[ proyectoID ];
    this.textoBoton = this.proyecto.tipo === 'web' ? 'Visitar web' : 'Descargar APK';

    this.mostrarModal();
  }

  cerrarModal() {
    this.ocultarModal();
  }

  // ──────────────── //
  //     AUXILIAR     //
  // ──────────────── //

  private mostrarModal() {

    $( '.modal' ).css({ 'z-index': '100', 'opacity': '1' });

    setTimeout(() => {
      $( '.titulo' ).css({ 'opacity': '1', '-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent' });
      $('.cierre').css( 'transform', 'scaleX(1)' );
    }, 500);

    setTimeout(() => {
      $( '.contenido' ).css( 'opacity', '1' );
      $('.cierre .barra:first-child').css( 'transform', 'rotate( 45deg)' );
      $('.cierre .barra:last-child' ).css( 'transform', 'rotate(-45deg)' );
    }, 750);
  }

  private ocultarModal() {

    $( '.contenido' ).css( 'opacity', '' );

    $('.cierre .barra:first-child').css( 'transform', '' );
    $('.cierre .barra:last-child' ).css( 'transform', '' );
    
    setTimeout(() => {
      $( '.titulo' ).css( 'opacity', '' );
      $('.cierre').css( 'transform', '' );
    }, 250);
    
    setTimeout(() => {
      $( '.modal' ).css({ 'z-index': '', 'opacity': '' });
    }, 500);
  }
}
