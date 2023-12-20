const Consultation = require('../models/consultationModel'); // Sequelize model for Consultation

const createConsultation = async (req, res) => {
    try {
        const { user_id, symptoms } = req.body;
        const consultation = await Consultation.create({ user_id, symptoms });
        res.status(201).json({ message: "Consultation created", consultation });
    } catch (error) {
        res.status(500).json({ message: "Error creating consultation", error: error.message });
    }
};

const updateConsultation = async (req, res) => {
    try {
        const { consultation_id } = req.params;
        const updateData = req.body;
        const [updated] = await Consultation.update(updateData, { where: { id: consultation_id } });
        if (updated) {
            const updatedConsultation = await Consultation.findOne({ where: { id: consultation_id } });
            res.json({ message: "Consultation updated", consultation: updatedConsultation });
        } else {
            throw new Error('Consultation not found');
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating consultation", error: error.message });
    }
};

const getConsultationDetails = async (req, res) => {
    try {
        const { consultation_id } = req.params;
        const consultation = await Consultation.findOne({ where: { id: consultation_id } });
        if (consultation) {
            res.json({ consultation });
        } else {
            res.status(404).json({ message: "Consultation not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving consultation", error: error.message });
    }
};

module.exports = { createConsultation, updateConsultation, getConsultationDetails };
