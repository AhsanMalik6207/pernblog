const express = require("express"),
  router = express.Router();
  
const catagoryRoutes = require('./catagory')
const postRoutes = require("./post");
const commentRoutes = require("./comment");

router.use("/post", postRoutes);
router.use("/comment", commentRoutes);
router.use("/catagory",catagoryRoutes);


module.exports = router;
