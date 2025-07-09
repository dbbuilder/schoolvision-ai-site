<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-secondary-600 to-secondary-800 text-white py-16">
      <Container>
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">See SchoolVision.AI in Action</h1>
          <p class="text-xl text-secondary-100">
            Get a personalized demo tailored to your institution's unique needs and challenges.
          </p>
        </div>
      </Container>
    </section>

    <!-- Benefits Section -->
    <section class="py-12 bg-gray-50">
      <Container>
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">What to Expect in Your Demo</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="font-semibold text-gray-900">Personalized Walkthrough</h3>
                <p class="text-gray-600">See features most relevant to your institution type and size</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="font-semibold text-gray-900">ROI Analysis</h3>
                <p class="text-gray-600">Understand the potential impact on your operations and budget</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="font-semibold text-gray-900">Q&A Session</h3>
                <p class="text-gray-600">Get all your questions answered by our education technology experts</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="font-semibold text-gray-900">Implementation Roadmap</h3>
                <p class="text-gray-600">Learn about our proven deployment process and timeline</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Demo Request Form -->
    <section class="py-16">
      <Container>
        <div class="max-w-4xl mx-auto">
          <DemoRequestForm />
        </div>
      </Container>
    </section>

    <!-- Testimonial -->
    <section class="py-16 bg-primary-50">
      <Container>
        <div class="max-w-3xl mx-auto text-center">
          <blockquote class="text-xl text-gray-700 italic">
            "The SchoolVision.AI demo opened our eyes to what's possible. Within 30 minutes, 
            we saw exactly how it could solve our biggest challenges. Implementation was even smoother than promised."
          </blockquote>
          <div class="mt-6">
            <p class="font-semibold text-gray-900">Dr. Sarah Johnson</p>
            <p class="text-gray-600">Superintendent, Riverside School District</p>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { Container } from '../components/ui'
import DemoRequestForm from '../components/DemoRequestForm.vue'
</script>