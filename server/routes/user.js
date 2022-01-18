const express = require('express'),
	router = express.Router();
const Controller = require('../controllers/user');

router.get('/getAll', Controller.getAll);

// router.delete('/delete/:postId', Controller.delete);

router.post('/create', Controller.create);
router.delete('/delete/:userId', Controller.delete);
router.put('/update/:userId', Controller.update);

// router.put('/update/:postId', Controller.update);

module.exports = router;
