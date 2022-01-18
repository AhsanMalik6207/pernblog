module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Userprofiles', {
      id: {
        // allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      gender: {
        allowNull: false,
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
<<<<<<< HEAD:server/migrations/20220110175354-create-post.js
      image:{
        type:Sequelize.STRING
=======
      picture: {
        allowNull: false,
        type: Sequelize.STRING
>>>>>>> master:server/migrations/20220110175354-create-userprofile.js
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
