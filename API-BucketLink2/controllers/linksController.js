var LinksModel = require('../models/linksModel.js');

/**
 * linksController.js
 *
 * @description :: Server-side logic for managing linkss.
 */
module.exports = {

    /**
     * linksController.list()
     */
    list: function (req, res) {
        LinksModel.find(function (err, linkss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting links.',
                    error: err
                });
            }

            return res.json(linkss);
        });
    },

    /**
     * linksController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        LinksModel.find({idCliente : id}, function (err, links) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting links.',
                    error: err
                });
            }

            if (!links) {
                return res.status(404).json({
                    message: 'No such links'
                });
            }

            return res.json(links);
        });
    },

    /**
     * linksController.create()
     */
    create: function (req, res) {
        var links = new LinksModel({
			WebSiteURL : req.body.WebSiteURL,
			WebSiteNombre : req.body.WebSiteNombre,
			idCliente : req.body.idCliente,
			Imagen : req.body.Imagen,
			ColorFondo : req.body.ColorFondo,
			ColorLetra : req.body.ColorLetra,
			Visitas : req.body.Visitas
        });

        links.save(function (err, links) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating links',
                    error: err
                });
            }

            return res.status(201).json(links);
        });
    },

    /**
     * linksController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        LinksModel.findOne({idCliente: id}, function (err, links) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting links',
                    error: err
                });
            }

            if (!links) {
                return res.status(404).json({
                    message: 'No such links'
                });
            }

            links.WebSiteURL = req.body.WebSiteURL ? req.body.WebSiteURL : links.WebSiteURL;
			links.WebSiteNombre = req.body.WebSiteNombre ? req.body.WebSiteNombre : links.WebSiteNombre;
			links.idCliente = req.body.idCliente ? req.body.idCliente : links.idCliente;
			links.Imagen = req.body.Imagen ? req.body.Imagen : links.Imagen;
			links.ColorFondo = req.body.ColorFondo ? req.body.ColorFondo : links.ColorFondo;
			links.ColorLetra = req.body.ColorLetra ? req.body.ColorLetra : links.ColorLetra;
			links.Visitas = req.body.Visitas ? req.body.Visitas : links.Visitas;
			
            links.save(function (err, links) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating links.',
                        error: err
                    });
                }

                return res.json(links);
            });
        });
    },

    /**
     * linksController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        LinksModel.remove({idCliente: id}, function (err, links) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the links.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
