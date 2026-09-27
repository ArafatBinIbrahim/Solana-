# Solana — Developer Resources (Landing Page)

A pixel-close recreation of Solana Foundation's **Developer Resources** landing page — a hub that points builders toward Solana courses, tools, libraries and official documentation.

This is a front-end practice/portfolio project. It is not affiliated with or endorsed by the Solana Foundation.

## ✨ Features

- Fully responsive layout (mobile → 4K), built with Bootstrap 5 grid + custom CSS
- Accessible navigation: keyboard/touch-friendly dropdown menus, skip link, visible focus states
- Animated preloader, marquee announcement bar, and a rotating hero graphic
- Subtle scroll-reveal animation on section entry (respects `prefers-reduced-motion`)
- Working newsletter form validation (client-side)
- Back-to-top button
- Semantic HTML with meta tags for SEO/social sharing

## 🛠️ Tech Stack

- HTML5
- CSS3 (custom properties, Flexbox, Grid via Bootstrap)
- [Bootstrap 5.3.7](https://getbootstrap.com/) (grid & collapse component)
- Vanilla JavaScript (no framework)
- [Font Awesome](https://fontawesome.com/) icons
- Google Fonts — Space Grotesk & Roboto

## 📁 Project Structure

```
solana-site/
├── index.html
├── css_files/
│   ├── style.css       # base styles, components, animations
│   └── media.css        # responsive breakpoints
├── js_files/
│   └── script.js        # preloader, dropdown, scroll reveal, form logic
└── images/
    ├── logo.png
    ├── favicon.png
    ├── banner_img.png
    ├── Rectangle.png
    ├── box1.png ... box8.png
    ├── youtube.png
    └── podcast.png
```

## 🚀 Getting Started

No build step required — it's a static site.

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   ```
2. Open `index.html` in your browser, or serve it locally:
   ```bash
   npx serve .
   ```

## 📌 Notes

- All image filenames are **case-sensitive** — keep `Rectangle.png` capitalized exactly as-is.
- External CDN links (Bootstrap, Font Awesome, Google Fonts) require an internet connection.
- Navigation and "Learn more" links currently point to `#` placeholders — wire these up to real pages/URLs as needed.

## 📄 License

This project is for educational/portfolio purposes. Solana branding and imagery belong to their respective owners.

## 🙌 Credits

Designed & developed by **Kazi Arafat Bin Ibrahim**
