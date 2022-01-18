module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Role_Has_Permissions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			// roleId: {
			// 	type: Sequelize.STRING,
			// },
			roleId: {
				type: Sequelize.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'Roles',
					key: 'id',
					as: 'roleId',
				},
			},
			// permId: {
			// 	type: Sequelize.STRING,
			// },
			permId: {
				type: Sequelize.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'Permissions',
					key: 'id',
					as: 'permId',
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface) /* , Sequelize */ =>
		queryInterface.dropTable('Role_Has_Permissions'),
};
