# Emergency RV Repair - Landing Page

A modern, luxury-themed React.js landing page for emergency RV repair services, inspired by Prevost motorhomes website design.

## Features

- 🎨 Modern, luxury design with gold accents
- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🚀 Fast and optimized with Vite
- 🎯 SEO-friendly structure
- 🌙 Dark theme with elegant gradients

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar with mobile menu
│   │   ├── Hero.jsx         # Hero section with video background
│   │   ├── WhyChooseUs.jsx  # Features and benefits section
│   │   ├── Services.jsx     # Services grid
│   │   ├── Features.jsx     # Additional features
│   │   ├── CTA.jsx          # Call-to-action section
│   │   └── Footer.jsx       # Footer with links
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
- `primary.dark` - Dark background color
- `primary.gold` - Gold accent color
- `primary.light` - Light text color

### Content
Update the content in each component file:
- Phone numbers in `Hero.jsx` and `CTA.jsx`
- Service descriptions in `Services.jsx`
- Feature text in `WhyChooseUs.jsx` and `Features.jsx`

### Video Background
The hero section includes an animated video background:
- Primary video source: Pexels road/highway video
- Fallback options: Multiple video sources for reliability
- If videos don't load, it automatically falls back to a background image
- To use your own video: Replace the video source URLs in `Hero.jsx`
- Recommended video format: MP4, 1920x1080, 30fps, muted

### Images
Replace placeholder images:
- Hero background fallback: Update the URL in `Hero.jsx`
- Service images: Update in respective component files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your business.
