// JSON-LD Structured Data for Rich Snippets
import companyInfo from '../data/company-info.json'

// Update or create JSON-LD script in document head
export const updateStructuredData = (data) => {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]')
  if (existingScript) {
    existingScript.remove()
  }

  // Create new script element
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

// Organization Schema (used on all pages)
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://schoolvision.ai/#organization',
  name: companyInfo.company.name,
  alternateName: 'SchoolVision AI',
  url: 'https://schoolvision.ai',
  logo: {
    '@type': 'ImageObject',
    url: 'https://schoolvision.ai/images/logo.png',
    width: 200,
    height: 60
  },
  description: companyInfo.company.tagline,
  foundingDate: companyInfo.company.founded,
  founders: [{
    '@type': 'Person',
    name: 'Dr. Michael Roberts'
  }],
  address: {
    '@type': 'PostalAddress',
    streetAddress: companyInfo.company.headquarters.address,
    addressLocality: companyInfo.company.headquarters.city,
    addressRegion: companyInfo.company.headquarters.state,
    postalCode: companyInfo.company.headquarters.zipCode,
    addressCountry: companyInfo.company.headquarters.country
  },
  contactPoint: [{
    '@type': 'ContactPoint',
    telephone: companyInfo.company.contact.phone,
    contactType: 'sales',
    email: companyInfo.company.contact.salesEmail,
    areaServed: 'US',
    availableLanguage: ['English']
  }, {
    '@type': 'ContactPoint',
    telephone: companyInfo.company.contact.phone,
    contactType: 'customer support',
    email: companyInfo.company.contact.supportEmail,
    areaServed: 'US',
    availableLanguage: ['English']
  }],
  sameAs: [
    companyInfo.company.social.linkedin,
    companyInfo.company.social.twitter,
    companyInfo.company.social.youtube,
    companyInfo.company.social.facebook
  ],
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 150
  }
})

// Website Schema
export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://schoolvision.ai/#website',
  url: 'https://schoolvision.ai',
  name: companyInfo.company.name,
  description: companyInfo.company.tagline,
  publisher: {
    '@id': 'https://schoolvision.ai/#organization'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://schoolvision.ai/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
})

// Software Application Schema
export const getSoftwareSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: companyInfo.company.name,
  operatingSystem: 'Web',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Educational Management Software',
  offers: {
    '@type': 'Offer',
    price: '1.50',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '1.50',
      priceCurrency: 'USD',
      unitText: 'per student per month'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '523'
  },
  screenshot: 'https://schoolvision.ai/images/dashboard-screenshot.png',
  featureList: [
    'SIS Integration',
    'Attendance Tracking',
    'Predictive Analytics',
    'Parent Portal',
    'Compliance Management',
    'Real-time Dashboards'
  ],
  softwareVersion: '4.0',
  releaseNotes: 'AI-powered predictive analytics and enhanced reporting',
  provider: {
    '@id': 'https://schoolvision.ai/#organization'
  }
})

// FAQ Schema
export const getFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
})

// Blog Post Schema
export const getBlogPostSchema = (post) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `https://schoolvision.ai/blog/${post.slug}`,
  headline: post.title,
  description: post.excerpt,
  image: post.featuredImage || 'https://schoolvision.ai/images/blog-default.jpg',
  datePublished: post.publishedDate,
  dateModified: post.publishedDate,
  author: {
    '@type': 'Person',
    name: post.author.name,
    jobTitle: post.author.role
  },
  publisher: {
    '@id': 'https://schoolvision.ai/#organization'
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://schoolvision.ai/blog/${post.slug}`
  },
  keywords: post.tags.join(', '),
  articleSection: post.category,
  wordCount: post.content.split(' ').length,
  timeRequired: `PT${post.readTime}M`
})

// Service Schema for Solutions
export const getServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Campus Intelligence Platform',
  provider: {
    '@id': 'https://schoolvision.ai/#organization'
  },
  serviceType: 'Educational Technology',
  areaServed: {
    '@type': 'Country',
    name: 'United States'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SchoolVision.AI Solutions',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'K-12 Campus Management',
          description: 'Complete campus intelligence for K-12 schools'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Higher Education Platform',
          description: 'AI-powered solutions for colleges and universities'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vocational School Management',
          description: 'Specialized tools for CTE and vocational programs'
        }
      }
    ]
  }
})

// Review Schema
export const getReviewSchema = (testimonial) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  reviewRating: {
    '@type': 'Rating',
    ratingValue: testimonial.rating || 5,
    bestRating: 5
  },
  author: {
    '@type': 'Person',
    name: testimonial.name
  },
  reviewBody: testimonial.content,
  itemReviewed: {
    '@type': 'SoftwareApplication',
    name: 'SchoolVision.AI'
  }
})

// Breadcrumb Schema
export const getBreadcrumbSchema = (breadcrumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url
  }))
})

// Local Business Schema (for physical presence)
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://schoolvision.ai/#localbusiness',
  name: companyInfo.company.name,
  image: 'https://schoolvision.ai/images/office.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: companyInfo.company.headquarters.address,
    addressLocality: companyInfo.company.headquarters.city,
    addressRegion: companyInfo.company.headquarters.state,
    postalCode: companyInfo.company.headquarters.zipCode,
    addressCountry: companyInfo.company.headquarters.country
  },
  telephone: companyInfo.company.contact.phone,
  openingHours: 'Mo-Fr 08:00-18:00',
  priceRange: '$$'
})

// Combined schema for homepage
export const getHomepageSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      getOrganizationSchema(),
      getWebsiteSchema(),
      getSoftwareSchema(),
      getLocalBusinessSchema()
    ]
  }
}