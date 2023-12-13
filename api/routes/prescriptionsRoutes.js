const express = require('express');
const router = express.Router();
const prescriptionsController = require('../controllers/prescriptionsController');

// Add a prescription
router.post('/prescriptions', prescriptionsController.addPrescription);

// Get a specific prescription
router.get('/prescriptions/:prescription_id', prescriptionsController.getPrescription);

module.exports = router;
