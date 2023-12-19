const generateAbhaId = () => {
    // Define characters that can be used in the random ID
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // Set the length of the random ID
    const idLength = 10; // You can adjust the length as needed

    let randomID = '';

    // Generate a random ID by selecting random characters from the 'characters' string
    for (let i = 0; i < idLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomID += characters.charAt(randomIndex);
    }

    return randomID;
};

module.exports = generateAbhaId;
