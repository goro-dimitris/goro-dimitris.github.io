# 🚀 Quick Start - GitHub Pages Deployment

**Your site is ready to deploy!** Follow these 5 simple steps:

---

## ⚡ Step 1: Setup Formspree (2 minutes)

The contact form needs Formspree for GitHub Pages:

1. Go to **[formspree.io](https://formspree.io/)** → Sign up (FREE)
2. Create new form → Name: "UX-Ray Contact"
3. Your email: `gorodimitris@gmail.com`
4. Copy your **Form ID** (like: `abc123xyz`)
5. Open `app/page.tsx` and replace `YOUR_FORM_ID` with your actual ID:
   ```typescript
   const FORMSPREE_FORM_ID = 'abc123xyz'  // ← Your ID here
   ```
6. Save and commit:
   ```bash
   git add app/page.tsx
   git commit -m "Add Formspree ID"
   ```

---

## ⚡ Step 2: Create GitHub Repository

**Option A: User Site (Recommended)** - No configuration needed!
- Go to [github.com/new](https://github.com/new)
- Name: `YOUR-USERNAME.github.io` (example: `gorodimitris.github.io`)
- Public
- Click "Create"
- Your URL will be: `https://gorodimitris.github.io` ✨

**Option B: Project Site**
- Name: `ux-ray-website` (or any name)
- Your URL will be: `https://YOUR-USERNAME.github.io/ux-ray-website`
- ⚠️ Need to update `basePath` in `next.config.js`

---

## ⚡ Step 3: Push to GitHub

Copy the repository URL from GitHub, then:

```bash
# Add remote (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/gorodimitris/gorodimitris.github.io.git
git push -u origin main
```

---

## ⚡ Step 4: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Source: Select **"GitHub Actions"**
4. Done! ✅

---

## ⚡ Step 5: Wait for Deployment

1. Go to **Actions** tab
2. Watch "Deploy to GitHub Pages" run (~2 minutes)
3. ✅ Green checkmark = Success!
4. Your site is live at:
   - User site: `https://YOUR-USERNAME.github.io`
   - Project site: `https://YOUR-USERNAME.github.io/REPO-NAME`

---

## 🎉 That's It!

Visit your live site and test the contact form!

---

## 🔄 Future Updates

Every time you push, it auto-deploys:

```bash
git add .
git commit -m "Update site"
git push
```

Wait 2 minutes → Changes are live! ✨

---

## 🆘 Need Help?

See the complete guide: **[GITHUB_PAGES_DEPLOY.md](GITHUB_PAGES_DEPLOY.md)**

---

## ✅ Quick Checklist

- [ ] Formspree account created
- [ ] Form ID added to code
- [ ] Committed changes
- [ ] GitHub repo created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled (Actions)
- [ ] Deployment successful
- [ ] Site is live!
- [ ] Contact form tested

---

**Questions?**

- Formspree issues? → Check spam folder, verify Form ID
- Build failed? → Check Actions logs for errors
- 404 error? → Update basePath if using project site

---

**Your site will be live in under 10 minutes! 🚀**

*Last updated: October 6, 2025*

