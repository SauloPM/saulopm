import { NgModule             } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { InicioComponent       } from './components/inicio/inicio.component';
import { ContactoComponent     } from './components/contacto/contacto.component';
import { ConocimientoComponent } from './components/conocimiento/conocimiento.component';

const routes: Routes = [
  
  { path: 'inicio'      , component: InicioComponent       },
  { path: 'contacto'    , component: ContactoComponent     },
  { path: 'conocimiento', component: ConocimientoComponent },

  { path: ''  , pathMatch: 'full', redirectTo: 'inicio'},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
  
];

@NgModule({
  imports: [ RouterModule.forRoot( routes, { useHash: true } )],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
