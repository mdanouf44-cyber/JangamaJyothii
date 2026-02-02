import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic'

// Create transporter for sending emails
const createTransporter = () => {
  // Try to use environment variables, fallback to a simple configuration
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  }
  
  // Fallback: Use a test account or simple SMTP
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'ethereal.user@ethereal.email',
      pass: 'ethereal.pass',
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Log the submission (this will always work)
    const submissionData = {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
      submittedTo: 'demogogc@gmail.com'
    }
    
    console.log('=== NEW CONTACT FORM SUBMISSION ===')
    console.log(JSON.stringify(submissionData, null, 2))
    console.log('=====================================')

    // Try to send email
    let emailSent = false
    try {
      const transporter = createTransporter()
      
      const mailOptions = {
        from: process.env.EMAIL_USER || 'noreply@shreejangamajyothi.com',
        to: 'demogogc@gmail.com', // Your email address
        subject: `🔔 Contact Form: ${subject} - Shree Jangama Jyothi`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">
                🌾 Shree Jangama Jyothi Global LLP
              </h1>
              <p style="color: #dcfce7; margin: 10px 0 0 0; font-size: 16px;">New Contact Form Inquiry</p>
            </div>
            
            <!-- Contact Details -->
            <div style="padding: 30px; background-color: #f8fafc; border-left: 4px solid #16a34a;">
              <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px;">👤 Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 100px;">Name:</td>
                  <td style="padding: 8px 0; color: #4b5563;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #16a34a; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                  <td style="padding: 8px 0; color: #4b5563;">${phone || '📞 Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject:</td>
                  <td style="padding: 8px 0; color: #4b5563; font-weight: 600;">${subject}</td>
                </tr>
              </table>
            </div>
            
            <!-- Message -->
            <div style="padding: 30px; background-color: #ffffff; border: 1px solid #e5e7eb; margin: 0;">
              <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 20px;">💬 Message</h2>
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border-left: 3px solid #16a34a;">
                <p style="line-height: 1.8; color: #374151; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <!-- Timestamp -->
            <div style="padding: 20px 30px; background-color: #ecfdf5; border-radius: 0 0 10px 10px;">
              <p style="margin: 0; color: #065f46; font-size: 14px; text-align: center;">
                <strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-IN', { 
                  timeZone: 'Asia/Kolkata',
                  dateStyle: 'full',
                  timeStyle: 'medium'
                })} (IST)
              </p>
            </div>
            
            <!-- Footer -->
            <div style="padding: 20px; text-align: center; background-color: #f3f4f6; border-top: 1px solid #d1d5db;">
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                This inquiry was submitted through the contact form on<br>
                <strong>www.shreejangamajyothi.com</strong>
              </p>
            </div>
          </div>
        `,
      }

      await transporter.sendMail(mailOptions)
      emailSent = true
      console.log('✅ Email sent successfully to demogogc@gmail.com')
      
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError)
      console.log('📝 Form data has been logged above for manual review')
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us! We have received your inquiry and will get back to you within 24 hours.',
        emailSent: emailSent
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    )
  }
}
