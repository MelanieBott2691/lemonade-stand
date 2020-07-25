const router = require('express').Router();
const storesController = require('../../controllers/storesController');

// Matches with "/api/users"
router.route('/').get(storesController.findAll).post(storesController.create);

// Matches with "/api/users/:id"
router
  .route('/:id')
  .get(storesController.findById)
  .put(storesController.update)
  .delete(storesController.remove);

module.exports = router;
