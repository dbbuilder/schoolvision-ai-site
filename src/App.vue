<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <Navigation />
    
    <main>
      <router-view v-slot="{ Component }">
        <Transition
          name="page"
          mode="out-in"
        >
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>
    
    <Footer />
    
    <CookieConsent />
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import CookieConsent from './components/CookieConsent.vue'
import { updateStructuredData, getHomepageSchema, getBlogPostSchema, getFAQSchema } from './utils/structuredData'

const route = useRoute()

// Update structured data based on route
const updatePageStructuredData = () => {
  let structuredData = null
  
  // Homepage gets the full schema graph
  if (route.path === '/') {
    structuredData = getHomepageSchema()
  } 
  // Blog posts get article schema
  else if (route.path.startsWith('/blog/') && route.path !== '/blog') {
    // This would need the actual blog post data
    // For now, using a placeholder
    structuredData = getBlogPostSchema({
      slug: route.params.slug,
      title: 'Blog Post Title',
      excerpt: 'Blog post excerpt',
      publishedDate: new Date().toISOString(),
      author: { name: 'Author Name', role: 'Role' },
      tags: ['education', 'AI'],
      content: 'Blog content'
    })
  }
  // FAQ page gets FAQ schema
  else if (route.path === '/faq') {
    // This would need actual FAQ data
    structuredData = getFAQSchema([
      { question: 'What is SchoolVision.AI?', answer: 'SchoolVision.AI is a complete campus intelligence platform...' }
    ])
  }
  
  if (structuredData) {
    updateStructuredData(structuredData)
  }
}

// Update on mount and route change
onMounted(() => {
  updatePageStructuredData()
})

watch(() => route.path, () => {
  updatePageStructuredData()
})
</script>