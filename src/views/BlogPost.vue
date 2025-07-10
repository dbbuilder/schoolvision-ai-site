<template>
  <div>
    <!-- Article Header -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
      <Container>
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center gap-2 text-primary-200 mb-4">
            <router-link to="/blog" class="hover:text-white">Blog</router-link>
            <span>/</span>
            <span>{{ currentPost.category }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ currentPost.title }}
          </h1>
          <div class="flex flex-wrap items-center gap-6 text-primary-100">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-primary-600 rounded-full"></div>
              <div>
                <p class="font-semibold">{{ currentPost.author }}</p>
                <p class="text-sm">{{ currentPost.authorTitle }}</p>
              </div>
            </div>
            <span>•</span>
            <span>{{ formatDate(currentPost.date) }}</span>
            <span>•</span>
            <span>{{ currentPost.readTime }} min read</span>
          </div>
        </div>
      </Container>
    </section>

    <!-- Article Content -->
    <section class="py-16">
      <Container>
        <div class="max-w-4xl mx-auto">
          <div class="prose prose-lg max-w-none">
            <!-- Dynamic content would be rendered here in a real app -->
            <div v-html="currentPost.content"></div>
          </div>

          <!-- Tags -->
          <div class="mt-12 pt-8 border-t border-gray-200">
            <div class="flex items-center gap-2">
              <span class="text-gray-600 font-medium">Tags:</span>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in currentPost.tags" 
                  :key="tag"
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Share buttons -->
          <div class="mt-8 flex items-center gap-4">
            <span class="text-gray-600 font-medium">Share:</span>
            <button 
              @click="shareOnLinkedIn"
              class="p-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </button>
            <button 
              @click="shareOnTwitter"
              class="p-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </button>
            <button 
              @click="copyLink"
              class="p-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>

    <!-- Author Bio -->
    <section class="py-12 bg-gray-50">
      <Container>
        <div class="max-w-4xl mx-auto">
          <Card class="p-8">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  About {{ currentPost.author }}
                </h3>
                <p class="text-gray-600 mb-4">
                  {{ currentPost.authorBio }}
                </p>
                <div class="flex gap-4">
                  <a href="#" class="text-primary-600 hover:text-primary-700">
                    View all posts
                  </a>
                  <a href="#" class="text-primary-600 hover:text-primary-700">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Related Posts -->
    <section class="py-16">
      <Container>
        <div class="max-w-6xl mx-auto">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card 
              v-for="post in relatedPosts" 
              :key="post.id"
              class="hover:shadow-lg transition-shadow"
            >
              <div class="p-6">
                <span class="text-xs font-medium text-primary-600">
                  {{ post.category }}
                </span>
                <h3 class="text-lg font-bold text-gray-900 mt-2 mb-2">
                  {{ post.title }}
                </h3>
                <p class="text-gray-600 text-sm mb-4">
                  {{ post.excerpt }}
                </p>
                <router-link 
                  :to="`/blog/${post.slug}`"
                  class="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  Read More →
                </router-link>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>

    <!-- Newsletter CTA -->
    <section class="py-16 bg-primary-50">
      <Container>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Get More Insights Like This
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            Join 10,000+ education leaders who receive our weekly newsletter.
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
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Container, Card, Button } from '../components/ui'
import { submitForm } from '../utils/formSubmission'

const route = useRoute()
const email = ref('')
const subscribeMessage = ref('')
const subscribeSuccess = ref(false)

