const db = require("./db");
const { DataTypes, Sequelize } = require("sequelize");

const Comment = db.define(
  "Comment",
  {
    comment_text: DataTypes.STRING,

    user_id: DataTypes.STRING,
    post_id:DataTypes.STRING,

    // userId: DataTypes.INTEGER,

    createdAt: DataTypes.DATE,

    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "comments",
  }
);

module.exports = Comment;
