import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { APP_ROUTING } from './app.routes';

import { PublicacionesService } from './servicios/publicaciones.service';




import { AppComponent } from './app.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { PublicacionComponent } from './componentes/publicacion/publicacion.component';
import { PublicacionesComponent } from './componentes/publicaciones/publicaciones.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PublicacionDetalleComponent } from './componentes/publicacion-detalle/publicacion-detalle.component';
import { CompartirComponent } from './componentes/compartir/compartir.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BuscadorCategoriaComponent } from './componentes/buscador-categoria/buscador-categoria.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    PublicacionComponent,
    PublicacionesComponent,
    HomeComponent,
    NavbarComponent,
    PublicacionDetalleComponent,
    CompartirComponent,
    FooterComponent,
    BuscadorCategoriaComponent,
    FavoritosComponent
    
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    PublicacionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
