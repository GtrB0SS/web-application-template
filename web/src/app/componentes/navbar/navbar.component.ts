import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor( private router: Router ) { }

  buscarNoticia( terminoBusqueda: string ) {
    this.router.navigate( ['/buscar', terminoBusqueda] );
  }

  buscarCat( categoria: string ) {
    this.router.navigate( ['/buscarCategoria', categoria] );
  }
   
}
