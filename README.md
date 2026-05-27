# Matthias Z. Iliya - Premium Portfolio Website

A premium, production-ready portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features glassmorphism design, smooth animations, and complete SEO optimization.

## 🌟 Features

- **Premium Design**: Apple-style UI with glassmorphism effects
- **Smooth Animations**: Framer Motion for cinematic transitions
- **Responsive**: Mobile-first design for all devices
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **Performance**: Fast loading with code splitting
- **Modern Stack**: React 18, Vite, Tailwind CSS, Framer Motion
- **Multiple Pages**: Home, Skills, Projects, Services, Testimonials, Resume, Contact

## 📋 Pages Included

1. **Home**: Hero section with rotating titles, tech stack, services preview, testimonials
2. **Skills**: Animated skill cards with progress bars, competencies
3. **Projects**: Filterable project grid with modal previews
4. **Services**: Service cards with benefits, pricing, and process timeline
5. **Testimonials**: Carousel and grid layout of client reviews
6. **Resume**: Experience, education, certifications, and skills overview
7. **Contact**: Contact form, social links, multiple contact methods

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Extract the project**
```bash
unzip matthias-portfolio.zip
cd matthias-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The website will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
matthias-portfolio/
├── public/                      # Static assets
│   └── favicon.ico
├── src/
│   ├── components/             # Reusable components
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── TechStack.jsx
│   │   ├── ServicesPreview.jsx
│   │   ├── TestimonialsPreview.jsx
│   │   └── CTASection.jsx
│   ├── pages/                  # Page components
│   │   ├── Home.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   ├── styles/                 # Global styles
│   │   └── globals.css
│   ├── assets/                 # Images and media
│   ├── animations/             # Animation utilities
│   └── App.jsx
├── index.html                  # HTML entry point
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── package.json               # Dependencies
└── README.md

```

## 🎨 Customization

### Update Personal Information

**In `src/components/Hero.jsx`:**
- Change the name from "Matthias Z. Iliya"
- Update the rotating titles
- Modify stats (Projects, Clients, Experience)
- Replace profile image placeholder

**In `src/components/Footer.jsx`:**
- Update email, WhatsApp, social links
- Customize footer links

**In `index.html`:**
- Update meta tags for SEO
- Change title and description
- Update OG images

### Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'graphite': '#1a1a1a',
  'dark-gray': '#0f0f0f',
  'premium-black': '#000000',
  'silver': '#f5f5f7',
  'premium-white': '#ffffff',
  'subtle-blue': '#0071e3', // Change this to your brand color
}
```

### Add Your Projects

Edit `src/pages/Projects.jsx`:
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'web', // web, mobile, design, 3d, motion
    description: 'Description here',
    image: '🌐', // Use emoji or image URL
    tags: ['React', 'Tailwind'],
    year: '2024',
  },
  // Add more projects...
]
```

### Update Services

Edit `src/pages/Services.jsx` and modify the services array with your offerings.

### Add Testimonials

Edit `src/pages/Testimonials.jsx` and add/modify testimonial entries with client feedback.

### Update Resume Information

Edit `src/pages/Resume.jsx` to add:
- Your experience history
- Education details
- Certifications
- Skills

## 📧 Contact Form Setup

The contact form in `src/pages/Contact.jsx` currently logs to console. To use it:

**Option 1: EmailJS**
```bash
npm install @emailjs/browser
```

**Option 2: Formspree**
Replace the form action with your Formspree endpoint.

**Option 3: Custom Backend**
Connect to your own backend API for form submissions.

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir dist
```

### GitHub Pages
Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

## 🔍 SEO Optimization

The site includes:
- ✅ Meta tags for all pages
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Mobile-first responsive design
- ✅ Performance optimization
- ✅ Structured data ready

**Update in `index.html`:**
- Replace "Matthias Z. Iliya" with your name
- Update all meta descriptions
- Change OG images
- Update Google Analytics ID

## ⚡ Performance Tips

1. **Optimize Images**: Replace emoji placeholders with actual images
2. **Lazy Loading**: Already implemented for images
3. **Code Splitting**: Configured in vite.config.js
4. **Minification**: Automatic in production build
5. **Compression**: Use gzip on your hosting provider

## 🛠️ Technologies Used

- **React 18**: UI library
- **Vite**: Fast build tool
- **Tailwind CSS**: Utility-first CSS
- **Framer Motion**: Animation library
- **React Router DOM**: Navigation
- **Lucide React**: Icon library

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is provided as-is for personal use.

## 🤝 Support

For issues or questions:
1. Check the code comments
2. Review component props
3. Test in development mode
4. Check console for errors

## 🎯 Next Steps

1. **Personalize**: Update all content with your information
2. **Add Images**: Replace emoji placeholders with real images
3. **Setup Email**: Configure contact form
4. **Deploy**: Push to Vercel, Netlify, or your hosting
5. **Monitor**: Set up analytics

## 📞 Contact & Social

Update these links in `src/components/Footer.jsx` and `src/pages/Contact.jsx`:
- GitHub
- LinkedIn
- Instagram
- Twitter
- Facebook
- WhatsApp
- Email

## 🚀 Version

v1.0.0 - Initial Release

---

**Built with ❤️ for Matthias Z. Iliya**

Happy building! 🎉
