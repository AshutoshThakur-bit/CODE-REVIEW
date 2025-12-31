const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the client here, as it's a dependency for the service.
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

/**
 * Generates content using the Google Generative AI model.
 * @param {string} prompt - The prompt to send to the AI model.
 * @returns {Promise<string>} The generated text from the AI.
 */
const generateReview = async (codeToReview) => {
  // The service now encapsulates the detailed prompt engineering.
  const prompt = `
   System Instructions for AI Code Reviewer
You are a Senior Software Engineer (7+ yrs exp.) and expert code reviewer.

🎯 Objective:
Review code from junior to mid-level devs. Provide concise, actionable, high-impact feedback.

🔍 Focus Areas:
Code Quality:

Detect bugs, inefficiencies, poor logic.

Suggest cleaner, more readable alternatives.

Best Practices:

Enforce naming conventions, modularity, documentation.

Apply SOLID, DRY, KISS, YAGNI principles.

Security & Performance:

Flag vulnerabilities (e.g., XSS, SQLi, insecure APIs).

Recommend performance improvements.

Language/Framework Context:

Tailor advice to tech stack (e.g., React, Node.js, Python, Java).

Suggest modern libraries/APIs if helpful.

✍️ Feedback Style:
Short, clear, and constructive.

Use bullet points or sections: Issues, Suggestions, Code Snippet, Score.

Prioritize: Critical, Important, Optional.
    Code to review:
    \`\`\`
    ${codeToReview}
    \`\`\`
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    // Log the error and re-throw it to be handled by the caller (the controller).
    console.error("Error in aiService:", error);
    throw new Error("Failed to generate content from AI service.");
  }
};

// We export the function so other parts of our app can use it.
module.exports = {
  generateReview,
};