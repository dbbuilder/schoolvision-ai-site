// Google reCAPTCHA v3 integration for form protection
// reCAPTCHA v3 is invisible and doesn't interrupt user flow

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''
const RECAPTCHA_SCRIPT_ID = 'recaptcha-script'

// Load reCAPTCHA script
export const loadRecaptcha = () => {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (window.grecaptcha) {
      resolve(window.grecaptcha)
      return
    }

    // Check if script is already being loaded
    const existingScript = document.getElementById(RECAPTCHA_SCRIPT_ID)
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.grecaptcha))
      existingScript.addEventListener('error', reject)
      return
    }

    // Check if site key is configured
    if (!RECAPTCHA_SITE_KEY) {
      console.warn('reCAPTCHA: No site key configured')
      resolve(null)
      return
    }

    // Create and load script
    const script = document.createElement('script')
    script.id = RECAPTCHA_SCRIPT_ID
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
    script.async = true
    script.defer = true

    script.addEventListener('load', () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => resolve(window.grecaptcha))
      } else {
        reject(new Error('reCAPTCHA failed to load'))
      }
    })

    script.addEventListener('error', () => {
      reject(new Error('Failed to load reCAPTCHA script'))
    })

    document.head.appendChild(script)
  })
}

// Execute reCAPTCHA and get token
export const executeRecaptcha = async (action = 'submit') => {
  try {
    const grecaptcha = await loadRecaptcha()
    
    if (!grecaptcha || !RECAPTCHA_SITE_KEY) {
      // Return null if reCAPTCHA is not configured
      // This allows forms to work in development without reCAPTCHA
      return null
    }

    const token = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action })
    return token
  } catch (error) {
    console.error('reCAPTCHA execution error:', error)
    return null
  }
}

// Honeypot field generator
export const generateHoneypot = () => {
  // Generate a random field name that bots might fill
  const fieldNames = ['url', 'website', 'company', 'phone_number', 'address']
  const randomField = fieldNames[Math.floor(Math.random() * fieldNames.length)]
  
  return {
    fieldName: `hp_${randomField}`,
    fieldId: `hp_${Date.now()}`
  }
}

// Rate limiting tracker
const submissionTracker = new Map()

export const checkRateLimit = (identifier, maxAttempts = 3, windowMs = 60000) => {
  const now = Date.now()
  const userSubmissions = submissionTracker.get(identifier) || []
  
  // Clean old submissions
  const recentSubmissions = userSubmissions.filter(
    timestamp => now - timestamp < windowMs
  )
  
  if (recentSubmissions.length >= maxAttempts) {
    const oldestSubmission = Math.min(...recentSubmissions)
    const timeUntilReset = windowMs - (now - oldestSubmission)
    
    return {
      allowed: false,
      timeUntilReset: Math.ceil(timeUntilReset / 1000), // seconds
      message: `Too many submissions. Please try again in ${Math.ceil(timeUntilReset / 1000)} seconds.`
    }
  }
  
  // Add current submission
  recentSubmissions.push(now)
  submissionTracker.set(identifier, recentSubmissions)
  
  return {
    allowed: true,
    attemptsRemaining: maxAttempts - recentSubmissions.length
  }
}

// Form protection validator
export const validateFormSecurity = async (formData, options = {}) => {
  const {
    requireRecaptcha = true,
    checkHoneypot = true,
    enforceRateLimit = true,
    identifier = 'global'
  } = options

  const errors = []

  // Check rate limit
  if (enforceRateLimit) {
    const rateCheck = checkRateLimit(identifier)
    if (!rateCheck.allowed) {
      errors.push({
        type: 'rate_limit',
        message: rateCheck.message
      })
    }
  }

  // Check honeypot
  if (checkHoneypot && formData.honeypot) {
    errors.push({
      type: 'honeypot',
      message: 'Invalid form submission detected'
    })
  }

  // Validate reCAPTCHA
  if (requireRecaptcha && !formData.recaptchaToken) {
    const token = await executeRecaptcha('form_submit')
    if (!token && RECAPTCHA_SITE_KEY) {
      errors.push({
        type: 'recaptcha',
        message: 'reCAPTCHA validation failed'
      })
    }
    formData.recaptchaToken = token
  }

  return {
    valid: errors.length === 0,
    errors,
    enhancedData: formData
  }
}

// Browser fingerprinting for additional security
export const getBrowserFingerprint = () => {
  const fingerprint = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenResolution: `${screen.width}x${screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timestamp: new Date().toISOString()
  }

  // Simple hash function for fingerprint
  const hash = JSON.stringify(fingerprint)
    .split('')
    .reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0)
    .toString(36)

  return {
    fingerprint,
    hash
  }
}