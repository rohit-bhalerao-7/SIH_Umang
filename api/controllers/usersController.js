const User = require('../models/userModel'); // Sequelize model for User
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            biometricData,
            language_preference,
            height,
            weight,
            age,
            gender
        } = req.body;

        // Hash the password (if needed)
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with the hashed password and other details
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            biometric_data: biometricData, // Store the biometric data
            language_preference,
            height,
            weight,
            age,
            gender
        });

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};


const loginUser = async (req, res) => {
    try {
        // Assuming you receive biometric data in the request body
        const { biometricData } = req.body;

        // Find the user by biometric data
        const user = await User.findOne({ where: { biometric_data: biometricData } });

        if (!user) {
            return res.status(401).json({ message: "Invalid biometric data" });
        }

        // If biometric data is valid, generate a JWT token for the user
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};


const updateUserProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const updateData = req.body;

        // Check if the updateData contains only 'height' and 'weight' fields
        const allowedFields = ['height', 'weight'];
        const isValidUpdate = Object.keys(updateData).every(field => allowedFields.includes(field));

        if (!isValidUpdate) {
            return res.status(400).json({ message: "Invalid fields for update" });
        }

        const [updated] = await User.update(updateData, { where: { id: userId } });

        if (updated) {
            const updatedUser = await User.findOne({ where: { id: userId } });
            res.json({ message: "User profile updated", user: updatedUser });
        } else {
            throw new Error('User not found');
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
};


module.exports = { registerUser, loginUser, updateUserProfile };
