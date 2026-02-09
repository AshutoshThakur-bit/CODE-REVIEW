# 🤖 AI Code Reviewer

An **AI-powered Code Review Web Application** that analyzes source code and provides intelligent feedback, suggestions, and improvements using **Google Gemini API**. The project is built with a **React frontend** and a **Node.js/Express backend**, demonstrating real-world AI integration in modern web applications.

---

## 🚀 Project Overview

The **AI Code Reviewer** helps developers quickly review code for:

* Code quality
* Best practices
* Potential bugs
* Optimization opportunities
* Readability and maintainability

Users can submit code snippets, select the programming language, and receive AI-generated review feedback in real time.

---

## ✨ Features

### 👨‍💻 User Features

* Paste or write code in an editor
* Select programming language
* Submit code for AI review
* Receive structured AI feedback
* View suggestions and improvements
* Clean and responsive UI

### ⚙️ System Features

* Gemini API integration for AI analysis
* RESTful API architecture
* Secure backend communication
* Error handling & validation

---

## 🏗️ Tech Stack

### Frontend

* **React.js**
* **JavaScript (ES6+)**
* **Axios / Fetch API**
* **CSS / Tailwind CSS**

### Backend

* **Node.js**
* **Express.js**
* **Google Gemini API**
* **dotenv**
* **CORS**

---

## 📁 Project Structure

```
AI-Code-Reviewer
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── utils
│   │   └── App.jsx
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── config
│   └── server.js
│
├── .env
├── README.md
└── package.json
```

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js (v16 or higher)
* npm or yarn
* Google Gemini API Key

---

### Clone the Repository

```bash
git clone https://github.com/your-username/AI-Code-Reviewer.git
cd AI-Code-Reviewer
```

---

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file in the **backend** directory:

```
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
```

---

## 🔄 API Flow

1. User submits code from React frontend
2. Request sent to Express backend
3. Backend formats prompt and calls Gemini API
4. Gemini returns AI-generated code review
5. Backend sends response to frontend
6. Feedback displayed to user

---

## 🧪 Sample API Endpoint

| Method | Endpoint    | Description             |
| ------ | ----------- | ----------------------- |
| POST   | /api/review | Send code for AI review |

---

## 🛡️ Security & Best Practices

* API keys stored securely using environment variables
* CORS enabled for controlled access
* Input validation to prevent misuse
* Proper error handling

---

## 📸 Screenshots

> Add screenshots of:

* Code Input Screen
* AI Review Output
* Error Handling UI

---

## 📌 Future Enhancements

* Syntax highlighting editor (Monaco / CodeMirror)
* Multiple AI model support
* Downloadable review reports
* Authentication & user history
* GitHub repository integration

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Ashutosh Thakur**

⭐ If you find this project useful, please give it a star!
