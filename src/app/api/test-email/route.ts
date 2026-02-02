import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Note: This API route won't work in static export mode
// Remove this file or comment it out for static deployment

export async function GET() {
  try {
    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email credentials not configured in .env.local',
          instructions:
            'Please set EMAIL_USER and EMAIL_PASS in .env.local file',
        },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Verify connection
    await transporter.verify()

    // Send test email
    const testEmail = {
      from: process.env.EMAIL_USER,
      to: 'demogogc@gmail.com',
      subject: '✅ Email Test - Shree Jangama Jyothi Contact Form',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); padding: 20px; text-align: center; border-radius: 10px; color: white;">
            <h1 style="margin: 0;">🎉 Email Configuration Successful!</h1>
          </div>
          <div style="padding: 20px; background-color: #f8fafc; margin-top: 20px; border-radius: 10px;">
            <h2 style="color: #1f2937;">Email System Status: ✅ Working</h2>
            <p><strong>From:</strong> ${process.env.EMAIL_USER}</p>
            <p><strong>To:</strong> demogogc@gmail.com</p>
            <p><strong>Test Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            <p style="color: #16a34a; font-weight: bold;">Your contact form is now ready to receive inquiries!</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(testEmail)

    return NextResponse.json({
      success: true,
      message:
        'Email configuration is working! Test email sent to demogogc@gmail.com',
      details: {
        from: process.env.EMAIL_USER,
        to: 'demogogc@gmail.com',
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error: any) {
    console.error('Email test failed:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Email configuration failed',
        error: error.message,
        troubleshooting: {
          'Invalid credentials':
            'Check if EMAIL_PASS is the correct Gmail app password',
          'Authentication failed':
            'Make sure 2-factor authentication is enabled and you are using an app password',
          'Connection timeout':
            'Check internet connection and Gmail SMTP settings',
        },
      },
      { status: 500 }
    )
  }
}
