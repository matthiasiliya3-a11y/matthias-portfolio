# Deployment Guide for Matthias Portfolio

This guide covers deploying your portfolio to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest option for Vite projects.

### Steps:

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Configure**
- Select "Y" for default project settings
- Framework will auto-detect as Vite
- Build command: `npm run build`
- Output directory: `dist`

4. **Set Environment Variables**
```bash
vercel env add VITE_GOOGLE_ANALYTICS_ID
vercel env add VITE_EMAILJS_SERVICE_ID
# ... add other variables
```

5. **Redeploy with secrets**
```bash
vercel --prod
```

## 🌐 Netlify

### Steps:

1. **Install Netlify CLI**
```bash
npm i -g netlify-cli
```

2. **Build Project**
```bash
npm run build
```

3. **Deploy**
```bash
netlify deploy --prod --dir dist
```

### Or Connect to GitHub:

1. Push to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Select your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy

## ☁️ AWS Amplify

### Steps:

1. Push to GitHub
2. Go to AWS Amplify Console
3. Connect GitHub repo
4. Configure build settings
5. Deploy

## 🔷 Azure

### Steps:

1. Build: `npm run build`
2. Deploy `dist` folder to Azure Static Web Apps

## 📦 Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Serve with a simple HTTP server
RUN npm install -g serve
EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
```

Build and run:
```bash
docker build -t matthias-portfolio .
docker run -p 3000:3000 matthias-portfolio
```

## 📋 Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Add real profile image
- [ ] Configure contact form
- [ ] Update social media links
- [ ] Set up Google Analytics ID
- [ ] Test all pages and links
- [ ] Check mobile responsiveness
- [ ] Optimize images
- [ ] Update meta tags
- [ ] Test form submission
- [ ] Setup custom domain
- [ ] Configure HTTPS
- [ ] Add robots.txt and sitemap
- [ ] Test SEO meta tags

## 🌐 Custom Domain Setup

### For Vercel:
1. Go to project settings
2. Domains → Add domain
3. Update DNS at registrar

### For Netlify:
1. Site settings → Domain management
2. Add custom domain
3. Update DNS records

## 🔒 Environment Variables

Create `.env.production` for production:

```
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxxx
```

## 📊 Post-Deployment

1. **Verify Site**
   - Check all pages load
   - Test navigation
   - Verify contact form

2. **Setup Analytics**
   - Create Google Analytics account
   - Add tracking ID to .env
   - Verify tracking works

3. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools
   - Submit sitemap.xml

4. **Monitor Performance**
   - Use Lighthouse
   - Check Web Vitals
   - Monitor uptime

## 🚨 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Environment Variables Not Loading
- Check `.env` file syntax
- Ensure variables start with VITE_
- Restart dev server after changes

### Images Not Loading
- Check image paths
- Ensure images in public folder
- Use relative paths

### Styling Issues
- Clear browser cache
- Rebuild CSS: `npm run build`
- Check Tailwind config

## 📞 Support

For deployment issues:
1. Check platform documentation
2. Review build logs
3. Test locally first
4. Check environment variables
5. Verify file permissions

## 🎯 Performance Tips

1. **Enable Caching**
   - Set cache headers
   - Use service workers

2. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use appropriate sizes

3. **Minify Code**
   - Already done in build
   - Check bundle size

4. **Enable GZIP**
   - Most platforms do this by default
   - Verify in response headers

---

Happy deploying! 🚀
