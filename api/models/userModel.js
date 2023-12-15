const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../config/dbConfig'); // Import sequelize from dbConfig

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password_hash: DataTypes.STRING,
    biometric_data: DataTypes.INTEGER, // This should be a reference to the Biometric data table
    language_preference: DataTypes.STRING,
    created_at: { // Define "created_at" column
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), // Use PostgreSQL's current timestamp
    },
    updated_at: { // Define "updated_at" column
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), // Use PostgreSQL's current timestamp
    },
    last_login_at: DataTypes.DATE, // Assuming "last_login_at" is a custom column
  },
  {
    sequelize, // Pass the Sequelize instance here
    modelName: 'User',
    timestamps: false, // Disable Sequelize's automatic timestamps
    tableName: 'users',
  }
);

module.exports = User;
