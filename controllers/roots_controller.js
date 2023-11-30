var jwt = require("jsonwebtoken");

let User = require("../models/user");
const { Op } = require("sequelize");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

function home(req, res) {
  res.render("home", { title: "Home", q: "" });
}

function login(req, res) {
  res.render("login", { title: "Home", q: "" });
}

async function loginPost(req, res) {
  console.log(req.body);

  const user = await User.findOne({ where: { email: req.body.email } });
  if (user === null) {
    res.render("login", { title: "Home", q: "" });
  } else {
    console.log(user);
    let check = bcrypt.compareSync(req.body.password, user.password);
    if (!check) {
      res.render("login", { title: "Home", q: "" });
    } else {
      req.session.logined = true;
      req.session.user = user;
      res.redirect("/");
    }
  }
}

function resgiter(req, res) {
  res.render("resgiter", { title: "resgiter", q: "" });
}

async function resgiterPost(req, res) {
  try {
    var hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
    console.log(req.body);
    const user = await User.create(req.body);
    console.log(user);
    res.redirect("/login");
  } catch (error) {
    res.render("resgiter", { title: "resgiter", q: "" });
  }
}

async function loginAPI(req, res) {
  console.log(req.body);

  const user = await User.findOne({ where: { email: req.body.email } });
  if (user === null) {
    res.status(404).json({ message: "Tai khoan khong ton tai!" });
  } else {
    console.log(user);
    let check = bcrypt.compareSync(req.body.password, user.password);
    if (!check) {
      res.status(404).json({ message: "Tai khoan khong ton tai!" });
    } else {
      let payload = {
        name: user.name,
        email: user.email,
      };

      let token = jwt.sign(payload, "FptPolyTechnic", { expiresIn: 3600 });
      res.status(200).json({ message: "Login thanh cong", token: token });
    }
  }
}

module.exports = { home, resgiter, resgiterPost, login, loginPost, loginAPI };
