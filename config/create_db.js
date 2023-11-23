var mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

db.query("CREATE DATABASE demonode2", function (err, result) {
  if (err) throw err;
  console.log("Tao DB thanh cong!!");
});
