<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              Why SchoolVision AI for Higher Education?
            </h1>
            <p class="text-xl text-purple-100 mb-6">
              Empower your university with AI-driven insights to improve student success, streamline operations, and enhance campus life
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/demo">
                <Button size="lg" variant="secondary">Schedule Demo</Button>
              </router-link>
              <router-link to="/roi-calculator">
                <Button size="lg" variant="outline" class="border-white text-white hover:bg-white hover:text-purple-700">
                  Calculate ROI
                </Button>
              </router-link>
            </div>
          </div>
          <div class="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop" 
              alt="University campus"
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
            Designed for the Complexity of Higher Education
          </h2>
          <p class="text-xl text-gray-600">
            From community colleges to research universities, we understand your unique challenges
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card class="text-center p-6">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Increase Retention by 18%
            </h3>
            <p class="text-gray-600">
              Early warning systems identify at-risk students before they drop out
            </p>
          </Card>

          <Card class="text-center p-6">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Streamline Enrollment
            </h3>
            <p class="text-gray-600">
              AI-powered course recommendations and automated waitlist management
            </p>
          </Card>

          <Card class="text-center p-6">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Save $2.3M Annually
            </h3>
            <p class="text-gray-600">
              Average savings for a mid-size university through operational efficiency
            </p>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Use Cases by Department -->
    <section class="py-16 bg-gray-50">
      <Container>
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          Solutions Across Every Department
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Academic Affairs -->
          <Card class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <svg class="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Academic Affairs
            </h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Course attendance tracking across large lectures
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                AI-assisted grading for essays and assignments
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Predictive analytics for student performance
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Automated academic probation warnings
              </li>
            </ul>
          </Card>

          <!-- Student Services -->
          <Card class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <svg class="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Student Services
            </h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Dining hall traffic optimization
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Mental health resource recommendations
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Housing assignment optimization
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Student engagement tracking
              </li>
            </ul>
          </Card>

          <!-- Campus Operations -->
          <Card class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <svg class="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Campus Operations
            </h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Energy usage optimization in buildings
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Parking management and predictions
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Facility maintenance scheduling
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Campus safety monitoring
              </li>
            </ul>
          </Card>

          <!-- Financial Aid -->
          <Card class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <svg class="w-6 h-6 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Financial Aid & Bursar
            </h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Automated fraud detection in meal plans
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Financial aid optimization recommendations
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Payment plan success predictions
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Student account reconciliation
              </li>
            </ul>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Success Story -->
    <section class="py-16">
      <Container>
        <Card class="max-w-4xl mx-auto p-8 bg-gradient-to-r from-purple-50 to-blue-50">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                State University Success Story
              </h3>
              <blockquote class="text-lg text-gray-700 italic mb-4">
                "SchoolVision AI helped us increase our retention rate from 72% to 85% in just two years. The early warning system identified struggling students we would have missed."
              </blockquote>
              <div class="text-gray-600">
                <div class="font-semibold">Dr. Sarah Chen</div>
                <div>VP of Student Success, State University</div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 shadow">
                <div class="text-2xl font-bold text-green-600">18%</div>
                <div class="text-gray-600">Increase in Retention</div>
              </div>
              <div class="bg-white rounded-lg p-4 shadow">
                <div class="text-2xl font-bold text-blue-600">$1.8M</div>
                <div class="text-gray-600">Annual Savings</div>
              </div>
              <div class="bg-white rounded-lg p-4 shadow">
                <div class="text-2xl font-bold text-purple-600">23%</div>
                <div class="text-gray-600">Improvement in 4-Year Graduation Rate</div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-purple-700 text-white">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Institution Today
          </h2>
          <p class="text-xl mb-8 text-purple-100">
            Join leading universities using AI to improve student outcomes and operational efficiency
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/demo">
              <Button size="lg" variant="secondary">
                Get a Personalized Demo
              </Button>
            </router-link>
            <router-link to="/contact">
              <Button size="lg" variant="outline" class="border-white text-white hover:bg-white hover:text-purple-700">
                Contact Our Team
              </Button>
            </router-link>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { Container, Card, Button } from '../components/ui'
</script>