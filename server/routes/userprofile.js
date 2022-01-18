const express = require("express"),
  router = express.Router();
const Controller = require("../controllers/userprofile");
const checkAuthMiddleware = require('../middleware/check-auth');

router.get('/getAll', Controller.getAll);
router.post("/:userId/create",checkAuthMiddleware.checkAuth ,Controller.create);
router.put("/:userprofileId/update",checkAuthMiddleware.checkAuth ,Controller.update);
router.delete("/:userprofileId/delete",checkAuthMiddleware.checkAuth ,Controller.delete);
module.exports = router;
