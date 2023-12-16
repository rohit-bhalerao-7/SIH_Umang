const biometricService = require('./biometricService');

const createUserSession = async (fingerprintData, session) => {
    const user = await biometricService.verifyUser(fingerprintData);

    if (user) {
        session.userId = user.id; // Store user identifier in the session
        return true;
    }
    return false;
};

module.exports = {
    createUserSession
};
