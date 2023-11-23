var express = require("express");
var router = express.Router();
let UserController = require("../controllers/users_controller");

router.get("/", UserController.index);
router.get("/:id", UserController.show);
router.delete("/:id", UserController.delete);
router.post("/", UserController.create);
router.put("/:id", UserController.create);

module.exports = router;
