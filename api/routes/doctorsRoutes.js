const express = require('express');
const router = express.Router();
const doctorsController = require('../controllers/doctorsController');
const mockDoctors = require('../../data/mockdoctors');

// Add a doctor
router.post('/', doctorsController.addDoctor);

// Update doctor information
//router.put('/doctors/:doctor_id', doctorsController.updateDoctorInformation);

// Get details of a specific doctor
router.get('/:doctor_id', doctorsController.getDoctorDetails);

router.get('/:specialization', (req, res) => {
    const { specialization } = req.params;
    
    // Filter doctors by specialization
    const doctorsBySpecialization = mockDoctors.filter(doctor => doctor.specialization === specialization);
    
    if (doctorsBySpecialization.length === 0) {
        res.status(404).json({ message: 'No doctors found for the specified specialization' });
    } else {
        res.json(doctorsBySpecialization);
    }
});

module.exports = router;
