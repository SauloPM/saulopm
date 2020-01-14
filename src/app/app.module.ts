import { NgModule         } from '@angular/core';
import { BrowserModule    } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent          } from './app.component';
import { ModalComponent        } from './components/modal/modal.component';
import { HeaderComponent       } from './components/header/header.component';
import { NavbarComponent       } from './components/navbar/navbar.component';
import { ContactoComponent     } from './components/contacto/contacto.component';
import { ProyectosComponent    } from './components/proyectos/proyectos.component';
import { ConocimientoComponent } from './components/conocimiento/conocimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HeaderComponent,
    ProyectosComponent,
    NavbarComponent,
    ContactoComponent,
    ConocimientoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
