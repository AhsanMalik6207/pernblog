const express = require("express");
  router = express.Router();
const Controller = require("../controllers/post");
const fs=require('fs');

const multer=require('multer');
const upload=multer({dest:"./images"});
router.get("/getAll", Controller.getAll);

router.post("/create",upload.single('file'),Controller.create);
router.delete("/delete/:PostId", Controller.delete);
router.put("/put/:PostId",Controller.update);

module.exports = router;
