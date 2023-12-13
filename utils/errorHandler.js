const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode);

    res.json({
        status: 'error',
        statusCode,
        message: err.message
    });
};

module.exports = errorHandler;
