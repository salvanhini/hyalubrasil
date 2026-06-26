# Hyalu Brasil Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished one-page corporate B2B website for Hyalu Brasil using the approved page structure and copy.

**Architecture:** Static HTML, CSS, and JavaScript keep the site lightweight and easy to host. The page uses semantic sections, one project-bound generated hero image, responsive layout rules, and a small Node-based smoke test that validates required content.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js for verification.

---

### Task 1: Project Assets

**Files:**
- Create: `assets/hero-hyalu-brasil.png`

- [ ] **Step 1: Copy the generated hero image into the project**

Run: `mkdir -p assets && cp /home/marco/.codex/generated_images/019f0190-5532-7c61-9045-aa4344c62e8d/ig_0a3ef8384d2d6153016a3dd83e9d788191bd2900f0b4decbc4.png assets/hero-hyalu-brasil.png`

Expected: `assets/hero-hyalu-brasil.png` exists.

### Task 2: Static Site

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`

- [ ] **Step 1: Create semantic HTML**

Build the requested sections in order: header, hero, about, portfolio, differentials, contact, footer.

- [ ] **Step 2: Add responsive CSS**

Use a refined corporate palette with navy, blue, white, and neutral gray. Ensure mobile navigation and stacked sections are readable.

- [ ] **Step 3: Add small JavaScript enhancements**

Support mobile menu toggling, smooth anchor behavior, current year in footer, and a simple form success state.

### Task 3: Verification

**Files:**
- Create: `tests/site-smoke.test.js`

- [ ] **Step 1: Write a smoke test**

Validate that all required navigation labels, section headings, CTAs, form fields, and footer/legal links exist in `index.html`.

- [ ] **Step 2: Run the smoke test**

Run: `node tests/site-smoke.test.js`

Expected: PASS.

- [ ] **Step 3: Preview locally**

Run: `python3 -m http.server 4173`

Open: `http://localhost:4173`

Expected: The page renders with the generated hero image, responsive layout, working anchors, and no obvious visual overlap.
