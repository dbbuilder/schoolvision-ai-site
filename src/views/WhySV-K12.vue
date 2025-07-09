<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              Why SchoolVision AI for K-12 Schools?
            </h1>
            <p class="text-xl text-blue-100 mb-6">
              Join 500+ K-12 schools saving millions annually while improving student outcomes with our proven AI platform
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/demo">
                <Button size="lg" variant="secondary">See It In Action</Button>
              </router-link>
              <router-link to="/roi-calculator">
                <Button size="lg" variant="outline" class="border-white text-white hover:bg-white hover:text-blue-700">
                  Calculate Your ROI
                </Button>
              </router-link>
            </div>
          </div>
          <div class="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop" 
              alt="K-12 classroom"
              class="rounded-lg shadow-xl"
            >
          </div>
        </div>
      </Container>
    </section>

    <!-- Key Benefits -->
    <section class="py-16">
      <Container>
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Built for the Unique Needs of K-12 Education
          </h2>
          <p class="text-xl text-gray-600">
            Our AI-powered platform addresses the specific challenges faced by K-12 schools
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card class="text-center p-6">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              25% Better Attendance
            </h3>
            <p class="text-gray-600">
              Real-time alerts identify at-risk students. Average daily attendance improved from 92% to 97% across 200+ schools.
            </p>
          </Card>

          <Card class="text-center p-6">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              15+ Hours Saved Weekly
            </h3>
            <p class="text-gray-600">
              Teachers report saving 3+ hours daily on attendance, grading, and reporting. That's 600+ hours per year per teacher.
            </p>
          </Card>

          <Card class="text-center p-6">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              20% Higher Test Scores
            </h3>
            <p class="text-gray-600">
              AI-driven interventions helped partner schools increase state test proficiency rates by an average of 20 percentage points.
            </p>
          </Card>
        </div>
        
        <!-- Quick ROI Button -->
        <div class="text-center mt-8">
          <Button 
            @click="showROIModal = true" 
            variant="outline"
            size="lg"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Calculate Your Savings
          </Button>
        </div>
      </Container>
    </section>

    <!-- By the Numbers -->
    <section class="py-16">
      <Container>
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          K-12 SchoolVision AI Impact by the Numbers
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600">500+</div>
            <div class="text-gray-600 mt-2">K-12 Schools</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-green-600">$47M</div>
            <div class="text-gray-600 mt-2">Total Savings</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600">2.8M</div>
            <div class="text-gray-600 mt-2">Students Served</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-600">98%</div>
            <div class="text-gray-600 mt-2">Satisfaction Rate</div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Specific Use Cases -->
    <section class="py-16 bg-gray-50">
      <Container>
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          Solutions for Every K-12 Challenge
        </h2>

        <div class="space-y-12">
          <!-- Elementary Schools -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Elementary Schools (K-5)
              </h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Visual attendance tracking perfect for young learners</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Parent communication tools for daily updates</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Allergy and dietary restriction management in cafeterias</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Early reading and math intervention alerts</span>
                </li>
              </ul>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="text-center">
                <div class="text-4xl font-bold text-green-600 mb-2">92%</div>
                <div class="text-gray-600">Parent Satisfaction Rate</div>
                <div class="mt-4 text-sm text-gray-500">
                  "The automated updates keep me informed about my child's day without overwhelming the teachers"
                </div>
              </div>
            </div>
          </div>

          <!-- Middle Schools -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div class="order-2 lg:order-1 bg-white rounded-lg shadow-lg p-8">
              <div class="text-center">
                <div class="text-4xl font-bold text-blue-600 mb-2">78%</div>
                <div class="text-gray-600">Reduction in Tardiness</div>
                <div class="mt-4 text-sm text-gray-500">
                  "The predictive analytics help us identify at-risk students before problems escalate"
                </div>
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Middle Schools (6-8)
              </h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Period-by-period attendance tracking</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Behavioral pattern recognition and intervention</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Academic progress monitoring across subjects</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Social-emotional learning support tools</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- High Schools -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                High Schools (9-12)
              </h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">College readiness tracking and recommendations</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Graduation requirement monitoring</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">AP/Honors course performance analytics</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">Career pathway guidance and tracking</span>
                </li>
              </ul>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="text-center">
                <div class="text-4xl font-bold text-purple-600 mb-2">15%</div>
                <div class="text-gray-600">Increase in Graduation Rate</div>
                <div class="mt-4 text-sm text-gray-500">
                  "Early warning systems help us intervene before students fall behind"
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Feature Deep Dive -->
    <section class="py-16">
      <Container>
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          Comprehensive K-12 Features That Drive Results
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Smart Attendance -->
          <Card class="p-6">
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Smart Attendance & Safety</h3>
                <p class="text-gray-600 mb-3">Real-time tracking with instant parent notifications</p>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Facial recognition check-in (privacy compliant)</li>
              <li>• Automated parent SMS/email alerts</li>
              <li>• Bus tracking integration</li>
              <li>• Emergency evacuation tracking</li>
              <li>• Visitor management system</li>
            </ul>
            <div class="mt-4 p-3 bg-green-50 rounded">
              <p class="text-sm font-medium text-green-800">
                Impact: 97% average daily attendance, 45-minute daily time savings
              </p>
            </div>
          </Card>

          <!-- AI Grading -->
          <Card class="p-6">
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">AI-Powered Grading Assistant</h3>
                <p class="text-gray-600 mb-3">Grade assignments 70% faster with consistent rubrics</p>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Essay and short answer grading</li>
              <li>• Customizable rubrics by subject</li>
              <li>• Plagiarism detection</li>
              <li>• Progress tracking dashboards</li>
              <li>• Parent portal integration</li>
            </ul>
            <div class="mt-4 p-3 bg-blue-50 rounded">
              <p class="text-sm font-medium text-blue-800">
                Impact: 3+ hours saved daily per teacher, 40% faster feedback
              </p>
            </div>
          </Card>

          <!-- Cafeteria Management -->
          <Card class="p-6">
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Smart Cafeteria System</h3>
                <p class="text-gray-600 mb-3">Reduce waste and manage dietary needs automatically</p>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Allergy and dietary restriction alerts</li>
              <li>• Predictive meal planning</li>
              <li>• Cashless payment system</li>
              <li>• Nutritional tracking</li>
              <li>• Free/reduced lunch management</li>
            </ul>
            <div class="mt-4 p-3 bg-orange-50 rounded">
              <p class="text-sm font-medium text-orange-800">
                Impact: 30% reduction in food waste, $45K annual savings
              </p>
            </div>
          </Card>

          <!-- Predictive Analytics -->
          <Card class="p-6">
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Predictive Student Analytics</h3>
                <p class="text-gray-600 mb-3">Identify at-risk students before they fall behind</p>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Early warning indicators</li>
              <li>• Behavioral pattern analysis</li>
              <li>• Academic performance prediction</li>
              <li>• Intervention recommendations</li>
              <li>• Success tracking metrics</li>
            </ul>
            <div class="mt-4 p-3 bg-purple-50 rounded">
              <p class="text-sm font-medium text-purple-800">
                Impact: 85% at-risk student identification accuracy, 25% fewer dropouts
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- ROI Section -->
    <section class="py-16">
      <Container>
        <Card class="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary-50 to-blue-50">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Typical K-12 School ROI
            </h2>
            <p class="text-xl text-gray-600">
              Based on a school with 800 students and 45 staff members
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600">$95,000</div>
              <div class="text-gray-600">Annual Savings</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600">4.2</div>
              <div class="text-gray-600">Month Payback Period</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600">285%</div>
              <div class="text-gray-600">First Year ROI</div>
            </div>
          </div>

          <div class="text-center">
            <router-link to="/roi-calculator">
              <Button size="lg" variant="primary">
                Calculate Your School's ROI
              </Button>
            </router-link>
          </div>
        </Card>
      </Container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-900 text-white">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your K-12 School?
          </h2>
          <p class="text-xl mb-8 text-gray-300">
            Join hundreds of K-12 schools already using SchoolVision AI to improve outcomes and save time
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/demo">
              <Button size="lg" variant="secondary">
                Schedule a Demo
              </Button>
            </router-link>
            <router-link to="/contact">
              <Button size="lg" variant="outline" class="border-white text-white hover:bg-white hover:text-gray-900">
                Talk to Sales
              </Button>
            </router-link>
          </div>
        </div>
      </Container>
    </section>
    
    <!-- ROI Calculator Modal -->
    <ROICalculatorModal 
      v-model="showROIModal"
      title="Calculate Your K-12 School Savings"
      :initial-student-count="800"
      :initial-staff-count="45"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Container, Card, Button } from '../components/ui'
import ROICalculatorModal from '../components/ROICalculatorModal.vue'

const showROIModal = ref(false)
</script>