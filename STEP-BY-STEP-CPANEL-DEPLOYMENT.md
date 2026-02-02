# 🚀 Step-by-Step cPanel Deployment Guide

## Complete Guide to Deploy Your Website to cPanel Hosting

This guide will walk you through every single step to deploy your Shree Jangama Jyothi website to cPanel hosting. Follow each step carefully.

---

## 📋 Prerequisites Checklist

Before starting, make sure you have:
- [ ] cPanel login credentials (username and password)
- [ ] cPanel URL (usually: yourdomain.com/cpanel or yourdomain.com:2083)
- [ ] Domain name pointed to your hosting
- [ ] FTP credentials (optional, but helpful)
- [ ] This project folder on your computer

---

## 🔧 Part 1: Build Your Website for cPanel

### Step 1: Open Terminal/Command Prompt
1. Open your project folder: `JangamaJyothi`
2. Right-click in the folder → "Open in Terminal" or "Open PowerShell here"
3. Or navigate using: `cd C:\Users\MOHAMMAD ANOUF SAANI\Desktop\Arun\JangamaJyothi`

### Step 2: Build Static Files
Run this command:
```bash
npm run cpanel-build
```

**What this does:**
- Creates a static version of your website
- Generates an `out` folder with all HTML/CSS/JS files
- Optimizes images and assets
- Takes 2-5 minutes to complete

**Expected output:**
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
Static files generated in out/ folder - Ready for cPanel upload!
```

### Step 3: Verify the Build
1. Check that an `out` folder was created in your project
2. Inside `out` folder, you should see:
   - `index.html` (home page)
   - `products` folder
   - `about.html`
   - `contact.html`
   - `_next` folder (assets)
   - All images and videos

### Step 4: Create Upload Package
1. Open the `out` folder
2. Select ALL files and folders inside (Ctrl+A)
3. Right-click → "Send to" → "Compressed (zipped) folder"
4. Name it: `website.zip`
5. Move `website.zip` to your Desktop for easy access

**Important:** Zip the CONTENTS of the `out` folder, not the `out` folder itself!

---

## 🌐 Part 2: Access Your cPanel

### Step 5: Login to cPanel
1. Open your web browser
2. Go to your cPanel URL (one of these):
   - `https://yourdomain.com/cpanel`
   - `https://yourdomain.com:2083`
   - Or the URL provided by your hosting company

3. Enter your credentials:
   - **Username**: [your cPanel username]
   - **Password**: [your cPanel password]
4. Click "Log in"

### Step 6: Navigate to File Manager
1. Once logged in, scroll down to the "FILES" section
2. Click on **"File Manager"**
3. A new tab will open with your file system

---

## 📁 Part 3: Upload Your Website

### Step 7: Prepare the Directory
1. In File Manager, look for the `public_html` folder
2. Click on `public_html` to open it
3. **Important:** This is where your website files go

**If you have existing files:**
- If this is a new domain: `public_html` might be empty (perfect!)
- If there are old files: Select all → Delete (or backup first)

### Step 8: Upload the ZIP File
1. Make sure you're inside `public_html` folder (check the path at top)
2. Click the **"Upload"** button at the top
3. A new page opens
4. Click **"Select File"** or drag `website.zip` from your Desktop
5. Wait for upload to complete (shows 100%)
6. Close the upload page

### Step 9: Extract the ZIP File
1. Back in File Manager, you should see `website.zip` in `public_html`
2. Right-click on `website.zip`
3. Select **"Extract"**
4. A popup appears → Click **"Extract File(s)"**
5. Wait for extraction to complete
6. Click **"Close"** when done

### Step 10: Verify Files
After extraction, you should see in `public_html`:
- `index.html`
- `products` folder
- `about.html`
- `contact.html`
- `certifications.html`
- `_next` folder
- All your images (logo.png, etc.)
- All your videos

### Step 11: Clean Up
1. Select `website.zip` (the zip file)
2. Click **"Delete"** at the top
3. Confirm deletion
4. This saves space on your hosting

---

## 📧 Part 4: Set Up Contact Form (PHP)

Since cPanel doesn't support Node.js API routes, we need to set up a PHP contact form.

### Step 12: Create PHP Contact Handler
1. In File Manager, make sure you're in `public_html`
2. Click **"+ File"** button at the top
3. Name it: `contact-handler.php`
4. Click **"Create New File"**

### Step 13: Edit PHP File
1. Right-click on `contact-handler.php`
2. Select **"Edit"**
3. Click **"Edit"** again in the popup
4. Copy and paste this code:

```php
<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers for CORS and JSON response
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required = ['firstName', 'lastName', 'email', 'subject', 'message'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit();
    }
}

// Sanitize inputs
$firstName = htmlspecialchars(strip_tags($data['firstName']));
$lastName = htmlspecialchars(strip_tags($data['lastName']));
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = isset($data['phone']) ? htmlspecialchars(strip_tags($data['phone'])) : 'Not provided';
$subject = htmlspecialchars(strip_tags($data['subject']));
$message = htmlspecialchars(strip_tags($data['message']));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Email configuration
$to = 'demogogc@gmail.com'; // Your email address
$emailSubject = "🔔 Contact Form: $subject - Shree Jangama Jyothi";

// Create email body
$emailBody = "
===========================================
NEW CONTACT FORM SUBMISSION
===========================================

Contact Information:
--------------------
Name: $firstName $lastName
Email: $email
Phone: $phone
Subject: $subject

Message:
--------
$message

===========================================
Submitted: " . date('Y-m-d H:i:s') . "
From: " . $_SERVER['REMOTE_ADDR'] . "
===========================================
";

// Email headers
$headers = "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mailSent = mail($to, $emailSubject, $emailBody, $headers);

if ($mailSent) {
    // Log successful submission
    $logEntry = date('Y-m-d H:i:s') . " - Email sent from: $email\n";
    file_put_contents('contact-log.txt', $logEntry, FILE_APPEND);
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for contacting us! We will get back to you within 24 hours.'
    ]);
} else {
    // Log failed submission
    $logEntry = date('Y-m-d H:i:s') . " - Failed to send email from: $email\n";
    file_put_contents('contact-log.txt', $logEntry, FILE_APPEND);
    
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send email. Please try again later or contact us directly.'
    ]);
}
?>
```

