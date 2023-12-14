const express = require('express');
const router = express.Router();
const doctorsController = require('../controllers/doctorsController');

// Add a doctor
router.post('/', doctorsController.addDoctor);

// Update doctor information
router.put('/doctors/:doctor_id', doctorsController.updateDoctorInformation);

// Get details of a specific doctor
router.get('/doctors/:doctor_id', doctorsController.getDoctorDetails);

module.exports = router;
