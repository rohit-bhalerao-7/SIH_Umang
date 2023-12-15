const { Model, DataTypes } = require('sequelize');
const {sequelize} = require('../../config/dbConfig'); // Adjust the path as necessary

class Prescription extends Model {}

Prescription.init({
    prescription_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    consultation_id: DataTypes.INTEGER, // Foreign key to Consultations table
    medication: DataTypes.STRING,
    dosage: DataTypes.STRING,
    instructions: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    // patient_id: DataTypes.INTEGER, // Add patient_id field
    // name: DataTypes.STRING // Add name field
}, {
    sequelize,
    modelName: 'Prescription',
    timestamps: false,
    tableName: 'prescriptions'
});

module.exports = Prescription;
