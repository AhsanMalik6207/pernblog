const db = require("./db");
const { DataTypes } = require("sequelize");

const Comment = db.define(
  "Comment",
  {
    comment_text: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: 'Pease enter a comment'
        }
      },
      postId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Post',
          key: 'id',
          as: 'postId',
        }
      }
  },
  {
    tableName: "Comments",
  }
);

module.exports = Comment;