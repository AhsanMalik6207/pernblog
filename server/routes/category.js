const express = require("express"),
  router = express.Router();
const Controller = require("../controllers/category");
const checkAuthMiddleware = require('../middleware/check-auth');

router.get("/getAll", Controller.getAll);
router.post("/create", checkAuthMiddleware.checkAuth,Controller.create);
router.put("/:categoryId/update", checkAuthMiddleware.checkAuth,Controller.update);
router.delete("/:categoryId/delete", checkAuthMiddleware.checkAuth,Controller.delete);
router.get("/search", Controller.search);

module.exports = router;
