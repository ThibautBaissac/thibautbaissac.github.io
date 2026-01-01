# GitHub Pages Personal Website

Welcome to the source code of my personal portfolio website!

## 🌐 Live Site

Visit the live site at: `https://thibautbaissac.github.io/thibautbaissac/`

## ✨ Features

- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Modern UI** - Dark theme with gradient accents and smooth animations
- **Interactive Elements** - Hover effects, scroll animations, and parallax effects
- **Performance Optimized** - Fast loading with smooth 60fps animations
- **Accessible** - WCAG compliant with keyboard navigation support

## 🛠️ Technologies

- HTML5
- CSS3 (Custom properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## 📁 Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with all custom styles
├── script.js           # JavaScript for interactivity
├── images/             # Images directory
└── README.md           # This file
```

## 🚀 Local Development

1. Clone this repository:
```bash
git clone https://github.com/ThibautBaissac/thibautbaissac.git
cd thibautbaissac
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

## 📝 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #06b6d4;
    /* ... more colors */
}
```

### Content
Update content directly in `index.html`:
- Hero section text
- About me description
- Skills list
- Experience timeline
- Project cards
- Contact information

### Animations
Modify animations in `script.js` or add custom CSS animations in `styles.css`

## 🎨 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Brief professional biography
3. **Skills** - Technical skills categorized by area
4. **Experience** - Professional timeline with roles and achievements
5. **Projects** - Open source projects showcase
6. **Contact** - Ways to get in touch

## 📱 Mobile Responsive

The website is fully responsive with breakpoints at:
- Desktop: > 768px
- Tablet: 768px - 480px
- Mobile: < 480px

## ⚡ Performance

- No external dependencies (except Google Fonts)
- Optimized animations with CSS transforms
- Throttled scroll events
- Lazy loading with Intersection Observer
- Minimal JavaScript footprint

## 🔧 GitHub Pages Deployment

This site is automatically deployed via GitHub Pages. To update:

1. Make changes to your files
2. Commit and push to the main branch:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

3. GitHub Pages will automatically rebuild and deploy

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to open an issue or submit a pull request.

## 📧 Contact

- GitHub: [@ThibautBaissac](https://github.com/ThibautBaissac)
- LinkedIn: [thibaut-baissac](https://linkedin.com/in/thibaut-baissac)

---

Built with ❤️ by Thibaut Baissac
