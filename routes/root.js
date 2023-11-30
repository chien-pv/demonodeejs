var express = require("express");
var router = express.Router();
var rootController = require("../controllers/roots_controller");
var userControllet = require("../controllers/users_controller");
var authMd = require("../middware/checklogin");
var validation = require("../middware/validation");

router.get("/", rootController.home);
router.get("/login", rootController.login);
router.post("/login", rootController.loginPost);

router.post("/api/v1/login", rootController.loginAPI);

router.get("/resgiter", rootController.resgiter);

router.post(
  "/resgiter",
  validation.userValidation,
  rootController.resgiterPost
);

router.get("/users", authMd.auth, userControllet.indexServer);
module.exports = router;
