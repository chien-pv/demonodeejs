var express = require("express");
var router = express.Router();
var db = require("../db");

router.get("/", (req, res) => {
  let q = req.query.q;
  let sql;
  if (q) {
    sql = `SELECT * FROM users WHERE firstname LIKE '%${q}%' OR lastname LIKE '%${q}%' OR email LIKE '%${q}%'`;
  } else {
    sql = `SELECT * FROM users`;
    q = "";
  }
  db.query(sql, function (err, datas) {
    if (err) throw err;
    res.render("users/index", { users: datas, q });
  });
});

router.get("/new", (req, res) => {
  res.render("users/create", { q: "" });
});

router.post("/create", (req, res) => {
  res.redirect("/user");
});

module.exports = router;
