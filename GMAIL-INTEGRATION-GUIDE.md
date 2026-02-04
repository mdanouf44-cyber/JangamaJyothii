# Gmail Integration Guide 📧
## Connect support@shreejangamajyothi.com to Gmail

This guide will help you connect your business email to Gmail so you can manage all emails from one place.

---

## 🎯 **What You'll Achieve:**
- Receive website contact form emails in Gmail
- Send emails from Gmail using your business email
- Get mobile notifications for new inquiries
- Professional email management

---

## 📥 **Method 1: Add Business Email to Gmail (Recommended)**

### **Step 1: Access Gmail Settings**
1. **Open Gmail** in your browser
2. **Click the gear icon ⚙️** (top right)
3. **Click "See all settings"**
4. **Go to "Accounts and Import" tab**

### **Step 2: Add Incoming Mail**
1. **Find section**: "Check mail from other accounts"
2. **Click "Add a mail account"**
3. **Enter email**: `support@shreejangamajyothi.com`
4. **Click "Next"**

### **Step 3: Configure IMAP Settings**
```
✅ Import emails from my other account (POP3)
❌ (Uncheck this - we want IMAP)

Email address: support@shreejangamajyothi.com
Username: support@shreejangamajyothi.com
Password: [your email password from cPanel]
POP server: mail.shreejangamajyothi.com
Port: 993
✅ Always use a secure connection (SSL) when retrieving mail
✅ Label incoming messages
✅ Archive incoming messages
```

### **Step 4: Add Sending Capability**
1. **Gmail will ask**: "Would you also like to be able to send mail as support@shreejangamajyothi.com?"
2. **Click "Yes"**
3. **Fill in details**:
```
Name: Shree Jangama Jyothi Support Team
Email address: support@shreejangamajyothi.com
✅ Treat as an alias
```
4. **Click "Next Step"**

### **Step 5: Configure SMTP Settings**
```
SMTP Server: mail.shreejangamajyothi.com
Port: 465
Username: support@shreejangamajyothi.com
Password: [your email password from cPanel]
✅ Secured connection using SSL (recommended)
```
5. **Click "Add Account"**

### **Step 6: Verify Email**
1. **Gmail will send a verification code** to `support@shreejangamajyothi.com`
2. **Check your cPanel webmail** for the verification email
3. **Enter the verification code** in Gmail
4. **Click "Verify"**

---

## 📱 **Method 2: Gmail Mobile App Setup**

### **For Android:**
1. **Open Gmail app**
2. **Tap menu (☰)** → **Settings**
3. **Tap "Add account"**
4. **Select "Other"**
5. **Enter**: `support@shreejangamajyothi.com`
6. **Choose "IMAP"** (recommended)
7. **Use the same server settings above**

### **For iPhone:**
1. **Open Gmail app**
2. **Tap profile picture** → **Add another account**
3. **Select "Other"**
4. **Follow the same steps as Android**

---

## 🔄 **Method 3: Email Forwarding (Alternative)**

If you prefer to forward all business emails to your personal Gmail:

### **In cPanel:**
1. **Go to cPanel** → **Email Forwarders**
2. **Click "Add Forwarder"**
3. **Configure**:
```
Address to Forward: support@shreejangamajyothi.com
Destination: your-personal-email@gmail.com
```
4. **Click "Add Forwarder"**

### **Pros & Cons:**
✅ **Pros**: Simple setup, all emails in personal Gmail  
❌ **Cons**: Replies come from personal email, less professional

---

## 📋 **Server Settings Reference**

### **Incoming Mail (IMAP) - Recommended:**
```
Server: mail.shreejangamajyothi.com
Port: 993 (SSL) or 143 (non-SSL)
Security: SSL/TLS
Username: support@shreejangamajyothi.com
Password: [your cPanel email password]
```

### **Incoming Mail (POP3) - Alternative:**
```
Server: mail.shreejangamajyothi.com
Port: 995 (SSL) or 110 (non-SSL)
Security: SSL/TLS
Username: support@shreejangamajyothi.com
Password: [your cPanel email password]
```

### **Outgoing Mail (SMTP):**
```
Server: mail.shreejangamajyothi.com
Port: 465 (SSL) or 587 (TLS)
Security: SSL/TLS
Authentication: Required
Username: support@shreejangamajyothi.com
Password: [your cPanel email password]
```

---

## 🎯 **After Setup - How to Use:**

### **Receiving Emails:**
- Contact form submissions will appear in Gmail
- Look for label "support@shreejangamajyothi.com"
- Get mobile notifications

### **Sending Emails:**
1. **Compose new email** in Gmail
2. **Click "From" dropdown**
3. **Select**: `support@shreejangamajyothi.com`
4. **Send professional replies**

---

## 🔧 **Troubleshooting:**

### **Common Issues:**

#### **"Authentication failed"**
- Double-check email password
- Try port 587 instead of 465
- Contact hosting provider

#### **"Connection timeout"**
- Check server name: `mail.shreejangamajyothi.com`
- Try without SSL first, then enable SSL
- Verify email account exists in cPanel

#### **"Emails not syncing"**
- Choose IMAP instead of POP3
- Check Gmail storage space
- Wait 15-30 minutes for initial sync

### **Need Help?**
1. **Check cPanel email settings**
2. **Contact your hosting provider**
3. **Try webmail first**: `https://shreejangamajyothi.com:2096`

---

## ✅ **Success Checklist:**

- [ ] Gmail can receive emails from business account
- [ ] Gmail can send emails as business account
- [ ] Mobile app configured (optional)
- [ ] Test email sent and received
- [ ] Contact form tested and email received

---

## 🚀 **Next Steps:**

1. **Complete Gmail setup** using this guide
2. **Upload PHP files** to cPanel (contact-form.php, test-email.php)
3. **Test contact form** on website
4. **Check Gmail** for incoming contact form submissions

---

## 📞 **Support:**

If you need assistance:
- **Hosting Provider**: Help with server settings
- **Gmail Help**: Google's support documentation
- **cPanel Documentation**: Email account management

**Your business email will be fully integrated with Gmail for professional communication!** 🎉