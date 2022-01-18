const express = require('express'),
	router = express.Router();
const Controller = require('../controllers/role');

router.get('/getAll', Controller.getAll);
router.delete('/:roleId/delete', Controller.delete);
router.post('/create', Controller.create);
router.put('/:roleId/update', Controller.update);

module.exports = router;
