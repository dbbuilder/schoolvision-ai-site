<template>
  <section class="py-16 bg-gray-50">
    <Container>
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted by Education Leaders
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          See what administrators and educators are saying about SchoolVision AI
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
    quote: "SchoolVision AI transformed how we manage our campus. The attendance system alone saved us 2 hours daily, and the predictive analytics helped us identify at-risk students before it was too late.",
    author: "Dr. Sarah Johnson",
    role: "Superintendent",
    organization: "Riverside School District",
    rating: 5
  },
  {
    id: 2,
    quote: "The AI-powered grading system is a game-changer. Teachers now spend more time actually teaching instead of grading papers. Parent satisfaction has increased dramatically.",
    author: "Michael Chen",
    role: "Principal",
    organization: "Lincoln High School",
    rating: 5
  },
  {
    id: 3,
    quote: "Implementation was smooth and the support team was exceptional. Within a month, we saw measurable improvements in operational efficiency and student outcomes.",
    author: "Maria Rodriguez",
    role: "IT Director",
    organization: "Valley Unified School District",
    rating: 5
  },
  {
    id: 4,
    quote: "The ROI was immediate. Reduced food waste in our cafeteria by 30% and improved attendance tracking accuracy to 98%. This system pays for itself.",
    author: "James Thompson",
    role: "Business Manager",
    organization: "Oakwood Academy",
    rating: 5
  },
  {
    id: 5,
    quote: "As a vocational school, we needed specialized features. SchoolVision AI delivered with custom modules for tracking skills development and industry partnerships.",
    author: "Dr. Patricia Williams",
    role: "Dean of Students",
    organization: "TechVoc Institute",
    rating: 5
  },
  {
    id: 6,
    quote: "The predictive analytics helped us intervene early with struggling students. Our graduation rate improved by 12% in just one year. Absolutely worth the investment.",
    author: "Robert Martinez",
    role: "Assistant Superintendent",
    organization: "Metro Public Schools",
    rating: 5
  }
]

const stats = [
  {
    value: '500+',
    label: 'Schools Using SchoolVision'
  },
  {
    value: '2.5M',
    label: 'Students Served'
  },
  {
    value: '98%',
    label: 'Customer Satisfaction'
  },
  {
    value: '45%',
    label: 'Average Time Saved'
  }
]
</script>