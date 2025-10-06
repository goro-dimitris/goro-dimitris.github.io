# GitHub Pages Deployment Guide

Complete guide to deploy your UX-Ray website to GitHub Pages for **FREE**! 🎉

## 🌟 What's Configured

Your site is now configured for GitHub Pages with:

✅ Static export enabled (`output: 'export'`)  
✅ Image optimization disabled (GitHub Pages compatible)  
✅ GitHub Actions workflow (automatic deployment)  
✅ Formspree integration for contact form  
✅ `.nojekyll` file (prevents Jekyll processing)  

---

## 📋 Prerequisites

- GitHub account ([sign up here](https://github.com/signup))
- Formspree account for contact form ([sign up here](https://formspree.io/))

---

## 🚀 Step-by-Step Deployment

### Step 1: Setup Formspree (Contact Form)

Since GitHub Pages only hosts static files, we use Formspree for the contact form:

1. **Sign up at Formspree**
   - Go to [formspree.io](https://formspree.io/)
   - Sign up (free: 50 submissions/month)

2. **Create New Form**
   - Click "New Form"
   - Name: "UX-Ray Contact"
   - Your email: `gorodimitris@gmail.com`
   - Click "Create Form"

3. **Get Form ID**
   - Copy your Form ID (looks like: `abc123xyz`)
   - You'll see it in the URL: `formspree.io/forms/abc123xyz`

4. **Update Code**
   
   Open `app/page.tsx` and find this line:
   ```typescript
   const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'YOUR_FORM_ID'
   ```
   
   Replace `YOUR_FORM_ID` with your actual Formspree ID:
   ```typescript
   const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'abc123xyz'
   ```

5. **Commit the change**
   ```bash
   git add app/page.tsx
   git commit -m "Add Formspree ID for contact form"
   ```

---

### Step 2: Create GitHub Repository

1. **Go to GitHub**
   - Visit [github.com/new](https://github.com/new)
   - Sign in if needed

2. **Create Repository**
   
   **Option A: User/Organization Site (Recommended)**
   - Repository name: `YOUR-USERNAME.github.io`
   - Example: `gorodimitris.github.io`
   - Your site will be: `https://gorodimitris.github.io`
   - No need to change basePath!
   
   **Option B: Project Site**
   - Repository name: `ux-ray-website` (or any name)
   - Your site will be: `https://YOUR-USERNAME.github.io/ux-ray-website`
   - ⚠️ Need to update `basePath` in `next.config.js`

3. **Repository Settings**
   - Description: "AI-powered UX evaluation tool for Figma"
   - Visibility: **Public** (required for free GitHub Pages)
   - ⚠️ **DO NOT** check "Initialize with README"
   - Click **"Create repository"**

---

### Step 3: Push to GitHub

Copy your repository URL from GitHub, then run:

```bash
# Add GitHub as remote (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/gorodimitris/gorodimitris.github.io.git
git push -u origin main
```

---

### Step 4: Enable GitHub Pages

1. **Go to Repository Settings**
   - Navigate to your repo on GitHub
   - Click **"Settings"** (top menu)

2. **Configure Pages**
   - Scroll to **"Pages"** in left sidebar
   - Click **"Pages"**

3. **Set Source**
   - Source: **"GitHub Actions"**
   - (Not "Deploy from a branch")
   - Save (if needed)

That's it! GitHub Actions will automatically build and deploy.

---

### Step 5: Wait for Deployment

1. **Watch the Action**
   - Go to **"Actions"** tab in your repo
   - You'll see "Deploy to GitHub Pages" running
   - Wait ~2-3 minutes ⏱️

2. **Check Status**
   - ✅ Green checkmark = Success!
   - ❌ Red X = Failed (check logs)

3. **Get Your URL**
   
   **Option A (User site):**
   ```
   https://YOUR-USERNAME.github.io
   ```
   
   **Option B (Project site):**
   ```
   https://YOUR-USERNAME.github.io/REPO-NAME
   ```

4. **Visit Your Site** 🎉
   - Click the URL in Actions or Pages settings
   - Your site is LIVE!

---

## 🎨 If Using Project Site (Option B)

If your repo is NOT `username.github.io`, update `next.config.js`:

```javascript
const nextConfig = {
  // ... other settings
  basePath: '/REPO-NAME',  // Add this line
  // Example: basePath: '/ux-ray-website',
}
```

Then commit and push:
```bash
git add next.config.js
git commit -m "Add basePath for project site"
git push
```

---

## 🔄 Future Updates

Every time you push to `main`, GitHub automatically rebuilds and deploys!

```bash
# Make changes locally
# ... edit files ...

# Commit and push
git add .
git commit -m "Update content"
git push

# Wait ~2 minutes, changes are live! ✨
```

---

## 📧 Contact Form Setup Summary

When someone submits the form:

1. ✅ Form data sent to Formspree
2. ✅ You receive email at `gorodimitris@gmail.com`
3. ✅ User sees success message
4. ✅ Form resets

**Formspree Free Tier:**
- 50 submissions/month
- Email notifications
- Spam filtering
- Export data

Need more? Upgrade to Formspree Pro ($10/month, 1000 submissions)

---

## ⚙️ GitHub Actions Workflow

The workflow (`.github/workflows/deploy.yml`) automatically:

1. ✅ Checks out code
2. ✅ Installs Node.js
3. ✅ Installs dependencies
4. ✅ Builds Next.js site
5. ✅ Uploads to GitHub Pages
6. ✅ Deploys

**Manual Trigger:**
- Go to Actions tab
- Click "Deploy to GitHub Pages"
- Click "Run workflow"

---

## 🎯 Custom Domain (Optional)

Want `ux-ray.com` instead of `.github.io`?

1. **Buy Domain**
   - Namecheap, GoDaddy, Google Domains, etc.

2. **Configure DNS**
   
   Add these records at your registrar:
   
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```

3. **Update GitHub Settings**
   - Settings → Pages
   - Custom domain: `ux-ray.com`
   - Save
   - Wait 24-48 hours for DNS propagation

4. **Enable HTTPS**
   - GitHub automatically provisions SSL
   - Check "Enforce HTTPS"

5. **Add CNAME file**
   ```bash
   echo "ux-ray.com" > public/CNAME
   git add public/CNAME
   git commit -m "Add custom domain"
   git push
   ```

---

## ✅ Verify Deployment

After deployment, check:

- [ ] Site loads at your GitHub Pages URL
- [ ] All pages work (home, /licensing)
- [ ] Images display correctly
- [ ] Animations work smoothly
- [ ] Contact form submits (test it!)
- [ ] Email arrives in your inbox
- [ ] Links work (LinkedIn, Portfolio)
- [ ] No console errors (F12)
- [ ] Mobile responsive

---

## 🚨 Troubleshooting

### Build Failed?

**Check Action logs:**
1. Go to Actions tab
2. Click failed workflow
3. Click "build" job
4. Read error messages

**Common issues:**
- TypeScript errors → Fix and push
- Missing files → Check .gitignore
- Image paths wrong → Use `/image.jpg` format

### 404 Page Not Found?

**If using project site:**
1. Update `basePath` in `next.config.js`
2. Commit and push
3. Wait for rebuild

### Images Not Loading?

- Use absolute paths: `/dimitris.jpg` not `./dimitris.jpg`
- Images must be in `/public` folder
- Check browser console for 404s

### Form Not Working?

1. Verify Formspree ID is correct
2. Check Formspree dashboard for submissions
3. Look for errors in browser console
4. Check spam folder for emails

### Styles Broken?

- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
- Check if CSS files are loading
- Verify basePath is correct

---

## 📊 GitHub Pages Limits

- ✅ 1 GB repository size
- ✅ 100 GB bandwidth/month
- ✅ 10 builds/hour
- ✅ Free for public repos
- ✅ HTTPS included
- ✅ Custom domains supported

Perfect for a portfolio/landing page!

---

## 🎓 What's Different from Vercel?

| Feature | GitHub Pages | Vercel |
|---------|-------------|--------|
| Hosting | Free (public repo) | Free (limited) |
| API Routes | ❌ No | ✅ Yes |
| ISR | ❌ No | ✅ Yes |
| Edge Functions | ❌ No | ✅ Yes |
| Analytics | ❌ No (use external) | ✅ Built-in |
| Deployment | GitHub Actions | Git push |
| Contact Form | Formspree/external | Built-in API |
| Build Time | ~2-3 min | ~1-2 min |
| SSL/HTTPS | ✅ Free | ✅ Free |
| Custom Domain | ✅ Free | ✅ Free |

**For this project:** GitHub Pages is perfect! Simple landing page, no server-side code needed.

---

## 💡 Pro Tips

1. **Branch Protection**
   - Settings → Branches
   - Add rule for `main`
   - Require status checks to pass

2. **SEO**
   - Add Google Search Console
   - Submit sitemap: `https://your-site.com/sitemap.xml`

3. **Analytics**
   - Add Plausible: [plausible.io](https://plausible.io/)
   - Or Google Analytics
   - Free tier available

4. **Monitoring**
   - UptimeRobot: Free uptime monitoring
   - Get alerts if site goes down

5. **Performance**
   - Test with PageSpeed Insights
   - Should score 95+ (already optimized!)

---

## 📞 Support Resources

- **GitHub Pages Docs**: [docs.github.com/pages](https://docs.github.com/pages)
- **Formspree Docs**: [help.formspree.io](https://help.formspree.io/)
- **Next.js Static Export**: [nextjs.org/docs/pages/building-your-application/deploying/static-exports](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- **Community**: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

---

## 🎊 You're Live!

Once deployed, your site will be accessible at:

```
https://YOUR-USERNAME.github.io
```

**Share it with the world! 🌍**

- Add to LinkedIn
- Share on Twitter
- Update email signature
- Add to portfolio

---

## 📝 Quick Command Reference

```bash
# Local development
npm run dev

# Test build locally
npm run build
npm run start

# Push changes (auto-deploys)
git add .
git commit -m "Update site"
git push

# Check deployment status
# Go to: github.com/YOUR-USERNAME/REPO-NAME/actions
```

---

**Built with ❤️ for Dimitris G.**

*Deployed on GitHub Pages - Fast, Free, Forever* 🚀

*Last updated: October 6, 2025*

