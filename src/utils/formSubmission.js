import emailjs from '@emailjs/browser'
import { put } from '@vercel/blob'

// Initialize EmailJS with public key
const initEmailJS = () => {
  if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }
}

// Store form data in Vercel Blob storage
const storeInBlob = async (formData) => {
  try {
    const timestamp = new Date().toISOString()
    const fileName = `forms/${formData.type}/${timestamp}-${formData.email.replace('@', '-at-')}.json`
    
    const blob = await put(fileName, JSON.stringify({
      ...formData,
      submittedAt: timestamp,
      userAgent: navigator.userAgent,
      referrer: document.referrer
    }), {
      access: 'public',
      token: import.meta.env.VITE_BLOB_READ_WRITE_TOKEN
    })
    
    console.log('Form data stored in blob:', blob.url)
    return blob
  } catch (error) {
    console.error('Error storing in blob:', error)
    // Don't throw - we want form submission to continue even if blob storage fails
    return null
  }
}

// Send email notification
const sendEmail = async (formData) => {
  try {
    initEmailJS()
    
    const templateParams = {
      to_email: import.meta.env.VITE_ADMIN_EMAIL || 'admin@schoolvision.ai',
      from_name: formData.name,
      from_email: formData.email,
      from_company: formData.company || 'Not provided',
      from_phone: formData.phone || 'Not provided',
      message: formData.message || 'No message provided',
      form_type: formData.type || 'contact',
      submitted_at: new Date().toLocaleString(),
      page_url: window.location.href
    }
    
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_schoolvision',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact',
      templateParams
    )
    
    console.log('Email sent successfully:', response)
    return response
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

// Main form submission handler
export const submitForm = async (formData) => {
  try {
    // Store in blob storage first (non-blocking)
    const blobPromise = storeInBlob(formData)
    
    // Send email (this is the critical path)
    await sendEmail(formData)
    
    // Wait for blob storage to complete
    await blobPromise
    
    return { success: true, message: 'Form submitted successfully!' }
  } catch (error) {
    console.error('Form submission error:', error)
    
    // If email fails, try to at least store in blob
    try {
      await storeInBlob({ ...formData, error: error.message })
    } catch (blobError) {
      console.error('Backup storage also failed:', blobError)
    }
    
    return { 
      success: false, 
      message: 'There was an error submitting your form. Please try again or contact us directly at admin@schoolvision.ai' 
    }
  }
}

// Export a simple mailto fallback for critical forms
export const getMailtoLink = (formData) => {
  const subject = encodeURIComponent(`${formData.type || 'Contact'} Form Submission from ${formData.name}`)
  const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message || 'No message provided'}

--
Submitted from: ${window.location.href}
Time: ${new Date().toLocaleString()}
  `)
  
  return `mailto:${import.meta.env.VITE_ADMIN_EMAIL || 'admin@schoolvision.ai'}?subject=${subject}&body=${body}`
}