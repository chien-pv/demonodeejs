var db = require("../db");

class User {
  async getAll() {
    var sql = `SELECT * FROM users`;
    return new Promise((resolve, reject) => {
      const handler = (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      };
      db.query(sql, handler);
    });
  }

  async getUserByParams(q) {
    var sql = `SELECT * FROM users WHERE firstname LIKE '%${q}%' OR lastname LIKE '%${q}%' OR email LIKE '%${q}%'`;
    return new Promise((resolve, reject) => {
      const handler = (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      };
      db.query(sql, handler);
    });
  }
}

module.exports = new User();
