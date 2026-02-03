# 📧 Contact Form Setup for cPanel Static Hosting

## Problem
Your contact form isn't working because static hosting doesn't support server-side API routes.

## Solution: Use Formspree (Free & Easy)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (looks like: `xpznvlqr`)

### Step 2: Update Your Code
I've already modified `src/app/contact/page.tsx` to use Formspree. You just need to:

1. Replace `YOUR_FORM_ID` with your actual Formspree form ID:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

2. Change it to:
   ```typescript
   const response = await fetch('https://formspree.io/f/xpznvlqr', {
   ```
   (Replace `xpznvlqr` with your actual form ID)

### Step 3: Rebuild and Deploy
```bash
npm run cpanel-build
```

Then upload the new `out/` folder to your cPanel.

### Step 4: Test
- Visit your contact page
- Fill out the form
- Submit it
- Check your email for the message

## Alternative Solutions

### Option 2: EmailJS (Client-side only)
- No server required
- Sends emails directly from browser
- Setup: [https://www.emailjs.com/](https://www.emailjs.com/)

### Option 3: Web3Forms
- Simple HTML form service
- No JavaScript required
- Setup: [https://web3forms.com/](https://web3forms.com/)

### Option 4: cPanel Email Forms (If supported)
Some cPanel hosts provide built-in form handlers. Check with your hosting provider.

## Formspree Benefits
- ✅ Free tier: 50 submissions/month
- ✅ Spam protection
- ✅ Email notifications
- ✅ Form analytics
- ✅ Easy integration
- ✅ No server required

## Next Steps
1. Create Formspree account
2. Get your form ID
3. Update the code with your form ID
4. Rebuild and redeploy
5. Test the contact form

Your contact form will be working in minutes! 🚀