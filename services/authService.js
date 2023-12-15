const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    } catch (error) {
        throw new Error('Password hashing failed');
    }
};

const comparePassword = async (password, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        throw new Error('Password comparison failed');
    }
};

const generateToken = (userId, expiresIn = '1h') => {
    try {
        const secret = process.env.JWT_SECRET; // Use the secret from env
        const token = jwt.sign({ userId }, secret, { expiresIn });
        return token;
    } catch (error) {
        throw new Error('Token generation failed');
    }
};

module.exports = {
    hashPassword,
    comparePassword,
    generateToken
};
