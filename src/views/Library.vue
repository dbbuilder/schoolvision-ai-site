<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <Container>
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Resources & Library
          </h1>
          <p class="text-xl text-primary-100 mb-8">
            Dive deep into educational technology best practices, research studies, 
            and real-world success stories from schools using SchoolVision.AI.
          </p>
          <div class="flex flex-wrap gap-4">
            <button 
              v-for="category in categories" 
              :key="category"
              @click="activeCategory = category"
              :class="[
                'px-6 py-2 rounded-full font-medium transition-all',
                activeCategory === category 
                  ? 'bg-white text-primary-700' 
                  : 'bg-primary-600 text-white hover:bg-primary-500'
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </Container>
    </section>

    <!-- Featured Resource -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="max-w-6xl mx-auto">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Featured Resource</h2>
          <Card class="p-0 overflow-hidden">
            <div class="md:flex">
              <div class="md:w-1/3 bg-gradient-to-br from-primary-400 to-primary-600 p-8 flex items-center justify-center">
                <div class="text-white text-center">
                  <svg class="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p class="font-semibold">Research Study</p>
                </div>
              </div>
              <div class="md:w-2/3 p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">
                  The AI Advantage: How Machine Learning Transforms Campus Operations
                </h3>
                <p class="text-gray-600 mb-4">
                  A comprehensive study examining how 250 educational institutions leveraged AI to reduce 
                  operational costs by 35% while improving student outcomes. Learn the strategies that work.
                </p>
                <div class="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <span>📄 32 pages</span>
                  <span>📊 15 case studies</span>
                  <span>🕐 20 min read</span>
                </div>
                <Button @click="downloadResource('ai-advantage-study')">
                  Download Research Study
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Resource Grid -->
    <section class="py-16">
      <Container>
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
              v-for="resource in filteredResources" 
              :key="resource.id"
              class="hover:shadow-lg transition-shadow"
            >
              <div class="p-6">
                <!-- Resource Type Icon -->
                <div class="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                  <svg v-if="resource.type === 'whitepaper'" class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <svg v-else-if="resource.type === 'case-study'" class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <svg v-else-if="resource.type === 'webinar'" class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <svg v-else class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>

                <!-- Content -->
                <div class="mb-4">
                  <span class="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                    {{ resource.category }}
                  </span>
                  <h3 class="text-lg font-bold text-gray-900 mt-2 mb-2">
                    {{ resource.title }}
                  </h3>
                  <p class="text-gray-600 text-sm">
                    {{ resource.description }}
                  </p>
                </div>

                <!-- Meta Info -->
                <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{{ resource.readTime }}</span>
                  <span>{{ resource.date }}</span>
                </div>

                <!-- CTA -->
                <Button 
                  size="sm" 
                  variant="outline" 
                  class="w-full"
                  @click="downloadResource(resource.id)"
                >
                  {{ resource.cta }}
                </Button>
              </div>
            </Card>
          </div>

          <!-- Load More -->
          <div v-if="hasMore" class="text-center mt-12">
            <Button variant="outline" @click="loadMore">
              Load More Resources
            </Button>
          </div>
        </div>
      </Container>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-16 bg-primary-50">
      <Container>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated on EdTech Trends
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            Get our monthly newsletter with the latest research, best practices, 
            and exclusive resources for educational leaders.
          </p>
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
              class="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
          <p v-if="subscribeMessage" class="mt-4 text-sm" :class="subscribeSuccess ? 'text-green-600' : 'text-red-600'">
            {{ subscribeMessage }}
          </p>
        </div>
      </Container>
    </section>

    <!-- Quick Links -->
    <section class="py-16 bg-gray-900 text-white">
      <Container>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">Popular Whitepapers</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white">ROI of Campus Intelligence</a></li>
              <li><a href="#" class="hover:text-white">FERPA Compliance Guide</a></li>
              <li><a href="#" class="hover:text-white">AI in Education 2024</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Recent Case Studies</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white">Lincoln High: 47% Cost Reduction</a></li>
              <li><a href="#" class="hover:text-white">State University: Retention Success</a></li>
              <li><a href="#" class="hover:text-white">Tech Institute: 85% Placement Rate</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Upcoming Webinars</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white">AI Safety Tools Deep Dive</a></li>
              <li><a href="#" class="hover:text-white">Maximizing Your ROI</a></li>
              <li><a href="#" class="hover:text-white">Integration Best Practices</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Need Help?</h3>
            <p class="text-gray-400 mb-4">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <router-link to="/contact">
              <Button variant="secondary" size="sm">
                Contact Us
              </Button>
            </router-link>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Container, Card, Button } from '../components/ui'
import { submitForm } from '../utils/formSubmission'

// Resource categories
const categories = ['All Resources', 'Whitepapers', 'Case Studies', 'Webinars', 'Guides']
const activeCategory = ref('All Resources')

// Newsletter form
const email = ref('')
const subscribeMessage = ref('')
const subscribeSuccess = ref(false)

