var express = require('express');
var router = express.Router();
var noticiasController = require('../controllers/noticiasController.js');

/*
 * GET
 */
router.get('/', noticiasController.list);

/*
 * GET
 */
router.get('/:id', noticiasController.show);

/*
 * POST
 */
router.post('/', noticiasController.create);

/*
 * PUT
 */
router.put('/:id', noticiasController.update);

/*
 * DELETE
 */
router.delete('/:id', noticiasController.remove);

module.exports = router;
