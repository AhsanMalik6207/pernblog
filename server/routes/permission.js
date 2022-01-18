const express = require('express'),
	router = express.Router();
const Controller = require('../controllers/permission');

router.get('/getAll', Controller.getAll);
router.post('/create', Controller.create);
router.delete('/:permId/delete', Controller.delete);
router.put('/:permId/update', Controller.update);

module.exports = router;
