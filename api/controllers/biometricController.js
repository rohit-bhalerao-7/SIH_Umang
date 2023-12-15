// const BiometricModel = require('../models/biometricModel');


// const biometricService = require('../../services/biometricService');

// const loginWithBiometrics = async (req, res) => {
//     try {
//         const { fingerprintData } = req.body; // or however you receive the biometric data
//         const user = await biometricService.verifyUser(fingerprintData);

//         if (user) {
//             // The user is authenticated
//             // Generate a token or a session
//             res.status(200).json({ message: "User authenticated successfully", user });
//         } else {
//             res.status(401).json({ message: "Authentication failed" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: "An error occurred during authentication", error: error.message });
//     }
// };

// module.exports = {
//     loginWithBiometrics
// };
