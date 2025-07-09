<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-purple-700 to-purple-900 text-white py-20">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="text-sm font-semibold uppercase tracking-wider text-purple-200 mb-4">HIGHER EDUCATION SOLUTIONS</div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
              Empower Your University with Campus Intelligence
            </h1>
            <p class="text-xl text-purple-100 mb-8">
              From community colleges to research universities, SchoolVision.AI helps 150+ higher ed 
              institutions improve retention, streamline operations, and enhance campus life.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/demo">
                <Button size="lg" variant="secondary">
                  Request University Demo
                </Button>
              </router-link>
              <router-link to="/library">
                <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-purple-700">
                  View Case Studies
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
                    <p class="font-semibold">15% Higher Retention</p>
                    <p class="text-sm text-purple-200">Early intervention saves students</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold">40% Less Administrative Time</p>
                    <p class="text-sm text-purple-200">Automated workflows & reporting</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold">$2M+ Annual Savings</p>
                    <p class="text-sm text-purple-200">Average for 10,000+ students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Challenges Section -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Modern Challenges Require Modern Solutions
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Higher education faces unique challenges. SchoolVision.AI provides the intelligence you need.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <div class="p-6">
              <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Retention Crisis</h3>
              <p class="text-gray-600 mb-4">40% of students don't complete their degree. Early warning signs often go unnoticed.</p>
              <p class="text-sm font-medium text-primary-600">→ Predictive retention analytics</p>
            </div>
          </Card>
          
          <Card>
            <div class="p-6">
              <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Budget Constraints</h3>
              <p class="text-gray-600 mb-4">Shrinking budgets demand doing more with less while maintaining quality.</p>
              <p class="text-sm font-medium text-primary-600">→ Operational efficiency tools</p>
            </div>
          </Card>
          
          <Card>
            <div class="p-6">
              <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Student Engagement</h3>
              <p class="text-gray-600 mb-4">Remote and hybrid learning makes it harder to track and engage students.</p>
              <p class="text-sm font-medium text-primary-600">→ Multi-modal engagement tracking</p>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Solutions for Higher Ed -->
    <section class="py-16">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Solutions for Higher Education
          </h2>
          <p class="text-xl text-gray-600">
            From enrollment to graduation, we've got you covered
          </p>
        </div>

        <div class="space-y-16">
          <!-- Student Success Suite -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Student Success Suite</h3>
              <p class="text-gray-600 mb-6">
                Identify at-risk students before it's too late. Our AI analyzes attendance patterns, 
                engagement metrics, and academic performance to predict retention risks with 87% accuracy.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Early Alert System</p>
                    <p class="text-sm text-gray-600">Automatic notifications to advisors when students show risk indicators</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">360° Student View</p>
                    <p class="text-sm text-gray-600">Complete picture including academics, engagement, and wellness</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Intervention Recommendations</p>
                    <p class="text-sm text-gray-600">AI-suggested actions for advisors based on success patterns</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-100 rounded-lg p-8">
              <div class="bg-gradient-to-br from-purple-100 to-purple-200 h-64 rounded-lg flex items-center justify-center">
                <p class="text-purple-600 font-semibold">Student Success Dashboard</p>
              </div>
            </div>
          </div>

          <!-- Campus Operations -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 bg-gray-100 rounded-lg p-8">
              <div class="bg-gradient-to-br from-purple-100 to-purple-200 h-64 rounded-lg flex items-center justify-center">
                <p class="text-purple-600 font-semibold">Campus Operations Dashboard</p>
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Smart Campus Operations</h3>
              <p class="text-gray-600 mb-6">
                Optimize everything from classroom utilization to dining services. 
                Make data-driven decisions that save money and improve campus life.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Space Optimization</p>
                    <p class="text-sm text-gray-600">AI-powered scheduling maximizes classroom and facility usage</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Dining Analytics</p>
                    <p class="text-sm text-gray-600">Reduce food waste by 40% with predictive meal planning</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Energy Management</p>
                    <p class="text-sm text-gray-600">Smart building controls based on occupancy patterns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Safety & Compliance -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Campus Safety & Compliance</h3>
              <p class="text-gray-600 mb-6">
                Create a safer campus while maintaining compliance with federal regulations. 
                Our platform helps you meet Clery Act, Title IX, and FERPA requirements effortlessly.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Automated Compliance Reporting</p>
                    <p class="text-sm text-gray-600">Generate Clery Act and Title IX reports with one click</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">24/7 Safety Monitoring</p>
                    <p class="text-sm text-gray-600">AI-powered threat detection and emergency response</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Contact Tracing</p>
                    <p class="text-sm text-gray-600">Quick identification for health and safety incidents</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-100 rounded-lg p-8">
              <div class="bg-gradient-to-br from-purple-100 to-purple-200 h-64 rounded-lg flex items-center justify-center">
                <p class="text-purple-600 font-semibold">Safety & Compliance Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Success Story -->
    <section class="py-16 bg-purple-50">
      <Container>
        <div class="max-w-4xl mx-auto">
          <Card class="overflow-hidden">
            <div class="p-8 md:p-12">
              <div class="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-2">
                CASE STUDY
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                State University Increases Retention by 15%
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-3">The Challenge</h4>
                  <p class="text-gray-600">
                    State University struggled with a 35% dropout rate and had no way to identify 
                    at-risk students until it was too late. Manual tracking was impossible with 
                    25,000 students across 5 campuses.
                  </p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-3">The Solution</h4>
                  <p class="text-gray-600">
                    SchoolVision.AI's predictive analytics identified at-risk students in their 
                    first semester. Automated alerts enabled timely interventions by advisors 
                    and support staff.
                  </p>
                </div>
              </div>
              
              <div class="bg-purple-100 rounded-lg p-6 mb-8">
                <h4 class="font-semibold text-gray-900 mb-4">Results After One Year:</h4>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <p class="text-3xl font-bold text-purple-600">15%</p>
                    <p class="text-sm text-gray-600">Increase in Retention</p>
                  </div>
                  <div>
                    <p class="text-3xl font-bold text-purple-600">2,100</p>
                    <p class="text-sm text-gray-600">Students Saved</p>
                  </div>
                  <div>
                    <p class="text-3xl font-bold text-purple-600">$8.4M</p>
                    <p class="text-sm text-gray-600">Revenue Retained</p>
                  </div>
                  <div>
                    <p class="text-3xl font-bold text-purple-600">6 mo</p>
                    <p class="text-sm text-gray-600">ROI Timeline</p>
                  </div>
                </div>
              </div>
              
              <blockquote class="text-gray-700 italic mb-6">
                "SchoolVision.AI didn't just give us data - it gave us actionable insights. 
                We can now intervene before students fall through the cracks. The impact on 
                student success and our bottom line has been transformational."
              </blockquote>
              <div>
                <p class="font-semibold text-gray-900">Dr. Michael Chen</p>
                <p class="text-gray-600">VP of Student Success, State University</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Integration Partners -->
    <section class="py-16">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Integrates with Your Campus Ecosystem
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            SchoolVision.AI seamlessly connects with your existing systems
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 h-24 flex items-center justify-center">
              <span class="text-lg font-semibold text-gray-700">Banner</span>
            </div>
            <p class="text-sm text-gray-600">Student Information System</p>
          </div>
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 h-24 flex items-center justify-center">
              <span class="text-lg font-semibold text-gray-700">Canvas</span>
            </div>
            <p class="text-sm text-gray-600">Learning Management</p>
          </div>
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 h-24 flex items-center justify-center">
              <span class="text-lg font-semibold text-gray-700">Workday</span>
            </div>
            <p class="text-sm text-gray-600">HR & Finance</p>
          </div>
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 h-24 flex items-center justify-center">
              <span class="text-lg font-semibold text-gray-700">Blackboard</span>
            </div>
            <p class="text-sm text-gray-600">Learning Management</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-purple-700 to-purple-900 text-white">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Campus?
          </h2>
          <p class="text-xl text-purple-100 mb-8">
            Join 150+ colleges and universities using SchoolVision.AI to improve 
            student success and operational efficiency
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/demo">
              <Button size="lg" variant="secondary">
                Schedule University Demo
              </Button>
            </router-link>
            <a href="https://calendly.com/schoolvision/consultation" target="_blank">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-purple-700">
                Book Consultation Call
              </Button>
            </a>
          </div>
          <p class="mt-8 text-purple-200">
            Trusted by State Universities, Community Colleges, and Ivy League Institutions
          </p>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { Container, Card, Button } from '../../components/ui'
</script>