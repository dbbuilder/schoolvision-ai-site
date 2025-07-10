// Vercel Serverless Function for form submissions

// Verify reCAPTCHA token
async function verifyRecaptcha(token, remoteip) {
  if (!token || !process.env.RECAPTCHA_SECRET_KEY) {
    // Skip verification if not configured
    return { success: true, score: 1.0 }
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token,
        remoteip: remoteip || ''
      })
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return { success: false, error: 'verification_failed' }
  }
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { formType, data, security } = req.body
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress

    // Validate form data
    if (!formType || !data) {
      return res.status(400).json({ error: 'Missing form type or data' })
    }

    // Verify reCAPTCHA if token provided
    if (security?.recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(security.recaptchaToken, clientIP)
      
      if (!recaptchaResult.success) {
        return res.status(400).json({ 
          error: 'reCAPTCHA verification failed',
          details: recaptchaResult['error-codes']
        })
      }

      // Check reCAPTCHA v3 score (0.0 - 1.0, higher is better)
      if (recaptchaResult.score && recaptchaResult.score < 0.5) {
        console.warn('Low reCAPTCHA score:', recaptchaResult.score, 'for', data.email)
        // You might want to flag these submissions for review
      }
    }

    // Check for honeypot field
    if (data.honeypot || data.hp_url || data.hp_website || data.hp_company) {
      console.warn('Honeypot triggered for:', data.email)
      // Silently reject but return success to confuse bots
      return res.status(200).json({
        success: true,
        message: 'Form submitted successfully',
        submissionId: Date.now().toString()
      })
    }

    // Validate required fields based on form type
    const requiredFields = {
      contact: ['name', 'email', 'message'],
      demo: ['name', 'email', 'schoolName', 'role'],
      newsletter: ['email']
    }

    const required = requiredFields[formType] || []
    const missingFields = required.filter(field => !data[field])

    if (missingFields.length > 0) {
      return res.status(400).json({ 
        error: 'Missing required fields', 
        fields: missingFields 
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (data.email && !emailRegex.test(data.email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Here you would typically:
    // 1. Send email notifications (using SendGrid, AWS SES, etc.)
    // 2. Store in database (using Supabase, PostgreSQL, etc.)
    // 3. Add to CRM (HubSpot, Salesforce, etc.)
    // 4. Send to analytics

    // For now, we'll log and return success
    console.log(`Form submission - Type: ${formType}`, data)

    // Simulate email sending (replace with actual email service)
    const emailContent = {
      to: process.env.NOTIFICATION_EMAIL || 'info@schoolvision.ai',
      from: 'noreply@schoolvision.ai',
      subject: `New ${formType} form submission from ${data.name || data.email}`,
      html: `
        <h2>New ${formType} Form Submission</h2>
        <hr>
        ${Object.entries(data).map(([key, value]) => `
          <p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>
        `).join('')}
        <hr>
        <p><small>Submitted at: ${new Date().toISOString()}</small></p>
      `
    }

    // Add security metadata
    const submissionMetadata = {
      ...emailContent,
      security: {
        ip: clientIP,
        fingerprint: security?.fingerprint,
        timestamp: new Date().toISOString(),
        recaptchaScore: security?.recaptchaToken ? 'verified' : 'not_provided'
      }
    }

    // Log submission with security info
    console.log('Form submission with security:', submissionMetadata)

    // In production, you would:
    // 1. Send email using SendGrid/AWS SES
    // 2. Store in database with security metadata
    // 3. Check against spam/abuse database

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      submissionId: Date.now().toString()
    })

  } catch (error) {
    console.error('Form submission error:', error)
    return res.status(500).json({ 
      error: 'Internal server error', 
      message: 'Failed to process form submission' 
    })
  }
}