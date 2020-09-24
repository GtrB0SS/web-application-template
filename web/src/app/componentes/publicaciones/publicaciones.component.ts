import { Component, OnInit } from '@angular/core';

import { PublicacionesService } from '../../servicios/publicaciones.service';
import { Router } from '@angular/router';

import { Publicacion } from '../../modelos/publicacion';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html', 
  styleUrls: ['./publicaciones.component.css']

})
export class PublicacionesComponent implements OnInit {

  publicaciones: Publicacion[] = [];

  constructor( private _publicacionesService: PublicacionesService,
               private router: Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
    this._publicacionesService.getPublicaciones()
      .subscribe( (publicaciones: Publicacion[])  => this.publicaciones = publicaciones);
  }


  verPublicacion( id: number ) {
    this.router.navigate( ['/publicacion-detalle', id] );
  }

}
