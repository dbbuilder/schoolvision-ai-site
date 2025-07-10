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
            Predictive Analytics & Insights
          </h1>
          <p class="text-xl text-primary-100 mb-8">
            Transform data into action with AI-powered analytics that predict outcomes, 
            identify at-risk students, and optimize resources before problems arise.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/demo">
              <Button size="lg" variant="secondary">
                See Predictive Models in Action
              </Button>
            </router-link>
            <router-link to="/contact">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-primary-700">
                Request Analytics Demo
              </Button>
            </router-link>
          </div>
        </div>
      </Container>
    </section>

    <!-- Impact Metrics -->
    <section class="py-12 bg-primary-50">
      <Container>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">85%</p>
            <p class="text-gray-700">Accuracy Rate</p>
          </div>
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">30 days</p>
            <p class="text-gray-700">Early Warning</p>
          </div>
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">45%</p>
            <p class="text-gray-700">Dropout Reduction</p>
          </div>
          <div class="text-center">
            <p class="text-4xl font-bold text-primary-600 mb-2">$2.3M</p>
            <p class="text-gray-700">Average Savings</p>
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
              See the Future, Shape the Outcome
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI analyzes millions of data points to predict trends, identify risks, 
              and recommend interventions that actually work.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Student Success Prediction -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Early Warning System</h3>
              <p class="text-gray-600 mb-4">
                Identify students at risk of falling behind weeks before it happens. Get 
                specific intervention recommendations based on what works for similar students.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Academic risk indicators
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Behavioral pattern analysis
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized interventions
                </li>
              </ul>
            </Card>

            <!-- Enrollment Forecasting -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Enrollment Predictions</h3>
              <p class="text-gray-600 mb-4">
                Accurately forecast enrollment trends by grade, school, and program. Plan 
                staffing, facilities, and budgets with confidence up to 5 years out.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Demographic analysis
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Migration patterns
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Program demand forecasting
                </li>
              </ul>
            </Card>

            <!-- Resource Optimization -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Budget Optimization</h3>
              <p class="text-gray-600 mb-4">
                Predict budget needs, identify cost-saving opportunities, and optimize 
                resource allocation. See the financial impact of decisions before you make them.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Cost-per-student analysis
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Resource utilization rates
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  ROI predictions
                </li>
              </ul>
            </Card>

            <!-- Performance Forecasting -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Academic Outcomes</h3>
              <p class="text-gray-600 mb-4">
                Predict test scores, graduation rates, and college readiness. Identify which 
                programs and interventions will have the greatest impact on outcomes.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Test score predictions
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Graduation likelihood
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Program effectiveness
                </li>
              </ul>
            </Card>

            <!-- Staffing Analytics -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Workforce Planning</h3>
              <p class="text-gray-600 mb-4">
                Predict staffing needs, identify retention risks, and optimize schedules. 
                Know which teachers need support before burnout happens.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Turnover predictions
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Workload balancing
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Professional development needs
                </li>
              </ul>
            </Card>

            <!-- Custom Dashboards -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Real-Time Dashboards</h3>
              <p class="text-gray-600 mb-4">
                Create custom dashboards for every role. From superintendent overview to 
                teacher classroom insights, everyone gets the data they need to succeed.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Role-based views
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Drag-and-drop widgets
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Mobile responsive
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </section>

    <!-- Analytics in Action -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              From Data to Decisions in Seconds
            </h2>
            <p class="text-xl text-gray-600">
              See how our predictive models turn complex data into clear, actionable insights
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Student Risk Dashboard</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p class="font-medium text-gray-900">High Risk Students</p>
                    <p class="text-sm text-gray-600">Immediate intervention needed</p>
                  </div>
                  <span class="text-2xl font-bold text-red-600">23</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <p class="font-medium text-gray-900">Medium Risk Students</p>
                    <p class="text-sm text-gray-600">Monitor closely</p>
                  </div>
                  <span class="text-2xl font-bold text-yellow-600">67</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p class="font-medium text-gray-900">On Track Students</p>
                    <p class="text-sm text-gray-600">Meeting all benchmarks</p>
                  </div>
                  <span class="text-2xl font-bold text-green-600">410</span>
                </div>
              </div>
            </Card>

            <Card class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Intervention Success Rates</h3>
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-600">Tutoring Program</span>
                    <span class="text-sm font-medium text-gray-900">87%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-green-600 h-2 rounded-full" style="width: 87%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-600">Mentorship Program</span>
                    <span class="text-sm font-medium text-gray-900">72%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-blue-600 h-2 rounded-full" style="width: 72%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-600">Parent Engagement</span>
                    <span class="text-sm font-medium text-gray-900">91%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-purple-600 h-2 rounded-full" style="width: 91%"></div>
                  </div>
                </div>
              </div>
            </Card>
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">
                  Valley Unified: 45% Reduction in Dropout Rate
                </h3>
                <p class="text-gray-600 mb-4">
                  "SchoolVision.AI's predictive analytics identified 127 at-risk students we had 
                  completely missed. With targeted interventions based on the AI's recommendations, 
                  we reduced our dropout rate from 12% to 6.6% in just two years."
                </p>
                <p class="text-sm text-gray-500">
                  <strong>Michael Rodriguez</strong>, Data Director at Valley Unified School District
                </p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div class="text-center">
                <p class="text-3xl font-bold text-primary-600">45%</p>
                <p class="text-sm text-gray-600">Fewer dropouts</p>
              </div>
              <div class="text-center">
                <p class="text-3xl font-bold text-primary-600">$3.2M</p>
                <p class="text-sm text-gray-600">Funding retained</p>
              </div>
              <div class="text-center">
                <p class="text-3xl font-bold text-primary-600">89%</p>
                <p class="text-sm text-gray-600">Intervention success</p>
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
            Turn Your Data Into Your Superpower
          </h2>
          <p class="text-xl text-primary-100 mb-8">
            Join forward-thinking districts using predictive analytics to improve outcomes, 
            save resources, and change students' lives.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/demo">
              <Button size="lg" variant="secondary">
                See Your Data's Potential
              </Button>
            </router-link>
            <router-link to="/roi-calculator">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-primary-700">
                Calculate Your Impact
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