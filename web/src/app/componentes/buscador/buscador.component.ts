import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PublicacionesService } from '../../servicios/publicaciones.service';
import { Publicacion } from '../../modelos/publicacion';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  publicaciones: Publicacion[] = [];
  terminoBusqueda:string;
  categoria:string;
  constructor( private activatedRoute: ActivatedRoute, private _publicacionesService: PublicacionesService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.terminoBusqueda = params['termino'];
      this._publicacionesService.buscarPublicaciones(this.terminoBusqueda)
        .subscribe( (publicaciones: any)  => this.publicaciones = publicaciones);
    });

  

  }
  

}
