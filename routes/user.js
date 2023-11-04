var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query);
  res.send("index user");
});

router.get("/create", (req, res) => {
  res.send("form create");
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.send("form create");
});

module.exports = router;
