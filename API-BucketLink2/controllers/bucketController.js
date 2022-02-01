var BucketModel = require('../models/bucketModel.js');

/**
 * bucketController.js
 *
 * @description :: Server-side logic for managing buckets.
 */
module.exports = {

    /**
     * bucketController.list()
     */
    list: function (req, res) {
        BucketModel.find(function (err, buckets) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bucket.',
                    error: err
                });
            }

            return res.json(buckets);
        });
    },

    /**
     * bucketController.show()
     */
    show: function (req, res) {
        var id = req.params.id_Cliente;

        BucketModel.findOne({visitas: id}, function (err, bucket) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bucket.',
                    error: err
                });
            }

            if (!bucket) {
                return res.status(404).json({
                    message: 'No such bucket'
                });
            }

            return res.json(bucket);
        });
    },

    /**
     * bucketController.create()
     */
    create: function (req, res) {
        var bucket = new BucketModel({
			id_Cliente : req.body.id_Cliente,
			cantidad_Reportes : req.body.cantidad_Reportes,
			color_Fondo : req.body.color_Fondo,
			color_Letra : req.body.color_Letra,
			visitas : req.body.visitas,
			image : req.body.image
        });

        bucket.save(function (err, bucket) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating bucket',
                    error: err
                });
            }

            return res.status(201).json(bucket);
        });
    },

    /**
     * bucketController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        BucketModel.findOne({_id: id}, function (err, bucket) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bucket',
                    error: err
                });
            }

            if (!bucket) {
                return res.status(404).json({
                    message: 'No such bucket'
                });
            }

            bucket.id_Cliente = req.body.id_Cliente ? req.body.id_Cliente : bucket.id_Cliente;
			bucket.cantidad_Reportes = req.body.cantidad_Reportes ? req.body.cantidad_Reportes : bucket.cantidad_Reportes;
			bucket.color_Fondo = req.body.color_Fondo ? req.body.color_Fondo : bucket.color_Fondo;
			bucket.color_Letra = req.body.color_Letra ? req.body.color_Letra : bucket.color_Letra;
			bucket.visitas = req.body.visitas ? req.body.visitas : bucket.visitas;
			bucket.image = req.body.image ? req.body.image : bucket.image;
			
            bucket.save(function (err, bucket) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating bucket.',
                        error: err
                    });
                }

                return res.json(bucket);
            });
        });
    },

    /**
     * bucketController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        BucketModel.findByIdAndRemove(id, function (err, bucket) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the bucket.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
