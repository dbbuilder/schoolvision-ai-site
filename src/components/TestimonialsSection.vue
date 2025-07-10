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
import testimonialData from '../data/testimonials.json'
import companyInfo from '../data/company-info.json'

// Use real testimonial data
const testimonials = testimonialData.testimonials.filter(t => t.featured).map(t => ({
  id: t.id,
  quote: t.content,
  author: t.name,
  role: t.role,
  organization: t.school,
  rating: t.rating
}))

// Use real company stats
const stats = [
  {
    value: companyInfo.stats.campusesServed,
    label: 'Campuses Served'
  },
  {
    value: companyInfo.stats.studentsImpacted,
    label: 'Students Tracked Daily'
  },
  {
    value: companyInfo.stats.customerSatisfaction,
    label: 'Customer Satisfaction'
  },
  {
    value: companyInfo.stats.yearsExperience,
    label: 'Years of Experience'
  }
]
</script>