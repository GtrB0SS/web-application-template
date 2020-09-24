import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from '../../modelos/publicacion';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent {

    @Input() publicacion: Publicacion ;

    constructor(private router: Router) {
    }

    verPublicacion() {
      this.router.navigate( ['/publicacion', this.publicacion.id] );
    }

}
