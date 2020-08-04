const router = require('express').Router();
const loginController = require('../../controllers/loginController');

// Matches with "/api/register"
router.route('/').post(loginController.loginUser);

module.exports = router;
