const express = require('express'),
	router = express.Router();
const Controller = require('../controllers/rolehaspermission');
const checkAuthMiddleware = require('../middleware/check-auth');

router.get('/getAll', Controller.getAll);
router.post('/role/:roleId/permission/:permissionId',checkAuthMiddleware.checkAuth ,Controller.create);
router.delete('/:rolehaspermissionId/delete', checkAuthMiddleware.checkAuth,Controller.delete);
module.exports = router;
