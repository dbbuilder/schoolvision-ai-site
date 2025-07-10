// Form submission utility using Vercel serverless function
// This replaces the placeholder EmailJS implementation with a real backend

import { trackFormSubmission, trackDemoRequest, trackContactForm } from './analytics'
import { validateFormSecurity, getBrowserFingerprint } from './recaptcha'

// API endpoint - will use relative URL in production
const API_ENDPOINT = process.env.NODE_ENV === 'production' 
  ? '/api/submit-form' 
  : 'http://localhost:3000/api/submit-form'

// Submit form data to our serverless function
const submitToAPI = async (formType, data, securityToken) => {
  try {
    const browserInfo = getBrowserFingerprint()
    
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType,
        data: {
          ...data,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          pageUrl: window.location.href,
          browserFingerprint: browserInfo.hash
        },
        security: {
          recaptchaToken: securityToken,
          fingerprint: browserInfo.fingerprint
        }
      })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Form submission failed')
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('API submission error:', error)
    throw error
  }
}

// Store form data in localStorage as backup
const storeLocally = (formType, data) => {
  try {
    const submissions = JSON.parse(localStorage.getItem('form_submissions') || '[]')
    submissions.push({
      id: Date.now().toString(),
      formType,
      data,
      timestamp: new Date().toISOString(),
      synced: false
    })
    // Keep only last 50 submissions to avoid storage issues
    if (submissions.length > 50) {
      submissions.shift()
    }
    localStorage.setItem('form_submissions', JSON.stringify(submissions))
  } catch (error) {
    console.error('Local storage error:', error)
  }
}

// Retry failed submissions
const retryFailedSubmissions = async () => {
  try {
    const submissions = JSON.parse(localStorage.getItem('form_submissions') || '[]')
    const unsynced = submissions.filter(s => !s.synced)
    
    for (const submission of unsynced) {
      try {
        await submitToAPI(submission.formType, submission.data)
        submission.synced = true
      } catch (error) {
        console.error('Retry failed for submission:', submission.id)
      }
    }
    
    localStorage.setItem('form_submissions', JSON.stringify(submissions))
  } catch (error) {
    console.error('Retry process error:', error)
  }
}

// Main form submission handler
export const submitForm = async (formData) => {
  const { type: formType, honeypot, ...data } = formData
  
  // Validate form security
  const securityCheck = await validateFormSecurity(
    { ...formData }, 
    {
      identifier: data.email || 'anonymous',
      requireRecaptcha: true,
      checkHoneypot: true,
      enforceRateLimit: true
    }
  )
  
  if (!securityCheck.valid) {
    console.error('Form security validation failed:', securityCheck.errors)
    const errorMessage = securityCheck.errors[0]?.message || 'Security validation failed'
    return {
      success: false,
      message: errorMessage,
      errors: securityCheck.errors
    }
  }
  
  try {
    // Store locally first as backup
    storeLocally(formType || 'contact', data)
    
    // Submit to API with security token
    const result = await submitToAPI(formType || 'contact', data, securityCheck.enhancedData.recaptchaToken)
    
    // Track successful submission in analytics
    trackFormSubmission(formType || 'contact')
    
    // Track specific form types
    if (formType === 'demo_request') {
      trackDemoRequest()
    } else if (formType === 'contact') {
      trackContactForm()
    }
    
    // Mark as synced in local storage
    const submissions = JSON.parse(localStorage.getItem('form_submissions') || '[]')
    const lastSubmission = submissions[submissions.length - 1]
    if (lastSubmission) {
      lastSubmission.synced = true
      localStorage.setItem('form_submissions', JSON.stringify(submissions))
    }
    
    return { 
      success: true, 
      message: 'Thank you! Your form has been submitted successfully. We\'ll get back to you soon.',
      submissionId: result.submissionId
    }
  } catch (error) {
    console.error('Form submission error:', error)
    
    // Try to retry failed submissions in the background
    setTimeout(() => retryFailedSubmissions(), 5000)
    
    return { 
      success: false, 
      message: 'We\'re having trouble submitting your form. It\'s been saved and will be sent when connection is restored. You can also email us directly at info@schoolvision.ai',
      fallbackEmail: getMailtoLink(formData)
    }
  }
}

// Export a simple mailto fallback for critical forms
export const getMailtoLink = (formData) => {
  const subject = encodeURIComponent(`${formData.type || 'Contact'} Form Submission from ${formData.name}`)
  const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company/School: ${formData.company || formData.schoolName || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Role: ${formData.role || 'Not provided'}

Message:
${formData.message || 'No message provided'}

--
Submitted from: ${window.location.href}
Time: ${new Date().toLocaleString()}
  `)
  
  return `mailto:info@schoolvision.ai?subject=${subject}&body=${body}`
}

// Initialize retry mechanism on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    // Try to submit any failed forms after 2 seconds
    setTimeout(() => retryFailedSubmissions(), 2000)
  })
  
  // Also retry when coming back online
  window.addEventListener('online', () => {
    retryFailedSubmissions()
  })
}

// Function to get all unsynced submissions (useful for debugging)
export const getUnsyncedSubmissions = () => {
  try {
    const submissions = JSON.parse(localStorage.getItem('form_submissions') || '[]')
    return submissions.filter(s => !s.synced)
  } catch (error) {
    console.error('Error getting unsynced submissions:', error)
    return []
  }
}

// Function to clear submission history
export const clearSubmissionHistory = () => {
  try {
    localStorage.removeItem('form_submissions')
  } catch (error) {
    console.error('Error clearing submission history:', error)
  }
}