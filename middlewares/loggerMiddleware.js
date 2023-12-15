const logger = require('../utils/logger');

const loggerMiddleware = (req, res, next) => {
    logger.info(`Request received: ${req.method} ${req.url}`);
    next();
};

module.exports = loggerMiddleware;
