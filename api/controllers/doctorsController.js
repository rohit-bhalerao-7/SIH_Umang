const Doctor = require('../models/doctorModel'); // Sequelize model for Doctor
const mockDoctors = require('../../data/mockdoctors');

const addDoctor = async (req, res) => {
    try {
        const { name, specialization, availability, contact_info, qualification } = req.body;
        const doctor = await Doctor.create({ name, specialization, availability, contact_info, qualification });
        res.status(201).json({ message: "Doctor added", doctor });
    } catch (error) {
        res.status(500).json({ message: "Error adding doctor", error: error.message });
    }
};

const updateDoctorInformation = async (req, res) => {
    try {
        const { doctor_id } = req.params;
        const updateData = req.body;
        const [updated] = await Doctor.update(updateData, { where: { id: doctor_id } });
        if (updated) {
            const updatedDoctor = await Doctor.findOne({ where: { id: doctor_id } });
            res.json({ message: "Doctor information updated", doctor: updatedDoctor });
        } else {
            throw new Error('Doctor not found');
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating doctor information", error: error.message });
    }
};

const getDoctorDetails = async (req, res) => {
    try {
        const { doctor_id } = req.params;
        const doctor = await Doctor.findOne({ where: { id: doctor_id } });
        if (doctor) {
            res.json({ doctor });
        } else {
            res.status(404).json({ message: "Doctor not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving doctor details", error: error.message });
    }
};

const getDoctorsBySpecialization = (specialization) => {
    return mockDoctors.filter(doctor => doctor.specialization === specialization);
  };

module.exports = { addDoctor, updateDoctorInformation, getDoctorDetails, getDoctorsBySpecialization };
