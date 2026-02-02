# 🚀 cPanel Deployment Guide for Shree Jangama Jyothi Website

## Overview
This guide will help you deploy your Next.js website to cPanel hosting. Since most cPanel hosts don't support Node.js applications, we'll use **static export** to generate HTML/CSS/JS files.

## ⚠️ Important Notes

### What Works with Static Export:
✅ All your product pages and content  
✅ Static images and videos  
✅ Client-side routing  
✅ CSS animations and styling  
✅ Contact form (frontend)  

### What Needs Modification:
❌ **Contact Form API** - Needs PHP alternative  
❌ **Server-side features** - Will be converted to client-side  
❌ **Dynamic API routes** - Need alternative solutions  

## 📁 Files Created/Modified for cPanel:

### 1. **next.config.js** - Updated for static export
### 2. **package.json** - Added export script
### 3. **contact-form.php** - PHP contact form handler
### 4. **.htaccess** - URL rewriting and redirects
### 5. **cpanel-build.sh** - Build script for deployment
### 6. **static-contact-form.js** - Client-side form handler

## 🛠️ Deployment Steps:

### Step 1: Build Static Files
```bash
npm run export
```

### Step 2: Upload to cPanel
1. Compress the `out` folder to `website.zip`
2. Upload to cPanel File Manager
3. Extract in `public_html` folder
4. Upload `contact-form.php` to root directory

### Step 3: Configure Email
1. Update `contact-form.php` with your email settings
2. Test the contact form

### Step 4: Set Up Domain
1. Point your domain to the hosting
2. Test all pages and functionality

## 📧 Email Configuration

### Option 1: PHP Mail (Simple)
Uses server's built-in mail function (may go to spam)

### Option 2: SMTP (Recommended)
Configure with your email provider's SMTP settings

### Option 3: Third-party Service
Use services like EmailJS, Formspree, or Netlify Forms

## 🔧 Troubleshooting

### Common Issues:
1. **404 Errors** - Check .htaccess file
2. **Images Not Loading** - Verify file paths
3. **Contact Form Not Working** - Check PHP configuration
4. **Slow Loading** - Optimize images and enable compression

## 📱 Testing Checklist

After deployment, test:
- [ ] Home page loads correctly
- [ ] All product pages work
- [ ] Navigation functions properly
- [ ] Contact form sends emails
- [ ] Images and videos display
- [ ] Mobile responsiveness
- [ ] Page speed performance

## 🌐 Live Website Structure

```
public_html/
├── index.html (Home page)
├── products/
│   ├── coffee.html
│   ├── coconut.html
│   ├── rice.html
│   └── ... (all product pages)
├── about.html
├── contact.html
├── certifications.html
├── _next/ (Next.js assets)
├── images/ (All images)
├── videos/ (All videos)
├── contact-form.php
└── .htaccess
```

## 💡 Performance Tips

1. **Image Optimization**: Already configured
2. **Caching**: .htaccess includes cache headers
3. **Compression**: Enable Gzip in cPanel
4. **CDN**: Consider using Cloudflare
5. **Minification**: Automatic with Next.js build

---

**Need Help?** Check the troubleshooting section or contact your hosting provider for PHP/email configuration support.