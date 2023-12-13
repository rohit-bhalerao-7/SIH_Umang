const DoctorModel = require('../models/doctorModel');

const addDoctor = async (doctorData) => {
    return await DoctorModel.create(doctorData);
};

const updateDoctorInformation = async (doctorId, updateData) => {
    await DoctorModel.update(updateData, { where: { doctor_id: doctorId } });
    return await DoctorModel.findOne({ where: { doctor_id: doctorId } });
};

const getDoctorDetails = async (doctorId) => {
    return await DoctorModel.findOne({ where: { doctor_id: doctorId } });
};

module.exports = {
    addDoctor,
    updateDoctorInformation,
    getDoctorDetails
};
