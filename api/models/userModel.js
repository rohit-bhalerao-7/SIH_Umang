const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../config/dbConfig'); // Import sequelize from dbConfig
const shortid = require('shortid'); // You can use a package like 'shortid' to generate unique IDs

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mobileNumber: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true
    },
    name: DataTypes.STRING,
    dateOfBirth: DataTypes.DATEONLY,
    gender: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    bloodGroup: DataTypes.STRING,
    abhaId: {
        type: DataTypes.STRING,
        unique: true
    },
    fingerprintKey: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true // since it might not be set for all users
    },
    otp: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false // since it might not be set for all users
    },
    language_preference: DataTypes.STRING,
    disabilityStatus: {
        type: DataTypes.ENUM('yes', 'no'),
        allowNull: true // or false depending on your requirements
    },
    // Other fields as necessary
}, {
    sequelize,
    modelName: 'User',
    timestamps: false,
    tableName: 'users'
});

module.exports = User;