5. Click **"Save Changes"** at the top right
6. Close the editor

### Step 14: Update Contact Form to Use PHP
1. Find and open `contact.html` in File Manager
2. Right-click → **"Edit"**
3. Find the line that says: `fetch('/api/contact', {`
4. Replace `/api/contact` with `/contact-handler.php`
5. Save and close

**Or** you can do this before building by updating the contact page source code.

---

## 🔒 Part 5: Configure Domain and SSL

### Step 15: Set Up Domain
1. Go back to cPanel main page
2. Scroll to **"DOMAINS"** section
3. Click **"Domains"**
4. Verify your domain is listed and points to `public_html`

### Step 16: Install SSL Certificate (HTTPS)
1. In cPanel, scroll to **"SECURITY"** section
2. Click **"SSL/TLS Status"**
3. Find your domain
4. Click **"Run AutoSSL"**
5. Wait for SSL to install (takes 1-2 minutes)
6. Your site will now work with `https://`

---

## ✅ Part 6: Test Your Website

### Step 17: Visit Your Website
1. Open a new browser tab
2. Go to: `https://yourdomain.com`
3. Your website should load!

### Step 18: Test All Pages
Check each page works:
- [ ] Home page loads
- [ ] Products page works
- [ ] Individual product pages (Coffee, Rice, etc.)
- [ ] About page loads
- [ ] Contact page loads
- [ ] Certifications page loads

### Step 19: Test Contact Form
1. Go to Contact page
2. Fill out the form with test data
3. Submit the form
4. Check your email: demogogc@gmail.com
5. You should receive the contact form submission

### Step 20: Test on Mobile
1. Open your website on your phone
2. Check that it looks good and works properly
3. Test navigation and contact form

---

## 🐛 Troubleshooting Common Issues

### Issue 1: Website Shows "Index of /"
**Problem:** Directory listing instead of website
**Solution:** 
- Make sure `index.html` is in `public_html` (not in a subfolder)
- Check file permissions: index.html should be 644

### Issue 2: Images Not Loading
**Problem:** Broken image icons
**Solution:**
- Check that images are in the correct folder
- Verify file names match exactly (case-sensitive)
- Check file permissions: images should be 644

### Issue 3: Contact Form Not Working
**Problem:** Form submits but no email received
**Solution:**
- Check `contact-log.txt` in File Manager for errors
- Verify email address in `contact-handler.php`
- Contact your hosting provider to enable PHP mail()
- Consider using SMTP instead of PHP mail()

### Issue 4: 404 Errors on Product Pages
**Problem:** Product pages show "Not Found"
**Solution:**
- Create `.htaccess` file in `public_html`
- Add URL rewriting rules (see below)

### Issue 5: Slow Loading
**Problem:** Website takes long to load
**Solution:**
- Enable Gzip compression in cPanel
- Optimize images before uploading
- Use Cloudflare CDN (free)

---

## 📝 Additional Configuration

### Create .htaccess File (Optional but Recommended)
1. In File Manager, click **"+ File"**
2. Name it: `.htaccess`
3. Edit and add:

```apache
# Enable Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove .html extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^\.]+)$ $1.html [NC,L]
```

---

## 🎉 Deployment Complete!

### Final Checklist:
- [ ] Website accessible at your domain
- [ ] All pages loading correctly
- [ ] Images and videos displaying
- [ ] Contact form working
- [ ] SSL certificate installed (HTTPS)
- [ ] Mobile responsive working
- [ ] No console errors

### Your Website is Now Live! 🚀

**Website URL:** https://yourdomain.com
**Email:** demogogc@gmail.com
**Hosting:** cPanel

---

## 📞 Need Help?

### If you get stuck:
1. **Check cPanel Error Logs:**
   - cPanel → Metrics → Errors
   - Look for recent errors

2. **Contact Your Hosting Provider:**
   - They can help with PHP mail configuration
   - SSL certificate issues
   - Server configuration

3. **Check Contact Form Logs:**
   - Look for `contact-log.txt` in File Manager
   - Shows email sending attempts

### Common Hosting Providers Help:
- **Hostinger:** https://support.hostinger.com
- **Bluehost:** https://my.bluehost.com/cgi/help
- **GoDaddy:** https://www.godaddy.com/help
- **SiteGround:** https://www.siteground.com/support

---

## 🔄 Updating Your Website

When you need to update your website:

1. Make changes locally
2. Run `npm run cpanel-build`
3. Create new `website.zip`
4. Upload to cPanel
5. Extract (overwrite existing files)
6. Clear browser cache (Ctrl+Shift+R)

---

**Congratulations! Your website is now live on the internet!** 🎊
