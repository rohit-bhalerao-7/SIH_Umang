const express = require('express');
const app = express();
const logger = require('./utils/logger');
const errorHandler = require('./utils/errorHandler');
const responseFormatter = require('./utils/responseFormatter');

// Import routes
const usersRoutes = require('./api/routes/usersRoutes');
const biometricRoutes = require('./api/routes/biometricRoutes');
const consultationsRoutes = require('./api/routes/consultationsRoutes');
const prescriptionsRoutes = require('./api/routes/prescriptionsRoutes');
const doctorsRoutes = require('./api/routes/doctorsRoutes');

// Database connection setup (Replace with your DB configuration)
const sequelize = require('./config/dbConfig');

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for logging requests
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.path}`);
    next();
});

// Middleware for response formatting
app.use(responseFormatter);

// Define routes
app.use('/api/users', usersRoutes);
app.use('/api/biometric', biometricRoutes);
app.use('/api/consultations', consultationsRoutes);
app.use('/api/prescriptions', prescriptionsRoutes);
app.use('/api/doctors', doctorsRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    logger.info(`Server running on port ${PORT}`);
    try {
        await sequelize.authenticate();
        logger.info('Database connected successfully.');
    } catch (error) {
        logger.error('Unable to connect to the database:', error);
    }
});

module.exports = app;
