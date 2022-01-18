const express = require("express"),
  router = express.Router();
const Controller = require("../controllers/category");

router.get("/getAll", Controller.getAll);
router.post("/create", Controller.create);
router.put("/:categoryId/update", Controller.update);
router.delete("/:categoryId/delete", Controller.delete);
router.get("/search", Controller.search);

module.exports = router;
