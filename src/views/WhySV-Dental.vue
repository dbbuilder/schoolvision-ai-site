<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-indigo-700 to-blue-700 text-white">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <nav class="mb-8">
          <router-link to="/markets/vocational" class="text-indigo-200 hover:text-white transition-colors">
            ← Back to Vocational Schools
          </router-link>
        </nav>
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          Why SchoolVision.AI for Dental Programs
        </h1>
        <p class="text-xl text-indigo-100 max-w-3xl">
          Specifically designed for dental assisting and hygiene programs with comprehensive 
          patient management, clinical tracking, and the tools needed for accreditation success.
        </p>
      </div>
    </section>

    <!-- Industry Understanding -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Created by Dental Educators Who Understand Your Needs
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Our team includes dental hygienists, clinic directors, and accreditation specialists 
            who understand the unique requirements of dental education. We've built SchoolVision.AI 
            to solve the real challenges dental programs face every day.
          </p>
          <div class="grid gap-6">
            <Card>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Patient Care Excellence</h3>
              <p class="text-gray-600 mb-4">
                Manage your teaching clinic like a professional practice. From patient screening 
                to treatment planning, provide exceptional care while meeting educational requirements.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">HIPAA-compliant digital patient records</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Online patient screening and scheduling</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Automated treatment plan approvals</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Accreditation-Ready Documentation</h3>
              <p class="text-gray-600 mb-4">
                Track every procedure, competency, and clinical experience exactly as CODA requires. 
                Generate accreditation reports instantly and stay inspection-ready year-round.
              </p>
              <div class="bg-indigo-50 p-4 rounded-lg">
                <p class="text-indigo-900 font-semibold">100% CODA compliance with automated tracking</p>
              </div>
            </Card>

            <Card>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Instrument & Supply Management</h3>
              <p class="text-gray-600">
                Track expensive instruments and supplies with RFID technology. Know exactly what's 
                in use, what's in sterilization, and what needs replacement.
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
          Features Designed for Dental Education Success
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Digital Treatment Planning
            </h3>
            <p class="text-gray-600 mb-4">
              Students create comprehensive treatment plans with faculty approval workflows. 
              Integrated with patient records and automatically tracks completed procedures.
            </p>
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Periodontal Charting System
            </h3>
            <p class="text-gray-600 mb-4">
              Voice-activated perio charting allows students to work efficiently while maintaining 
              infection control. Automatic calculations and risk assessments included.
            </p>
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Radiograph Quality Tracking
            </h3>
            <p class="text-gray-600 mb-4">
              Digital X-ray submission with instructor critique tools. Track technique errors 
              and ensure students meet radiograph requirements for graduation.
            </p>
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Smart Patient Matching
            </h3>
            <p class="text-gray-600 mb-4">
              AI matches patients to students based on procedure requirements, skill level, 
              and time availability. Maximize educational value of every appointment.
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
          Trusted by Top Dental Programs
        </h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card class="text-center">
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
            <blockquote class="text-gray-600 italic mb-4">
              "SchoolVision.AI revolutionized our clinic operations. Patient volume increased 40% 
              and our students are completing requirements faster than ever before."
            </blockquote>
            <cite class="text-gray-900 font-semibold">Dr. Jennifer Lee, DDS</cite>
            <p class="text-gray-500 text-sm">Program Director, Advanced Dental Institute</p>
          </Card>

          <Card class="text-center">
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500">Image Placeholder</div>
            <blockquote class="text-gray-600 italic mb-4">
              "The instrument tracking alone saves us thousands annually. But the real win is 
              how it streamlines accreditation - what took weeks now takes hours."
            </blockquote>
            <cite class="text-gray-900 font-semibold">Robert Chen, RDH</cite>
            <p class="text-gray-500 text-sm">Clinic Director, Regional Dental Academy</p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Implementation -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Implementation Tailored for Dental Programs
          </h2>
          <p class="text-lg text-gray-600 mb-12">
            We know you can't close your clinic for a system implementation. Our dental-specific 
            process ensures continuous patient care while transitioning to SchoolVision.AI.
          </p>
        </div>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  Clinic Setup & Patient Import (Week 1)
                </h3>
                <p class="text-gray-600">
                  Configure operatories, fee schedules, and procedure codes. Import existing 
                  patient records and active treatment plans securely.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  Requirements & Competencies (Week 2)
                </h3>
                <p class="text-gray-600">
                  Set up procedure requirements, competency checklists, and grading rubrics. 
                  Configure CODA-compliant tracking and reporting.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  Training & Launch Support (Week 3)
                </h3>
                <p class="text-gray-600">
                  Hands-on training for faculty, students, and clinic staff. Full support 
                  during first week of patient care to ensure smooth operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Calculator CTA -->
    <section class="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6">
          Calculate Your Dental Program's ROI
        </h2>
        <p class="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Discover how SchoolVision.AI can increase patient volume, reduce supply costs, and 
          streamline operations with our dental program calculator.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            @click="navigateToCalculator"
            class="bg-white text-indigo-700 hover:bg-gray-100"
          >
            Calculate Your ROI
          </Button>
          <Button
            variant="secondary"
            size="lg"
            @click="navigateToDemo"
            class="border-white text-white hover:bg-white hover:text-indigo-700"
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
            Ready to Modernize Your Dental Program?
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Join leading dental programs using SchoolVision.AI to provide better patient care, 
            streamline clinic operations, and achieve accreditation excellence.
          </p>
          <div class="grid sm:grid-cols-3 gap-6 mb-8">
            <div>
              <div class="text-3xl font-bold text-indigo-600 mb-2">40%</div>
              <div class="text-gray-600">Increase in Patient Volume</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-indigo-600 mb-2">25%</div>
              <div class="text-gray-600">Faster Graduation</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-indigo-600 mb-2">$15K</div>
              <div class="text-gray-600">Annual Supply Savings</div>
            </div>
          </div>
          <Button
            variant="primary"
            size="xl"
            @click="navigateToDemo"
          >
            Start Your Free Trial
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
    page_path: '/why-schoolvision/dental',
    page_title: 'Why SchoolVision for Dental Programs'
  })
})

const navigateToCalculator = () => {
  trackEvent('why_sv_cta', {
    program_type: 'dental',
    cta_type: 'roi_calculator'
  })
  router.push('/roi-calculator')
}

const navigateToDemo = () => {
  trackEvent('why_sv_conversion', {
    program_type: 'dental',
    cta_type: 'demo_request'
  })
  router.push('/demo')
}
</script>