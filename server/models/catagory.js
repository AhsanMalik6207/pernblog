const db = require("./db");
const { DataTypes, Sequelize } = require("sequelize");

const Catagory = db.define(
  "catagories",
  {

    Name: DataTypes.STRING,

    createdAt: DataTypes.DATE,

    updatedAt: DataTypes.DATE,
  },
  
  {
    tableName: "catagories",
  }
);

module.exports = Catagory;
