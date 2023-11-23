const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("demonode2", "root", "password", {
  host: "localhost",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

module.exports = sequelize;
