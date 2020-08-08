const router = require('express').Router();
const itemsController = require('../../controllers/itemsController');

// Matches with "/api/search"
router.route('/').post(itemsController.find);

module.exports = router;
