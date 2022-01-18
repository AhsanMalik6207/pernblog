const express = require('express'),
	router = express.Router();
const Controller = require('../controllers/role');
const checkAuthMiddleware = require('../middleware/check-auth');

router.get('/getAll', Controller.getAll);
router.post('/:userId/create', checkAuthMiddleware.checkAuth,Controller.create);
router.delete('/:roleId/delete', checkAuthMiddleware.checkAuth,Controller.delete);
router.put('/:roleId/update', checkAuthMiddleware.checkAuth,Controller.update);

module.exports = router;
