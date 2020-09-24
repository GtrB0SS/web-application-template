const express = require('express');

const PublicacionesService = require('../servicios/publicacionesService');

function publicacionesAPI(app) {
    const router = express.Router();
    app.use('index.html',express.static('/public'));

    app.use('/api/publicaciones', router);

    const publicacionesService = new PublicacionesService();

    router.get('/favoritos', async function(req, res, next) {
        console.log("hola");

        try {
            const publicaciones = await publicacionesService.getFavoritos();
            res.status(200).json(publicaciones);
        } catch (err){
            next(err);
        }
    })

    router.get('/', async function (req, res, next) {
        try {
            const publicaciones = await publicacionesService.getPublicaciones();
            res.status(200).json(publicaciones);
        } catch (err){
            next(err);
        }
    })

    router.get('/:publicacionId', async function (req, res, next) {
        const publicacionId  = req.params.publicacionId;
        //console.log(`buscando publicacion ${publicacionId}`);
        try {
            const publicacion = await publicacionesService.getPublicacion(publicacionId);
            res.status(200).json(publicacion);

        } catch (err) {
            next(err);
        }

    })




    router.put('/:publicacionId', async function (req, res, next) {
        const  publicacionId  = req.params.publicacionId;
        const  favoritos  = req.body; 

        try {
            const publicacionActualizada = await publicacionesService.actualizarPublicacion(publicacionId, favoritos.favorito);

            res.status(200).json(publicacionActualizada);
        } catch (err) {
            next(err);
        }

    })





   











}

module.exports = publicacionesAPI;