import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PublicacionesService } from '../../servicios/publicaciones.service';
import { Publicacion } from '../../modelos/publicacion';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {


  //publicaciones: Publicacion;
  publicaciones: Publicacion[] = [];

  idPublicacion:string; 
  activatedRoute: any;
  
  constructor(  private route: ActivatedRoute, 
    private publicacionService$: PublicacionesService,
    private router: Router,
    private _route: ActivatedRoute,
    private _publicacionesService: PublicacionesService,
    ) { }

  ngOnInit()  {

  
      this._publicacionesService.getFavoritos()
        .subscribe( (publicaciones: Publicacion[])  => this.publicaciones = publicaciones);
    
  }









}

