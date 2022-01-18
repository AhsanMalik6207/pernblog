'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD:server/migrations/20220117114854-create-comments.js
    await queryInterface.createTable('comments', {
=======
    await queryInterface.createTable('categories', {
>>>>>>> master:server/migrations/20220113195803-create-catagory.js
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
<<<<<<< HEAD:server/migrations/20220117114854-create-comments.js
      comment_text: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      post_id: {
        type: Sequelize.STRING
      },
=======
      categoryname: {
        allowNull: false,
        type: Sequelize.STRING
      },
>>>>>>> master:server/migrations/20220113195803-create-catagory.js
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
  down: async (queryInterface, Sequelize) => {
<<<<<<< HEAD:server/migrations/20220117114854-create-comments.js
    await queryInterface.dropTable('comments');
=======
    await queryInterface.dropTable('categories');
>>>>>>> master:server/migrations/20220113195803-create-catagory.js
  }
};