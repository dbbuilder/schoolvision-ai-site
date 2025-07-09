<template>
  <section class="py-16 bg-gray-50">
    <Container>
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted by Education Leaders
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          See what administrators and educators are saying about SchoolVision.AI
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          :testimonial="testimonial"
        />
      </div>
      
      <!-- Stats Section -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-4xl font-bold text-primary-600">{{ stat.value }}</div>
          <div class="text-gray-600 mt-1">{{ stat.label }}</div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { Container } from './ui'
import TestimonialCard from './TestimonialCard.vue'

const testimonials = [
  {
    id: 1,
    quote: "After 20 years of manual attendance tracking, SchoolVision.AI reduced our daily attendance time from 45 minutes to under 5 minutes. The automated parent notifications alone have improved our chronic absenteeism rate by 27%. We're saving $127,000 annually.",
    author: "Dr. Jennifer Martinez",
    role: "Superintendent",
    organization: "Westside K-12 District (1,200 students)",
    rating: 5
  },
  {
    id: 2,
    quote: "The integration with our SIS revealed patterns we never saw before. When we noticed declining cafeteria visits correlating with dropping grades, we identified 47 food-insecure students. The predictive analytics helped us increase our retention rate from 72% to 85%.",
    author: "Dr. Michael Thompson",
    role: "VP of Student Success",
    organization: "State University (18,000 students)",
    rating: 5
  },
  {
    id: 3,
    quote: "Managing 90/10 compliance was a nightmare with 6 campuses. SchoolVision.AI automated our clock hour tracking across all locations. We went from 3 full-time compliance officers to 1, and our audit prep time dropped from 3 weeks to 3 days.",
    author: "Linda Chen",
    role: "CFO",
    organization: "Allied Career Centers (3,500 CTE students)",
    rating: 5
  },
  {
    id: 4,
    quote: "In our dental hygiene program, the per-tooth grading system transformed our assessments. Clinical supervisors save 20 hours weekly, and students get detailed feedback instantly. Pass rates on state boards improved from 78% to 94%.",
    author: "Dr. Patricia Williams",
    role: "Program Director",
    organization: "Regional Health Sciences Institute",
    rating: 5
  },
  {
    id: 5,
    quote: "The AI detected unusual POS patterns and prevented $45,000 in cafeteria fraud in our first year. But the real win was reducing food waste by 32% through predictive ordering. That's $180,000 saved annually across our 8 schools.",
    author: "Robert Martinez",
    role: "Business Manager",
    organization: "Metro Unified School District",
    rating: 5
  },
  {
    id: 6,
    quote: "Our CDL program struggled with in-truck attendance verification across 15 training routes. SchoolVision's GPS tracking with rotating QR codes solved it completely. DOT compliance is automatic, and we can finally prove our 1,200 behind-the-wheel hours.",
    author: "James Wilson",
    role: "Director of Transportation Training",
    organization: "Interstate Trucking Academy",
    rating: 5
  }
]

const stats = [
  {
    value: '500+',
    label: 'Campuses Served'
  },
  {
    value: '2.8M+',
    label: 'Students Tracked Daily'
  },
  {
    value: '$47M',
    label: 'Total Client Savings'
  },
  {
    value: '20+',
    label: 'Years of Experience'
  }
]
</script>