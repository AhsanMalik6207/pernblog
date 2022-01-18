const db = require("./db");
const { DataTypes, Sequelize } = require("sequelize");

const User = db.define(
  "User",
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
    },

    name: DataTypes.STRING,

    username: DataTypes.STRING,

    email: DataTypes.STRING,

    password: DataTypes.STRING,

    active: DataTypes.BOOLEAN,

    createdAt: DataTypes.DATE,

    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "Users",
  }
);

module.exports = User;
