# ✅ cPanel Deployment Checklist

## Quick Reference Guide for Deployment

Print this checklist and check off each step as you complete it.

---

## 🔧 Pre-Deployment (On Your Computer)

- [ ] Open project folder in terminal
- [ ] Run: `npm run cpanel-build`
- [ ] Wait for build to complete (2-5 minutes)
- [ ] Verify `out` folder was created
- [ ] Open `out` folder
- [ ] Select ALL contents (Ctrl+A)
- [ ] Create ZIP file: `website.zip`
- [ ] Move ZIP to Desktop

**Time Required:** 5-10 minutes

---

## 🌐 cPanel Access

- [ ] Open browser
- [ ] Go to cPanel URL (yourdomain.com/cpanel)
- [ ] Enter username
- [ ] Enter password
- [ ] Click "Log in"
- [ ] Find "File Manager" in FILES section
- [ ] Click "File Manager"

**Time Required:** 2 minutes

---

## 📁 File Upload

- [ ] Navigate to `public_html` folder
- [ ] Delete old files (if any)
- [ ] Click "Upload" button
- [ ] Select `website.zip` from Desktop
- [ ] Wait for 100% upload
- [ ] Close upload page
- [ ] Right-click `website.zip`
- [ ] Click "Extract"
- [ ] Click "Extract File(s)"
- [ ] Wait for completion
- [ ] Delete `website.zip` file

**Time Required:** 5-10 minutes (depends on internet speed)

---

## 📧 Contact Form Setup

- [ ] In File Manager, click "+ File"
- [ ] Name: `contact-handler.php`
- [ ] Right-click → Edit
- [ ] Paste PHP code (from guide)
- [ ] Change email to: `demogogc@gmail.com`
- [ ] Save changes
- [ ] Find `contact.html`
- [ ] Edit and change `/api/contact` to `/contact-handler.php`
- [ ] Save changes

**Time Required:** 5 minutes

---

## 🔒 Security & Domain

- [ ] Go to cPanel main page
- [ ] Click "Domains" (verify domain setup)
- [ ] Click "SSL/TLS Status"
- [ ] Run AutoSSL for your domain
- [ ] Wait for SSL installation
- [ ] Verify HTTPS works

**Time Required:** 3-5 minutes

---

## ✅ Testing

### Basic Tests:
- [ ] Visit: https://yourdomain.com
- [ ] Home page loads correctly
- [ ] Click "Products" - works
- [ ] Click "Coffee" product - works
- [ ] Click "About" - works
- [ ] Click "Contact" - works
- [ ] Click "Certifications" - works

### Contact Form Test:
- [ ] Go to Contact page
- [ ] Fill out form with test data
- [ ] Click Submit
- [ ] See success message
- [ ] Check email: demogogc@gmail.com
- [ ] Verify email received

### Mobile Test:
- [ ] Open website on phone
- [ ] Check home page
- [ ] Test navigation menu
- [ ] Check product pages
- [ ] Test contact form

### Performance Test:
- [ ] No console errors (F12)
- [ ] Images load properly
- [ ] Videos play correctly
- [ ] Page loads in < 3 seconds

**Time Required:** 10-15 minutes

---

## 🐛 Troubleshooting Checklist

If something doesn't work:

### Website Not Loading:
- [ ] Check domain DNS settings
- [ ] Verify files in `public_html` (not subfolder)
- [ ] Check `index.html` exists
- [ ] Clear browser cache (Ctrl+Shift+R)

### Images Not Showing:
- [ ] Check file names match exactly
- [ ] Verify images uploaded
- [ ] Check file permissions (644)
- [ ] Clear browser cache

### Contact Form Not Working:
- [ ] Check `contact-handler.php` exists
- [ ] Verify email address correct
- [ ] Check `contact-log.txt` for errors
- [ ] Test PHP mail() with hosting provider

### SSL Not Working:
- [ ] Wait 5-10 minutes for propagation
- [ ] Run AutoSSL again
- [ ] Contact hosting support
- [ ] Check domain DNS

---

## 📊 Deployment Summary

### Total Time Required:
- **Minimum:** 30 minutes
- **Average:** 45 minutes
- **Maximum:** 1 hour (with troubleshooting)

### What You Need:
1. ✅ cPanel login credentials
2. ✅ Domain name
3. ✅ Project built (`npm run cpanel-build`)
4. ✅ Internet connection
5. ✅ Web browser

### What You Get:
1. ✅ Live website at your domain
2. ✅ Working contact form
3. ✅ SSL certificate (HTTPS)
4. ✅ All 13 product pages
5. ✅ Mobile-responsive design
6. ✅ Professional email system

---

## 🎯 Quick Commands Reference

### Build for cPanel:
```bash
npm run cpanel-build
```

### Clear cache and rebuild:
```bash
clear-cache.bat
npm run cpanel-build
```

### Test locally first:
```bash
npm run dev
# Visit: http://localhost:3000
```

---

## 📞 Support Contacts

### Your Email:
- **demogogc@gmail.com**

### Hosting Provider:
- **Support URL:** [Your hosting support link]
- **Phone:** [Your hosting support phone]
- **Live Chat:** [Your hosting live chat]

### Domain Registrar:
- **Website:** [Your domain registrar]
- **Support:** [Domain support contact]

---

## 🔄 Update Checklist (For Future Updates)

When you need to update the website:

- [ ] Make changes locally
- [ ] Test with `npm run dev`
- [ ] Run `npm run cpanel-build`
- [ ] Create new `website.zip`
- [ ] Login to cPanel
- [ ] Go to File Manager
- [ ] Upload new `website.zip`
- [ ] Extract (overwrite files)
- [ ] Delete ZIP file
- [ ] Clear browser cache
- [ ] Test website

**Time Required:** 10-15 minutes

---

## ✨ Post-Deployment Tasks

After successful deployment:

- [ ] Bookmark your website
- [ ] Share website link with team
- [ ] Set up Google Analytics (if needed)
- [ ] Submit to Google Search Console
- [ ] Create social media posts
- [ ] Update business cards with URL
- [ ] Test from different devices
- [ ] Test from different locations
- [ ] Monitor contact form submissions
- [ ] Set up regular backups

---

## 🎉 Deployment Status

**Date Deployed:** _______________

**Domain:** _______________

**Deployed By:** _______________

**Status:** ⭕ Not Started | 🔄 In Progress | ✅ Complete

**Notes:**
_________________________________
_________________________________
_________________________________

---

**Keep this checklist for future reference!**
