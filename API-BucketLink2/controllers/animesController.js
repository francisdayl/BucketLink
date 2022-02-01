var AnimesModel = require('../models/animesModel.js');

/**
 * animesController.js
 *
 * @description :: Server-side logic for managing animess.
 */
module.exports = {

    /**
     * animesController.list()
     */
    list: function (req, res) {
        AnimesModel.find(function (err, animess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting animes.',
                    error: err
                });
            }

            return res.json(animess);
        });
    },

    /**
     * animesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        AnimesModel.findOne({_id: id}, function (err, animes) {

            



            if (err) {
                return res.status(500).json({
                    message: 'Error when getting animes.',
                    error: err
                });
            }

            if (!animes) {
                return res.status(404).json({
                    message: 'No such animes'
                });
            }

            return res.json(animes);
        });
    },

    /**
     * animesController.create()
     */
    create: function (req, res) {
        var animes = new AnimesModel({
			ID : req.body.ID,
			Title : req.body.Title,
			Image : req.body.Image,
			Synopsis : req.body.Synopsis,
			Type : req.body.Type,
			Source : req.body.Source,
			Score : req.body.Score,
			URL : req.body.URL
        });

        animes.save(function (err, animes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating animes',
                    error: err
                });
            }

            return res.status(201).json(animes);
        });
    },

    /**
     * animesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        AnimesModel.findOne({_id: id}, function (err, animes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting animes',
                    error: err
                });
            }

            if (!animes) {
                return res.status(404).json({
                    message: 'No such animes'
                });
            }

            animes.ID = req.body.ID ? req.body.ID : animes.ID;
			animes.Title = req.body.Title ? req.body.Title : animes.Title;
			animes.Image = req.body.Image ? req.body.Image : animes.Image;
			animes.Synopsis = req.body.Synopsis ? req.body.Synopsis : animes.Synopsis;
			animes.Type = req.body.Type ? req.body.Type : animes.Type;
			animes.Source = req.body.Source ? req.body.Source : animes.Source;
			animes.Score = req.body.Score ? req.body.Score : animes.Score;
			animes.URL = req.body.URL ? req.body.URL : animes.URL;
			
            animes.save(function (err, animes) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating animes.',
                        error: err
                    });
                }

                return res.json(animes);
            });
        });
    },

    /**
     * animesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        AnimesModel.findByIdAndRemove(id, function (err, animes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the animes.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
