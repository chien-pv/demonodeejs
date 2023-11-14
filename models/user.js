var db = require("../db");

class User {
  handler(resolve, reject) {
    return function (error, result) {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    };
  }

  async getAll() {
    var sql = `SELECT * FROM users`;
    return new Promise((resolve, reject) => {
      db.query(sql, this.handler(resolve, reject));
    });
  }

  async getUserByParams(q) {
    var sql = `SELECT * FROM users WHERE firstname LIKE '%${q}%' OR lastname LIKE '%${q}%' OR email LIKE '%${q}%'`;
    return new Promise((resolve, reject) => {
      db.query(sql, this.handler(resolve, reject));
    });
  }
}

module.exports = new User();
