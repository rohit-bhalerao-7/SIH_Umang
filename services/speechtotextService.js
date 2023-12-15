const speech = require('@google-cloud/speech');
const client = new speech.SpeechClient();

const transcribe = async (audioBuffer) => {
    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
        content: audioBuffer.toString('base64'),
    };
    const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'en-US',
    };
    const request = {
        audio: audio,
        config: config,
    };

    // Detects speech in the audio file
    const [response] = await client.recognize(request);
    const transcription = response.results.map(result => result.alternatives[0].transcript).join('\n');
    return transcription;
};

module.exports = {
    transcribe
};
