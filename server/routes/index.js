const express = require("express"),
  router = express.Router();
<<<<<<< HEAD
  
const catagoryRoutes = require('./catagory')
=======
>>>>>>> master
const postRoutes = require("./post");
const commentRoutes = require("./comment");
const userRoutes = require("./user");
const userprofileRoutes = require("./userprofile");
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);
<<<<<<< HEAD
router.use("/catagory",catagoryRoutes);


module.exports = router;
=======
router.use("/user", userRoutes);
router.use("/userprofile", userprofileRoutes);
module.exports = router;
>>>>>>> master
