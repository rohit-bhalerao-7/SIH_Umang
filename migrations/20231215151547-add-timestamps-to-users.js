'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Modify the "createdAt" column to allow NULL temporarily
    await queryInterface.changeColumn('users', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: true, // Allow NULL temporarily
    });

    // Add the "updatedAt" column
    await queryInterface.addColumn('users', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    });

    // Update existing rows to set a default value for "createdAt"
    await queryInterface.sequelize.query('UPDATE "users" SET "createdAt" = NOW() WHERE "createdAt" IS NULL;');

    // Modify the "createdAt" column to disallow NULL again
    await queryInterface.changeColumn('users', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Your down migration logic
  },
};
