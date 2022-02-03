var NoticiasModel = require('../models/noticiasModel.js');

/**
 * noticiasController.js
 *
 * @description :: Server-side logic for managing noticiass.
 */
module.exports = {

    /**
     * noticiasController.list()
     */
    list: function (req, res) {
        NoticiasModel.find(function (err, noticiass) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting noticias.',
                    error: err
                });
            }

            return res.json(noticiass);
        });
    },

    /**
     * noticiasController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        NoticiasModel.findOne({id_noticias: id}, function (err, noticias) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting noticias.',
                    error: err
                });
            }

            if (!noticias) {
                return res.status(404).json({
                    message: 'No such noticias'
                });
            }

            return res.json(noticias);
        });
    },

    /**
     * noticiasController.create()
     */
    create: function (req, res) {
        var noticias = new NoticiasModel({
			id_noticias : req.body.id_noticias,
			titulo : req.body.titulo,
			descripcion : req.body.descripcion,
			imagen : req.body.imagen
        });

        noticias.save(function (err, noticias) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating noticias',
                    error: err
                });
            }

            return res.status(201).json(noticias);
        });
    },

    /**
     * noticiasController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        NoticiasModel.findOne({_id: id}, function (err, noticias) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting noticias',
                    error: err
                });
            }

            if (!noticias) {
                return res.status(404).json({
                    message: 'No such noticias'
                });
            }

            noticias.id_noticias = req.body.id_noticias ? req.body.id_noticias : noticias.id_noticias;
			noticias.titulo = req.body.titulo ? req.body.titulo : noticias.titulo;
			noticias.descripcion = req.body.descripcion ? req.body.descripcion : noticias.descripcion;
			noticias.imagen = req.body.imagen ? req.body.imagen : noticias.imagen;
			
            noticias.save(function (err, noticias) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating noticias.',
                        error: err
                    });
                }

                return res.json(noticias);
            });
        });
    },

    /**
     * noticiasController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        NoticiasModel.findByIdAndRemove(id, function (err, noticias) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the noticias.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
