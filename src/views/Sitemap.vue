<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
      <Container>
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Sitemap
          </h1>
          <p class="text-xl text-primary-100">
            Navigate through all pages and resources available on SchoolVision.AI
          </p>
        </div>
      </Container>
    </section>

    <!-- Sitemap Content -->
    <section class="py-16">
      <Container>
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Main Pages -->
            <div>
              <h2 class="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
                Main Pages
              </h2>
              <ul class="space-y-2">
                <li>
                  <router-link to="/" class="text-gray-700 hover:text-primary-600 transition-colors">
                    Home
                  </router-link>
                </li>
                <li>
                  <router-link to="/about" class="text-gray-700 hover:text-primary-600 transition-colors">
                    About Us
                  </router-link>
                </li>
                <li>
                  <router-link to="/contact" class="text-gray-700 hover:text-primary-600 transition-colors">
                    Contact
                  </router-link>
                </li>
                <li>
                  <router-link to="/demo" class="text-gray-700 hover:text-primary-600 transition-colors">
                    Request Demo
                  </router-link>
                </li>
                <li>
                  <router-link to="/pricing" class="text-gray-700 hover:text-primary-600 transition-colors">
                    Pricing
                  </router-link>
                </li>
                <li>
                  <router-link to="/roi-calculator" class="text-gray-700 hover:text-primary-600 transition-colors">
                    ROI Calculator
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- Solutions -->
            <div>
              <h2 class="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
                Solutions
              </h2>
              <ul class="space-y-2">
                <li>
                  <router-link to="/solutions" class="text-gray-700 hover:text-primary-600 transition-colors">
                    All Solutions
                  </router-link>
                </li>
                <li class="ml-4">
                  <span class="text-gray-500">Attendance & Safety</span>
                </li>
                <li class="ml-4">
                  <span class="text-gray-500">Point of Sale</span>
                </li>
                <li class="ml-4">
                  <span class="text-gray-500">AI Grading</span>
                </li>
                <li class="ml-4">
                  <span class="text-gray-500">Compliance Tracking</span>
                </li>
                <li class="ml-4">
                  <span class="text-gray-500">Predictive Analytics</span>
                </li>
              </ul>
            </div>

            <!-- Markets -->
            <div>
              <h2 class="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
                Markets
              </h2>
              <ul class="space-y-2">
                <li>
                  <router-link to="/markets/k12" class="text-gray-700 hover:text-primary-600 transition-colors">
                    K-12 Schools
                  </router-link>
                </li>
                <li>
                  <router-link to="/markets/higher-ed" class="text-gray-700 hover:text-primary-600 transition-colors">
                    Higher Education
                  </router-link>
                </li>
                <li>
                  <router-link to="/markets/vocational" class="text-gray-700 hover:text-primary-600 transition-colors">
                    Vocational Schools
                  </router-link>
                </li>
                <li class="mt-4 font-semibold">Why SchoolVision</li>
                <li class="ml-4">
                  <router-link to="/why-sv/k12" class="text-gray-700 hover:text-primary-600 transition-colors">
                    For K-12
                  </router-link>
                </li>
                <li class="ml-4">
                  <router-link to="/why-sv/higher-ed" class="text-gray-700 hover:text-primary-600 transition-colors">
                    For Higher Ed
                  </router-link>
                </li>
                <li class="ml-4">
                  <router-link to="/why-sv/vocational" class="text-gray-700 hover:text-primary-600 transition-colors">
                    For Vocational
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- Resources -->
            <div>
              <h2 class="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
                Resources
              </h2>
              <ul class="space-y-2">
                <li>
                  <router-link to="/library" class="text-gray-700 hover:text-primary-600 transition-colors">
                    Resource Library
                  </router-link>
                </li>
                <li>
                  <router-link to="/blog" class="text-gray-700 hover:text-primary-600 transition-colors">
                    Blog
                  </router-link>
                </li>
                <li>
                  <router-link to="/faq" class="text-gray-700 hover:text-primary-600 transition-colors">
                    FAQ
                  </router-link>
                </li>
                <li>
                  <a href="https://support.schoolvision.ai" class="text-gray-700 hover:text-primary-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    Support Center
                    <svg class="inline-block w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Legal & Compliance -->
            <div>
              <h2 class="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
                Legal & Compliance
              </h2>
              <ul class="space-y-2">
                <li>
                  <router-link to="/privacy" class="text-gray-700 hover:text-primary-600 transition-colors">
                    Privacy Policy
                  </router-link>
                </li>
                <li>
                  <router-link to="/terms" class="text-gray-700 hover:text-primary-600 transition-colors">
                    Terms of Service
                  </router-link>
                </li>
                <li>
                  <router-link to="/ferpa" class="text-gray-700 hover:text-primary-600 transition-colors">
                    FERPA Compliance
                  </router-link>
                </li>
                <li>
                  <router-link to="/accessibility" class="text-gray-700 hover:text-primary-600 transition-colors">
                    Accessibility Statement
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- Company -->
            <div>
              <h2 class="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
                Company
              </h2>
              <ul class="space-y-2">
                <li>
                  <span class="text-gray-500">Partners</span>
                </li>
                <li>
                  <span class="text-gray-500">Careers</span>
                </li>
                <li>
                  <span class="text-gray-500">Press</span>
                </li>
                <li class="mt-4 font-semibold">Connect</li>
                <li class="ml-4">
                  <a href="https://linkedin.com/company/schoolvision-ai" class="text-gray-700 hover:text-primary-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                    <svg class="inline-block w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li class="ml-4">
                  <a href="https://twitter.com/schoolvisionai" class="text-gray-700 hover:text-primary-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    Twitter/X
                    <svg class="inline-block w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li class="ml-4">
                  <a href="https://youtube.com/schoolvisionai" class="text-gray-700 hover:text-primary-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    YouTube
                    <svg class="inline-block w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="mt-16 pt-8 border-t border-gray-200">
            <div class="bg-gray-50 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Looking for something specific?
              </h3>
              <p class="text-gray-600 mb-4">
                Can't find what you're looking for? Our team is here to help you navigate our platform and find the information you need.
              </p>
              <div class="flex flex-wrap gap-4">
                <router-link to="/contact">
                  <Button variant="outline" size="sm">
                    Contact Support
                  </Button>
                </router-link>
                <router-link to="/faq">
                  <Button variant="outline" size="sm">
                    Browse FAQ
                  </Button>
                </router-link>
                <a href="tel:801-659-7778">
                  <Button variant="outline" size="sm">
                    Call 801-659-7778
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <!-- XML Sitemap Link -->
          <div class="mt-8 text-center">
            <p class="text-sm text-gray-600">
              For search engines: 
              <a href="/sitemap.xml" class="text-primary-600 hover:text-primary-700 font-medium">
                XML Sitemap
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { Container, Button } from '../components/ui'
</script>