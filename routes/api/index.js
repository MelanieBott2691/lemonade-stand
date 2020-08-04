const router = require('express').Router();
const userRoutes = require('./users');
const registerRoutes = require('./register');
const storeRoutes = require('./stores');
const itemRoutes = require('./items');
const reviewRoutes = require('./reviews');
const purchaseRoutes = require('./purchases');

// Book routes
router.use('/users', userRoutes);
router.use('/register', registerRoutes);
router.use('/stores', storeRoutes);
router.use('/items', itemRoutes);
router.use('/reviews', reviewRoutes);
router.use('/purchases', purchaseRoutes);

module.exports = router;
