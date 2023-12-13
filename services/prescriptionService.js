const PrescriptionModel = require('../models/prescriptionModel');

const addPrescription = async (prescriptionData) => {
    return await PrescriptionModel.create(prescriptionData);
};

const getPrescription = async (prescriptionId) => {
    return await PrescriptionModel.findOne({ where: { prescription_id: prescriptionId } });
};

module.exports = {
    addPrescription,
    getPrescription
};
