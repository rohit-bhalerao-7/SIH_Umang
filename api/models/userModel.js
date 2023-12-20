const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../config/dbConfig'); // Import sequelize from dbConfig
const shortid = require('shortid'); // You can use a package like 'shortid' to generate unique IDs

class User extends Model {}

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      mobileNumber: {
        type: DataTypes.STRING(15),
      },
      qrCodeKey: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true, // Assuming every user must have a QR code key
      },
      name: DataTypes.STRING,
      dateOfBirth: DataTypes.DATEONLY,
      gender: DataTypes.STRING,
      weight: DataTypes.FLOAT,
      height: DataTypes.FLOAT,
      bloodGroup: DataTypes.STRING,
      abhaId: {
        type: DataTypes.STRING,
        unique: true,
      },
      
      otp: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true, // Allow OTP to be nullable if needed
      },
      language_preference: DataTypes.STRING,
      disabilityStatus: {
        type: DataTypes.ENUM('yes', 'no'),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
      timestamps: false,
      tableName: 'users',
    }
  );

module.exports = User;
