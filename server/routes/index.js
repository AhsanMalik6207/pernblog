const express = require('express'),
	router = express.Router();

const permRoutes = require('./permission');
const roleRoutes = require('./role');
const rpRoutes = require('./rolePermission');

const userRoutes = require('./user');
const postRoutes = require('./post');
const commentRoutes = require('./comment');
// const roleRoutes = require('./role');

router.use('/', rpRoutes);
router.use('/role', roleRoutes);
router.use('/permission', permRoutes);
router.use('/comment', commentRoutes);
router.use('/user', userRoutes);

module.exports = router;
