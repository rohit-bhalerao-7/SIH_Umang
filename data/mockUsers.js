const generateAbhaIdFunc = require('../utils/idGenerator');
const generateFingerprintKeyFunc = require('../utils/fingerprintKey');
const generateOtpFunc = require('../utils/otpGenerator')

const mockUsers = [
    {
        mobileNumber: "1234567890",
        name: "Rohit",
        dateOfBirth: "1990-01-01",
        gender: "Male",
        weight: 70.5,
        height: 175.2,
        bloodGroup: "A+",
        language_preference: "English",
        disabilityStatus: "no", // "No" or "Yes" based on the persona
        abhaId: generateAbhaIdFunc(), // Generate Abha ID using your logic
        fingerprintKey: generateFingerprintKeyFunc(), // Generate Fingerprint Key using your logic
        otp: generateOtpFunc() // Generate Fingerprint Key using your logic
    },
    {
        mobileNumber: "9876543210",
        name: "Arpit",
        dateOfBirth: "1985-03-15",
        gender: "Female",
        weight: 60.2,
        height: 160.0,
        bloodGroup: "B+",
        language_preference: "Hindi",
        disabilityStatus: "yes",
        abhaId: generateAbhaIdFunc(),
        fingerprintKey: generateFingerprintKeyFunc(), // Generate Fingerprint Key using your logic
        otp: generateOtpFunc() // Generate Fingerprint Key using your logic

    },
    {
        mobileNumber: "8765432109",
        name: "Tanishq",
        dateOfBirth: "1995-07-20",
        gender: "Male",
        weight: 75.0,
        height: 180.5,
        bloodGroup: "O+",
        language_preference: "Gujarati",
        disabilityStatus: "no",
        abhaId: generateAbhaIdFunc(),
        fingerprintKey: generateFingerprintKeyFunc(), // Generate Fingerprint Key using your logic
        otp: generateOtpFunc() // Generate Fingerprint Key using your logic

    },
    {
        mobileNumber: "7654321098",
        name: "Aditya",
        dateOfBirth: "1988-12-05",
        gender: "Female",
        weight: 55.8,
        height: 165.3,
        bloodGroup: "AB+",
        language_preference: "English",
        disabilityStatus: "yes",
        abhaId: generateAbhaIdFunc(),
        fingerprintKey: generateFingerprintKeyFunc(), // Generate Fingerprint Key using your logic
        otp: generateOtpFunc() // Generate Fingerprint Key using your logic

    },
    {
        mobileNumber: "6543210987",
        name: "Ruturaj",
        dateOfBirth: "1992-09-20",
        gender: "Male",
        weight: 68.3,
        height: 172.7,
        bloodGroup: "A-",
        language_preference: "Hindi",
        disabilityStatus: "no",
        abhaId: generateAbhaIdFunc(),
        fingerprintKey: generateFingerprintKeyFunc(), // Generate Fingerprint Key using your logic
        otp: generateOtpFunc() // Generate Fingerprint Key using your logic

    },
    {
        mobileNumber: "5432109876",
        name: "User6",
        dateOfBirth: "1987-06-12",
        gender: "Female",
        weight: 63.7,
        height: 167.1,
        bloodGroup: "A+",
        language_preference: "Telugu",
        disabilityStatus: "no",
        abhaId: generateAbhaIdFunc(),
        fingerprintKey: generateFingerprintKeyFunc(), // Generate Fingerprint Key using your logic
        otp: generateOtpFunc() // Generate Fingerprint Key using your logic

    }
];

module.exports = mockUsers;
