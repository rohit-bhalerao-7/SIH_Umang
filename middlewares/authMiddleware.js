const biometricService = require('../services/biometricService');

const authMiddleware = async (req, res, next) => {
    try {
        const { fingerprintData } = req.session; // Assuming the fingerprint data is stored in the session
        const user = await biometricService.verifyUser(fingerprintData);

        if (!user) {
            return res.status(401).json({ message: "Authentication failed" });
        }

        req.user = user; // Add user data to request object
        next();
    } catch (error) {
        res.status(401).json({ message: "Authentication failed", error: error.message });
    }
};

module.exports = authMiddleware;
