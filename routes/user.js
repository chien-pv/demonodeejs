var express = require("express");
var router = express.Router();
let UserController = require("../controllers/users_controller");

router.get("/", UserController.index);
router.get("/new", UserController.new);
router.get("/delete/:id", UserController.delete);
router.post("/create", UserController.create);

module.exports = router;
