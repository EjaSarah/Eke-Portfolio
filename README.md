# 💼 Eke Portfolio Website

A modern and responsive portfolio website built using **React + Vite**, designed to showcase personal or professional work. Includes a fully functional contact form powered by **EmailJS**, elegant animations using **Framer Motion**, and clean styling with **styled-components**.

---

## 🚀 Live Demo

🌐 [View Website](https://eke-portfolio-ruddy.vercel.app/)

---

## ✨ Features

- 🚀 Built with **React + Vite**
- 💬 Fully working contact form (no backend) via **EmailJS**
- 🎨 Styled using **styled-components**
- ✨ Smooth animations with **Framer Motion**
- 🔔 Instant feedback using **react-hot-toast**
- 📱 Responsive design (mobile-friendly)
- 🌗 Dark mode toggle _(if implemented)_

---

## 🛠️ Tech Stack

| Technology        | Description                        |
| ----------------- | ---------------------------------- |
| React             | JavaScript library for building UI |
| Vite              | Fast frontend tooling              |
| EmailJS           | Email sending service (no backend) |
| styled-components | CSS-in-JS styling                  |
| Framer Motion     | Animations and transitions         |
| react-hot-toast   | Notifications for UX feedback      |

---

## 📁 Project Structure

eke-portfolio/
├── public/ # Static assets
├── src/
│ ├── assets/ # Images and static files
│ ├── components/ # Reusable UI components
│ ├── pages/ # Main page components (Home, About, Contact)
│ └── App.jsx # Main app entry point
├── .env # EmailJS environment variables
├── .gitignore # Ignored files
├── index.html # HTML template
├── package.json # Project config and dependencies
├── vite.config.js # Vite settings
└── README.md # Project documentation

---

## 🔐 Environment Variables

> Create a `.env` file in the **project root** (same level as `package.json`) and add:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

⚠️ Don’t forget to include `.env` in your `.gitignore` file.

---

## 💌 Setting Up EmailJS

1. Go to [https://emailjs.com](https://emailjs.com) and create an account
2. Add your email service (e.g., Gmail)
3. Create a template using:
   - `{{user_name}}`
   - `{{user_email}}`
   - `{{message}}`
4. Go to **Account → API Keys** and copy your **Public Key**
5. Set **Reply-To Email** as `{{user_email}}` to be able to respond directly
6. Add all EmailJS keys to `.env` as shown above

---

## 🧪 Running Locally

```bash
# Clone the project
git clone https://github.com/yourusername/eke-portfolio.git
cd eke-portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Visit http://localhost:5173 to preview locally.

npm run build

Builds the app to the dist/ folder.

🚀 Deploy on Vercel
Go to https://vercel.com

Click New Project, import your GitHub repo

Select:

Framework: Vite

Build Command: npm run build

Output Directory: dist

Add the same .env variables to Vercel → Project Settings → Environment Variables

Click Deploy

✅ All done! Your site will be live, and every GitHub push will auto-deploy.

🤖 Git Setup Cheat Sheet
bash
Copy code
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/eke-portfolio.git
git push -u origin main

🙋‍♀️ Author
Sarah Eja
Frontend Developer
