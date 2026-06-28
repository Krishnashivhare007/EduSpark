# ⚡ EduSpark (AI Exam Notes Generator)

> An intelligent, full-stack educational platform that uses AI to instantly generate structured exam notes, interactive charts, and downloadable PDFs tailored to a student's specific curriculum and needs.

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Website-success?style=for-the-badge)](https://eduspark-1-rwfy.onrender.com/)
[![Built with React](https://img.shields.io/badge/Built_with-React-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Powered by Node.js](https://img.shields.io/badge/Powered_by-Node.js-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![Database MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![AI Powered](https://img.shields.io/badge/AI_Powered-Google_Gemini-8E75B2?style=for-the-badge)](https://deepmind.google/technologies/gemini/)

## 📖 About the Project

**EduSpark** is an AI-powered EdTech application designed to revolutionize exam preparation. Instead of generic AI responses, EduSpark takes a student's topic, class level, and exam board (e.g., CBSE, AKTU) and generates a highly structured, printable study guide. 

The platform features a built-in credit system powered by Stripe, secure Google Authentication via Firebase, and a rich text parser that renders AI outputs into beautiful UI components, including Mermaid block diagrams and Recharts data visualizations.

**🔗 [Live Preview](https://eduspark-1-rwfy.onrender.com/)**

## ✨ Key Features

- **🧠 Smart AI Generation:** Generates curriculum-specific notes, short/long Q&A, and quick revision points using the Google Gemini API.
- **📊 Visual Learning:** Automatically renders Mermaid block diagrams and Recharts (Pie/Bar charts) based on the AI's data output.
- **💳 Credit System & Payments:** Includes a built-in credit economy. Users get 50 free credits on signup and can purchase more via a secure **Stripe** payment gateway.
- **🔐 Secure Google Auth:** Seamless, secure login using Firebase Google Authentication, managed by JWT in the backend.
- **🗂️ History & State Management:** Saves all previously generated notes to a MongoDB database, accessible via a user dashboard, managed globally using Redux Toolkit.
- **📄 PDF Export:** Instantly converts the generated markdown notes into clean, printable PDFs.

## 🛠️ Tech Stack

**Client:**
- React.js (Vite)
- Redux Toolkit (Global State Management)
- Tailwind CSS & Framer Motion (Styling & Animations)
- React Markdown & Mermaid (Parsing & Diagram Generation)
- Recharts (Data Visualization)

**Server:**
- Node.js & Express.js
- MongoDB & Mongoose (Database)
- Google Gemini API (AI Content Generation)
- Stripe API (Payment Processing)
- Firebase Auth & JSON Web Tokens (Security & Authentication)

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn
- MongoDB connection URI
- Stripe Developer Account (for API keys)
- Firebase Project (for Auth credentials)
- Google Gemini API Key

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Krishnashivhare007/EduSpark.git](https://github.com/Krishnashivhare007/EduSpark.git)
   cd EduSpark
