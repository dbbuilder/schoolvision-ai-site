<template>
  <Transition
    enter-active-class="transition-all duration-500"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition-all duration-300"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div 
      v-if="showBanner" 
      class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
    >
      <Container>
        <div class="py-4 md:py-6">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                We value your privacy
              </h3>
              <p class="text-gray-600 text-sm md:text-base">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies. You can manage your preferences by clicking "Cookie Settings".
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button 
                @click="acceptAll" 
                size="sm" 
                variant="primary"
                class="w-full sm:w-auto"
              >
                Accept All
              </Button>
              <Button 
                @click="showSettings = true" 
                size="sm" 
                variant="outline"
                class="w-full sm:w-auto"
              >
                Cookie Settings
              </Button>
              <Button 
                @click="rejectAll" 
                size="sm" 
                variant="ghost"
                class="w-full sm:w-auto"
              >
                Reject All
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </Transition>

  <!-- Cookie Settings Modal -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showSettings" class="fixed inset-0 z-50 overflow-y-auto">
        <!-- Backdrop -->
        <div 
          class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          @click="showSettings = false"
        ></div>

        <!-- Modal -->
        <div class="flex min-h-full items-center justify-center p-4">
          <Transition
            enter-active-class="transition-all duration-300"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition-all duration-300"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div 
              v-if="showSettings"
              class="relative w-full max-w-2xl bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <!-- Header -->
              <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h2 class="text-xl font-semibold text-gray-900">Cookie Settings</h2>
              </div>

              <!-- Content -->
              <div class="p-6 max-h-[60vh] overflow-y-auto">
                <p class="text-gray-600 mb-6">
                  We use different types of cookies to optimize your experience on our website. Click on the categories 
                  below to learn more about their purpose. You can change your cookie settings at any time.
                </p>

                <div class="space-y-6">
                  <!-- Necessary Cookies -->
                  <div class="border rounded-lg p-4">
                    <div class="flex items-start justify-between mb-2">
                      <div class="flex-1">
                        <h3 class="font-semibold text-gray-900 mb-1">Necessary Cookies</h3>
                        <p class="text-sm text-gray-600">
                          These cookies are essential for the website to function properly. They enable basic functions 
                          like page navigation and access to secure areas of the website.
                        </p>
                      </div>
                      <div class="ml-4">
                        <span class="text-sm text-gray-500">Always Active</span>
                      </div>
                    </div>
                  </div>

                  <!-- Analytics Cookies -->
                  <div class="border rounded-lg p-4">
                    <div class="flex items-start justify-between mb-2">
                      <div class="flex-1">
                        <h3 class="font-semibold text-gray-900 mb-1">Analytics Cookies</h3>
                        <p class="text-sm text-gray-600">
                          These cookies help us understand how visitors interact with our website by collecting and 
                          reporting information anonymously.
                        </p>
                      </div>
                      <div class="ml-4">
                        <label class="relative inline-flex items-center cursor-pointer">
                          <input 
                            v-model="preferences.analytics" 
                            type="checkbox" 
                            class="sr-only peer"
                          >
                          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <!-- Marketing Cookies -->
                  <div class="border rounded-lg p-4">
                    <div class="flex items-start justify-between mb-2">
                      <div class="flex-1">
                        <h3 class="font-semibold text-gray-900 mb-1">Marketing Cookies</h3>
                        <p class="text-sm text-gray-600">
                          These cookies are used to track visitors across websites to display ads that are relevant 
                          and engaging for individual users.
                        </p>
                      </div>
                      <div class="ml-4">
                        <label class="relative inline-flex items-center cursor-pointer">
                          <input 
                            v-model="preferences.marketing" 
                            type="checkbox" 
                            class="sr-only peer"
                          >
                          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p class="text-sm text-gray-600">
                    For more information about how we use cookies, please read our 
                    <router-link to="/privacy" class="text-primary-600 hover:text-primary-700 font-medium">
                      Privacy Policy
                    </router-link>.
                  </p>
                </div>
              </div>

              <!-- Footer -->
              <div class="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
                <Button 
                  @click="savePreferences" 
                  size="sm" 
                  variant="primary"
                >
                  Save Preferences
                </Button>
                <Button 
                  @click="showSettings = false" 
                  size="sm" 
                  variant="outline"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Container, Button } from './ui'

const COOKIE_CONSENT_KEY = 'schoolvision_cookie_consent'
const COOKIE_PREFERENCES_KEY = 'schoolvision_cookie_preferences'

const showBanner = ref(false)
const showSettings = ref(false)

const preferences = reactive({
  necessary: true, // Always true
  analytics: false,
  marketing: false
})

// Check if user has already made a choice
const checkCookieConsent = () => {
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
  if (!consent) {
    showBanner.value = true
  } else {
    // Load saved preferences
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY)
    if (savedPreferences) {
      const parsed = JSON.parse(savedPreferences)
      preferences.analytics = parsed.analytics || false
      preferences.marketing = parsed.marketing || false
    }
    // Initialize tracking based on preferences
    initializeTracking()
  }
}

// Accept all cookies
const acceptAll = () => {
  preferences.analytics = true
  preferences.marketing = true
  saveConsent()
  showBanner.value = false
  initializeTracking()
}

// Reject all optional cookies
const rejectAll = () => {
  preferences.analytics = false
  preferences.marketing = false
  saveConsent()
  showBanner.value = false
}

// Save preferences from settings modal
const savePreferences = () => {
  saveConsent()
  showSettings.value = false
  showBanner.value = false
  initializeTracking()
}

// Save consent to localStorage
const saveConsent = () => {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'true')
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify({
    necessary: true,
    analytics: preferences.analytics,
    marketing: preferences.marketing
  }))
}

// Initialize tracking services based on preferences
const initializeTracking = () => {
  if (preferences.analytics) {
    // Initialize Google Analytics or other analytics services
    console.log('Analytics cookies enabled')
    // window.gtag('config', 'GA_MEASUREMENT_ID')
  }
  
  if (preferences.marketing) {
    // Initialize marketing/advertising cookies
    console.log('Marketing cookies enabled')
    // Initialize Facebook Pixel, LinkedIn Insight, etc.
  }
}

// Expose function to open settings (can be called from footer)
const openSettings = () => {
  showSettings.value = true
}

onMounted(() => {
  checkCookieConsent()
})

// Export for external use
defineExpose({
  openSettings
})
</script>