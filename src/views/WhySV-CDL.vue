<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <nav class="mb-8">
          <router-link to="/markets/vocational" class="text-blue-200 hover:text-white transition-colors">
            ← Back to Vocational Schools
          </router-link>
        </nav>
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          Why SchoolVision.AI for CDL/Trucking Programs
        </h1>
        <p class="text-xl text-blue-100 max-w-3xl">
          Purpose-built for commercial driving schools with deep understanding of DOT compliance, 
          fleet management, and the unique challenges of preparing professional drivers.
        </p>
      </div>
    </section>

    <!-- Industry Understanding -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Built by Industry Experts, For Industry Leaders
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Our team includes former CDL instructors, fleet managers, and DOT compliance specialists 
            who understand the complexities of running a successful trucking school. We've built 
            SchoolVision.AI to address the real challenges you face every day.
          </p>
          <div class="grid gap-6">
            <Card>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">DOT Compliance Made Simple</h3>
              <p class="text-gray-600 mb-4">
                Stay ahead of changing regulations with automated tracking of driver qualifications, 
                medical certifications, and hours of service. Our system alerts you before certifications 
                expire and generates required reports with one click.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Automated medical card expiration tracking</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Electronic driver qualification file management</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Real-time hours of service tracking for training</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Fleet Management That Saves Money</h3>
              <p class="text-gray-600 mb-4">
                Reduce maintenance costs and maximize vehicle uptime with predictive maintenance 
                scheduling, real-time GPS tracking, and comprehensive vehicle history tracking.
              </p>
              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="text-blue-900 font-semibold">Average fleet savings: $12,000 per truck annually</p>
              </div>
            </Card>

            <Card>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Student Success Through Better Training</h3>
              <p class="text-gray-600">
                Digital pre-trip inspection checklists, road test evaluations, and progress tracking 
                help instructors identify areas where students need additional support, leading to 
                higher CDL exam pass rates.
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
          Features No Other Platform Offers
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Integrated ELD Training Mode
            </h3>
            <p class="text-gray-600 mb-4">
              Train students on electronic logging devices with our built-in ELD simulator that 
              mirrors real-world systems they'll use as professional drivers.
            </p>
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              AI-Powered Route Planning
            </h3>
            <p class="text-gray-600 mb-4">
              Optimize training routes based on student skill level, traffic patterns, and specific 
              maneuvers that need practice. Ensures every minute of road time is valuable.
            </p>
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Employer Connection Portal
            </h3>
            <p class="text-gray-600 mb-4">
              Connect graduating students with trucking companies actively hiring. Track job 
              placement rates and maintain relationships with industry partners.
            </p>
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Mobile Pre-Trip Inspection App
            </h3>
            <p class="text-gray-600 mb-4">
              Students use tablets to complete digital pre-trip inspections with photo documentation. 
              Instructors grade in real-time and track common problem areas.
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
          Trusted by Leading CDL Schools
        </h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card class="text-center">
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
            <blockquote class="text-gray-600 italic mb-4">
              "SchoolVision.AI transformed how we manage our fleet and track student progress. 
              We've reduced maintenance costs by 40% and increased our pass rate to 94%."
            </blockquote>
            <cite class="text-gray-900 font-semibold">Mike Thompson</cite>
            <p class="text-gray-500 text-sm">Director, Professional Driving Academy</p>
          </Card>

          <Card class="text-center">
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
            <blockquote class="text-gray-600 italic mb-4">
              "The DOT compliance features alone are worth it. We used to spend hours on paperwork 
              that now takes minutes. It's a game-changer for trucking schools."
            </blockquote>
            <cite class="text-gray-900 font-semibold">Sarah Martinez</cite>
            <p class="text-gray-500 text-sm">Owner, Interstate Trucking Institute</p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Implementation -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Implementation Designed for Trucking Schools
          </h2>
          <p class="text-lg text-gray-600 mb-12">
            We understand that switching systems can be daunting. That's why we've developed a 
            trucking school-specific implementation process that gets you up and running quickly 
            without disrupting your operations.
          </p>
        </div>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  Fleet & Equipment Setup (Week 1)
                </h3>
                <p class="text-gray-600">
                  We'll configure your vehicles, set up maintenance schedules, and integrate any 
                  existing GPS or ELD systems. Your fleet data is imported automatically.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  Compliance Configuration (Week 2)
                </h3>
                <p class="text-gray-600">
                  Our DOT compliance experts help configure the system for your state's specific 
                  requirements and import existing driver qualification files.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  Staff Training & Go-Live (Week 3)
                </h3>
                <p class="text-gray-600">
                  Comprehensive training for instructors, office staff, and management. We'll be 
                  on-site (or virtual) for your first day to ensure a smooth transition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Calculator CTA -->
    <section class="py-16 bg-blue-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6">
          Calculate Your CDL School's Potential Savings
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          See how much time and money SchoolVision.AI can save your trucking school with our 
          specialized ROI calculator.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            @click="navigateToCalculator"
            class="bg-white text-blue-900 hover:bg-gray-100"
          >
            Calculate Your ROI
          </Button>
          <Button
            variant="secondary"
            size="lg"
            @click="navigateToDemo"
            class="border-white text-white hover:bg-white hover:text-blue-900"
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
            Ready to Transform Your CDL Training Program?
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Join the growing number of trucking schools using SchoolVision.AI to streamline 
            operations, ensure compliance, and graduate better drivers.
          </p>
          <div class="grid sm:grid-cols-3 gap-6 mb-8">
            <div>
              <div class="text-3xl font-bold text-blue-600 mb-2">30-Day</div>
              <div class="text-gray-600">Free Trial</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div class="text-gray-600">Data Migration</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-blue-600 mb-2">24/7</div>
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
    page_path: '/why-schoolvision/cdl',
    page_title: 'Why SchoolVision for CDL/Trucking Programs'
  })
})

const navigateToCalculator = () => {
  trackEvent('why_sv_cta', {
    program_type: 'cdl',
    cta_type: 'roi_calculator'
  })
  router.push('/roi-calculator')
}

const navigateToDemo = () => {
  trackEvent('why_sv_conversion', {
    program_type: 'cdl',
    cta_type: 'demo_request'
  })
  router.push('/demo')
}
</script>