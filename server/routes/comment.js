const express = require("express"),
  router = express.Router();
const Controller = require("../controllers/comment");

router.get("/getAll", Controller.getAll);
router.post("/create", Controller.create);
router.put("/:commentId/update", Controller.update);
router.delete("/:commentId/delete", Controller.delete);
module.exports = router;
