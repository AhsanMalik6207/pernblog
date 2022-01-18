const db = require('./db');
const { DataTypes, Sequelize } = require('sequelize');
const Role = require('./role');
const Permission = require('./permissions');

const Role_Has_Permission = db.define(
	'Role_Has_Permission',
	{
		roleId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'Roles',
				key: 'id',
				as: 'roleId',
			},
		},
		// roleId: DataTypes.STRING,
		permId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'Permissions',
				key: 'id',
				as: 'permId',
			},
		},
		// permId: DataTypes.STRING,

		createdAt: DataTypes.DATE,

		updatedAt: DataTypes.DATE,
	},
	{
		tableName: 'Role_Has_Permissions',
	}
);
Permission.belongsToMany(Role, {
	as: 'Roles',
	through: { model: Role_Has_Permission, unique: false },
	foreignKey: 'permId',
});
Role.belongsToMany(Permission, {
	as: 'Permissions',
	through: { model: Role_Has_Permission, unique: false },
	foreignKey: 'roleId',
});

module.exports = Role_Has_Permission;
