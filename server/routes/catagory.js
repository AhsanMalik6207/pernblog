const express = require("express"),
  router = express.Router();
const Controller = require("../controllers/catagory");

      //Apis for Catagory Crud//

router.get("/getAll", Controller.getAll);

router.post("/create", Controller.create);

router.put("/update/:CatagoryId", Controller.update);

router.delete("/delete/:CatagoryId", Controller.delete);

        //Api for Searching//

router.get("/search", Controller.search);

module.exports = router;
