const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../config/dbConfig'); // Import sequelize from dbConfig
const shortid = require('shortid'); // You can use a package like 'shortid' to generate unique IDs

class User extends Model {}

User.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    patient_id: {
        type: DataTypes.STRING, // Use STRING data type for the patient ID
        unique: true, // Ensure it's unique
        defaultValue: shortid.generate(), // Generate a unique ID when a new user is created
    },
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password_hash: DataTypes.STRING,
    biometric_data: DataTypes.INTEGER,
    language_preference: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    last_login_at: DataTypes.DATE
}, {
    sequelize,
    modelName: 'User',
    timestamps: false,
    tableName: 'users'
});

module.exports = User;
