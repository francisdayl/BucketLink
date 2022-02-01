var express = require('express');
const { json } = require('express/lib/response');
var router = express.Router();

var bucketController = require('../controllers/bucketController.js');

var facturasantiguasController = require('../controllers/facturasantiguasController.js');
var animesController = require('../controllers/animesController.js');
var AnimeModel = require('../models/animesModel');


/* GET home page. */
router.get("/", bucketController.list)
router.get("/:id_Cliente", bucketController.show)

/*
router.get('/', function(req, res, next) {

    AnimeModel.find(function (err, animes) {
        if (err) {
            return res.status(500).json({
                message: 'Error when getting animes.',
                error: err
            });
        }

        return  res.render('index.ejs', {
     
       
        animes: animes
    });
    return res.send(animes)
    });
 */
   /* res.render('index', { 
     title: 'Prueba',
     asd: "facturasantiguasController.list",
     practices: req });

  


});*/


router.get('/:idAnime', function(req, res, next) {

    var id = req.params.idAnime;

    AnimeModel.findOne({ID: id}, function (err, animes) {
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

        AnimeModel.find({Type: animes.Type}, function (err2 , sorted){

            if (err2) {
                return res.status(500).json({
                    message: 'Error when getting sorted Animes.',
                    error: err2
                });
            }
         
           
            
            const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)
            shuffle(sorted);
            return res.render('anime', { 
                               
                animes: animes,
                sorted: sorted.slice(0,4) });
        });
    });

 
 

});


module.exports = router;
