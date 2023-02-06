module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('genres', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      genre: {
        allowNull: false,
        type:Sequelize.STRING(30)
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('genres');
  }
};
