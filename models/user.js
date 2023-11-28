const { DataTypes } = require("sequelize");

let sequelize = require("../db_sequelize");
const Product = require("./product");

const User = sequelize.define(
  "User",
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      // allowNull defaults to true
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    paranoid: true,
  }
);

User.hasMany(Product);
Product.belongsTo(User);

module.exports = User;
