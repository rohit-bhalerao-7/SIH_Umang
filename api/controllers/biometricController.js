// const { createUserSession } = require('../services/authService');

// const biometricLogin = async (req, res) => {
//     try {
//         const { fingerprintData } = req.body;
//         const sessionCreated = await createUserSession(fingerprintData, req.session);

//         if (sessionCreated) {
//             res.status(200).json({ message: "Biometric authentication successful" });
//         } else {
//             res.status(401).json({ message: "Biometric authentication failed" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: "An error occurred during biometric authentication", error: error.message });
//     }
// };

// module.exports = {
//     biometricLogin
// };
