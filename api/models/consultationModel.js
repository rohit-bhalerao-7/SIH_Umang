const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig'); // Adjust the path as necessary

class Consultation extends Model {}

Consultation.init({
    consultation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: DataTypes.INTEGER, // Foreign key to Users table
    symptoms: DataTypes.TEXT,
    ai_diagnosis: DataTypes.INTEGER, // Foreign key to AI Diagnoses table
    doctor_id: DataTypes.INTEGER, // Foreign key to Doctors table
    consultation_time: DataTypes.DATE,
    status: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
}, {
    sequelize,
    modelName: 'Consultation',
    timestamps: false,
    tableName: 'consultations'
});

module.exports = Consultation;
