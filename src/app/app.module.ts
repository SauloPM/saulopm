import { NgModule         } from '@angular/core';
import { BrowserModule    } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Métodos HTTP
import { HttpClientModule } from '@angular/common/http';

// Formularios
import { FormsModule } from '@angular/forms';

// Componentes
import { AppComponent          } from './app.component';
import { ModalComponent        } from './components/modal/modal.component';
import { FooterComponent       } from './components/footer/footer.component';
import { HeaderComponent       } from './components/header/header.component';
import { InicioComponent       } from './components/inicio/inicio.component';
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
    InicioComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
