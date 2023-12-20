const express = require('express');
const router = express.Router();
const prescriptionsController = require('../controllers/prescriptionsController');

// Add a prescription
router.post('/addPrescriptions', prescriptionsController.addPrescription);

// Get a specific prescription
router.get('/:prescription_id', prescriptionsController.getPrescription);
router.get('/:userId/pastPrescription', prescriptionsController.getPastConsultationsForUser);

module.exports = router;
