# Quick Start Guide - UX-Ray Website

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TailwindCSS
- Framer Motion
- TypeScript
- Lucide Icons

### Step 2: Run Development Server

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### Step 3: Build for Production

```bash
npm run build
npm start
```

## 📦 Deploy to Vercel

The easiest way to deploy:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

That's it! Vercel automatically detects Next.js and configures everything.

## 🎨 Customization Tips

### Change Accent Color

Edit `tailwind.config.js`:
```js
colors: {
  'electric-cyan': '#00F0FF', // Change this hex value
}
```

### Update Contact Form

The contact form in `app/page.tsx` (CollaborateSection) logs to console by default. To connect to an email service:

1. Add a service like [Formspree](https://formspree.io/) or [SendGrid](https://sendgrid.com/)
2. Update the `handleSubmit` function in the CollaborateSection component

### Modify Content

All sections are in `app/page.tsx`:
- `HeroSection` - Main hero with tagline
- `WhatIsSection` - UX-Ray description
- `HowItWorksSection` - 3-step process
- `UXScienceSection` - Standards and frameworks
- `ValuePropositionSection` - Metrics and outcomes
- `BehindTheProjectSection` - About the creator
- `CollaborateSection` - Contact form
- `Footer` - Footer with links

## 🔧 Troubleshooting

### Port Already in Use?

```bash
npm run dev -- -p 3001
```

### Build Errors?

Clear cache and rebuild:
```bash
rm -rf .next
npm run build
```

### Styling Issues?

Regenerate Tailwind:
```bash
rm -rf .next
npm run dev
```

## 📝 Environment Variables (Optional)

Create `.env.local` for any API keys or secrets:

```env
# Example for analytics
NEXT_PUBLIC_ANALYTICS_ID=your_id_here

# Example for email service
EMAIL_API_KEY=your_key_here
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Testing Responsive Design

- Desktop: 1920px, 1440px, 1280px
- Tablet: 768px, 1024px
- Mobile: 375px, 414px

Use Chrome DevTools (F12) to test different screen sizes.

## 🎯 Performance Tips

The site is already optimized with:
- Next.js Image Optimization (when images are added)
- Automatic Code Splitting
- Font Optimization
- CSS Minification

For analytics, consider privacy-friendly options:
- [Plausible](https://plausible.io/)
- [Fathom](https://usefathom.com/)
- [Simple Analytics](https://simpleanalytics.com/)

---

**Need help?** Check the [README.md](README.md) for more details or contact Dimitris G.

