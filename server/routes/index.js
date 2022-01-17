const express = require("express"),
router = express.Router();

const userprofileRoutes = require("./userprofile")
router.use("/userprofiles",userprofileRoutes);
module.exports = router;