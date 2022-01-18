const db = require("./db");
const { DataTypes } = require("sequelize");

const Userprofile = db.define(
  "Userprofile",
  {
    gender: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease enter a gender'
      }
    },
    phonenumber: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Pease enter your phone number'
      }
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease enter your bio'
      }
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    tableName: "Userprofiles",
  }
);

module.exports = Userprofile;
