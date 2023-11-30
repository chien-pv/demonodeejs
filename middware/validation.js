var lod = require("lodash");
var validator = require("validator");

function userValidation(req, res, next) {
  let errors = {};
  if (validator.isEmpty(req.body.email)) {
    errors.email = {
      message: "email khong duoc de trong",
    };
  }
  if (!validator.isEmail(req.body.email)) {
    errors.email = {
      message: "email sai dinh dang",
    };
  }
  if (validator.isEmpty(req.body.firstname)) {
    errors.firstname = {
      message: "firstname khong duoc de trong",
    };
  }

  if (validator.isEmpty(req.body.lastname)) {
    errors.lastname = {
      message: "lastname khong duoc de trong",
    };
  }
  if (lod.isEmpty(errors)) {
    next();
  } else {
    res.render("resgiter", { title: "resgiter", q: "", errors });
  }
}

module.exports = { userValidation };
