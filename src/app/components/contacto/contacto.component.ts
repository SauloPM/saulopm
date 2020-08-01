import { Router } from '@angular/router';
import { Component, AfterViewInit } from '@angular/core';

// Manejo de formularios
import { NgForm } from '@angular/forms';

// Métodos HTTP
import { HttpClient } from '@angular/common/http';

// jQuery
declare var $: any; 

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements AfterViewInit {

  nombre  : string;
  email   : string;
  asunto  : string;
  mensaje : string;
  endpoint: string = 'https://saulopm.com/proyectos/enviaremail.php';

  constructor( private router: Router, private http: HttpClient ) { }

  ngAfterViewInit() {
    this.mostrarPagina();
  }

  volverPaginaInicio() {
    this.ocultarPagina();
  }

  enviarEmail( formulario: NgForm ) {

    if ( this.existenCamposVacios() ) {
      return;
    }

    const parametros = {
      nombre : this.nombre,
      email  : this.email,
      asunto : this.asunto,
      mensaje: this.mensaje
    };

    // Enviamos el emial con todos los datos
    this.http.post( this.endpoint, parametros ).subscribe();

    // Volvemos a la página de inicio
    // this.router.navigateByUrl( 'inicio', { state: { showSpinner: false }});
  }

  // ──────────────── //
  //     AUXILIAR     //
  // ──────────────── //

  private mostrarPagina() {

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
      $('.formulario').css( 'opacity', '1' );
    }, 1000);
  }

  private ocultarPagina() {

    // Cierre
    $('.cierre .barra:first-child').css( 'transform', 'rotate(0)' );
    $('.cierre .barra:last-child' ).css( 'transform', 'rotate(0)' );

    // Formulario
    $('.formulario').css( 'opacity', '0' );

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

  private existenCamposVacios() {

    if ( $('.entrada[name="nombre"]').val().trim() === '' ) {
      this.resaltarCampo( '.entrada[name="nombre"]' );
      return true;
    }

    if ( $('.entrada[name="asunto"]').val().trim() === '' ) {
      this.resaltarCampo( '.entrada[name="asunto"]' );
      return true;
    }

    if ( $('.entrada[name="mensaje"]').val().trim() === '' ) {
      this.resaltarCampo( '.entrada[name="mensaje"]' );
      return true;
    }
  }

  private resaltarCampo( selectorCSS: string ) {

    $( selectorCSS ).css( 'border-color', 'red' );

    setTimeout(() => {
      $( selectorCSS ).css( 'border-color', '' );
    }, 500);
  }
}
