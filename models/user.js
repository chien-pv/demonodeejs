var db = require("../db");

class User {
  handlerQuery(sql) {
    return new Promise((resolve, reject) => {
      let handler = function (error, result) {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      };
      db.query(sql, handler);
    });
  }

  async getAll() {
    var sql = `SELECT * FROM users`;
    return this.handlerQuery(sql);
  }

  async getUserByParams(q) {
    var sql = `SELECT * FROM users WHERE firstname LIKE '%${q}%' OR lastname LIKE '%${q}%' OR email LIKE '%${q}%'`;
    return this.handlerQuery(sql);
  }
}

module.exports = new User();
