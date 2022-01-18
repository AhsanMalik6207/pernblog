module.exports = {
<<<<<<< HEAD:server/migrations/20220110175354-create-userprofile.js
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Userprofiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      phoneNo: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bio: {
        allowNull: false,
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: queryInterface /* , Sequelize */ =>  queryInterface.dropTable('Userprofiles')
};
=======
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Posts', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			description: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			// userId: {
			//   type: Sequelize.INTEGER,
			//   onDelete: 'CASCADE',
			//   references: {
			//     model: 'Users',
			//     key: 'id',
			//     as: 'userId',
			//   }
			// },
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
		queryInterface.dropTable('Posts'),
};
>>>>>>> master:server/migrations/20220110175354-create-post.js
