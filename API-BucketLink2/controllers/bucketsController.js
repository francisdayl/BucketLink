var BucketsModel = require('../models/bucketsModel.js');

/**
 * bucketsController.js
 *
 * @description :: Server-side logic for managing bucketss.
 */
module.exports = {

    /**
     * bucketsController.list()
     */
    list: function (req, res) {
        BucketsModel.find(function (err, bucketss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting buckets.',
                    error: err
                });
            }

            return res.json(bucketss);
        });
    },

    /**
     * bucketsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        BucketsModel.findOne({idCliente: id}, function (err, buckets) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting buckets.',
                    error: err
                });
            }

            if (!buckets) {
                return res.status(404).json({
                    message: 'No such buckets'
                });
            }

            return res.json(buckets);
        });
    },

    /**
     * bucketsController.create()
     */
    create: function (req, res) {
        var buckets = new BucketsModel({
			WebSiteURL : req.body.WebSiteURL,
			UserName : req.body.UserName,
			FechaVisita : req.body.FechaVisita
        });

        buckets.save(function (err, buckets) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating buckets',
                    error: err
                });
            }

            return res.status(201).json(buckets);
        });
    },

    /**
     * bucketsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        BucketsModel.findOne({_id: id}, function (err, buckets) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting buckets',
                    error: err
                });
            }

            if (!buckets) {
                return res.status(404).json({
                    message: 'No such buckets'
                });
            }

            buckets.WebSiteURL = req.body.WebSiteURL ? req.body.WebSiteURL : buckets.WebSiteURL;
			buckets.UserName = req.body.UserName ? req.body.UserName : buckets.UserName;
			buckets.FechaVisita = req.body.FechaVisita ? req.body.FechaVisita : buckets.FechaVisita;
			
            buckets.save(function (err, buckets) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating buckets.',
                        error: err
                    });
                }

                return res.json(buckets);
            });
        });
    },

    /**
     * bucketsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        BucketsModel.findByIdAndRemove(id, function (err, buckets) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the buckets.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
