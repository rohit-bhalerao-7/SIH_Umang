const generateFingerprintKey = () => {
  // Generate a random number between 1 and 2 (inclusive)
  const min = 1;
  const max = 2;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = generateFingerprintKey;
