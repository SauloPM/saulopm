import { Component, OnInit } from '@angular/core';

// jQuery
declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(window).on( 'load', () => {
      hideSpinner();

      function hideSpinner () {
        $( '#preloader .spinner' ).fadeOut(500, function () {
            $( '#preloader' ).delay(500).fadeOut(500);
            setTimeout(function () { $( 'body' ).css( 'overflow', 'visible' ) }, 500);
        });
      }
    });
  }
}
