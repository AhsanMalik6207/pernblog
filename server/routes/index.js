const express = require("express"),
router = express.Router();

const userprofileRoutes = require("./userprofile")
router.use("/userprofile",userprofileRoutes);
module.exports = router;