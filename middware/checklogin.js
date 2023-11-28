function auth(req, res, next) {
  if (!req.session.logined) {
    res.redirect("/login");
  } else {
    next();
  }
}

module.exports = { auth };
