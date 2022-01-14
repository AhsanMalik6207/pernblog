const db = require("./db");
const { DataTypes, Sequelize } = require("sequelize");

const Post = db.define(
  "Post",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the title for your post'
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease input a post description'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId',
      }
    }
  },
  {
    tableName: "Posts",
  }
);

module.exports = Post;
