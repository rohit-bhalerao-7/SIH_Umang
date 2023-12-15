const axios = require('axios');
const mlModelUrl = 'http://your-ml-model-api-endpoint';

const analyzeTextForDiagnosis = async (text) => {
    // Send the text to your ML model and get the analysis result
    // This assumes your ML model is exposed via a REST API
    const response = await axios.post(mlModelUrl, { text });
    return response.data; // This should include the diagnosis and any follow-up questions
};

module.exports = {
    analyzeTextForDiagnosis
};
