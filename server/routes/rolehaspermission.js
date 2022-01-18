const express = require('express'),
	router = express.Router();
const Controller = require('../controllers/rolehaspermission');
const checkAuthMiddleware = require('../middleware/check-auth');

router.get('/getAll', Controller.getAll);
router.post('/role/:roleId/permission/:permId',checkAuthMiddleware.checkAuth ,Controller.create);

module.exports = router;
