# Quick Start Guide

Get your portfolio running in 5 minutes!

## ⚡ Ultra-Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# https://localhost:3000
```

Done! Your portfolio is now running locally.

## 📝 First Steps Checklist

After starting the development server, customize these immediately:

### 1. **Update Your Name** (2 minutes)
   - **File**: `src/components/Hero.jsx`
   - Find: `Matthias Z. Iliya`
   - Replace with your name
   - Update rotating titles if needed

### 2. **Update Contact Info** (2 minutes)
   - **File**: `src/pages/Contact.jsx`
   - Update email address
   - Update WhatsApp number
   - Update social media links

### 3. **Add Your Photo** (3 minutes)
   - **File**: `src/components/Hero.jsx`
   - Replace emoji with your image
   - Update alt text
   - Optimize image size

### 4. **Update About Text** (2 minutes)
   - **File**: `src/components/Hero.jsx`
   - Update introduction paragraph
   - Update professional titles
   - Update statistics (Projects, Clients, Years)

### 5. **Customize Services** (5 minutes)
   - **File**: `src/pages/Services.jsx`
   - Update service titles and descriptions
   - Modify benefits list
   - Update pricing if needed

## 🎨 Customization Guide

### Change Brand Color
   - **File**: `tailwind.config.js`
   - Find: `'subtle-blue': '#0071e3'`
   - Replace with your color code

### Update Navigation Links
   - **File**: `src/components/Navigation.jsx`
   - Modify `navItems` array
   - Add or remove pages as needed

### Edit Footer
   - **File**: `src/components/Footer.jsx`
   - Update social media links
   - Modify footer text

### Add Your Projects
   - **File**: `src/pages/Projects.jsx`
   - Find: `const projects = [`
   - Add new project objects
   - Use emojis or image URLs

### Update Skills
   - **File**: `src/pages/Skills.jsx`
   - Find: `const skillCategories = [`
   - Update skill names and percentages

### Add Testimonials
   - **File**: `src/pages/Testimonials.jsx`
   - Find: `const testimonials = [`
   - Add client testimonials with details

## 🚀 Building for Production

```bash
# Build optimized production version
npm run build

# Preview production build
npm run preview

# Ready to deploy!
# dist/ folder contains all files
```

## 📦 Deployment in 2 Minutes

### Vercel (Easiest)
```bash
npm i -g vercel
vercel
# Follow prompts - Done!
```

### Netlify
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir dist
```

## 🔧 Configuration Files Reference

| File | Purpose | How to Customize |
|------|---------|------------------|
| `tailwind.config.js` | Colors, fonts, spacing | Change color variables |
| `package.json` | Dependencies, scripts | Don't modify unless adding packages |
| `vite.config.js` | Build configuration | Don't modify unless deploying to subdirectory |
| `.env.example` | Environment variables | Copy to `.env.local`, add your values |
| `index.html` | Meta tags, SEO | Update title, description, OG tags |

## 📚 File Organization

```
📁 src/
├── 📁 components/     ← Reusable UI pieces
├── 📁 pages/          ← Full page components
├── 📁 styles/         ← Global CSS
├── 📁 animations/     ← Animation presets
├── 📁 utils/          ← Helper functions
└── App.jsx            ← Main app component
```

## 🎯 What to Edit for Your Portfolio

**High Priority** (Do first):
- [ ] Hero section name and titles
- [ ] Your photo/image
- [ ] Contact information
- [ ] Social media links

**Medium Priority** (Do second):
- [ ] Project list and descriptions
- [ ] Skills and experience
- [ ] Services offered
- [ ] Testimonials

**Low Priority** (Optional):
- [ ] Brand colors
- [ ] Typography
- [ ] Animations
- [ ] Advanced customization

## ⚠️ Common Issues & Solutions

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use different port
npm run dev -- --port 3001
```

### Changes Not Showing
```bash
# Clear cache and restart
rm -rf node_modules .vite
npm install
npm run dev
```

### Build Fails
```bash
# Clean build
rm -rf dist node_modules
npm install
npm run build
```

## 📞 Quick Help

| Question | Answer | File |
|----------|--------|------|
| How do I change my name? | Find "Matthias Z. Iliya" and replace | `src/components/Hero.jsx` |
| How do I add projects? | Add objects to `projects` array | `src/pages/Projects.jsx` |
| How do I change colors? | Edit `subtle-blue` in config | `tailwind.config.js` |
| How do I update skills? | Modify `skillCategories` array | `src/pages/Skills.jsx` |
| How do I add links? | Update social links in Footer | `src/components/Footer.jsx` |

## 🌐 Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```
VITE_GOOGLE_ANALYTICS_ID=your_id
VITE_CONTACT_EMAIL=your@email.com
# ... other variables
```

## ✨ Tips for Best Results

1. **Use Real Content**: Replace placeholders with your actual information
2. **Add High-Quality Images**: Replace emojis with professional photos
3. **Keep It Fresh**: Update projects and testimonials regularly
4. **Test Thoroughly**: Check all links and forms work
5. **Monitor Analytics**: Track which pages visitors see
6. **Get Feedback**: Ask friends/colleagues to review
7. **Optimize Images**: Compress images before deploying

## 📖 Full Documentation

- **Setup**: See `README.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Version History**: See `CHANGELOG.md`
- **Code Comments**: Check source files for inline documentation

## 🎉 You're Ready!

Your portfolio is now ready for customization. Start with the checklist above and you'll have a fully personalized portfolio in under 30 minutes!

---

**Need help?** Check the README.md file for more detailed information.

Happy building! 🚀
