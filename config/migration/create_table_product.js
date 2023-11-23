let db = require("../../db");
let sql = `CREATE TABLE products (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(200) NOT NULL,
    userId INT(6),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Tao table Product thanh cong!");
});
