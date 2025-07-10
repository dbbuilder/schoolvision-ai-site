// SEO Meta Tag Management
import companyInfo from '../data/company-info.json'

const defaultMeta = {
  title: `${companyInfo.company.name} - ${companyInfo.company.tagline}`,
  description: 'Transform your campus with AI-powered insights. SchoolVision.AI seamlessly integrates with your SIS to provide complete campus intelligence for K-12, Higher Ed, and Vocational institutions.',
  keywords: 'campus management, school management system, student information system, AI education, campus intelligence, school analytics, student tracking, attendance management',
  author: companyInfo.company.name,
  image: '/images/og-default.jpg',
  url: 'https://schoolvision.ai'
}

// Update document meta tags
export const updateMetaTags = (meta = {}) => {
  const finalMeta = { ...defaultMeta, ...meta }
  
  // Update title
  document.title = finalMeta.title
  
  // Update meta tags
  updateMetaTag('description', finalMeta.description)
  updateMetaTag('keywords', finalMeta.keywords)
  updateMetaTag('author', finalMeta.author)
  
  // Open Graph tags
  updateMetaTag('og:title', finalMeta.title, 'property')
  updateMetaTag('og:description', finalMeta.description, 'property')
  updateMetaTag('og:image', finalMeta.image, 'property')
  updateMetaTag('og:url', finalMeta.url, 'property')
  updateMetaTag('og:type', 'website', 'property')
  updateMetaTag('og:site_name', companyInfo.company.name, 'property')
  
  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image')
  updateMetaTag('twitter:title', finalMeta.title)
  updateMetaTag('twitter:description', finalMeta.description)
  updateMetaTag('twitter:image', finalMeta.image)
  updateMetaTag('twitter:site', '@schoolvisionai')
  
  // Canonical URL
  updateLinkTag('canonical', finalMeta.canonical || finalMeta.url)
}

// Helper to update or create meta tags
const updateMetaTag = (name, content, attribute = 'name') => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`)
  
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  
  element.setAttribute('content', content)
}

// Helper to update or create link tags
const updateLinkTag = (rel, href) => {
  let element = document.querySelector(`link[rel="${rel}"]`)
  
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  
  element.setAttribute('href', href)
}

// Page-specific meta configurations
export const pageMeta = {
  home: {
    title: `${companyInfo.company.name} - Complete Campus Intelligence Platform`,
    description: 'Where your SIS ends, we begin. AI-powered insights for K-12, Higher Ed, and Vocational schools. Track attendance, cafeteria, transportation, and more in one unified platform.',
    keywords: 'campus intelligence, school management AI, student information system integration, educational analytics'
  },
  
  about: {
    title: `About ${companyInfo.company.name} - 20+ Years of Educational Innovation`,
    description: `Learn about SchoolVision.AI's mission to empower educational institutions with intelligent technology. Serving ${companyInfo.stats.campusesServed} campuses with ${companyInfo.stats.yearsExperience} years of experience.`,
    keywords: 'about schoolvision, educational technology company, campus management expertise'
  },
  
  solutions: {
    title: 'AI-Powered Solutions for Modern Campus Management',
    description: 'Comprehensive suite of intelligent tools: attendance tracking, predictive analytics, compliance management, parent portals, and seamless SIS integration.',
    keywords: 'school solutions, campus management tools, educational AI features'
  },
  
  pricing: {
    title: 'Transparent Pricing for Every Institution Size',
    description: 'Flexible pricing plans starting at $1.50 per student. No hidden fees, no setup costs. ROI calculator available to estimate your savings.',
    keywords: 'school management pricing, educational software cost, campus intelligence pricing'
  },
  
  demo: {
    title: 'Request a Demo - See SchoolVision.AI in Action',
    description: 'Get a personalized demo tailored to your institution. See how AI can transform your campus operations and improve student outcomes.',
    keywords: 'school management demo, campus software demo, educational AI demonstration'
  },
  
  contact: {
    title: 'Contact SchoolVision.AI - We\'re Here to Help',
    description: 'Get in touch with our team. Call 801-659-7778 or email info@schoolvision.ai. Headquarters in Salt Lake City, serving institutions nationwide.',
    keywords: 'contact schoolvision, school management support, educational technology contact'
  },
  
  blog: {
    title: 'SchoolVision.AI Blog - Insights for Education Leaders',
    description: 'Latest trends, best practices, and insights on AI in education, campus management, and student success strategies.',
    keywords: 'educational technology blog, campus management insights, AI in education articles'
  },
  
  'k12': {
    title: 'K-12 School Management Solutions - SchoolVision.AI',
    description: 'Complete campus intelligence for K-12 schools. Parent portals, bus tracking, cafeteria management, and early intervention systems. 97% attendance accuracy.',
    keywords: 'K-12 school management, elementary school software, high school management system'
  },
  
  'higher-ed': {
    title: 'Higher Education Campus Intelligence - SchoolVision.AI',
    description: 'AI-powered solutions for colleges and universities. Improve retention by 18%, optimize resources, and enhance student engagement across multiple campuses.',
    keywords: 'higher education management, university software, college campus intelligence'
  },
  
  'vocational': {
    title: 'Vocational School Management Platform - SchoolVision.AI',
    description: 'Specialized tools for CTE and vocational programs. Clock hour tracking, clinical rotations, 90/10 compliance, and 100% audit success rate.',
    keywords: 'vocational school software, CTE management, trade school platform'
  }
}

// Generate meta tags for blog posts
export const generateBlogMeta = (post) => {
  return {
    title: `${post.title} - SchoolVision.AI Blog`,
    description: post.excerpt || post.content.substring(0, 160),
    keywords: post.tags.join(', '),
    image: post.featuredImage || '/images/blog-default.jpg',
    url: `https://schoolvision.ai/blog/${post.slug}`,
    canonical: `https://schoolvision.ai/blog/${post.slug}`
  }
}

// Structured data for organization
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: companyInfo.company.name,
  url: 'https://schoolvision.ai',
  logo: 'https://schoolvision.ai/images/logo.png',
  description: companyInfo.company.tagline,
  address: {
    '@type': 'PostalAddress',
    streetAddress: companyInfo.company.headquarters.address,
    addressLocality: companyInfo.company.headquarters.city,
    addressRegion: companyInfo.company.headquarters.state,
    postalCode: companyInfo.company.headquarters.zipCode,
    addressCountry: companyInfo.company.headquarters.country
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: companyInfo.company.contact.phone,
    contactType: 'sales',
    email: companyInfo.company.contact.salesEmail,
    availableLanguage: ['English']
  },
  sameAs: [
    companyInfo.company.social.linkedin,
    companyInfo.company.social.twitter,
    companyInfo.company.social.youtube,
    companyInfo.company.social.facebook
  ]
})