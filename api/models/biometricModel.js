const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../config/dbConfig'); // Import sequelize from dbConfig
const Biometric = require('./biometricModel'); // Import the Biometric model

class User extends Model {}

User.init({
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
    language_preference: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    last_login_at: DataTypes.DATE,
    biometric_data: {
        type: DataTypes.INTEGER,
        references: {
            model: Biometric, // Reference the Biometric model
            key: 'biometric_id', // Reference the primary key of the Biometric table
        },
    },
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
}, {
    sequelize, // Pass the Sequelize instance here
    modelName: 'User',
    timestamps: false,
    tableName: 'users',
});

module.exports = User;
