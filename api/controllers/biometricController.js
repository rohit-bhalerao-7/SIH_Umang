const BiometricModel = require('../models/biometricModel');

const addBiometricData = async (req, res) => {
    // Extract biometric data from request body
    const { user_id, fingerprint_data, retina_scan_data } = req.body;
    // Save biometric data to database
    const biometricData = await BiometricModel.create({ user_id, fingerprint_data, retina_scan_data });
    res.status(201).json({ message: "Biometric data added", biometricData });
};

const getBiometricData = async (req, res) => {
    // Retrieve biometric data for a user
    const { user_id } = req.params;
    const biometricData = await BiometricModel.findOne({ user_id });
    res.json({ biometricData });
};

module.exports = { addBiometricData, getBiometricData };
