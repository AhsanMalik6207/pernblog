const express = require("express"),
  router = express.Router();
const postRoutes = require("./post");
const commentRoutes = require("./comment");
const userRoutes = require("./user");
const userprofileRoutes = require("./userprofile");
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);
router.use("/user", userRoutes);
router.use("/userprofile", userprofileRoutes);
module.exports = router;