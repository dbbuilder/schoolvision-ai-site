// Analytics utility for Google Analytics 4
// To use: Add your GA4 measurement ID to environment variables

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

// Initialize Google Analytics
export const initAnalytics = () => {
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    console.warn('Google Analytics: No measurement ID configured')
    return
  }

  // Add Google Analytics script
  const script1 = document.createElement('script')
  script1.async = true
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script1)

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || []
  window.gtag = function() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    cookie_flags: 'SameSite=None;Secure'
  })
}

// Track page views
export const trackPageView = (path, title) => {
  if (typeof window.gtag !== 'function') return

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title
  })
}

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window.gtag !== 'function') return

  window.gtag('event', eventName, {
    ...parameters,
    send_to: GA_MEASUREMENT_ID
  })
}

// Common event tracking functions
export const trackFormSubmission = (formType) => {
  trackEvent('form_submit', {
    form_type: formType,
    event_category: 'engagement',
    event_label: formType
  })
}

export const trackDemoRequest = (userData = {}) => {
  // Standard event tracking
  trackEvent('demo_request', {
    event_category: 'conversion',
    event_label: 'demo_form'
  })

  // Enhanced e-commerce tracking
  if (typeof window.gtag !== 'function') return

  // Track as conversion
  window.gtag('event', 'conversion', {
    send_to: GA_MEASUREMENT_ID,
    value: 1000, // Estimated value of a demo request
    currency: 'USD'
  })

  // Track as begin_checkout event
  window.gtag('event', 'begin_checkout', {
    currency: 'USD',
    value: 0,
    items: [{
      item_id: 'demo_request',
      item_name: 'SchoolVision.AI Demo Request',
      item_category: 'demo',
      quantity: 1,
      price: 0
    }]
  })

  // Track user properties for remarketing
  if (userData.organizationType) {
    window.gtag('event', 'user_properties', {
      organization_type: userData.organizationType,
      role: userData.role || 'unknown'
    })
  }
}

export const trackContactForm = () => {
  trackEvent('contact_form', {
    event_category: 'engagement',
    event_label: 'contact'
  })
}

export const trackDownload = (resourceType, resourceName, resourceValue = 0) => {
  trackEvent('download', {
    event_category: 'engagement',
    event_label: resourceName,
    resource_type: resourceType
  })

  // Track as valuable content interaction
  if (typeof window.gtag !== 'function') return

  // E-commerce style tracking for content
  window.gtag('event', 'view_item', {
    currency: 'USD',
    value: resourceValue,
    items: [{
      item_id: resourceName.toLowerCase().replace(/\s+/g, '-'),
      item_name: resourceName,
      item_category: resourceType,
      price: resourceValue
    }]
  })
}

export const trackVideoPlay = (videoTitle) => {
  trackEvent('video_play', {
    event_category: 'engagement',
    event_label: videoTitle
  })
}

export const trackCTAClick = (ctaName, location) => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: ctaName,
    cta_location: location
  })
}

// Track outbound links
export const trackOutboundLink = (url) => {
  trackEvent('outbound_link', {
    event_category: 'engagement',
    event_label: url,
    transport_type: 'beacon'
  })
}

// Track scroll depth
let scrollDepthTracked = {
  25: false,
  50: false,
  75: false,
  100: false
}

export const trackScrollDepth = () => {
  const scrollPercentage = Math.round(
    (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100
  )

  Object.keys(scrollDepthTracked).forEach(depth => {
    if (scrollPercentage >= depth && !scrollDepthTracked[depth]) {
      scrollDepthTracked[depth] = true
      trackEvent('scroll_depth', {
        event_category: 'engagement',
        event_label: `${depth}%`,
        percent_scrolled: depth
      })
    }
  })
}

// Track time on page
let timeOnPageStart = Date.now()

export const trackTimeOnPage = () => {
  const timeSpent = Math.round((Date.now() - timeOnPageStart) / 1000)
  
  trackEvent('time_on_page', {
    event_category: 'engagement',
    event_label: window.location.pathname,
    time_in_seconds: timeSpent
  })
}

// Reset tracking for new page
export const resetPageTracking = () => {
  scrollDepthTracked = {
    25: false,
    50: false,
    75: false,
    100: false
  }
  timeOnPageStart = Date.now()
}