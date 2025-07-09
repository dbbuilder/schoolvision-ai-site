<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="text-sm font-semibold uppercase tracking-wider text-orange-200 mb-4">VOCATIONAL EDUCATION SOLUTIONS</div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
              Accelerate Career Success with Smart Training Tools
            </h1>
            <p class="text-xl text-orange-100 mb-8">
              Help students master skills faster while streamlining your vocational program operations. 
              50+ trade schools trust SchoolVision.AI to improve completion rates and job placement.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/demo">
                <Button size="lg" variant="secondary">
                  See Platform Demo
                </Button>
              </router-link>
              <router-link to="/contact">
                <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-orange-700">
                  Talk to Sales
                </Button>
              </router-link>
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold">30% Faster Skill Mastery</p>
                    <p class="text-sm text-orange-200">AI-powered training optimization</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold">85% Job Placement Rate</p>
                    <p class="text-sm text-orange-200">Industry-aligned competency tracking</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold">20% Higher Completion</p>
                    <p class="text-sm text-orange-200">Early intervention & support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Unique Challenges -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Unique Challenges, Tailored Solutions
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Vocational education demands hands-on tracking and industry alignment. We get it.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <div class="p-6">
              <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Skills Tracking Complexity</h3>
              <p class="text-gray-600 mb-4">Tracking hands-on competencies across diverse programs is challenging with traditional tools.</p>
              <p class="text-sm font-medium text-primary-600">→ Competency-based tracking system</p>
            </div>
          </Card>
          
          <Card>
            <div class="p-6">
              <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Accelerated Timeline Pressure</h3>
              <p class="text-gray-600 mb-4">Students need to gain employable skills quickly, making every training hour critical.</p>
              <p class="text-sm font-medium text-primary-600">→ AI-optimized learning paths</p>
            </div>
          </Card>
          
          <Card>
            <div class="p-6">
              <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Industry Alignment</h3>
              <p class="text-gray-600 mb-4">Keeping pace with rapidly changing industry requirements and certification standards.</p>
              <p class="text-sm font-medium text-primary-600">→ Real-time industry integration</p>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Solutions for Vocational -->
    <section class="py-16">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Purpose-Built for Career Training
          </h2>
          <p class="text-xl text-gray-600">
            Every feature designed with vocational education in mind
          </p>
        </div>

        <div class="space-y-16">
          <!-- Competency Tracking -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Competency-Based Progress Tracking</h3>
              <p class="text-gray-600 mb-6">
                Move beyond simple attendance to track real skill development. Our platform monitors 
                hands-on lab work, safety compliance, and skill mastery with precision.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Digital Skills Portfolio</p>
                    <p class="text-sm text-gray-600">Students build verified competency records for employers</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Equipment Usage Tracking</p>
                    <p class="text-sm text-gray-600">Monitor tool proficiency and safety compliance</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Certification Readiness</p>
                    <p class="text-sm text-gray-600">AI predicts exam success and recommends focus areas</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-100 rounded-lg p-8">
              <div class="bg-gradient-to-br from-orange-100 to-orange-200 h-64 rounded-lg flex items-center justify-center">
                <p class="text-orange-600 font-semibold">Competency Tracking Dashboard</p>
              </div>
            </div>
          </div>

          <!-- Industry Partnerships -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 bg-gray-100 rounded-lg p-8">
              <div class="bg-gradient-to-br from-orange-100 to-orange-200 h-64 rounded-lg flex items-center justify-center">
                <p class="text-orange-600 font-semibold">Industry Partnership Portal</p>
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Industry Partnership Portal</h3>
              <p class="text-gray-600 mb-6">
                Connect your programs directly with employers. Track job placement, gather industry 
                feedback, and align curriculum with real workforce needs.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Employer Dashboard</p>
                    <p class="text-sm text-gray-600">Partners can view student progress and recruit directly</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Job Placement Tracking</p>
                    <p class="text-sm text-gray-600">Monitor graduate success and salary outcomes</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Curriculum Alignment</p>
                    <p class="text-sm text-gray-600">Real-time feedback on skill gaps from employers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Resource Optimization -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Equipment & Resource Management</h3>
              <p class="text-gray-600 mb-6">
                Maximize your training resources with intelligent scheduling and maintenance tracking. 
                Ensure every student gets hands-on time while extending equipment life.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Smart Lab Scheduling</p>
                    <p class="text-sm text-gray-600">AI optimizes equipment usage across all programs</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Consumables Tracking</p>
                    <p class="text-sm text-gray-600">Predictive ordering prevents training disruptions</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Maintenance Scheduling</p>
                    <p class="text-sm text-gray-600">Proactive alerts minimize equipment downtime</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-100 rounded-lg p-8">
              <div class="bg-gradient-to-br from-orange-100 to-orange-200 h-64 rounded-lg flex items-center justify-center">
                <p class="text-orange-600 font-semibold">Resource Management Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Programs We Support -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Supporting Every Trade & Technical Program
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From traditional trades to cutting-edge technology, we've got you covered
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg p-6 text-center">
            <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900">Construction Trades</h4>
            <p class="text-sm text-gray-600 mt-1">Electrical, Plumbing, HVAC</p>
          </div>
          
          <div class="bg-white rounded-lg p-6 text-center">
            <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900">Healthcare</h4>
            <p class="text-sm text-gray-600 mt-1">CNA, EMT, Medical Tech</p>
          </div>
          
          <div class="bg-white rounded-lg p-6 text-center">
            <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900">IT & Technology</h4>
            <p class="text-sm text-gray-600 mt-1">Network Admin, Cybersecurity</p>
          </div>
          
          <div class="bg-white rounded-lg p-6 text-center">
            <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900">Automotive</h4>
            <p class="text-sm text-gray-600 mt-1">Mechanics, Collision Repair</p>
          </div>
          
          <div class="bg-white rounded-lg p-6 text-center">
            <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900">Manufacturing</h4>
            <p class="text-sm text-gray-600 mt-1">Welding, CNC, Machining</p>
          </div>
          
          <div class="bg-white rounded-lg p-6 text-center">
            <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900">Cosmetology</h4>
            <p class="text-sm text-gray-600 mt-1">Hair, Esthetics, Nails</p>
          </div>
          
          <div class="bg-white rounded-lg p-6 text-center">
            <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900">Culinary Arts</h4>
            <p class="text-sm text-gray-600 mt-1">Chef Training, Hospitality</p>
          </div>
          
          <div class="bg-white rounded-lg p-6 text-center">
            <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900">Business</h4>
            <p class="text-sm text-gray-600 mt-1">Accounting, Admin Assistant</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Success Story -->
    <section class="py-16">
      <Container>
        <div class="max-w-4xl mx-auto">
          <Card class="overflow-hidden">
            <div class="p-8 md:p-12">
              <div class="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">
                SUCCESS STORY
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Metro Technical Institute Achieves 85% Job Placement
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-3">The Challenge</h4>
                  <p class="text-gray-600">
                    Metro Technical Institute struggled to track student progress across 12 different 
                    programs. Manual skill assessments were inconsistent, and employers complained 
                    that graduates weren't job-ready.
                  </p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-3">The Solution</h4>
                  <p class="text-gray-600">
                    SchoolVision.AI implemented competency-based tracking with digital portfolios. 
                    Industry partners gained direct visibility into student progress, enabling 
                    better alignment and hiring decisions.
                  </p>
                </div>
              </div>
              
              <div class="bg-orange-100 rounded-lg p-6 mb-8">
                <h4 class="font-semibold text-gray-900 mb-4">Results After 18 Months:</h4>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <p class="text-3xl font-bold text-orange-600">85%</p>
                    <p class="text-sm text-gray-600">Job Placement Rate</p>
                  </div>
                  <div>
                    <p class="text-3xl font-bold text-orange-600">30%</p>
                    <p class="text-sm text-gray-600">Faster Skill Mastery</p>
                  </div>
                  <div>
                    <p class="text-3xl font-bold text-orange-600">92%</p>
                    <p class="text-sm text-gray-600">Employer Satisfaction</p>
                  </div>
                  <div>
                    <p class="text-3xl font-bold text-orange-600">$15K</p>
                    <p class="text-sm text-gray-600">Higher Starting Salary</p>
                  </div>
                </div>
              </div>
              
              <blockquote class="text-gray-700 italic mb-6">
                "SchoolVision.AI transformed how we deliver vocational education. Students now have 
                clear paths to employment, and our industry partners are actively recruiting from 
                our programs. The ROI has been incredible."
              </blockquote>
              <div>
                <p class="font-semibold text-gray-900">Maria Rodriguez</p>
                <p class="text-gray-600">Director, Metro Technical Institute</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Integration -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Works with Your Existing Systems
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            SchoolVision.AI integrates seamlessly with vocational education tools
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 h-24 flex items-center justify-center">
              <span class="text-lg font-semibold text-gray-700">CampusCE</span>
            </div>
            <p class="text-sm text-gray-600">Registration & Billing</p>
          </div>
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 h-24 flex items-center justify-center">
              <span class="text-lg font-semibold text-gray-700">Canvas</span>
            </div>
            <p class="text-sm text-gray-600">Learning Management</p>
          </div>
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 h-24 flex items-center justify-center">
              <span class="text-lg font-semibold text-gray-700">QuickBooks</span>
            </div>
            <p class="text-sm text-gray-600">Financial Management</p>
          </div>
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 h-24 flex items-center justify-center">
              <span class="text-lg font-semibold text-gray-700">MyCAA</span>
            </div>
            <p class="text-sm text-gray-600">Military Spouse Funding</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Vocational Programs?
          </h2>
          <p class="text-xl text-orange-100 mb-8">
            Join 50+ trade schools delivering better outcomes with SchoolVision.AI
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/demo">
              <Button size="lg" variant="secondary">
                Schedule Your Demo
              </Button>
            </router-link>
            <router-link to="/contact">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-orange-700">
                Get Custom Quote
              </Button>
            </router-link>
          </div>
          <p class="mt-8 text-orange-200">
            Special pricing for small programs • Grants assistance available
          </p>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { Container, Card, Button } from '../../components/ui'
</script>