const Prescription = require('../models/prescriptionModel'); // Sequelize model for Prescription

const addPrescription = async (req, res) => {
    try {
        const { consultation_id, medication, dosage, instructions } = req.body;
        const prescription = await Prescription.create({ consultation_id, medication, dosage, instructions });
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

module.exports = { addPrescription, getPrescription };