// Resources data
const resources = ref([
  {
    id: 'ai-advantage-study',
    type: 'whitepaper',
    category: 'Research Study',
    title: 'The AI Advantage: How Machine Learning Transforms Campus Operations',
    description: 'Comprehensive study of 250 institutions using AI to reduce costs and improve outcomes.',
    readTime: '20 min read',
    date: 'March 2024',
    cta: 'Download Study'
  },
  {
    id: 'lincoln-high-case',
    type: 'case-study',
    category: 'K-12 Success',
    title: 'Lincoln High: From Manual to Magical in 90 Days',
    description: 'How one school district saved $1.2M annually with intelligent automation.',
    readTime: '10 min read',
    date: 'February 2024',
    cta: 'Read Case Study'
  },
  {
    id: 'ferpa-compliance-guide',
    type: 'whitepaper',
    category: 'Compliance',
    title: 'FERPA Compliance in the Age of AI: A Complete Guide',
    description: 'Essential privacy and security practices for educational data management.',
    readTime: '15 min read',
    date: 'January 2024',
    cta: 'Download Guide'
  },
  {
    id: 'retention-webinar',
    type: 'webinar',
    category: 'Higher Ed',
    title: 'Predictive Analytics for Student Retention',
    description: 'Live demonstration of AI-powered early warning systems.',
    readTime: '45 min',
    date: 'Upcoming - March 15',
    cta: 'Register Now'
  },
  {
    id: 'vocational-partnerships',
    type: 'case-study',
    category: 'Vocational',
    title: 'Building Industry Partnerships That Work',
    description: 'Tech Institute achieves 85% job placement with AI-powered matching.',
    readTime: '12 min read',
    date: 'February 2024',
    cta: 'Read Story'
  },
  {
    id: 'roi-calculator-guide',
    type: 'whitepaper',
    category: 'Planning',
    title: 'Calculating Your Campus Intelligence ROI',
    description: 'Framework for measuring the financial impact of educational technology.',
    readTime: '8 min read',
    date: 'December 2023',
    cta: 'Get Framework'
  },
  {
    id: 'safety-tools-demo',
    type: 'webinar',
    category: 'Safety',
    title: 'Next-Gen Campus Safety: AI Tools in Action',
    description: 'See how AI enhances campus security and emergency response.',
    readTime: '30 min',
    date: 'March 20, 2024',
    cta: 'Save Your Spot'
  },
  {
    id: 'food-waste-study',
    type: 'case-study',
    category: 'Operations',
    title: 'Reducing Food Waste by 30% with Predictive Analytics',
    description: 'State University saves $400K annually through intelligent meal planning.',
    readTime: '8 min read',
    date: 'January 2024',
    cta: 'View Results'
  },
  {
    id: 'implementation-guide',
    type: 'whitepaper',
    category: 'Best Practices',
    title: '90-Day Implementation Roadmap',
    description: 'Step-by-step guide to deploying SchoolVision.AI across your campus.',
    readTime: '25 min read',
    date: 'November 2023',
    cta: 'Download Roadmap'
  }
])

// Pagination
const pageSize = 9
const currentPage = ref(1)
const hasMore = computed(() => filteredResources.value.length < getFilteredResourcesTotal())

// Filter resources based on category
const filteredResources = computed(() => {
  let filtered = resources.value
  
  if (activeCategory.value !== 'All Resources') {
    const categoryMap = {
      'Whitepapers': 'whitepaper',
      'Case Studies': 'case-study',
      'Webinars': 'webinar',
      'Guides': 'whitepaper'
    }
    const type = categoryMap[activeCategory.value]
    filtered = filtered.filter(r => r.type === type)
  }
  
  return filtered.slice(0, currentPage.value * pageSize)
})

const getFilteredResourcesTotal = () => {
  if (activeCategory.value === 'All Resources') {
    return resources.value.length
  }
  
  const categoryMap = {
    'Whitepapers': 'whitepaper',
    'Case Studies': 'case-study',
    'Webinars': 'webinar',
    'Guides': 'whitepaper'
  }
  const type = categoryMap[activeCategory.value]
  return resources.value.filter(r => r.type === type).length
}

const loadMore = () => {
  currentPage.value++
}

// Download resource handler
const downloadResource = async (resourceId) => {
  // Track download
  console.log('Download requested:', resourceId)
  
  // In a real app, this would trigger a download or open a gated form
  // For now, we'll just show an alert
  const resource = resources.value.find(r => r.id === resourceId)
  
  // Submit to form handler for tracking
  await submitForm({
    type: 'resource_download',
    resourceId,
    resourceTitle: resource?.title,
    timestamp: new Date().toISOString()
  })
  
  // Simulate download
  alert(`Thank you for your interest! "${resource?.title}" will begin downloading shortly.`)
}

// Newsletter subscription
const subscribeNewsletter = async () => {
  try {
    subscribeMessage.value = ''
    
    const result = await submitForm({
      type: 'newsletter_subscription',
      email: email.value,
      source: 'library_page',
      timestamp: new Date().toISOString()
    })
    
    if (result.success) {
      subscribeSuccess.value = true
      subscribeMessage.value = 'Thank you! Check your email to confirm your subscription.'
      email.value = ''
    }
  } catch (error) {
    subscribeSuccess.value = false
    subscribeMessage.value = 'Something went wrong. Please try again.'
  }
}
</script>

