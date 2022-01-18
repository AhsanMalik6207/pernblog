module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Userprofiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
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
