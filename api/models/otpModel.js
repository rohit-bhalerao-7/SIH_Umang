// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/dbConfig');

// class OTP extends Model {}

// OTP.init({
//     mobileNumber: {
//         type: DataTypes.STRING(15),
//         primaryKey: true,
//         allowNull: false
//     },
//     otp: {
//         type: DataTypes.STRING(6),
//         allowNull: false
//     },
//     createdAt: {
//         type: DataTypes.DATE,
//         defaultValue: DataTypes.NOW
//     },
//     // You can add an expiration time for the OTP
//     // expiresAt: {
//     //     type: DataTypes.DATE,
//     //     allowNull: false
//     // }
// }, {
//     sequelize,
//     modelName: 'OTP',
//     timestamps: false, // Disable Sequelize's automatic timestamping
//     tableName: 'otps'
// });

// module.exports = OTP;
