<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-10"></div>
      <Container class="relative py-24 lg:py-32">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Complete Campus Intelligence Through Seamless Integration
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-primary-100">
            Your SIS captures grades. We capture everything else. Together, we reveal the complete picture of student success with AI-powered insights that help you understand the past, measure the present, and predict the future.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/demo">
              <Button size="lg" variant="secondary" class="w-full sm:w-auto">
                Request Demo
              </Button>
            </router-link>
            <Button size="lg" variant="outline" class="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-700">
              Watch Video
            </Button>
          </div>
        </div>
      </Container>
      
      <!-- Decorative wave -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI-Enhanced Solutions
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive suite of intelligent tools designed to streamline campus operations and enhance educational outcomes
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card v-for="feature in features" :key="feature.title" class="hover:shadow-lg transition-shadow duration-300">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
              <p class="text-gray-600">{{ feature.description }}</p>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Markets Section -->
    <section class="py-20 bg-gray-50">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serving Every Educational Level
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solutions for K-12, Higher Education, and Vocational institutions
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <router-link
            v-for="market in markets"
            :key="market.name"
            :to="market.to"
            class="group"
          >
            <Card class="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <div class="text-center">
                <div class="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-gray-900 mb-2">{{ market.name }}</h3>
                <p class="text-gray-600 mb-4">{{ market.description }}</p>
                <span class="text-primary-600 font-medium group-hover:text-primary-700">
                  Learn more →
                </span>
              </div>
            </Card>
          </router-link>
        </div>
      </Container>
    </section>

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- CTA Section -->
    <section class="py-20 bg-primary-700 text-white">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Campus?
          </h2>
          <p class="text-xl mb-8 text-primary-100">
            Join hundreds of educational institutions already using SchoolVision AI
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/demo">
              <Button size="lg" variant="secondary" class="w-full sm:w-auto">
                Schedule a Demo
              </Button>
            </router-link>
            <router-link to="/contact">
              <Button size="lg" variant="outline" class="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-700">
                Contact Sales
              </Button>
            </router-link>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { Container, Button, Card } from '../components/ui'
import TestimonialsSection from '../components/TestimonialsSection.vue'

const features = [
  {
    title: 'SIS Integration Intelligence',
    description: 'Seamlessly connects with your SIS to capture operational data, revealing patterns between academics and campus life'
  },
  {
    title: 'Predictive Analytics',
    description: 'AI identifies at-risk students before grades drop by analyzing attendance, cafeteria, and engagement patterns'
  },
  {
    title: 'Complete Compliance',
    description: 'Automated federal reporting, 90/10 tracking, clock hour verification, and audit-ready documentation'
  },
  {
    title: 'Real-Time Dashboards',
    description: 'Natural language queries across all campus data with role-based views for students, faculty, and administrators'
  }
]

const markets = [
  {
    name: 'K-12 Schools',
    description: 'Parent portals, bus tracking, cafeteria management, and early intervention systems. Serving 500+ districts with 97% attendance accuracy.',
    to: '/why-sv/k12'
  },
  {
    name: 'Higher Education',
    description: 'Bookstore integration, lab management, retention analytics, and multi-campus support. Helping universities improve retention by 18%.',
    to: '/why-sv/higher-ed'
  },
  {
    name: 'Vocational Schools',
    description: 'Clock hour tracking, clinical rotations, 90/10 compliance, and industry partnerships. 100% audit success rate for CTE programs.',
    to: '/why-sv/vocational'
  }
]
</script>