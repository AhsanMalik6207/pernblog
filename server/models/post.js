<<<<<<< HEAD
const db = require("./db");
const { DataTypes, Sequelize } = require("sequelize");
=======
const db = require('./db');
const { DataTypes, Sequelize } = require('sequelize');
>>>>>>> master

const Post = db.define(
	'Post',
	{
		// id: {
		// 	type: Sequelize.UUID,
		// 	primaryKey: true,
		// 	// allowNull: false,
		// },

		title: DataTypes.STRING,

		description: DataTypes.TEXT,

		// userId: DataTypes.INTEGER,

		createdAt: DataTypes.DATE,

		updatedAt: DataTypes.DATE,
	},
	{
		tableName: 'Posts',
	}
);

module.exports = Post;
