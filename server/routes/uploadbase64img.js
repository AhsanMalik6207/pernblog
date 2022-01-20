const express = require("express"),
  router = express.Router();
const Controller = require("../controllers/uploadbase64img");
router.post('/image', Controller.uploadImage)
module.exports = router;