<template>
  <div class="min-h-screen bg-gradient-to-b from-primary-50 to-white">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-transparent"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div class="text-center">
          <img 
            v-if="programData.logo" 
            :src="programData.logo" 
            :alt="`${programData.name} Program`"
            class="h-16 w-auto mx-auto mb-8"
          >
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform Your {{ programData.name }} Program
          </h1>
          <p class="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            {{ programData.headline }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="xl"
              @click="navigateToDemo"
              class="group"
            >
              See How SchoolVision.AI Works
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
            <Button
              variant="secondary"
              size="xl"
              @click="navigateToWhySV"
            >
              Why SchoolVision for {{ programData.shortName }}
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Benefits -->
    <section class="py-16 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          Built Specifically for {{ programData.name }} Schools
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            v-for="benefit in programData.keyBenefits"
            :key="benefit.title"
            class="text-center"
            hoverable
          >
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg v-if="benefit.iconType === 'clipboard'" class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <svg v-else-if="benefit.iconType === 'truck'" class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <svg v-else-if="benefit.iconType === 'academic'" class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              <svg v-else-if="benefit.iconType === 'users'" class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg v-else-if="benefit.iconType === 'document'" class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <svg v-else-if="benefit.iconType === 'cube'" class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <svg v-else-if="benefit.iconType === 'building'" class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <svg v-else-if="benefit.iconType === 'beaker'" class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <svg v-else-if="benefit.iconType === 'chart'" class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <svg v-else-if="benefit.iconType === 'camera'" class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <svg v-else-if="benefit.iconType === 'clipboardList'" class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <svg v-else-if="benefit.iconType === 'documentText'" class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <svg v-else class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Pain Points & Solutions -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-4">
          We Understand Your Challenges
        </h2>
        <p class="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          {{ programData.name }} programs face unique operational challenges. SchoolVision.AI addresses each one.
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            v-for="(point, index) in programData.painPoints"
            :key="index"
            class="flex gap-4"
          >
            <div class="flex-shrink-0">
              <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ point.problem }}</h3>
              <p class="text-gray-600 mb-2">{{ point.description }}</p>
              <div class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-green-800 font-medium">{{ point.solution }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specific Features -->
    <section class="py-16 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          Features Designed for {{ programData.name }} Education
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            v-for="feature in programData.specificFeatures"
            :key="feature.name"
            shadow="sm"
            hoverable
          >
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.name }}</h3>
            <p class="text-gray-600 text-sm">{{ feature.description }}</p>
          </Card>
        </div>
      </div>
    </section>

    <!-- ROI Section -->
    <section class="py-16 sm:py-20 bg-primary-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            See Your Potential ROI
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            {{ programData.name }} programs using SchoolVision.AI typically see:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div
              v-for="metric in programData.roiMetrics"
              :key="metric.label"
              class="text-center"
            >
              <div class="text-4xl font-bold text-primary-600 mb-2">{{ metric.value }}</div>
              <div class="text-gray-700">{{ metric.label }}</div>
            </div>
          </div>
          <Button
            variant="primary"
            size="lg"
            @click="navigateToCalculator"
          >
            Calculate Your ROI
          </Button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 sm:py-20 bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">
          Ready to Transform Your {{ programData.name }} Program?
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join hundreds of vocational schools already using SchoolVision.AI to streamline operations and improve student outcomes.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="xl"
            @click="navigateToDemoWithTracking"
            class="bg-white text-gray-900 hover:bg-gray-100"
          >
            Request a Demo
          </Button>
          <Button
            variant="secondary"
            size="xl"
            @click="navigateToContact"
            class="border-white text-white hover:bg-white hover:text-gray-900"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Card, Button } from '@/components/ui'
// Icons will be inlined
import { trackPageView, trackEvent } from '@/utils/analytics'

const props = defineProps({
  programData: {
    type: Object,
    required: true
  }
})

const router = useRouter()

onMounted(() => {
  // Track landing page view with program type
  trackPageView({
    page_path: `/${props.programData.slug}`,
    page_title: `${props.programData.name} Landing Page`,
    custom_parameters: {
      program_type: props.programData.slug,
      landing_page: true
    }
  })
})

const navigateToDemo = () => {
  trackEvent('landing_page_cta', {
    program_type: props.programData.slug,
    cta_type: 'see_how_it_works'
  })
  router.push('/demo')
}

const navigateToWhySV = () => {
  trackEvent('landing_page_cta', {
    program_type: props.programData.slug,
    cta_type: 'why_schoolvision'
  })
  router.push(`/why-schoolvision/${props.programData.slug}`)
}

const navigateToDemoWithTracking = () => {
  trackEvent('landing_page_conversion', {
    program_type: props.programData.slug,
    cta_type: 'request_demo_bottom'
  })
  router.push('/demo')
}

const navigateToContact = () => {
  trackEvent('landing_page_cta', {
    program_type: props.programData.slug,
    cta_type: 'contact_sales'
  })
  router.push('/contact')
}

const navigateToCalculator = () => {
  trackEvent('landing_page_cta', {
    program_type: props.programData.slug,
    cta_type: 'calculate_roi'
  })
  router.push('/roi-calculator')
}
</script>