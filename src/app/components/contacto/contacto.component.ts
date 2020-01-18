import { Router } from '@angular/router';
import { Component, AfterViewInit, OnInit } from '@angular/core';

// Métodos HTTP
import { HttpClient } from '@angular/common/http';

// jQuery
declare var $: any; 

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements AfterViewInit, OnInit {

  name    : string;
  email   : string;
  message : string;
  endpoint: string;

  constructor( private router: Router, private http: HttpClient ) { }

  ngOnInit() {

    // This data could really come from some inputs on the interface - but let's keep it simple
    this.name    = 'Saulo Poveda Montesdeoca';
    this.email   = 'info@saulopm.com';
    this.message = 'Hello, this is Hayden.';

    // Start PHP via the built in server: $ php -S localhost:8000
    this.endpoint = 'https://saulopm.com/proyectos/email/sendemail.php';
  }

  ngAfterViewInit() {

    const marginTop = parseInt( $( '.formulario' ).css( 'marginTop' ));

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
      $('.formulario').css( { 'opacity': '1', 'margin-top': marginTop - 15 } );
    }, 1000);
  }

  volverPaginaInicio() {

    const marginTop = parseInt( $( '.formulario' ).css( 'marginTop' ));

    // Cierre
    $('.cierre .barra:first-child').css( 'transform', 'rotate(0)' );
    $('.cierre .barra:last-child' ).css( 'transform', 'rotate(0)' );

    // Formulario
    $('.formulario').css( { 'opacity': '0', 'margin-top': marginTop + 15 } );

    // Datos de contacto
    $('.datos-contacto').css( 'opacity', '0' );

    setTimeout(() => {
      $('.cierre').css( 'transform', 'scaleX(0)' );
    }, 250);

    setTimeout(() => {
      $('.cabecera').css( 'opacity', '0' );
    }, 500);

    setTimeout(() => {
      this.router.navigateByUrl( 'inicio', { state: { showSpinner: false }});
    }, 1500);

  }

  enviarEmail() {

    const parametros = {
      name   : this.name,
      email  : this.email,
      message: this.message
    };

    // You may also want to check the response. But again, let's keep it simple
    this.http.post( this.endpoint, parametros ).subscribe(
      response => console.log( response ),
      response => console.log( response )
    );
  }
}
