# Zarkash Mirza — Portfolio & Systems Hub

Welcome to the production repository for my personal developer portfolio, hosted live at [zarkashmirza.github.io](https://zarkashmirza.github.io). This project serves as an architectural showcase built from scratch using core web foundations.

---

## 🏛️ Architecture & Multi-Project Ecosystem
This repository acts as the central command hub, managing the core portfolio interface while linking out to dedicated satellite project repositories:
- **Finley Books (`/finley-books/`)**: A responsive single-page application bookstore layout showcasing advanced CSS Grid mechanics.
- **Mystic Pages (`/mystic-pages/`)**: A high-fidelity mobile UI/UX prototype built in Figma focused on mobile ergonomics and design systems.

---

## 🛠️ Technical Stack & Engineering Standards
- **Core Foundations:** Vanilla HTML5, CSS3, JavaScript (No frameworks, zero bloat).
- **Layout Architecture:** Fluid CSS Grid utilizing `auto-fit` and `minmax()` math for seamless mobile-first wrapping.
- **Media Optimization:** Handbrake-processed H.264 MP4 video loops (stripped audio, Web Optimized / Fast Start, `playsinline` attributes for iOS DOM compliance).
- **Version Control & CI/CD:** Direct-to-main deployment pipeline via GitHub Pages global edge network.

---

## 📂 Directory Structure

```text
/
├── index.html         # Single-page layout containing all semantic sections
├── css/
│   └── app.css        # Modularized stylesheet with designated section comments
├── js/
│   └── app.js         # DOM interaction logic and UI state controllers
└── assets/
    ├── images/        # Profile graphics, dev-icons, design system tokens
    └── videos/        # Performance-optimized MP4 portfolio preview loops
```

---

## 📐 Page Layout Breakdown

- **Header Section:** Hero banner establishing personal identity and technical focus.
- **About Section:** Biographical background detailing my development journey.
- **Skills/Toolbox Section:** Highlight reels of production code assignments and web applications.
- **Design & Prototyping Section:** A dedicated showcase balancing UI vector assets, wireframes, and interactive mobile prototypes.
- **Contact Section:** Clean outreach layout housing professional links and a contact form.

---

## 📝 Syntactic & Naming Conventions

To maintain strict separation of concerns and instant visual recognition across code files:

- **HTML IDs** (`camelCase`): Reserved strictly for unique DOM elements and JavaScript execution hooks (e.g., `id='hamburgerBtn'`, `id='aboutSection'`).
- **CSS Classes** (`snake_case`): Used for styling blocks, modifiers, and layout states (e.g., `nav_dropdown_active`, `grid_dev_container`).

---

## 💻 Modular CSS Architecture (`app.css`)

The stylesheet is partitioned into explicit functional blocks to keep development clean and scalable:
1. `/*==== ROOT ====*/`
    * Global CSS styles and custom properties.
2. `/*==== FONT-STYLES ====*/`
    * Global CSS styles and custom properties.
3. `/*==== APP SHELL ====*/`
    * Global CSS resets and constant properties.
4. `/*==== HEADER ====*/`
    * Header section and CSS properties.
5. `/*==== CSS GRID ====*/`
    * Layout definitions utilizing CSS Grid template areas (`grid-template-areas`) for structured sections like the 50/50 Dev & Design split.
6. `/*==== COMPONENT STYLES ====*/`
    * Modular styling for buttons, dev-icon pairs, assignment snapshot cards, and the contact form grid.
7. `/*==== MEDIA QUERIES ====*/`
    * Multi-screen `@media ()` queries for universal scalability across multiple devices.