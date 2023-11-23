let db = require("../db");
const { faker } = require("@faker-js/faker");

// for (let index = 0; index < 20; index++) {
//   let person = {
//     firstname: faker.internet.userName(),
//     lastname: faker.internet.userName(),
//     email: faker.internet.email(),
//   };

for (let index = 1; index < 6; index++) {
  let product = {
    name: faker.internet.userName(),
    description: faker.internet.userName(),
    userId: "4",
  };

  db.query("insert into products SET ?", product, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}
