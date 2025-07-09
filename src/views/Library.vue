<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <Container>
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Resource Library</h1>
          <p class="text-xl text-primary-100">
            Explore articles, guides, and insights about educational technology and campus management
          </p>
        </div>
      </Container>
    </section>

    <!-- Search and Filter Section -->
    <section class="py-8 bg-gray-50 border-b">
      <Container>
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search articles..."
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
              <svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div class="flex gap-2">
            <select v-model="selectedCategory" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="">All Categories</option>
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
            <select v-model="sortBy" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
              <option value="title">Alphabetical</option>
            </select>
          </div>
        </div>
      </Container>
    </section>

    <!-- Articles Grid -->
    <section class="py-12">
      <Container>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="article in filteredArticles"
            :key="article.id"
            class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div class="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                :src="article.image"
                :alt="article.title"
                class="object-cover w-full h-48"
              >
            </div>
            <div class="p-6">
              <div class="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <span class="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                  {{ article.category }}
                </span>
                <span>{{ article.readTime }} min read</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                {{ article.title }}
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ article.excerpt }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">{{ formatDate(article.date) }}</span>
                <a
                  :href="article.link"
                  class="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
                >
                  Read More
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>

        <!-- Load More Button -->
        <div v-if="hasMoreArticles" class="text-center mt-8">
          <Button @click="loadMore" variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>

        <!-- No Results Message -->
        <div v-if="filteredArticles.length === 0" class="text-center py-12">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-900">No articles found</h3>
          <p class="mt-1 text-sm text-gray-500">Try adjusting your search or filters</p>
        </div>
      </Container>
    </section>

    <!-- Newsletter CTA -->
    <section class="py-16 bg-primary-50">
      <Container>
        <Card class="max-w-2xl mx-auto text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated with EdTech Insights
          </h2>
          <p class="text-gray-600 mb-6">
            Get the latest articles and resources delivered to your inbox weekly
          </p>
          <form @submit.prevent="subscribeNewsletter" class="flex gap-4 max-w-md mx-auto">
            <input
              v-model="newsletterEmail"
              type="email"
              placeholder="Enter your email"
              required
              class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
            <Button type="submit" variant="primary">
              Subscribe
            </Button>
          </form>
        </Card>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Container, Card, Button } from '../components/ui'

// State
const searchQuery = ref('')
const selectedCategory = ref('')
const sortBy = ref('newest')
const newsletterEmail = ref('')
const articlesPerPage = 9
const currentPage = ref(1)

// Categories
const categories = [
  'AI in Education',
  'Campus Safety',
  'Student Success',
  'Operational Efficiency',
  'Case Studies',
  'Industry Trends'
]

// Sample articles data
const articles = ref([
  {
    id: 1,
    title: 'How AI is Revolutionizing Student Attendance Tracking',
    excerpt: 'Discover how artificial intelligence is transforming the way schools monitor and improve student attendance rates, leading to better educational outcomes.',
    category: 'AI in Education',
    date: new Date('2024-01-15'),
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop',
    link: '#'
  },
  {
    id: 2,
    title: 'The Complete Guide to Campus Safety in 2024',
    excerpt: 'Learn about the latest technologies and best practices for ensuring student and staff safety on K-12 and higher education campuses.',
    category: 'Campus Safety',
    date: new Date('2024-01-12'),
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop',
    link: '#'
  },
  {
    id: 3,
    title: 'Reducing Food Waste: Smart Cafeteria Management',
    excerpt: 'See how intelligent point-of-sale systems are helping schools reduce food waste by up to 30% while improving student nutrition.',
    category: 'Operational Efficiency',
    date: new Date('2024-01-10'),
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?w=800&h=400&fit=crop',
    link: '#'
  },
  {
    id: 4,
    title: 'Case Study: How Lincoln High Improved Graduation Rates by 15%',
    excerpt: 'An in-depth look at how one school district used predictive analytics to identify at-risk students and implement targeted interventions.',
    category: 'Case Studies',
    date: new Date('2024-01-08'),
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop',
    link: '#'
  },
  {
    id: 5,
    title: 'The Future of Grading: AI-Powered Assessment Tools',
    excerpt: 'Explore how artificial intelligence is helping teachers save hours on grading while providing more detailed feedback to students.',
    category: 'AI in Education',
    date: new Date('2024-01-05'),
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=400&fit=crop',
    link: '#'
  },
  {
    id: 6,
    title: '2024 EdTech Trends: What School Leaders Need to Know',
    excerpt: 'Stay ahead of the curve with our comprehensive overview of the most important educational technology trends shaping the future of learning.',
    category: 'Industry Trends',
    date: new Date('2024-01-03'),
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    link: '#'
  }
])

// Computed
const filteredArticles = computed(() => {
  let filtered = articles.value

  // Filter by search query
  if (searchQuery.value) {
    filtered = filtered.filter(article =>
      article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  // Filter by category
  if (selectedCategory.value) {
    filtered = filtered.filter(article => article.category === selectedCategory.value)
  }

  // Sort articles
  if (sortBy.value === 'newest') {
    filtered.sort((a, b) => b.date - a.date)
  } else if (sortBy.value === 'popular') {
    // In a real app, this would sort by view count or engagement
    filtered.sort((a, b) => b.readTime - a.readTime)
  } else if (sortBy.value === 'title') {
    filtered.sort((a, b) => a.title.localeCompare(b.title))
  }

  // Paginate
  return filtered.slice(0, currentPage.value * articlesPerPage)
})

const hasMoreArticles = computed(() => {
  return filteredArticles.value.length < articles.value.length
})

// Methods
const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}

const loadMore = () => {
  currentPage.value++
}

const subscribeNewsletter = () => {
  // In a real app, this would submit to an API
  alert(`Thank you for subscribing with email: ${newsletterEmail.value}`)
  newsletterEmail.value = ''
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.aspect-w-16 {
  position: relative;
  padding-bottom: calc(9 / 16 * 100%);
}

.aspect-w-16 > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>