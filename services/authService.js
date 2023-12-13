const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

const generateToken = (userId) => {
    return jwt.sign({ userId }, 'your_jwt_secret', { expiresIn: '1h' }); // Customize the secret and expiry
};

module.exports = {
    hashPassword,
    comparePassword,
    generateToken
};
