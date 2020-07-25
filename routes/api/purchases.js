const router = require('express').Router();
const purchasesController = require('../../controllers/purchasesController');

// Matches with "/api/users"
router
  .route('/')
  .get(purchasesController.findAll)
  .post(purchasesController.create);

// Matches with "/api/users/:id"
router
  .route('/:id')
  .get(purchasesController.findById)
  .put(purchasesController.update)
  .delete(purchasesController.remove);

module.exports = router;
