import { RouterModule, Routes } from '@angular/router';

import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { PublicacionComponent } from './componentes/publicacion/publicacion.component';
import { PublicacionesComponent } from './componentes/publicaciones/publicaciones.component';
import { HomeComponent } from './componentes/home/home.component';
import { PublicacionDetalleComponent } from './componentes/publicacion-detalle/publicacion-detalle.component';
import { BuscadorCategoriaComponent } from './componentes/buscador-categoria/buscador-categoria.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';



const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'publicacion/:id', component:  PublicacionDetalleComponent},
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'buscarCategoria/:categoria', component: BuscadorCategoriaComponent },
  { path: 'favoritos', component:FavoritosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
