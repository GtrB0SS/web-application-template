const MongoLib = require('../lib/mongo');

class PublicacionesService {

    constructor(){
        this.collection = 'noticias';
        this.mongoDB = new MongoLib();
    }

    async getPublicaciones() {
        const publicaciones = await this.mongoDB.getPublicaciones(this.collection);
        return publicaciones || [];
    }

    async getPublicacion(publicacionId){
        const publicacion = await this.mongoDB.getPublicacion(this.collection, publicacionId);
        return publicacion || [];
    }
    
    
    async actualizarPublicacion( publicacionId, data){
        const publicacionActualizadaId = await this.mongoDB.actualizarPublicacion(this.collection, publicacionId, data);
        return publicacionActualizadaId || [];
    }

    async getFavoritos() {
        const publicaciones = await this.mongoDB.getFavoritos(this.collection);
        return publicaciones || [];
    }

}

module.exports = PublicacionesService