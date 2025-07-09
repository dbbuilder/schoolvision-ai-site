<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="text-sm font-semibold uppercase tracking-wider text-blue-200 mb-4">K-12 SOLUTIONS</div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
              Transform Your K-12 School with AI-Powered Intelligence
            </h1>
            <p class="text-xl text-blue-100 mb-8">
              Join 300+ K-12 schools using SchoolVision.AI to improve student outcomes, 
              increase safety, and save thousands of hours annually.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/demo">
                <Button size="lg" variant="secondary">
                  See It In Action
                </Button>
              </router-link>
              <router-link to="/roi-calculator">
                <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-blue-700">
                  Calculate Your Savings
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
                    <p class="font-semibold">95% Attendance Accuracy</p>
                    <p class="text-sm text-blue-200">Automated tracking saves 30 min/day</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold">20% Reduction in Incidents</p>
                    <p class="text-sm text-blue-200">Predictive alerts prevent problems</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold">$50K+ Annual Savings</p>
                    <p class="text-sm text-blue-200">Average savings per school</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Pain Points Section -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            We Understand K-12 Challenges
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            SchoolVision.AI was built by educators, for educators. We know the daily struggles you face.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <div class="p-6">
              <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Time-Consuming Attendance</h3>
              <p class="text-gray-600 mb-4">Teachers waste 15-30 minutes daily on manual attendance, reducing instruction time.</p>
              <p class="text-sm font-medium text-primary-600">→ Automated attendance in seconds</p>
            </div>
          </Card>
          
          <Card>
            <div class="p-6">
              <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Student Safety Concerns</h3>
              <p class="text-gray-600 mb-4">Identifying at-risk students often happens too late to prevent incidents.</p>
              <p class="text-sm font-medium text-primary-600">→ AI-powered early warning system</p>
            </div>
          </Card>
          
          <Card>
            <div class="p-6">
              <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Limited Data Insights</h3>
              <p class="text-gray-600 mb-4">Critical patterns in attendance, behavior, and performance go unnoticed.</p>
              <p class="text-sm font-medium text-primary-600">→ Comprehensive analytics dashboard</p>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Solutions Grid -->
    <section class="py-16">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Complete K-12 Intelligence Platform
          </h2>
          <p class="text-xl text-gray-600">
            Every tool you need to run a safer, smarter school
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <!-- Smart Attendance -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Smart Attendance</h3>
              <p class="text-gray-600 mb-3">
                Automated attendance tracking with facial recognition, RFID, or mobile check-in. 
                Instant parent notifications for absences.
              </p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• 95% accuracy rate</li>
                <li>• Saves 30 minutes per class daily</li>
                <li>• Automatic parent notifications</li>
                <li>• State compliance reporting</li>
              </ul>
            </div>
          </div>

          <!-- Safety Monitoring -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Safety & Security</h3>
              <p class="text-gray-600 mb-3">
                AI-powered monitoring identifies potential safety concerns before they escalate. 
                Real-time alerts for unauthorized visitors.
              </p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Visitor management system</li>
                <li>• Behavioral pattern analysis</li>
                <li>• Emergency response coordination</li>
                <li>• Weapon detection integration</li>
              </ul>
            </div>
          </div>

          <!-- Cafeteria Analytics -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Cafeteria Intelligence</h3>
              <p class="text-gray-600 mb-3">
                Reduce food waste by 30% with predictive ordering. Track nutrition and manage 
                free/reduced lunch programs efficiently.
              </p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Predictive meal planning</li>
                <li>• Allergen tracking & alerts</li>
                <li>• Automated billing & accounts</li>
                <li>• Nutrition analysis</li>
              </ul>
            </div>
          </div>

          <!-- Parent Communication -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Parent Engagement</h3>
              <p class="text-gray-600 mb-3">
                Keep parents informed with real-time updates on attendance, grades, and behavior. 
                Two-way communication portal.
              </p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Mobile app for parents</li>
                <li>• Automated progress reports</li>
                <li>• Event & assignment reminders</li>
                <li>• Translation in 100+ languages</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Success Story -->
    <section class="py-16 bg-primary-50">
      <Container>
        <div class="max-w-4xl mx-auto">
          <Card class="overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="p-8 md:p-12">
                <div class="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
                  SUCCESS STORY
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">
                  Riverside School District Transforms Operations
                </h3>
                <blockquote class="text-gray-700 mb-6 italic">
                  "SchoolVision.AI completely transformed how we operate. We've saved over 
                  1,000 staff hours this year alone, reduced behavioral incidents by 25%, 
                  and our teachers can focus on what matters most - teaching."
                </blockquote>
                <div class="mb-6">
                  <p class="font-semibold text-gray-900">Dr. Sarah Johnson</p>
                  <p class="text-gray-600">Superintendent, Riverside School District</p>
                </div>
                <div class="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p class="text-2xl font-bold text-primary-600">1,000+</p>
                    <p class="text-sm text-gray-600">Hours Saved</p>
                  </div>
                  <div>
                    <p class="text-2xl font-bold text-primary-600">25%</p>
                    <p class="text-sm text-gray-600">Fewer Incidents</p>
                  </div>
                  <div>
                    <p class="text-2xl font-bold text-primary-600">$127K</p>
                    <p class="text-sm text-gray-600">Annual Savings</p>
                  </div>
                </div>
              </div>
              <div class="bg-gradient-to-br from-primary-600 to-primary-800 p-8 md:p-12 text-white">
                <h4 class="text-xl font-semibold mb-6">Implementation Highlights:</h4>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-green-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Deployed across 12 schools in 6 weeks</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-green-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>98% teacher adoption rate</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-green-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Integrated with existing PowerSchool SIS</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-green-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>ROI achieved in month 4</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Integrations -->
    <section class="py-16">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Seamless Integration with Your Existing Systems
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            SchoolVision.AI works with the tools you already use. No need to replace your SIS.
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 h-24 flex items-center justify-center">
              <span class="text-lg font-semibold text-gray-700">PowerSchool</span>
            </div>
            <p class="text-sm text-gray-600">Full integration</p>
          </div>
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 h-24 flex items-center justify-center">
              <span class="text-lg font-semibold text-gray-700">Infinite Campus</span>
            </div>
            <p class="text-sm text-gray-600">Full integration</p>
          </div>
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 h-24 flex items-center justify-center">
              <span class="text-lg font-semibold text-gray-700">Skyward</span>
            </div>
            <p class="text-sm text-gray-600">Full integration</p>
          </div>
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 h-24 flex items-center justify-center">
              <span class="text-lg font-semibold text-gray-700">Google Classroom</span>
            </div>
            <p class="text-sm text-gray-600">Full integration</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Join 300+ K-12 Schools Saving Time and Money
          </h2>
          <p class="text-xl text-primary-100 mb-8">
            See how SchoolVision.AI can transform your school in just 30 minutes
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/demo">
              <Button size="lg" variant="secondary">
                Schedule Your Demo
              </Button>
            </router-link>
            <router-link to="/roi-calculator">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-primary-700">
                Calculate ROI
              </Button>
            </router-link>
          </div>
          <p class="mt-8 text-primary-200">
            No credit card required • Setup in days, not months • Cancel anytime
          </p>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { Container, Card, Button } from '../../components/ui'
</script>