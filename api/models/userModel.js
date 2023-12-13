const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig'); // Adjust the path as necessary

class User extends Model {}

User.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password_hash: DataTypes.STRING,
    biometric_data: DataTypes.INTEGER, // This should be a reference to the Biometric data table
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
