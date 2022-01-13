const express = require("express"),
  router = express.Router();
const Controller = require("../controllers/post");

router.get("/getAll", Controller.getAll);

router.post("/create", Controller.create);

module.exports = router;
