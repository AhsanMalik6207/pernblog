const express = require('express'),
	router = express.Router();
const Controller = require('../controllers/permission');
const checkAuthMiddleware = require('../middleware/check-auth');

router.get('/getAll', Controller.getAll);
router.post('/create', checkAuthMiddleware.checkAuth,Controller.create);
router.delete('/:permissionId/delete', checkAuthMiddleware.checkAuth,Controller.delete);
router.put('/:permissionId/update', checkAuthMiddleware.checkAuth,Controller.update);

module.exports = router;
