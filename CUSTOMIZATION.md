# Customization Guide - UX-Ray Website

This guide helps you customize the UX-Ray website to match your preferences.

## 🎨 Changing Colors

### Primary Accent Color

Edit `tailwind.config.js`:

```javascript
colors: {
  'electric-cyan': '#00F0FF',  // Change this!
  'deep-cyan': '#00A8B5',      // And this!
}
```

**Color Suggestions:**
- Electric Magenta: `#FF00FF`
- Neon Purple: `#A855F7`
- Bright Orange: `#FF6B35`
- Acid Green: `#39FF14`

### Background Gradient

Edit `app/globals.css`:

```css
:root {
  --foreground-rgb: 255, 255, 255;
  --background-start-rgb: 10, 10, 10;    /* Top gradient */
  --background-end-rgb: 0, 0, 0;         /* Bottom gradient */
}
```

## ✏️ Editing Content

### Hero Section Tagline

File: `app/page.tsx` → `HeroSection`

```typescript
<h1>
  See your UX
  <br />
  <span>through AI eyes</span>  {/* Change this */}
</h1>
```

**Alternative Taglines:**
- "Where heuristics meet machine insight"
- "The design audit, reinvented"
- "Your UX — quantified"
- "AI that speaks the language of design"

### Value Propositions

File: `app/page.tsx` → `ValuePropositionSection`

```typescript
const metrics = [
  { label: 'Reduce audit time', value: '40%', ... },
  { label: 'Identify usability issues', value: '80%', ... },
  { label: 'Boost team consistency', value: '100%', ... },
]
```

## 🔤 Changing Fonts

### Using Google Fonts

1. Update `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&display=swap');
```

2. Update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Manrope', 'system-ui', 'sans-serif'],
}
```

**Recommended Geometric Sans Fonts:**
- Inter (current)
- Manrope
- DM Sans
- Satoshi
- Space Grotesk
- Outfit

## 📧 Contact Form Setup

### Using Formspree (Free)

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update `app/page.tsx` → `CollaborateSection`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  if (response.ok) {
    setSubmitted(true)
  }
}
```

### Using SendGrid

1. Install: `npm install @sendgrid/mail`
2. Create API route: `app/api/contact/route.ts`
3. Update form to POST to `/api/contact`

## 👤 Personal Information

### Update Your Details

File: `app/page.tsx` → `BehindTheProjectSection`

```typescript
<p>
  UX-Ray is by <span>Your Name</span>,  {/* Change */}
  a Senior UX Designer...                {/* Update bio */}
</p>

<a href="https://linkedin.com/in/yourprofile">  {/* Update links */}
  LinkedIn
</a>
```

### Footer

File: `app/page.tsx` → `Footer`

```typescript
<p>© 2025 Your Name — All rights reserved.</p>  {/* Update */}
```

## 🔗 External Links

### Update Standards Links

File: `app/page.tsx` → `UXScienceSection`

```typescript
const standards = [
  {
    title: 'Nielsen Norman Heuristics',
    link: 'https://www.nngroup.com/articles/...',  // Keep or change
  },
  // Add your own standards
]
```

## 📊 Adding Analytics

### Plausible Analytics

1. Add to `app/layout.tsx`:
```typescript
import Script from 'next/script'

// In the <head>:
<Script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js" />
```

### Simple Analytics

1. Install: `npm install simple-analytics-react`
2. Add to `app/layout.tsx`:
```typescript
import SimpleAnalytics from 'simple-analytics-react'

// In the component:
<SimpleAnalytics />
```

## 🎬 Animation Adjustments

### Speed Up/Slow Down Animations

File: `app/page.tsx`

```typescript
// Example: Hero section fade-in
transition={{ duration: 0.8 }}  // Change to 0.5 (faster) or 1.2 (slower)
```

### Disable Animations

Add to `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        'none': 'none',  // Add this
      }
    }
  }
}
```

Then use `animate-none` class.

## 🖼️ Adding Images/Logo

### Add Logo to Hero

1. Add image to `public/logo.svg`
2. Update `HeroSection`:
```typescript
import Image from 'next/image'

<Image 
  src="/logo.svg" 
  alt="UX-Ray Logo" 
  width={200} 
  height={200} 
/>
```

### Optimize Images

Always use Next.js `Image` component:
```typescript
import Image from 'next/image'

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority  // For above-fold images
/>
```

## 📱 Responsive Breakpoints

File: `tailwind.config.js`

```javascript
screens: {
  'sm': '640px',   // Mobile
  'md': '768px',   // Tablet
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
}
```

Usage in components:
```typescript
<div className="text-4xl md:text-6xl lg:text-8xl">
  // Responsive text sizes
</div>
```

## 🎯 SEO Customization

### Meta Tags

File: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
  keywords: 'your, keywords, here',
  openGraph: {
    title: 'Your OG Title',
    description: 'Your OG description',
    images: ['/og-image.jpg'],
  },
}
```

### Sitemap

File: `app/sitemap.ts`

```typescript
const baseUrl = 'https://yourdomain.com'  // Update this

// Add more pages:
{
  url: `${baseUrl}/blog`,
  lastModified: new Date(),
  changeFrequency: 'weekly',
  priority: 0.8,
}
```

## 🔒 Privacy Policy Page

Create `app/privacy/page.tsx`:

```typescript
export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert">
          {/* Your privacy policy content */}
        </div>
      </div>
    </main>
  )
}
```

## 🌙 Adding Light Mode (Optional)

This site is dark by default. To add light mode:

1. Install: `npm install next-themes`
2. Create theme provider
3. Add toggle component
4. Update styles with light mode variants

## 🧪 Testing Changes

Always test in development:
```bash
npm run dev
```

Then test:
- All screen sizes (Chrome DevTools → Device Toolbar)
- All sections scroll smoothly
- Forms work correctly
- Links open properly
- Animations don't lag

## 📦 Production Build Test

Before deploying:
```bash
npm run build
npm start
```

Check for:
- Build errors
- Console warnings
- Missing assets
- Broken links

## 🎨 Color Palette Examples

### Cyberpunk Theme
```javascript
'neon-pink': '#FF10F0',
'neon-blue': '#00E0FF',
'neon-purple': '#B026FF',
```

### Professional Theme
```javascript
'royal-blue': '#0066FF',
'steel-gray': '#6B7280',
'white': '#FFFFFF',
```

### Minimalist Theme
```javascript
'pure-black': '#000000',
'pure-white': '#FFFFFF',
'gray': '#808080',
```

---

## 💡 Pro Tips

1. **Always commit before major changes**
2. **Test on real devices, not just DevTools**
3. **Keep animations subtle for professionalism**
4. **Use consistent spacing (8px grid system)**
5. **Optimize images before uploading**
6. **Test contact form with real email**
7. **Check accessibility with Lighthouse**
8. **Validate HTML/CSS**

---

**Questions?** Check the [README.md](README.md) or [QUICKSTART.md](QUICKSTART.md)

Built with ❤️ by Dimitris G.

