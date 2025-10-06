# GitHub & Vercel Deployment Guide

Complete step-by-step guide to deploy your UX-Ray website from GitHub to Vercel.

## 📋 Prerequisites

- ✅ Git repository initialized (Done!)
- ✅ All changes committed (Done!)
- GitHub account ([sign up here](https://github.com/signup))
- Vercel account ([sign up here](https://vercel.com/signup))

---

## 🚀 Step 1: Create GitHub Repository

### Option A: Via GitHub Website (Easiest)

1. **Go to GitHub**
   - Visit [github.com/new](https://github.com/new)
   - Sign in if needed

2. **Create Repository**
   - Repository name: `ux-ray-website` (or your choice)
   - Description: "AI-powered UX evaluation tool for Figma - Official website"
   - Visibility: Choose **Public** or **Private**
   - ⚠️ **DO NOT** initialize with README (we already have code)
   - Click **"Create repository"**

3. **Copy Repository URL**
   - You'll see: `https://github.com/YOUR-USERNAME/ux-ray-website.git`
   - Keep this page open

### Option B: Via GitHub CLI

```bash
# Install GitHub CLI (if not installed)
brew install gh  # macOS
# or follow: https://cli.github.com/

# Login
gh auth login

# Create repository
gh repo create ux-ray-website --public --source=. --remote=origin
```

---

## 📤 Step 2: Push to GitHub

Now that you have the repository URL, let's push your code:

```bash
# Add GitHub as remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/ux-ray-website.git

# Push to GitHub
git push -u origin main
```

**Expected output:**
```
Enumerating objects: 50, done.
Counting objects: 100% (50/50), done.
Delta compression using up to 8 threads
Compressing objects: 100% (45/45), done.
Writing objects: 100% (50/50), 250 KB | 10 MB/s, done.
Total 50 (delta 5), reused 0 (delta 0)
To https://github.com/YOUR-USERNAME/ux-ray-website.git
 * [new branch]      main -> main
```

✅ **Success!** Your code is now on GitHub.

Visit: `https://github.com/YOUR-USERNAME/ux-ray-website`

---

## 🌐 Step 3: Deploy to Vercel

### 3.1 Sign Up / Login to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

### 3.2 Import Project

1. **From Vercel Dashboard:**
   - Click **"Add New..."** → **"Project"**
   - Or visit: [vercel.com/new](https://vercel.com/new)

2. **Import Git Repository:**
   - Find `ux-ray-website` in the list
   - Click **"Import"**

3. **Configure Project:**
   
   Vercel auto-detects Next.js! Default settings are perfect:
   
   - Framework Preset: **Next.js** ✅
   - Root Directory: `./` ✅
   - Build Command: `next build` ✅
   - Output Directory: `.next` ✅
   - Install Command: `npm install` ✅

4. **Add Environment Variables:**
   
   Click **"Environment Variables"** and add:

   | Name | Value | Where to get it |
   |------|-------|----------------|
   | `RESEND_API_KEY` | `re_xxxxx` | [Get from Resend](https://resend.com/api-keys) |
   | `CONTACT_EMAIL` | `gorodimitris@gmail.com` | Your email |
   | `NEXT_PUBLIC_SITE_URL` | Leave empty for now | Will update after deploy |

   > ⚠️ **Important:** Get your Resend API key first (see [EMAIL_SETUP.md](EMAIL_SETUP.md))

5. **Click "Deploy"**

   Watch the magic happen! ✨
   - Building... ⚙️
   - Deploying... 🚀
   - Success! 🎉

### 3.3 Get Your Live URL

After ~2-3 minutes:

```
🎉 Your project is live at:
https://ux-ray-website-xxxxx.vercel.app
```

Click **"Visit"** to see your live site!

---

## 🎯 Step 4: Configure Custom Domain (Optional)

Want `ux-ray.com` instead of `.vercel.app`?

1. **In Vercel Dashboard:**
   - Go to your project
   - Click **"Settings"** → **"Domains"**

2. **Add Domain:**
   - Enter your domain: `ux-ray.com`
   - Click **"Add"**

3. **Update DNS:**
   Vercel will show you DNS records to add:
   
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Add DNS Records:**
   - Go to your domain registrar (Namecheap, GoDaddy, etc.)
   - Add the DNS records Vercel provided
   - Wait 24-48 hours for propagation

5. **SSL Certificate:**
   - Vercel automatically provisions SSL
   - Your site will be HTTPS! 🔒

---

## 🔧 Step 5: Update Environment Variables

After deployment, update your site URL:

1. Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Edit `NEXT_PUBLIC_SITE_URL`:
   - Value: `https://ux-ray-website-xxxxx.vercel.app`
   - Or your custom domain: `https://ux-ray.com`
3. Click **"Save"**
4. Go to **Deployments** → Click **"⋯"** → **"Redeploy"**

Also update in code:

**File:** `app/sitemap.ts`
```typescript
const baseUrl = 'https://your-actual-domain.com'
```

**File:** `app/robots.ts`
```typescript
const baseUrl = 'https://your-actual-domain.com'
```

Commit and push:
```bash
git add app/sitemap.ts app/robots.ts
git commit -m "Update site URL for production"
git push
```

Vercel auto-deploys! 🚀

---

## 📧 Step 6: Setup Email Service

Follow [EMAIL_SETUP.md](EMAIL_SETUP.md) to:

1. Create Resend account
2. Get API key
3. Add to Vercel environment variables
4. Test contact form

---

## ✅ Post-Deployment Checklist

After going live, verify:

- [ ] Site loads at production URL
- [ ] All pages work (home, /licensing)
- [ ] Contact form submits successfully
- [ ] Email arrives in inbox
- [ ] All links work (LinkedIn, Portfolio)
- [ ] Images load (profile photo)
- [ ] Animations work smoothly
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 🔄 Future Updates Workflow

Every time you want to update the site:

```bash
# 1. Make changes locally
# Edit files...

# 2. Test locally
npm run dev

# 3. Commit changes
git add .
git commit -m "Your update description"

# 4. Push to GitHub
git push

# 5. Vercel auto-deploys! ✨
```

**That's it!** No manual deployment needed.

---

## 📊 Monitor Your Site

### Vercel Dashboard Shows:

- **Analytics**: Visitors, page views
- **Performance**: Load times, Core Web Vitals
- **Logs**: Function logs, errors
- **Bandwidth**: Usage statistics

### Check Deployment Status:

```bash
# Install Vercel CLI (optional)
npm install -g vercel

# Login
vercel login

# Check status
vercel ls
```

---

## 🚨 Troubleshooting

### Build Failed?

**Check Vercel logs:**
1. Go to failed deployment
2. Click "View Function Logs"
3. Look for error messages

**Common issues:**
- Missing dependencies → Check `package.json`
- TypeScript errors → Run `npm run build` locally
- Environment variables missing

### Site Not Updating?

1. Check GitHub - is your code pushed?
   ```bash
   git status
   git push
   ```

2. Check Vercel - did deployment succeed?
   - Dashboard → Deployments
   - Look for green checkmark ✅

3. Clear browser cache:
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Contact Form Not Working?

1. Check environment variables in Vercel
2. View function logs for errors
3. Verify Resend API key is valid
4. See [EMAIL_SETUP.md](EMAIL_SETUP.md)

---

## 🎉 Success Indicators

You'll know everything works when:

- ✅ Site loads at your Vercel URL
- ✅ All animations are smooth
- ✅ Contact form submits successfully
- ✅ You receive test email
- ✅ PageSpeed score 90+
- ✅ No console errors
- ✅ Works on mobile

---

## 🔗 Useful Links

- **Your GitHub Repo**: `https://github.com/YOUR-USERNAME/ux-ray-website`
- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **Resend Dashboard**: [resend.com/emails](https://resend.com/emails)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)

---

## 💡 Pro Tips

1. **Enable Preview Deployments**
   - Every branch gets a preview URL
   - Test changes before merging to main

2. **Set Up Branch Protection**
   - GitHub → Settings → Branches
   - Protect `main` branch

3. **Monitor Performance**
   - Use Vercel Analytics
   - Or add [Plausible](https://plausible.io/)

4. **Backup Your Code**
   - GitHub is already a backup
   - Download releases periodically

5. **Use Git Tags for Releases**
   ```bash
   git tag -a v1.0.0 -m "Initial release"
   git push origin v1.0.0
   ```

---

## 🎊 You're Live!

**Congratulations!** Your UX-Ray website is now live and accessible to the world! 🌍

Share your link:
- LinkedIn
- Twitter
- Portfolio
- Email signature

---

**Need Help?**

- GitHub Docs: [docs.github.com](https://docs.github.com)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Community: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

---

**Built with ❤️ for Dimitris G.**

*Last updated: October 6, 2025*

