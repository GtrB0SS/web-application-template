import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PublicacionesService } from '../../servicios/publicaciones.service';
import { Publicacion } from '../../modelos/publicacion';


@Component({
  selector: 'app-publicacion-detalle',
  templateUrl: './publicacion-detalle.component.html',
  styleUrls: ['./publicacion-detalle.component.css']
})
export class PublicacionDetalleComponent implements OnInit {

  publicacion: Publicacion;
  favorito: boolean;


  constructor(  private route: ActivatedRoute, 
                private publicacionService$: PublicacionesService,
                private router: Router,
                private _route: ActivatedRoute,
                private _publicacionesService: PublicacionesService
                ) {
    const idPublicacion= this._route.snapshot.paramMap.get('id');

 
    
   }






ngOnInit(): void {
    
  let idPublicacion = this.route.snapshot.params['id'];
  this.publicacionService$.getPublicacion(idPublicacion).subscribe((publicaciones: Publicacion) => {
    this.publicacion = publicaciones;
    this.favorito = this.publicacion.favoritos;
  });

}

modificarPubli(idPublicacion, fav = true) {
  this.publicacion.favoritos = fav;
  this.favorito = this.publicacion.favoritos;
  this.publicacionService$.modificarPublicacion(idPublicacion, fav).subscribe();
}
}














