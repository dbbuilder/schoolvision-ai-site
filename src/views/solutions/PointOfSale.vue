<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <Container>
        <div class="max-w-4xl">
          <div class="mb-4">
            <router-link to="/solutions" class="text-primary-200 hover:text-white inline-flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              All Solutions
            </router-link>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Smart Point of Sale Solutions
          </h1>
          <p class="text-xl text-primary-100 mb-8">
            Transform your campus dining with intelligent POS systems that reduce waste, 
            speed service, and provide valuable nutrition insights while keeping transactions secure.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/demo">
              <Button size="lg" variant="secondary">
                See Live Demo
              </Button>
            </router-link>
            <router-link to="/contact">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-primary-700">
                Get Pricing
              </Button>
            </router-link>
          </div>
        </div>
      </Container>
    </section>

    <!-- Key Stats -->
    <section class="py-12 bg-primary-50">
      <Container>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">30%</p>
            <p class="text-gray-700">Less Food Waste</p>
          </div>
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">3 sec</p>
            <p class="text-gray-700">Average Transaction</p>
          </div>
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">$180K</p>
            <p class="text-gray-700">Annual Savings</p>
          </div>
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">100%</p>
            <p class="text-gray-700">Cashless Option</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Features Grid -->
    <section class="py-16">
      <Container>
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Complete Campus Commerce Platform
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              From cafeterias to bookstores, manage all campus transactions with one integrated system.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Cafeteria Management -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Smart Cafeteria Systems</h3>
              <p class="text-gray-600 mb-4">
                Speed lunch lines with touchless payments, automatic free/reduced lunch 
                application, and allergen alerts for every student.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Biometric/PIN/Card options
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time nutrition tracking
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Automatic reimbursement claims
                </li>
              </ul>
            </Card>

            <!-- Inventory & Ordering -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Predictive Inventory</h3>
              <p class="text-gray-600 mb-4">
                AI-powered forecasting reduces waste by 30% while ensuring popular items 
                never run out. Automatic reordering saves hours weekly.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Weather-based adjustments
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Event calendar integration
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Supplier portal access
                </li>
              </ul>
            </Card>

            <!-- Parent Portal -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Parent Payment Portal</h3>
              <p class="text-gray-600 mb-4">
                Parents add funds, set spending limits, view purchases, and receive 
                low-balance alerts. Supports automatic recurring payments.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Multiple payment methods
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Purchase restrictions
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Nutrition reports
                </li>
              </ul>
            </Card>

            <!-- Multi-Location -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Campus-Wide Commerce</h3>
              <p class="text-gray-600 mb-4">
                One account works everywhere: cafeteria, bookstore, vending machines, 
                printing stations, and campus events. Central reporting across all venues.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Unified account balance
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Cross-location reporting
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Mobile ordering app
                </li>
              </ul>
            </Card>

            <!-- Compliance & Reporting -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Automated Compliance</h3>
              <p class="text-gray-600 mb-4">
                Generate federal reimbursement claims, nutrition reports, and financial 
                audits automatically. Always ready for state inspections.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  USDA compliance built-in
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Allergen tracking
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Financial reconciliation
                </li>
              </ul>
            </Card>

            <!-- Analytics -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Real-Time Analytics</h3>
              <p class="text-gray-600 mb-4">
                Track sales trends, popular items, peak times, and nutritional habits. 
                Make data-driven menu decisions that students love.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Menu performance metrics
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Student preference analysis
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Waste reduction tracking
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </section>

    <!-- Success Story -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="max-w-4xl mx-auto">
          <Card class="p-8">
            <div class="flex items-start gap-4 mb-6">
              <div class="flex-shrink-0">
                <svg class="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">
                  Metro Unified: $180,000 Annual Savings from Reduced Waste
                </h3>
                <p class="text-gray-600 mb-4">
                  "By analyzing consumption patterns and implementing predictive ordering, we've 
                  reduced food waste by 32% while actually improving student satisfaction. The 
                  system paid for itself in the first semester."
                </p>
                <p class="text-sm text-gray-500">
                  <strong>James Chen</strong>, Food Services Director at Metro Unified School District
                </p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div class="text-center">
                <p class="text-3xl font-bold text-primary-600">32%</p>
                <p class="text-sm text-gray-600">Less waste</p>
              </div>
              <div class="text-center">
                <p class="text-3xl font-bold text-primary-600">89%</p>
                <p class="text-sm text-gray-600">Parent satisfaction</p>
              </div>
              <div class="text-center">
                <p class="text-3xl font-bold text-primary-600">4x</p>
                <p class="text-sm text-gray-600">Faster lunch lines</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Campus Dining Experience
          </h2>
          <p class="text-xl text-primary-100 mb-8">
            See how SchoolVision.AI can streamline your food service operations while 
            delighting students and parents.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/demo">
              <Button size="lg" variant="secondary">
                Schedule a Demo
              </Button>
            </router-link>
            <router-link to="/roi-calculator">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-primary-700">
                Calculate Savings
              </Button>
            </router-link>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { Container, Card, Button } from '../../components/ui'
</script>