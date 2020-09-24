import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  url = 'https://publicacionesapi.now.sh/api/publicaciones';
  constructor(private http: HttpClient) {

   }

   getPublicaciones() {
    return this.http.get(this.url);
   }

   getPublicacion(id) {

    return this.http.get(this.url+ `/${id}`);
  }

  

  modificarPublicacion(id, fav = true){
     return this.http.put(this.url + `/${id}`, {favorito: fav});
  } 
  
  getFavoritos(){
    return this.http.get(this.url + "/favoritos");
  }




 


  buscarPublicacionesCategoria( terminoBuscar: string ) {

    return this.http.get(this.url)
      .pipe ( 
          map ( (res: any) => res.filter ( 
           p=> (p.categoria.toLowerCase().includes(terminoBuscar.toLowerCase())) 
          )
      )
    )
  }


  buscarPublicaciones( terminoBuscar: string ) {

    return this.http.get(this.url)
      .pipe ( 
          map ( (res: any) => res.filter ( 
           p=> (p.categoria.toLowerCase().includes(terminoBuscar.toLowerCase())) || (p.titulo.toLowerCase().includes(terminoBuscar.toLowerCase()))
          )
      )
    )
  }

 


}
