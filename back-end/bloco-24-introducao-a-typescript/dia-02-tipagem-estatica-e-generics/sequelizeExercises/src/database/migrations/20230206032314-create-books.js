'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('books', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      allowNull: false,
      type:Sequelize.STRING(40)
    },
    author_id: {
      type: Sequelize.INTEGER,
      field: 'author_id',
      references: {
        model: 'authors',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    genre_id: {
      type: Sequelize.INTEGER,
      field: 'genre_id',
      references: {
        model: 'genres',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
   });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('books')
  }
};
