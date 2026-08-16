# Personal Portfolio Website

A simple, responsive personal portfolio website built with **pure HTML5, CSS3 (Flexbox), and vanilla JavaScript** — no frameworks or libraries used. Created as a course project to demonstrate front-end web development fundamentals.

---

## 📌 Project Objective

To design and build a beginner-friendly, professional-looking personal portfolio website that showcases my education, skills, and projects, and works well on desktop, tablet, and mobile devices.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure (semantic elements) |
| CSS3  | Styling, layout, animations |
| Flexbox | Responsive, flexible layouts |
| Media Queries | Responsiveness across screen sizes |
| Vanilla JavaScript | Mobile menu toggle, contact form feedback, dynamic footer year |

No React, Bootstrap, Tailwind, or Node.js is used — everything is built from scratch.

---

## 📁 Folder Structure

```
portfolio/
├── index.html    # Main HTML file (all sections)
├── style.css     # All styling (Flexbox layouts, colors, responsiveness)
├── script.js     # Minimal JavaScript (nav toggle, form demo, footer year)
└── README.md     # Project documentation (this file)
```

---

## ✨ Features

- Sticky navigation bar with smooth scrolling and a mobile hamburger menu
- Hero / Home section with profile photo and call-to-action buttons
- About Me section
- Education timeline (cards)
- Technical Skills section with animated progress bars
- Projects section with hover-effect cards, tags, and links
- Contact section with a frontend-only form (Name, Email, Message)
- Fully responsive: Desktop → Tablet → Mobile
- Simple hover effects on nav links, buttons, and project cards
- Footer with auto-updating copyright year

---

## ▶️ How to Run Locally

1. Download or clone this folder to your computer.
2. Make sure `index.html`, `style.css`, and `script.js` are in the **same folder**.
3. Double-click `index.html` to open it in any web browser.
   - No installation, server, or build tools required.
4. **(Optional)** For live-reloading while editing, open the folder in VS Code and use the "Live Server" extension.

---

## 🎨 Customization Guide

To make this your own portfolio, update the following in `index.html`:

| What to change | Where |
|---|---|
| Your Name | `<title>`, `.logo`, hero heading, footer |
| Profile photo | Replace the `via.placeholder.com` image URL in the hero section |
| About Me text | About section paragraphs |
| Education details | Education cards (college/school name, years) |
| Skills & levels | Skill cards — change the `width` % in the inline `style` of `.progress` |
| Projects | Replace project titles, descriptions, tags, and links |
| Contact info | Email, phone, location, and social media links |

Colors can be changed globally by editing the `#4f46e5` (primary purple/blue) color used throughout `style.css`.

---

## 🧠 Key Concepts Demonstrated (for Viva/Evaluation)

- **Semantic HTML5**: `header`, `nav`, `main`, `section`, `article`, `footer`
- **CSS Flexbox**: Used for navbar, hero content, cards, and contact layout
- **Responsive Design**: `flex-wrap` + `@media` breakpoints (900px, 700px)
- **DOM Manipulation (JS)**: Toggling classes, handling form submit events, updating text content

---

## 📄 Notes

- The contact form is **frontend-only** — it does not send real emails. Submitting it simply shows a confirmation message via JavaScript (`e.preventDefault()` stops the page reload).
- All images are placeholders (`via.placeholder.com`) and should be replaced with real images before final submission.

---

## 👤 Author

**Your Name**
B.Tech Computer Science (1st Year)
Your College Name
