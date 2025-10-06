import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
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

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'UX-Ray Contact Form <onboarding@resend.dev>', // Update after verifying domain
      to: process.env.CONTACT_EMAIL || 'gorodimitris@gmail.com',
      replyTo: email,
      subject: `🌟 New UX-Ray Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #00F0FF 0%, #00A8B5 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: 600;
                color: #00F0FF;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .value {
                background: white;
                padding: 15px;
                border-radius: 5px;
                border-left: 3px solid #00F0FF;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 5px;
                border-left: 3px solid #00F0FF;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                color: #666;
                font-size: 12px;
              }
              .cta {
                display: inline-block;
                background: #00F0FF;
                color: #000;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 5px;
                font-weight: 600;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>👁️ New UX-Ray Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value">
                  <a href="mailto:${email}" style="color: #00F0FF; text-decoration: none;">
                    ${email}
                  </a>
                </div>
              </div>
              
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message}</div>
              </div>

              <div style="text-align: center;">
                <a href="mailto:${email}" class="cta">
                  Reply to ${name}
                </a>
              </div>
            </div>
            
            <div class="footer">
              <p>This message was sent via the UX-Ray contact form</p>
              <p>Sent on ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}</p>
            </div>
          </body>
        </html>
      `,
    })

    // Store in database (optional - using Vercel KV for simplicity)
    if (process.env.KV_REST_API_URL) {
      try {
        const { kv } = await import('@vercel/kv')
        const submissionId = `submission:${Date.now()}`
        await kv.set(submissionId, {
          name,
          email,
          message,
          timestamp: new Date().toISOString(),
        })
      } catch (error) {
        console.log('KV storage not available, skipping database save')
      }
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!', data },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

