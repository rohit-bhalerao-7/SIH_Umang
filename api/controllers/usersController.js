const User = require('../models/userModel'); // Sequelize model for User

const mockUsers = require('../../data/mockUsers');
const generateAbhaId = require('../../utils/idGenerator');
const generateFingerprintKey = require('../../utils/fingerprintKey');
const otpGenerator = require('../../utils/otpGenerator'); // Service for mock OTP

const registerUser = async (req, res) => {
    try {
        const {
            mobileNumber,
            name,
            dateOfBirth,
            gender,
            weight,
            height,
            bloodGroup,
            language_preference,
            disability_status,
        } = req.body;

        // Generate a random Abha ID
        const abhaId = generateAbhaId();
        
        // Generate a random fingerprint key
        const generatedFingerprintKey = generateFingerprintKey();

        // Generate a random OTP
        const generatedOtp = otpGenerator();

        // Create a new user with the details, including the generated OTP
        const user = await User.create({
            mobileNumber,
            name,
            dateOfBirth,
            gender,
            weight,
            height,
            bloodGroup,
            language_preference,
            disability_status,
            abhaId,
            fingerprintKey: generatedFingerprintKey,
            otp: generatedOtp // Include the generated OTP
        });

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};


const loginUser = async (req, res) => {
    try {
        const { mobileNumber, enteredOtp } = req.body;

        // Find the user by mobile number
        const user = await User.findOne({ where: { mobileNumber } });

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        // Get the OTP stored in the database for the user
        const storedOtp = user.otp;

        // Validate the entered OTP against the stored OTP
        if (enteredOtp !== storedOtp) {
            return res.status(401).json({ message: "Invalid OTP" });
        }

        // OTP is valid, proceed to login the user
        res.json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};


const loginUserWithFingerprint = async (req, res) => {
    try {
        const { fingerprintKey } = req.body;

        // Simulate a fingerprint match by checking the key
        // In a real scenario, this would be a fingerprint ID or similar identifier
        const user = await User.findOne({ where: { fingerprintKey } });

        if (user) {
            // Simulate successful fingerprint authentication
            // In a real scenario, you might start a session or similar
            res.json({ message: "Login successful", userProfile: user });
        } else {
            res.status(401).json({ message: "Fingerprint authentication failed" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error during fingerprint login", error: error.message });
    }
};

// const updateUserProfile = async (req, res) => {
//     try {
//         const { userId } = req.params;
//         const { height, weight } = req.body;

//         const updateData = { height, weight };
//         const [updated] = await User.update(updateData, { where: { id: userId } });

//         if (updated) {
//             const updatedUser = await User.findOne({ where: { id: userId } });
//             res.json({ message: "User profile updated", user: updatedUser });
//         } else {
//             res.status(404).json({ message: "User not found" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: "Error updating user", error: error.message });
//     }
// };
// const addMockUsers = async (req, res) => {
//     try {
//       // Loop through the mockUsers array and create user records in the database
//       for (const userData of mockUsers) {
//         await User.create(userData);
//       }
  
//       res.status(201).json({ message: "Mock users added successfully" });
//     } catch (error) {
//       res.status(500).json({ message: "Error adding mock users", error: error.message });
//     }
//   };

const addMockUsers = async (req, res) => {
    try {
        const createdUsers = await User.bulkCreate(mockUsers, { validate: true });

        res.status(201).json({ message: "Mock users added successfully", createdUsers });
    } catch (error) {
        console.error("Validation error:", error.errors); // Log validation errors
        res.status(500).json({ message: "Error adding mock users", error: error.message });
    }
};




  
module.exports = { registerUser, loginUser, loginUserWithFingerprint, updateUserProfile, addMockUsers };
  

