# Email Setup Guide for UX-Ray Contact Form

The contact form is now fully integrated with email automation! Here's how to complete the setup.

## 🎯 What's Already Done

✅ API endpoint created (`/api/contact/route.ts`)  
✅ Form connected to API with loading states  
✅ Error handling and validation  
✅ Beautiful HTML email template  
✅ Success/error messages  
✅ Form reset after submission  

## 📧 Email Service Setup (Required)

The form uses **Resend** for sending emails. Follow these steps:

### Step 1: Sign up for Resend

1. Go to [resend.com](https://resend.com)
2. Create a free account (100 emails/day free)
3. Verify your email

### Step 2: Get API Key

1. Go to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Name it "UX-Ray Website"
4. Copy the API key (starts with `re_`)

### Step 3: Add Environment Variable

#### For Local Development:

Create a file `.env.local` in your project root:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL=gorodimitris@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### For Vercel Deployment:

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Environment Variables"
3. Add these variables:

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | `re_your_api_key` |
| `CONTACT_EMAIL` | `gorodimitris@gmail.com` |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` |

4. Click "Save"
5. Redeploy your project

### Step 4: (Optional) Verify Custom Domain

For professional email sender addresses:

1. Go to [Resend Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain (e.g., `ux-ray.com`)
4. Add DNS records they provide
5. Wait for verification

Once verified, update the `from` address in `/app/api/contact/route.ts`:

```typescript
from: 'UX-Ray <contact@ux-ray.com>', // Your custom domain
```

## 📊 Optional: Database Storage

The form can also store submissions in Vercel KV (key-value database).

### Enable Vercel KV:

1. Go to Vercel Dashboard → Storage
2. Click "Create Database" → KV
3. Name it "ux-ray-contacts"
4. Connect to your project

That's it! Environment variables are added automatically.

## 🧪 Testing

### Test Locally:

```bash
npm run dev
```

1. Fill out the form on `http://localhost:3000`
2. Click "Send Message"
3. Check for success message
4. Check your email inbox (gorodimitris@gmail.com)

### Test on Production:

After deploying:

1. Visit your live site
2. Submit a test message
3. You should receive an email with:
   - Beautiful HTML formatting
   - Sender's name and email
   - Full message content
   - Reply button

## 📬 What You'll Receive

Every form submission sends you a beautifully formatted email with:

- **Subject**: "🌟 New UX-Ray Contact Form Submission from [Name]"
- **Reply-To**: Automatically set to sender's email
- **Content**:
  - Sender's name
  - Email address (clickable)
  - Full message
  - Timestamp
  - Quick "Reply" button

## 🎨 Email Template Preview

```
┌─────────────────────────────────────┐
│  👁️ New UX-Ray Contact Form        │
│     Submission                       │
├─────────────────────────────────────┤
│                                      │
│  NAME                                │
│  John Doe                            │
│                                      │
│  EMAIL                               │
│  john@example.com                    │
│                                      │
│  MESSAGE                             │
│  I'm interested in piloting         │
│  UX-Ray for my team...              │
│                                      │
│         [Reply to John]              │
│                                      │
├─────────────────────────────────────┤
│  Sent on: Monday, October 6, 2025   │
│  at 3:45 PM EST                      │
└─────────────────────────────────────┘
```

## 🔒 Security Features

✅ Server-side email validation  
✅ Required field validation  
✅ Rate limiting (via Vercel)  
✅ No sensitive data in client  
✅ Environment variables secured  
✅ HTTPS only in production  

## 🚨 Troubleshooting

### Form not submitting?

**Check console for errors:**
```bash
# In browser DevTools Console
```

**Common issues:**

1. **"Network error"**
   - Check internet connection
   - Verify API endpoint exists
   - Check Vercel logs

2. **"Failed to send message"**
   - Verify RESEND_API_KEY is set
   - Check Resend dashboard for quota
   - Verify API key is valid

3. **Email not received**
   - Check spam folder
   - Verify CONTACT_EMAIL is correct
   - Check Resend logs

### Check Resend Logs:

1. Go to [Resend Dashboard](https://resend.com/emails)
2. View all sent emails
3. Check delivery status

## 📊 Monitoring

### Resend Dashboard Shows:

- Total emails sent
- Delivery rate
- Failed emails
- Bounce rate
- Monthly quota usage

### Vercel Logs Show:

```bash
vercel logs
```

Or in Vercel Dashboard → Deployments → View Function Logs

## 💰 Pricing

### Resend Free Tier:
- ✅ 100 emails/day
- ✅ 3,000 emails/month
- ✅ All features included

Perfect for a contact form! 

Upgrade if you need more:
- Pro: $20/month (50,000 emails)
- Scale: Custom pricing

### Vercel KV (Optional):
- Free: 256MB storage
- 3,000 commands/day

## 🎉 Success!

Once set up, every contact form submission will:

1. ✅ Validate input
2. ✅ Send beautiful email to you
3. ✅ Store in database (if KV enabled)
4. ✅ Show success message to visitor
5. ✅ Reset form for next submission

## 🔄 Alternative: Use Formspree

If you prefer not to use Resend:

1. Go to [formspree.io](https://formspree.io)
2. Create form, get endpoint
3. Update form action to POST to Formspree

Simpler but less customization.

## 📞 Need Help?

- **Resend Docs**: [resend.com/docs](https://resend.com/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Next.js API Routes**: [nextjs.org/docs/api-routes](https://nextjs.org/docs/api-routes)

---

**Ready to receive messages! 🚀**

Built with ❤️ for Dimitris G.

