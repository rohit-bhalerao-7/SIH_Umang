const User = require('../models/userModel'); // Sequelize model for User
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        const { name, email, password, language_preference } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword, language_preference });
        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ userId: user.id }, 'your_jwt_secret');
        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};

const updateUserProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const updateData = req.body;
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
