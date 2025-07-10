<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center">
    <Container>
      <div class="text-center">
        <!-- 404 Illustration -->
        <div class="mb-8">
          <svg class="mx-auto h-40 w-40 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <!-- Error Message -->
        <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 class="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Oops! It looks like the page you're looking for has moved, been deleted, or never existed. 
          Let's get you back on track.
        </p>

        <!-- Search Suggestion -->
        <div class="mb-12 max-w-md mx-auto">
          <p class="text-gray-600 mb-4">Try searching for what you need:</p>
          <form @submit.prevent="handleSearch" class="flex gap-2">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search SchoolVision.AI..."
              class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
            <Button type="submit">
              Search
            </Button>
          </form>
        </div>

        <!-- Quick Links -->
        <div class="mb-12">
          <h3 class="text-lg font-semibold text-gray-900 mb-6">Popular Pages</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <router-link to="/" class="group">
              <Card class="p-6 hover:shadow-lg transition-shadow">
                <svg class="w-8 h-8 text-primary-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h4 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Home
                </h4>
                <p class="text-sm text-gray-600 mt-1">
                  Return to homepage
                </p>
              </Card>
            </router-link>

            <router-link to="/solutions" class="group">
              <Card class="p-6 hover:shadow-lg transition-shadow">
                <svg class="w-8 h-8 text-primary-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <h4 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Solutions
                </h4>
                <p class="text-sm text-gray-600 mt-1">
                  Explore our features
                </p>
              </Card>
            </router-link>

            <router-link to="/demo" class="group">
              <Card class="p-6 hover:shadow-lg transition-shadow">
                <svg class="w-8 h-8 text-primary-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <h4 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Demo
                </h4>
                <p class="text-sm text-gray-600 mt-1">
                  See it in action
                </p>
              </Card>
            </router-link>

            <router-link to="/contact" class="group">
              <Card class="p-6 hover:shadow-lg transition-shadow">
                <svg class="w-8 h-8 text-primary-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h4 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Contact
                </h4>
                <p class="text-sm text-gray-600 mt-1">
                  Get in touch
                </p>
              </Card>
            </router-link>
          </div>
        </div>

        <!-- Additional Help -->
        <div class="bg-primary-50 rounded-lg p-8 max-w-2xl mx-auto">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">
            Still Need Help?
          </h3>
          <p class="text-gray-600 mb-6">
            Our support team is here to assist you. We'll help you find what you're looking for 
            or answer any questions about SchoolVision.AI.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:801-659-7778">
              <Button variant="outline">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 801-659-7778
              </Button>
            </a>
            <a href="mailto:support@schoolvision.ai">
              <Button>
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Support
              </Button>
            </a>
          </div>
        </div>

        <!-- Site Navigation -->
        <div class="mt-12">
          <router-link to="/sitemap" class="text-primary-600 hover:text-primary-700 font-medium">
            View Full Sitemap →
          </router-link>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Container, Card, Button } from '../components/ui'

const router = useRouter()
const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    // In a real app, this would perform an actual search
    // For now, redirect to the FAQ page with a search query
    router.push({
      path: '/faq',
      query: { search: searchQuery.value.trim() }
    })
  }
}
</script>