<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <Container>
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            The SchoolVision.AI Blog
          </h1>
          <p class="text-xl text-primary-100 mb-8">
            Insights, trends, and best practices for educational technology leaders. 
            Stay informed about the latest in AI-powered campus management.
          </p>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="tag in popularTags" 
              :key="tag"
              @click="selectedTag = selectedTag === tag ? '' : tag"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                selectedTag === tag 
                  ? 'bg-white text-primary-700' 
                  : 'bg-primary-600 text-white hover:bg-primary-500'
              ]"
            >
              #{{ tag }}
            </button>
          </div>
        </div>
      </Container>
    </section>

    <!-- Featured Post -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="max-w-6xl mx-auto">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900">Featured Post</h2>
          </div>
          <Card class="overflow-hidden">
            <div class="md:flex">
              <div class="md:w-2/5">
                <div class="h-full bg-gradient-to-br from-primary-400 to-primary-600 p-8 flex items-center justify-center min-h-[300px]">
                  <div class="text-white text-center">
                    <svg class="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <p class="font-semibold">Featured Insight</p>
                  </div>
                </div>
              </div>
              <div class="md:w-3/5 p-8">
                <div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                    {{ featuredPost.category }}
                  </span>
                  <span>{{ formatDate(featuredPost.date) }}</span>
                  <span>{{ featuredPost.readTime }} min read</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">
                  {{ featuredPost.title }}
                </h3>
                <p class="text-gray-600 mb-6">
                  {{ featuredPost.excerpt }}
                </p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <p class="font-semibold text-gray-900">{{ featuredPost.author }}</p>
                      <p class="text-sm text-gray-500">{{ getAuthorRole(featuredPost.author) }}</p>
                    </div>
                  </div>
                  <router-link 
                    :to="`/blog/${featuredPost.slug}`"
                    class="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
                  >
                    Read More
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-16">
      <Container>
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article 
              v-for="post in filteredPosts" 
              :key="post.id"
              class="group"
            >
              <Card class="h-full hover:shadow-lg transition-shadow">
                <div class="h-48 bg-gradient-to-br from-gray-300 to-gray-400 rounded-t-lg overflow-hidden">
                  <div class="h-full flex items-center justify-center text-white">
                    <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div class="p-6">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="text-xs font-medium text-primary-600">
                      {{ post.category }}
                    </span>
                    <span class="text-gray-400">•</span>
                    <span class="text-xs text-gray-500">
                      {{ post.readTime }} min read
                    </span>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {{ post.title }}
                  </h3>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                    {{ post.excerpt }}
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div>
                        <p class="text-sm font-medium text-gray-900">{{ post.author }}</p>
                        <p class="text-xs text-gray-500">{{ formatDate(post.date) }}</p>
                      </div>
                    </div>
                    <router-link 
                      :to="`/blog/${post.slug}`"
                      class="text-primary-600 hover:text-primary-700"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </router-link>
                  </div>
                </div>
              </Card>
            </article>
          </div>

          <!-- Load More -->
          <div v-if="hasMore" class="text-center mt-12">
            <Button variant="outline" @click="loadMore">
              Load More Posts
            </Button>
          </div>

          <!-- No Results -->
          <div v-if="filteredPosts.length === 0" class="text-center py-12">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900">No posts found</h3>
            <p class="mt-1 text-sm text-gray-500">Try selecting a different tag</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-16 bg-primary-50">
      <Container>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Never Miss an Update
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            Get the latest insights on educational technology delivered to your inbox. 
            Join 15,000+ education leaders who read our weekly newsletter.
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Container, Card, Button } from '../components/ui'
import { submitForm } from '../utils/formSubmission'
import blogData from '../data/blog-posts.json'

// Popular tags - extract unique tags from blog posts
const allTags = [...new Set(blogData.posts.flatMap(post => post.tags))]
const popularTags = ['AI', 'Student Success', 'Campus Safety', 'ROI', 'Best Practices', 'Case Studies'].filter(tag => allTags.includes(tag))
const selectedTag = ref('')

// Newsletter
const email = ref('')
const subscribeMessage = ref('')
const subscribeSuccess = ref(false)

// Blog posts data - transform from JSON format
const posts = ref(blogData.posts.map(post => ({
  id: post.id,
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  category: post.category,
  author: post.author.name,
  date: new Date(post.publishedDate),
  readTime: post.readTime,
  tags: post.tags,
  featuredImage: post.featuredImage
})))

// Get the first post as featured (most recent AI-related post)
const featuredPost = computed(() => {
  const aiPost = posts.value.find(post => post.tags.includes('AI')) || posts.value[0]
  return aiPost
})

// Get author role from blog data
const getAuthorRole = (authorName) => {
  const post = blogData.posts.find(p => p.author.name === authorName)
  return post?.author.role || 'Author'
}

// Pagination
const pageSize = 9
const currentPage = ref(1)

// Filter posts (exclude featured from the grid)
const filteredPosts = computed(() => {
  let filtered = posts.value.filter(post => post.id !== featuredPost.value.id)
  
  if (selectedTag.value) {
    filtered = filtered.filter(post => 
      post.tags.includes(selectedTag.value)
    )
  }
  
  return filtered.slice(0, currentPage.value * pageSize)
})

const hasMore = computed(() => {
  const totalFiltered = selectedTag.value 
    ? posts.value.filter(p => p.tags.includes(selectedTag.value) && p.id !== featuredPost.value.id).length
    : posts.value.filter(p => p.id !== featuredPost.value.id).length
  return filteredPosts.value.length < totalFiltered
})

// Methods
const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}

const loadMore = () => {
  currentPage.value++
}

const subscribeNewsletter = async () => {
  try {
    subscribeMessage.value = ''
    
    const result = await submitForm({
      type: 'newsletter_subscription',
      email: email.value,
      source: 'blog_page',
      timestamp: new Date().toISOString()
    })
    
    if (result.success) {
      subscribeSuccess.value = true
      subscribeMessage.value = 'Welcome! Check your email to confirm your subscription.'
      email.value = ''
    }
  } catch (error) {
    subscribeSuccess.value = false
    subscribeMessage.value = 'Something went wrong. Please try again.'
  }
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>