# Zarkash Mirza — Portfolio SPA

Welcome to the repository for my personal developer portfolio site, hosted live at [zarkashmirza.github.io](https://zarkashmirza.github.io). This project serves as my first professional run at an architectural web portfolio, built from scratch using core web foundations.

---

## 1. Project Overview & Architectural Guidelines

* **Target Domain:** `zarkashmirza.github.io`
* **Tech Stack:** Vanilla HTML5, CSS3, JavaScript (Core web foundations—no Jekyll, no Hugo, no frameworks).
* **Architecture Style:** Single-Page Application (SPA) utilizing HTML anchor tags (`id="..."`) and native smooth scrolling (`scroll-behavior: smooth`).
* **Version Control Discipline:** Direct-to-main workflow targeting a minimum of 30 atomic commits.

---

## 2. Directory Structure

```text
/
├── index.html         # Single-page layout containing all semantic sections
├── css/
│   └── app.css        # Modularized stylesheet with designated section comments
├── js/
│   └── app.js        # DOM interaction logic, hamburger menu state controller
└── assets/
    ├── images/        # Profile graphics, dev-icons, design assets
    └── gifs/          # Figma wireframe prototypes & animations
```

---

## 3. Syntactic & Naming Conventions

To maintain strict separation of concerns and instant visual recognition across code files:

* **HTML IDs** (`camelCase`): Reserved strictly for unique DOM elements and JavaScript execution hooks (e.g., `id='hamburgerBtn'`, `id='aboutSection`).
* **CSS Classes** (`snake_case`): Used for styling blocks, modifiers, and layout states (e.g., `.nav_dropdown_active`, `grid_dev_container`).

---

## 4. Modular CSS Architecture (`app.css`)

The stylesheet is partitioned into explicit functional blocks to keep development clean and scalable:
1. `/*==== App Shell ====*/`
    * Global CSS resets and custom properties.
2. `/*==== Header & Nav ====*/`
    * Fixed top-centre pill container, right-aligned hamburger icon, and smooth dropdown transition mechanics.
3. `/*==== CSS Grid & Layouts ====*/`
    * Layout definitions utilizing CSS Grid template areas (`grid-template-areas`) for structured sections like the 50/50 Dev & Design split.
4. `/*==== Component Styles ====*/`
    * Modular styling for buttons, dev-icon pairs, assignment snapshot cards, and the contact form grid.

---

## 5. Page Layout Breakdown

* **Header Section:** Hero banner establishing personal identity and tech vibe, accompanied by the fixed top-centre hamburger navigation.
* **About Section:** Biographical background detailing my developer journey and background.
* **Skills / Toolbox Section:** Tech stack showcase featuring dev-icons paired with descriptive context illustrating functional understanding.
* **Snapshots Section:** Highlight reels of standout academic and creative coding assignments.
* **Dev / Design Section:** A clean 50/50 CSS Grid split balancing code snippets with original vector art assets, wireframe prototypes, and UI design work.
* **Contact Section:** A balanced 50/50 layout housing a personal outreach blurb on the left and a functional contact form on the right.
* **Footer:** Clean copyright and attribution block.