const speechToTextService = require('../services/speech/speechToTextService');

const transcribeSpeech = async (req, res) => {
    try {
        const { audioBuffer } = req.file; // Assuming audio is uploaded and available as a buffer
        const transcription = await speechToTextService.transcribe(audioBuffer);

        res.status(200).json({ message: "Speech transcribed successfully", transcription });
    } catch (error) {
        res.status(500).json({ message: "An error occurred during transcription", error: error.message });
    }
};

module.exports = {
    transcribeSpeech
};
