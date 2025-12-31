const aiService = require("../services/ai.service");

const generateCodeReview = async (req, res) => {
  try {
    // 1. The controller extracts information from the HTTP request.
    const { code } = req.body; // Let's assume the code comes in the request body.

    if (!code) {
      return res.status(400).json({ message: "No code provided for review." });
    }

    // 2. The controller calls the service to do the heavy lifting.
    // It passes only the necessary data, not the whole req/res objects.
    const reviewText = await aiService.generateReview(code);

    // 3. The controller sends the successful HTTP response.
    res.status(200).send(reviewText);

  } catch (error) {
    // 4. If the service throws an error, the controller catches it
    //    and sends an appropriate error response.
    console.error("Error in aiController:", error);
    res.status(500).json({ message: "An internal server error occurred." });
  }
};

module.exports = {
  generateCodeReview,
};