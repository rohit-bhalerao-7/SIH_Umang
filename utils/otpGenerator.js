// Function to generate a random 4-digit OTP
function generateOTP() {
    // Generate a random number between 1000 and 9999 (inclusive)
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = generateOTP;
