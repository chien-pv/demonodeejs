var express = require("express");
var fs = require("fs");

var router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});

const checkFileUpload = (req, file, cb) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
  }
};

const upload = multer({ storage: storage, fileFilter: checkFileUpload });

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

router.post("/login", upload.array("avatar", 12), (req, res) => {
  console.log(req.body);

  res.render("login");
});

router.get("/login", (req, res) => {
  fs.unlink(
    "public/uploads/avatar-1699319640814-643142496Screen Shot 2023-10-11 at 20.59.56.png",
    (err) => {
      if (err) throw err;
      console.log("file was deleted");
    }
  );
  res.render("login");
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: null });
});

module.exports = router;
