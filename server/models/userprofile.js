const db = require("./db");
const { DataTypes, Sequelize } = require("sequelize");

const Userprofile = db.define(
  "Userprofile",
  {
    firstName: {
      type: DataTypes.STRING,
    allowNull: true},
    lastName: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease input a lastname'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease input a Email'
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease input your gender'
      }
    },
    phoneNo: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Pease input YOur phone no'
      }
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease input your bio'
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
