const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../config/dbConfig'); // Adjust the path as necessary

class Prescription extends Model {}

Prescription.init(
    {
      prescription_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      doctor_name: DataTypes.STRING, // Ensure 'doctor_name' field is defined
      patient_name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      blood_group: DataTypes.STRING,
      symptoms: DataTypes.TEXT,
      medication: DataTypes.STRING,
      dosage: DataTypes.STRING,
      instructions: DataTypes.TEXT,
      report_image: DataTypes.BLOB,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Prescription',
      timestamps: false,
      tableName: 'prescriptions',
    }
  );
  
module.exports = Prescription;
