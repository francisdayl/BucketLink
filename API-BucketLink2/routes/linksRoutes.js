var express = require('express');
var router = express.Router();
var linksController = require('../controllers/linksController.js');

/*
 * GET
 */
router.get('/', linksController.list);

/*
 * GET
 */
router.get('/:id', linksController.show);

/*
 * POST
 */
router.post('/', linksController.create);

/*
 * PUT
 */
router.put('/:id', linksController.update);

/*
 * DELETE
 */
router.delete('/:id', linksController.remove);

module.exports = router;
