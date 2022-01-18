const express = require('express'),
	router = express.Router();
const Controller = require('../controllers/rolehaspermission');

router.get('/getAll', Controller.getAll);
router.post('/role/:roleId/permission/:permId', Controller.create);

module.exports = router;
