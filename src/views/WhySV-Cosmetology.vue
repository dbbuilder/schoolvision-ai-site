<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-pink-700 to-purple-700 text-white">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <nav class="mb-8">
          <router-link to="/markets/vocational" class="text-pink-200 hover:text-white transition-colors">
            ← Back to Vocational Schools
          </router-link>
        </nav>
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          Why SchoolVision.AI for Cosmetology Schools
        </h1>
        <p class="text-xl text-pink-100 max-w-3xl">
          Designed specifically for beauty schools with deep understanding of state board requirements, 
          client management, and the unique needs of cosmetology education.
        </p>
      </div>
    </section>

    <!-- Industry Understanding -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Created by Beauty Industry Experts
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Our team includes licensed cosmetologists, beauty school owners, and state board 
            compliance experts who understand the intricacies of running a successful cosmetology 
            program. We've built SchoolVision.AI to solve the real challenges you face.
          </p>
          <div class="grid gap-6">
            <Card>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">State Board Compliance Automated</h3>
              <p class="text-gray-600 mb-4">
                Track student hours by service category exactly as your state board requires. Generate 
                compliant reports instantly and ensure every student meets graduation requirements.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Automatic hour categorization by service type</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Real-time progress tracking for students</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">One-click state board report generation</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Client Experience That Builds Your Reputation</h3>
              <p class="text-gray-600 mb-4">
                Provide a professional experience from booking to service completion. Online scheduling, 
                automated reminders, and digital consent forms show clients you run a modern, professional 
                operation.
              </p>
              <div class="bg-pink-50 p-4 rounded-lg">
                <p class="text-pink-900 font-semibold">60% reduction in no-shows with automated reminders</p>
              </div>
            </Card>

            <Card>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Inventory Control That Saves Money</h3>
              <p class="text-gray-600">
                Track product usage by student and service, set automatic reorder points, and get 
                expiration alerts. Know exactly what you have, what you need, and what's costing you money.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Unique Features -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
          Features Designed for Beauty Education
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Digital Service Tickets with Photo Documentation
            </h3>
            <p class="text-gray-600 mb-4">
              Students document their work with before/after photos, track products used, and receive 
              instant feedback from instructors. Build portfolios automatically.
            </p>
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Smart Client Booking Portal
            </h3>
            <p class="text-gray-600 mb-4">
              Clients book appointments online, selecting services and preferred times. System 
              automatically matches them with students who need those service hours.
            </p>
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Chemical Tracking & Safety Compliance
            </h3>
            <p class="text-gray-600 mb-4">
              Track chemical inventory, mixing ratios, and patch test results. Ensure OSHA compliance 
              with automated safety data sheet management.
            </p>
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Retail POS Integration
            </h3>
            <p class="text-gray-600 mb-4">
              Sell professional products to clients with integrated inventory tracking. Students 
              learn retail skills while you track sales performance.
            </p>
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
          Trusted by Top Beauty Schools
        </h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card class="text-center">
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
            <blockquote class="text-gray-600 italic mb-4">
              "SchoolVision.AI transformed our operations. State board reporting that took hours 
              now takes minutes, and our client satisfaction scores have never been higher."
            </blockquote>
            <cite class="text-gray-900 font-semibold">Maria Rodriguez</cite>
            <p class="text-gray-500 text-sm">Director, Elite Beauty Academy</p>
          </Card>

          <Card class="text-center">
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
            <blockquote class="text-gray-600 italic mb-4">
              "The online booking system filled our appointment books and the inventory tracking 
              has saved us thousands in product waste. It's been a game-changer."
            </blockquote>
            <cite class="text-gray-900 font-semibold">Ashley Chen</cite>
            <p class="text-gray-500 text-sm">Owner, Glamour Institute</p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Implementation -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Implementation Tailored for Beauty Schools
          </h2>
          <p class="text-lg text-gray-600 mb-12">
            We know you can't close your doors for a system implementation. Our beauty school-specific 
            process gets you running without disrupting client services or student education.
          </p>
        </div>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  Service Menu & Pricing Setup (Week 1)
                </h3>
                <p class="text-gray-600">
                  Configure your service menu, student pricing, and state board hour categories. 
                  Import existing client data and appointment history.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  Inventory & Product Setup (Week 2)
                </h3>
                <p class="text-gray-600">
                  Catalog your professional and retail products, set par levels, and configure 
                  the dispensary system. Train staff on inventory procedures.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  Launch & Support (Week 3)
                </h3>
                <p class="text-gray-600">
                  Go live with full support. We'll help manage your first day of digital tickets, 
                  ensure smooth client check-ins, and be available for any questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Calculator CTA -->
    <section class="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6">
          Calculate Your Beauty School's Potential Savings
        </h2>
        <p class="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
          See how much time and money SchoolVision.AI can save your cosmetology school with our 
          specialized ROI calculator.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            @click="navigateToCalculator"
            class="bg-white text-purple-700 hover:bg-gray-100"
          >
            Calculate Your ROI
          </Button>
          <Button
            variant="secondary"
            size="lg"
            @click="navigateToDemo"
            class="border-white text-white hover:bg-white hover:text-purple-700"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card class="text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            Ready to Modernize Your Beauty School?
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Join leading cosmetology schools using SchoolVision.AI to streamline operations, 
            ensure compliance, and provide an exceptional education experience.
          </p>
          <div class="grid sm:grid-cols-3 gap-6 mb-8">
            <div>
              <div class="text-3xl font-bold text-pink-600 mb-2">30-Day</div>
              <div class="text-gray-600">Free Trial</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-pink-600 mb-2">100%</div>
              <div class="text-gray-600">Client Data Import</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-pink-600 mb-2">24/7</div>
              <div class="text-gray-600">Support</div>
            </div>
          </div>
          <Button
            variant="primary"
            size="xl"
            @click="navigateToDemo"
          >
            Get Started Today
          </Button>
        </Card>
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

const router = useRouter()

onMounted(() => {
  trackPageView({
    page_path: '/why-schoolvision/cosmetology',
    page_title: 'Why SchoolVision for Cosmetology Schools'
  })
})

const navigateToCalculator = () => {
  trackEvent('why_sv_cta', {
    program_type: 'cosmetology',
    cta_type: 'roi_calculator'
  })
  router.push('/roi-calculator')
}

const navigateToDemo = () => {
  trackEvent('why_sv_conversion', {
    program_type: 'cosmetology',
    cta_type: 'demo_request'
  })
  router.push('/demo')
}
</script>