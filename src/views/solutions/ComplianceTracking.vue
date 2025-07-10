<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <Container>
        <div class="max-w-4xl">
          <div class="mb-4">
            <router-link to="/solutions" class="text-primary-200 hover:text-white inline-flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              All Solutions
            </router-link>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Compliance Tracking & Reporting
          </h1>
          <p class="text-xl text-primary-100 mb-8">
            Stay audit-ready year-round with automated compliance monitoring that tracks 
            federal, state, and local requirements while reducing administrative burden by 80%.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/demo">
              <Button size="lg" variant="secondary">
                See Compliance Dashboard
              </Button>
            </router-link>
            <router-link to="/contact">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-primary-700">
                Get Compliance Assessment
              </Button>
            </router-link>
          </div>
        </div>
      </Container>
    </section>

    <!-- Compliance Stats -->
    <section class="py-12 bg-primary-50">
      <Container>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">100%</p>
            <p class="text-gray-700">Audit Success Rate</p>
          </div>
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">500+</p>
            <p class="text-gray-700">Requirements Tracked</p>
          </div>
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">80%</p>
            <p class="text-gray-700">Time Saved</p>
          </div>
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">Real-time</p>
            <p class="text-gray-700">Alert System</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Features Grid -->
    <section class="py-16">
      <Container>
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Compliance Management
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Track every regulation, deadline, and requirement across all departments 
              with intelligent automation and proactive alerts.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Federal Compliance -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Federal Requirements</h3>
              <p class="text-gray-600 mb-4">
                Automatically track FERPA, Title IX, IDEA, Section 504, and all other 
                federal education requirements with built-in templates and workflows.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  FERPA privacy compliance
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Title IX reporting
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  ADA accessibility
                </li>
              </ul>
            </Card>

            <!-- State Compliance -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">State & Local Mandates</h3>
              <p class="text-gray-600 mb-4">
                Pre-configured for all 50 states' education requirements. Automatically 
                updates when regulations change, keeping you always compliant.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  State testing requirements
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Teacher certification tracking
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Local health regulations
                </li>
              </ul>
            </Card>

            <!-- Document Management -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Smart Document Control</h3>
              <p class="text-gray-600 mb-4">
                Central repository for all compliance documents with version control, 
                audit trails, and automatic retention policy enforcement.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Automatic versioning
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Digital signatures
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Retention schedules
                </li>
              </ul>
            </Card>

            <!-- Audit Preparation -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Audit-Ready Always</h3>
              <p class="text-gray-600 mb-4">
                Generate comprehensive audit packages in minutes. Practice audits identify 
                gaps before external reviews. Pass every inspection with confidence.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  One-click audit reports
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Evidence collection
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Gap analysis tools
                </li>
              </ul>
            </Card>

            <!-- Training & Certifications -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Training Management</h3>
              <p class="text-gray-600 mb-4">
                Track mandatory training, certifications, and professional development. 
                Automated reminders ensure 100% completion rates before deadlines.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Automated assignments
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Completion tracking
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Certificate management
                </li>
              </ul>
            </Card>

            <!-- Real-Time Monitoring -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Proactive Alerts</h3>
              <p class="text-gray-600 mb-4">
                Get notified before compliance issues arise. Smart alerts prioritize by 
                risk level and deadline urgency, preventing violations before they happen.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Deadline reminders
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Risk prioritization
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Escalation workflows
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </section>

    <!-- Compliance Dashboard Preview -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Everything at a Glance
            </h2>
            <p class="text-xl text-gray-600">
              Monitor compliance status across all departments from one unified dashboard
            </p>
          </div>

          <Card class="p-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-24 h-24 mx-auto mb-4 relative">
                  <svg class="w-24 h-24 transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="#e5e7eb" stroke-width="8" fill="none" />
                    <circle cx="48" cy="48" r="40" stroke="#10b981" stroke-width="8" fill="none" 
                            stroke-dasharray="251.2" stroke-dashoffset="25.12" />
                  </svg>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-2xl font-bold text-gray-900">90%</span>
                  </div>
                </div>
                <h3 class="text-lg font-semibold text-gray-900">Overall Compliance</h3>
                <p class="text-gray-600 text-sm">15 items need attention</p>
              </div>

              <div class="text-center">
                <div class="bg-yellow-50 rounded-lg p-6">
                  <p class="text-3xl font-bold text-yellow-600 mb-2">3</p>
                  <h3 class="text-lg font-semibold text-gray-900">Upcoming Deadlines</h3>
                  <p class="text-gray-600 text-sm">Next: Title IX report in 5 days</p>
                </div>
              </div>

              <div class="text-center">
                <div class="bg-green-50 rounded-lg p-6">
                  <p class="text-3xl font-bold text-green-600 mb-2">527</p>
                  <h3 class="text-lg font-semibold text-gray-900">Requirements Met</h3>
                  <p class="text-gray-600 text-sm">Last audit: 100% pass rate</p>
                </div>
              </div>
            </div>
          </Card>
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
                  Riverside District: From 3 Failed Audits to Perfect Score
                </h3>
                <p class="text-gray-600 mb-4">
                  "After three consecutive failed state audits, we implemented SchoolVision.AI's 
                  compliance tracking. In our next audit, we scored 100% with zero findings. The 
                  system caught issues we didn't even know existed and helped us fix them proactively."
                </p>
                <p class="text-sm text-gray-500">
                  <strong>Dr. Patricia Wilson</strong>, Superintendent at Riverside School District
                </p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div class="text-center">
                <p class="text-3xl font-bold text-primary-600">100%</p>
                <p class="text-sm text-gray-600">Audit score</p>
              </div>
              <div class="text-center">
                <p class="text-3xl font-bold text-primary-600">$450K</p>
                <p class="text-sm text-gray-600">Fines avoided</p>
              </div>
              <div class="text-center">
                <p class="text-3xl font-bold text-primary-600">20 hrs</p>
                <p class="text-sm text-gray-600">Weekly time saved</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Never Fail Another Compliance Audit
          </h2>
          <p class="text-xl text-primary-100 mb-8">
            Join hundreds of districts that trust SchoolVision.AI to keep them compliant, 
            audit-ready, and focused on education.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/demo">
              <Button size="lg" variant="secondary">
                Get Free Compliance Assessment
              </Button>
            </router-link>
            <router-link to="/contact">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-primary-700">
                Talk to Compliance Expert
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