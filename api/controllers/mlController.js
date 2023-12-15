const mlModelService = require('../services/ml/mlModelService');

const diagnoseIssue = async (req, res) => {
    try {
        const { transcribedText } = req.body; // Text obtained from the speech-to-text service
        const diagnosis = await mlModelService.analyzeTextForDiagnosis(transcribedText);

        // Assuming the ML model may ask follow-up questions
        if (diagnosis.followUpQuestions) {
            res.status(200).json({ followUpQuestions: diagnosis.followUpQuestions });
        } else {
            res.status(200).json({ diagnosis: diagnosis.result });
        }
    } catch (error) {
        res.status(500).json({ message: "An error occurred during the analysis", error: error.message });
    }
};

module.exports = {
    diagnoseIssue
};
