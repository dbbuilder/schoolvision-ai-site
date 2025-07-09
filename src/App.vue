<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <Navigation />
    
    <main>
      <router-view />
    </main>
    
    <footer class="bg-gray-900 text-white">
      <Container class="py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">SchoolVision AI</h3>
            <p class="text-gray-400">Intelligent campus management solutions for modern educational institutions.</p>
          </div>
          
          <div>
            <h4 class="font-semibold mb-3">Solutions</h4>
            <ul class="space-y-2 text-gray-400">
              <li><router-link to="/solutions" class="hover:text-white transition-colors">All Solutions</router-link></li>
              <li><router-link to="/markets/k12" class="hover:text-white transition-colors">K-12 Schools</router-link></li>
              <li><router-link to="/markets/higher-ed" class="hover:text-white transition-colors">Higher Education</router-link></li>
              <li><router-link to="/markets/vocational" class="hover:text-white transition-colors">Vocational Schools</router-link></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-3">Company</h4>
            <ul class="space-y-2 text-gray-400">
              <li><router-link to="/about" class="hover:text-white transition-colors">About Us</router-link></li>
              <li><router-link to="/contact" class="hover:text-white transition-colors">Contact</router-link></li>
              <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-3">Get Started</h4>
            <p class="text-gray-400 mb-4">Ready to transform your campus?</p>
            <router-link to="/demo">
              <Button variant="primary" size="md" class="w-full">Request Demo</Button>
            </router-link>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SchoolVision AI. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import { Container, Button } from './components/ui'
</script>