const { Model, DataTypes } = require('sequelize');
const {sequelize} = require('../../config/dbConfig'); // Adjust the path as necessary

class Doctor extends Model {}

Doctor.init({
    doctor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    specialization: DataTypes.STRING,
    availability: DataTypes.STRING,
    //eSanjeevani_id: DataTypes.STRING,
    contact_info: DataTypes.STRING,
    qualification: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
}, {
    sequelize,
    modelName: 'Doctor',
    timestamps: false,
    tableName: 'doctors'
});

module.exports = Doctor;
