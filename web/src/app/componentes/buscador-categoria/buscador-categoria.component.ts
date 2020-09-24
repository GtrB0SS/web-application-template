import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PublicacionesService } from '../../servicios/publicaciones.service';
import { Publicacion } from '../../modelos/publicacion';

@Component({
  selector: 'app-buscador-categoria',
  templateUrl: './buscador-categoria.component.html',
  styleUrls: ['./buscador-categoria.component.css']
})
export class BuscadorCategoriaComponent implements OnInit {

  publicaciones: Publicacion[] = [];
  categoria:string;

  constructor( private activatedRoute: ActivatedRoute, private _publicacionesService: PublicacionesService) { }

  ngOnInit()  {

    this.activatedRoute.params.subscribe( params =>{
      this.categoria = params['categoria'];
      this._publicacionesService.buscarPublicacionesCategoria(this.categoria)
        .subscribe( (publicaciones: any)  => this.publicaciones = publicaciones);
    });
  }

}





