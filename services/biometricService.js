const BiometricModel = require('../models/biometricModel');

const addBiometricData = async (biometricData) => {
    return await BiometricModel.create(biometricData);
};

const getBiometricData = async (userId) => {
    return await BiometricModel.findOne({ where: { user_id: userId } });
};

module.exports = {
    addBiometricData,
    getBiometricData
};
