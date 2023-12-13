const ConsultationModel = require('../models/consultationModel');

const createConsultation = async (consultationData) => {
    return await ConsultationModel.create(consultationData);
};

const updateConsultation = async (consultationId, updateData) => {
    await ConsultationModel.update(updateData, { where: { consultation_id: consultationId } });
    return await ConsultationModel.findOne({ where: { consultation_id: consultationId } });
};

const getConsultationDetails = async (consultationId) => {
    return await ConsultationModel.findOne({ where: { consultation_id: consultationId } });
};

module.exports = {
    createConsultation,
    updateConsultation,
    getConsultationDetails
};
