const db = require('./db');
const { DataTypes } = require('sequelize');

const Role = db.define(
	'Role',
	{
		userId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'User',
				key: 'id',
				as: 'userId',
			}
		},
		rolename: {
			type: DataTypes.STRING,
			allowNull: {
				args: false,
				msg: 'Please enter role name'
			}
		},
		roledescription: {
			type: DataTypes.STRING,
			allowNull: {
				args: false,
				msg: 'Please enter role description'
			}
		}
	},
	{
		tableName: 'Roles',
	}
);

module.exports = Role;
