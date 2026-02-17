# ShipIt Conf 2026 🚢

This is a responsive landing page I built using HTML,CSS,Javascript for a fictional developer conference.

I wanted to challenge myself to build a complex layout **without using any frameworks** like React, Bootstrap, or Tailwind. The goal was to rely 100% on semantic HTML and modern CSS.

**Live Demo:** 

## 💡 Why I built this
I've been learning about **CSS Grid** and **Accessibility**, and I wanted to put it into practice. I specifically wanted to try the "Checkbox Hack"—controlling the page state (filtering and sorting) using only CSS and hidden radio buttons, with zero JavaScript for the UI logic.

## 🛠️ Tech Stack
* **HTML5:** Semantic tags (`<article>`, `<fieldset>`, `<time>`) for better SEO/Accessibility.
* **CSS3:** Bento Grid layout, CSS Variables, and Glassmorphism.
* **JavaScript:** Vanilla JS (only used for the countdown timer).

## 🧩 The Hardest Part
The trickiest part was getting the **Bento Grid** to reshuffle gracefully when filtering.
I used `grid-auto-flow: dense` to pack the cards tightly when some were hidden. I also had to struggle a bit with the specific CSS selectors (`~`) to get the sibling targeting right for the filters.

## 🚀 Features
* **CSS-Only Filtering:** Filter by "Workshops" or "Keynotes" without reloading.
* **Psychological Pricing:** "Sold Out" states and visual hierarchy for ticket tiers.
* **Dark Mode:** Built natively with CSS variables.
* **Mobile Responsive:** breaks down into a single column on phones.

## 🔮 Future Improvements
If I had more time, I would add:
1.  A real backend to process ticket payments (Stripe).
2.  A dark/light mode toggle switch.
3.  More animations on the speaker cards.

## 🏃‍♂️ How to Run
No `npm install` needed! Just clone the repo and open `index.html`.

```bash
git clone [https://github.com/yourusername/shipit-conf-2026.git](https://github.com/yourusername/shipit-conf-2026.git)
