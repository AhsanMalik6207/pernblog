const express = require("express"),
  router = express.Router();

const userRoutes = require("./user");
const userprofileRoutes = require("./userprofile");
const categoryRoutes = require('./category')
const permissionRoutes = require('./permission');
const roleRoutes = require('./role');
const rolehaspermissionRoutes = require('./rolehaspermission');

router.use("/user", userRoutes);
router.use("/userprofile", userprofileRoutes);
router.use("/category", categoryRoutes);
router.use('/rolehaspermission', rolehaspermissionRoutes);
router.use('/role', roleRoutes);
router.use('/permission', permissionRoutes);


module.exports = router;
