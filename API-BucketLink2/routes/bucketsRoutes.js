var express = require('express');
var router = express.Router();
var bucketsController = require('../controllers/bucketsController.js');

/*
 * GET
 */
router.get('/', bucketsController.list);

/*
 * GET
 */
router.get('/:id', bucketsController.show);

/*
 * POST
 */
router.post('/', bucketsController.create);

/*
 * PUT
 */
router.put('/:id', bucketsController.update);

/*
 * DELETE
 */
router.delete('/:id', bucketsController.remove);

module.exports = router;
