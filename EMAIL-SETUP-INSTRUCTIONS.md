# 📧 Email Setup Instructions for Contact Form

## Current Status
✅ Contact form API is configured to send emails to: **demogogc@gmail.com**  
✅ Nodemailer is installed and configured  
✅ Professional email template is ready  
⚠️ **Email credentials need to be configured**

## Setup Steps

### Step 1: Enable Gmail App Password
1. Go to your Gmail account: **demogogc@gmail.com**
2. Click on your profile picture → **Manage your Google Account**
3. Go to **Security** tab
4. Enable **2-Step Verification** (if not already enabled)
5. Once 2-Step Verification is enabled, go back to **Security**
6. Find **App passwords** section
7. Click **App passwords**
8. Select **Mail** as the app
9. Generate a new app password
10. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)

### Step 2: Update Environment File
1. Open the file: `JangamaJyothi/.env.local`
2. Replace `your-gmail-app-password-here` with the 16-character password from Step 1
3. Save the file

**Example:**
```env
EMAIL_USER=demogogc@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

### Step 3: Restart Development Server
```bash
# Stop the current server (Ctrl + C)
# Then restart:
npm run dev
```

## How It Works

### Email Flow
1. User fills out contact form on website
2. Form data is sent to `/api/contact` endpoint
3. API validates the data
4. Email is sent FROM: `demogogc@gmail.com` TO: `demogogc@gmail.com`
5. User receives confirmation message
6. You receive a beautifully formatted email with:
   - Contact person's details
   - Subject and message
   - Timestamp
   - Professional styling

### Email Template Features
- 🎨 Professional design with company branding
- 📋 Organized contact information table
- 💬 Formatted message content
- 📅 Indian Standard Time timestamp
- 🔗 Clickable email links
- 📱 Mobile-responsive design

### Fallback System
- If email sending fails, form data is logged to console
- User still receives success confirmation
- You can check server logs for submissions

## Testing the Setup

### Test Form Submission
1. Go to: `http://localhost:3000/contact`
2. Fill out the contact form
3. Submit the form
4. Check your email: **demogogc@gmail.com**
5. Check server console for logs

### Expected Email Subject
```
🔔 Contact Form: [Subject] - Shree Jangama Jyothi
```

## Troubleshooting

### Common Issues
1. **"Invalid credentials"** → Check app password is correct
2. **"Less secure app access"** → Use app password, not regular password
3. **No email received** → Check spam folder
4. **Server error** → Check console logs for details

### Alternative SMTP Services
If Gmail doesn't work, you can use:
- **Outlook/Hotmail**: `smtp-mail.outlook.com`
- **Yahoo**: `smtp.mail.yahoo.com`
- **Custom SMTP**: Update EMAIL_HOST, EMAIL_PORT in .env.local

## Security Notes
- ✅ App passwords are safer than regular passwords
- ✅ Environment variables keep credentials secure
- ✅ Email validation prevents spam
- ✅ Rate limiting can be added if needed

---

**Need Help?** Check the server console logs when testing the contact form. All submissions are logged even if email sending fails.