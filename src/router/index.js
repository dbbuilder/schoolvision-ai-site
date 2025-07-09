import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'SchoolVision AI - Intelligent Campus Management Platform',
      description: 'Transform your educational institution with AI-powered campus management solutions for K-12, Higher Ed, and Vocational schools.'
    }
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import('../views/Solutions.vue'),
    meta: {
      title: 'Solutions - SchoolVision AI',
      description: 'Explore our comprehensive suite of AI-powered solutions for student management, academic planning, and campus operations.'
    }
  },
  {
    path: '/markets/k12',
    name: 'K12',
    component: () => import('../views/markets/K12.vue'),
    meta: {
      title: 'K-12 Solutions - SchoolVision AI',
      description: 'AI-powered solutions designed specifically for K-12 schools to enhance student safety, academic performance, and operational efficiency.'
    }
  },
  {
    path: '/markets/higher-ed',
    name: 'HigherEd',
    component: () => import('../views/markets/HigherEd.vue'),
    meta: {
      title: 'Higher Education Solutions - SchoolVision AI',
      description: 'Transform your university with AI-driven enrollment management, student success tools, and campus operations.'
    }
  },
  {
    path: '/markets/vocational',
    name: 'Vocational',
    component: () => import('../views/markets/Vocational.vue'),
    meta: {
      title: 'Vocational School Solutions - SchoolVision AI',
      description: 'Optimize career training programs with AI-powered student tracking, skills assessment, and industry partnerships.'
    }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('../views/Pricing.vue'),
    meta: {
      title: 'Pricing - SchoolVision AI',
      description: 'Flexible pricing plans for educational institutions of all sizes. Get started with SchoolVision AI today.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'About Us - SchoolVision AI',
      description: 'Learn about our mission to transform education through AI-powered campus management solutions.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: 'Contact Us - SchoolVision AI',
      description: 'Get in touch with our team to learn how SchoolVision AI can transform your educational institution.'
    }
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('../views/Demo.vue'),
    meta: {
      title: 'Request a Demo - SchoolVision AI',
      description: 'Schedule a personalized demo of SchoolVision AI and see how it can benefit your institution.'
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
  document.title = to.meta.title || 'SchoolVision AI'
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || '')
  }
  
  next()
})

export default router