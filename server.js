const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;
const root_routes = require("./routes/root");
const user_routes = require("./routes/user");
const product_routes = require("./routes/product");

app.set("views", "./views"); // specify the views directory
app.set("view engine", "ejs"); // register the template engine
app.use(express.static("public/"));
// app.use("/img", express.static("public/uploads"));
app.use("/", express.static("./node_modules/bootstrap/dist/"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", root_routes);
app.use("/v1/users", user_routes);
app.use("/product", product_routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
