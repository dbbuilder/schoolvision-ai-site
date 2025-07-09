<template>
  <footer class="bg-gray-900 text-gray-300">
    <!-- Main Footer Content -->
    <div class="border-b border-gray-800">
      <Container class="py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <!-- Company Info -->
          <div class="lg:col-span-2">
            <div class="text-2xl font-bold text-white mb-4">SchoolVision.AI</div>
            <p class="text-gray-400 mb-4">
              Complete Campus Intelligence Platform. Where your SIS ends, we begin. 
              Serving 500+ campuses with 20+ years of experience.
            </p>
            <div class="flex space-x-4">
              <a href="https://linkedin.com/company/schoolvision-ai" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/schoolvisionai" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://youtube.com/schoolvisionai" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Solutions -->
          <div>
            <h3 class="text-white font-semibold mb-4">Solutions</h3>
            <ul class="space-y-2">
              <li><router-link to="/solutions" class="hover:text-white transition-colors">All Solutions</router-link></li>
              <li><a href="#" class="hover:text-white transition-colors">Attendance & Safety</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Point of Sale</a></li>
              <li><a href="#" class="hover:text-white transition-colors">AI Grading</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Compliance Tracking</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Predictive Analytics</a></li>
            </ul>
          </div>

          <!-- Markets -->
          <div>
            <h3 class="text-white font-semibold mb-4">Markets</h3>
            <ul class="space-y-2">
              <li><router-link to="/why-sv/k12" class="hover:text-white transition-colors">K-12 Schools</router-link></li>
              <li><router-link to="/why-sv/higher-ed" class="hover:text-white transition-colors">Higher Education</router-link></li>
              <li><router-link to="/why-sv/vocational" class="hover:text-white transition-colors">Vocational/CTE</router-link></li>
              <li><a href="#" class="hover:text-white transition-colors">CDL Programs</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Healthcare Training</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Trade Schools</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h3 class="text-white font-semibold mb-4">Resources</h3>
            <ul class="space-y-2">
              <li><router-link to="/library" class="hover:text-white transition-colors">Resource Library</router-link></li>
              <li><router-link to="/roi-calculator" class="hover:text-white transition-colors">ROI Calculator</router-link></li>
              <li><a href="#" class="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" class="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="https://support.schoolvision.ai" class="hover:text-white transition-colors">Support Center</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>

    <!-- Contact Bar -->
    <div class="bg-gray-800 border-b border-gray-700">
      <Container class="py-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <div class="text-gray-400">Sales & Support</div>
              <a href="tel:801-659-7778" class="text-white hover:text-primary-400">801-659-7778</a>
            </div>
          </div>
          
          <div class="flex items-center">
            <svg class="w-5 h-5 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <div class="text-gray-400">Email Us</div>
              <a href="mailto:info@schoolvision.ai" class="text-white hover:text-primary-400">info@schoolvision.ai</a>
            </div>
          </div>
          
          <div class="flex items-center">
            <svg class="w-5 h-5 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <div class="text-gray-400">Headquarters</div>
              <span class="text-white">Salt Lake City, Utah</span>
            </div>
          </div>
        </div>
      </Container>
    </div>

    <!-- Bottom Bar -->
    <Container class="py-6">
      <div class="flex flex-col md:flex-row justify-between items-center text-sm">
        <div class="text-gray-400 mb-4 md:mb-0">
          © 2025 SchoolVision.AI. All rights reserved. | 20+ Years Serving Education
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/privacy" class="hover:text-white transition-colors">Privacy Policy</router-link>
          <router-link to="/terms" class="hover:text-white transition-colors">Terms of Service</router-link>
          <router-link to="/ferpa" class="hover:text-white transition-colors">FERPA Compliance</router-link>
          <router-link to="/accessibility" class="hover:text-white transition-colors">Accessibility</router-link>
          <router-link to="/sitemap" class="hover:text-white transition-colors">Sitemap</router-link>
        </div>
      </div>
    </Container>

    <!-- Partner Badges -->
    <div class="bg-gray-800 py-6">
      <Container>
        <div class="text-center text-xs text-gray-500 mb-4">Trusted Partners & Certifications</div>
        <div class="flex flex-wrap justify-center items-center gap-8">
          <div class="text-gray-600">Microsoft Partner</div>
          <div class="text-gray-600">AWS Education</div>
          <div class="text-gray-600">FERPA Compliant</div>
          <div class="text-gray-600">SOC 2 Type II</div>
          <div class="text-gray-600">Ed-Fi Alliance</div>
        </div>
      </Container>
    </div>
  </footer>
</template>

<script setup>
import { Container } from './ui'
</script>