// Sample blog post data (in a real app, this would come from an API or CMS)
const blogPosts = {
  'ai-revolutionizing-student-retention': {
    id: 1,
    slug: 'ai-revolutionizing-student-retention',
    title: 'How AI is Revolutionizing Student Retention: A Data-Driven Approach',
    excerpt: 'Discover how universities are using predictive analytics to identify at-risk students before they drop out.',
    category: 'AI Innovation',
    author: 'Dr. Sarah Chen',
    authorTitle: 'Chief Technology Officer',
    authorBio: 'Dr. Sarah Chen leads AI innovation at SchoolVision.AI. With a PhD in Machine Learning and 15 years of experience in educational technology, she pioneers the development of predictive analytics tools that help institutions improve student outcomes.',
    date: new Date('2024-03-15'),
    readTime: 10,
    tags: ['AI', 'Student Success', 'Higher Ed'],
    content: `
      <p>In the world of higher education, student retention has always been a critical challenge. Traditional methods of identifying at-risk students often come too late – after grades have already started to slip or attendance has become sporadic. But what if we could predict which students need help before these warning signs appear?</p>
      
      <h2>The Hidden Patterns in Student Data</h2>
      <p>Our analysis of data from 250 institutions revealed surprising patterns that traditional retention methods miss. While most universities focus on academic performance, we found that non-academic indicators often provide earlier warning signs:</p>
      
      <ul>
        <li><strong>Cafeteria usage patterns:</strong> Students who suddenly stop using meal plans are 3x more likely to drop out</li>
        <li><strong>Library access frequency:</strong> A 40% decrease in library visits correlates with academic struggles</li>
        <li><strong>Campus event participation:</strong> Declining engagement predicts retention issues 6 weeks in advance</li>
      </ul>
      
      <h2>Case Study: State University's Success Story</h2>
      <p>State University implemented our AI-powered early warning system in Fall 2023. By analyzing patterns across multiple data points, they identified 47 food-insecure students who were at risk of dropping out. Through targeted interventions including meal plan assistance and counseling support, they improved retention from 72% to 85% – a remarkable 13 percentage point increase.</p>
      
      <blockquote>
        <p>"The AI system helped us see students as whole people, not just grade point averages. We could intervene with compassion and resources before crisis points."</p>
        <cite>– Dr. Maria Johnson, VP of Student Success at State University</cite>
      </blockquote>
      
      <h2>Implementation Best Practices</h2>
      <p>Based on our work with hundreds of institutions, here are key recommendations for implementing AI-powered retention systems:</p>
      
      <ol>
        <li><strong>Start with existing data:</strong> You likely already collect the data you need</li>
        <li><strong>Focus on actionable insights:</strong> Predictions are only valuable if you can act on them</li>
        <li><strong>Maintain student privacy:</strong> Use aggregated patterns, not individual tracking</li>
        <li><strong>Train your team:</strong> Technology is only as good as the people using it</li>
      </ol>
      
      <h2>The Future of Student Success</h2>
      <p>As we look ahead, AI will continue to transform how institutions support student success. The next frontier includes predictive course recommendations, personalized learning pathways, and real-time intervention triggers. The institutions that embrace these technologies today will be the leaders in student outcomes tomorrow.</p>
      
      <p>Ready to revolutionize retention at your institution? <a href="/demo" class="text-primary-600 hover:text-primary-700">Schedule a demo</a> to see how SchoolVision.AI can help you identify and support at-risk students before it's too late.</p>
    `
  }
}

// Get current post based on route
const currentPost = computed(() => {
  return blogPosts[route.params.slug] || blogPosts['ai-revolutionizing-student-retention']
})

// Related posts (in a real app, these would be fetched based on tags/category)
const relatedPosts = ref([
  {
    id: 2,
    slug: 'complete-guide-ferpa-compliance',
    title: 'The Complete Guide to FERPA Compliance in the Age of AI',
    excerpt: 'Navigate the complexities of student data privacy while leveraging AI tools.',
    category: 'Compliance'
  },
  {
    id: 6,
    slug: 'ai-powered-early-warning-systems',
    title: 'Building AI-Powered Early Warning Systems That Actually Work',
    excerpt: 'Beyond grades: How combining multiple data sources creates a complete view.',
    category: 'AI Innovation'
  },
  {
    id: 7,
    slug: 'roi-calculator-build-business-case',
    title: 'Using Our ROI Calculator to Build Your Business Case',
    excerpt: 'Step-by-step guide to calculating and presenting the financial impact.',
    category: 'Planning'
  }
])

// Methods
const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}

const shareOnLinkedIn = () => {
  const url = window.location.href
  const title = currentPost.value.title
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank')
}

const shareOnTwitter = () => {
  const url = window.location.href
  const text = `${currentPost.value.title} - Great insights from @SchoolVisionAI`
  window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank')
}

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href)
  alert('Link copied to clipboard!')
}

const subscribeNewsletter = async () => {
  try {
    subscribeMessage.value = ''
    
    const result = await submitForm({
      type: 'newsletter_subscription',
      email: email.value,
      source: 'blog_post',
      postSlug: currentPost.value.slug,
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

// Track page view
onMounted(() => {
  console.log('Blog post viewed:', currentPost.value.slug)
})
</script>

<style scoped>
.prose {
  color: #374151;
}

.prose h2 {
  color: #111827;
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose p {
  margin-bottom: 1.25rem;
  line-height: 1.75;
}

.prose ul, .prose ol {
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose blockquote {
  border-left: 4px solid #e5e7eb;
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
}

.prose blockquote cite {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  font-style: normal;
}

.prose a {
  color: #2563eb;
  text-decoration: underline;
}

.prose a:hover {
  color: #1d4ed8;
}
</style>