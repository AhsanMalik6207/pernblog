const express = require("express"),
<<<<<<< HEAD
  router = express.Router();

=======
    router = express.Router();
>>>>>>> b588d24 (Refresh token, Access token JWT)
const postRoutes = require("./post");
const commentRoutes = require("./comment");

router.use("/post", postRoutes);
router.use("/comment", commentRoutes);
router.use("/user", userRoutes);
module.exports = router;
