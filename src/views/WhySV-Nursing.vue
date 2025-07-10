<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-teal-700 to-blue-700 text-white">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <nav class="mb-8">
          <router-link to="/markets/vocational" class="text-teal-200 hover:text-white transition-colors">
            ← Back to Vocational Schools
          </router-link>
        </nav>
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          Why SchoolVision.AI for Nursing Programs
        </h1>
        <p class="text-xl text-teal-100 max-w-3xl">
          Purpose-built for nursing education with comprehensive clinical tracking, simulation 
          management, and the tools needed to prepare tomorrow's healthcare heroes.
        </p>
      </div>
    </section>

    <!-- Industry Understanding -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Designed by Nursing Educators, For Nursing Educators
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Our team includes nurse educators, clinical coordinators, and simulation lab directors 
            who understand the complexities of nursing education. We've built SchoolVision.AI to 
            address the unique challenges of preparing students for the demands of modern healthcare.
          </p>
          <div class="grid gap-6">
            <Card>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Clinical Rotation Excellence</h3>
              <p class="text-gray-600 mb-4">
                Streamline the complex process of coordinating clinical placements across multiple 
                healthcare facilities. Track requirements, manage documentation, and ensure every 
                student gets the experiences they need.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Automated clinical site matching based on requirements</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Real-time tracking of clinical hours by specialty</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Mobile app for preceptor evaluations</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Simulation Lab Optimization</h3>
              <p class="text-gray-600 mb-4">
                Maximize your simulation lab investment with intelligent scheduling, scenario management, 
                and competency tracking. Every minute in the lab becomes a valuable learning experience.
              </p>
              <div class="bg-teal-50 p-4 rounded-lg">
                <p class="text-teal-900 font-semibold">35% increase in simulation lab utilization</p>
              </div>
            </Card>

            <Card>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">NCLEX Success Tracking</h3>
              <p class="text-gray-600">
                Identify at-risk students early with predictive analytics. Track practice exam performance, 
                remediation efforts, and correlate clinical performance with NCLEX readiness.
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
          Features Built for Nursing Education Excellence
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Clinical Passport System
            </h3>
            <p class="text-gray-600 mb-4">
              Students carry a digital passport documenting every clinical experience, skill 
              performed, and competency achieved. Preceptors sign off electronically in real-time.
            </p>
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Medication Administration Training
            </h3>
            <p class="text-gray-600 mb-4">
              Practice medication calculations, MAR documentation, and drug interaction checking 
              in a safe, simulated environment that mirrors hospital systems.
            </p>
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Automated Scenario Programming
            </h3>
            <p class="text-gray-600 mb-4">
              Pre-programmed simulation scenarios that automatically control high-fidelity mannequins. 
              Consistent experiences for every student with detailed performance analytics.
            </p>
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Immunization & Compliance Tracking
            </h3>
            <p class="text-gray-600 mb-4">
              Never miss a required immunization or certification. Automated alerts ensure students 
              maintain compliance for all clinical sites.
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
          Trusted by Leading Nursing Programs
        </h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card class="text-center">
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
            <blockquote class="text-gray-600 italic mb-4">
              "SchoolVision.AI transformed our clinical coordination. What used to take days now 
              takes hours, and our NCLEX pass rates improved to 92% first-time."
            </blockquote>
            <cite class="text-gray-900 font-semibold">Dr. Patricia Williams, RN</cite>
            <p class="text-gray-500 text-sm">Dean of Nursing, Regional Nursing Institute</p>
          </Card>

          <Card class="text-center">
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
            <blockquote class="text-gray-600 italic mb-4">
              "The simulation lab scheduling alone justified the investment. We're seeing 35% better 
              utilization and students are more prepared for clinical rotations."
            </blockquote>
            <cite class="text-gray-900 font-semibold">James Mitchell, MSN</cite>
            <p class="text-gray-500 text-sm">Simulation Director, Healthcare Training Academy</p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Implementation -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Implementation Designed for Nursing Programs
          </h2>
          <p class="text-lg text-gray-600 mb-12">
            We understand the critical nature of nursing education. Our implementation process 
            ensures zero disruption to your clinical schedules while getting you up and running 
            quickly.
          </p>
        </div>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  Clinical Site Setup (Week 1)
                </h3>
                <p class="text-gray-600">
                  Import clinical site agreements, configure rotation schedules, and set up 
                  requirement tracking for each facility. Integrate with existing systems.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  Skills & Simulation Configuration (Week 2)
                </h3>
                <p class="text-gray-600">
                  Set up competency checklists, configure simulation scenarios, and import 
                  existing student records. Train simulation staff on new capabilities.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  Faculty Training & Launch (Week 3)
                </h3>
                <p class="text-gray-600">
                  Comprehensive training for faculty, clinical coordinators, and lab staff. 
                  Soft launch with pilot group before full deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Calculator CTA -->
    <section class="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6">
          Calculate Your Nursing Program's ROI
        </h2>
        <p class="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
          See how SchoolVision.AI can improve outcomes while reducing administrative burden 
          with our nursing program-specific ROI calculator.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            @click="navigateToCalculator"
            class="bg-white text-teal-700 hover:bg-gray-100"
          >
            Calculate Your ROI
          </Button>
          <Button
            variant="secondary"
            size="lg"
            @click="navigateToDemo"
            class="border-white text-white hover:bg-white hover:text-teal-700"
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
            Ready to Elevate Your Nursing Program?
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Join nursing programs nationwide using SchoolVision.AI to streamline operations, 
            improve clinical coordination, and achieve better student outcomes.
          </p>
          <div class="grid sm:grid-cols-3 gap-6 mb-8">
            <div>
              <div class="text-3xl font-bold text-teal-600 mb-2">92%</div>
              <div class="text-gray-600">Average NCLEX Pass Rate</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-teal-600 mb-2">100%</div>
              <div class="text-gray-600">Clinical Compliance</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-teal-600 mb-2">24/7</div>
              <div class="text-gray-600">Support Available</div>
            </div>
          </div>
          <Button
            variant="primary"
            size="xl"
            @click="navigateToDemo"
          >
            Request Your Demo Today
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
    page_path: '/why-schoolvision/nursing',
    page_title: 'Why SchoolVision for Nursing Programs'
  })
})

const navigateToCalculator = () => {
  trackEvent('why_sv_cta', {
    program_type: 'nursing',
    cta_type: 'roi_calculator'
  })
  router.push('/roi-calculator')
}

const navigateToDemo = () => {
  trackEvent('why_sv_conversion', {
    program_type: 'nursing',
    cta_type: 'demo_request'
  })
  router.push('/demo')
}
</script>