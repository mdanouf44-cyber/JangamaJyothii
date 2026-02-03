# 📧 PHP Email Setup for cPanel (Using Your Existing Email)

## ✅ **This Solution Uses Your Existing Email System!**

I've created a PHP script that will work with your cPanel hosting and use your domain's email.

## 🔧 **Setup Steps:**

### Step 1: Update the PHP Script
Edit `contact-form.php` and change these lines:

```php
// Line 25: Change to your actual email
$to = 'your-email@shreejangamajyothi.com'; 

// Line 26: Use your domain email
$from = 'noreply@shreejangamajyothi.com';
```

**Replace with your actual emails:**
```php
$to = 'info@shreejangamajyothi.com';        // Where you want to receive emails
$from = 'contact@shreejangamajyothi.com';   // Sender email (must be from your domain)
```

### Step 2: Upload Files
1. **Rebuild your site:**
   ```bash
   npm run cpanel-build
   ```

2. **Upload to cPanel:**
   - Upload all files from `out/` folder to `public_html`
   - **Also upload** `contact-form.php` to `public_html`

### Step 3: Set Up Email Accounts (in cPanel)
1. Go to cPanel → **Email Accounts**
2. Create these email accounts:
   - `info@shreejangamajyothi.com` (where you'll receive messages)
   - `contact@shreejangamajyothi.com` (for sending)

### Step 4: Test
- Visit your contact page
- Fill out the form
- Submit it
- Check your `info@shreejangamajyothi.com` inbox

## 🎯 **Benefits of This Approach:**
- ✅ Uses your existing domain email
- ✅ No third-party services needed
- ✅ Professional email addresses
- ✅ Full control over emails
- ✅ Works with cPanel hosting
- ✅ No monthly fees

## 🔧 **Alternative: Use Your Current Email**
If you already have an email like `contact@shreejangamajyothi.com`, just update the PHP file:

```php
$to = 'contact@shreejangamajyothi.com';     // Your existing email
$from = 'website@shreejangamajyothi.com';   // Auto-sender email
```

## 📁 **File Structure After Upload:**
```
public_html/
├── index.html
├── contact-form.php          ← New PHP file
├── _next/
├── products/
└── [all other files...]
```

## 🚨 **Important Notes:**
1. **PHP must be enabled** on your cPanel (most hosts have it by default)
2. **Email accounts must exist** in your cPanel
3. **Test thoroughly** before going live

## 🔍 **Troubleshooting:**
- If emails don't send, check cPanel error logs
- Ensure PHP mail() function is enabled
- Verify email accounts are created
- Check spam folder for test emails

This solution keeps everything under your control and uses your professional domain email! 🚀