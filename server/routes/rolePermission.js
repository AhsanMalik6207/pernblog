const express = require('express'),
	router = express.Router();
const Controller = require('../controllers/role_permissions');

router.get('/getAll', Controller.getAll);

router.post('/role/:roleId/permission/:permId', Controller.create);

module.exports = router;
