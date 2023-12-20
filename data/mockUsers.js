const generateAbhaIdFunc = require('../utils/idGenerator');
// const generateFingerprintKeyFunc = require('../utils/fingerprintKey');
// const generateOtpFunc = require('../utils/otpGenerator')

const mockUsers = [
    [
        {
            mobileNumber: "+919876543210",
            name: "Aarav Kumar",
            dateOfBirth: "2000-01-15",
            gender: "male",
            weight: 68,
            height: 171,
            bloodGroup: "B+",
            abhaId: "ABHA0001",
            language_preference: "en",
            disabilityStatus: "no",
            qrCodeKey: "e29pxaJXrn",
            abhaId: generateAbhaIdFunc(),
        },
        {
            mobileNumber: "+919876543211",
            name: "Vivaan Gupta",
            dateOfBirth: "1985-07-19",
            gender: "male",
            weight: 70,
            height: 165,
            bloodGroup: "A-",
            abhaId: "ABHA0002",
            language_preference: "hi",
            disabilityStatus: "no",
            qrCodeKey: "ClGL9z3kL1"
        },
        {
            mobileNumber: "+919876543212",
            name: "Aditya Iyer",
            dateOfBirth: "1990-12-01",
            gender: "male",
            weight: 58,
            height: 160,
            bloodGroup: "O+",
            abhaId: "ABHA0003",
            language_preference: "ta",
            disabilityStatus: "no",
            qrCodeKey: "hHE3pYDHsZ"
        },
        
        {
          mobileNumber: "+919876543212",
          name: "Aditya Iyer",
          dateOfBirth: "1990-12-01",
          gender: "male",
          weight: 58,
          height: 160,
          bloodGroup: "O+",
          abhaId: "ABHA0003",
          language_preference: "ta",
          disabilityStatus: "no",
          qrCodeKey: "hHE3pYDHsZ"
        },
        {
          mobileNumber: "+919876543213",
          name: "Pari Singh",
          dateOfBirth: "1992-05-22",
          gender: "female",
          weight: 55,
          height: 152,
          bloodGroup: "AB+",
          abhaId: "ABHA0004",
          language_preference: "te",
          disabilityStatus: "yes",
          qrCodeKey: "LlwiMPFmnX"
        },
        {
          mobileNumber: "+919876543214",
          name: "Diya Sharma",
          dateOfBirth: "2003-03-10",
          gender: "female",
          weight: 60,
          height: 158,
          bloodGroup: "A+",
          abhaId: "ABHA0005",
          language_preference: "kn",
          disabilityStatus: "no",
          qrCodeKey: "tPPr8eMIL7"
        },
        {
          mobileNumber: "+919876543215",
          name: "Arjun Saini",
          dateOfBirth: "1975-09-30",
          gender: "male",
          weight: 75,
          height: 180,
          bloodGroup: "O-",
          abhaId: "ABHA0006",
          language_preference: "mr",
          disabilityStatus: "no",
          qrCodeKey: "1rVBe4MbJx"
        }
      ]
      
];

module.exports = mockUsers;
