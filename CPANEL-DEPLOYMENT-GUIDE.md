# 🚀 cPanel Deployment Guide for Shree Jangama Jyothi Website

## Overview
This guide will help you deploy your Next.js website to cPanel hosting. The project now supports both development mode (with API routes) and static export mode (for cPanel deployment).

## 🔧 Deployment Modes

### Development Mode (Default)
- **Command**: `npm run dev`
- **Features**: Full Next.js functionality including API routes
- **Email**: Works with nodemailer and Gmail SMTP
- **Use Case**: Local development and testing

### Static Export Mode (cPanel)
- **Command**: `npm run cpanel-build`
- **Features**: Static HTML/CSS/JS files only
- **Email**: Requires PHP contact form (included)
- **Use Case**: cPanel hosting deployment

## ⚠️ Important Notes

### What Works in Both Modes:
✅ All your product pages and content  
✅ Static images and videos  
✅ Client-side routing  
✅ CSS animations and styling  
✅ Contact form (frontend)  

### Development Mode Only:
🔧 **Contact Form API** - Node.js email sending  
🔧 **Server-side features** - Dynamic rendering  
🔧 **API routes** - `/api/contact`, `/api/test-email`  

### Static Export Mode:
📁 **Static files** - HTML, CSS, JS only  
📧 **PHP contact form** - Server-side email handling  
🌐 **cPanel compatible** - No Node.js required  

## 📁 Files Created/Modified for cPanel:

### 1. **next.config.js** - Conditional static export
### 2. **package.json** - Added cpanel-build script
### 3. **contact-form.php** - PHP contact form handler
### 4. **.htaccess** - URL rewriting and redirects
### 5. **API routes** - Added `dynamic = 'force-dynamic'`

## 🛠️ Deployment Steps:

### Step 1: Build for cPanel
```bash
npm run cpanel-build
```
This creates static files in the `out/` folder.

### Step 2: Upload to cPanel
1. Compress the `out` folder contents to `website.zip`
2. Upload to cPanel File Manager
3. Extract in `public_html` folder
4. Upload `contact-form.php` to root directory

### Step 3: Configure Email (PHP)
1. Update `contact-form.php` with your email settings
2. Test the contact form

### Step 4: Set Up Domain
1. Point your domain to the hosting
2. Test all pages and functionality

## 📧 Email Configuration Options

### Option 1: Development Mode (Current)
- Uses Node.js with nodemailer
- Gmail SMTP with app password
- Works on `http://localhost:3000`

### Option 2: Static Export + PHP
- Uses PHP mail() function
- Configure in `contact-form.php`
- Works on cPanel hosting

### Option 3: Third-party Service
- Use EmailJS, Formspree, or Netlify Forms
- No server-side code required
- Works with static export

## 🔧 Troubleshooting

### Development Mode Issues:
1. **API Route Errors** - Check `dynamic = 'force-dynamic'` is set
2. **Email Not Sending** - Verify Gmail app password
3. **Console Errors** - Check image paths and hydration

### Static Export Issues:
1. **Build Fails** - Ensure `EXPORT_MODE=true` is set
2. **Contact Form** - Use PHP version instead of API
3. **Images Not Loading** - Check relative paths

## 📱 Testing Checklist

### Development Mode:
- [ ] `npm run dev` starts successfully
- [ ] Contact form API works at `/api/contact`
- [ ] Email test works at `/api/test-email`
- [ ] All pages load without console errors

### Static Export Mode:
- [ ] `npm run cpanel-build` completes successfully
- [ ] `out/` folder contains all static files
- [ ] Upload to cPanel works
- [ ] PHP contact form sends emails

## 🌐 File Structure After Export

```
out/ (Upload this to cPanel)
├── index.html (Home page)
├── products/
│   ├── coffee.html
│   ├── coconut.html
│   └── ... (all product pages)
├── about.html
├── contact.html
├── certifications.html
├── _next/ (Next.js assets)
└── ... (all static assets)

Additional files for cPanel:
├── contact-form.php (Upload separately)
└── .htaccess (For URL rewriting)
```

## 💡 Performance Tips

1. **Image Optimization**: Automatic in development, manual in static export
2. **Caching**: .htaccess includes cache headers
3. **Compression**: Enable Gzip in cPanel
4. **CDN**: Consider using Cloudflare

---

**Current Status**: 
- ✅ Development mode working with email system
- ✅ Static export mode ready for cPanel
- ✅ Console errors fixed
- ✅ All images loading properly