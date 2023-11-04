var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  let data = [
    {
      name: "San Pham 1",
      description: `This is a longer card with
      supporting text below as a natural lead-in to
      additional content. This content is a little bit
      longer.`,
    },
    {
      name: "San Pham 2",
      description: `This is a longer card with
      supporting text below as a natural lead-in to
      additional content. This content is a little bit
      longer.`,
    },
    {
      name: "San Pham 3",
      description: `This is a longer card with
      supporting text below as a natural lead-in to
      additional content. This content is a little bit
      longer.`,
    },
    {
      name: "San Pham 4",
      description: `This is a longer card with
      supporting text below as a natural lead-in to
      additional content. This content is a little bit
      longer.`,
    },
  ];
  res.render("index", { title: "Index Page", products: data });
});

router.post("/login", (req, res) => {
  console.log(req.body);
  res.status(400).json(req.body);
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: null });
});

module.exports = router;
