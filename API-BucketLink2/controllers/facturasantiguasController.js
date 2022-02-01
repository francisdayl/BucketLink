var FacturasantiguasModel = require('../models/facturasantiguasModel.js');

/**
 * facturasantiguasController.js
 *
 * @description :: Server-side logic for managing facturasantiguass.
 */
module.exports = {

    /**
     * facturasantiguasController.list()
     */
    list: function (req, res) {
        FacturasantiguasModel.find(function (err, facturasantiguass) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting facturasantiguas.',
                    error: err
                });
            }

            return res.json(facturasantiguass);
        });
    },

    /**
     * facturasantiguasController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        FacturasantiguasModel.findOne({_id: id}, function (err, facturasantiguas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting facturasantiguas.',
                    error: err
                });
            }

            if (!facturasantiguas) {
                return res.status(404).json({
                    message: 'No such facturasantiguas'
                });
            }

            return res.json(facturasantiguas);
        });
    },

    /**
     * facturasantiguasController.create()
     */
    create: function (req, res) {
        var facturasantiguas = new FacturasantiguasModel({
			id_Cliente : req.body.id_Cliente,
			cantidad_Reportes : req.body.cantidad_Reportes,
			color_Fondo : req.body.color_Fondo,
			color_Letra : req.body.color_Letra,
			visitas : req.body.visitas,
			image : req.body.image
        });

        facturasantiguas.save(function (err, facturasantiguas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating facturasantiguas',
                    error: err
                });
            }

            return res.status(201).json(facturasantiguas);
        });
    },

    /**
     * facturasantiguasController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        FacturasantiguasModel.findOne({_id: id}, function (err, facturasantiguas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting facturasantiguas',
                    error: err
                });
            }

            if (!facturasantiguas) {
                return res.status(404).json({
                    message: 'No such facturasantiguas'
                });
            }

            facturasantiguas.id_Cliente = req.body.id_Cliente ? req.body.id_Cliente : facturasantiguas.id_Cliente;
			facturasantiguas.cantidad_Reportes = req.body.cantidad_Reportes ? req.body.cantidad_Reportes : facturasantiguas.cantidad_Reportes;
			facturasantiguas.color_Fondo = req.body.color_Fondo ? req.body.color_Fondo : facturasantiguas.color_Fondo;
			facturasantiguas.color_Letra = req.body.color_Letra ? req.body.color_Letra : facturasantiguas.color_Letra;
			facturasantiguas.visitas = req.body.visitas ? req.body.visitas : facturasantiguas.visitas;
			facturasantiguas.image = req.body.image ? req.body.image : facturasantiguas.image;
			
            facturasantiguas.save(function (err, facturasantiguas) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating facturasantiguas.',
                        error: err
                    });
                }

                return res.json(facturasantiguas);
            });
        });
    },

    /**
     * facturasantiguasController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        FacturasantiguasModel.findByIdAndRemove(id, function (err, facturasantiguas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the facturasantiguas.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
