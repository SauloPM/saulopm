import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// jQuery
declare var $: any; 

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {

    setTimeout(() => {
      $('.cabecera').css( 'opacity', '1' );
      $('.cierre').css( 'transform', 'scaleX(1)' );
    }, 500);

    setTimeout(() => {
      $('.cierre .barra:first-child').css( 'transform', 'rotate( 45deg)' );
      $('.cierre .barra:last-child' ).css( 'transform', 'rotate(-45deg)' );
    }, 750);

    setTimeout(() => {
      $('.datos-contacto').css( 'opacity', '.5' );
      $('.formulario').css( { 'opacity': '1', 'margin-top': '-135px' } );
    }, 1000);

  }

  volverPaginaInicio() {

    // Cierre
    $('.cierre .barra:first-child').css( 'transform', 'rotate(0)' );
    $('.cierre .barra:last-child' ).css( 'transform', 'rotate(0)' );

    // Formulario
    $('.formulario').css( { 'opacity': '0', 'margin-top': '-150px' } );

    // Datos de contacto
    $('.datos-contacto').css( 'opacity', '0' );
    
    setTimeout(() => {
      $('.cierre').css( 'transform', 'scaleX(0)' );
    }, 250);

    setTimeout(() => {
      $('.cabecera').css( 'opacity', '0' );
    }, 500);

    setTimeout(() => {
      this.router.navigate( ['inicio'] );
    }, 1500);
  }
}
