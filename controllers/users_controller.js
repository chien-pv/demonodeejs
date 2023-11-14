var db = require("../db");
let userModel = require("../models/user");
class UserController {
  async index(req, res) {
    let q = req.query.q;
    let results;
    if (q) {
      results = await userModel.getUserByParams(q).catch(console.log);
    } else {
      results = await userModel.getAll().catch(console.log);
      q = "";
    }
    console.log(results);
    res.render("users/index", { users: results, q });
  }

  new(req, res) {
    res.render("users/create", { q: "" });
  }

  delete(req, res) {
    let id = req.params.id;
    db.query("DELETE FROM users WHERE id=?", id, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
    res.redirect("/user");
  }

  create(req, res) {
    console.log(req.body);
    let person = req.body;
    db.query("insert into users SET ?", person, function (err, result) {
      if (err) throw err;
      console.log(result);
    });

    res.redirect("/user");
  }
}

module.exports = new UserController();
