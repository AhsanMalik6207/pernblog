const express = require('express'),
	router = express.Router();
const Controller = require('../controllers/post');

router.get('/getAll', Controller.getAll);

router.delete('/delete/:postId', Controller.delete);

router.post('/create', Controller.create);

router.put('/update/:postId', Controller.update);

module.exports = router;
