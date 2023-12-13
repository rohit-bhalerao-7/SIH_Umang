const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig'); // Adjust the path as necessary

class Biometric extends Model {}

Biometric.init({
    biometric_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: DataTypes.INTEGER, // Foreign key to Users table
    fingerprint_data: DataTypes.BLOB,
    retina_scan_data: DataTypes.BLOB,
    aadhar_number: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
}, {
    sequelize,
    modelName: 'Biometric',
    timestamps: false,
    tableName: 'biometric_data'
});

module.exports = Biometric;
