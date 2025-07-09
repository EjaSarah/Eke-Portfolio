# 🎬 Eke Ume Portfolio Website

This is the personal portfolio website of **Eke Ume**, a Nigerian movie producer and logistics professional. The project is a full-stack web application built with **React (Vite)** on the frontend and **Node.js + Express + Nodemailer** on the backend for handling contact form messages via Gmail.

---

## 📁 Folder Structure

├── eke-portfolio/contact-server/ # Backend server (Express + Nodemailer)
├── eke-portfolio/frontend # Frontend site (React + styled-components)
.gitignore
├── README.md # Project documentation

---

## 🌐 Live Site

🔗 [View Live Portfolio Website](https://eke-portfolio-ruddy.vercel.app/)

---

## 💡 Features

### 🖼 Frontend (React + Vite)

- Clean and responsive portfolio layout
- Styled with `styled-components`
- Gallery of past works
- Services section
- Google reviews carousel
- Contact form that sends messages directly to Gmail
- Sticky navbar, dark mode toggle, animations

### 📬 Backend (Node.js + Nodemailer)

- Accepts POST requests from the contact form
- Sends email to Gmail using Gmail SMTP
- Includes sender's name, email, and message
- Lets Eke reply directly to sender from Gmail inbox

---

## 🚀 Getting Started (Local Setup)

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/yourusername/eke-portfolio.git
cd eke-portfolio
```

✅ 2. Set Up the Backend
bash
cd contact-server
npm install

Create a .env file:

GMAIL_USER=yourgmail@gmail.com
GMAIL_PASS=your-16-digit-app-password

Start the server locally:
node index.js
This will run the backend on http://localhost:5000

✅ 3. Set Up the Frontend
In another terminal:

bash
cd eke-portfolio
npm install
npm run dev

Frontend runs on http://localhost:5173

Make sure your frontend form points to:

const BACKEND_URL = "http://localhost:5000/contact";

📨 Deployment
🌐 Frontend (Vercel or Netlify)
Deploy eke-portfolio folder directly

Make sure to update backend URL in React to the deployed backend link

const BACKEND_URL = "https://your-contact-server.onrender.com/contact";

☁️ Backend (Render.com)
Push contact-server to GitHub

Create a Web Service on Render

Add the following environment variables in Render:

GMAIL_USER=yourgmail@gmail.com

GMAIL_PASS=your-app-password

Render gives you a public API URL

🧪 Tech Stack
Area Tech Used
Frontend React, Vite, styled-components, Framer Motion
Backend Node.js, Express, Nodemailer
Styling CSS-in-JS (styled-components)
Email Gmail SMTP via App Passwords
Hosting Vercel (frontend), Render (backend)

🛡 Security Notes
Gmail password is stored securely using .env

.env is in .gitignore (never pushed to GitHub)

Gmail uses app password (not your main password)

Only backend handles sending email — no sensitive logic in the frontend

✍️ Author
ejaSarah~Designs
