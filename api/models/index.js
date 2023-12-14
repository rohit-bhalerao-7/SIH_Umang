const Sequelize = require('sequelize');
const {sequelize} = require('../../config/dbConfig'); // Adjust this path to your actual config file

// Importing models
const UserModel = require('./userModel');
const BiometricModel = require('./biometricModel');
const ConsultationModel = require('./consultationModel');
const PrescriptionModel = require('./prescriptionModel');
const DoctorModel = require('./doctorModel');

// Define relationships

// User and Biometric (One-to-One)
UserModel.hasOne(BiometricModel, {
    foreignKey: 'user_id',
    as: 'biometricData'
});
BiometricModel.belongsTo(UserModel, {
    foreignKey: 'user_id',
    as: 'user'
});

// User and Consultation (One-to-Many)
UserModel.hasMany(ConsultationModel, {
    foreignKey: 'user_id',
    as: 'consultations'
});
ConsultationModel.belongsTo(UserModel, {
    foreignKey: 'user_id',
    as: 'user'
});

// Consultation and Prescription (One-to-One)
ConsultationModel.hasOne(PrescriptionModel, {
    foreignKey: 'consultation_id',
    as: 'prescription'
});
PrescriptionModel.belongsTo(ConsultationModel, {
    foreignKey: 'consultation_id',
    as: 'consultation'
});

// Doctor and Consultation (One-to-Many)
DoctorModel.hasMany(ConsultationModel, {
    foreignKey: 'doctor_id',
    as: 'consultations'
});
ConsultationModel.belongsTo(DoctorModel, {
    foreignKey: 'doctor_id',
    as: 'doctor'
});

// Exporting models and sequelize connection
module.exports = {
    sequelize,
    Sequelize,
    UserModel,
    BiometricModel,
    ConsultationModel,
    PrescriptionModel,
    DoctorModel
};
