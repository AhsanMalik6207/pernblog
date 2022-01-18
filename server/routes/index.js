const express = require("express"),
<<<<<<< HEAD
router = express.Router();

const userprofileRoutes = require("./userprofile")
router.use("/userprofiles",userprofileRoutes);
=======
  router = express.Router();
const postRoutes = require("./post");
const commentRoutes = require("./comment");

router.use("/post", postRoutes);
router.use("/comment", commentRoutes);
router.use("/user", userRoutes);
>>>>>>> master
module.exports = router;