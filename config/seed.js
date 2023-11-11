let db = require("../db");
const { faker } = require("@faker-js/faker");

for (let index = 0; index < 20; index++) {
  let person = {
    firstname: faker.internet.userName(),
    lastname: faker.internet.userName(),
    email: faker.internet.email(),
  };

  db.query("insert into users SET ?", person, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}
