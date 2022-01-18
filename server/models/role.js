const db = require('./db');
const { DataTypes, Sequelize } = require('sequelize');

const Role = db.define(
	'Role',
	{
		// id: {
		// 	type: Sequelize.UUID,
		// 	primaryKey: true,
		// 	// allowNull: false,
		// },

		role_Name: DataTypes.STRING,

		role_Description: DataTypes.STRING,

		createdAt: DataTypes.DATE,

		updatedAt: DataTypes.DATE,
	},
	{
		tableName: 'Roles',
	}
);

module.exports = Role;
