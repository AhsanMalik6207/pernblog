const express = require("express"),
  router = express.Router();
const postRoutes = require("./post");
const commentRoutes = require("./comment");

router.use("/post", postRoutes);
router.use("/comment", commentRoutes);
router.use("/user", userRoutes);
module.exports = router;
