# Email System Deployment - Final Steps

## ✅ Gmail Verification Complete!
Your Gmail can now send emails as `support@shreejangamajyothi.com`

## 📁 Files to Upload to cPanel

Upload these files to your `public_html` folder:

### 1. contact-form.php
- **Purpose**: Handles contact form submissions
- **Location**: Upload to `public_html/contact-form.php`

### 2. test-email.php  
- **Purpose**: Tests if email sending works
- **Location**: Upload to `public_html/test-email.php`

## 🚀 Upload Process:

1. **Login to cPanel**
   - Go to your hosting control panel
   - Login with your credentials

2. **Open File Manager**
   - Find "File Manager" in cPanel
   - Click to open

3. **Navigate to public_html**
   - Click on `public_html` folder
   - This is where your website files are

4. **Upload Files**
   - Click "Upload" button
   - Select `contact-form.php` and `test-email.php`
   - Upload both files

## 🧪 Testing Process:

### Step 1: Test Basic Email
- Visit: `https://shreejangamajyothi.com/test-email.php`
- **Expected Result**: "✅ Email Test Successful!"
- **Check**: Your Gmail inbox for test email

### Step 2: Test Contact Form
- Visit: `https://shreejangamajyothi.com/contact`
- Fill out the form with test data
- Submit the form
- **Expected Result**: Success message
- **Check**: Your Gmail inbox for contact form email

## 📧 What You'll Receive:

When someone submits the contact form, you'll get an email like:

```
Subject: New Contact Form Submission: [Their Subject]

New contact form submission from your website:

Name: John Doe
Email: john@example.com
Phone: +1234567890
Subject: Product Inquiry

Message:
I'm interested in your rice products...

---
Sent from: shreejangamajyothi.com
Time: 2026-02-05 10:30:00
IP Address: 192.168.1.1
```

## 🔧 If Something Goes Wrong:

### Common Issues:
1. **"Email Test Failed"** → Contact your hosting provider
2. **Emails not received** → Check Gmail spam folder
3. **Permission errors** → Set file permissions to 644

### Quick Fixes:
- Make sure files are in `public_html` (not in subfolders)
- Check file names are exactly: `contact-form.php` and `test-email.php`
- Verify your hosting supports PHP mail function

## 🎯 Success Indicators:
- ✅ test-email.php shows success message
- ✅ Contact form shows "Thank you" message
- ✅ Emails appear in your Gmail inbox
- ✅ Website visitors can contact you successfully

**Ready to upload the files to cPanel?**