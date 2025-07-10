<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <Container>
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Two Decades of Educational Innovation
          </h1>
          <p class="text-xl text-primary-100 mb-8">
            {{ companyInfo.company.name }} combines {{ stats.yearsExperience }} years of campus management expertise with cutting-edge 
            artificial intelligence to create the most comprehensive educational platform available.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <p class="text-4xl font-bold mb-2">{{ stats.campusesServed }}</p>
              <p class="text-primary-200">Campuses Served</p>
            </div>
            <div class="text-center">
              <p class="text-4xl font-bold mb-2">{{ stats.yearsExperience }}</p>
              <p class="text-primary-200">Years Experience</p>
            </div>
            <div class="text-center">
              <p class="text-4xl font-bold mb-2">{{ stats.studentsImpacted }}</p>
              <p class="text-primary-200">Students Tracked Daily</p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Our Story -->
    <section class="py-16">
      <Container>
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 mb-6">
              {{ companyInfo.company.name }} began in {{ companyInfo.company.founded }} when our founder, a former school administrator, 
              witnessed firsthand the challenges educators face with disconnected systems and 
              data silos. What started as a simple attendance tracking solution has evolved into 
              a comprehensive campus intelligence platform.
            </p>
            <p class="text-gray-700 mb-6">
              For two decades, we've worked alongside educators, listening to their needs and 
              building solutions that actually work in real classrooms. We've helped schools 
              save millions of dollars, reduce food waste by 30%, and most importantly, give 
              teachers more time to focus on what matters most - teaching.
            </p>
            <p class="text-gray-700 mb-6">
              Today, we're leveraging artificial intelligence to take campus management to the 
              next level. Our AI doesn't replace educators - it empowers them with insights and 
              automation that make their jobs easier and more impactful.
            </p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Mission & Vision -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p class="text-gray-700">
                To empower educational institutions with intelligent technology that saves time, 
                reduces costs, and improves student outcomes. We believe every educator deserves 
                tools that work as hard as they do.
              </p>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p class="text-gray-700">
                A world where every campus operates at peak efficiency, where data drives better 
                decisions, and where technology seamlessly supports the educational mission - 
                not complicates it.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Leadership Team -->
    <section class="py-16">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by educators and technologists who understand the unique challenges of campus management
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Leadership Team Members -->
          <Card v-for="leader in leadership" :key="leader.name">
            <div class="p-6 text-center">
              <div class="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-white text-3xl font-bold">{{ getInitials(leader.name) }}</span>
              </div>
              <h4 class="text-xl font-semibold text-gray-900 mb-2">{{ leader.name }}</h4>
              <p class="text-primary-600 font-medium mb-3">{{ leader.title }}</p>
              <p class="text-gray-600 text-sm">
                {{ leader.bio }}
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Our Values -->
    <section class="py-16 bg-primary-50">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything we do is guided by these fundamental principles
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Education First</h3>
            <p class="text-gray-600">
              Every feature we build starts with one question: will this help educators 
              and students succeed?
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Privacy & Security</h3>
            <p class="text-gray-600">
              Student data is sacred. We maintain the highest standards of security 
              and FERPA compliance.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p class="text-gray-600">
              We constantly explore new technologies to solve old problems in better ways.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Partnership</h3>
            <p class="text-gray-600">
              We succeed when our schools succeed. Your goals become our goals.
            </p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Awards & Recognition -->
    <section class="py-16">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
          <p class="text-xl text-gray-600">
            Proud to be recognized by the education and technology communities
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div v-for="award in awards" :key="award.title" class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 h-24 flex items-center justify-center mb-3">
              <p class="font-semibold text-gray-700">{{ award.title }}</p>
            </div>
            <p class="text-sm text-gray-600">{{ award.description }} {{ award.year }}</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Join Our Team -->
    <section class="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Join Our Mission
          </h2>
          <p class="text-xl text-primary-100 mb-8">
            We're always looking for passionate educators and technologists who want to 
            make a real difference in education.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://careers.schoolvision.ai" target="_blank">
              <Button size="lg" variant="secondary">
                View Open Positions
              </Button>
            </a>
            <router-link to="/contact">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-primary-700">
                Get in Touch
              </Button>
            </router-link>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { Container, Card, Button } from '../components/ui'
import companyInfo from '../data/company-info.json'

// Extract data
const stats = companyInfo.stats
const leadership = companyInfo.team.leadership
const awards = companyInfo.achievements

// Helper function to get initials
const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}
</script>