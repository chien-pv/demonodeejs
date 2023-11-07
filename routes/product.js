var express = require("express");
var router = express.Router();

router.get("/:id", (req, res) => {
  console.log(req.params);
  let product_id = req.params.id;
  res.render("detail_product", { product_id });
});

module.exports = router;
