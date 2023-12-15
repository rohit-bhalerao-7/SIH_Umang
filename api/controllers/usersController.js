const User = require('../models/userModel'); // Sequelize model for User
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authService = require('../../services/authService')

const registerUser = async (req, res) => {
    try {
       // const { name, email, password, language_preference, fingerprint_data, retina_scan_data } = req.body;
        const { name, email, password, language_preference } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with the hashed password
        const user = await User.create({
            name,
            email,
            password_hash: hashedPassword, // Store the hashed password in the "password_hash" column
            language_preference
        });

        // // Assuming you have a Biometric model, you can create a record for the biometric data
        // const biometricData = await Biometric.create({
        //     user_id: user.user_id,
        //     fingerprint_data, // Store the fingerprint data
        //      // Store the retina scan data
        // });

        // Generate a JWT token for the registered user
        const token = authService.generateToken(user.user_id);

        res.status(201).json({ message: "User registered successfully", user, biometricData, token });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};




const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user || !bcrypt.compareSync(password, user.password_hash)) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = authService.generateToken(user.user_id);
        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};


const updateUserProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const updateData = req.body;
        const [updated] = await User.update(updateData, { where: { user_id: userId } });
        if (updated) {
            const updatedUser = await User.findOne({ where: { user_id: userId } });
            res.json({ message: "User profile updated", user: updatedUser });
        } else {
            throw new Error('User not found');
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
};


module.exports = { registerUser, loginUser, updateUserProfile };
