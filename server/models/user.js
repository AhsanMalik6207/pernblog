const db = require("./db");
const { DataTypes, Sequelize } = require("sequelize");

const User = db.define(
  "User",
  {
<<<<<<< HEAD
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
=======
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your username'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address'
      },
      unique: {
        args: true,
        msg: 'Email already exists'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address'
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a password'
      },
      validate: {
        isNotShort: (value) => {
          if (value.length < 8) {
            throw new Error('Password should be at least 8 characters');
          }
        },
      },
    }
>>>>>>> master
  },
  {
    tableName: "Users",
  }
);
<<<<<<< HEAD

module.exports = User;
=======
module.exports = User;
>>>>>>> master
