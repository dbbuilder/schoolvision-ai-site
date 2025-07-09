<template>
  <nav class="bg-white shadow-sm border-b border-gray-200">
    <Container>
      <div class="flex justify-between h-16">
        <!-- Logo and Desktop Navigation -->
        <div class="flex">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="text-2xl font-bold text-primary-600">
              SchoolVision.AI
            </router-link>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden sm:ml-8 sm:flex sm:space-x-8">
            <template v-for="item in navigation" :key="item.name">
              <!-- Regular navigation link -->
              <router-link
                v-if="!item.dropdown"
                :to="item.to"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors duration-200"
                active-class="text-primary-600 border-b-2 border-primary-600"
              >
                {{ item.name }}
              </router-link>
              
              <div v-else class="relative inline-flex items-center">
                <button
                  @click="marketsOpen = !marketsOpen"
                  @blur="closeMarketsDropdown"
                  class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  {{ item.name }}
                  <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <!-- Dropdown Menu -->
                <Transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <div
                    v-if="marketsOpen"
                    class="absolute z-10 left-0 mt-12 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  >
                    <div class="py-1">
                      <router-link
                        v-for="subItem in whySV"
                        :key="subItem.name"
                        :to="subItem.to"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        @click="marketsOpen = false"
                      >
                        {{ subItem.name }}
                      </router-link>
                    </div>
                  </div>
                </Transition>
              </div>
            </template>
          </div>
        </div>
        
        <!-- CTA Buttons -->
        <div class="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
          <router-link to="/contact">
            <Button variant="ghost" size="sm">Contact Sales</Button>
          </router-link>
          <router-link to="/demo">
            <Button variant="primary" size="sm">Request Demo</Button>
          </router-link>
        </div>
        
        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          >
            <span class="sr-only">Open main menu</span>
            <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </Container>
    
    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="mobileMenuOpen" class="sm:hidden bg-white border-t border-gray-200">
        <div class="pt-2 pb-3 space-y-1">
          <template v-for="item in navigation" :key="item.name">
            <!-- Regular navigation links -->
            <router-link
              v-if="!item.dropdown"
              :to="item.to"
              class="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50"
              active-class="text-primary-600 bg-primary-50 border-l-4 border-primary-600"
              @click="mobileMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
            
            <!-- Why SV Section -->
            <div v-else class="pl-3 pr-4 py-2">
              <div class="text-base font-medium text-gray-900 mb-2">{{ item.name }}</div>
              <div class="ml-4 space-y-1">
                <router-link
                  v-for="subItem in whySV"
                  :key="subItem.name"
                  :to="subItem.to"
                  class="block py-1 text-sm text-gray-600 hover:text-primary-600"
                  @click="mobileMenuOpen = false"
                >
                  {{ subItem.name }}
                </router-link>
              </div>
            </div>
          </template>
        </div>
        
        <!-- Mobile CTA buttons -->
        <div class="border-t border-gray-200 pt-4 pb-3 px-4 space-y-2">
          <router-link to="/contact" @click="mobileMenuOpen = false">
            <Button variant="outline" size="sm" class="w-full">Contact Sales</Button>
          </router-link>
          <router-link to="/demo" @click="mobileMenuOpen = false">
            <Button variant="primary" size="sm" class="w-full">Request Demo</Button>
          </router-link>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Container, Button } from './ui'

const mobileMenuOpen = ref(false)
const marketsOpen = ref(false)

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Solutions', to: '/solutions' },
  { name: 'Why SV', dropdown: true },
  { name: 'ROI Calculator', to: '/roi-calculator' },
  { name: 'Library', to: '/library' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'About', to: '/about' }
]

const whySV = [
  { name: 'For K-12 Schools', to: '/why-sv/k12' },
  { name: 'For Higher Education', to: '/why-sv/higher-ed' },
  { name: 'For Vocational Schools', to: '/why-sv/vocational' }
]

const closeMarketsDropdown = () => {
  setTimeout(() => {
    marketsOpen.value = false
  }, 200)
}
</script>