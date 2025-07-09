<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
      <Container>
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Calculate Your ROI</h1>
          <p class="text-xl text-green-100">
            Discover how much time and money SchoolVision AI can save your institution
          </p>
        </div>
      </Container>
    </section>

    <!-- Calculator Section -->
    <section class="py-16">
      <Container>
        <div class="max-w-4xl mx-auto">
          <ROICalculator />
        </div>
      </Container>
    </section>

    <!-- Benefits Section -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
            Where Your Savings Come From
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Time Savings</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Automated attendance saves 15-30 minutes daily per teacher</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>AI grading reduces assessment time by 70%</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Automated reporting saves 5+ hours weekly</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Cost Reductions</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>30% reduction in cafeteria food waste</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Fraud detection saves thousands annually</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Better resource allocation through predictive analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Case Study -->
    <section class="py-16">
      <Container>
        <Card class="max-w-4xl mx-auto">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Real-World Example</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600">1,200</div>
                <div class="text-gray-600">Students</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-600">$127,000</div>
                <div class="text-gray-600">Annual Savings</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-600">3.2</div>
                <div class="text-gray-600">Month Payback</div>
              </div>
            </div>
            <blockquote class="text-gray-700 italic">
              "SchoolVision AI paid for itself in just over 3 months. The time savings alone justified the investment, 
              but the improved student outcomes and operational efficiency made it invaluable."
            </blockquote>
            <div class="mt-4 text-sm text-gray-600">
              - Jennifer Martinez, CFO, Westside School District
            </div>
          </div>
        </Card>
      </Container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary-700 text-white">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Saving?
          </h2>
          <p class="text-xl mb-8 text-primary-100">
            Get a detailed ROI analysis customized for your institution
          </p>
          <router-link to="/demo">
            <Button size="lg" variant="secondary">
              Schedule Your Demo
            </Button>
          </router-link>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { Container, Card, Button } from '../components/ui'
import ROICalculator from '../components/ROICalculator.vue'
</script>