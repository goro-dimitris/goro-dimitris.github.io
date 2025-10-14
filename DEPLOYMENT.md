# Deployment Guide - UX-Ray Website

This guide covers deployment options for the UX-Ray website.

## 🚀 Recommended: Vercel (Easiest)

Vercel is the platform created by the Next.js team and offers zero-configuration deployment.

### Step-by-Step Deployment:

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: UX-Ray website"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js settings

3. **Configure (if needed)**
   - Framework: Next.js (auto-detected)
   - Build Command: `next build` (auto-set)
   - Output Directory: `.next` (auto-set)
   - Install Command: `npm install` (auto-set)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Get your live URL: `your-project.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `ux-ray.com`)
   - Update DNS records as instructed
   - SSL certificate is automatic!

### Automatic Deployments

- Every push to `main` = Production deployment
- Every push to other branches = Preview deployment
- Pull requests get automatic preview URLs

## 🌐 Alternative: Netlify

### Deploy with Netlify:

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18+

2. **Deploy via CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

3. **Or via Dashboard**
   - Visit [netlify.com](https://netlify.com)
   - Connect Git repository
   - Configure build settings
   - Deploy!

## 🐳 Alternative: Docker

### Dockerfile:

```dockerfile
FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

### Deploy with Docker:

```bash
docker build -t ux-ray-website .
docker run -p 3000:3000 ux-ray-website
```

## ☁️ Alternative: AWS Amplify

1. Visit AWS Amplify Console
2. Connect your Git repository
3. Configure build settings:
   - Build command: `npm run build`
   - Base directory: (leave empty)
   - Output directory: `.next`
4. Deploy!

## 🔧 Environment Variables

If you need to add environment variables:

### Vercel:
1. Go to Project Settings
2. Click "Environment Variables"
3. Add variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - etc.

### In Code:
```typescript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
```

## 📊 Analytics Setup (Optional)

### Simple Analytics:
```bash
npm install simple-analytics-react
```

Add to `app/layout.tsx`:
```typescript
import SimpleAnalytics from 'simple-analytics-react'

// In the component:
<SimpleAnalytics />
```

### Plausible:
Add to `app/layout.tsx`:
```typescript
<Script defer data-domain="ux-ray.com" src="https://plausible.io/js/script.js" />
```

## 🔒 Security Headers

Already configured in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options  
- X-XSS-Protection

## 🎯 Performance Optimization

The site is already optimized with:
- Automatic code splitting
- Image optimization (Next.js Image component)
- Font optimization
- CSS/JS minification
- Gzip compression

### Test Performance:
```bash
npm run build
npm run start
```

Then check:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 📝 Post-Deployment Checklist

- [ ] Update `baseUrl` in `app/sitemap.ts`
- [ ] Update `baseUrl` in `app/robots.ts`
- [ ] Update domain in `public/robots.txt`
- [ ] Test all links and forms
- [ ] Verify responsive design on real devices
- [ ] Check browser console for errors
- [ ] Test contact form submission
- [ ] Verify SEO meta tags
- [ ] Submit sitemap to Google Search Console
- [ ] Test page load speed
- [ ] Check accessibility with Lighthouse

## 🐛 Troubleshooting

### Build Fails?
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading?
- Use Next.js `<Image>` component
- Add domains to `next.config.js`:
```javascript
images: {
  domains: ['your-cdn.com'],
}
```

### Environment Variables Not Working?
- Must start with `NEXT_PUBLIC_` for client-side access
- Rebuild after adding new variables
- Check Vercel dashboard for correct values

## 📞 Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)

---

**Happy Deploying! 🚀**

Built by Dimitris G. | © 2025

