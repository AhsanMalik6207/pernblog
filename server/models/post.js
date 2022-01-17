const db = require("./db");
const { DataTypes, Sequelize } = require("Sequelize");

const Post = db.define(
  "Post",
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
    },

    title: DataTypes.STRING,

    description: DataTypes.TEXT,

    userId: DataTypes.STRING,

    createdAt: DataTypes.DATE,

    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "Posts",
  }
);

module.exports = Post;
