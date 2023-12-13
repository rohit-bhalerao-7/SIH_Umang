const responseFormatter = (req, res, next) => {
    res.success = (data, message = 'Success', statusCode = 200) => {
        res.status(statusCode).json({
            status: 'success',
            message,
            data
        });
    };

    res.failure = (message = 'Failure', statusCode = 400) => {
        res.status(statusCode).json({
            status: 'error',
            message
        });
    };

    next();
};

module.exports = responseFormatter;
