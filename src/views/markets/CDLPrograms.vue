<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <Container>
        <div class="max-w-4xl">
          <div class="mb-4">
            <span class="text-primary-200">For CDL Training Programs</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Complete CDL School Management Platform
          </h1>
          <p class="text-xl text-primary-100 mb-8">
            Streamline your Commercial Driver's License training program with AI-powered 
            scheduling, compliance tracking, and job placement tools designed specifically 
            for CDL schools.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/demo">
              <Button size="lg" variant="secondary">
                See CDL Features Demo
              </Button>
            </router-link>
            <router-link to="/contact">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-primary-700">
                Talk to CDL Expert
              </Button>
            </router-link>
          </div>
        </div>
      </Container>
    </section>

    <!-- Key Stats -->
    <section class="py-12 bg-primary-50">
      <Container>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">45%</p>
            <p class="text-gray-700">Faster Training</p>
          </div>
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">98%</p>
            <p class="text-gray-700">First-Time Pass Rate</p>
          </div>
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">100%</p>
            <p class="text-gray-700">FMCSA Compliant</p>
          </div>
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">87%</p>
            <p class="text-gray-700">Job Placement Rate</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- CDL-Specific Features -->
    <section class="py-16">
      <Container>
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Built for CDL Training Excellence
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              From enrollment to job placement, manage every aspect of your CDL program 
              with tools designed by CDL training experts.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Smart Scheduling -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Intelligent Vehicle Scheduling</h3>
              <p class="text-gray-600 mb-4">
                Maximize truck utilization with AI-powered scheduling that balances 
                student needs, instructor availability, and vehicle maintenance.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Automatic conflict resolution
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Maintenance scheduling
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Student progress tracking
                </li>
              </ul>
            </Card>

            <!-- Compliance Management -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">FMCSA Compliance Tracking</h3>
              <p class="text-gray-600 mb-4">
                Stay audit-ready with automated tracking of all Federal Motor Carrier 
                Safety Administration requirements and state-specific regulations.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Entry-level driver training
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  TPR provider compliance
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Student record retention
                </li>
              </ul>
            </Card>

            <!-- Skills Assessment -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Digital Skills Tracking</h3>
              <p class="text-gray-600 mb-4">
                Track every pre-trip inspection, backing maneuver, and road test with 
                digital scorecards that prepare students for success.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Digital evaluation forms
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Progress dashboards
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  DMV test prep tracking
                </li>
              </ul>
            </Card>

            <!-- Job Placement -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Career Services Portal</h3>
              <p class="text-gray-600 mb-4">
                Connect graduates with trucking companies. Manage job postings, track 
                placements, and maintain employer relationships in one platform.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Employer network portal
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Graduate tracking
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Placement reporting
                </li>
              </ul>
            </Card>

            <!-- Financial Aid -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Financial Management</h3>
              <p class="text-gray-600 mb-4">
                Handle WIOA funding, VA benefits, employer sponsorships, and payment 
                plans all in one integrated financial system.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  WIOA compliance
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  VA benefit processing
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Automated billing
                </li>
              </ul>
            </Card>

            <!-- Student Portal -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Mobile Student App</h3>
              <p class="text-gray-600 mb-4">
                Students access schedules, study materials, practice tests, and track 
                their progress toward CDL certification from any device.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time schedule updates
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Digital pre-trip checklists
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Practice test library
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </section>

    <!-- Workflow Section -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Streamlined CDL Training Workflow
            </h2>
            <p class="text-xl text-gray-600">
              From application to employment in one seamless platform
            </p>
          </div>

          <div class="relative">
            <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2 hidden md:block"></div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div class="relative">
                <div class="bg-white rounded-lg p-6 shadow-sm text-center">
                  <div class="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 class="font-semibold text-gray-900 mb-2">Enrollment</h3>
                  <p class="text-sm text-gray-600">
                    Online applications, document verification, and financial aid processing
                  </p>
                </div>
              </div>

              <div class="relative">
                <div class="bg-white rounded-lg p-6 shadow-sm text-center">
                  <div class="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 class="font-semibold text-gray-900 mb-2">Classroom</h3>
                  <p class="text-sm text-gray-600">
                    Digital curriculum, attendance tracking, and knowledge assessments
                  </p>
                </div>
              </div>

              <div class="relative">
                <div class="bg-white rounded-lg p-6 shadow-sm text-center">
                  <div class="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 class="font-semibold text-gray-900 mb-2">Behind-the-Wheel</h3>
                  <p class="text-sm text-gray-600">
                    Smart scheduling, skill evaluations, and DMV test preparation
                  </p>
                </div>
              </div>

              <div class="relative">
                <div class="bg-white rounded-lg p-6 shadow-sm text-center">
                  <div class="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 class="font-semibold text-gray-900 mb-2">Job Placement</h3>
                  <p class="text-sm text-gray-600">
                    Employer connections, interview scheduling, and career tracking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Success Story -->
    <section class="py-16">
      <Container>
        <div class="max-w-4xl mx-auto">
          <Card class="p-8">
            <div class="flex items-start gap-4 mb-6">
              <div class="flex-shrink-0">
                <svg class="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">
                  Professional Truck Driving Academy: 98% First-Time Pass Rate
                </h3>
                <p class="text-gray-600 mb-4">
                  "SchoolVision.AI transformed our CDL program. We went from paper-based tracking 
                  to a fully digital operation. Our pass rates increased by 23%, and we cut 
                  administrative time by 60%. The job placement portal alone justified the investment."
                </p>
                <p class="text-sm text-gray-500">
                  <strong>Robert Martinez</strong>, Director at Professional Truck Driving Academy
                </p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div class="text-center">
                <p class="text-3xl font-bold text-primary-600">98%</p>
                <p class="text-sm text-gray-600">Pass rate</p>
              </div>
              <div class="text-center">
                <p class="text-3xl font-bold text-primary-600">60%</p>
                <p class="text-sm text-gray-600">Less admin time</p>
              </div>
              <div class="text-center">
                <p class="text-3xl font-bold text-primary-600">450+</p>
                <p class="text-sm text-gray-600">Graduates placed</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Integration Partners -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Integrated with Your Existing Tools
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            Works seamlessly with DMV systems, FMCSA portals, and major trucking companies
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="bg-white rounded-lg p-4 flex items-center justify-center h-20">
              <span class="text-gray-700 font-medium">DMV Systems</span>
            </div>
            <div class="bg-white rounded-lg p-4 flex items-center justify-center h-20">
              <span class="text-gray-700 font-medium">FMCSA Portal</span>
            </div>
            <div class="bg-white rounded-lg p-4 flex items-center justify-center h-20">
              <span class="text-gray-700 font-medium">DOT Clearinghouse</span>
            </div>
            <div class="bg-white rounded-lg p-4 flex items-center justify-center h-20">
              <span class="text-gray-700 font-medium">QuickBooks</span>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Modernize Your CDL Program?
          </h2>
          <p class="text-xl text-primary-100 mb-8">
            Join leading CDL schools using SchoolVision.AI to train safer drivers faster 
            while staying 100% compliant with all regulations.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/demo">
              <Button size="lg" variant="secondary">
                Schedule CDL Demo
              </Button>
            </router-link>
            <router-link to="/roi-calculator">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-primary-700">
                Calculate Your Savings
              </Button>
            </router-link>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { Container, Card, Button } from '../../components/ui'
</script>