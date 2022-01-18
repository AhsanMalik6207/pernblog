const express = require("express"),
  router = express.Router();
const Controller = require("../controllers/userprofile");


router.post("/create", Controller.create);
router.put("/:userprofileId/update", Controller.update);
router.delete("/:userprofileId/delete", Controller.delete);
module.exports = router;
