import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'SchoolVision.AI - Intelligent Campus Management Platform',
      description: 'Transform your educational institution with AI-powered campus management solutions for K-12, Higher Ed, and Vocational schools.'
    }
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import('../views/Solutions.vue'),
    meta: {
      title: 'Solutions - SchoolVision.AI',
      description: 'Explore our comprehensive suite of AI-powered solutions for student management, academic planning, and campus operations.'
    }
  },
  {
    path: '/markets/k12',
    name: 'K12',
    component: () => import('../views/markets/K12.vue'),
    meta: {
      title: 'K-12 Solutions - SchoolVision.AI',
      description: 'AI-powered solutions designed specifically for K-12 schools to enhance student safety, academic performance, and operational efficiency.'
    }
  },
  {
    path: '/markets/higher-ed',
    name: 'HigherEd',
    component: () => import('../views/markets/HigherEd.vue'),
    meta: {
      title: 'Higher Education Solutions - SchoolVision.AI',
      description: 'Transform your university with AI-driven enrollment management, student success tools, and campus operations.'
    }
  },
  {
    path: '/markets/vocational',
    name: 'Vocational',
    component: () => import('../views/markets/Vocational.vue'),
    meta: {
      title: 'Vocational School Solutions - SchoolVision.AI',
      description: 'Optimize career training programs with AI-powered student tracking, skills assessment, and industry partnerships.'
    }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('../views/Pricing.vue'),
    meta: {
      title: 'Pricing - SchoolVision.AI',
      description: 'Flexible pricing plans for educational institutions of all sizes. Get started with SchoolVision.AI today.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'About Us - SchoolVision.AI',
      description: 'Learn about our mission to transform education through AI-powered campus management solutions.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: 'Contact Us - SchoolVision.AI',
      description: 'Get in touch with our team to learn how SchoolVision.AI can transform your educational institution.'
    }
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('../views/Demo.vue'),
    meta: {
      title: 'Request a Demo - SchoolVision.AI',
      description: 'Schedule a personalized demo of SchoolVision.AI and see how it can benefit your institution.'
    }
  },
  {
    path: '/roi-calculator',
    name: 'ROICalculator',
    component: () => import('../views/ROICalculator.vue'),
    meta: {
      title: 'ROI Calculator - SchoolVision.AI',
      description: 'Calculate your potential savings and return on investment with SchoolVision.AI.'
    }
  },
  {
    path: '/library',
    name: 'Library',
    component: () => import('../views/Library.vue'),
    meta: {
      title: 'Resource Library - SchoolVision.AI',
      description: 'Explore articles, guides, and insights about educational technology and campus management.'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue'),
    meta: {
      title: 'Blog - SchoolVision.AI',
      description: 'Insights, trends, and best practices for educational technology leaders.'
    }
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: () => import('../views/BlogPost.vue'),
    meta: {
      title: 'Blog - SchoolVision.AI',
      description: 'Read the latest insights on educational technology and campus management.'
    }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/FAQ.vue'),
    meta: {
      title: 'FAQ - SchoolVision.AI',
      description: 'Find answers to frequently asked questions about SchoolVision.AI campus intelligence platform.'
    }
  },
  {
    path: '/why-sv/k12',
    name: 'WhySV-K12',
    component: () => import('../views/WhySV-K12.vue'),
    meta: {
      title: 'Why SchoolVision.AI for K-12 - SchoolVision.AI',
      description: 'Discover how SchoolVision.AI transforms K-12 schools with AI-powered attendance, grading, and safety solutions.'
    }
  },
  {
    path: '/why-sv/higher-ed',
    name: 'WhySV-HigherEd',
    component: () => import('../views/WhySV-HigherEd.vue'),
    meta: {
      title: 'Why SchoolVision.AI for Higher Education - SchoolVision.AI',
      description: 'Learn how universities use SchoolVision.AI to improve retention, streamline operations, and enhance student success.'
    }
  },
  {
    path: '/why-sv/vocational',
    name: 'WhySV-Vocational',
    component: () => import('../views/WhySV-Vocational.vue'),
    meta: {
      title: 'Why SchoolVision.AI for Vocational Schools - SchoolVision.AI',
      description: 'See how vocational schools optimize career training with AI-powered equipment scheduling and job placement tools.'
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue'),
    meta: {
      title: 'Privacy Policy - SchoolVision.AI',
      description: 'Learn how SchoolVision.AI protects student data and ensures FERPA compliance.'
    }
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/Terms.vue'),
    meta: {
      title: 'Terms of Service - SchoolVision.AI',
      description: 'Terms and conditions for using the SchoolVision.AI platform.'
    }
  },
  {
    path: '/accessibility',
    name: 'Accessibility',
    component: () => import('../views/Accessibility.vue'),
    meta: {
      title: 'Accessibility Statement - SchoolVision.AI',
      description: 'Learn about our commitment to digital accessibility and WCAG compliance.'
    }
  },
  {
    path: '/ferpa',
    name: 'FERPA',
    component: () => import('../views/FERPA.vue'),
    meta: {
      title: 'FERPA Compliance - SchoolVision.AI',
      description: 'How SchoolVision.AI ensures complete FERPA compliance and student data privacy.'
    }
  },
  {
    path: '/sitemap',
    name: 'Sitemap',
    component: () => import('../views/Sitemap.vue'),
    meta: {
      title: 'Sitemap - SchoolVision.AI',
      description: 'Navigate through all pages and resources available on SchoolVision.AI.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '404 - Page Not Found - SchoolVision.AI',
      description: 'The page you are looking for could not be found.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update document title and meta tags
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'SchoolVision.AI'
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || '')
  }
  
  next()
})

export default router