const Prescription = require('../models/prescriptionModel'); // Sequelize model for Prescription
const User = require('../models/userModel'); // Sequelize model for User (assuming you have a User model)

const addPrescription = async (req, res) => {
    try {
        const { patient_name, doctor_name, medication, dosage, instructions, report_image } = req.body;

        // Create a new prescription with the provided details
        const prescription = await Prescription.create({
            patient_name,
            doctor_name,
            medication,
            dosage,
            instructions,
            report_image // Include the report image if provided
        });

        res.status(201).json({ message: "Prescription added", prescription });
    } catch (error) {
        res.status(500).json({ message: "Error adding prescription", error: error.message });
    }
};


const getPrescription = async (req, res) => {
    try {
        const { prescription_id } = req.params;
        const prescription = await Prescription.findOne({ where: { id: prescription_id } });
        if (prescription) {
            res.json({ prescription });
        } else {
            res.status(404).json({ message: "Prescription not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving prescription", error: error.message });
    }
};

const getPastConsultationsForUser = async (req, res) => {
    try {
        const { userId } = req.params; // Assuming you have a userId to identify the user
        const pastConsultations = await Consultation.findAll({
            where: { user_id: userId }, // Filter consultations for the specific user
            order: [['created_at', 'DESC']], // Sort by created_at in descending order to get the latest first
        });
        
        res.json({ pastConsultations });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving past consultations", error: error.message });
    }
};

module.exports = { addPrescription, getPrescription, getPastConsultationsForUser };
