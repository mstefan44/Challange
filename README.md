# 🌥️ Word Cloud Visualization (Coding Challenge)

This project displays an interactive word cloud based on topic data, including volume and sentiment scores. It's built with **React**, **TypeScript**, **Vite**, and **D3.js**.

---

## 🚀 Features

- 📈 Font size based on topic volume (most popular = largest)
- 🎨 Color based on sentiment score:
  - Green if sentiment > 60
  - Red if sentiment < 40
  - Gray otherwise
- 🧠 Word cloud layout generated using D3 (`d3-cloud`)
- 📊 Click a word to see detailed topic metadata
- 📱 Fully responsive layout with ResizeObserver
- ✅ Tested utility functions (`getFontSize`, `getColor`) using Vitest


---

## Getting Started

### 1. Clone the repo
git clone https://github.com/mstefan44/Challange.git

### 2. Install dependencies
npm install

### 3. Start development server
npm run dev


## Run Test
npm run test
