import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../servicios/publicaciones.service';

import { Publicacion } from '../../modelos/publicacion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  publicaciones: Publicacion[] = [];

  constructor( private _publicacionesService: PublicacionesService) {}

  ngOnInit() {
    this._publicacionesService.getPublicaciones()
      .subscribe( (publicaciones: any)  => this.publicaciones = publicaciones);
  }

}


