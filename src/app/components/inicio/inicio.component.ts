import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

// Componentes hijos
import { ModalComponent } from '../modal/modal.component';

// jQuery
declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  @ViewChild( ModalComponent, { static: true } ) modal: ModalComponent;

  showSpinner = true;
  proyectoID : string;

  constructor( private router: Router ) {
    this.showSpinner = this.router.getCurrentNavigation().extras.state ? false : true;
  }

  ngOnInit() {
    if ( this.showSpinner ) {
      this.hideSpinner();
    } else {
      this.smoothTransition();
    }
  }

  // ────────────── //
  //     NAVBAR     //
  // ────────────── //

  abrirContacto() {

    $( '.smooth-transition' ).css({ 'z-index': '100', 'opacity': '1' });

    setTimeout(() => {
      this.router.navigate( ['contacto'] );
    }, 500);

  }

  abrirConocimiento() {

    $( '.smooth-transition' ).css({ 'z-index': '100', 'opacity': '1' });

    setTimeout(() => {
      this.router.navigate( ['conocimiento'] );
    }, 500);

  }

  // ─────────────── //
  //     MODALES     //
  // ─────────────── //

  abrirModal( proyectoID ) {
    this.modal.abrirModal( proyectoID );
  }

  // ──────────────── //
  //     AUXILIAR     //
  // ──────────────── //

  private hideSpinner() {
    $(window).on( 'load', () => {
      $( '#preloader .spinner' ).fadeOut(500, function () {
          $( '#preloader' ).delay(500).fadeOut(500);
          setTimeout(function () { $( 'body' ).css( 'overflow', 'visible' ) }, 500);
      });
    });
  }

  private smoothTransition() {

    $( '.smooth-transition' ).css({ 'z-index': '100', 'opacity': '1' });

    setTimeout(() => {
      $( '.smooth-transition' ).css({ 'z-index': '-1', 'opacity': '0' });
    }, 500);
  }
}
