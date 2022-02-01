var express = require('express');
var router = express.Router();
var bucketController = require('../controllers/bucketController.js');

/*
 * GET
 */
router.get('/', bucketController.list);

/*
 * GET
 */
router.get('/:id', bucketController.show);

/*
 * POST
 */
router.post('/', bucketController.create);

/*
 * PUT
 */
router.put('/:id', bucketController.update);

/*
 * DELETE
 */
router.delete('/:id', bucketController.remove);

module.exports = router;
